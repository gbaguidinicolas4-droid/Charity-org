
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Story {
  id: number;
  name: string;
  condition: string;
  raised: string;
  percent: number;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Emma Rose, 9",
    condition: "Diagnosed with Leukemia",
    raised: "$8,240.00",
    percent: 54,
    image: "/story1.jpg",
  },
  {
    id: 2,
    name: "Lily Grant, 7",
    condition: "Diagnosed with Stage 1 Lymphoma",
    raised: "$12,300.50",
    percent: 63,
    image: "/story2.jpg",
  },
  {
    id: 3,
    name: "John Smith, 12",
    condition: "Diagnosed with Stage 2 Lung Cancer",
    raised: "$16,545.15",
    percent: 72,
    image: "/story3.jpg",
  },
  {
    id: 4,
    name: "Mia Chen, 10",
    condition: "Diagnosed with Bone Cancer",
    raised: "$9,870.00",
    percent: 41,
    image: "/story4.jpg",
  },
  {
    id: 5,
    name: "Noah Bright, 8",
    condition: "Diagnosed with Stage 1 Leukemia",
    raised: "$14,120.00",
    percent: 58,
    image: "/story5.jpg",
  },
];

export default function Stories() {
  /*
   * ============================================
   * ÉTAT DE LA CARTE ACTIVE
   * ============================================
   *
   * John Smith reste la carte initiale.
   * L'animation ne commencera que lorsque
   * la section sera visible.
   */
  const [activeId, setActiveId] = useState(3);

  /*
   * Indique si la section Stories est actuellement
   * suffisamment visible à l'écran.
   */
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  /*
   * Référence de la section entière
   */
  const sectionRef = useRef<HTMLElement | null>(null);

  /*
   * Référence de chaque carte
   */
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  /*
   * ============================================
   * DÉTECTION DE LA SECTION VISIBLE
   * ============================================
   *
   * L'animation ne pourra fonctionner que lorsque
   * 60% de la section est visible.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ============================================
   * ANIMATION AUTOMATIQUE
   * ============================================
   *
   * IMPORTANT :
   *
   * L'animation ne démarre PAS au chargement.
   *
   * Elle démarre uniquement lorsque :
   *
   * isSectionVisible === true
   *
   * Une carte change toutes les 2.5 secondes.
   */
  useEffect(() => {
    if (!isSectionVisible) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = stories.findIndex(
          (story) => story.id === currentId
        );

        const nextIndex =
          currentIndex === stories.length - 1
            ? 0
            : currentIndex + 1;

        return stories[nextIndex].id;
      });
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [isSectionVisible]);

  /*
   * ============================================
   * CENTRAGE DE LA CARTE ACTIVE
   * ============================================
   *
   * Le déplacement se fait uniquement lorsque
   * Stories est visible.
   */
  useEffect(() => {
    if (!isSectionVisible) return;

    const activeCard = cardRefs.current[activeId];

    if (!activeCard) return;

    activeCard.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId, isSectionVisible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[linear-gradient(180deg,#F8DDE8_0%,#FFF1F3_45%,#EED9C4_100%)]
        py-10
      "
    >
      {/* ============================================
          TITRE
          ============================================ */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[700px]
          px-4
          pt-10
          text-center
        "
      >
        <h1
          className="
            text-[28px]
            font-black
            leading-[1.25]
            text-[#111111]
            sm:text-[34px]
            md:text-[38px]
          "
        >
          Inspiring Journeys
        </h1>

        <h1
          className="
            text-[28px]
            font-black
            leading-[1.25]
            text-[#111111]
            sm:text-[34px]
            md:text-[38px]
          "
        >
          Of Strength And Hope
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span
            className="
              text-[11px]
              font-semibold
              tracking-[0.08em]
              text-black
            "
          >
            SEE ALL STORIES
          </span>

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-black/15
              transition
              hover:border-transparent
              hover:bg-[#5C8A4D]
              hover:text-white
            "
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 12L12 4M12 4H5M12 4V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================
          GALERIE
          ============================================ */}
      <div
  className="
    relative
    z-10
    mt-12
    flex
    h-[450px]
    w-full
    items-end
    gap-2
    overflow-x-auto
    overflow-y-hidden
    px-[calc(50%-90px)]
    pb-0
    [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden

    sm:gap-3
    sm:px-[calc(50%-105px)]

    md:px-[calc(50%-115px)]

    lg:px-[calc(50%-125px)]
  "
>
        {stories.map((story) => {
          const isActive = activeId === story.id;

          return (
            <div
              key={story.id}
              ref={(element) => {
                cardRefs.current[story.id] = element;
              }}
              className={`
                group
                relative
                shrink-0
                transition-all
                duration-700
                ease-in-out

                ${
                  isActive
                    ? `
                      flex
                      h-[450px]
                      w-[180px]
                      flex-col
                      gap-3
                      rounded-[28px]
                      border
                      border-black/10
                      bg-white/20
                      p-2
                      shadow-lg
                      backdrop-blur-sm

                      sm:w-[210px]
                      md:w-[230px]
                      lg:w-[250px]
                    `
                    : `
                      h-[300px]
                      w-[180px]
                      overflow-hidden
                      rounded-[24px]
                      border-transparent

                      sm:w-[210px]
                      md:w-[230px]
                      lg:w-[250px]
                    `
                }
              `}
            >
              {isActive ? (
                /*
                 * ============================================
                 * CARTE ACTIVE
                 *
                 * GRAND CONTENEUR
                 * ┌─────────────────────────┐
                 * │                         │
                 * │        IMAGE            │
                 * │                         │
                 * ├─────────────────────────┤
                 * │                         │
                 * │      INFORMATIONS       │
                 * │                         │
                 * └─────────────────────────┘
                 * ============================================
                 */
                <div className="flex h-full w-full flex-col gap-3">
                  {/* ========================================
                      IMAGE
                      ======================================== */}
                  <div
                    className="
                      relative
                      h-[265px]
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-[22px]
                      bg-white
                    "
                  >
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="250px"
                      className="
                        object-cover
                        grayscale-0
                        transition-all
                        duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    {/* DONATE */}
                    <div
                      className="
                        absolute
                        inset-x-0
                        top-[62%]
                        flex
                        justify-center
                      "
                    >
                      <button
                        className="
                          rounded-full
                          bg-[#00D968]
                          px-8
                          py-4
                          text-[13px]
                          font-semibold
                          uppercase
                          tracking-[0.05em]
                          text-white
                          shadow-lg
                          transition-all
                          duration-500
                          hover:bg-[#00C65F]
                        "
                      >
                        Donate
                      </button>
                    </div>
                  </div>

                  {/* ========================================
                      INFORMATIONS
                      ======================================== */}
                  <div
                    className="
                      flex
                      min-h-[155px]
                      flex-1
                      flex-col
                      justify-end
                      rounded-[22px]
                      bg-white
                      p-4
                    "
                  >
                    <h4
                      className="
                        text-[14px]
                        font-bold
                        text-[#111111]
                      "
                    >
                      {story.name}
                    </h4>

                    <p
                      className="
                        mt-0.5
                        text-[12px]
                        text-gray-500
                      "
                    >
                      {story.condition}
                    </p>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-between
                        text-[12px]
                        font-semibold
                        text-[#111111]
                      "
                    >
                      <span>{story.raised}</span>

                      <span>{story.percent}%</span>
                    </div>

                    <div
                      className="
                        mt-1.5
                        h-1.5
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-gray-100
                      "
                    >
                      <div
                        className="
                          h-full
                          rounded-full
                          bg-[#00D968]
                          transition-all
                          duration-700
                        "
                        style={{
                          width: `${story.percent}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /*
                 * ============================================
                 * CARTE NON ACTIVE
                 * ============================================
                 */
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[24px]
                  "
                >
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="250px"
                    className="
                      object-cover
                      grayscale
                      transition-all
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
