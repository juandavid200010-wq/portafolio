import { memo, useCallback, useEffect, useRef } from 'react'
import { animate } from 'motion/react'

const GlowingEffect = memo(function GlowingEffect({
  spread = 40,
  proximity = 64,
  inactiveZone = 0.01,
  movementDuration = 2,
  borderWidth = 2,
}) {
  const containerRef = useRef(null)
  const lastPosition = useRef({ x: 0, y: 0 })
  const frameRef = useRef(0)

  const handleMove = useCallback(
    (e) => {
      if (!containerRef.current) return
      if (frameRef.current) cancelAnimationFrame(frameRef.current)

      frameRef.current = requestAnimationFrame(() => {
        const element = containerRef.current
        if (!element) return

        const { left, top, width, height } = element.getBoundingClientRect()
        const mouseX = e?.x ?? lastPosition.current.x
        const mouseY = e?.y ?? lastPosition.current.y
        if (e) lastPosition.current = { x: mouseX, y: mouseY }

        const center = [left + width * 0.5, top + height * 0.5]
        const distanceFromCenter = Math.hypot(
          mouseX - center[0],
          mouseY - center[1]
        )
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone

        if (distanceFromCenter < inactiveRadius) {
          element.style.setProperty('--active', '0')
          return
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity

        element.style.setProperty('--active', isActive ? '1' : '0')
        if (!isActive) return

        const currentAngle =
          parseFloat(element.style.getPropertyValue('--start')) || 0
        const targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
            Math.PI +
          90
        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
        const newAngle = currentAngle + angleDiff

        animate(currentAngle, newAngle, {
          duration: movementDuration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (value) => element.style.setProperty('--start', String(value)),
        })
      })
    },
    [inactiveZone, proximity, movementDuration]
  )

  useEffect(() => {
    const handleScroll = () => handleMove()
    const handlePointerMove = (e) => handleMove(e)

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.body.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener('scroll', handleScroll)
      document.body.removeEventListener('pointermove', handlePointerMove)
    }
  }, [handleMove])

  return (
    <div
      ref={containerRef}
      style={{
        '--spread': spread,
        '--start': '0',
        '--active': '0',
        '--glowingeffect-border-width': `${borderWidth}px`,
        '--repeating-conic-gradient-times': '5',
        '--gradient': `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
          radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
          radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
          radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
          repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #dd7bbb 0%,
            #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
            #5a922c calc(50% / var(--repeating-conic-gradient-times)),
            #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
            #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
          )`,
      }}
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
    >
      <div
        className={[
          'rounded-[inherit]',
          'after:content-[""] after:absolute after:rounded-[inherit]',
          'after:inset-[calc(-1*var(--glowingeffect-border-width))]',
          'after:[border:var(--glowingeffect-border-width)_solid_transparent]',
          'after:[background:var(--gradient)] after:[background-attachment:fixed]',
          'after:opacity-[var(--active)] after:transition-opacity after:duration-300',
          'after:[mask-clip:padding-box,border-box]',
          'after:[mask-composite:intersect]',
          'after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]',
        ].join(' ')}
      />
    </div>
  )
})

export default GlowingEffect