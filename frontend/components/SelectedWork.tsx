const projects = [
  {
    title: "Bloom & Wild",
    category: "E-Commerce Website",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Northland Studio",
    category: "Creative Agency Website",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Pure Balance",
    category: "Wellness Website",
    image: "/projects/project-3.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold tracking-wide text-[#f5b900]">
              SELECTED WORK
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#10213d]">
              A few recent
              <br />
              favorites
            </h2>

            <div className="mt-3 text-3xl text-[#1769e0]">
              〰
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Every project is unique.
              <br />
              Here are a few I&apos;m
              <br />
              proud to have designed.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              See All Projects
              <span className="ml-3">→</span>
            </a>
          </div>

          {/* PROJECT CARDS */}
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">

                  {/* Temporary image placeholder */}
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-inner">
                    <div className="absolute left-5 top-5 h-28 w-40 rounded-lg bg-white p-2 shadow-xl">
                      <div className="h-full rounded bg-slate-100">
                        <div className="h-5 border-b border-slate-200" />

                        <div className="p-3">
                          <div className="h-2 w-16 rounded bg-slate-300" />
                          <div className="mt-2 h-2 w-24 rounded bg-slate-200" />

                          <div className="mt-5 grid grid-cols-3 gap-1">
                            <div className="h-8 rounded bg-slate-300" />
                            <div className="h-8 rounded bg-slate-200" />
                            <div className="h-8 rounded bg-slate-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-bold text-[#10213d]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {project.category}
                    </p>
                  </div>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffc400] text-lg font-bold transition group-hover:rotate-45">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Slider dots */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="h-2 w-6 rounded-full bg-[#1769e0]" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}