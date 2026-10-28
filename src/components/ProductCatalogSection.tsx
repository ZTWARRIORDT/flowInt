import React, { useState } from 'react';
import {
  Copy,
  Check,
  Sparkles,
  Camera,
  Sliders,
  ChevronRight,
  BookOpen,
  X,
} from 'lucide-react';
import {
  PRODUCTS_DATA,
  NaturalProductExample,
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
    setTimeout(() => setCopiedId(null), 2000);
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

  const categories = [
    { id: 'all', label: 'Todas las Variaciones (16)' },
    { id: 'uro', label: 'URO Cranberry Rosa (4)' },
    { id: 'glucosamina', label: 'Glucosamina Frasco Blanco (4)' },
    { id: 'vitamina-frasco', label: 'Vitamina D3 Frasco Ámbar (4)' },
    { id: 'vitamina-pouch', label: 'Vitamina D3 Pouch Doypack (4)' },
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
        ? `Fotografía Flat Lay cenital en ángulo perpendicular de 90 grados desde arriba de "${product.name}": ${product.cleanHeroPromptEs} Composición ordenada de ingredientes botánicos frescos dispuestos en círculo armónico alrededor del envase, iluminación suave difusa de ventana, lente 50mm f/1.4, 8k.`
        : `Overhead 90-degree perpendicular top-down Flat Lay photography of "${product.name}": ${product.cleanHeroPromptEn} Artfully arranged raw botanical ingredients encircling the container, soft diffused window light, 50mm f/1.4 lens, 8k.`;
    }
    return lang === 'es'
      ? `Fotografía en primerísimo plano macro extremo (extreme close-up) de "${product.name}": enfoque microscópico ultra nítido en las microgotas de rocío fresco sobre el vidrio y el relieve dorado del logo, con los ingredientes en primer plano y desenfoque suave de fondo, lente macro 100mm f/2.8, 8k.`
      : `Extreme macro close-up photography of "${product.name}": razor-sharp microscopic focus on fresh dew droplets on the glass and embossed gold logo relief, with ingredients in the foreground, 100mm f/2.8 macro lens, 8k.`;
  };

  const renderProductCardInspector = (product: NaturalProductExample, isModal = false) => {
    const activePrompt = getProductImagePromptByVariant(product, imagePromptType, promptLang);

    return (
      <div
        className={`rounded-2xl border overflow-hidden ${
          isDark
            ? 'bg-[#0E1512] border-emerald-800/60 shadow-xl'
            : 'bg-white border-stone-200 shadow-xl'
        }`}
      >
        {/* Banner */}
        <div className="px-5 py-4 bg-gradient-to-r from-emerald-950 via-[#101C17] to-amber-950/40 border-b border-emerald-800/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
              {product.category}
            </span>
            <span className="font-bold text-sm text-white font-serif">{product.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (isModal) setModalProduct(null);
                handleOpenInStudio(product.id);
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow"
            >
              <Sliders className="w-3.5 h-3.5" /> Editar en el Estudio ↑
            </button>

            <div className="inline-flex rounded-lg bg-black/50 p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setPromptLang('es')}
                className={`px-2 py-0.5 rounded text-xs font-bold cursor-pointer ${
                  promptLang === 'es' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setPromptLang('en')}
                className={`px-2 py-0.5 rounded text-xs font-bold cursor-pointer ${
                  promptLang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'
                }`}
              >
                EN
              </button>
            </div>

            {isModal && (
              <button
                type="button"
                onClick={() => setModalProduct(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div className="md:col-span-4 rounded-xl overflow-hidden border border-amber-500/30 bg-black aspect-square max-w-[260px] mx-auto md:mx-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-8 space-y-3">
            {/* 4 Planos Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 rounded-xl bg-black/40 border border-slate-800">
              {[
                { id: 'poster', label: '1. Póster 3D' },
                { id: 'clean', label: '2. Hero Limpio' },
                { id: 'flatlay', label: '3. Flat Lay 90°' },
                { id: 'macro', label: '4. Macro Detalle' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setImagePromptType(tab.id as 'poster' | 'clean' | 'flatlay' | 'macro')
                  }
                  className={`py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    imagePromptType === tab.id
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Prompt Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                  PROMPT DE FOTO COMERCIAL ({promptLang.toUpperCase()})
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(activePrompt, `cat-${product.id}-${imagePromptType}`)}
                  className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1 cursor-pointer transition-all"
                >
                  {copiedId === `cat-${product.id}-${imagePromptType}` ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> ¡Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar Prompt
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-mono text-slate-100 leading-relaxed select-all max-h-[140px] overflow-y-auto">
                {activePrompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="catalogo-prompts" className="py-12 border-t border-emerald-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
              <BookOpen className="w-3.5 h-3.5" /> Galería de Inspiración
            </span>
            <h2
              className={`text-2xl md:text-3xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              16 Variaciones Fotográficas de tus Productos Reales
            </h2>
            <p className={`mt-1 text-xs md:text-sm ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Composiciones comerciales listas para Flow generadas a partir de tus fotos reales: <strong>URO</strong> (Doypack Rosa), <strong>Glucosamina</strong> (Frasco Blanco) y <strong>Vitamina D3</strong> (Frasco Ámbar y Pouch). Haz clic en "Editar en el Estudio ↑" para cargar fielmente su entorno, óptica, iluminación e infografía en el generador.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow'
                    : isDark
                    ? 'bg-[#141C18] text-slate-300 border border-slate-800'
                    : 'bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`group rounded-2xl border overflow-hidden transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'ring-2 ring-amber-400 border-amber-400 shadow-xl'
                    : isDark
                    ? 'bg-[#111815] border-slate-800/90 hover:border-emerald-500/50'
                    : 'bg-white border-stone-200 hover:border-emerald-500/50 shadow-md'
                }`}
              >
                <div>
                  <div className="relative h-56 bg-black overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/90 text-slate-950">
                        {prod.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <h3 className="text-base font-bold text-white font-serif leading-tight">
                        {prod.name}
                      </h3>
                      <div className="text-[10px] text-amber-300 mt-0.5 line-clamp-1">
                        "{prod.headline}"
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-2 text-xs">
                    <p className={`line-clamp-2 ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                      {prod.summary}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-3 pt-2.5 border-t flex items-center justify-between gap-2 ${
                    isDark ? 'border-slate-800/80 bg-black/20' : 'border-stone-100 bg-stone-50/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenInStudio(prod.id);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
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
                    <span>Ver Planos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Product Inspector */}
        <div className="pt-2">
          {renderProductCardInspector(selectedProduct, false)}
        </div>
      </div>

      {/* Modal Inspector */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {renderProductCardInspector(modalProduct, true)}
          </div>
        </div>
      )}
    </section>
  );
};
