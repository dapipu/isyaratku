
export default function Footer() {
  return (
    <footer id="contact">

     
{/* ==========================================
    CONTACT CTA
========================================== */}

<section className="relative overflow-hidden bg-[#1769e0] py-14 sm:py-16 lg:py-20">

  {/* Decorative Circles */}
  <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 sm:h-64 sm:w-64" />
  <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#ffc400]/20 sm:h-72 sm:w-72" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

    <div
      className="
        grid
        items-center
        gap-8

        md:grid-cols-2
        md:gap-10

        lg:grid-cols-[1fr_1.3fr]
        lg:gap-14
      "
    >

      {/* ==========================================
          LEFT CONTENT
      ========================================== */}

      <div>

        <p className="text-xs font-bold tracking-wide text-[#ffc400] sm:text-sm">
          WANT TO CONNECT?
        </p>

        <h2
          className="
            mt-3
            text-3xl
            font-extrabold
            leading-tight
            text-white

            sm:text-4xl
            lg:text-5xl
          "
        >
          Let&apos;s create
          <br />
          something together.
        </h2>

        <p
          className="
            mt-4
            max-w-md
            text-sm
            leading-6
            text-blue-100

            sm:text-base
          "
        >
          Have a question, suggestion, or idea?
          Send a message to the developer and
          let&apos;s connect.
        </p>

      </div>


      {/* ==========================================
          RIGHT CONTENT
      ========================================== */}

      <div className="w-full">

        {/* IMAGE */}

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/10
            p-2
            shadow-xl
            backdrop-blur-sm
          "
        >

          <div
            className="
              overflow-hidden
              rounded-2xl
              bg-white/10

              h-[190px]
              sm:h-[240px]
              lg:h-[280px]
            "
          >

            <img
              src="/image/footerimg.jpg"
              alt="ISYARATKU"
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>


        {/* SEND MESSAGE */}

        <a
          href="mailto:developer@isyaratku.com"
          className="
            group
            mt-4
            flex
            w-full
            items-center
            justify-between
            rounded-2xl
            bg-white
            px-5
            py-4
            text-[#10213d]
            shadow-lg
            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-xl

            sm:px-6
            sm:py-5
          "
        >

          <div>

            <p className="text-xs font-semibold uppercase tracking-wide text-[#1769e0]">
              Message for Developer
            </p>

            <p className="mt-1 text-sm font-bold sm:text-base">
              Send Message
            </p>

          </div>

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#ffc400]
              text-lg
              font-bold
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </a>

      </div>

    </div>

  </div>

</section>
      {/* ==========================================
          FOOTER
      ========================================== */}

      <div className="bg-[#10213d] text-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-12

            sm:px-6
            sm:py-14

            lg:px-10
          "
        >

          <div
            className="
              grid
              gap-10

              sm:grid-cols-2

              lg:grid-cols-4
              lg:gap-12
            "
          >

            {/* ==========================================
                BRAND
            ========================================== */}

            <div className="sm:col-span-2 lg:col-span-1">

              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                ISYARATKU
              </div>

              <p className="mt-1 text-[9px] tracking-[3px] text-blue-200">
                SIGN LANGUAGE PLATFORM
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
                An interactive platform designed to
                make sign language learning easier,
                more accessible, and engaging.
              </p>

              {/* SOCIAL */}

              <div className="mt-6 flex gap-3">

                {["f", "ig", "◎", "in"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-600
                      text-xs
                      transition

                      hover:border-[#ffc400]
                      hover:text-[#ffc400]
                    "
                  >
                    {social}
                  </a>
                ))}

              </div>

            </div>


            {/* ==========================================
                EXPLORE
            ========================================== */}

            <div>

              <h3 className="text-xs font-bold tracking-wide text-[#ffc400] sm:text-sm">
                EXPLORE
              </h3>

              <div className="mt-4 space-y-2.5 text-sm text-slate-300 sm:mt-5">

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="#home"
                >
                  Home
                </a>

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="#about"
                >
                  About
                </a>

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="#material"
                >
                  Materials
                </a>

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="#process"
                >
                  Process
                </a>

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="#blog"
                >
                  Blog
                </a>

              </div>

            </div>


            {/* ==========================================
                FEATURES
            ========================================== */}

            <div>

              <h3 className="text-xs font-bold tracking-wide text-[#ffc400] sm:text-sm">
                FEATURES
              </h3>

              <div className="mt-4 space-y-2.5 text-sm text-slate-300 sm:mt-5">

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="/material"
                >
                  Learning Materials
                </a>

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="/ai-teacher"
                >
                  AI Teacher
                </a>

                <a
                  className="block transition hover:translate-x-1 hover:text-white"
                  href="/deteksi-gerakan"
                >
                  Movement Detection
                </a>

              </div>

            </div>


            {/* ==========================================
                CONNECT
            ========================================== */}

            <div>

              <h3 className="text-xs font-bold tracking-wide text-[#ffc400] sm:text-sm">
                LET&apos;S CONNECT
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-300 sm:mt-5">

                <p className="break-all">
                  ✉ hello@isyaratku.com
                </p>

                <p>
                  ⌖ Indonesia
                </p>

                <p>
                  ☎ +62 812-3456-7890
                </p>

              </div>

            </div>

          </div>


          {/* ==========================================
              BOTTOM
          ========================================== */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-2
              border-t
              border-slate-700
              pt-5
              text-xs
              text-slate-400

              sm:mt-12
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p>
              © 2026 ISYARATKU. All rights reserved.
            </p>

            <p className="font-medium text-slate-300">
              Created by{" "}
              <span className="font-bold text-[#ffc400]">
                Qproject
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
