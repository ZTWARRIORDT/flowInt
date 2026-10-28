import React, { useEffect, useState } from 'react';
import {
  X,
  Aperture,
  Check,
  Sparkles,
  Droplets,
  Eye,
  Zap,
  Maximize2,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

export interface LensInfo {
  id: string;
  name: string;
  focalLength: string;
  aperture: string;
  tag: string;
  simpleTitle: string;
  plainExplanation: string;
  visualEffect: string;
  idealFor: string[];
  depthOfFieldLevel: number; // 1 to 5 (5 = maximum blur / bokeh)
  sharpnessFocus: string;
  icon: 'portrait' | 'macro' | 'natural' | 'speed' | 'wide';
}

export const LENSES_EXPLANATIONS: LensInfo[] = [
  {
    id: '85mm-f18',
    name: '85mm f/1.8 Prime',
    focalLength: '85mm',
    aperture: 'f/1.8',
    tag: 'El Favorito para Tiendas',
    simpleTitle: 'Efecto Retrato con Fondo Suave (Bokeh)',
    plainExplanation:
      'Hace que tu producto resalte de inmediato porque difumina suavemente el fondo como en las fotos de revistas de lujo. Tu frasco queda nítido y perfecto, mientras el fondo se vuelve sedoso y no distrae.',
    visualEffect: 'Producto nítido al 100% + Fondo con desenfoque suave y círculos de luz (Bokeh)',
    idealFor: [
      'Tiendas online, e-commerce y Amazon',
      'Catálogos oficiales y páginas de venta',
      'Pósters comerciales donde el frasco debe ser el protagonista absoluto',
    ],
    depthOfFieldLevel: 5,
    sharpnessFocus: 'Foco clavado en el envase, fondo muy borroso',
    icon: 'portrait',
  },
  {
    id: '100mm-macro',
    name: '100mm f/2.8 Macro',
    focalLength: '100mm',
    aperture: 'f/2.8',
    tag: 'Ultra Detalle Sensorial',
    simpleTitle: 'Primer Plano para Gotas, Textura y Relieves',
    plainExplanation:
      'Acerca la cámara tanto que puedes ver cada gota de rocío en el cristal, la textura del sérum o el brillo del logo dorado con nitidez microscópica. Transmite pureza y calidad artesanal.',
    visualEffect: 'Detalle microscópico: texturas de ingredientes, gotas cristalinas y acabados en relieve',
    idealFor: [
      'Cosmética facial, sérums y aceites botánicos',
      'Gotas de agua fresca resbalando por el vidrio',
      'Miel cayendo de cuchara o cápsulas en primer plano',
    ],
    depthOfFieldLevel: 4,
    sharpnessFocus: 'Foco extremo en un punto específico (gotas o logo)',
    icon: 'macro',
  },
  {
    id: '50mm-f14',
    name: '50mm f/1.4 Editorial',
    focalLength: '50mm',
    aperture: 'f/1.4',
    tag: 'Visión Natural',
    simpleTitle: 'Perspectiva Real del Ojo Humano',
    plainExplanation:
      'Muestra la escena exactamente igual a como la verían tus ojos al mirar una mesa. No deforma las proporciones y hace que la foto se sienta muy acogedora, limpia y orgánica.',
    visualEffect: 'Perspectiva natural y equilibrada, sin distorsión de tamaño ni de bordes',
    idealFor: [
      'Bodegones con ingredientes en una mesa de cocina o spa',
      'Fotos cenitales (vistas desde arriba / Flat Lay)',
      'Escenas cotidianas y recetas naturales',
    ],
    depthOfFieldLevel: 3,
    sharpnessFocus: 'Enfoque natural y armonioso de todo el plano medio',
    icon: 'natural',
  },
  {
    id: '90mm-highspeed',
    name: '90mm f/4 High-Speed',
    focalLength: '90mm',
    aperture: 'f/4.0',
    tag: 'Congela el Movimiento',
    simpleTitle: 'Acción Rápida: Salpicaduras y Polvo en el Aire',
    plainExplanation:
      'Dispara a una velocidad ultra rápida (1/4000 de segundo) para congelar salpicaduras de agua, polvo de cúrcuma o gotas en el aire sin que salgan movidas o borrosas.',
    visualEffect: 'Efecto de congelación instantánea: cada partícula y gota suspendida en el aire',
    idealFor: [
      'Splashes de agua cristalina y clorofila',
      'Explosión de polvo botánico dorado detrás del frasco',
      'Fotos dinámicas llenas de energía y frescura',
    ],
    depthOfFieldLevel: 2,
    sharpnessFocus: 'Mayor zona de nitidez para atrapar gotas en el aire',
    icon: 'speed',
  },
  {
    id: '35mm-f2',
    name: '35mm f/2.0 Gran Angular',
    focalLength: '35mm',
    aperture: 'f/2.0',
    tag: 'Paisaje y Conexión Natural',
    simpleTitle: 'Muestra Todo el Entorno y la Naturaleza',
    plainExplanation:
      'Abre el campo visual para mostrar todo lo que rodea al producto: el bosque, los árboles, las rocas o el ambiente de spa. Ideal para transmitir que el producto viene directo de la naturaleza.',
    visualEffect: 'Campo visual amplio que integra el frasco dentro de un paisaje botánico majestuoso',
    idealFor: [
      'Publicidad ambiental y de estilo de vida',
      'Productos recolectados en bosques, selvas o campos',
      'Campañas que destacan el origen 100% orgánico',
    ],
    depthOfFieldLevel: 1,
    sharpnessFocus: 'Gran profundidad: el producto y el paisaje se aprecian con claridad',
    icon: 'wide',
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedLensId: string;
  onSelectLens: (lensId: string) => void;
  isDark: boolean;
}

export const LensVisualModal: React.FC<Props> = ({
  isOpen,
  onClose,
  selectedLensId,
  onSelectLens,
  isDark,
}) => {
  const [activeLensId, setActiveLensId] = useState<string>(selectedLensId || '85mm-f18');

  useEffect(() => {
    if (selectedLensId) {
      setActiveLensId(selectedLensId);
    }
  }, [selectedLensId, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentLens =
    LENSES_EXPLANATIONS.find((l) => l.id === activeLensId) || LENSES_EXPLANATIONS[0];

  const renderIcon = (type: LensInfo['icon']) => {
    const cls = 'w-5 h-5 text-amber-400';
    switch (type) {
      case 'portrait':
        return <Sparkles className={cls} />;
      case 'macro':
        return <Droplets className={cls} />;
      case 'natural':
        return <Eye className={cls} />;
      case 'speed':
        return <Zap className={cls} />;
      case 'wide':
      default:
        return <Maximize2 className={cls} />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`max-w-4xl w-full rounded-3xl border overflow-hidden shadow-2xl transition-all ${
          isDark
            ? 'bg-[#0E1612] border-emerald-500/50 text-slate-100'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`px-6 py-5 border-b flex items-center justify-between gap-4 ${
            isDark
              ? 'bg-gradient-to-r from-emerald-950 via-[#121E19] to-amber-950/40 border-emerald-900/60'
              : 'bg-emerald-50/70 border-emerald-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
              <Aperture className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                GUÍA VISUAL FÁCIL PARA NO EXPERTOS
              </span>
              <h3 className="text-xl font-bold font-serif">
                ¿Qué hace cada Lente de Cámara en tu Foto?
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isDark
                ? 'bg-black/50 text-slate-300 hover:text-white hover:bg-slate-800'
                : 'bg-white text-stone-700 hover:bg-stone-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Lenses Horizontal Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {LENSES_EXPLANATIONS.map((lens) => {
              const isSelected = activeLensId === lens.id;
              return (
                <button
                  key={lens.id}
                  type="button"
                  onClick={() => setActiveLensId(lens.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-br from-emerald-500/25 to-amber-500/15 border-amber-400 ring-2 ring-amber-400/50 shadow-md'
                      : isDark
                      ? 'bg-black/40 border-slate-800 hover:border-slate-700 text-slate-300'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-emerald-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black">{lens.focalLength}</span>
                    {renderIcon(lens.icon)}
                  </div>
                  <div
                    className={`text-[11px] font-bold line-clamp-1 ${
                      isSelected ? 'text-amber-300' : isDark ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {lens.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Lens Detailed Card */}
          <div
            className={`p-6 rounded-3xl border space-y-5 ${
              isDark
                ? 'bg-gradient-to-br from-[#121E19] to-[#0A100D] border-emerald-800/60'
                : 'bg-stone-50/80 border-stone-200 shadow-inner'
            }`}
          >
            {/* Title & Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 inline-block mb-1">
                  {currentLens.tag} · {currentLens.name}
                </span>
                <h4 className="text-2xl font-bold font-serif text-white">
                  {currentLens.simpleTitle}
                </h4>
              </div>

              {/* Bokeh / Depth of Field Meter */}
              <div
                className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-black/60 border-slate-800' : 'bg-white border-stone-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Nivel de Fondo Borroso (Bokeh):
                </div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <div
                      key={lvl}
                      className={`h-2.5 w-6 rounded-full transition-all ${
                        lvl <= currentLens.depthOfFieldLevel
                          ? 'bg-gradient-to-r from-emerald-400 to-amber-400'
                          : isDark
                          ? 'bg-slate-800'
                          : 'bg-stone-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-1">
                    {currentLens.depthOfFieldLevel === 5
                      ? 'Máximo (Cremoso)'
                      : currentLens.depthOfFieldLevel >= 3
                      ? 'Medio'
                      : 'Mínimo (Todo se ve)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Plain-Language Explanation */}
            <div
              className={`p-4 rounded-2xl border text-sm md:text-base leading-relaxed ${
                isDark
                  ? 'bg-black/50 border-emerald-500/30 text-emerald-100'
                  : 'bg-white border-emerald-200 text-emerald-950'
              }`}
            >
              <p>
                💡 <strong>En palabras sencillas:</strong> {currentLens.plainExplanation}
              </p>
            </div>

            {/* Visual Effect & Ideal Uses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left: What does the photo look like? */}
              <div
                className={`p-4 rounded-2xl border space-y-2 ${
                  isDark ? 'bg-black/40 border-slate-800' : 'bg-white border-stone-200'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> ¿Cómo se verá la foto?
                </span>
                <p className={`text-xs md:text-sm ${isDark ? 'text-slate-200' : 'text-stone-700'}`}>
                  {currentLens.visualEffect}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 font-mono">
                  Enfoque: {currentLens.sharpnessFocus}
                </div>
              </div>

              {/* Right: When should you use it? */}
              <div
                className={`p-4 rounded-2xl border space-y-2 ${
                  isDark ? 'bg-black/40 border-slate-800' : 'bg-white border-stone-200'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> ¿Cuándo te conviene elegirlo?
                </span>
                <ul className="space-y-1.5 text-xs md:text-sm">
                  {currentLens.idealFor.map((use, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className={isDark ? 'text-slate-200' : 'text-stone-700'}>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div
          className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
            isDark ? 'bg-[#080E0B] border-emerald-950' : 'bg-stone-100 border-stone-200'
          }`}
        >
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Al elegir este lente, Gemini ajustará la óptica para darte este resultado exacto.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectLens(currentLens.id);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Usar este Lente ({currentLens.name})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
