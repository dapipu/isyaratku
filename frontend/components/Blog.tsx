const posts = [
  {
    title: "5 Things Every Great Website Needs",
    category: "WEB DESIGN",
  },
  {
    title: "How Good Design Builds Trust",
    category: "DESIGN",
  },
  {
    title: "Making Your Website Faster",
    category: "DEVELOPMENT",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-[#edf7ff] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-bold text-[#f5b900]">
              FROM THE BLOG
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#10213d]">
              Ideas & insights.
            </h2>
          </div>

          <a
            href="#"
            className="w-fit rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold shadow-sm"
          >
            View All Articles →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-yellow-100">
                <div className="flex h-full items-center justify-center text-5xl">
                  ✦
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold text-[#1769e0]">
                  {post.category}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-7 text-[#10213d]">
                  {post.title}
                </h3>

                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-bold text-[#1769e0]"
                >
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}