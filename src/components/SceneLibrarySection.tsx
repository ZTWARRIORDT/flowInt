import React, { useState } from 'react';
import {
  Film,
  Copy,
  Check,
  Camera,
  Clock,
  Layers,
  Music,
  Volume2,
} from 'lucide-react';
import {
  SCENE_TEMPLATES_LIBRARY,
  MUSIC_PROMPTS_LIBRARY,
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
    { id: 'all', label: 'Todas las Escenas (9)' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Film className="w-3.5 h-3.5" /> Biblioteca de Prompts de Escenas + Música de Fondo
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Prompts de Escenas Cinematográficas y Música para Flow
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Cada escena incluye el movimiento de cámara, la acción natural en cámara lenta y la{' '}
              <strong>instrucción de música de fondo y efectos sonoros</strong> para que tus videos de beneficios tengan atmósfera comercial completa.
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
              Español
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              English (Flow)
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

        {/* Scene Cards Grid */}
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

                  {/* Camera + Music Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[11px] font-semibold">
                      <Camera className="w-3 h-3" /> {scene.cameraMovement}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-semibold">
                      <Music className="w-3 h-3" /> {scene.musicSuggestion}
                    </span>
                  </div>

                  {/* Prompt Box */}
                  <div className="p-3.5 rounded-xl bg-black/75 border border-slate-800 font-mono text-xs text-slate-100 leading-relaxed select-all">
                    {promptText}
                  </div>

                  {/* Benefit Hook Overlay Example */}
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-0.5">
                      Texto / Beneficio sugerido en esta escena:
                    </span>
                    <span className="font-semibold text-white">{scene.benefitHookExample}</span>
                  </div>
                </div>

                {/* Copy Footer */}
                <button
                  type="button"
                  onClick={() => handleCopy(promptText, scene.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-amber-500/20 hover:from-emerald-500 hover:to-amber-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/40 font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedId === scene.id ? (
                    <>
                      <Check className="w-4 h-4" /> ¡Escena + Música Copiada!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copiar Escena con Música ({lang.toUpperCase()})
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Dedicated Background Music Prompts Sub-Section */}
        <div
          className={`rounded-3xl border p-6 md:p-8 space-y-6 ${
            isDark
              ? 'bg-gradient-to-br from-[#121622] via-[#101714] to-[#1A1324] border-purple-500/40'
              : 'bg-purple-50/60 border-purple-200'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-2">
                <Volume2 className="w-3.5 h-3.5" /> Prompts de Música de Fondo y Atmósfera Sonora
              </span>
              <h3 className={`text-2xl font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                4 Estilos de Música de Fondo para Agregar a tus Videos en Flow
              </h3>
              <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                Pega cualquiera de estas líneas al final de tu prompt de escena en Flow para indicarle qué estilo de música instrumental y sonidos de naturaleza colocar de fondo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MUSIC_PROMPTS_LIBRARY.map((m) => {
              const musicText = lang === 'es' ? m.promptEs : m.promptEn;
              return (
                <div
                  key={m.id}
                  className={`p-4 rounded-2xl border space-y-2.5 ${
                    isDark ? 'bg-black/50 border-purple-500/30' : 'bg-white border-purple-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-bold text-sm text-purple-300 flex items-center gap-2">
                      <Music className="w-4 h-4 text-purple-400" /> {m.title}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(musicText, `mus-${m.id}`)}
                      className="px-3 py-1 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-extrabold text-xs flex items-center gap-1 cursor-pointer transition-all"
                    >
                      {copiedId === `mus-${m.id}` ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copiar Música
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-[11px] text-amber-300 font-medium">
                    Ideal para: {m.bestFor} · Sensación: {m.mood}
                  </div>
                  <p className="text-xs font-mono text-slate-100 bg-black/75 p-3 rounded-xl border border-slate-800 select-all">
                    {musicText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
