
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Who We Are", href: "#who-are-we" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "News & Events", href: "#New-events" },
  { name: "Get Involved", href: "#Get-Involved" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav className="w-full bg-transparent">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]
            items-center
            justify-between
            gap-4
            px-4
            py-3
            sm:px-6
            md:px-8
            lg:px-10
            lg:py-4
            xl:px-12
            2xl:px-16
          "
        >
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src="/logo.png"
              alt="Hope Rise"
              width={44}
              height={44}
              priority
              className="
                h-[34px]
                w-[34px]
                shrink-0
                object-contain
                sm:h-[40px]
                sm:w-[40px]
                lg:h-[44px]
                lg:w-[44px]
              "
            />

            <span
              className="
                truncate
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#111]
                sm:text-[13px]
                lg:text-[15px]
                lg:tracking-[0.15em]
              "
            >
              Hope Rise
            </span>
          </Link>

          {/* ================= NAVIGATION DESKTOP ================= */}
          <ul
            className="
              hidden
              min-w-0
              flex-1
              items-center
              justify-center
              gap-5
              lg:flex
              xl:gap-8
              2xl:gap-12
            "
          >
            {navLinks.map((link) => (
              <li key={link.name} className="shrink-0">
                <Link
                  href={link.href}
                  className="
                    whitespace-nowrap
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.06em]
                    text-[#111]
                    transition
                    hover:text-[#5C8A4D]
                    xl:text-[11px]
                    2xl:text-[12px]
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ================= ACTIONS DESKTOP ================= */}
          <div
            className="
              hidden
              shrink-0
              items-center
              gap-2
              lg:flex
              xl:gap-3
              2xl:gap-4
            "
          >
            {/* Téléphone */}
            <a
              href="https://wa.me/2290156664277"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact WhatsApp"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-black/20
                transition
                hover:bg-[#5C8A4D]
                hover:text-white
                xl:h-11
                xl:w-11
                2xl:h-12
                2xl:w-12
              "
            >
              <BsTelephone className="text-[14px] xl:text-[17px]" />
            </a>

            {/* Donate */}
            <button
              className="
                h-9
                shrink-0
                whitespace-nowrap
                rounded-full
                border
                border-black/20
                px-5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.07em]
                transition
                hover:bg-[#5C8A4D]
                hover:text-white
                xl:h-11
                xl:px-7
                xl:text-[11px]
                2xl:h-12
                2xl:px-8
                2xl:text-[12px]
              "
            >
              Donate
            </button>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="flex shrink-0 items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
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
        </div>
      </nav>

      {/* ================= MENU MOBILE ================= */}
      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          max-w-full
          overflow-hidden
          border-t
          border-black/10
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="w-full px-4 py-5 sm:px-6">
          <ul className="flex w-full flex-col">
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
                    w-full
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
          <div className="mt-5 flex w-full items-center gap-3">
            <a
              href="https://wa.me/2290156664277"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact WhatsApp"
              className="
                flex
                h-11
                w-11
                shrink-0
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
                min-w-0
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
