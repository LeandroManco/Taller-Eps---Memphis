import Card from "../components/Card";
import { especialidades } from "../data/especialidades";

function IconoEspecialidad({ tipo, colorClass }) {
  switch (tipo) {
    case "heart":
      return (
        <svg className={`w-7 h-7 ${colorClass}`} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="#000"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "star":
      return (
        <svg className={`w-7 h-7 ${colorClass}`} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="#000"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "tooth":
      return (
        <svg className={`w-7 h-7 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path
            d="M7 4c-2.5 0-4 2-4 5 0 3 1.5 5 2 8 .5 2.5 1.5 4 2.5 4s1.5-2 2.5-4c.5-1 1.5-1 2 0 1 2 1.5 4 2.5 4s2-1.5 2.5-4c.5-3 2-5 2-8 0-3-1.5-5-4-5-1.5 0-2.5.8-3 1.5C11.5 4.8 10.5 4 7 4z"
            fill="#FFF"
          />
        </svg>
      );
    case "flask":
      return (
        <svg className={`w-7 h-7 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
        </svg>
      );
    case "cross":
      return (
        <svg className={`w-7 h-7 ${colorClass}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" stroke="#000" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg className={`w-7 h-7 ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" fill="#FFD600" />
          <circle cx="12" cy="12" r="3" fill="#000" />
        </svg>
      );
  }
}

export default function EspecialidadesPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full bg-[#72EFDD] py-10 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-black text-[#FFD600] font-black text-sm uppercase">02</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Áreas Médicas</h2>
            </div>
            <p className="font-bold text-xs sm:text-sm mt-1">
              Tecnología clínica y atención personalizada en cada consulta.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 bg-white border-2 border-black px-3 py-1.5 shadow-[4px_4px_0px_0px_#000]">
            <img
              src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=200&q=80"
              alt="Dra. Laura Méndez"
              className="w-9 h-9 rounded-full object-cover border-2 border-black"
            />
            <div className="leading-tight">
              <p className="font-black text-xs uppercase">Dra. Laura Méndez</p>
              <p className="font-bold text-[11px] text-neutral-600">Dirección Médica · +20 Especialistas</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {especialidades.map((area) => (
            <Card
              key={area.id}
              bgColor={area.bgColor}
              textColor={area.textColor}
              className="p-4 md:p-5 hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2"
            >
              <div className={`w-12 h-12 ${area.iconBg} border-2 border-black ${area.shape} flex items-center justify-center`}>
                <IconoEspecialidad tipo={area.iconType} colorClass={area.iconColor} />
              </div>
              <h3 className="font-black text-sm md:text-base uppercase tracking-wide">{area.title}</h3>
              <p className="text-xs font-bold leading-snug hidden sm:block">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}