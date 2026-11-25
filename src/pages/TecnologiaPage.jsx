import Card from "../components/Card";
import { bloquesTecnologia } from "../data/tecnologia";

export default function TecnologiaPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full bg-[#80ED99] py-10 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-black text-[#FFD600] font-black text-sm uppercase">05</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Clínica y Tecnología</h2>
            </div>
            <p className="font-bold text-xs sm:text-sm mt-1">
              Espacios luminosos, cero filas largas y resultados en minutos.
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 bg-white border-2 border-black font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
            ★ 4.9 / 5 Pacientes
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-6">
            <div className="relative bg-white border-4 border-black p-3 shadow-[8px_8px_0px_0px_#000]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                alt="Salas clínicas digitales de VITA+"
                className="w-full h-56 sm:h-64 object-cover border-2 border-black"
              />
              <div className="mt-2.5 flex items-center justify-between">
                <span className="px-3 py-1 bg-[#FFD600] border-2 border-black font-black text-xs uppercase">
                  Equipamiento 2026
                </span>
                <span className="font-black text-xs uppercase">Certificación ISO</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {bloquesTecnologia.map((item) => (
              <Card key={item.id} bgColor={item.bgColor} shadow="shadow-[5px_5px_0px_0px_#000]" className="p-4">
                <span className="font-black text-2xl">{item.number}</span>
                <h3 className="font-black text-sm uppercase mt-1">{item.title}</h3>
                <p className="text-xs font-bold mt-1">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}