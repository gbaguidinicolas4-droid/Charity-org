"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";

import Compt from "./Compt";
import Compteur from "./Compteur";
import Compte from "./Compte";

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [phase, setPhase] = useState(0);
  const [keys, setKeys] = useState({ 1: 0, 2: 0, 3: 0 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let newPhase = 0;

    if (v < 0.3) newPhase = 1;
    else if (v >= 0.44 && v < 0.55) newPhase = 2;
    else if (v >= 0.7) newPhase = 3;

    if (newPhase !== 0 && newPhase !== phase) {
      setKeys((prev) => ({
        ...prev,
        [newPhase]: prev[newPhase as 1 | 2 | 3] + 1,
      }));
    }

    if (newPhase !== phase) setPhase(newPhase);
  });

  /* COMPTEUR 1 */
  const firstOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0.25, 0.35], [0, -100]);

  /* ARC 1 — crème monte depuis le bas et RESTE plein écran (pas de fondu retour) */
  const blob1Height = useTransform(
    scrollYProgress,
    [0.3, 0.36, 0.42],
    ["15%", "25%", "160%"]
  );
  const blob1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.34],
    [0, 1]
  );

  /* COMPTEUR 2 — s'affiche sur fond crème plein écran */
const secondOpacity = useTransform(
  scrollYProgress,
  [0.30, 0.36, 0.52, 0.60],
  [0, 1, 1, 0]
);

const secondY = useTransform(
  scrollYProgress,
  [0.30, 0.36, 0.60],
  [100, 0, -100]
);

  /* ARC 2 — BLANC, monte par-dessus le crème et remplit l'écran */
const blob2Height = useTransform(
  scrollYProgress,
  [0.55, 0.64, 0.74],
  ["0%", "35%", "160%"]
);

const blob2Opacity = useTransform(
  scrollYProgress,
  [0.55, 0.58],
  [0, 1]
);

  /* COMPTEUR 3 — s'affiche sur fond blanc à nouveau */
 const thirdOpacity = useTransform(
  scrollYProgress,
  [0.55, 0.62, 0.82],
  [0, 1, 1]
);

const thirdY = useTransform(
  scrollYProgress,
  [0.55, 0.62],
  [100, 0]
);

const nextPinkHeight = useTransform(
  scrollYProgress,
  [0.82, 0.90, 1],
  ["0%", "5%", "50%"]
);

const nextPinkOpacity = useTransform(
  scrollYProgress,
  [0.82, 0.86, 1],
  [0, 1, 1]
);

  return (
    <section id="New-events" ref={sectionRef} className="relative h-[350vh] w-full bg-white">
      <div
        className="
          sticky
          top-0
          flex
          min-h-screen
          flex-col
          items-center
          overflow-hidden
          bg-white
          px-4
          pt-20
        "
      >
        {/* Fond blanc explicite, toujours derrière tout */}
        <div className="absolute inset-0 -z-10 bg-white" />

        {/* Arc 1 — crème, monte et reste plein écran */}
        <motion.div
          style={{ height: blob1Height, opacity: blob1Opacity }}
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            z-0
            w-[125%]
            -translate-x-1/2
            rounded-t-[100%]
            bg-[#EED9C4]
          "
        />

        {/* Arc 2 — blanc, monte par-dessus le crème */}
        <motion.div
          style={{ height: blob2Height, opacity: blob2Opacity }}
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            z-[1]
            w-[125%]
            -translate-x-1/2
            rounded-t-[100%]
            bg-white
          "
        />

        {/* Badge */}
        <button
          className="
            relative
            z-30
            flex
            items-center
            justify-center
            rounded-[6px]
            bg-[#F1F1F1]
            px-5
            py-2
            text-black
            transition
            hover:bg-[#5C8A4D]
            hover:text-white
          "
        >
          <span className="text-[12px] font-semibold leading-none">
            Our Impact
          </span>
        </button>

        {/* Titre */}
       <div className="relative z-30 mt-5 text-center font-poppins">
  <h2 className="text-[30px] font-black leading-[1.15] text-black sm:text-[38px] md:text-[46px]">
    Together, We&apos;re Making
  </h2>
  <h2 className="text-[30px] font-black leading-[1.15] text-black sm:text-[38px] md:text-[46px]">
    A Difference
  </h2>
</div>
        {/* Compteurs */}
        <div className="relative z-20 mt-20 h-[500px] w-full">
          <motion.div
            style={{ opacity: firstOpacity, y: firstY }}
            className="absolute inset-x-0 top-0 flex justify-center"
          >
            <Compteur key={`c1-${keys[1]}`} />
          </motion.div>



  <motion.div
            style={{ opacity: thirdOpacity, y: thirdY }}
            className="absolute inset-x-0 top-0 flex justify-center"
          >
            <Compte key={`c2-${keys[2]}`} />
          </motion.div>

          <motion.div
            style={{ opacity: secondOpacity, y: secondY }}
            className="absolute inset-x-0 top-0 flex justify-center"
          >
            <Compt key={`c3-${keys[3]}`} />
          </motion.div>


{/* =====================================
    TRANSITION VERS LA SECTION SUIVANTE
    ROSE
    ===================================== */}

<motion.div
  style={{
    height: nextPinkHeight,
    opacity: nextPinkOpacity,
  }}
  className="
    pointer-events-none
    absolute
    bottom-0
    left-1/2
    z-[2]
    w-[125%]
    -translate-x-1/2
    rounded-t-[100%]
    bg-[#F8DDE8]
  "
/>
        
        </div>
      </div>
    </section>
  );
}