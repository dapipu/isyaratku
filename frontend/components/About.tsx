export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#ffc400]" />

            <div className="relative h-[420px] overflow-hidden rounded-[30px] bg-[#edf7ff]">
              <div className="flex h-full items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white px-6 py-5 shadow-xl">
              <p className="text-3xl font-extrabold text-[#1769e0]">
                50+
              </p>

              <p className="text-sm text-slate-500">
                Projects Completed
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-bold text-[#f5b900]">
              ABOUT ME
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#10213d]">
              Turning ideas into
              <br />
              digital experiences.
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              I&apos;m a freelance web designer and developer
              passionate about creating websites that look great,
              feel intuitive, and help businesses grow.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              My focus is combining thoughtful design with clean,
              modern technology to create websites that people
              actually enjoy using.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#1769e0] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#0f5ac4]"
            >
              More About Me →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}