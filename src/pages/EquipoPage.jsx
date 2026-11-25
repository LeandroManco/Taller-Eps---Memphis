import Card from "../components/Card";
import { equipoMedico } from "../data/equipo";

export default function EquipoPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full bg-[#C8B6FF] py-10 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-black text-[#FFD600] font-black text-sm uppercase">03</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Equipo Médico</h2>
            </div>
            <p className="font-bold text-xs sm:text-sm mt-1">
              Especialistas certificados con trato cercano y tecnología de punta.
            </p>
          </div>
          <span className="hidden sm:inline-block px-4 py-1.5 bg-[#FFD600] border-2 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-2">
            +20 Doctores
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {equipoMedico.map((doc) => (
            <Card key={doc.id} className="p-4 flex flex-col gap-3">
              <div className={`relative border-2 border-black overflow-hidden h-44 ${doc.frameBg}`}>
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                <span className={`absolute bottom-2 left-2 px-2.5 py-0.5 ${doc.badgeBg} border-2 border-black font-black text-[11px] uppercase`}>
                  {doc.experience}
                </span>
              </div>
              <div>
                <h3 className="font-black text-lg uppercase">{doc.name}</h3>
                <p className={`font-bold text-xs ${doc.specialtyColor} uppercase`}>{doc.specialty}</p>
                <p className="text-xs font-medium text-neutral-700 mt-1">{doc.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}