
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

export default function Donate() {
  const [mode, setMode] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState("550");
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("Adam Cooper Jr.");
  const [agreed, setAgreed] = useState(true);

  const quickAmounts = ["10", "25", "50", "100"];

  return (
    <section id="Get-Involved"
      className="
        relative
        min-h-screen
        overflow-hidden
         bg-[linear-gradient(180deg,#F8DDE8_0%,#FFF1F3_45%,#EED9C4_100%)]
        px-4
        pb-20
      "
    >
      {/* =========================================
          GRAND COEUR GAUCHE
          ========================================= */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[150px]
          top-[50%]
          z-0
          w-[500px]
          rotate-[-15deg]
        "
      >
        <svg
          viewBox="0 0 512 512"
          className="h-auto w-full"
        >
          <path
            d="
              M256 464
              C256 464 40 340 40 170
              C40 85 108 40 175 40
              C215 40 240 61 256 91
              C272 61 297 40 337 40
              C404 40 472 85 472 170
              C472 340 256 464 256 464Z
            "
            fill="#f3dfe7"
          />
        </svg>
      </motion.div>

      {/* =========================================
          GRAND COEUR DROIT
          ========================================= */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[150px]
          top-[20%]
          z-0
          w-[500px]
          rotate-[15deg]
        "
      >
        <svg
          viewBox="0 0 512 512"
          className="h-auto w-full"
        >
          <path
            d="
              M256 464
              C256 464 40 340 40 170
              C40 85 108 40 175 40
              C215 40 240 61 256 91
              C272 61 297 40 337 40
              C404 40 472 85 472 170
              C472 340 256 464 256 464Z
            "
            fill="#F8DDE8"
          />
        </svg>
      </motion.div>

      {/* =========================================
          TITRE
          ========================================= */}
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
        <h1 className="text-[28px] font-black leading-[1.25] text-[#111111] sm:text-[34px] md:text-[38px]">
          Your Support Makes
        </h1>

        <h1 className="text-[28px] font-black leading-[1.25] text-[#111111] sm:text-[34px] md:text-[38px]">
          A Life-Changing Impact
        </h1>
      </div>

      {/* =========================================
          CARTE DE DONATION
          ========================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-10
          w-[92%]
          max-w-[420px]
          rounded-[28px]
          bg-white
          p-6
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          sm:p-7
        "
      >
        <h3 className="text-center text-[15px] font-semibold text-[#111111]">
          Choose amount
        </h3>

        {/* Toggle */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[13px] font-medium">
          <span
            className={
              mode === "one-time"
                ? "text-[#111111]"
                : "text-gray-400"
            }
          >
            One-Time Donation
          </span>

          <button
            onClick={() =>
              setMode(
                mode === "one-time"
                  ? "monthly"
                  : "one-time"
              )
            }
            className="
              relative
              h-6
              w-11
              rounded-full
              bg-[#00D968]
              transition-colors
            "
          >
            <span
              className={`
                absolute
                top-0.5
                h-5
                w-5
                rounded-full
                bg-white
                shadow-sm
                transition-all
                ${
                  mode === "monthly"
                    ? "left-[22px]"
                    : "left-0.5"
                }
              `}
            />
          </button>

          <span
            className={
              mode === "monthly"
                ? "flex items-center gap-1 text-[#111111]"
                : "flex items-center gap-1 text-gray-400"
            }
          >
            Monthly Support
            <span className="text-[#00D968]">♥</span>
          </span>
        </div>

        {/* Montant */}
        <div className="mt-5 flex items-center justify-between rounded-full border border-gray-200 px-5 py-3">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="
              w-full
              bg-transparent
              text-[15px]
              font-medium
              text-[#111111]
              outline-none
            "
          />

          <span className="flex shrink-0 items-center gap-1 text-[13px] font-semibold text-gray-500">
            USD

            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className="mt-0.5"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Montants rapides */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {quickAmounts.map((val) => (
            <button
              key={val}
              onClick={() => setAmount(val)}
              className={`
                rounded-full
                border
                py-2.5
                text-[13px]
                font-semibold
                transition
                ${
                  amount === val
                    ? "border-[#00D968] bg-[#EAFBF1] text-[#111111]"
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }
              `}
            >
              ${val}
            </button>
          ))}
        </div>

        {/* Anonyme */}
        <label className="mt-5 flex items-center gap-2 text-[13px] font-medium text-[#111111]">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) =>
              setAnonymous(e.target.checked)
            }
            className="h-4 w-4 rounded border-gray-300 accent-[#00D968]"
          />

          Donate Anonymously
        </label>

        {/* Nom */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            mt-3
            w-full
            rounded-full
            border
            border-gray-200
            px-5
            py-3
            text-[14px]
            font-medium
            text-[#111111]
            outline-none
          "
        />

        {/* Terms */}
        <label className="mt-4 flex items-center gap-2 text-[13px] font-medium text-[#111111]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) =>
              setAgreed(e.target.checked)
            }
            className="h-4 w-4 rounded border-gray-300 accent-[#00D968]"
          />

          I Agree To The Terms
        </label>

        {/* Boutons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            className="
              h-12
              w-full
              rounded-full
              bg-[#00D968]
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.05em]
              text-white
              transition
              hover:bg-[#00C65F]
            "
          >
            Donate
          </button>

          <button
            className="
              h-12
              w-full
              rounded-full
              border
              border-gray-200
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.05em]
              text-gray-500
              transition
              hover:border-gray-300
            "
          >
            Use QR Code
          </button>
        </div>
      </div>
    </section>
  );
}