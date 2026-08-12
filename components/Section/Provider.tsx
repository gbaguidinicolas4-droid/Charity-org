import { VscArrowUp } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";
import { ImPaypal } from "react-icons/im";
import { FaHandHoldingHeart, FaUser } from "react-icons/fa";

export default function Provider() {
  return (
    <section id="what-we-do" className="mt-20 px-4 h-[clamp(305px,51.5vw,700px)]
        translate-y-20">
      <div className="flex flex-col items-center">

        {/* Badge */}
        <button
          className="
            flex items-center justify-center
            px-5 py-2
            rounded-[5px]
            bg-[#DFF3E3]
            text-black
            hover:bg-[#5C8A4D] hover:text-white
            transition
          "
        >
          <span className="text-[12px] font-semibold leading-none">
            What We Do
          </span>
        </button>

        {/* Titre */}
        <div className="mt-5 text-center">
          <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-black leading-[1.15] text-black">
            Providing Hope And Help
          </h2>
          <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-black leading-[1.15] text-black">
            During Challenging Times
          </h2>

          <div className="flex items-center gap-3 justify-center mt-6">
            <span className="text-[11px] font-semibold tracking-[0.08em] text-black">
              LEARN MORE
            </span>

            <button
              className="
                w-10 h-10
                rounded-full
                border border-black/15
                flex items-center justify-center
                hover:bg-[#5C8A4D] hover:text-white hover:border-transparent
                transition
              "
            >
              <VscArrowUp size={16} className="rotate-45" />
            </button>
          </div>
        </div>
      </div>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-2 mt-14 w-full md:w-[90%] lg:w-[95%] mx-auto ">

        {/* Carte 1 */}
        <div className="border border-gray-200 rounded-[50px] p-6 hover:bg-[linear-gradient(180deg,#FFF9F7_0%,#FFF1F3_45%,#EED9C4_100%)]">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <HiMiniCurrencyDollar size={16} />
          </div>

          <h3 className="mt-5 text-[17px] font-bold text-black">
            Make a Donation
          </h3>

          <p className="mt-2.5 text-[13px] leading-6 text-gray-500 max-w-[250px]">
            Contribute today to help fund treatments, research, and essential
            services for those battling cancer.
          </p>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <FaApple size={14} />
              <FcGoogle size={14} />
              <ImPaypal size={14} />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-black text-[12px] whitespace-nowrap">
                Payment Options
              </span>

              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#5C8A4D] hover:text-white transition">
                <VscArrowUp size={13} className="rotate-45" />
              </button>
            </div>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="border border-gray-200 rounded-[50px] p-6 hover:bg-[linear-gradient(180deg,#FFF9F7_0%,#FFF1F3_45%,#EED9C4_100%)]">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <FaHandHoldingHeart size={15} />
          </div>

          <h3 className="mt-5 text-[17px] font-bold text-black">
            Get Support
          </h3>

          <p className="mt-2.5 text-[13px] leading-6 text-gray-500 max-w-[250px]">
            Access vital resources, financial aid, and counseling for cancer
            patients and their families in times of need.
          </p>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2 text-[12px] font-medium text-black">
              <span># Financial Aid</span>
              <span># Therapy</span>
            </div>

            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#5C8A4D] hover:text-white transition">
              <VscArrowUp size={13} className="rotate-45" />
            </button>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="border border-gray-200 rounded-[50px] p-6 hover:bg-[linear-gradient(180deg,#FFF9F7_0%,#FFF1F3_45%,#EED9C4_100%)]">
          <div className="w-9 h-9 rounded-full  bg-gray-100 flex items-center justify-center">
            <FaUser size={15} />
          </div>

          <h3 className="mt-5 text-[17px] font-bold text-black">
            Become a Volunteer
          </h3>

          <p className="mt-2.5 text-[13px] leading-6 text-gray-500 max-w-[250px]">
            Join our team of volunteers to support cancer patients, assist
            with community outreach, and make a positive impact.
          </p>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center -space-x-2.5">
              <img
                src="/person1.avif"
                alt="Person 1"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="/person2.avif"
                alt="Person 2"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="/person3.jpg"
                alt="Person 3"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-black text-[12px] whitespace-nowrap">
                Join Our Team
              </span>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#5C8A4D] hover:text-white transition">
                <VscArrowUp size={13} className="rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}