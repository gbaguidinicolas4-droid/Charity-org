"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Who We Are", href: "#" },
  { name: "What We Do", href: "#" },
  { name: "News & Events", href: "#" },
  { name: "Get Involved", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <nav
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-5
          py-3
          sm:px-6
          md:px-8
          lg:px-10
          lg:py-4
          fixed
        "
      >
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logo.png"
            alt="Hope Rise"
            width={44}
            height={44}
            priority
            className="
              h-[35px]
              w-[35px]
              object-contain
              sm:h-[40px]
              sm:w-[40px]
              lg:h-[44px]
              lg:w-[44px]
            "
          />

          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#111]
              sm:text-[14px]
              lg:text-[15px]
              lg:tracking-[0.15em]
            "
          >
            Hope Rise
          </span>
        </Link>

        {/* ================= NAVIGATION DESKTOP ================= */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-14">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-[#111]
                  transition
                  hover:text-[#5C8A4D]
                  xl:text-[12px]
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ================= ACTIONS DESKTOP ================= */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          {/* Téléphone */}
          <a
            href="https://wa.me/2290156664277"
            target="_blank"
            rel="noopener noreferrer"
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
              xl:h-12
              xl:w-12
            "
          >
            <BsTelephone
              className="text-[15px] xl:text-[18px]"
            />
          </a>

          {/* Donate */}
          <button
            className="
              h-10
              rounded-full
              border
              border-black/20
              px-6
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.08em]
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

        {/* ================= MOBILE ================= */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/20
              text-[#111]
              transition
              hover:bg-[#5C8A4D]
              hover:text-white
              sm:h-11
              sm:w-11
            "
          >
            {menuOpen ? (
              <HiX className="text-[22px]" />
            ) : (
              <HiMenu className="text-[22px]" />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MENU MOBILE ================= */}
      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          overflow-hidden
          border-t
          border-black/10
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-5 py-5 sm:px-6">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="border-b border-black/10 last:border-none"
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    py-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#111]
                    transition
                    hover:text-[#5C8A4D]
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions mobile */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://wa.me/2290156664277"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-black/20
              "
            >
              <BsTelephone size={17} />
            </a>

            <button
              className="
                h-11
                flex-1
                rounded-full
                bg-[#111]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                transition
                hover:bg-[#5C8A4D]
              "
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}