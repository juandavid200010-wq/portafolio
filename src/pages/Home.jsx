import { Link } from 'react-router-dom'
import BackgroundBeams from '../components/BackgroundBeams.jsx'


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
    <div className="relative overflow-hidden rounded-2xl bg-neutral-950 antialiased">
      <BackgroundBeams />

      <div className="relative z-10 px-6 py-20 md:px-12">
        <section className="mx-auto mb-20 max-w-2xl text-center">
          <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            Hola, soy Juan David
          </h1>
          <p className="mx-auto my-4 max-w-lg text-sm text-neutral-500 md:text-base">
            Desarrollador web. Construyo aplicaciones con HTML, CSS, JavaScript
            y React.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/proyectos"
              className="rounded-lg bg-[#6c8cff] px-5 py-3 font-semibold text-[#0f1115]"
            >
              Ver proyectos
            </Link>
            <Link
              to="/contacto"
              className="rounded-lg border border-neutral-800 px-5 py-3 font-semibold hover:border-[#6c8cff]"
            >
              Contacto
            </Link>
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-2xl">
          <h2 className="mb-3 text-2xl font-semibold">Sobre mí</h2>
          <p className="text-[#9aa0ae] bg-[#181b22] p-4 rounded-lg border border-[#262a33]">
            Soy economista y desarrollador web en formación, orientado a aplicaciones web con
            interfaz amigable para el usuario y buenas prácticas de desarrollo, con conocimientos en HTML, CSS, JavaScript, TypeScript, React y Node.js.
            He desarrollado proyectos propios que incluyen aplicaciones con autenticación
            y bases de datos en la nube, APIs REST con PostgreSQL y un chat con inteligencia artificial.
            También he trabajado con Firebase y tengo conocimientos básicos de AWS.
            Me encantaría formar parte de un equipo de desarrollo donde pueda aplicar mis habilidades y seguir aprendiendo.
          </p>
        </section>

        <section className="mx-auto max-w-2xl">
          <h2 className="mb-3 text-2xl font-semibold">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-[#181b22]/80 px-4 py-2 text-sm text-[#9aa0ae]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}