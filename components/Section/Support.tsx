
"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <section
      id="support-section"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[url('/Register.jpeg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* ==============================
          OVERLAY
          ============================== */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ==============================
          NAVBAR
          ============================== */}
      <nav
        className="
          absolute
          left-1/2
          top-4
          z-30
          flex
          w-[calc(100%-2rem)]
          max-w-[1440px]
          -translate-x-1/2
          items-center
          justify-between
          px-2
          sm:top-5
          sm:w-[calc(100%-3rem)]
          sm:px-2
          md:top-6
          md:w-[calc(100%-4rem)]
          lg:w-[calc(100%-5rem)]
          xl:w-[calc(100%-6rem)]
        "
      >
        {/* =========================
            LOGO
            ========================= */}
        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-2
            sm:gap-3
          "
        >
          <Image
            src="/logo2.png"
            alt="Hope Rise"
            width={44}
            height={44}
            priority
            className="
              h-[32px]
              w-[32px]
              object-contain
              sm:h-[38px]
              sm:w-[38px]
              md:h-[42px]
              md:w-[42px]
              lg:h-[44px]
              lg:w-[44px]
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.1em]
              text-white
              sm:text-[12px]
              md:text-[14px]
              lg:text-[15px]
              lg:tracking-[0.15em]
            "
          >
            Hope Rise
          </span>
        </Link>

        {/* =========================
            NAVIGATION DESKTOP
            ========================= */}
        <div
          className="
            hidden
            items-center
            gap-6
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white
            lg:flex
            xl:gap-10
            xl:text-xs
          "
        >
          <a
            href="#who-are-we"
            className="transition-opacity hover:opacity-70"
          >
            Who We Are
          </a>

          <a
            href="#what-we-do"
            className="transition-opacity hover:opacity-70"
          >
            What We Do
          </a>

          <a
            href="News-events"
            className="transition-opacity hover:opacity-70"
          >
            News & Events
          </a>

          <a
            href="#Get-Involved"
            className="transition-opacity hover:opacity-70"
          >
            Get Involved
          </a>
        </div>

        {/* =========================
            ACTIONS
            ========================= */}
        <div
          className="
            hidden
            items-center
            gap-2
            lg:flex
            xl:gap-4
          "
        >
          <a
            href="https://wa.me/2290156664277"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Call Us"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              text-white
              transition
              hover:bg-[#5C8A4D]
              hover:text-white
              xl:h-12
              xl:w-12
            "
          >
            <BsTelephone className="text-[14px] xl:text-[18px]" />
          </a>

          <button
            className="
              h-9
              rounded-full
              border
              border-white/40
              bg-transparent
              px-5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white
              transition
              hover:bg-[#5C8A4D]
              hover:text-white
              xl:h-12
              xl:px-8
              xl:text-[12px]
            "
          >
            Donate
          </button>
        </div>

        {/* =========================
            MOBILE ACTION
            ========================= */}
        <div className="flex lg:hidden">
          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              text-white
              sm:h-10
              sm:w-10
            "
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </nav>

      {/* ==============================
          CONTENU
          ============================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-10
          pt-28
          sm:px-8
          sm:pt-32
          md:px-10
          md:pt-36
          lg:px-12
          lg:pt-40
          xl:px-16
          2xl:px-20
        "
      >
        {/* ==============================
            TITRE
            ============================== */}
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1000px]
            flex-col
            items-center
            text-center
          "
        >
          {/* Petit bouton */}
          <button
            className="
              rounded-full
              bg-green-50
              px-5
              py-2
              text-[10px]
              font-medium
              text-black
              transition
              hover:bg-[#5C8A4D]
              hover:text-white
              sm:px-6
              sm:text-[11px]
              md:text-[12px]
            "
          >
            Get Help
          </button>

          {/* Titre */}
          <h1
            className="
              mt-5
              max-w-[950px]
              text-center
              font-poppins
              text-[34px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.02em]
              text-white
              sm:text-[42px]
              md:text-[50px]
              lg:text-[58px]
              xl:text-[64px]
              2xl:text-[70px]
            "
          >
            We&apos;re Here To Support You
            <br className="hidden sm:block" />
            Every Step Of The Way
          </h1>
        </div>

        {/* ==============================
            FORMULAIRE
            ============================== */}
        <div
  className="
    mt-16
    w-full
    max-w-[320px]
    self-start
    text-white
    sm:mt-20
    md:mt-24
    md:max-w-[340px]
    lg:mt-20
    lg:max-w-[360px]
    xl:mt-24
  "
>
          <h2
            className="
              mb-5
              text-[19px]
              font-bold
              sm:text-[20px]
              md:text-[21px]
            "
          >
            What&apos;s going on?
          </h2>

          {/* Diagnosis */}
          <div className="mb-4">
            <label
              className="
                mb-1.5
                block
                text-[10px]
                text-white/80
                sm:text-[11px]
              "
            >
              Diagnosis or condition
            </label>

            <select
              className="
                h-10
                w-full
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                text-[11px]
                text-white
                outline-none
                backdrop-blur-md
                sm:h-[42px]
                sm:text-[12px]
              "
            >
              <option className="text-black">
                Kidney Cancer
              </option>

              <option className="text-black">
                Lung Cancer
              </option>

              <option className="text-black">
                Breast Cancer
              </option>
            </select>
          </div>

          {/* Funding Goal */}
          <div className="mb-4">
            <label
              className="
                mb-1.5
                block
                text-[10px]
                text-white/80
                sm:text-[11px]
              "
            >
              Funding Goal
            </label>

            <div
              className="
                flex
                h-10
                w-full
                items-center
                justify-between
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                text-[11px]
                backdrop-blur-md
                sm:h-[42px]
                sm:text-[12px]
              "
            >
              <input
                type="number"
                defaultValue="56000"
                className="
                  min-w-0
                  w-full
                  bg-transparent
                  text-white
                  outline-none
                "
              />

              <span className="shrink-0">$</span>
            </div>
          </div>

          {/* Treatment */}
          <div className="mb-6">
            <label
              className="
                mb-2
                block
                text-[10px]
                text-white/80
                sm:text-[11px]
              "
            >
              Treatment stage
            </label>

            <div
              className="
                flex
                h-10
                w-full
                rounded-full
                border
                border-white/20
                bg-white/10
                p-1
                backdrop-blur-md
                sm:h-[42px]
              "
            >
              <button
                className="
                  min-w-0
                  flex-1
                  rounded-full
                  py-1
                  text-[10px]
                  transition
                  hover:bg-white/10
                  sm:text-[11px]
                "
              >
                Pre-op
              </button>

              <button
                className="
                  min-w-0
                  flex-1
                  rounded-full
                  bg-white
                  py-1
                  text-[10px]
                  font-medium
                  text-black
                  sm:text-[11px]
                "
              >
                Active
              </button>

              <button
                className="
                  min-w-0
                  flex-1
                  rounded-full
                  py-1
                  text-[10px]
                  transition
                  hover:bg-white/10
                  sm:text-[11px]
                "
              >
                Recovery
              </button>
            </div>
          </div>

          {/* ==============================
              BOUTONS
              ============================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-2.5
              sm:flex-row
            "
          >
            {/* Attach documents */}
            <button
              className="
                flex
                h-10
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/30
                px-3
                text-[9px]
                font-medium
                tracking-wide
                transition
                hover:bg-white/10
                sm:w-auto
                sm:flex-1
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-white/10
                "
              >
                <HiArrowUpRight className="h-3.5 w-3.5 text-white" />
              </span>

              ATTACH DOCUMENTS
            </button>

            {/* Request help */}
            <button
              className="
                h-10
                w-full
                rounded-full
                bg-white
                px-4
                text-[9px]
                font-semibold
                text-black
                transition
                hover:bg-gray-200
                sm:w-auto
                sm:flex-1
              "
            >
              REQUEST HELP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
