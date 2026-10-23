import { Link } from 'react-router-dom'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Firebase',
]

export default function Home() {
  return (
    <>
      <section className="py-16">
        <h1 className="mb-3 text-4xl font-bold">Hola, soy Juan David</h1>
        <p className="mb-6 max-w-2xl text-[#9aa0ae]">
          Desarrollador web. Construyo aplicaciones con HTML, CSS, JavaScript y
          React.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/proyectos"
            className="rounded-lg bg-[#6c8cff] px-5 py-3 font-semibold text-[#0f1115]"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contacto"
            className="rounded-lg border border-[#262a33] px-5 py-3 font-semibold hover:border-[#6c8cff]"
          >
            Contacto
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-semibold">Sobre mí</h2>
        <p className="max-w-2xl text-[#9aa0ae]">
          Economista de formación, ahora desarrollador web. Escribe aquí dos
          líneas sobre ti y lo que buscas.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Tecnologías</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-[#181b22] px-4 py-2 text-sm text-[#9aa0ae]"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}