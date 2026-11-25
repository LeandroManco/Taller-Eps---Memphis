import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden bg-[#FFFDF5] py-10 px-6 md:px-12 flex items-center justify-center">
      {/* Decoraciones Memphis */}
      <svg className="absolute top-6 left-6 w-20 h-20 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none">
        <circle cx="15" cy="15" r="4" fill="#000" />
        <circle cx="35" cy="15" r="4" fill="#000" />
        <circle cx="55" cy="15" r="4" fill="#000" />
        <circle cx="15" cy="35" r="4" fill="#000" />
        <circle cx="35" cy="35" r="4" fill="#000" />
        <circle cx="55" cy="35" r="4" fill="#000" />
      </svg>

      <svg className="absolute bottom-6 left-12 w-28 h-10 pointer-events-none hidden sm:block" viewBox="0 0 120 40" fill="none">
        <path d="M5 30 L20 10 L35 30 L50 10 L65 30 L80 10 L95 30 L110 10" stroke="#FF4D6D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg className="absolute top-8 right-10 w-16 h-16 pointer-events-none hidden md:block" viewBox="0 0 80 80" fill="none">
        <polygon points="40,8 72,68 8,68" fill="#FFD600" stroke="#000" strokeWidth="4" />
      </svg>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Columna Izquierda */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4 md:gap-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#72EFDD] border-2 border-black shadow-[4px_4px_0px_0px_#000] -rotate-2">
            <span className="font-black text-xs uppercase tracking-widest">Centro Médico Integral</span>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight uppercase">
            SALUD
            <span className="inline-block bg-[#FFD600] border-4 border-black px-3 py-1 shadow-[6px_6px_0px_0px_#000] rotate-1 mt-1">
              SIN PAUSA
            </span>
          </h1>

          <p className="text-sm sm:text-base font-bold text-neutral-800 max-w-md bg-white border-2 border-black px-4 py-3 shadow-[4px_4px_0px_0px_#000]">
            Atención médica inmediata, diagnóstico digital y más de 20 especialistas certificados en un solo lugar.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000]">
              <span className="w-3 h-3 bg-[#38B000] border border-black rounded-full"></span>
              <span className="font-black text-base">24/7</span>
            </div>
            <div className="flex items-center gap-2 bg-[#C8B6FF] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000]">
              <span className="font-black text-base">+15</span>
              <span className="font-bold text-xs uppercase">Áreas</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FF4D6D] text-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000]">
              <span className="font-black text-base">15 min</span>
              <span className="font-bold text-xs uppercase">Espera máx.</span>
            </div>
          </div>

          <Link
            to="/especialidades"
            className="mt-1 inline-flex items-center gap-3 px-7 py-3 bg-black text-white font-black text-sm uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_0px_#FFD600] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Explorar Áreas →
          </Link>
        </div>

        {/* Columna Derecha */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md bg-[#72EFDD] border-4 border-black shadow-[10px_10px_0px_0px_#000] p-4">
            <div className="absolute -top-5 -left-5 z-20 w-14 h-14 bg-[#FFD600] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
              <svg className="w-7 h-7 text-[#FF4D6D]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" stroke="#000" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="relative border-4 border-black overflow-hidden bg-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                alt="Consulta médica en VITA+ Centro Médico"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-3 flex items-center justify-between bg-white border-2 border-black px-3 py-2">
              <span className="font-black text-xs uppercase tracking-wide">Diagnóstico Digital</span>
              <span className="px-2 py-0.5 bg-[#80ED99] border border-black font-black text-[11px] uppercase">En vivo</span>
            </div>

            <div className="absolute -bottom-5 -right-4 z-20 bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000] rotate-3 flex items-center gap-3">
              <span className="font-black text-sm text-[#FF4D6D]">♥ 72 BPM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}