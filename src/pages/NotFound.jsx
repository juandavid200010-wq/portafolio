import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="mb-3 text-4xl font-bold">Página no encontrada</h1>
      <Link
        to="/"
        className="inline-block rounded-lg bg-[#6c8cff] px-5 py-3 font-semibold text-[#0f1115]"
      >
        Volver al inicio
      </Link>
    </div>
  )
}