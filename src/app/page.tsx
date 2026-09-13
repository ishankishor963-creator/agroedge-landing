"use client";

import { useEffect, useState } from "react";
import { Sprout, ArrowRight } from "lucide-react";
import { OrbitalHeroSection } from "@/components/ui/orbital-hero-section";

/** True while the viewport is narrow. Drives the layout swap below. */
function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

/**
 * AgroEdge marketing homepage.
 *
 * Built around the orbital background rather than laid on top of it. Three
 * things keep the copy readable without dimming the picture:
 *
 * 1. The Sun is pushed off centre with `focus`, so the busy half and the
 *    reading half never overlap.
 * 2. `scrim` darkens the edge the text sits on and fades out before the coils.
 * 3. The text block is capped in width, so a long line never runs into the art.
 *
 * On a narrow screen there is no room to put those halves side by side, so
 * the whole thing turns through 90°: art low, copy high, veil from the top.
 */
export default function Home() {
  const narrow = useNarrow();

  return (
    <main className="bg-black">
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-20">
        <div className="flex items-center gap-2 text-white">
          <Sprout className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-semibold tracking-tight">AgroEdge</span>
        </div>
        
          href="#"
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white"
        >
          Sign in
        </a>
      </nav>

      <section className="relative min-h-[92svh] w-full md:min-h-[720px]">
        <OrbitalHeroSection
          focus={narrow ? [0.5, 0.86] : [0.74, 0.42]}
          scrim={narrow ? "top" : "left"}
          scrimStrength={narrow ? 0.94 : 0.92}
          viewRadius={narrow ? 2.1 : 3.1}
          lead={narrow ? 0.05 : 0.12}
          glow={narrow ? 0.5 : 1}
        >
          <div className="flex h-full min-h-[92svh] items-start px-6 pt-24 sm:px-10 md:min-h-[720px] md:items-center md:pt-0 lg:px-20">
            <div className="max-w-[36rem]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
                AI-powered farm intelligence
              </div>

              <h1 className="text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.1rem]">
                Every field
                <br />
                is always moving
              </h1>

              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/60 md:mt-7">
                AgroEdge watches your soil, your crops, and your climate risk in
                real time — so you catch disease, drought, and pests before
                they cost you the season.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
                
                  href="https://homepy-dfudpukc6mugvypgwkticj.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </a>
                
                  href="#features"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </OrbitalHeroSection>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          One dashboard for the whole farm
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
          Sensors, cameras, and AI models working together — not six separate
          apps you have to check.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Disease detection",
              desc: "Photograph a leaf, get an instant diagnosis and treatment plan from a trained vision model.",
            },
            {
              title: "Live sensor dashboard",
              desc: "Soil moisture, humidity, and temperature streamed straight from your field hardware.",
            },
            {
              title: "Flood & drought alerts",
              desc: "Early warnings from sensor trends and forecast data, before conditions turn critical.",
            },
            {
              title: "Pest risk & IPM",
              desc: "Environmental pest-pressure modeling plus sticky-trap photo counting.",
            },
            {
              title: "AI farm assistant",
              desc: "Ask plain-language questions about your crops and get grounded, actionable answers.",
            },
            {
              title: "Field camera feed",
              desc: "Keep a visual eye on your plots without walking the rows every morning.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-sm font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/40 sm:px-10 lg:px-20">
        © {new Date().getFullYear()} AgroEdge. Smarter farming, powered by AI.
      </footer>
    </main>
  );
}
