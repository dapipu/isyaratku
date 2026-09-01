
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#edf7ff]"
    >
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-0">

        {/* IMAGE */}
        <div className="order-1 relative w-full lg:order-2">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/image/modelhero.jpg"
              alt="Belajar bahasa isyarat"
              className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[520px]"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 max-w-xl lg:order-1">

          <h1 className="mt-2 text-[#10213d]">

            {/* Let's Go */}
            <span className="block text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              let's go learn sign language together!
            </span>

            {/* Because */}
            <span className="mt-3 block text-2xl font-bold leading-tight text-blue-600 sm:text-3xl lg:text-4xl">
              Because Every Movement Has Meaning
            </span>

          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Belajar bahasa isyarat dengan cara yang lebih mudah,
            interaktif, dan menyenangkan.
          </p>

          {/* BUTTON */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition duration-200 hover:bg-blue-700 sm:px-7 sm:py-4"
            >
              Mulai Belajar →
            </a>

            <button
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#10213d] shadow-sm transition duration-200 hover:shadow-md sm:px-7 sm:py-4"
            >
              ▶ Watch Intro
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
