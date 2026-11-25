import { useState } from "react";
import { areasConsulta, horariosDisponibles } from "../data/citas";

export default function CitaPage() {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("09:00");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [area, setArea] = useState(areasConsulta[0]);
  const [confirmado, setConfirmado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim()) return;
    setConfirmado(true);
  };

  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full bg-[#FFD600] py-10 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFDF5] border-4 border-black p-5 md:p-7 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase">Tu Cita</h2>
              <p className="text-xs font-bold text-neutral-700 mt-0.5">
                Elige un horario y confirmamos tu turno al instante.
              </p>
            </div>
            <span className="px-3 py-1 bg-[#FF4D6D] text-white border-2 border-black font-black text-xs uppercase -rotate-3">
              Hoy
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {horariosDisponibles.map((item) => (
              <button
                key={item.hora}
                type="button"
                onClick={() => setHorarioSeleccionado(item.hora)}
                className={`py-2 border-2 border-black font-black text-sm shadow-[3px_3px_0px_0px_#000] transition-colors ${
                  horarioSeleccionado === item.hora
                    ? "bg-[#3A86FF] text-white"
                    : `${item.bg} hover:bg-[#3A86FF] hover:text-white`
                }`}
              >
                {item.hora}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre completo"
              className="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]"
            />
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono / WhatsApp"
              className="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]"
            />
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]"
            >
              {areasConsulta.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#FF4D6D] text-white border-2 border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            Reservar Ahora →
          </button>

          {confirmado && (
            <div className="p-3 bg-[#80ED99] border-2 border-black font-bold text-xs">
              Cita reservada para <span className="font-black">{nombre}</span> en{" "}
              <span className="font-black">{area}</span> a las{" "}
              <span className="font-black">{horarioSeleccionado}</span>.
            </div>
          )}
        </form>

        <div className="bg-[#C8B6FF] border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-4">
          <div className="relative border-4 border-black overflow-hidden bg-white h-48 md:h-52">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
              alt="Instalaciones de VITA+ Centro Médico"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#FFD600] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
              Sede Central
            </div>
          </div>

          <div className="bg-white border-2 border-black p-3 flex flex-col gap-1">
            <h3 className="font-black text-sm uppercase">Visítanos sin cita previa en Urgencias</h3>
            <p className="text-xs font-bold text-neutral-700">
              Estacionamiento gratuito y acceso directo para ambulancias.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="bg-white border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_#000]">
              <span className="font-black text-xs uppercase">📍 Av. Central 420</span>
            </div>
            <div className="bg-[#FFD600] border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_#000]">
              <span className="font-black text-xs">📞 800-8482</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}