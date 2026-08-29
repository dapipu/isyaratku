export default function Footer() {
  return (
    <footer id="contact">

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#1769e0] py-16">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#ffc400]/20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="text-sm font-bold text-[#ffc400]">
                HAVE A PROJECT IN MIND?
              </p>

              <h2 className="mt-3 text-4xl font-extrabold text-white">
                Let&apos;s create
                <br />
                something amazing!
              </h2>

              <p className="mt-4 text-sm leading-6 text-blue-100">
                I&apos;d love to hear about it.
                Send me a message and let&apos;s get started together!
              </p>
            </div>

            <form className="rounded-2xl bg-white p-6 shadow-xl">

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm outline-none transition focus:border-[#1769e0]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm outline-none transition focus:border-[#1769e0]"
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows={4}
                className="mt-4 w-full rounded-2xl border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#1769e0]"
              />

              <button
                type="submit"
                className="mt-4 rounded-full bg-[#ffc400] px-7 py-3.5 text-sm font-bold text-[#10213d] transition hover:bg-[#ffd43d]"
              >
                Send Message →
              </button>

            </form>

          </div>
        </div>
      </section>


      {/* FOOTER */}
      <div className="bg-[#10213d] text-white">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}
            <div>
              <div className="text-4xl font-bold italic">
                Maya
              </div>

              <p className="mt-1 text-[9px] tracking-[3px] text-blue-200">
                WEB STUDIO
              </p>

              <p className="mt-6 max-w-xs text-sm leading-6 text-slate-300">
                Crafting beautiful, functional websites that help
                brands connect and grow.
              </p>

              <div className="mt-6 flex gap-3">
                {["f", "ig", "◎", "in"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 text-xs transition hover:border-[#ffc400] hover:text-[#ffc400]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-sm font-bold text-[#ffc400]">
                EXPLORE
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <a className="block hover:text-white" href="#about">
                  About Me
                </a>

                <a className="block hover:text-white" href="#services">
                  Services
                </a>

                <a className="block hover:text-white" href="#work">
                  My Work
                </a>

                <a className="block hover:text-white" href="#process">
                  Process
                </a>

                <a className="block hover:text-white" href="#blog">
                  Blog
                </a>
              </div>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="text-sm font-bold text-[#ffc400]">
                RESOURCES
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <a className="block hover:text-white" href="#">
                  FAQs
                </a>

                <a className="block hover:text-white" href="#">
                  Web Design Tips
                </a>

                <a className="block hover:text-white" href="#">
                  Brand Style Guide
                </a>

                <a className="block hover:text-white" href="#">
                  Useful Tools
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-bold text-[#ffc400]">
                LET&apos;S CONNECT
              </h3>

              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <p>✉ hello@yourwebsite.com</p>
                <p>⌖ Indonesia</p>
                <p>☎ +62 812-3456-7890</p>
              </div>
            </div>

          </div>

          <div className="mt-14 border-t border-slate-700 pt-6 text-xs text-slate-400">
            © 2026 Maya Web Studio. All rights reserved.
          </div>

        </div>
      </div>

    </footer>
  );
}
