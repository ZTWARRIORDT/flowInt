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
  Camera,
  Aperture,
  Layers,
  ArrowDown,
} from 'lucide-react';
import {
  ImagePromptStudio,
  SyncedProductPayload,
} from './components/ImagePromptStudio';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { SceneLibrarySection } from './components/SceneLibrarySection';
import { BenefitVideoBuilder } from './components/BenefitVideoBuilder';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [externalPresetId, setExternalPresetId] = useState<string | null>(null);
  const [syncedVideoProduct, setSyncedVideoProduct] = useState<SyncedProductPayload | null>(
    null
  );

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
              <Camera className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-tight block leading-none">
                Flow<span className="text-emerald-400">Natural</span> Studio
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                1º Estudio de Imágenes y Planos · 2º Videos en Flow
              </span>
            </div>
          </a>

          {/* Navigation Links: Image First, Video Below */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
            <a
              href="#estudio-imagenes"
              className="text-emerald-400 hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" /> 01. Estudio de Imágenes y Planos
            </a>
            <a
              href="#catalogo-prompts"
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              02. Galería de Productos (5)
            </a>
            <a
              href="#constructor-prompts"
              className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Film className="w-3.5 h-3.5 text-amber-400" /> 03. Constructor de Videos (Abajo)
            </a>
            <a
              href="#biblioteca-escenas"
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              04. Escenas y Continuidad
            </a>
          </nav>

          {/* Right Actions: External Links + Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow hover:opacity-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" /> Abrir Gemini (Imagen)
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://labs.google/fx/tools/flow"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-amber-400'
                  : 'bg-white border-stone-300 text-stone-800 hover:border-amber-600'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-amber-400" /> Google Flow
              <ExternalLink className="w-3 h-3 opacity-60" />
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

      {/* HERO SECTION: FOCUSED PRIMARILY ON COMMERCIAL IMAGE GENERATION & SHOT TYPES */}
      <section className="relative overflow-hidden pt-10 pb-12 md:pt-12 md:pb-16 border-b border-emerald-900/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gradient-to-r from-emerald-500/15 via-amber-500/10 to-teal-500/15 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Estudio Fotográfico IA: 8 Tipos de Foto · 7 Planos de Cámara · Lentes · + Añadir Propios</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.1]">
                Crea Prompts de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Fotografía Comercial
                </span>{' '}
                por Planos, Estilos y{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  Necesidad Visual
                </span>
              </h1>

              <p
                className={`text-base md:text-lg leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-stone-600'
                }`}
              >
                Armamos primero tu <strong>fotografía de producto natural perfecta</strong> eligiendo <strong>tipo de foto</strong> (Póster 3D, Hero Shot, Splash, Flat Lay Cenital, Macro, Lifestyle), <strong>plano</strong>, <strong>lente</strong>, <strong>luz</strong> e <strong>ingredientes personalizables</strong>. Y más abajo, conviértela en <strong>video comercial en Google Flow</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#estudio-imagenes"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg hover:opacity-95 transition-all cursor-pointer"
                >
                  <Camera className="w-4 h-4" /> Ir al Estudio de Imágenes y Planos
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#catalogo-prompts"
                  className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#121A16] border-emerald-800/70 text-emerald-300 hover:border-amber-400'
                      : 'bg-white border-stone-300 text-stone-800 hover:border-emerald-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" /> Ver 5 Productos de Ejemplo
                </a>
                <a
                  href="#zona-videos"
                  className={`px-5 py-3.5 rounded-2xl font-bold text-sm border flex items-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-black/40 border-slate-800 text-amber-300 hover:border-amber-400'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <Film className="w-4 h-4" /> Ir a Videos Abajo
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mini Key Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/60">
                <div>
                  <div className="text-lg sm:text-xl font-black text-emerald-400 font-serif flex items-center gap-1.5">
                    <Camera className="w-4 h-4" /> 8 Tipos + 7 Planos
                  </div>
                  <div className="text-xs text-slate-400">
                    Hero, Cenital 90°, Contrapicado, Macro, Splash, Póster
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-amber-400 font-serif flex items-center gap-1.5">
                    <Layers className="w-4 h-4" /> + Añadir Propio
                  </div>
                  <div className="text-xs text-slate-400">
                    Agrega tus propios envases, fondos, planos e ingredientes
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-cyan-400 font-serif flex items-center gap-1.5">
                    <Aperture className="w-4 h-4" /> Pack de 6 Fotos
                  </div>
                  <div className="text-xs text-slate-400">
                    Genera toda la sesión fotográfica de tu producto en 1 clic
                  </div>
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
                    <Award className="w-4 h-4" /> 5 Fotografías de Estudio Generadas (Haz clic para cargar)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                    8K · Lente 85mm
                  </span>
                </div>

                {/* Mosaic of the 5 studio images — clicking loads them into ImagePromptStudio! */}
                <div className="grid grid-cols-6 gap-2.5">
                  <a
                    href="#estudio-imagenes"
                    onClick={() => setExternalPresetId('colageno-magnesio')}
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
                      <span className="text-[9px] text-amber-300">Póster 4 Medallones · Luz Bosque</span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => setExternalPresetId('curcuma-ashwagandha')}
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
                      <span className="text-[9px] text-amber-300">Alta Velocidad · Contraluz Moody</span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => setExternalPresetId('clorofila-matcha')}
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/clorofila-matcha.jpg"
                      alt="Clorofila & Matcha"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        Clorofila Splash
                      </span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => setExternalPresetId('serum-botanico')}
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/serum-botanico.jpg"
                      alt="Sérum Rosa Mosqueta"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        Sérum Podio Spa
                      </span>
                    </div>
                  </a>

                  <a
                    href="#estudio-imagenes"
                    onClick={() => setExternalPresetId('miel-propoleo')}
                    className="col-span-2 group relative rounded-xl overflow-hidden border border-emerald-500/40 bg-black aspect-square"
                  >
                    <img
                      src="/images/miel-propoleo.jpg"
                      alt="Miel & Propóleo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                      <span className="text-[10px] font-bold text-white block truncate">
                        Miel Macro Textura
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          PARTE 1 (PRINCIPAL): GENERACIÓN DE IMÁGENES COMERCIALES Y PLANOS
         ===================================================================== */}
      <ImagePromptStudio
        isDark={isDark}
        externalPresetId={externalPresetId}
        onSendToVideoBuilder={(payload) => setSyncedVideoProduct(payload)}
      />

      {/* GALERÍA DE REFERENCIA DE LOS 5 PRODUCTOS */}
      <ProductCatalogSection
        isDark={isDark}
        onLoadInImageStudio={(prodId) => setExternalPresetId(prodId)}
      />

      {/* =====================================================================
          PARTE 2 (ABAJO): GENERACIÓN DE VIDEOS Y ESCENAS EN GOOGLE FLOW
         ===================================================================== */}
      <div
        id="zona-videos"
        className="border-t-2 border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-[#0E1814] to-emerald-950/30 py-8 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg shrink-0">
              <Film className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block">
                SEGUNDA FASE · DE LA IMAGEN AL VIDEO COMERCIAL
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
                Sección de Videos para Google Flow (Veo 3.1)
              </h2>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl">
            Una vez tengas tu fotografía generada arriba en Gemini, usa el constructor de abajo para animarla en <strong>4 escenas de 4 segundos</strong> con <strong>misma voz de personaje</strong>, <strong>música de fondo</strong> y <strong>sin deformar letras</strong>.
          </p>
        </div>
      </div>

      {/* CONSTRUCTOR INTERACTIVO DE VIDEO SINCRONIZADO CON EL ESTUDIO DE IMÁGENES */}
      <BenefitVideoBuilder isDark={isDark} syncedProduct={syncedVideoProduct} />

      {/* BIBLIOTECA DE 9 ESCENAS DE VIDEO */}
      <SceneLibrarySection isDark={isDark} />

      {/* GUÍA DE ESTRUCTURA DE 4 ESCENAS, CONTINUIDAD Y MODELOS VEO */}
      <section id="estructura-beneficios" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Mic className="w-3.5 h-3.5" /> Guion de 16s · Misma Voz de Personaje · Sin Animar Letras
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Cómo Estructurar las 4 Escenas de Video (Logos, Voz y Música)
            </h2>
            <p className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Cada producto divide su historia en <strong>4 escenas de 4 segundos</strong>, bloqueando las letras del envase (<strong>solo se animan logos simbólicos e ingredientes</strong>) y repitiendo el <strong>mismo descriptor de voz de personaje</strong> junto con la <strong>música de fondo</strong>:
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
              <h3 className="text-lg font-bold font-serif">1. Gancho + Voz y Música</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                El envase aparece 100% fijo (<strong>sin animar letras</strong>) mientras el entorno se mueve en <em>slow motion</em>, entra la <strong>música de fondo</strong> y se define la <strong>voz del personaje narrador</strong>.
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
              <h3 className="text-lg font-bold font-serif">2. Brillo en Logos #1 y #2</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Un barrido de luz ilumina los <strong>logos simbólicos #1 y #2</strong> (sin mover letras ni generar texto). La <strong>misma voz de personaje</strong> narra los dos primeros beneficios.
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
              <h3 className="text-lg font-bold font-serif">3. Logos #3 y #4 + Pureza</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Plano de los ingredientes puros y destello sobre los <strong>logos simbólicos #3 y #4</strong> (sin animar letras). Continúa exactamente la <strong>misma voz de personaje</strong> y la música.
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
                Plano heroico final con los <strong>4 logos simbólicos</strong> reluciendo, la <strong>misma voz de personaje</strong> indicando la dosis (sin letras animadas) y acorde musical resolutivo.
              </p>
            </div>
          </div>

          {/* Continuity by Last Frame + Model Selection Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <div
              className={`rounded-2xl border p-6 space-y-3 ${
                isDark
                  ? 'bg-gradient-to-br from-[#0E1D17] to-[#101714] border-emerald-500/40'
                  : 'bg-emerald-50/70 border-emerald-200 shadow-md'
              }`}
            >
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-extrabold uppercase tracking-wider inline-block">
                Truco de Continuidad Perfecta (Último Fotograma + Agente)
              </span>
              <h3 className="text-xl font-bold font-serif">
                Cómo Iniciar Cada Escena Desde el Último Fotograma del Video Anterior
              </h3>
              <ul className={`text-xs md:text-sm space-y-2 leading-relaxed ${isDark ? 'text-slate-200' : 'text-stone-700'}`}>
                <li>
                  <strong>1. Opción "Extend" (Extender en Scenebuilder):</strong> Cuando generes la <strong>Escena 1</strong>, haz clic en <strong>Extend / Añadir a escena</strong> y pega el prompt Todo-en-Uno de la <strong>Escena 2</strong>. Flow toma automáticamente el <strong>último fotograma exacto</strong> del video anterior para que el frasco y los logos no cambien ni den saltos.
                </li>
                <li>
                  <strong>2. Opción "Frames to Video" (Fotograma Inicial):</strong> También puedes capturar/guardar el <strong>último fotograma</strong> del clip 1 y subirlo como <em>First Frame (Fotograma inicial)</em> del clip 2.
                </li>
                <li>
                  <strong>3. Función de Agente:</strong> Pídele al agente de Flow: <em>"Toma el último fotograma del clip anterior como inicio y ejecuta este prompt manteniendo el envase fijo y la misma voz"</em>.
                </li>
              </ul>
            </div>

            <div
              className={`rounded-2xl border p-6 space-y-3 ${
                isDark
                  ? 'bg-gradient-to-br from-[#1B170E] to-[#101714] border-amber-500/40'
                  : 'bg-amber-50/70 border-amber-200 shadow-md'
              }`}
            >
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-extrabold uppercase tracking-wider inline-block">
                Comparativa de Modelos: ¿Cuál Elegir?
              </span>
              <h3 className="text-xl font-bold font-serif">
                Veo 3.1 Quality vs. Veo 3.1 Flash (Fast) vs. Omni
              </h3>
              <ul className={`text-xs md:text-sm space-y-2 leading-relaxed ${isDark ? 'text-slate-200' : 'text-stone-700'}`}>
                <li>
                  <strong>Veo 3.1 (Quality) — EL MEJOR PARA EL VIDEO FINAL:</strong> Es el modelo superior para productos naturales porque genera <strong>audio nativo completo</strong> (voz del personaje en español + música de fondo + efectos de agua/polvo al mismo tiempo) y mantiene <strong>los logos y el vidrio nítidos sin deformar el envase</strong>.
                </li>
                <li>
                  <strong>Veo 3.1 Flash / Fast — PARA PRUEBAS RÁPIDAS:</strong> Úsalo solo para probar encuadres rápido gastando menos créditos; en el render final cámbialo siempre a <strong>Veo 3.1 Quality</strong>.
                </li>
                <li>
                  <strong>Omni / Agente — PARA CONTINUIDAD Y ENCADENADO:</strong> Es el cerebro multimodal que coordina tus activos (la foto de Gemini y el <strong>último fotograma del clip anterior</strong>) y se los pasa a <strong>Veo 3.1</strong> para que las 4 escenas queden unidas sin cortes bruscos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
              FlowNatural Studio · Estudio de Imágenes Comerciales y Videos en Google Flow
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#estudio-imagenes" className="hover:text-emerald-400">
              Estudio de Imágenes
            </a>
            <a href="#catalogo-prompts" className="hover:text-emerald-400">
              Catálogo de Productos
            </a>
            <a href="#constructor-prompts" className="hover:text-amber-400">
              Constructor de Videos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
