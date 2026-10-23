import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f1115] text-[#e8eaf0]">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}