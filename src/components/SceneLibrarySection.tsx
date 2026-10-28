import React, { useState } from 'react';
import {
  Film,
  Copy,
  Check,
  Clock,
  Layers,
} from 'lucide-react';
import {
  SCENE_TEMPLATES_LIBRARY,
  ScenePromptTemplate,
} from '../data/flowData';

interface Props {
  isDark: boolean;
}

export const SceneLibrarySection: React.FC<Props> = ({ isDark }) => {
  const [selectedCat, setSelectedCat] = useState<'all' | ScenePromptTemplate['categoryId']>('all');
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories: { id: 'all' | ScenePromptTemplate['categoryId']; label: string }[] = [
    { id: 'all', label: 'Todas las Escenas Todo-en-Uno (9)' },
    { id: 'gancho', label: '1. Escenas de Gancho (0–4s)' },
    { id: 'beneficios', label: '2. Escenas de Beneficios (4–8s)' },
    { id: 'ingredientes', label: '3. Escenas de Ingredientes (8–12s)' },
    { id: 'cierre', label: '4. Escenas de Cierre y Dosis (12–16s)' },
  ];

  const filteredScenes =
    selectedCat === 'all'
      ? SCENE_TEMPLATES_LIBRARY
      : SCENE_TEMPLATES_LIBRARY.filter((s) => s.categoryId === selectedCat);

  const getBadgeStyle = (catId: ScenePromptTemplate['categoryId']) => {
    switch (catId) {
      case 'gancho':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'beneficios':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'ingredientes':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
      case 'cierre':
      default:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    }
  };

  return (
    <section id="biblioteca-escenas" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Film className="w-3.5 h-3.5" /> Biblioteca de 9 Escenas Todo-en-Uno (Nada por Separado)
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Prompts de Escenas Completos (Acción + Solo Logos + Música + Misma Voz + Diálogo)
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              No necesitas copiar voz, música ni locución por separado: <strong>dentro de cada prompt ya está todo unificado</strong> (cámara, prohibición de animar letras animando solo logos e ingredientes, música de fondo, perfil de voz consistente y la frase hablada).
            </p>
          </div>

          {/* Language Switcher */}
          <div className="inline-flex rounded-xl bg-black/50 p-1 border border-slate-700 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === 'es' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              Español (Todo en 1)
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              English (Todo en 1)
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow-md'
                  : isDark
                  ? 'bg-[#121A16] text-slate-300 border border-slate-800 hover:border-emerald-500/40'
                  : 'bg-stone-100 text-stone-700 border border-stone-200 hover:border-emerald-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Scene Cards Grid (Each card has ONE unified prompt block with everything inside) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScenes.map((scene) => {
            const promptText = lang === 'es' ? scene.promptEs : scene.promptEn;
            return (
              <div
                key={scene.id}
                className={`rounded-2xl border p-5 flex flex-col justify-between gap-4 transition-all ${
                  isDark
                    ? 'bg-[#101714] border-slate-800/90 hover:border-amber-500/50 shadow-xl'
                    : 'bg-white border-stone-200 hover:border-amber-500/50 shadow-md'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Category & Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${getBadgeStyle(
                        scene.categoryId
                      )}`}
                    >
                      {scene.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" /> {scene.duration}
                    </span>
                  </div>

                  {/* Scene Title & Ideal For */}
                  <div>
                    <h3
                      className={`text-lg font-bold font-serif ${
                        isDark ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {scene.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 shrink-0" /> Ideal para: {scene.idealFor}
                    </p>
                  </div>

                  {/* Single Unified Prompt Box (Contains Visuals + No Letters/Only Logos + Music + Voice + Script) */}
                  <div className="p-4 rounded-xl bg-black/85 border border-slate-800 font-mono text-xs text-slate-100 leading-relaxed select-all">
                    {promptText}
                  </div>
                </div>

                {/* Single Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(promptText, scene.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow"
                >
                  {copiedId === scene.id ? (
                    <>
                      <Check className="w-4 h-4" /> ¡Prompt Todo-en-Uno Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copiar Prompt Todo-en-Uno ({lang.toUpperCase()})
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
