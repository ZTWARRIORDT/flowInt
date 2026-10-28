import React, { useState } from 'react';
import {
  Sparkles,
  Film,
  Sun,
  Moon,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Layers,
  Camera,
  Award,
  Mic,
  ShieldCheck,
  Wand2,
  BookOpen,
  Play,
} from 'lucide-react';
import { AnnotatedFlowCaptures } from './components/AnnotatedFlowCaptures';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { BenefitVideoBuilder } from './components/BenefitVideoBuilder';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#080C0A] text-slate-100' : 'bg-[#FAF7F2] text-stone-900'
      }`}
    >
      {/* Top Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
          isDark
            ? 'bg-[#080C0A]/85 border-emerald-900/50'
            : 'bg-[#FAF7F2]/90 border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 shadow-md">
              <Film className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-tight block leading-none">
                Flow<span className="text-emerald-400">Natural</span> Studio
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                Gemini → Google Flow · Videos de Beneficios
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
            <a
              href="#metodo-beneficios"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              01. Fórmula de 4 Escenas
            </a>
            <a
              href="#paso-a-paso"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              02. Interfaz Flow (Capturas Anotadas)
            </a>
            <a
              href="#catalogo-prompts"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              03. Catálogo 7 Productos + Prompts
            </a>
            <a
              href="#constructor-prompts"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              04. Constructor a Medida
            </a>
          </nav>

          {/* Right Actions: External Links + Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-emerald-400'
                  : 'bg-white border-stone-300 text-stone-800 hover:border-emerald-600'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Abrir Gemini
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://labs.google/fx/tools/flow"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow hover:opacity-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" /> Abrir Google Flow
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800'
                  : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-100'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-emerald-900/30">
        {/* Subtle Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gradient-to-r from-emerald-500/15 via-amber-500/10 to-emerald-500/15 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Guía Interactiva Paso a Paso · Productos Naturales en Gemini y Google Flow</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.12]">
                De una Imagen en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Gemini
                </span>{' '}
                a un Video de Beneficios en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  Google Flow
                </span>
              </h1>

              <p
                className={`text-base md:text-lg leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-stone-600'
                }`}
              >
                Aprende de forma visual e intuitiva cómo generar <strong>fotografías profesionales y pósters con medallones dorados</strong> en Gemini y cómo pasarlos escena por escena a <strong>Google Flow</strong> para crear videos comerciales donde se expliquen brevemente los <strong>4 beneficios clave</strong> de cada producto natural.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#catalogo-prompts"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg hover:opacity-95 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" /> Ver los 7 Productos y Prompts Listos
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#paso-a-paso"
                  className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#121A16] border-emerald-800/70 text-emerald-300 hover:border-amber-400'
                      : 'bg-white border-stone-300 text-stone-800 hover:border-emerald-600'
                  }`}
                >
                  <Layers className="w-4 h-4 text-amber-400" /> Ver Capturas Anotadas de Flow
                </a>
                <a
                  href="#constructor-prompts"
                  className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-black/40 border-slate-800 text-amber-300 hover:border-amber-400'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <Wand2 className="w-4 h-4" /> Crear Prompt a Medida
                </a>
              </div>

              {/* Mini Key Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/60">
                <div>
                  <div className="text-xl font-black text-amber-400 font-serif">6 Capturas</div>
                  <div className="text-xs text-slate-400">De la interfaz de Flow anotadas con flechas</div>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-400 font-serif">7 Productos</div>
                  <div className="text-xs text-slate-400">Incluyendo tus pósters 9:16 + fotos de estudio</div>
                </div>
                <div>
                  <div className="text-xl font-black text-amber-400 font-serif">4 Escenas</div>
                  <div className="text-xs text-slate-400">Por video explicando beneficios + dosis diaria</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase: Reference Posters -> Flow Timeline */}
            <div className="lg:col-span-5">
              <div
                className={`rounded-3xl border p-5 space-y-4 ${
                  isDark
                    ? 'bg-[#101714]/90 border-emerald-800/60 shadow-2xl'
                    : 'bg-white border-stone-200 shadow-2xl'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Tus Ejemplos Reales Incluidos en la Guía
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                    9:16 + 1:1 Studio
                  </span>
                </div>

                {/* 3 Featured Product Mini Cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href="#catalogo-prompts"
                    className="group relative rounded-xl overflow-hidden border border-amber-500/50 bg-black aspect-[9/14]"
                  >
                    <img
                      src="/images/zooone-eye-vitamin.png"
                      alt="Zooone Eye Vitamin"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2">
                      <span className="text-[9px] font-bold text-amber-400 block">EJEMPLO #1</span>
                      <span className="text-[11px] font-bold text-white leading-tight block">
                        Zooone Visión
                      </span>
                    </div>
                  </a>

                  <a
                    href="#catalogo-prompts"
                    className="group relative rounded-xl overflow-hidden border border-amber-500/50 bg-black aspect-[9/14]"
                  >
                    <img
                      src="/images/fos-probioticos-zinc.png"
                      alt="FOS Probióticos y Zinc"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2">
                      <span className="text-[9px] font-bold text-amber-400 block">EJEMPLO #2</span>
                      <span className="text-[11px] font-bold text-white leading-tight block">
                        FOS Probióticos
                      </span>
                    </div>
                  </a>

                  <a
                    href="#catalogo-prompts"
                    className="group relative rounded-xl overflow-hidden border border-emerald-500/50 bg-black aspect-[9/14]"
                  >
                    <img
                      src="/images/colageno-magnesio.jpg"
                      alt="Colágeno + Magnesio"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2">
                      <span className="text-[9px] font-bold text-emerald-400 block">ESTUDIO #3</span>
                      <span className="text-[11px] font-bold text-white leading-tight block">
                        Colágeno + Mg
                      </span>
                    </div>
                  </a>
                </div>

                {/* Mini Pipeline Summary */}
                <div className="p-3.5 rounded-2xl bg-black/60 border border-slate-800 space-y-2 text-xs">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <Film className="w-4 h-4" /> ¿Cómo se convierte en un Video de Beneficios?
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <strong className="text-amber-300 block">1. En Gemini:</strong>
                      Generas la foto limpia del frasco y el póster con los 4 medallones dorados.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <strong className="text-emerald-300 block">2. En Google Flow:</strong>
                      Anclas el frasco en <em>First Frame</em> y encadenas 4 escenas explicando cada beneficio.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: LA FÓRMULA DE 4 ESCENAS PARA EXPLICAR BENEFICIOS EN FLOW */}
      <section id="metodo-beneficios" className="py-16 border-b border-emerald-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Mic className="w-3.5 h-3.5" /> Estructura Comercial de 16 Segundos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Cómo Armar Videos donde se Expliquen Brevemente los Beneficios del Producto
            </h2>
            <p className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              En Google Flow cada clip dura entre <strong>4 y 5 segundos</strong>. Para que un video venda y explique claramente para qué sirve el producto natural sin aburrir, dividimos el video en <strong>4 escenas encadenadas en el Scene Builder</strong>:
            </p>
          </div>

          {/* 4-Scene Master Formula Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-emerald-800/50' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs">
                  ESCENA 1 · 0 a 4s
                </span>
                <span className="text-xs font-mono text-emerald-400">First Frame</span>
              </div>
              <h3 className="text-lg font-bold font-serif">1. El Gancho y Promesa</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Subes la foto de Gemini en <strong>First Frame</strong> con movimiento <em>Dolly In lento</em>. Mientras las partículas doradas o gotas se mueven, lanzas la pregunta gancho: <em>"¿Vista cansada?"</em> o <em>"¿Abdomen inflamado?"</em>.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-amber-500/40' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs">
                  ESCENA 2 · 4 a 8s
                </span>
                <span className="text-xs font-mono text-amber-400">Scene Extend</span>
              </div>
              <h3 className="text-lg font-bold font-serif">2. Beneficios #1 y #2</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Con movimiento <em>Orbit suave de 15°</em> alrededor del frasco, presentas los dos primeros medallones dorados (ej. <strong>1. Hidrata tus ojos · 2. Visión más brillante</strong>) en texto y voz en off.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-amber-500/40' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs">
                  ESCENA 3 · 8 a 12s
                </span>
                <span className="text-xs font-mono text-amber-400">Ingredients</span>
              </div>
              <h3 className="text-lg font-bold font-serif">3. Beneficios #3 y #4 + Pureza</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Muestras un plano macro del producto junto a sus ingredientes naturales (cúrcuma, menta, luteína, miel) explicando los beneficios <strong>#3 y #4</strong> (ej. <strong>Absorción 3x más rápida</strong>).
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-purple-500/40' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-purple-400 text-slate-950 font-black text-xs">
                  ESCENA 4 · 12 a 16s
                </span>
                <span className="text-xs font-mono text-purple-300">Last Frame</span>
              </div>
              <h3 className="text-lg font-bold font-serif">4. Póster Completo + Dosis</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Cierras con el <strong>Póster Infográfico 9:16</strong> (como el de <em>Zooone</em> o <em>FOS Probióticos</em>) mostrando los 4 sellos dorados juntos y la dosis: <em>"Solo 2 cápsulas al día · ¡Pídelo hoy!"</em>.
              </p>
            </div>
          </div>

          {/* 3 Golden Rules Banner */}
          <div
            className={`rounded-2xl border p-5 grid grid-cols-1 md:grid-cols-3 gap-4 ${
              isDark ? 'bg-emerald-950/25 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
            }`}
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="block text-sm mb-0.5">Regla 1: Nunca uses solo "Text to Video" para el frasco</strong>
                Sube siempre la imagen de Gemini en <code>Frames to Video → First Frame</code> para que la etiqueta y el logo queden idénticos.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Camera className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="block text-sm mb-0.5">Regla 2: Anima el entorno, no el envase</strong>
                En el prompt de Flow pide que se muevan las partículas doradas, el agua, el polvo o las hojas en <em>super slow motion</em> mientras el frasco está firme.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="block text-sm mb-0.5">Regla 3: Textos cortos de 2 a 3 palabras por sello</strong>
                Para que los medallones dorados sean fáciles de leer en el celular, usa frases cortas como <em>"Digestión Ligera"</em> o <em>"Defensas Altas"</em>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ANNOTATED STATIC UI CAPTURES OF GEMINI & GOOGLE FLOW */}
      <AnnotatedFlowCaptures isDark={isDark} />

      {/* SECTION 3: INTERACTIVE PRODUCT CATALOG (7 PRODUCTS + PROMPTS + 4-SCENE FLOW STORYBOARDS) */}
      <ProductCatalogSection isDark={isDark} />

      {/* SECTION 4: CUSTOM BENEFIT VIDEO & PROMPT BUILDER */}
      <BenefitVideoBuilder isDark={isDark} />

      {/* FOOTER */}
      <footer
        className={`border-t py-12 text-xs ${
          isDark ? 'bg-[#050806] border-emerald-950 text-slate-400' : 'bg-stone-100 border-stone-200 text-stone-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-black">
              F
            </div>
            <span className="font-bold text-sm text-white">
              FlowNatural Studio · Guía de Prompts de Imagen (Gemini) y Videos de Beneficios (Google Flow)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#paso-a-paso" className="hover:text-emerald-400">
              Paso a Paso
            </a>
            <a href="#catalogo-prompts" className="hover:text-emerald-400">
              Catálogo de Productos
            </a>
            <a href="#constructor-prompts" className="hover:text-emerald-400">
              Constructor
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
