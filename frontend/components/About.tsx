
"use client";

import { useRef, useState } from "react";

export default function About() {
  const mainSliderRef = useRef<HTMLDivElement>(null);
  const featureSliderRef = useRef<HTMLDivElement>(null);

  const [mainActive, setMainActive] = useState(0);
  const [featureActive, setFeatureActive] = useState(0);

  // Detect active main card
  const handleMainScroll = () => {
    const slider = mainSliderRef.current;
    if (!slider) return;

    const cards = slider.children;

    if (cards.length === 0) return;

    const scrollLeft = slider.scrollLeft;
    const cardWidth = cards[0].clientWidth;
    const gap = 20;

    const index = Math.round(scrollLeft / (cardWidth + gap));

    setMainActive(Math.min(index, cards.length - 1));
  };

  // Detect active feature card
  const handleFeatureScroll = () => {
    const slider = featureSliderRef.current;
    if (!slider) return;

    const cards = slider.children;

    if (cards.length === 0) return;

    const scrollLeft = slider.scrollLeft;
    const cardWidth = cards[0].clientWidth;
    const gap = 16;

    const index = Math.round(scrollLeft / (cardWidth + gap));

    setFeatureActive(Math.min(index, cards.length - 1));
  };

  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* ================= HEADING ================= */}

        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.15em] text-[#1769e0] sm:text-sm">
            ABOUT ISYARATKU
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#10213d] sm:mt-4 sm:text-4xl md:text-5xl">
            Learn sign language
            <br className="hidden sm:block" />

            <span className="text-[#1769e0]">
              {" "}in a more interactive way.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
            ISYARATKU is an educational platform designed to help
            everyone learn sign language in a simple, interactive,
            and engaging way.
          </p>
        </div>


        {/* ================= MAIN CARDS ================= */}

        <div
          ref={mainSliderRef}
          onScroll={handleMainScroll}
          className="
            mt-10 flex gap-5 overflow-x-auto pb-4
            snap-x snap-mandatory
            scrollbar-hide
            sm:mt-12
            lg:grid lg:grid-cols-2 lg:gap-8
            lg:overflow-visible lg:pb-0
          "
        >

          {/* Our Purpose */}
          <div
            className="
              min-w-[85%] snap-center
              rounded-2xl bg-[#edf7ff] p-6
              sm:min-w-[75%] sm:p-8
              md:p-10
              lg:min-w-0 lg:rounded-3xl
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769e0] text-xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
              🎯
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#10213d] sm:mt-6 sm:text-2xl">
              Our Purpose
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
              ISYARATKU aims to make learning sign language more
              accessible, engaging, and enjoyable. By combining
              education with technology, users can learn and
              practice in a more interactive environment.
            </p>
          </div>


          {/* What Can You Do */}
          <div
            className="
              min-w-[85%] snap-center
              rounded-2xl bg-[#10213d] p-6 text-white
              sm:min-w-[75%] sm:p-8
              md:p-10
              lg:min-w-0 lg:rounded-3xl
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffc400] text-xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
              ✋
            </div>

            <h3 className="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
              What Can You Do?
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7">
              Explore sign language vocabulary, practice using
              your camera, and get AI-powered assistance throughout
              your learning journey.
            </p>
          </div>

        </div>


        {/* Main Indicator */}
        <div className="mt-1 flex justify-center gap-2 lg:hidden">
          {[0, 1].map((index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                mainActive === index
                  ? "w-6 bg-[#1769e0]"
                  : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>


        {/* ================= FEATURES ================= */}

        <div
          ref={featureSliderRef}
          onScroll={handleFeatureScroll}
          className="
            mt-8 flex gap-4 overflow-x-auto pb-4
            snap-x snap-mandatory
            scrollbar-hide
            sm:mt-10
            md:grid md:grid-cols-3
            md:gap-5
            md:overflow-visible
            md:pb-0
          "
        >

          {/* Learning Materials */}
          <div
            className="
              min-w-[78%] snap-center
              rounded-2xl border border-slate-100
              bg-white p-5 shadow-sm
              transition duration-200
              hover:-translate-y-1 hover:shadow-md
              sm:min-w-[65%] sm:p-6
              md:min-w-0
            "
          >
         
            <h3 className="mt-4 font-bold text-[#10213d] sm:mt-5">
              Learning Materials
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learn sign language vocabulary and movements through
              simple and easy-to-understand materials.
            </p>
          </div>


          {/* AI Teacher */}
          <div
            className="
              min-w-[78%] snap-center
              rounded-2xl border border-slate-100
              bg-white p-5 shadow-sm
              transition duration-200
              hover:-translate-y-1 hover:shadow-md
              sm:min-w-[65%] sm:p-6
              md:min-w-0
            "
          >
         
            <h3 className="mt-4 font-bold text-[#10213d] sm:mt-5">
              AI Teacher
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Get AI-powered assistance to understand lessons and
              make your learning experience more personalized.
            </p>
          </div>


          {/* Gesture Detection */}
          <div
            className="
              min-w-[78%] snap-center
              rounded-2xl border border-slate-100
              bg-white p-5 shadow-sm
              transition duration-200
              hover:-translate-y-1 hover:shadow-md
              sm:min-w-[65%] sm:p-6
              md:min-w-0
            "
          >
           
            <h3 className="mt-4 font-bold text-[#10213d] sm:mt-5">
              Gesture Detection
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Practice sign language using your camera with the
              help of computer vision technology.
            </p>
          </div>

        </div>


        {/* Feature Indicator */}
        <div className="mt-1 flex justify-center gap-2 md:hidden">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                featureActive === index
                  ? "w-6 bg-[#1769e0]"
                  : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
