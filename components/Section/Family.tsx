
import { HiArrowUpRight } from "react-icons/hi2";

export default function Family() {
  return (
    <section
      className="
        relative
        min-h-[700px]
        w-full
        overflow-hidden
        bg-[linear-gradient(180deg,#FFF9F7_0%,#FFF1F3_45%,#EED9C4_100%)]
      "
    >

      {/* =========================
          IMAGE GAUCHE
          Petit → Moyen → Grand
          ========================= */}

      <img
        src="images/family1.jpg"
        alt=""
        className="
          absolute
          left-[15%]
          top-[18%]
          h-[clamp(55px,7vw,100px)]
          w-[clamp(55px,7vw,100px)]
          rounded-full
          object-cover
        "
      />

      <img
        src="images/family2.jpg"
        alt=""
        className="
          absolute
          left-[7%]
          top-1/2
          h-[clamp(80px,10vw,140px)]
          w-[clamp(80px,10vw,140px)]
          -translate-y-1/2
          rounded-full
          object-cover
        "
      />

      <img
        src="images/family3.jpg"
        alt=""
        className="
          absolute
          bottom-[10%]
          left-[15%]
          h-[clamp(110px,14vw,200px)]
          w-[clamp(110px,14vw,200px)]
          rounded-full
          object-cover
        "
      />

      {/* =========================
          CONTENU CENTRAL
          ========================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[800px]
          flex-col
          items-center
          justify-center
          text-center
        "
      >

   <h2 className="rounded-[5px]  border-green-500 bg-green-100/60 px-2 py-1 backdrop-blur-sm">
  Take Action
</h2>

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
          Join Us In Making
          <br />
          A Difference
        </h2>

        <div
          className="
            absolute
            left-1/2
            top-[clamp(215px,35.5vw,495px)]
            flex
            -translate-x-1/2
            translate-y-10
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
            VOLUNTEER NOW
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
            LEARN MORE
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
      </div>

      {/* =========================
          IMAGE DROITE
          Grand → Moyen → Petit
          ========================= */}

      <img
        src="images/family4.jpg"
        alt=""
        className="
          absolute
          right-[15%]
          top-[10%]
          h-[clamp(110px,14vw,200px)]
          w-[clamp(110px,14vw,200px)]
          rounded-full
          object-cover
        
        "
      />

      <img
        src="images/family5.jpg"
        alt=""
        className="
          absolute
          right-[10%]
          top-1/2
          h-[clamp(80px,10vw,140px)]
          w-[clamp(80px,10vw,140px)]
          -translate-y-1/2
          rounded-full
          object-cover
        "
      />

      <img
        src="images/family6.jpg"
        alt=""
        className="
          absolute
          bottom-[18%]
          right-[20%]
          h-[clamp(55px,7vw,100px)]
          w-[clamp(55px,7vw,100px)]
          rounded-full
          object-cover
        "
      />
      

    </section>
  );
}
