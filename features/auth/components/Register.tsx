import Navbar from "@/components/layout/Navbar";

export default function Register() {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-[url('/Register.jpeg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenu */}
      <div className="relative z-10">
        <Navbar />

        {/* Titre */}
        <div className="flex flex-col items-center mt-14">
          <button
  className="
    flex
    items-center
    justify-center
    px-8
    py-3
    rounded-[10px]
    bg-green-50
    text-black
    hover:bg-[#5C8A4D]
    hover:text-white
    transition
    -translate-y-10
  "
>
  <span className="text-[16px] font-medium leading-none">
    Get Help
  </span>
</button>


          <h1 className="text-center text-white text-[64px] font-extrabold leading-[1.1]">
            We're Here To Support You
          </h1>

          <h1 className="text-center text-white text-[64px] font-extrabold leading-[1.1] ">
            Every Step Of The Way
          </h1>
        </div>

        {/* Formulaire */}
        <div className="absolute left-12 top-52 w-[340px] text-white">
          <h2 className="text-[28px] font-bold mb-8">
            What's going on?
          </h2>

          {/* Diagnosis */}
          <div className="mb-6">
            <label className="block text-sm text-white/80 mb-2">
              Diagnosis or condition
            </label>

            <select
              className="
                w-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-full
                px-5
                py-3
                outline-none
                text-white
              "
            >
              <option className="text-black">Kidney Cancer</option>
              <option className="text-black">Lung Cancer</option>
              <option className="text-black">Breast Cancer</option>
            </select>
          </div>

          {/* Funding Goal */}
          <div className="mb-6">
            <label className="block text-sm text-white/80 mb-2">
              Funding Goal
            </label>

            <div
              className="
                flex
                items-center
                justify-between
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-full
                px-5
                py-3
              "
            >
              <input
                type="number"
                defaultValue="56000"
                className="w-full bg-transparent outline-none text-white"
              />

              <span>$</span>
            </div>
          </div>

          {/* Treatment */}
          <div className="mb-8">
            <label className="block text-sm text-white/80 mb-3">
              Treatment stage
            </label>

            <div
              className="
                flex
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-full
                p-1
              "
            >
              <button className="flex-1 py-2 rounded-full text-sm hover:bg-white/10 transition">
                Pre-op
              </button>

              <button className="flex-1 py-2 rounded-full bg-white text-black text-sm font-medium">
                Active
              </button>

              <button className="flex-1 py-2 rounded-full text-sm hover:bg-white/10 transition">
                Recovery
              </button>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-4">
            <button
              className="
                border
                border-white/30
                rounded-full
                px-5
                py-3
                hover:bg-white/10
                transition
              "
            >
              ATTACH DOCUMENTS
            </button>

            <button
              className="
                bg-white
                text-black
                rounded-full
                px-8
                py-3
                font-semibold
                hover:bg-gray-200
                transition
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