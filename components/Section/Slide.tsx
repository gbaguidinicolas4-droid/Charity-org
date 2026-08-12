
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { WiDirectionUpRight } from "react-icons/wi";

interface NewsItem {
  image: string;
  title: string;
  date: string;
  description: string;
}

interface Slide {
  id: number;
  items: NewsItem[];
}

const slides: Slide[] = [
  {
    id: 1,
    items: [
      {
        image: "/images/image1.jpg",
        title: "Our Team Expands",
        date: "June 12, 2025",
        description: "To 50 Members Already",
      },
      {
        image: "/images/image2.jpg",
        title: "Therapeutic Session",
        date: "June 8, 2025",
        description: "Another Successful Session",
      },
      {
        image: "/images/image3.jpg",
        title: "Volunteer Inspiration",
        date: "May 29, 2025",
        description: "A Volunteer Who Inspires All",
      },
      {
        image: "/images/image4.jpg",
        title: "Community Support",
        date: "May 20, 2025",
        description: "Together We Make A Difference",
      },
    ],
  },

  {
    id: 2,
    items: [
      {
        image: "/images/image5.jpg",
        title: "New Partnership",
        date: "May 15, 2025",
        description: "Building Stronger Connections",
      },
      {
        image: "/images/image6.jpg",
        title: "Medical Support",
        date: "May 10, 2025",
        description: "Helping Families Move Forward",
      },
      {
        image: "/images/image7.jpg",
        title: "Hope In Action",
        date: "May 4, 2025",
        description: "Small Actions, Big Impact",
      },
      {
        image: "/images/image8.jpg",
        title: "A New Beginning",
        date: "April 28, 2025",
        description: "Creating Better Tomorrows",
      },
    ],
  },

  {
    id: 3,
    items: [
      {
        image: "/images/image9.jpg",
        title: "Volunteer Day",
        date: "April 20, 2025",
        description: "Our Volunteers In Action",
      },
      {
        image: "/images/image10.jpg",
        title: "Family Support",
        date: "April 15, 2025",
        description: "Standing Together",
      },
      {
        image: "/images/image11.jpg",
        title: "Hope Rising",
        date: "April 10, 2025",
        description: "Another Step Forward",
      },
      {
        image: "/images/image12.jpg",
        title: "Making An Impact",
        date: "April 3, 2025",
        description: "Every Contribution Matters",
      },
    ],
  },
];

export default function Slide() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[current];

  return (
    <section className="w-full overflow-hidden bg-white py-40">

      {/* ==============================
          TITRE
      ============================== */}

      <div className="mx-auto mb-16 max-w-5xl px-6 text-center ">

    <button
  className="
    inline-flex
    items-center
    justify-center
    w-fit
    rounded-md
    border
    border-[#5C8A4D]/20
    bg-green-50
    px-2
    py-1
    text-[10px]
    font-medium
    text-black
    transition
    hover:bg-[#5C8A4D]
    hover:text-white
    
  
          >
  "
>
  Fondation News
</button>

        <h2
          className="
            text-4xl
            font-extrabold
            leading-tight
            text-black
            md:text-5xl
            lg:text-[56px]
    font-poppins
            
          "
        >
          Tay Informed — The Latest
          <br />
          Updates From HopeRise
        </h2>
<div className="flex w-full items-center justify-center gap-2 translate-y-2">
  <p className="text-sm font-medium">See All</p>

  <button
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-black/20
      transition
      hover:bg-[#5C8A4D]
      hover:text-white
    "
  >
    <WiDirectionUpRight className="text-2xl" />
  </button>
</div>

      </div>

      {/* ==============================
          SLIDER
      ============================== */}

      <div className="relative w-full">

        <AnimatePresence
          mode="wait"
          initial={false}
          custom={direction}
        >
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{
              x: direction > 0 ? "100%" : "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: direction > 0 ? "-100%" : "100%",
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >

            {/* ==============================
                4 BLOCS
            ============================== */}

            <div
              className="
                flex
                w-full
                items-start
                gap-3
                px-4
                md:gap-5
                md:px-8
                lg:gap-6
                lg:px-12
              "
            >

              {/* ==============================
                  IMAGE 1
              ============================== */}

              <article
                className="
                  min-w-0
                  flex-[1.5]
                "
              >
                <div
                  className="
                    h-[460px]
                    w-full
                    overflow-hidden
                    rounded-[30px]
                  "
                >
                  <img
                    src={slide.items[0].image}
                    alt={slide.items[0].title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                <div className="mt-5 pr-3">
                  <p
                    className="
                      mb-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-gray-400
                    "
                  >
                    {slide.items[0].date}
                  </p>

                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-tight
                      text-black
                    "
                  >
                    {slide.items[0].title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {slide.items[0].description}
                  </p>
                </div>
              </article>

              {/* ==============================
                  IMAGE 2
              ============================== */}

              <article
                className="
                  min-w-0
                  flex-[1.2]
                "
              >
                <div
                  className="
                    h-[390px]
                    w-full
                    overflow-hidden
                    rounded-[28px]
                  "
                >
                  <img
                    src={slide.items[1].image}
                    alt={slide.items[1].title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                <div className="mt-5 pr-3">
                  <p
                    className="
                      mb-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-gray-400
                    "
                  >
                    {slide.items[1].date}
                  </p>

                  <h3
                    className="
                      text-lg
                      font-bold
                      leading-tight
                      text-black
                    "
                  >
                    {slide.items[1].title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {slide.items[1].description}
                  </p>
                </div>
              </article>

              {/* ==============================
                  IMAGE 3
              ============================== */}

              <article
                className="
                  min-w-0
                  flex-1
                "
              >
                <div
                  className="
                    h-[320px]
                    w-full
                    overflow-hidden
                    rounded-[26px]
                  "
                >
                  <img
                    src={slide.items[2].image}
                    alt={slide.items[2].title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                <div className="mt-5 pr-3">
                  <p
                    className="
                      mb-2
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-gray-400
                    "
                  >
                    {slide.items[2].date}
                  </p>

                  <h3
                    className="
                      text-lg
                      font-bold
                      leading-tight
                      text-black
                    "
                  >
                    {slide.items[2].title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {slide.items[2].description}
                  </p>
                </div>
              </article>

              {/* ==============================
                  IMAGE 4
              ============================== */}

              <article
                className="
                  min-w-0
                  flex-[0.75]
                "
              >
                <div
                  className="
                    h-[250px]
                    w-full
                    overflow-hidden
                    rounded-[24px]
                  "
                >
                  <img
                    src={slide.items[3].image}
                    alt={slide.items[3].title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                <div className="mt-5">
                  <p
                    className="
                      mb-2
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-gray-400
                    "
                  >
                    {slide.items[3].date}
                  </p>

                  <h3
                    className="
                      text-base
                      font-bold
                      leading-tight
                      text-black
                    "
                  >
                    {slide.items[3].title}
                  </h3>

                  <p className="mt-2 text-xs text-gray-500">
                    {slide.items[3].description}
                  </p>
                </div>
              </article>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* ==============================
            BOUTONS
        ============================== */}

        <div
          className="
            mt-10
            flex
            justify-end
            gap-3
            px-6
            md:px-10
            lg:px-16
          "
        >

          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-black/20
              bg-white
              text-black
              transition
              duration-300
              hover:bg-[#5C8A4D]
              hover:text-white
            "
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              transition
              duration-300
              hover:bg-[#5C8A4D]
            "
          >
            <FaArrowRight className="text-sm" />
          </button>

        </div>

      </div>
    </section>
  );
}