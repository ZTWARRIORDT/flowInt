import React, { useState } from 'react';
import { Camera, Sparkles, ExternalLink, RotateCcw } from 'lucide-react';
import { ImagePromptStudio } from './components/ImagePromptStudio';

export function App() {
  const [studioKey, setStudioKey] = useState<number>(0);

  const handleResetStudio = () => {
    setStudioKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-stone-800 flex flex-col font-sans selection:bg-[#EFECE6] selection:text-stone-900">
      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E7E5DF] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <a
            href="#"
            aria-label="NaturalStudio, inicio"
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-xl bg-stone-900 flex items-center justify-center text-[#FDFCF9] shadow-xs group-hover:bg-stone-800 transition-colors">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-stone-900 block leading-tight">
                Natural<span className="text-stone-600">Studio</span>
              </span>
              <span className="text-xs font-mono text-stone-500 tracking-wide hidden sm:block truncate">
                Fotografía Comercial IA · 4 Pasos
              </span>
            </div>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handleResetStudio}
              aria-label="Reiniciar estudio a valores limpios"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#FDFCF9] hover:bg-[#EFECE6] text-stone-700 hover:text-stone-900 border border-[#E7E5DF] transition-all cursor-pointer shadow-xs active:scale-[0.98]"
              title="Reiniciar a escena limpia"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Escena</span>
            </button>

            <a
              href="https://flow.google"
              aria-label="Abrir Google Flow"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-[#FDFCF9] transition-all cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#FDFCF9]" />
              <span>Flow</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Studio Container */}
      <main className="flex-1 py-8 sm:py-10">
        <ImagePromptStudio key={studioKey} />
      </main>

      {/* Sobrio Footer Alabastro / Lino */}
      <footer className="border-t border-[#E7E5DF] bg-[#FDFCF9] py-8 text-stone-600 text-xs sm:text-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-stone-900 flex items-center justify-center text-[#FDFCF9] text-xs font-bold shadow-xs">
              N
            </div>
            <span className="font-medium text-stone-800">
              NaturalStudio · Generador de Prompts Comerciales para Google Flow
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span>Paleta Lino y Alabastro</span>
            <span>·</span>
            <span>4 Pasos</span>
            <span>·</span>
            <a
              href="https://flow.google"
              target="_blank"
              rel="noreferrer"
              className="text-stone-700 hover:text-stone-900 transition-colors inline-flex items-center gap-1"
            >
              Google Flow
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
