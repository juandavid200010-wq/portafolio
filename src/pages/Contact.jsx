export default function Contact() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">Contacto</h1>
      <p className="mb-6 max-w-xl text-[#9aa0ae]">
        ¿Quieres hablar sobre una oportunidad? Escríbeme.
      </p>
      <ul className="space-y-3">
        <li>
          <a
            href="mailto:juan.david200010@gmail.com"
            className="text-[#6c8cff] hover:underline"
          >
            juan.david200010@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/juandavid200010-wq"
            target="_blank"
            rel="noreferrer"
            className="text-[#6c8cff] hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="/CV-Juan-David.pdf"
            download
            className="text-[#6c8cff] hover:underline"
          >
            Descargar hoja de vida (PDF)
          </a>
        </li>
      </ul>
    </section>
  )
}