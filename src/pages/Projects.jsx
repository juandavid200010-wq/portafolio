import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import GlowingEffect from '../components/GlowingEffect.jsx'
import Meteors from '../components/Meteors.jsx'

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold">Proyectos</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/proyectos/${p.id}`}
            className="relative block min-h-[18rem] rounded-2xl border border-[#262a33] p-2 transition-transform duration-300 ease-out hover:scale-105 md:rounded-3xl md:p-3"
          >
            <GlowingEffect />
            <div className="relative flex h-full min-h-[16rem] flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#181b22] p-8">
              <div className="relative z-10">
                <h2 className="mb-3 text-2xl font-semibold">{p.name}</h2>
                <p className="text-base text-[#9aa0ae]">{p.summary}</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#0f1115] px-3 py-1 text-xs text-[#9aa0ae]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Meteors number={15} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}