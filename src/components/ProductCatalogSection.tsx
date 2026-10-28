import React, { useState } from 'react';
import {
  Copy,
  Check,
  Sparkles,
  Film,
  Eye,
  Target,
  Shield,
  Heart,
  Zap,
  Droplets,
  Leaf,
  Sun,
  Flame,
  Activity,
  Award,
  Mic,
  Type,
  Camera,
  Layers,
  X,
  ChevronRight,
  BookOpen,
  Music,
} from 'lucide-react';
import {
  PRODUCTS_DATA,
  ANATOMY_COLORS,
  NaturalProductExample,
  BenefitItem,
} from '../data/flowData';

interface Props {
  isDark: boolean;
}

export const ProductCatalogSection: React.FC<Props> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<NaturalProductExample>(PRODUCTS_DATA[0]);
  const [promptLang, setPromptLang] = useState<'es' | 'en'>('es');
  const [imagePromptType, setImagePromptType] = useState<'poster' | 'clean'>('poster');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [modalProduct, setModalProduct] = useState<NaturalProductExample | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const renderBenefitIcon = (iconName: BenefitItem['iconName']) => {
    const cls = 'w-4 h-4 text-amber-400 shrink-0';
    switch (iconName) {
      case 'eye':
        return <Eye className={cls} />;
      case 'sparkles':
        return <Sparkles className={cls} />;
      case 'target':
        return <Target className={cls} />;
      case 'shield':
        return <Shield className={cls} />;
      case 'heart':
        return <Heart className={cls} />;
      case 'zap':
        return <Zap className={cls} />;
      case 'droplets':
        return <Droplets className={cls} />;
      case 'leaf':
        return <Leaf className={cls} />;
      case 'sun':
        return <Sun className={cls} />;
      case 'flame':
        return <Flame className={cls} />;
      case 'activity':
        return <Activity className={cls} />;
      case 'award':
      default:
        return <Award className={cls} />;
    }
  };

  const categories = [
    { id: 'all', label: 'Todos los Productos (5)' },
    { id: 'suplementos', label: 'Cápsulas y Articulaciones (2)' },
    { id: 'extractos', label: 'Goteros y Detox (1)' },
    { id: 'cosmetica', label: 'Cosmética Natural (1)' },
    { id: 'apicultura', label: 'Miel y Defensas (1)' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.categoryId === selectedCategory);

  const buildFullProductScript = (prod: NaturalProductExample) => {
    const scenesText = prod.flowScenes
      .map(
        (s) =>
          `--- ${s.title} (${s.timeRange}) ---\n` +
          `Cámara: ${s.cameraMotion}\n` +
          `Música de Fondo y SFX: ${s.musicAndSfx}\n` +
          `Prompt Escena + Audio (ES): ${s.promptEs}\n` +
          `Prompt Escena + Audio (EN): ${s.promptEn}\n` +
          `Texto en pantalla: ${s.onScreenText}\n` +
          `Locución de Beneficios: "${s.voiceoverEs}"`
      )
      .join('\n\n');

    return (
      `=== GUÍA DE PROMPTS, ESCENAS Y MÚSICA: ${prod.name} ===\n` +
      `Titular: ${prod.headline}\n` +
      `Música de Fondo General: ${prod.backgroundMusicPromptEs}\n\n` +
      `[1] PROMPT DE IMAGEN GEMINI (ESTUDIO CON ELEMENTOS Y BENEFICIOS - ES):\n${prod.geminiPromptEs}\n\n` +
      `[2] PROMPT DE IMAGEN GEMINI (FOTO LIMPIA PARA ANIMAR - ES):\n${prod.cleanHeroPromptEs}\n\n` +
      `[3] SECUENCIA DE 4 ESCENAS DE VIDEO CON MÚSICA DE FONDO Y BENEFICIOS (16s):\n\n${scenesText}`
    );
  };

  const renderDetailedProductInspector = (product: NaturalProductExample, isModal = false) => {
    const activeGeminiPrompt =
      imagePromptType === 'poster'
        ? promptLang === 'es'
          ? product.geminiPromptEs
          : product.geminiPromptEn
        : promptLang === 'es'
        ? product.cleanHeroPromptEs
        : product.cleanHeroPromptEn;

    const activeMusicPrompt =
      promptLang === 'es' ? product.backgroundMusicPromptEs : product.backgroundMusicPromptEn;

    return (
      <div
        className={`rounded-3xl border overflow-hidden ${
          isDark
            ? 'bg-[#0E1512] border-emerald-800/60 shadow-2xl'
            : 'bg-white border-stone-200 shadow-2xl'
        }`}
      >
        {/* Top Inspector Banner */}
        <div className="px-6 py-5 bg-gradient-to-r from-emerald-950 via-[#101C17] to-amber-950/60 border-b border-emerald-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950">
              {product.badgeText}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {product.category}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="inline-flex rounded-xl bg-black/50 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setPromptLang('es')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  promptLang === 'es'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Prompts en Español
              </button>
              <button
                type="button"
                onClick={() => setPromptLang('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  promptLang === 'en'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Prompts en Inglés (Técnico)
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(buildFullProductScript(product), `full-${product.id}`)}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow"
            >
              {copiedId === `full-${product.id}` ? (
                <>
                  <Check className="w-4 h-4" /> ¡Prompts + Escenas + Música Copiados!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copiar Todo (Imagen + Escenas + Música)
                </>
              )}
            </button>

            {isModal && (
              <button
                type="button"
                onClick={() => setModalProduct(null)}
                aria-label="Cerrar ventana"
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Image + Background Music Card + 4 Benefits + Specs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-black shadow-xl flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[440px] object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-amber-500/30">
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  Promesa Principal del Video
                </div>
                <div className="text-sm font-black text-white tracking-wide font-serif">
                  "{product.headline}"
                </div>
              </div>
            </div>

            {/* Background Music Prompt Box */}
            <div
              className={`rounded-2xl border p-4 space-y-2.5 ${
                isDark
                  ? 'bg-purple-950/25 border-purple-500/40'
                  : 'bg-purple-50 border-purple-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-purple-400" /> Música de Fondo Recomendada
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(activeMusicPrompt, `music-${product.id}`)}
                  className="px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500 hover:text-slate-950 text-purple-300 border border-purple-500/40 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all"
                >
                  {copiedId === `music-${product.id}` ? (
                    <>
                      <Check className="w-3 h-3" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copiar Prompt Música
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-bold text-amber-300">{product.backgroundMusicStyle}</div>
              <p className="text-xs font-mono text-slate-200 bg-black/60 p-2.5 rounded-lg border border-purple-500/30 select-all">
                {activeMusicPrompt}
              </p>
            </div>

            {/* 4 Key Benefits to Explain in Video */}
            <div
              className={`rounded-2xl border p-5 ${
                isDark ? 'bg-[#131C18] border-amber-500/30' : 'bg-amber-50/60 border-amber-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4
                  className={`text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 ${
                    isDark ? 'text-amber-300' : 'text-amber-900'
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-400" /> Los 4 Beneficios para Explicar en las Escenas
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((b, i) => (
                  <div
                    key={b.title}
                    className={`p-3 rounded-xl border ${
                      isDark
                        ? 'bg-black/40 border-amber-500/25'
                        : 'bg-white border-amber-200 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs text-amber-400 mb-1">
                      {renderBenefitIcon(b.iconName)}
                      <span>
                        {i + 1}. {b.title}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-stone-600'
                      }`}
                    >
                      {b.shortDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs Ficha Técnica */}
            <div
              className={`rounded-2xl border p-4 text-xs space-y-2 ${
                isDark ? 'bg-black/40 border-slate-800' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] mb-2">
                Datos del Producto (Para la Escena 4 de Cierre):
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-400 block text-[10px]">TIPO:</span>
                  <span className="font-semibold">{product.specs.tipo}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">CONTENIDO:</span>
                  <span className="font-semibold">{product.specs.contenido}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">INGREDIENTES:</span>
                  <span className="font-semibold">{product.specs.ingredientes}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">MODO DE USO:</span>
                  <span className="font-semibold text-amber-400">{product.specs.uso}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phase 1 (Gemini Image Prompt + Anatomy) & Phase 2 (4 Flow Video Scenes + Background Music + Voiceover) */}
          <div className="lg:col-span-7 space-y-7">
            {/* PHASE 1: GEMINI IMAGE PROMPT */}
            <div
              className={`rounded-2xl border p-5 space-y-4 ${
                isDark ? 'bg-[#131C18] border-emerald-800/50' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 1. Prompt de Imagen (Para Gemini)
                  </span>
                  <h4 className={`text-lg font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    Fotografía Profesional de {product.name}
                  </h4>
                </div>

                {/* Toggle Complete vs Clean Hero */}
                <div className="inline-flex rounded-xl bg-black/30 p-1 border border-slate-700/80">
                  <button
                    type="button"
                    onClick={() => setImagePromptType('poster')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      imagePromptType === 'poster'
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Prompt Completo de Estudio
                  </button>
                  <button
                    type="button"
                    onClick={() => setImagePromptType('clean')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      imagePromptType === 'clean'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Versión Minimalista
                  </button>
                </div>
              </div>

              {/* Prompt Box with Copy Button */}
              <div className="relative rounded-xl bg-black/75 border border-emerald-500/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-emerald-300">
                    {imagePromptType === 'poster'
                      ? 'PROMPT DE IMAGEN COMPLETO'
                      : 'PROMPT DE IMAGEN BASE LIMPIA'}{' '}
                    ({promptLang.toUpperCase()})
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(activeGeminiPrompt, `gemini-${product.id}-${imagePromptType}`)
                    }
                    className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    {copiedId === `gemini-${product.id}-${imagePromptType}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> ¡Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copiar Prompt Imagen
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs md:text-sm font-mono text-slate-100 leading-relaxed select-all">
                  {activeGeminiPrompt}
                </p>
              </div>

              {/* Prompt Anatomy Color Breakdown */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Anatomía Desglosada del Prompt de Imagen:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.anatomy.map((seg) => {
                    const style = ANATOMY_COLORS[seg.category];
                    return (
                      <div
                        key={seg.label}
                        className={`p-3 rounded-xl border ${style.bg} ${style.border}`}
                      >
                        <div className="flex items-center gap-2 text-xs font-extrabold mb-1">
                          <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                          <span className={style.text}>{seg.label}</span>
                        </div>
                        <p className="text-xs text-slate-200 leading-snug">
                          {promptLang === 'es' ? seg.textEs : seg.textEn}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* PHASE 2: GOOGLE FLOW 4-SCENE BENEFIT VIDEO STORYBOARD */}
            <div
              className={`rounded-2xl border p-5 space-y-4 ${
                isDark ? 'bg-[#131C18] border-amber-500/40' : 'bg-amber-50/40 border-amber-200'
              }`}
            >
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" /> 2. Prompts de Escenas + Música de Fondo para Flow (16s)
                </span>
                <h4 className={`text-lg font-bold font-serif mt-0.5 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  Las 4 Escenas de Video (Cada Prompt ya incluye la instrucción de Música de Fondo)
                </h4>
              </div>

              <div className="space-y-4">
                {product.flowScenes.map((scene) => {
                  const scenePrompt = promptLang === 'es' ? scene.promptEs : scene.promptEn;
                  const copyKey = `flow-${product.id}-s${scene.sceneNumber}`;
                  return (
                    <div
                      key={scene.sceneNumber}
                      className={`rounded-xl border p-4 space-y-3 ${
                        isDark
                          ? 'bg-black/60 border-slate-800 hover:border-emerald-500/40'
                          : 'bg-white border-stone-200 shadow-xs'
                      } transition-all`}
                    >
                      {/* Scene Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs">
                            {scene.timeRange}
                          </span>
                          <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-stone-900'}`}>
                            {scene.title}
                          </h5>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(scenePrompt, copyKey)}
                          className="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/40 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          {copiedId === copyKey ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> ¡Escena {scene.sceneNumber} Copiada!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copiar Prompt Escena + Música ({promptLang.toUpperCase()})
                            </>
                          )}
                        </button>
                      </div>

                      {/* Flow Settings Badges */}
                      <div className="flex flex-wrap gap-2 text-[11px]">
                        <span className="px-2.5 py-1 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold flex items-center gap-1">
                          <Camera className="w-3 h-3" /> {scene.cameraMotion}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold flex items-center gap-1">
                          <Music className="w-3 h-3" /> {scene.musicAndSfx}
                        </span>
                      </div>

                      {/* Scene Prompt for Flow */}
                      <div className="p-3 rounded-lg bg-black/80 border border-slate-800 font-mono text-xs text-slate-100 leading-relaxed select-all">
                        {scenePrompt}
                      </div>

                      {/* Benefit On-screen Text & Voiceover */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                        <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-xs">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1 mb-0.5">
                            <Type className="w-3 h-3" /> Texto de Beneficio en Pantalla:
                          </div>
                          <div className="font-bold text-white">{scene.onScreenText}</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1 mb-0.5">
                            <Mic className="w-3 h-3" /> Locución / Voz de Beneficios:
                          </div>
                          <div className="italic text-slate-200">"{scene.voiceoverEs}"</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="catalogo-prompts" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <BookOpen className="w-3.5 h-3.5" /> Catálogo de Prompts, Escenas y Música de Fondo
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              5 Productos Naturales: Prompts de Imagen + Escenas con Música y Beneficios
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Selecciona cualquier producto para copiar su <strong>prompt de fotografía en Gemini</strong> y las <strong>4 escenas cinematográficas para Google Flow</strong> (con instrucciones de <strong>música de fondo</strong>, efectos de sonido y guion de beneficios incluidos).
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow-md'
                  : isDark
                  ? 'bg-[#141C18] text-slate-300 border border-slate-800 hover:border-emerald-500/40'
                  : 'bg-stone-100 text-stone-700 border border-stone-200 hover:border-emerald-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`group rounded-2xl border overflow-hidden transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'ring-2 ring-amber-400 border-amber-400 shadow-2xl'
                    : isDark
                    ? 'bg-[#111815] border-slate-800/90 hover:border-emerald-500/50'
                    : 'bg-white border-stone-200 hover:border-emerald-500/50 shadow-md'
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 bg-black overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/90 text-slate-950">
                        {prod.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/75 text-amber-300 text-[10px] font-mono border border-amber-400/30">
                        4 Escenas + Música
                      </span>
                    </div>

                    {/* Bottom Title inside Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-[10px] font-mono text-amber-300 uppercase tracking-wider">
                        {prod.headline}
                      </div>
                      <h3 className="text-lg font-bold text-white font-serif leading-tight">
                        {prod.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body: 4 Benefits + Music Summary */}
                  <div className="p-4 space-y-3">
                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-stone-600'
                      }`}
                    >
                      {prod.summary}
                    </p>

                    {/* Music Tag */}
                    <div className="px-2.5 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/30 text-[11px] text-purple-300 font-semibold flex items-center gap-1.5">
                      <Music className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="truncate">{prod.backgroundMusicStyle}</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        4 Beneficios en el Guion de Escenas:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {prod.benefits.map((b) => (
                          <div
                            key={b.title}
                            className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 truncate ${
                              isDark
                                ? 'bg-black/40 text-slate-200 border border-slate-800'
                                : 'bg-stone-100 text-stone-800'
                            }`}
                          >
                            {renderBenefitIcon(b.iconName)}
                            <span className="truncate">{b.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div
                  className={`p-4 pt-3 border-t flex items-center justify-between gap-2 ${
                    isDark ? 'border-slate-800/80 bg-black/20' : 'border-stone-100 bg-stone-50/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(prod.geminiPromptEs, `card-gem-${prod.id}`);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedId === `card-gem-${prod.id}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Prompt Imagen
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(prod);
                      setModalProduct(prod);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1 transition-all cursor-pointer shadow"
                  >
                    <span>Ver Prompts y Escenas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Full Studio Inspector for Currently Selected Product */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-xl md:text-2xl font-bold font-serif flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              Prompts, Escenas y Música Activos:{' '}
              <span className="text-emerald-400">{selectedProduct.name}</span>
            </h3>
            <span className="text-xs text-slate-400">
              Selecciona cualquier producto arriba para ver sus escenas
            </span>
          </div>
          {renderDetailedProductInspector(selectedProduct, false)}
        </div>
      </div>

      {/* Modal Inspector */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="max-w-6xl w-full max-h-[92vh] overflow-y-auto rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {renderDetailedProductInspector(modalProduct, true)}
          </div>
        </div>
      )}
    </section>
  );
};
