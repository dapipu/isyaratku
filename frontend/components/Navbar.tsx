export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-extrabold tracking-tight text-[#10213d]"
          >
            ISYARATKU
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="font-medium text-[#10213d] transition hover:text-[#1769e0]"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-[#10213d] transition hover:text-[#1769e0]"
            >
              About
            </a>

            <a
              href="#services"
              className="font-medium text-[#10213d] transition hover:text-[#1769e0]"
            >
              Services
            </a>

            <a
              href="#work"
              className="font-medium text-[#10213d] transition hover:text-[#1769e0]"
            >
              Work
            </a>

            <a
              href="#process"
              className="font-medium text-[#10213d] transition hover:text-[#1769e0]"
            >
              Process
            </a>

            <a
              href="#blog"
              className="font-medium text-[#10213d] transition hover:text-[#1769e0]"
            >
              Blog
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-[#ffc400] px-6 py-3 font-bold text-[#10213d] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffd43d]"
          >
            Mulai Belajar →
          </a>

        </div>
      </nav>
    </header>
  );
}