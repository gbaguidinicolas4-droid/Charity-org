
"use client";

import Image from "next/image";
import React, { useState } from "react";

import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

import { FiPhone, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Position de la souris par rapport au centre de la zone
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Mouvement léger
    setMousePosition({
      x: x * 0.08,
      y: y * 0.08,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5ebd9] p-8 font-sans text-[#2c2b29] md:p-16">

      {/* ==============================
          MAIN CTA
          ============================== */}
      <div
        className="
          flex
          h-[180px]
          items-center
          justify-center
        "
        onMouseMove={handleMouseMove}
        onMouseLeave={() =>
          setMousePosition({
            x: 0,
            y: 0,
          })
        }
      >
        <button
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: "transform 0.18s ease-out",
          }}
          className="
            rounded-full
            bg-[#00d084]
            px-8
            py-3.5
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-white
            shadow-sm
            transition-colors
            duration-300
            hover:bg-[#00b874]
          "
        >
          Donate
        </button>
      </div>

      {/* ==============================
          FOOTER
          ============================== */}
      <footer className="mx-auto w-full max-w-7xl pt-12">

        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-3">

          {/* ==============================
              COLONNE 1
              ============================== */}
          <div className="flex flex-col gap-15">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <Image
                  src="/logo.png"
                  alt="Hope Rise"
                  width={50}
                  height={50}
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
              </div>

              <span className="text-base font-bold uppercase tracking-widest">
                Hope Rise
              </span>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <FaXTwitter className="text-sm" />,
                  label: "X",
                },
                {
                  icon: <FaYoutube className="text-sm" />,
                  label: "YouTube",
                },
                {
                  icon: <FaLinkedinIn className="text-sm" />,
                  label: "LinkedIn",
                },
                {
                  icon: <FaInstagram className="text-sm" />,
                  label: "Instagram",
                },
                {
                  icon: <FaFacebookF className="text-sm" />,
                  label: "Facebook",
                },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={s.label}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#2c2b29]/20
                    transition-all
                    hover:border-[#2c2b29]
                    hover:bg-[#2c2b29]
                    hover:text-[#f5ebd9]
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ==============================
              COLONNE 2
              ============================== */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-wider">
              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  Get Help
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  Donate
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  Stories
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  Volunteer
                </a>
              </li>

              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  Blog & Resources
                </a>
              </li>
            </ul>
          </div>

          {/* ==============================
              COLONNE 3
              ============================== */}
          <div className="flex h-full flex-col justify-between">

            <div>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                Contact Us
              </h4>

              <div className="flex flex-col gap-3">

                <a
                  href="mailto:contact@hoperise.org"
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2c2b29]/20">
                    <FiMail className="text-xs" />
                  </div>

                  Send Email
                </a>

                <a
                  href="tel:"
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2c2b29]/20">
                    <FiPhone className="text-xs" />
                  </div>

                  Make a Call
                </a>

              </div>
            </div>

            {/* Back to top */}
            <div className="mt-8 flex justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  transition-opacity
                  hover:opacity-70
                "
              >
                <span>Back to top</span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2c2b29]/20">
                  <FiArrowUp className="text-xs" />
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* ==============================
            BOTTOM BAR
            ============================== */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-[#2c2b29]/10
            pt-6
            text-[11px]
            text-gray-600
            md:flex-row
          "
        >
          <p>© 2025 HopeRise Foundation | All Rights Reserved</p>

          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="#" className="hover:underline">
              Terms Of Service
            </a>
          </div>
        </div>

      </footer>
    </div>
  );
}
