import React, { useState } from 'react';
import {
  Sparkles,
  Film,
  Sun,
  Moon,
  ExternalLink,
  ArrowRight,
  Award,
  Mic,
  Wand2,
  BookOpen,
  Play,
  Music,
} from 'lucide-react';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { SceneLibrarySection } from './components/SceneLibrarySection';
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
                Flow<span className="text-emerald-400">Natural</span> Prompts
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                Prompts · Escenas · Beneficios · Música
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
            <a
              href="#catalogo-prompts"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              01. Catálogo de Productos y Prompts
            </a>
            <a
              href="#biblioteca-escenas"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              02. Biblioteca de Escenas y Música
            </a>
            <a
              href="#estructura-beneficios"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              03. Estructura de 4 Escenas
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

      {/* HERO SECTION: FOCUSED ON PROMPTS, SCENES & BACKGROUND MUSIC */}
      <section className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20 border-b border-emerald-900/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gradient-to-r from-emerald-500/15 via-amber-500/10 to-purple-500/15 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Laboratorio de Prompts de Imagen (Gemini) + Escenas con Música (Flow)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.12]">
                Prompts y Escenas para Videos de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Productos Naturales
                </span>{' '}
                y sus{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  Beneficios
                </span>
              </h1>

              <p
                className={`text-base md:text-lg leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-stone-600'
                }`}
              >
                Copia prompts profesionales de fotografía botánica para <strong>Gemini</strong> y secuencias de <strong>4 escenas cinematográficas para Google Flow</strong> que explican brevemente los <strong>beneficios de cada producto</strong> con instrucciones de <strong>música de fondo</strong> y locución incluidas.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#catalogo-prompts"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg hover:opacity-95 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" /> Explorar Catálogo de Prompts y Escenas
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#biblioteca-escenas"
                  className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#121A16] border-emerald-800/70 text-emerald-300 hover:border-amber-400'
                      : 'bg-white border-stone-300 text-stone-800 hover:border-emerald-600'
                  }`}
                >
                  <Music className="w-4 h-4 text-purple-400" /> Biblioteca de Escenas + Música
                </a>
                <a
                  href="#constructor-prompts"
                  className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-black/40 border-slate-800 text-amber-300 hover:border-amber-400'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <Wand2 className="w-4 h-4" /> Crear Producto a Medida
                </a>
              </div>

              {/* Mini Key Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/60">
                <div>
                  <div className="text-xl font-black text-emerald-400 font-serif">5 Productos</div>
                  <div className="text-xs text-slate-400">Fotos de estudio IA + anatomía del prompt</div>
                </div>
                <div>
                  <div className="text-xl font-black text-amber-400 font-serif">4 Escenas / Video</div>
                  <div className="text-xs text-slate-400">Gancho, Beneficios 1-4 y Dosis en 16s</div>
                </div>
                <div>
                  <div className="text-xl font-black text-purple-400 font-serif">Música + Voz</div>
                  <div className="text-xs text-slate-400">Instrucción de música de fondo en cada escena</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase: 5 Created Studio Products */}
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
                    <Award className="w-4 h-4" /> Galería de Estudio Botánico Generada
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">
                    Prompts + Escenas + Música
                  </span>
                </div>

                {/* Mosaic of the 5 studio images */}
                <div className="grid grid-cols-6 gap-2.5">
                  <a
                    href="#catalogo-prompts"
                    className="col-span-3 group relative rounded-xl overflow-hidden border border-amber-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/colageno-magnesio.jpg"
                      alt="Colágeno + Magnesio"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5">
                      <span className="text-[11px] font-bold text-white block">
                        Colágeno + Magnesio
                      </span>
                      <span className="text-[9px] text-amber-300">4 Medallones Dorados</span>
                    </div>
                  </a>

                  <a
                    href="#catalogo-prompts"
                    className="col-span-3 group relative rounded-xl overflow-hidden border border-amber-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/curcuma-ashwagandha.jpg"
                      alt="Cúrcuma + Jengibre"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5">
                      <span className="text-[11px] font-bold text-white block">
                        Cúrcuma + Jengibre
                      </span>
                      <span className="text-[9px] text-amber-300">Explosión Slow-Motion</span>
                    </div>
                  </a>

                  <a
                    href="#catalogo-prompts"
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/clorofila-matcha.jpg"
                      alt="Clorofila & Matcha"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        Clorofila Detox
                      </span>
                    </div>
                  </a>

                  <a
                    href="#catalogo-prompts"
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/serum-botanico.jpg"
                      alt="Sérum Rosa Mosqueta"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        Sérum Botánico
                      </span>
                    </div>
                  </a>

                  <a
                    href="#catalogo-prompts"
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/miel-propoleo.jpg"
                      alt="Miel & Propóleo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        Miel & Propóleo
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE PRODUCT CATALOG (5 STUDIO PRODUCTS + PROMPTS + 4 SCENES + MUSIC) */}
      <ProductCatalogSection isDark={isDark} />

      {/* SECTION 2: SCENE PROMPTS & BACKGROUND MUSIC LIBRARY */}
      <SceneLibrarySection isDark={isDark} />

      {/* SECTION 3: ESTRUCTURA DE 4 ESCENAS PARA VIDEOS DE BENEFICIOS */}
      <section id="estructura-beneficios" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Mic className="w-3.5 h-3.5" /> Guion de 16 Segundos con Música de Fondo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Cómo Estructurar las 4 Escenas para Explicar los Beneficios
            </h2>
            <p className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Cada producto del catálogo divide su historia en <strong>4 escenas de 4 segundos</strong>, manteniendo una <strong>música de fondo coherente</strong> y explicando claramente para qué sirve:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-emerald-800/50' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs inline-block">
                ESCENA 1 · 0 a 4s
              </span>
              <h3 className="text-lg font-bold font-serif">1. Gancho + Inicio Musical</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                El producto aparece firme mientras el entorno (polvo de cúrcuma, splash de agua o rayos de sol) se mueve en <em>super slow motion</em> y comienza la <strong>música de fondo instrumental</strong>.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-amber-500/40' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs inline-block">
                ESCENA 2 · 4 a 8s
              </span>
              <h3 className="text-lg font-bold font-serif">2. Beneficios #1 y #2</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Movimiento orbital suave resaltando los dos primeros beneficios clave (ej. <strong>Piel y Cabello · Articulaciones</strong>) acompañados de un destello sonoro sutil sobre la música.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-amber-500/40' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs inline-block">
                ESCENA 3 · 8 a 12s
              </span>
              <h3 className="text-lg font-bold font-serif">3. Beneficios #3 y #4 + Pureza</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Plano macro de los ingredientes naturales puros (raíces, hojas, miel o gotero) explicando los beneficios <strong>#3 y #4</strong> con música cálida inspiradora.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark ? 'bg-[#101714] border-purple-500/40' : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <span className="px-2.5 py-1 rounded-lg bg-purple-400 text-slate-950 font-black text-xs inline-block">
                ESCENA 4 · 12 a 16s
              </span>
              <h3 className="text-lg font-bold font-serif">4. Cierre + Modo de Uso</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Plano heroico final con los 4 beneficios visibles, la dosis recomendada (<em>"2 cápsulas al día"</em>) y un <strong>acorde musical resolutivo</strong> que invita a pedir el producto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOM BENEFIT VIDEO, SCENE & MUSIC BUILDER */}
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
              FlowNatural Prompts · Prompts de Imagen, Escenas de Beneficios y Música de Fondo
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#catalogo-prompts" className="hover:text-emerald-400">
              Catálogo de Productos
            </a>
            <a href="#biblioteca-escenas" className="hover:text-emerald-400">
              Escenas y Música
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
