import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Proyectos</h1>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/proyectos/${p.id}`}
            className="rounded-xl border border-[#262a33] bg-[#181b22] p-5 transition hover:border-[#6c8cff]"
          >
            <h2 className="mb-2 text-xl font-semibold">{p.name}</h2>
            <p className="mb-4 text-[#9aa0ae]">{p.summary}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#0f1115] px-3 py-1 text-xs text-[#9aa0ae]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}