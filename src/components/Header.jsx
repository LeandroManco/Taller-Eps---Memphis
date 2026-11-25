import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "01 Inicio", bg: "bg-[#FFD600]" },
  { to: "/especialidades", label: "02 Áreas", bg: "bg-[#72EFDD]" },
  { to: "/equipo", label: "03 Equipo", bg: "bg-[#C8B6FF]" },
  { to: "/planes", label: "04 Planes", bg: "bg-white" },
  { to: "/tecnologia", label: "05 Clínica", bg: "bg-[#80ED99]" },
  { to: "/cita", label: "06 Cita", bg: "bg-[#FF4D6D] text-white" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF5] border-b-4 border-black px-4 md:px-10 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-10 h-10 bg-[#FF4D6D] border-2 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#000] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
        <span className="font-black text-xl tracking-tight uppercase">
          VITA<span className="text-[#FF4D6D]">+</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `px-2.5 py-1 ${item.bg} border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all ${
                isActive ? "ring-2 ring-black" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link
        to="/cita"
        className="flex items-center gap-2 px-4 py-1.5 bg-[#FF4D6D] text-white border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
      >
        <span className="w-2.5 h-2.5 bg-[#FFD600] border border-black rounded-full"></span>
        Urgencias 24H
      </Link>
    </header>
  );
}