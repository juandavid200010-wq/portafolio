import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-bold">Proyecto no encontrado</h1>
        <Link to="/proyectos" className="text-[#6c8cff]">
          ← Volver a proyectos
        </Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/proyectos" className="mb-6 inline-block text-[#6c8cff]">
        ← Volver a proyectos
      </Link>
      <h1 className="mb-3 text-3xl font-bold">{project.name}</h1>
      <p className="mb-6 max-w-2xl text-[#9aa0ae]">{project.description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-[#181b22] px-3 py-1 text-sm text-[#9aa0ae]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[#6c8cff] px-5 py-3 font-semibold text-[#0f1115]"
          >
            Ver demo
          </a>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-[#262a33] px-5 py-3 font-semibold hover:border-[#6c8cff]"
        >
          Ver código
        </a>
      </div>
    </article>
  )
}