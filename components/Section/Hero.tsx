import Image from "next/image";
import { FiGrid } from "react-icons/fi";
import { VscArrowUp } from "react-icons/vsc";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[linear-gradient(180deg,#FFF9F7_0%,#FFF1F3_45%,#EED9C4_100%)]
        h-[clamp(305px,51.5vw,700px)]
        translate-y-20
      "
    >
      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          pt-[clamp(18px,3vw,45px)]
        "
      >
        {/* ================= TITRE ================= */}
        <div className="flex w-full items-center justify-center gap-[clamp(6px,1.5vw,24px)]">
          {/* HOPE */}
          <h1
            className="
              shrink-0
              font-black
              leading-[0.88]
              tracking-[-0.065em]
              text-[#111111]
              text-[clamp(58px,14.65vw,200px)]
            
            "
          >
            Hope
          </h1>

          {/* IMAGE CENTRALE */}
          <div
            className="
              relative
              shrink-0
              overflow-hidden
              rounded-full
              w-[clamp(115px,18.3vw,250px)]
              h-[clamp(68px,8.8vw,120px)]
            "
          >
            <Image
              src="/img.jpeg"
              alt="Hope Rise"
              fill
              priority
              sizes="(max-width: 640px) 115px, (max-width: 1024px) 180px, 250px"
              className="object-cover"
            />
          </div>

          {/* RISE */}
          <h1
            className="
              shrink-0
              font-black
              leading-[0.88]
              tracking-[-0.065em]
              text-[#111111]
              text-[clamp(58px,14.65vw,200px)]
            "
          >
            Rise
          </h1>
        </div>

        {/* ================= DEUXIÈME LIGNE ================= */}
        <h2
          className="
            mt-[clamp(2px,-1.3vw,-18px)]
            whitespace-nowrap
            font-black
            leading-[0.88]
            tracking-[-0.065em]
            text-[#111111]
            text-[clamp(58px,14.65vw,200px)]
          "
        >
          is Support
        </h2>

        {/* ================= BOUTONS ================= */}
        <div
          className="
            absolute
            left-1/2
            top-[clamp(215px,35.5vw,495px)]
            flex
            -translate-x-1/2
            items-center
            justify-center
            gap-[clamp(12px,1.5vw,24px)]
            whitespace-nowrap
          "
        >
          {/* DONATE */}
          <button
            className="
              h-[clamp(38px,3.5vw,48px)]
              rounded-full
              bg-[#00D968]
              px-[clamp(18px,2.2vw,32px)]
              text-[clamp(9px,0.8vw,12px)]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white
              transition-all
              duration-300
              hover:bg-[#00C65F]
              hover:scale-105
            "
          >
            Donate
          </button>

          {/* I NEED HELP */}
          <span
            className="
              text-[clamp(9px,0.8vw,12px)]
              font-medium
              uppercase
              tracking-[0.03em]
              text-[#111111]
            "
          >
            I need help
          </span>

          {/* ARROW */}
          <button
            className="
              flex
              h-[clamp(38px,3.5vw,48px)]
              w-[clamp(38px,3.5vw,48px)]
              items-center
              justify-center
              rounded-full
              border
              border-black/20
              text-[#111111]
              transition-all
              duration-300
              hover:bg-[#5C8A4D]
              hover:text-white
            "
          >
            <HiArrowUpRight
              className="text-[clamp(16px,1.4vw,22px)]"
            />
          </button>
        </div>

        {/* ================= BARRE DU BAS ================= */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            flex
            w-[calc(100%-32px)]
            max-w-[1360px]
            -translate-x-1/2
            items-center
            justify-between
            border-t
            border-black/10
            py-[clamp(8px,1.2vw,18px)]
            px-[clamp(0px,1vw,16px)]
          "
        >
          {/* QUICK DONATE */}
          <div className="flex items-center gap-3">
            <button
              className="
                flex
                h-[clamp(30px,3vw,48px)]
                w-[clamp(30px,3vw,48px)]
                items-center
                justify-center
                rounded-full
                border
                border-black/15
              "
            >
              <FiGrid className="text-[clamp(12px,1vw,16px)]" />
            </button>

            <span
              className="
                text-[clamp(8px,0.8vw,14px)]
                font-medium
                uppercase
                text-[#111111]
              "
            >
              Quick Donate
            </span>
          </div>

          {/* LOGOS */}
          <div className="flex items-center justify-center gap-[clamp(25px,5vw,80px)]">
            {/* GOFUNDME */}
            <Image
              src="/img1.png"
              alt="GoFundMe"
              width={160}
              height={60}
              className="
                h-auto
                w-[clamp(75px,9vw,140px)]
                object-contain
              "
            />

              <Image
              src="/img2.png"
              alt="GoFundMe"
              width={160}
              height={60}
              className="
                h-auto
                w-[clamp(75px,9vw,140px)]
                object-contain
              "
            />
          
            

            {/* MEDTRONIC */}
            <span
              className="
                text-[clamp(13px,1.4vw,22px)]
                font-medium
                text-[#111111]
              "
            >
              Medtronic
            </span>
          </div>

          {/* SCROLL DOWN */}
          <div className="flex items-center gap-3">
            <span
              className="
                hidden
                text-[clamp(8px,0.8vw,13px)]
                font-medium
                uppercase
                text-[#111111]
                sm:block
              "
            >
              Scroll Down
            </span>

            <button
              className="
                flex
                h-[clamp(30px,3vw,48px)]
                w-[clamp(30px,3vw,48px)]
                items-center
                justify-center
                rounded-full
                border
                border-black/15
                transition-all
                duration-300
                hover:bg-[#5C8A4D]
                hover:text-white
              "
            >
              <VscArrowUp
                size={20}
                className="rotate-180"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}