
"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const materials = [
  {
    title: "Learning Materials",
    category: "LEARN SIGN LANGUAGE",
    description:
      "Learn various sign language vocabulary and movements through easy-to-understand materials.",
    icon: "📚",
    href: "/material",
  },
  {
    title: "AI Teacher",
    category: "LEARN WITH AI",
    description:
      "Interact with AI Teacher for a more interactive and personalized sign language learning experience.",
    icon: "🤖",
    href: "/ai-teacher",
  },
  {
    title: "Movement Detection",
    category: "INTERACTIVE PRACTICE",
    description:
      "Use your camera to practice sign language movements with the help of computer vision technology.",
    icon: "✋",
    href: "/deteksi-gerakan",
  },
];

export default function Material() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ==========================================
  // MOBILE SLIDER
  // ==========================================

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards =
      slider.querySelectorAll<HTMLElement>(
        "[data-material-card]"
      );

    if (!cards.length) return;

    const sliderCenter =
      slider.scrollLeft + slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2;

      const distance = Math.abs(
        sliderCenter - cardCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // ==========================================
  // GO TO CARD - MOBILE
  // ==========================================

  const goToCard = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards =
      slider.querySelectorAll<HTMLElement>(
        "[data-material-card]"
      );

    const card = cards[index];

    if (!card) return;

    slider.scrollTo({
      left:
        card.offsetLeft -
        (slider.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section
      id="material"
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* ==========================================
            MAIN LAYOUT
        ========================================== */}

        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-[190px_1fr]
            lg:gap-10

            xl:grid-cols-[210px_1fr]
            xl:gap-12
          "
        >

         
{/* ==========================================
    LEFT TEXT
========================================== */}

<div className="shrink-0">

  {/* LBP METHOD */}
  <h2
    className="
      text-3xl
      font-extrabold
      leading-[1.05]
      tracking-[-0.03em]
      text-[#10213d]

      sm:text-4xl

      lg:text-[2rem]
      xl:text-[2.15rem]
    "
  >
    LBP Method
  </h2>


  {/* LEARN BEST PRACTICE */}
  <h1
    className="
      mt-3
      text-xl
      font-extrabold
      leading-[1.05]
      tracking-[-0.03em]
      text-[#10213d]

      sm:text-2xl

      lg:text-[1.7rem]
      xl:text-[1.85rem]
    "
  >
    <span>Learn. </span>
    <span>Best. </span>
    <span>Practice.</span>
  </h1>


  

  {/* DESCRIPTION */}

  <p
    className="
      mt-4
      max-w-[220px]
      text-xs
      leading-5
      text-slate-500

      sm:text-sm
      sm:leading-6

      lg:text-xs
      lg:leading-5

      xl:text-sm
      xl:leading-6
    "
  >
    Explore ISYARATKU features designed
    to help you learn sign language in
    a simple and interactive way.
  </p>

</div>

 {/* ==========================================
              RIGHT CARDS
          ========================================== */}

          <div className="min-w-0">

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex
                snap-x
                snap-mandatory
                gap-3
                overflow-x-auto
                pb-3

                [-ms-overflow-style:none]
                [scrollbar-width:none]

                [&::-webkit-scrollbar]:hidden

                /* DESKTOP:
                   tidak slider */
                lg:grid
                lg:grid-cols-3
                lg:gap-5
                lg:overflow-visible
                lg:pb-0
              "
            >

              {materials.map((material) => (
                <Link
                  key={material.title}
                  href={material.href}
                  data-material-card
                  className="
                    group
                    block

                    /* ======================
                       MOBILE
                    ====================== */

                    w-[76%]
                    shrink-0
                    snap-center

                    /* ======================
                       CARD
                    ====================== */

                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-lg

                    /* ======================
                       DESKTOP
                    ====================== */

                    lg:w-auto
                    lg:shrink
                    lg:snap-none
                  "
                >

                  {/* ==================================
                      ICON AREA
                  ================================== */}

                  <div
                    className="
                      relative
                      flex
                      h-32
                      items-center
                      justify-center
                      overflow-hidden
                      bg-[#edf7ff]

                      sm:h-40

                      lg:h-36
                      xl:h-40
                    "
                  >

                    {/* Decorative Circle */}

                    <div
                      className="
                        absolute
                        -right-8
                        -top-8
                        h-24
                        w-24
                        rounded-full
                        bg-[#ffc400]/30

                        transition
                        duration-500

                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-8
                        -left-6
                        h-24
                        w-24
                        rounded-full
                        bg-[#1769e0]/10

                        transition
                        duration-500

                        group-hover:scale-125
                      "
                    />

                    {/* ICON */}

                    <div
                      className="
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        text-3xl
                        shadow-md

                        transition
                        duration-300

                        group-hover:scale-105
                        group-hover:rotate-2

                        sm:h-20
                        sm:w-20
                        sm:text-4xl

                        lg:h-16
                        lg:w-16
                        lg:text-3xl

                        xl:h-18
                        xl:w-18
                      "
                    >
                      {material.icon}
                    </div>

                  </div>


                  {/* ==================================
                      CARD CONTENT
                  ================================== */}

                  <div
                    className="
                      p-4

                      sm:p-5

                      lg:p-4
                      xl:p-5
                    "
                  >

                    {/* CATEGORY */}

                    <p
                      className="
                        text-[9px]
                        font-bold
                        tracking-[0.1em]
                        text-[#1769e0]

                        sm:text-[10px]
                      "
                    >
                      {material.category}
                    </p>


                    {/* TITLE */}

                    <h3
                      className="
                        mt-2
                        text-base
                        font-bold
                        leading-tight
                        text-[#10213d]

                        sm:text-lg

                        lg:text-base
                        xl:text-lg
                      "
                    >
                      {material.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-slate-500

                        sm:text-sm
                        sm:leading-6

                        lg:text-[11px]
                        lg:leading-5

                        xl:text-xs
                      "
                    >
                      {material.description}
                    </p>


                    {/* FOOTER */}

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between

                        lg:mt-4
                      "
                    >

                      <span
                        className="
                          text-xs
                          font-bold
                          text-[#1769e0]

                          sm:text-sm
                        "
                      >
                        Start Learning →
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[#ffc400]
                          text-sm
                          font-bold

                          transition
                          duration-300

                          group-hover:rotate-45

                          sm:h-9
                          sm:w-9
                        "
                      >
                        →
                      </span>

                    </div>

                  </div>

                </Link>
              ))}

            </div>


            {/* ==========================================
                MOBILE INDICATOR ONLY
            ========================================== */}

            <div
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-2

                lg:hidden
              "
            >

              {materials.map(
                (material, index) => (
                  <button
                    key={material.title}
                    type="button"
                    aria-label={`Go to ${material.title}`}
                    onClick={() =>
                      goToCard(index)
                    }
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        activeIndex === index
                          ? "w-5 bg-[#1769e0]"
                          : "w-1.5 bg-slate-300"
                      }
                    `}
                  />
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
