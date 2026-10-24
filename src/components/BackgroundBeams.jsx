import { motion } from 'motion/react'

const paths = Array.from({ length: 50 }, (_, i) => {
  const a = 380 - i * 5
  const b = 189 + i * 6
  const c = 312 - i * 5
  const d = 216 - i * 6
  const e = 152 - i * 5
  const f = 343 - i * 6
  const g = 616 - i * 5
  const h = 470 - i * 6
  const j = 684 - i * 5
  const k = 875 - i * 6
  return `M-${a} -${b}C-${a} -${b} -${c} ${d} ${e} ${f}C${g} ${h} ${j} ${k} ${j} ${k}`
})

const motionParams = paths.map(() => ({
  y2End: 93 + Math.random() * 8,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 10,
}))

export default function BackgroundBeams({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center ${className}`}
    >
      <svg
        className="absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, i) => (
          <path
            key={`base-${i}`}
            d={path}
            stroke="#ffffff"
            strokeOpacity="0.05"
            strokeWidth="0.5"
          />
        ))}
        {paths.map((path, i) => (
          <motion.path
            key={`beam-${i}`}
            d={path}
            stroke={`url(#beam-gradient-${i})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        <defs>
          {paths.map((_, i) => (
            <motion.linearGradient
              key={`grad-${i}`}
              id={`beam-gradient-${i}`}
              initial={{ x1: '0%', x2: '0%', y1: '0%', y2: '0%' }}
              animate={{
                x1: ['0%', '100%'],
                x2: ['0%', '95%'],
                y1: ['0%', '100%'],
                y2: ['0%', `${motionParams[i].y2End}%`],
              }}
              transition={{
                duration: motionParams[i].duration,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: motionParams[i].delay,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="32.5%" stopColor="#6344F5" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  )
}