export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-[#262a33] px-6 py-4 text-[#9aa0ae]">
      <p>© {new Date().getFullYear()} Juan David. Hecho con React.</p>
      <a
        href="https://github.com/juandavid200010-wq"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white"
      >
        GitHub
      </a>
    </footer>
  )
}