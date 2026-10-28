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
  X,
  ChevronRight,
  BookOpen,
  Camera,
  Sliders,
} from 'lucide-react';
import {
  PRODUCTS_DATA,
  NaturalProductExample,
  BenefitItem,
} from '../data/flowData';

interface Props {
  isDark: boolean;
  onLoadInImageStudio?: (productId: string) => void;
}

export const ProductCatalogSection: React.FC<Props> = ({ isDark, onLoadInImageStudio }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<NaturalProductExample>(PRODUCTS_DATA[0]);
  const [promptLang, setPromptLang] = useState<'es' | 'en'>('es');
  const [imagePromptType, setImagePromptType] = useState<'poster' | 'clean' | 'flatlay' | 'macro'>('poster');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [modalProduct, setModalProduct] = useState<NaturalProductExample | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const handleOpenInStudio = (productId: string) => {
    if (onLoadInImageStudio) {
      onLoadInImageStudio(productId);
    }
    const el = document.getElementById('estudio-imagenes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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

  const getProductImagePromptByVariant = (
    product: NaturalProductExample,
    variant: 'poster' | 'clean' | 'flatlay' | 'macro',
    lang: 'es' | 'en'
  ) => {
    if (variant === 'poster') {
      return lang === 'es' ? product.geminiPromptEs : product.geminiPromptEn;
    }
    if (variant === 'clean') {
      return lang === 'es' ? product.cleanHeroPromptEs : product.cleanHeroPromptEn;
    }
    if (variant === 'flatlay') {
      return lang === 'es'
        ? `Fotografía Flat Lay cenital en ángulo perpendicular de 90 grados desde arriba (top-down view) de "${product.name}": ${product.cleanHeroPromptEs} Composición geométrica ordenada de bodegón orgánico mostrando los ingredientes frescos dispuestos en círculo alrededor del envase, iluminación suave difusa, lente 50mm f/1.4, 8k.`
        : `Overhead 90-degree perpendicular top-down Flat Lay photography of "${product.name}": ${product.cleanHeroPromptEn} Artfully arranged organic still-life composition showcasing raw fresh ingredients encircling the container, soft diffused daylight, 50mm f/1.4 lens, 8k.`;
    }
    return lang === 'es'
      ? `Fotografía en primerísimo plano macro extremo (extreme close-up shot) de "${product.name}": enfoque microscópico ultra nítido en la textura del vidrio, las microgotas de rocío fresco y el relieve dorado del logo simbólico (sin letras pequeñas que se deformen), con los ingredientes botánicos en primer plano y bokeh cremoso de fondo, lente macro 100mm f/2.8, 8k.`
      : `Extreme macro close-up photography of "${product.name}": razor-sharp microscopic focus on the glass texture, fresh micro-droplets, and embossed gold symbolic logo relief (strictly no small letters that could warp), with botanical ingredients in the immediate foreground and creamy bokeh, 100mm f/2.8 macro lens, 8k.`;
  };

  const buildFullProductScript = (prod: NaturalProductExample) => {
    const imgPrompt = promptLang === 'es' ? prod.geminiPromptEs : prod.geminiPromptEn;
    const masterVideoPrompt = promptLang === 'es' ? prod.masterFlowPromptEs : prod.masterFlowPromptEn;
    const scenesText = prod.flowScenes
      .map(
        (s) =>
          `[${s.title} · ${s.timeRange}]\n${promptLang === 'es' ? s.promptEs : s.promptEn}`
      )
      .join('\n\n');

    return (
      `=== ${prod.name.toUpperCase()} (PROMPTS TODO-EN-UNO) ===\n\n` +
      `1) PROMPT DE IMAGEN GEMINI (TODO INCLUIDO):\n${imgPrompt}\n\n` +
      `2) PROMPT MAESTRO DE VIDEO FLOW EN 1 SOLO BLOQUE:\n${masterVideoPrompt}\n\n` +
      `3) SECUENCIA DE 4 ESCENAS FLOW:\n\n${scenesText}`
    );
  };

  const renderDetailedProductInspector = (product: NaturalProductExample, isModal = false) => {
    const activeGeminiPrompt = getProductImagePromptByVariant(
      product,
      imagePromptType,
      promptLang
    );

    const activeMasterFlowPrompt =
      promptLang === 'es' ? product.masterFlowPromptEs : product.masterFlowPromptEn;

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
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950">
              {product.badgeText}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {product.category}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Button to load into main Image Studio */}
            <button
              type="button"
              onClick={() => {
                if (isModal) setModalProduct(null);
                handleOpenInStudio(product.id);
              }}
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow"
            >
              <Sliders className="w-3.5 h-3.5" /> Personalizar más Planos en el Estudio ↑
            </button>

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
                Español
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
                English
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(buildFullProductScript(product), `full-${product.id}`)}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow"
            >
              {copiedId === `full-${product.id}` ? (
                <>
                  <Check className="w-4 h-4" /> ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copiar Todo
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
          {/* Left Column: Studio Image + 4 Benefits Summary */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-black shadow-xl flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[440px] object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-amber-500/30">
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  {product.name}
                </div>
                <div className="text-sm font-black text-white tracking-wide font-serif">
                  "{product.headline}"
                </div>
              </div>
            </div>

            {/* 4 Key Benefits */}
            <div
              className={`rounded-2xl border p-5 ${
                isDark ? 'bg-[#131C18] border-amber-500/30' : 'bg-amber-50/60 border-amber-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4
                  className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 ${
                    isDark ? 'text-amber-300' : 'text-amber-900'
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-400" /> 4 Beneficios (Iconos 3D en Imagen + Guion)
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
          </div>

          {/* Right Column: Image Prompts First (4 Shot Variants) + Video Prompts Below */}
          <div className="lg:col-span-7 space-y-6">
            {/* BLOCK 1: GEMINI IMAGE PROMPTS WITH 4 SHOT TYPES */}
            <div
              className={`rounded-2xl border p-5 space-y-4 ${
                isDark ? 'bg-[#131C18] border-emerald-500/50 shadow-lg' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5" /> 1. Prompts Fotográficos para Gemini (Elige Tipo de Foto / Plano)
                    </span>
                    <h4 className={`text-lg font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      4 Planos Fotográficos Listos para {product.name}
                    </h4>
                  </div>
                </div>

                {/* 4 Shot Variant Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-black/40 border border-slate-700/80">
                  {[
                    { id: 'poster', label: '1. Póster 4 Logos' },
                    { id: 'clean', label: '2. Hero Limpio' },
                    { id: 'flatlay', label: '3. Flat Lay 90°' },
                    { id: 'macro', label: '4. Macro Textura' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setImagePromptType(tab.id as 'poster' | 'clean' | 'flatlay' | 'macro')
                      }
                      className={`px-2.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        imagePromptType === tab.id
                          ? 'bg-emerald-500 text-slate-950 shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Single Unified Image Prompt Box */}
              <div className="relative rounded-xl bg-black/80 border border-emerald-500/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-emerald-300 uppercase">
                    PROMPT DE IMAGEN · PLANO {imagePromptType.toUpperCase()} ({promptLang.toUpperCase()})
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(activeGeminiPrompt, `gemini-${product.id}-${imagePromptType}`)
                    }
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    {copiedId === `gemini-${product.id}-${imagePromptType}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> ¡Prompt Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copiar Prompt de Imagen
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs md:text-sm font-mono text-slate-100 leading-relaxed select-all">
                  {activeGeminiPrompt}
                </p>
              </div>
            </div>

            {/* BLOCK 2: SINGLE UNIFIED MASTER FLOW VIDEO PROMPT */}
            <div
              className={`rounded-2xl border p-5 space-y-3 ${
                isDark
                  ? 'bg-gradient-to-br from-[#16221C] to-[#1A1610] border-amber-500/60 shadow-xl'
                  : 'bg-amber-50/70 border-amber-300'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" /> 2. Prompt Maestro de Video para Google Flow (Todo en 1)
                  </span>
                  <h4 className={`text-base font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    Para animar la imagen anterior manteniendo el envase fijo y la misma voz
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(activeMasterFlowPrompt, `master-flow-${product.id}`)
                  }
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer transition-all shadow"
                >
                  {copiedId === `master-flow-${product.id}` ? (
                    <>
                      <Check className="w-4 h-4" /> ¡Prompt Maestro Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copiar Video Todo-en-Uno
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-black/85 border border-amber-500/40 font-mono text-xs md:text-sm text-slate-100 leading-relaxed select-all">
                {activeMasterFlowPrompt}
              </div>
            </div>

            {/* BLOCK 3: THE 4 SCENES */}
            <div
              className={`rounded-2xl border p-5 space-y-4 ${
                isDark ? 'bg-[#131C18] border-emerald-800/40' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" /> 3. Secuencia de 4 Escenas para Video (4s cada una)
                </span>
              </div>

              <div className="space-y-3.5">
                {product.flowScenes.map((scene) => {
                  const scenePrompt = promptLang === 'es' ? scene.promptEs : scene.promptEn;
                  const copyKey = `flow-${product.id}-s${scene.sceneNumber}`;
                  return (
                    <div
                      key={scene.sceneNumber}
                      className={`rounded-xl border p-4 space-y-2.5 ${
                        isDark
                          ? 'bg-black/65 border-slate-800 hover:border-amber-500/40'
                          : 'bg-white border-stone-200 shadow-xs'
                      } transition-all`}
                    >
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
                          className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          {copiedId === copyKey ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> ¡Escena {scene.sceneNumber} Copiada!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copiar Escena {scene.sceneNumber}
                            </>
                          )}
                        </button>
                      </div>

                      <div className="p-3.5 rounded-lg bg-black/85 border border-slate-800 font-mono text-xs text-slate-100 leading-relaxed select-all">
                        {scenePrompt}
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
    <section id="catalogo-prompts" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
              <BookOpen className="w-3.5 h-3.5" /> Galería de Referencia · 5 Productos de Estudio
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Ejemplos Reales Generados: Fotos de Estudio, Planos y Videos
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Explora los 5 productos de muestra con sus <strong>4 variantes de plano fotográfico</strong> o haz clic en <strong>"Personalizar en Estudio"</strong> para abrir cualquiera en el constructor de imágenes de arriba.
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
                        4 Planos de Foto + Video
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

                  {/* Card Body: 4 Benefits Summary */}
                  <div className="p-4 space-y-2.5">
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                      {prod.summary}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
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
                      handleOpenInStudio(prod.id);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" /> Editar en Estudio ↑
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
                    <span>Ver Fotos y Escenas</span>
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
              Ficha Fotográfica y de Escenas: <span className="text-emerald-400">{selectedProduct.name}</span>
            </h3>
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
