import React, { useState } from 'react';
import {
  Sparkles,
  Download,
  Plus,
  Film,
  Camera,
  Layers,
  CheckCircle2,
  ArrowRight,
  Info,
  Play,
  Sliders,
  Maximize2,
  Wand2,
} from 'lucide-react';
import { STEP_BY_STEP_GUIDE, StepGuideItem } from '../data/flowData';

interface Props {
  isDark: boolean;
}

export const AnnotatedFlowCaptures: React.FC<Props> = ({ isDark }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'all' | 'single'>('all');

  const renderNumberBadge = (num: number, label: string, positionClass: string, arrowDir: 'down' | 'left' | 'right' | 'up' = 'down') => (
    <div
      className={`absolute ${positionClass} z-20 flex items-center gap-1.5 pointer-events-none select-none`}
    >
      <div className="relative flex items-center gap-1.5 bg-amber-500 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.85)] border-2 border-white">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-xs font-black">
          {num}
        </span>
        <span className="whitespace-nowrap tracking-tight">{label}</span>
        {arrowDir === 'down' && (
          <svg className="w-4 h-4 text-slate-950 -mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        )}
        {arrowDir === 'right' && (
          <svg className="w-4 h-4 text-slate-950 -mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </div>
  );

  const renderStaticCaptureScreen = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return (
          <div className="relative bg-[#0B0F14] text-slate-100 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl">
            {/* Top Browser / App Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131922] border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">gemini.google.com · Imagen 3 Studio</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                Captura Estática Anotada · Paso 1
              </span>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              {/* Left: Prompt input & generated output */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative rounded-xl bg-[#161F2C] border-2 border-amber-500/70 p-4">
                  {renderNumberBadge(1, 'Pegar Prompt Estructurado aquí', '-top-4 left-3', 'down')}
                  <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Prompt enviado a Gemini
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/40 p-3 rounded-lg border border-slate-700/70">
                    "Póster publicitario vertical <span className="text-emerald-400 font-bold">9:16</span> de suplemento natural <span className="text-amber-300 font-bold">Zooone EYE VITAMIN</span>. En el centro, frasco de vidrio ámbar con tapa dorada... Debajo, <span className="text-amber-300 font-bold">4 placas cuadradas de oro</span>: 1) Hidrata y Protege Ojos, 2) Visión Más Brillante, 3) Mejora Enfoque, 4) Salud Ocular Completa..."
                  </p>
                </div>

                <div className="rounded-xl bg-[#121822] border border-slate-800 p-3.5 space-y-2">
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Dos opciones que puedes pedir en Gemini:
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                      <span className="font-bold text-emerald-300 block">Opción A: Foto Limpia</span>
                      <span className="text-slate-400 text-[11px]">Sin textos externos, ideal para animar el agua/luz en la Escena 1 de Flow.</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30">
                      <span className="font-bold text-amber-300 block">Opción B: Póster 9:16</span>
                      <span className="text-slate-400 text-[11px]">Con los 4 medallones dorados de beneficios y tabla inferior (Escena 4).</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Generated Image Preview with annotations 2, 3, 4 */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-56 rounded-xl overflow-hidden border-2 border-slate-700 shadow-xl bg-black">
                  <img
                    src="/images/zooone-eye-vitamin.png"
                    alt="Ejemplo generado en Gemini Zooone Eye Vitamin"
                    className="w-full h-72 object-cover"
                  />
                  {/* Download button highlight */}
                  <div className="absolute top-2.5 right-2.5 w-9 h-9 rounded-lg bg-black/80 border-2 border-amber-400 flex items-center justify-center text-white shadow-lg">
                    <Download className="w-4 h-4 text-amber-400" />
                  </div>
                  {renderNumberBadge(4, 'Descargar PNG Alta Res', 'top-2 right-12', 'right')}
                  {renderNumberBadge(2, 'Verificar etiqueta nítida', 'top-28 left-2', 'down')}
                  {renderNumberBadge(3, '4 Sellos de Beneficios', 'bottom-10 left-2', 'down')}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="relative bg-[#0B0F14] text-slate-100 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131922] border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">labs.google/fx/tools/flow · Panel Inicial de Google Flow</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                Captura Estática Anotada · Paso 2
              </span>
            </div>

            <div className="p-5 space-y-5">
              {/* Top Flow Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#151C26] p-3.5 rounded-xl border border-slate-800 relative">
                <div className="relative flex items-center gap-3">
                  <div className="px-3.5 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 ring-4 ring-amber-400">
                    <Plus className="w-4 h-4 stroke-[2.5]" /> + New Project
                  </div>
                  {renderNumberBadge(1, 'Clic en + New Project', '-top-8 left-0', 'down')}
                  <span className="text-xs text-slate-400 font-mono">Proyecto: Spot_Beneficios_Naturales</span>
                </div>

                <div className="flex items-center gap-3 relative">
                  <div className="relative px-3 py-1.5 rounded-lg bg-slate-900 border-2 border-amber-400 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Aspect Ratio: 9:16 Vertical
                    {renderNumberBadge(3, 'Elegir 9:16 (Reels/Estados)', '-top-9 -left-6', 'down')}
                  </div>
                  <div className="relative px-3 py-1.5 rounded-lg bg-slate-900 border-2 border-amber-400 text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" /> Model: Veo 2 / Veo 3 (Highest Quality)
                    {renderNumberBadge(2, 'Activar Modelo Veo Quality', '-bottom-9 right-0', 'up')}
                  </div>
                </div>
              </div>

              {/* Center Canvas Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                <div className="p-4 rounded-xl bg-[#121820] border border-slate-800 text-xs space-y-2">
                  <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">Bandeja Izquierda</div>
                  <div className="font-bold text-white text-sm">Ingredients (Activos)</div>
                  <p className="text-slate-400 leading-relaxed">
                    Aquí guardas tus fotos generadas en Gemini (el frasco limpio, el póster con beneficios y fotos de ingredientes).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#121820] border border-emerald-500/40 text-xs space-y-2">
                  <div className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">Lienzo Central</div>
                  <div className="font-bold text-white text-sm">Visor 9:16 + Prompt Box</div>
                  <p className="text-slate-400 leading-relaxed">
                    Donde previsualizas las 4 variaciones de video que genera Veo para cada escena de 4 segundos.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#121820] border border-slate-800 text-xs space-y-2">
                  <div className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">Barra Inferior</div>
                  <div className="font-bold text-white text-sm">Scene Builder (Timeline)</div>
                  <p className="text-slate-400 leading-relaxed">
                    Donde unes la Escena 1 (Gancho), Escena 2 y 3 (Beneficios) y Escena 4 (Cierre con Dosis).
                  </p>
                </div>
              </div>

              {/* Bottom Mode Selector */}
              <div className="relative bg-[#151C26] p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 relative">
                  <span className="px-3.5 py-2 rounded-lg bg-amber-500/20 border-2 border-amber-400 text-amber-300 font-bold text-xs">
                    Frames to Video (Fotograma a Video)
                  </span>
                  <span className="px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium text-xs">
                    Ingredients to Video
                  </span>
                  <span className="px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium text-xs">
                    Text to Video
                  </span>
                  {renderNumberBadge(4, 'Seleccionar modo de trabajo aquí', '-top-8 left-4', 'down')}
                </div>
                <span className="text-xs text-slate-400">
                  Usa siempre <strong className="text-amber-300">Frames to Video</strong> para que el frasco no cambie de forma.
                </span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="relative bg-[#0B0F14] text-slate-100 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131922] border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">Google Flow · Modo "Frames to Video" (Anclaje de Producto)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                Captura Estática Anotada · Paso 3 (CLAVE)
              </span>
            </div>

            <div className="p-5 space-y-5">
              {/* Top Tab Indicator */}
              <div className="relative inline-flex items-center gap-2 bg-[#161F2C] p-1.5 rounded-xl border border-slate-700">
                <div className="px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-xs ring-2 ring-amber-400">
                  Frames to Video
                </div>
                <div className="px-4 py-1.5 rounded-lg text-slate-400 text-xs">Ingredients to Video</div>
                {renderNumberBadge(1, 'Activar pestaña Frames to Video', '-top-7 left-2', 'down')}
              </div>

              {/* First Frame -> Last Frame Slots */}
              <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center bg-[#121822] p-5 rounded-xl border border-slate-800 relative">
                {/* First Frame Box */}
                <div className="md:col-span-5 relative rounded-xl bg-[#0D1219] border-2 border-amber-400 p-3.5 flex items-center gap-3.5">
                  {renderNumberBadge(2, 'Subir foto de Gemini en First Frame', '-top-4 left-3', 'down')}
                  <img
                    src="/images/fos-probioticos-zinc.png"
                    alt="First Frame FOS Probioticos"
                    className="w-16 h-24 object-cover rounded-lg border border-slate-700 shrink-0"
                  />
                  <div className="space-y-1 text-xs">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                      FIRST FRAME (FOTOGRAMA INICIAL)
                    </span>
                    <div className="font-bold text-white">Imagen Base del Producto</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Al subir tu foto aquí, Google Flow <strong className="text-emerald-300">congela la etiqueta real</strong> para que las letras nunca se deformen.
                    </p>
                  </div>
                </div>

                {/* Middle Connector */}
                <div className="md:col-span-1 flex flex-col items-center justify-center text-amber-400 relative">
                  <ArrowRight className="w-6 h-6" />
                  <span className="text-[10px] font-mono text-slate-400 mt-1">4 seg</span>
                  {renderNumberBadge(4, 'Transición IA', '-top-7 -left-8', 'down')}
                </div>

                {/* Last Frame Box */}
                <div className="md:col-span-5 relative rounded-xl bg-[#0D1219] border-2 border-dashed border-amber-500/60 p-3.5 flex items-center gap-3.5">
                  {renderNumberBadge(3, 'Opcional: Póster de 4 Beneficios en Last Frame', '-top-4 left-3', 'down')}
                  <img
                    src="/images/zooone-eye-vitamin.png"
                    alt="Last Frame Poster Beneficios"
                    className="w-16 h-24 object-cover rounded-lg border border-slate-700 shrink-0"
                  />
                  <div className="space-y-1 text-xs">
                    <span className="inline-block px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                      LAST FRAME (FOTOGRAMA FINAL)
                    </span>
                    <div className="font-bold text-white">Cierre con los 4 Medallones</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Ideal para la última escena: termina mostrando los 4 beneficios dorados y la dosis diaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="relative bg-[#0B0F14] text-slate-100 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131922] border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">Google Flow · Controles de Cámara (Camera Motion) y Prompt de Acción</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                Captura Estática Anotada · Paso 4
              </span>
            </div>

            <div className="p-5 space-y-5">
              {/* Camera Motion Pills */}
              <div className="relative bg-[#141C27] p-4 rounded-xl border border-slate-800">
                {renderNumberBadge(1, 'Seleccionar Movimiento de Cámara Suave', '-top-4 left-4', 'down')}
                <div className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-400" /> Camera Motion (Selector de Movimiento en Flow):
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs ring-2 ring-amber-400">
                    ✓ Dolly In (Acercamiento Lento · Recomendado)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs">
                    ✓ Orbit Suave (15° Izquierda a Derecha)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs">
                    ✓ Static Macro (Frasco Fijo + Agua/Polvo en Slow Motion)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs line-through">
                    ✕ Giro 360° Completo (Evitar)
                  </span>
                </div>
              </div>

              {/* Prompt Box inside Flow */}
              <div className="relative bg-[#141C27] p-4 rounded-xl border-2 border-amber-400/80 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                  <div className="md:col-span-9 space-y-2 relative">
                    {renderNumberBadge(2, 'Frase de bloqueo de etiqueta', '-top-6 left-0', 'down')}
                    {renderNumberBadge(3, 'Física en Cámara Lenta', '-top-6 right-8', 'down')}
                    <p className="font-mono text-xs bg-black/50 p-3.5 rounded-lg border border-slate-700 leading-relaxed text-slate-200">
                      "<span className="bg-emerald-500/25 text-emerald-300 px-1 py-0.5 rounded font-bold">The bottle remains perfectly still and sharp in the center.</span>{' '}
                      <span className="bg-amber-500/25 text-amber-300 px-1 py-0.5 rounded font-bold">In super slow motion</span>, golden turmeric powder expands softly in mid-air backlit by warm amber studio light."
                    </p>
                  </div>
                  <div className="md:col-span-3 flex justify-end relative">
                    {renderNumberBadge(4, 'Clic en Generate', '-top-7 right-2', 'down')}
                    <button
                      type="button"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg ring-2 ring-white"
                    >
                      <Wand2 className="w-4 h-4" /> Generate (4 clips)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="relative bg-[#0B0F14] text-slate-100 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131922] border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">Google Flow · Modo "Ingredients" (Escenas de Beneficios e Ingredientes)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                Captura Estática Anotada · Paso 5
              </span>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Left Ingredients Drawer */}
              <div className="lg:col-span-5 relative bg-[#141C27] p-4 rounded-xl border-2 border-amber-400/80 space-y-3">
                {renderNumberBadge(1, 'Subir Frasco + Ingredientes', '-top-4 left-3', 'down')}
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" /> Panel Ingredients (Activos):
                </div>
                <div className="grid grid-cols-3 gap-2.5 pt-1 relative">
                  <div className="p-1.5 rounded-lg bg-black/50 border-2 border-emerald-400 text-center">
                    <img src="/images/curcuma-ashwagandha.jpg" alt="Frasco" className="w-full h-16 object-cover rounded" />
                    <span className="text-[10px] text-emerald-300 font-bold block mt-1">✓ Activo 1: Frasco</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/50 border-2 border-emerald-400 text-center">
                    <img src="/images/miel-propoleo.jpg" alt="Ingredientes" className="w-full h-16 object-cover rounded" />
                    <span className="text-[10px] text-emerald-300 font-bold block mt-1">✓ Activo 2: Puros</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/50 border border-dashed border-slate-600 flex flex-col items-center justify-center h-[88px] text-slate-400">
                    <Plus className="w-4 h-4" />
                    <span className="text-[10px] mt-1">Activo 3</span>
                  </div>
                  {renderNumberBadge(2, 'Marcar activos a combinar', '-bottom-6 left-4', 'up')}
                </div>
              </div>

              {/* Right Preview + Add to Scene */}
              <div className="lg:col-span-7 bg-[#141C27] p-4 rounded-xl border border-slate-800 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">
                    Escena Intermedia (Segundos 4 al 12): Demostración de Beneficios
                  </span>
                  <div className="relative">
                    {renderNumberBadge(4, 'Enviar a la línea de tiempo', '-top-7 right-0', 'down')}
                    <span className="px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-xs ring-2 ring-amber-400">
                      + Add to Scene
                    </span>
                  </div>
                </div>
                <div className="relative p-3 rounded-lg bg-black/40 border border-slate-700 text-xs text-slate-300 font-mono">
                  {renderNumberBadge(3, 'Prompt enfocando beneficios e ingredientes', '-bottom-6 left-3', 'up')}
                  "Plano macro cinematográfico del frasco junto a sus ingredientes naturales puros con destellos dorados, ideal para superponer los Beneficios 1, 2, 3 y 4."
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
      default:
        return (
          <div className="relative bg-[#0B0F14] text-slate-100 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131922] border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">Google Flow · Scene Builder (Video Explicativo de Beneficios 16s)</span>
              </div>
              <div className="relative">
                {renderNumberBadge(4, 'Exportar Video Final MP4', 'top-8 right-0', 'up')}
                <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center gap-1.5 ring-2 ring-white">
                  <Download className="w-3.5 h-3.5" /> Export Video (MP4)
                </span>
              </div>
            </div>

            <div className="p-5 space-y-6">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>
                  Línea de Tiempo en <strong className="text-white">Scene Builder</strong>: Cómo quedan encadenadas las 4 escenas para explicar los beneficios del producto:
                </span>
              </div>

              {/* 4-Scene Timeline Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3">
                {/* Scene 1 */}
                <div className="relative rounded-xl bg-[#151E2B] border-2 border-emerald-500/70 p-3 space-y-2">
                  {renderNumberBadge(1, 'Clip 1: Gancho', '-top-4 left-2', 'down')}
                  <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>ESCENA 1</span>
                    <span>00:00 - 00:04s</span>
                  </div>
                  <div className="font-bold text-xs text-white">El Gancho + Frasco</div>
                  <p className="text-[11px] text-slate-300 bg-black/40 p-2 rounded border border-slate-800">
                    "¿Vista cansada? Visión clara y ojos protegidos"
                  </p>
                  <div className="text-[10px] text-amber-300 font-medium">First Frame + Dolly In</div>
                </div>

                {/* Scene 2 */}
                <div className="relative rounded-xl bg-[#151E2B] border-2 border-amber-400 p-3 space-y-2">
                  {renderNumberBadge(2, 'Clips 2 y 3: Los 4 Beneficios', '-top-4 left-2', 'down')}
                  <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
                    <span>ESCENA 2</span>
                    <span>00:04 - 00:08s</span>
                  </div>
                  <div className="font-bold text-xs text-white">Beneficios 1 y 2</div>
                  <p className="text-[11px] text-slate-300 bg-black/40 p-2 rounded border border-slate-800">
                    "💧 1. Hidrata tus ojos · ✨ 2. Visión más brillante"
                  </p>
                  <div className="text-[10px] text-emerald-300 font-medium">Orbit 15° + Luz dorada</div>
                </div>

                {/* Scene 3 */}
                <div className="relative rounded-xl bg-[#151E2B] border-2 border-amber-400 p-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
                    <span>ESCENA 3</span>
                    <span>00:08 - 00:12s</span>
                  </div>
                  <div className="font-bold text-xs text-white">Beneficios 3 y 4</div>
                  <p className="text-[11px] text-slate-300 bg-black/40 p-2 rounded border border-slate-800">
                    "🎯 3. Mejora enfoque · 🛡️ 4. Salud ocular con Luteína"
                  </p>
                  <div className="text-[10px] text-emerald-300 font-medium">Macro Ingredientes</div>
                </div>

                {/* Scene 4 */}
                <div className="relative rounded-xl bg-[#151E2B] border-2 border-purple-400 p-3 space-y-2">
                  {renderNumberBadge(3, 'Clip 4: Póster + Dosis', '-top-4 left-2', 'down')}
                  <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
                    <span>ESCENA 4</span>
                    <span>00:12 - 00:16s</span>
                  </div>
                  <div className="font-bold text-xs text-white">Ficha + Modo de Uso</div>
                  <p className="text-[11px] text-slate-300 bg-black/40 p-2 rounded border border-slate-800">
                    "Póster con los 4 sellos dorados · Toma 2 cápsulas al día"
                  </p>
                  <div className="text-[10px] text-purple-300 font-medium">Last Frame Infográfico</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const renderStepCard = (item: StepGuideItem) => (
    <div
      key={item.stepNumber}
      className={`rounded-2xl border p-6 md:p-8 transition-all ${
        isDark
          ? 'bg-[#111715]/90 border-emerald-900/50 shadow-xl'
          : 'bg-white border-stone-200 shadow-lg'
      }`}
    >
      {/* Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 text-slate-950 font-black text-lg shadow-md">
            {item.stepNumber}
          </span>
          <div>
            <span
              className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                item.toolName === 'Google Gemini'
                  ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                  : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
              }`}
            >
              {item.badge}
            </span>
            <h3
              className={`text-xl md:text-2xl font-bold mt-1 font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              {item.title}
            </h3>
          </div>
        </div>
      </div>

      <p className={`text-sm md:text-base mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
        {item.summary}
      </p>

      {/* Static Annotated UI Capture */}
      <div className="mb-6">{renderStaticCaptureScreen(item.stepNumber)}</div>

      {/* Numbered Annotations Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
        {item.callouts.map((c) => (
          <div
            key={c.number}
            className={`p-4 rounded-xl border flex items-start gap-3.5 ${
              isDark
                ? 'bg-black/40 border-slate-800 hover:border-amber-500/40'
                : 'bg-stone-50 border-stone-200 hover:border-amber-500/50'
            } transition-colors`}
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-black text-sm shrink-0 mt-0.5 shadow">
              {c.number}
            </span>
            <div>
              <h4 className={`font-bold text-sm ${isDark ? 'text-amber-300' : 'text-stone-900'}`}>
                {c.title}
              </h4>
              <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tip Footer */}
      <div
        className={`p-4 rounded-xl border flex items-start gap-3 ${
          isDark
            ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
            : 'bg-emerald-50 border-emerald-200 text-emerald-900'
        }`}
      >
        <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-xs md:text-sm leading-relaxed font-medium">{item.proTip}</p>
      </div>
    </div>
  );

  return (
    <section id="paso-a-paso" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Sliders className="w-3.5 h-3.5" /> Guía Visual con Capturas Estáticas Anotadas
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Paso a Paso: De Gemini a Google Flow (Con Flechas Numeradas)
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Cada tarjeta muestra exactamente dónde hacer clic en <strong>Gemini</strong> y en la interfaz de{' '}
              <strong>Google Flow</strong> (<code className="text-amber-400">Frames to Video</code>,{' '}
              <code className="text-emerald-400">Ingredients</code>, <code className="text-sky-400">Camera Motion</code> y{' '}
              <code className="text-purple-400">Scene Builder</code>) usando los círculos numerados{' '}
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-xs">
                1
              </span>{' '}
              al{' '}
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-xs">
                4
              </span>
              .
            </p>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : isDark
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Ver los 6 Pasos Seguidos
            </button>
            <button
              type="button"
              onClick={() => setViewMode('single')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : isDark
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Explorar Paso por Paso
            </button>
          </div>
        </div>

        {/* Step selector pills when in single mode */}
        {viewMode === 'single' && (
          <div className="flex flex-wrap gap-2 mb-6">
            {STEP_BY_STEP_GUIDE.map((s, idx) => (
              <button
                key={s.stepNumber}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeStep === idx
                    ? 'bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow-lg'
                    : isDark
                    ? 'bg-[#151D1A] text-slate-300 border border-slate-800 hover:border-emerald-500/40'
                    : 'bg-stone-100 text-stone-700 border border-stone-200 hover:border-emerald-500/40'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center font-black">
                  {s.stepNumber}
                </span>
                <span>Paso {s.stepNumber}</span>
              </button>
            ))}
          </div>
        )}

        {/* Steps Content */}
        {viewMode === 'all' ? (
          <div className="space-y-10">{STEP_BY_STEP_GUIDE.map((item) => renderStepCard(item))}</div>
        ) : (
          <div>{renderStepCard(STEP_BY_STEP_GUIDE[activeStep])}</div>
        )}
      </div>
    </section>
  );
};
