import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  isActive ? 'text-[#6c8cff]' : 'text-[#9aa0ae] hover:text-white'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-[#262a33] bg-[#181b22] px-6 py-4">
      <NavLink to="/" className="text-lg font-bold">
        Juan David
      </NavLink>
      <nav className="flex gap-5">
        <NavLink to="/" end className={linkClass}>Inicio</NavLink>
        <NavLink to="/proyectos" className={linkClass}>Proyectos</NavLink>
        <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
      </nav>
    </header>
  )
}