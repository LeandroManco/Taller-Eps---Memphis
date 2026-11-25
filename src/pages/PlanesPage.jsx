import { Link } from "react-router-dom";
import Card from "../components/Card";
import { planes } from "../data/planes";

export default function PlanesPage() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] w-full bg-[#FFFDF5] py-10 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-black text-[#FFD600] font-black text-sm uppercase">04</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Planes Médicos</h2>
            </div>
            <p className="font-bold text-xs sm:text-sm mt-1">
              Sin letra pequeña ni trámites eternos. Elige tu cobertura hoy.
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 bg-[#72EFDD] border-2 border-black font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
            Afiliación Inmediata
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {planes.map((plan) => (
            <Card
              key={plan.id}
              bgColor={plan.bgColor}
              textColor={plan.textColor}
              shadow={plan.shadow}
              className="p-5 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 ${plan.badgeBg} ${plan.badgeText} border-2 border-black font-black text-xs uppercase`}>
                    {plan.badge}
                  </span>
                  <span className={`font-black text-xs ${plan.codeColor}`}>{plan.code}</span>
                </div>
                <h3 className="font-black text-2xl uppercase mt-3">{plan.name}</h3>
                <div className="mt-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-xs font-bold ${plan.periodColor}`}>{plan.period}</span>
                </div>
                <ul className="mt-4 flex flex-col gap-1.5 text-xs font-bold">
                  {plan.features.map((feat) => (
                    <li key={feat}>✓ {feat}</li>
                  ))}
                </ul>
              </div>
              <Link
                to="/cita"
                className={`w-full py-2.5 ${plan.ctaBg} ${plan.ctaText} border-2 border-black font-black text-xs uppercase text-center ${plan.ctaHover} transition-colors block`}
              >
                {plan.ctaLabel}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}