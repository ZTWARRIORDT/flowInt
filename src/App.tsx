import React, { useState } from 'react';
import {
  Sparkles,
  Sun,
  Moon,
  ExternalLink,
  ArrowRight,
  Award,
  BookOpen,
  Camera,
  Aperture,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { ImagePromptStudio } from './components/ImagePromptStudio';
import { ProductCatalogSection } from './components/ProductCatalogSection';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [externalPresetPayload, setExternalPresetPayload] = useState<{ id: string; key: number } | null>(null);

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
            ? 'bg-[#080C0A]/90 border-emerald-900/50'
            : 'bg-[#FAF7F2]/90 border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 shadow-md">
              <Camera className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-tight block leading-none">
                Natural<span className="text-emerald-400">Studio</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block font-bold">
                Fotografía Comercial IA para Productos Naturales
              </span>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold">
            <a
              href="#estudio-imagenes"
              className="text-emerald-400 hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" /> Estudio de Fotos y Planos
            </a>
            <a
              href="#catalogo-prompts"
              className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" /> Galería de Inspiración (10)
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://flow.google"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow hover:opacity-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" /> Abrir Flow
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

      {/* HERO SECTION: FOCUSED 100% ON COMMERCIAL PRODUCT PHOTOGRAPHY */}
      <section className="relative overflow-hidden pt-8 pb-10 md:pt-12 md:pb-14 border-b border-emerald-900/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-r from-emerald-500/15 via-amber-500/10 to-teal-500/15 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Para creadores y marcas de productos naturales</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-[1.15]">
                Crea la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Fotografía Comercial
                </span>{' '}
                de tu Producto en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  3 Pasos Simples
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-stone-600'
                }`}
              >
                Sin tecnicismos ni fórmulas complicadas. Elige el estilo de foto que necesitas (Catálogo, Póster con beneficios, Splash o Primer plano) y copia el prompt optimizado para <strong>Google Flow</strong> en un solo clic.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#estudio-imagenes"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:opacity-95 transition-all cursor-pointer"
                >
                  <Camera className="w-4 h-4" /> Crear mi Foto en 3 Pasos
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#catalogo-prompts"
                  className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#121A16] border-emerald-800/70 text-emerald-300 hover:border-amber-400'
                      : 'bg-white border-stone-300 text-stone-800 hover:border-emerald-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" /> Ver 10 Fotos de Ejemplo
                </a>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div
                className={`rounded-2xl border p-4 space-y-3 ${
                  isDark
                    ? 'bg-[#101714]/90 border-emerald-800/60 shadow-xl'
                    : 'bg-white border-stone-200 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Galería de Fotografías Reales de Estudio
                  </span>
                  <span className="text-[11px] text-slate-400">Toca para cargar</span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  <a
                    href="#estudio-imagenes"
                    onClick={() => { setExternalPresetPayload({ id: 'uro-cranberry-zen-pill', key: Date.now() }); document.getElementById('estudio-imagenes')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="col-span-3 group relative rounded-xl overflow-hidden border border-amber-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/uro-poster.jpg"
                      alt="URO Cranberry Rosa"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2">
                      <span className="text-[10px] font-bold text-white block">
                        URO Cranberry Rosa
                      </span>
                      <span className="text-[9px] text-amber-300">Doypack · Arena Zen</span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => { setExternalPresetPayload({ id: 'glucosamina-travertino-spa', key: Date.now() }); document.getElementById('estudio-imagenes')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="col-span-3 group relative rounded-xl overflow-hidden border border-amber-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/glucosamina-hero.jpg"
                      alt="Glucosamina + MSM"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2">
                      <span className="text-[10px] font-bold text-white block">
                        Glucosamina + MSM
                      </span>
                      <span className="text-[9px] text-amber-300">Frasco Blanco · Travertino</span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => { setExternalPresetPayload({ id: 'vitamina-d3-frasco-botica', key: Date.now() }); document.getElementById('estudio-imagenes')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/vitamina-frasco.jpg"
                      alt="Vitamina D3 Frasco"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        D3 Frasco Ámbar
                      </span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => { setExternalPresetPayload({ id: 'vitamina-d3-pouch-cocina', key: Date.now() }); document.getElementById('estudio-imagenes')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/vitamina-pouch.jpg"
                      alt="Vitamina D3 Pouch"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        D3 Pouch Doypack
                      </span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => { setExternalPresetPayload({ id: 'uro-macro-textura', key: Date.now() }); document.getElementById('estudio-imagenes')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/uro-macro.jpg"
                      alt="URO Macro 100mm"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        URO Macro 100mm
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTUDIO PRINCIPAL: CONFIGURADOR VISUAL EN 3 PASOS + MODAL DE LENTES */}
      <ImagePromptStudio
        isDark={isDark}
        externalPresetPayload={externalPresetPayload}
      />

      {/* GALERÍA DE INSPIRACIÓN: 5 PRODUCTOS DE ESTUDIO */}
      <ProductCatalogSection
        isDark={isDark}
        onLoadInImageStudio={(prodId) => setExternalPresetPayload({ id: prodId, key: Date.now() })}
      />

      {/* FOOTER */}
      <footer
        className={`border-t py-8 text-xs ${
          isDark ? 'bg-[#050806] border-emerald-950 text-slate-400' : 'bg-stone-100 border-stone-200 text-stone-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xs">
              N
            </div>
            <span className="font-bold text-xs text-white">
              NaturalStudio · Generador Visual de Prompts para Google Flow
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#estudio-imagenes" className="hover:text-emerald-400">
              Estudio Fotográfico
            </a>
            <a href="#catalogo-prompts" className="hover:text-emerald-400">
              Galería de Fotos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
