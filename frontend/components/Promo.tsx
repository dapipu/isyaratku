
"use client";

import { useRef, useState } from "react";

const packages = [
  {
    name: "DAY",
    unit: "day",
    price: 10000,
    description: "Flexible access for short-term learning.",
    icon: "☀",
  },
  {
    name: "MONTH",
    unit: "month",
    price: 250000,
    description: "A better choice for consistent learning.",
    icon: "◐",
    popular: true,
  },
  {
    name: "YEAR",
    unit: "year",
    price: 2500000,
    description: "Best value for long-term learning.",
    icon: "✦",
  },
];

export default function Promo() {
  const [quantities, setQuantities] = useState({
    DAY: 1,
    MONTH: 1,
    YEAR: 1,
  });

  const [selected, setSelected] = useState("DAY");
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  // ==========================================
  // FORMAT RUPIAH
  // ==========================================

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  // ==========================================
  // UPDATE QUANTITY
  // ==========================================

  const updateQuantity = (
    name: string,
    amount: number
  ) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(
        1,
        prev[name as keyof typeof prev] + amount
      ),
    }));
  };

  // ==========================================
  // TOTAL PRICE
  // ==========================================

  const getTotalPrice = (
    price: number,
    name: string
  ) => {
    const quantity =
      quantities[name as keyof typeof quantities];

    return price * quantity;
  };

  // ==========================================
  // SLIDER SCROLL
  // ==========================================

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards =
      slider.querySelectorAll<HTMLElement>(
        "[data-promo-card]"
      );

    if (!cards.length) return;

    const center =
      slider.scrollLeft +
      slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.offsetLeft +
        card.offsetWidth / 2;

      const distance = Math.abs(
        center - cardCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // ==========================================
  // GO TO CARD
  // ==========================================

  const goToCard = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards =
      slider.querySelectorAll<HTMLElement>(
        "[data-promo-card]"
      );

    const card = cards[index];

    if (!card) return;

    slider.scrollTo({
      left:
        card.offsetLeft -
        (slider.clientWidth -
          card.offsetWidth) /
          2,
      behavior: "smooth",
    });

    setActiveIndex(index);
    setSelected(packages[index].name);
  };

  return (
    <section
      id="promo"
      className="
        scroll-mt-20
        bg-[#edf7ff]
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >

        {/* ==========================================
            HEADER + CARDS
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8

            md:grid-cols-[minmax(180px,0.65fr)_minmax(0,2fr)]

            lg:grid-cols-[minmax(200px,0.7fr)_minmax(0,2fr)]
            lg:gap-10

            xl:grid-cols-[220px_minmax(0,1fr)]
            xl:gap-12
          "
        >

          {/* ==========================================
              LEFT CONTENT
          ========================================== */}

          <div className="min-w-0">

            <p
              className="
                text-xs
                font-bold
                tracking-[0.12em]
                text-[#1769e0]

                sm:text-sm
              "
            >
              LEARNING PLANS
            </p>

            <h2
              className="
                mt-3
                font-extrabold
                leading-[1.05]
                tracking-[-0.035em]
                text-[#10213d]
                text-[clamp(1.8rem,3vw,2.2rem)]
              "
            >
              Choose Your
            </h2>

            <p
              className="
                mt-1
                font-normal
                italic
                leading-tight
                text-[#1769e0]
                text-[clamp(1.6rem,2.8vw,2.1rem)]
              "
            >
              Learning Plan.
            </p>

            <div
              className="
                mt-3
                h-1
                w-20
                -rotate-2
                rounded-full
                bg-[#ffc400]

                sm:w-24
              "
            />

            <p
              className="
                mt-5
                max-w-[260px]
                text-[clamp(0.72rem,1vw,0.875rem)]
                leading-6
                text-slate-600
              "
            >
              Choose the learning duration
              that works best for you.
              You can adjust the duration
              anytime.
            </p>

          </div>


          {/* ==========================================
              CARDS
          ========================================== */}

          <div className="min-w-0">

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex
                gap-4
                overflow-x-auto
                pb-3

                snap-x
                snap-mandatory

                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                md:grid
                md:grid-cols-3
                md:gap-4
                md:overflow-visible
                md:pb-0
              "
            >

              {packages.map((item, index) => {
                const quantity =
                  quantities[
                    item.name as keyof typeof quantities
                  ];

                const totalPrice =
                  getTotalPrice(
                    item.price,
                    item.name
                  );

                const isSelected =
                  selected === item.name;

                return (
                  <div
                    key={item.name}
                    data-promo-card
                    onClick={() =>
                      setSelected(item.name)
                    }
                    className={`
                      relative
                      cursor-pointer
                      overflow-hidden
                      rounded-2xl
                      bg-white

                      p-5
                      sm:p-6
                      lg:p-7

                      w-[82%]
                      shrink-0
                      snap-center

                      transition-all
                      duration-300

                      ${
                        isSelected
                          ? "border-2 border-[#1769e0] shadow-xl"
                          : "border border-slate-100 shadow-sm"
                      }

                      hover:-translate-y-1
                      hover:shadow-lg

                      md:w-auto
                      md:shrink
                      md:snap-none

                      ${
                        item.popular
                          ? "md:-translate-y-1"
                          : ""
                      }
                    `}
                  >

                    {/* POPULAR */}

                    {item.popular && (
                      <div
                        className="
                          absolute
                          left-0
                          right-0
                          top-0
                          bg-[#ffc400]
                          py-1.5
                          text-center
                          text-[9px]
                          font-bold
                          tracking-wide
                          text-[#10213d]

                          sm:text-[10px]
                        "
                      >
                        ★ BEST VALUE
                      </div>
                    )}


                    <div
                      className={
                        item.popular
                          ? "pt-5"
                          : ""
                      }
                    >

                      {/* HEADER */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <span
                          className={`
                            text-xs
                            font-bold
                            tracking-[0.1em]

                            sm:text-sm

                            ${
                              isSelected
                                ? "text-[#1769e0]"
                                : "text-slate-500"
                            }
                          `}
                        >
                          {item.name}
                        </span>

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#eaf5ff]
                            text-base
                            text-[#1769e0]

                            sm:h-10
                            sm:w-10
                          "
                        >
                          {item.icon}
                        </span>

                      </div>


                      {/* PRICE */}

                      <div className="mt-5">

                        <p
                          className="
                            text-[clamp(1.4rem,2.5vw,2rem)]
                            font-extrabold
                            leading-none
                            text-[#10213d]
                          "
                        >
                          {formatRupiah(
                            totalPrice
                          )}
                        </p>

                        <p
                          className="
                            mt-2
                            text-[11px]
                            text-slate-400

                            sm:text-xs
                          "
                        >
                          {formatRupiah(
                            item.price
                          )}
                          {" / "}
                          {item.unit}
                        </p>

                      </div>


                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-4
                          min-h-[40px]
                          text-xs
                          leading-5
                          text-slate-500

                          sm:text-sm
                        "
                      >
                        {item.description}
                      </p>


                      {/* QUANTITY */}

                      <div className="mt-5">

                        <p
                          className="
                            mb-2
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                            text-slate-400
                          "
                        >
                          Duration
                        </p>

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            p-1
                          "
                        >

                          {/* MINUS */}

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();

                              updateQuantity(
                                item.name,
                                -1
                              );
                            }}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-lg
                              bg-white
                              text-lg
                              font-bold
                              text-[#10213d]
                              shadow-sm
                              transition

                              hover:bg-[#edf7ff]
                              hover:text-[#1769e0]

                              active:scale-95
                            "
                          >
                            −
                          </button>


                          {/* QUANTITY */}

                          <div
                            className="
                              flex
                              flex-col
                              items-center
                              leading-none
                            "
                          >

                            <span
                              className="
                                text-sm
                                font-bold
                                text-[#10213d]
                              "
                            >
                              {quantity}
                            </span>

                            <span
                              className="
                                mt-1
                                text-[9px]
                                uppercase
                                tracking-wide
                                text-slate-400
                              "
                            >
                              {item.unit}
                              {quantity > 1
                                ? "s"
                                : ""}
                            </span>

                          </div>


                          {/* PLUS */}

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();

                              updateQuantity(
                                item.name,
                                1
                              );
                            }}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#1769e0]
                              text-lg
                              font-bold
                              text-white
                              shadow-sm
                              transition

                              hover:bg-[#125bc4]

                              active:scale-95
                            "
                          >
                            +
                          </button>

                        </div>

                      </div>


                      {/* SELECT */}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(item.name);
                        }}
                        className={`
                          mt-5
                          w-full
                          rounded-full
                          px-4
                          py-2.5
                          text-xs
                          font-bold
                          transition-all
                          duration-200

                          sm:py-3
                          sm:text-sm

                          ${
                            isSelected
                              ? "bg-[#1769e0] text-white"
                              : "border border-slate-300 text-[#10213d] hover:border-[#1769e0] hover:text-[#1769e0]"
                          }
                        `}
                      >
                        {isSelected
                          ? "Selected ✓"
                          : "Choose Plan"}
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* ==========================================
                MOBILE SLIDER INDICATOR
            ========================================== */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2

                md:hidden
              "
            >

              {packages.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to ${item.name}`}
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
                        ? "w-6 bg-[#1769e0]"
                        : "w-1.5 bg-slate-300"
                    }
                  `}
                />
              ))}

            </div>

          </div>

        </div>


        {/* ==========================================
            SUMMARY
        ========================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-slate-100
            bg-white
            p-4
            shadow-sm

            sm:mt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-5

            lg:ml-[calc(220px+3rem)]
          "
        >

          <div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-slate-400
              "
            >
              Selected Plan
            </p>

            <p
              className="
                mt-1
                text-sm
                font-bold
                text-[#10213d]

                sm:text-base
              "
            >
              {selected}
              {" · "}
              {
                quantities[
                  selected as keyof typeof quantities
                ]
              }{" "}
              {
                quantities[
                  selected as keyof typeof quantities
                ] > 1
                  ? `${packages.find(
                      (item) =>
                        item.name === selected
                    )?.unit}s`
                  : packages.find(
                      (item) =>
                        item.name === selected
                    )?.unit
              }
            </p>

          </div>


          <div
            className="
              flex
              items-center
              justify-between
              gap-4

              sm:justify-end
            "
          >

            <p
              className="
                text-lg
                font-extrabold
                text-[#10213d]

                sm:text-xl
              "
            >
              {formatRupiah(
                getTotalPrice(
                  packages.find(
                    (item) =>
                      item.name === selected
                  )?.price ?? 0,
                  selected
                )
              )}
            </p>

            <button
              type="button"
              className="
                rounded-full
                bg-[#ffc400]
                px-5
                py-2.5
                text-xs
                font-bold
                text-[#10213d]

                transition

                hover:bg-[#ffd43d]
                active:scale-95

                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              Continue →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
