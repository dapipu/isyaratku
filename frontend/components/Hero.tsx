export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#edf7ff]"
    >
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center px-6 lg:grid-cols-2">

        <div>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight">
            let's go learn sign language together!
            <br />

            <span className="text-blue-600">
              Because Every Movement Has Meaning
            </span>

            <br />

            <span className="text-yellow-400">
              
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-600">
            I create beautiful, user-friendly websites that help
            brands stand out and grow online.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white"
            >
              View My Work →
            </a>

            <button className="rounded-full bg-white px-7 py-4 font-bold shadow">
              ▶ Watch Intro
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/image/modelhero.jpg"
            alt="Hero"
            className="rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}