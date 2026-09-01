
"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Menandakan bahwa user sedang melakukan klik navigasi
  const isClickScrolling = useRef(false);

  const navigation = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Material", "#material"],
     ["Promo", "#promo"],
    
  ];

  // =====================================================
  // DETECT SECTION SAAT USER SCROLL MANUAL
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      // Jangan ubah active saat smooth scroll dari klik
      if (isClickScrolling.current) return;

      const navbarOffset = 120;

      let closestSection = "Home";
      let closestDistance = Infinity;

      navigation.forEach(([label, href]) => {
        const section = document.querySelector(href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        // Hanya pertimbangkan section yang sudah
        // melewati area navbar
        if (rect.top <= navbarOffset) {
          const distance = Math.abs(rect.top - navbarOffset);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = label;
          }
        }
      });

      setActive(closestSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // UPDATE POSISI PILL
  // =====================================================

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const activeIndex = navigation.findIndex(
      ([label]) => label === active
    );

    const activeItem = itemRefs.current[activeIndex];

    if (!activeItem) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const left = itemRect.left - navRect.left;

    nav.style.setProperty(
      "--pill-left",
      `${left}px`
    );

    nav.style.setProperty(
      "--pill-width",
      `${itemRect.width}px`
    );
  }, [active]);

  // =====================================================
  // RECALCULATE PILL KETIKA WINDOW BERUBAH UKURAN
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      const nav = navRef.current;

      if (!nav) return;

      const activeIndex = navigation.findIndex(
        ([label]) => label === active
      );

      const activeItem =
        itemRefs.current[activeIndex];

      if (!activeItem) return;

      const navRect =
        nav.getBoundingClientRect();

      const itemRect =
        activeItem.getBoundingClientRect();

      nav.style.setProperty(
        "--pill-left",
        `${itemRect.left - navRect.left}px`
      );

      nav.style.setProperty(
        "--pill-width",
        `${itemRect.width}px`
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [active]);

  // =====================================================
  // CLICK MENU
  // =====================================================

  const handleNavigation = (
    label: string,
    href: string
  ) => {
    const section =
      document.querySelector(href);

    if (!section) return;

    // Tutup mobile menu
    setIsOpen(false);

    // LANGSUNG pindahkan pill
    setActive(label);

    // Kunci perubahan active dari scroll
    isClickScrolling.current = true;

    // Scroll ke section
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // =================================================
    // UNLOCK SETELAH SMOOTH SCROLL SELESAI
    // =================================================

    let unlockTimeout: ReturnType<
      typeof setTimeout
    >;

    const unlock = () => {
      clearTimeout(unlockTimeout);

      isClickScrolling.current = false;

      // Pastikan tetap berada di menu yang diklik
      setActive(label);

      window.removeEventListener(
        "scrollend",
        unlock
      );
    };

    // Browser modern mendukung scrollend
    window.addEventListener(
      "scrollend",
      unlock,
      { once: true }
    );

    // Fallback supaya tetap bekerja
    // di browser yang tidak punya scrollend
    unlockTimeout = setTimeout(() => {
      unlock();
    }, 900);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-b border-[#10213d]/8 bg-white/90 backdrop-blur-md">

        {/* =================================================
            NAVBAR CONTAINER
        ================================================= */}

        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();

              handleNavigation(
                "Home",
                "#home"
              );
            }}
            className="group flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10213d] text-xs font-bold text-white transition-transform duration-200 group-hover:scale-105 sm:h-9 sm:w-9 sm:rounded-xl sm:text-sm">
              I
            </div>

            <span className="text-lg font-extrabold tracking-[-0.03em] text-[#10213d] sm:text-xl">
              ISYARATKU
            </span>
          </a>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            ref={navRef}
            className="
              relative hidden
              items-center gap-1
              rounded-full
              border border-[#10213d]/8
              bg-[#f8fafc]
              p-1
              md:flex
            "
            style={
              {
                "--pill-left": "4px",
                "--pill-width": "0px",
              } as React.CSSProperties
            }
          >

            {/* =============================================
                MOVING ACTIVE PILL
            ============================================= */}

            <div
              className="
                pointer-events-none
                absolute
                top-1
                bottom-1
                rounded-full
                bg-white
                shadow-sm

                transition-[left,width]
                duration-300
                ease-out
              "
              style={{
                left: "var(--pill-left)",
                width: "var(--pill-width)",
              }}
            />

            {/* =============================================
                MENU ITEMS
            ============================================= */}

            {navigation.map(
              ([label, href], index) => (
                <a
                  key={label}
                  ref={(element) => {
                    itemRefs.current[index] =
                      element;
                  }}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();

                    handleNavigation(
                      label,
                      href
                    );
                  }}
                  className={`
                    relative z-10
                    rounded-full
                    px-4 py-2
                    text-sm font-medium
                    transition-colors duration-200

                    ${
                      active === label
                        ? "text-[#10213d]"
                        : "text-[#64748b] hover:text-[#10213d]"
                    }
                  `}
                >
                  {label}
                </a>
              )
            )}
          </div>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <a
            href="#contact"
            className="
              hidden items-center gap-2
              rounded-full
              bg-[#1769e0]
              px-5 py-2.5
              text-sm font-semibold
              text-white
              transition-all duration-200

              hover:-translate-y-0.5
              hover:bg-[#125bc4]
              hover:shadow-lg
              hover:shadow-[#1769e0]/20

              sm:flex
            "
          >
            Mulai Belajar
            <span>→</span>
          </a>


          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-[#10213d]/10
              bg-white
              text-[#10213d]
              transition
              hover:bg-[#f8fafc]
              md:hidden
            "
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">

              <span
                className={`
                  h-0.5 w-full
                  rounded-full
                  bg-current
                  transition-all duration-200

                  ${
                    isOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-0.5 w-full
                  rounded-full
                  bg-current
                  transition-all duration-200

                  ${
                    isOpen
                      ? "opacity-0"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-0.5 w-full
                  rounded-full
                  bg-current
                  transition-all duration-200

                  ${
                    isOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }
                `}
              />

            </div>
          </button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`
            overflow-hidden
            border-t border-[#10213d]/8
            bg-white
            transition-all duration-300
            md:hidden

            ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            {/* MOBILE NAV */}

            <div className="flex flex-col gap-1">

              {navigation.map(
                ([label, href]) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      handleNavigation(
                        label,
                        href
                      )
                    }
                    className={`
                      rounded-xl
                      px-4 py-3
                      text-left
                      text-sm font-medium
                      transition-all duration-200

                      ${
                        active === label
                          ? "bg-[#edf7ff] text-[#1769e0]"
                          : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#10213d]"
                      }
                    `}
                  >
                    {label}
                  </button>
                )
              )}

            </div>


            {/* MOBILE CTA */}

            <a
              href="#contact"
              onClick={() =>
                setIsOpen(false)
              }
              className="
                mt-3 flex items-center
                justify-center gap-2
                rounded-xl
                bg-[#1769e0]
                px-5 py-3
                text-sm font-semibold
                text-white
                transition
                hover:bg-[#125bc4]
              "
            >
              Mulai Belajar
              <span>→</span>
            </a>

          </div>
        </div>

      </nav>
    </header>
  );
}
