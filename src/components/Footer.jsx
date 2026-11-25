import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t-4 border-black px-4 md:px-10 h-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#FFD600] inline-block"></span>
        <span className="font-black text-xs uppercase tracking-widest">
          VITA+ CENTRO MÉDICO
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-4 text-xs font-bold uppercase">
        <span className="text-[#72EFDD]">● Urgencias 24H</span>
        <span className="text-[#FFD600]">● Av. Central 420</span>
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="px-2.5 py-0.5 bg-[#FF4D6D] text-white border border-white font-black text-[11px] uppercase hover:bg-[#FFD600] hover:text-black transition-colors"
        >
          ↑ Subir
        </Link>
      </div>
    </footer>
  );
}