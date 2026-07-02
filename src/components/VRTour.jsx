import { useState, useEffect } from "react";
import Bloom from "./Bloom.jsx";
import Eyebrow from "./Eyebrow.jsx";
import PanoramaViewer from "./PanoramaViewer.jsx";
import useImageStatus from "../hooks/useImageStatus.js";
import { vrScenes, vrImagePath } from "../data/vrTour.js";

function SceneCard({ scene, onOpen }) {
  const src = vrImagePath(scene.id);
  const status = useImageStatus(src);
  const ready = status === "ready";

  return (
    <button
      type="button"
      onClick={() => ready && onOpen(scene)}
      className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border text-left ${
        ready
          ? "border-blue-700/30 cursor-pointer"
          : "border-dashed border-line cursor-default"
      }`}
    >
      {ready ? (
        <>
          <img
            src={src}
            alt={scene.title}
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-orange-600 group-hover:scale-110 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                <path d="M8 5v14l11-7-11-7z" fill="var(--color-blue-900)" className="group-hover:fill-white" />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-50 px-5 text-center">
          <Bloom size={28} color="var(--color-blue-100)" />
          <p className="font-mono text-[11px] uppercase tracking-wide text-slate-light mt-3">
            {status === "loading" ? "Checking for image…" : `Add /vr-tour/${scene.id}.jpg`}
          </p>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-display text-[16px] text-white drop-shadow-sm">{scene.title}</p>
      </div>
    </button>
  );
}

export default function VRTour() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="virtual-tour" className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-end mb-12">
        <div>
          <Eyebrow tone="orange">Virtual Reality Tour</Eyebrow>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] text-blue-900 mt-4">
            Step inside Norcross Hospital, before you visit.
          </h2>
        </div>
        <p className="text-[16px] leading-relaxed text-slate">
          Explore our laboratories, wards, and treatment rooms in immersive 360°. Click any
          scene below, then drag to look around — just as if you were standing in the room.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vrScenes.map((scene) => (
          <SceneCard key={scene.id} scene={scene} onOpen={setActive} />
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] bg-blue-950 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div>
              <p className="font-display text-[18px] text-white">{active.title}</p>
              <p className="text-[13px] text-blue-100/60">{active.blurb}</p>
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close virtual tour"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 relative">
            <PanoramaViewer src={vrImagePath(active.id)} />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-wide text-white/60 bg-black/30 rounded-full px-4 py-1.5">
              Drag to look around
            </p>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 border-t border-white/10 overflow-x-auto">
            {vrScenes.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`shrink-0 font-mono text-[12px] uppercase tracking-wide px-4 py-2 rounded-full transition-colors ${
                  s.id === active.id ? "bg-orange-600 text-white" : "bg-white/10 text-blue-100/70 hover:bg-white/20"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
