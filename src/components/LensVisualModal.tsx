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
  ArrowRight,
  Camera,
  Package,
  Box,
  Pill,
  ShoppingBag,
  Droplet,
  SprayCan,
  Layers,
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
  image: string;
  fallbackImage: string;
  photoAngleLabel: string;
  bokehDescription: string;
}

export interface PackagingVisualInfo {
  id: string;
  name: string;
  badge: string;
  simpleTitle: string;
  plainExplanation: string;
  visualEffect: string;
  idealFor: string[];
  image: string;
  photoAngleLabel: string;
  materialsDescription: string;
  recommendedLensId: string;
  recommendedPresentation: 'solo' | 'con-caja' | 'con-contenido';
}

export const LENSES_EXPLANATIONS: LensInfo[] = [
  {
    id: '85mm-f18',
    name: '85mm f/1.8 Prime',
    focalLength: '85mm',
    aperture: 'f/1.8',
    tag: 'El Favorito para Tiendas',
    simpleTitle: 'Efecto Retrato con Fondo Borroso (Bokeh)',
    plainExplanation:
      'Hace que tu producto resalte de inmediato porque difumina suavemente el fondo como en las fotos de revistas de lujo. Tu frasco queda 100% nítido en el centro, mientras las hojas y luces del fondo se vuelven suaves y sedosas.',
    visualEffect: 'Producto nítido al 100% + Fondo con desenfoque suave y círculos de luz (Bokeh)',
    idealFor: [
      'Tiendas online, e-commerce y Amazon',
      'Catálogos oficiales y páginas de venta',
      'Pósters comerciales donde el frasco debe ser el protagonista absoluto',
    ],
    depthOfFieldLevel: 5,
    sharpnessFocus: 'Foco clavado en el envase, fondo muy borroso',
    icon: 'portrait',
    image: '/images/lens-85mm-bokeh.jpg',
    fallbackImage: '/images/colageno-magnesio.jpg',
    photoAngleLabel: 'Plano Medio Frontal · 85mm f/1.8 (Fondo Borroso)',
    bokehDescription: 'Desenfoque de fondo máximo (Bokeh cremoso)',
  },
  {
    id: '100mm-macro',
    name: '100mm f/2.8 Macro',
    focalLength: '100mm',
    aperture: 'f/2.8',
    tag: 'Ultra Detalle Sensorial',
    simpleTitle: 'Primer Plano para Gotas, Textura y Relieves',
    plainExplanation:
      'Acerca la cámara tanto que puedes ver cada gota de rocío en el cristal, la textura del sérum o el brillo del logo dorado con nitidez microscópica. Corta los bordes del envase para llenar el encuadre de pura textura artesanal.',
    visualEffect: 'Detalle microscópico: texturas de ingredientes, gotas cristalinas y acabados en relieve',
    idealFor: [
      'Cosmética facial, sérums y aceites botánicos',
      'Gotas de agua fresca resbalando por el vidrio',
      'Miel cayendo de cuchara o cápsulas en primer plano',
    ],
    depthOfFieldLevel: 4,
    sharpnessFocus: 'Foco extremo en un punto específico (gotas o logo)',
    icon: 'macro',
    image: '/images/lens-100mm-macro.jpg',
    fallbackImage: '/images/serum-botanico.jpg',
    photoAngleLabel: 'Plano Macro Extremo · 100mm Macro (Gotas y Relieve)',
    bokehDescription: 'Foco microscópico milimétrico',
  },
  {
    id: '50mm-f14',
    name: '50mm f/1.4 Editorial',
    focalLength: '50mm',
    aperture: 'f/1.4',
    tag: 'Visión Natural',
    simpleTitle: 'Perspectiva Real del Ojo Humano',
    plainExplanation:
      'Muestra la escena exactamente igual a como la verían tus ojos al mirar una mesa. No deforma las proporciones y hace que la foto se sienta muy acogedora, limpia, orgánica y realista.',
    visualEffect: 'Perspectiva natural y equilibrada, sin distorsión de tamaño ni de bordes',
    idealFor: [
      'Bodegones con ingredientes en una mesa de cocina o spa',
      'Fotos cenitales (vistas desde arriba / Flat Lay)',
      'Escenas cotidianas y recetas naturales',
    ],
    depthOfFieldLevel: 3,
    sharpnessFocus: 'Enfoque natural y armonioso de todo el plano medio',
    icon: 'natural',
    image: '/images/lens-50mm-natural.jpg',
    fallbackImage: '/images/miel-propoleo.jpg',
    photoAngleLabel: 'Plano Natural de Mesa · 50mm Editorial (Ojo Humano)',
    bokehDescription: 'Profundidad natural equilibrada',
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
    image: '/images/lens-90mm-highspeed.jpg',
    fallbackImage: '/images/curcuma-ashwagandha.jpg',
    photoAngleLabel: 'Alta Velocidad 1/4000s · 90mm (Splash y Polvo en el Aire)',
    bokehDescription: 'Nitidez extendida en partículas suspendidas',
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
    image: '/images/lens-35mm-wide.jpg',
    fallbackImage: '/images/clorofila-matcha.jpg',
    photoAngleLabel: 'Plano General Amplio · 35mm (Bosque y Entorno Natural)',
    bokehDescription: 'Fondo visible y nítido para mostrar el paisaje',
  },
];

export const PACKAGINGS_EXPLANATIONS: PackagingVisualInfo[] = [
  {
    id: 'doypack-standup-pouch',
    name: 'Bolsa Doypack con Cierre Zip',
    badge: 'Softgels / Cápsulas',
    simpleTitle: 'Bolsa Flexible Vertical con Softgels Doradas al Pie',
    plainExplanation:
      'Empaque vertical flexible de acabado mate suave con sellado hermético superior y hendidura abre-fácil. En la foto posa firme de pie, permitiendo esparcir artísticamente cápsulas doradas o gomitas al frente junto al ingrediente fresco.',
    visualEffect: 'Textura mate sedosa al tacto con hendidura abre-fácil y cápsulas doradas traslúcidas que reflejan la luz',
    idealFor: [
      'Cápsulas softgel (aceite de orégano, coco, omega 3)',
      'Gomitas masticables (probióticos, biotina, vitaminas)',
      'Polvos superfoods, harinas funcionales o tés botánicos',
    ],
    image: '/images/pkg-doypack-pouch.jpg',
    photoAngleLabel: 'Doypack Mate + Cápsulas Softgel Doradas en Base',
    materialsDescription: 'Polímero mate texturizado con sellado superior térmico y muesca abre-fácil',
    recommendedLensId: '85mm-f18',
    recommendedPresentation: 'con-contenido',
  },
  {
    id: 'spray-atomizador',
    name: 'Frasco Spray / Atomizador Bucal',
    badge: 'Propóleo / Brumas',
    simpleTitle: 'Nebulizador Fino para Garganta con Caja de Empaque',
    plainExplanation:
      'Frasco de vidrio ámbar con cabezal dosificador spray blanco o negro y tapa protectora. En fotografía comercial posa al frente en ángulo de 3/4 junto a su caja exterior de empaque botánico para transmitir máxima autoridad de marca.',
    visualEffect: 'Boquilla atomizadora con botón pulsador fino, tubito de succión y caja packaging rígida al lado',
    idealFor: [
      'Extractos de propóleo y miel para la garganta',
      'Tónicos faciales y brumas hidratantes botánicas',
      'Sprays bucales antisépticos y calmantes',
    ],
    image: '/images/pkg-spray-box.jpg',
    photoAngleLabel: 'Dúo Frasco Spray Garganta + Caja de Empaque Exterior',
    materialsDescription: 'Vidrio ámbar pesado + boquilla atomizadora ergonómica y caja de cartón packaging',
    recommendedLensId: '85mm-f18',
    recommendedPresentation: 'con-caja',
  },
  {
    id: 'gotero-vidrio-ambar',
    name: 'Frasco Gotero Ámbar con Pipeta',
    badge: 'Sérums / Lujo',
    simpleTitle: 'Gotero Botánico con Pipeta Cristal y Caja Rígida de Lujo',
    plainExplanation:
      'El icono de la fitoterapia y cosmética avanzada. Frasco ámbar con pipeta de cristal y bulbo dosificador, acompañado de pie por su caja rígida negra mate con acabados estampados en foil dorado.',
    visualEffect: 'Refracción de luz cálida a través del vidrio ámbar y destellos metálicos dorados en caja y cuello',
    idealFor: [
      'Sérums faciales botánicos (Apitoxina, Rosa Mosqueta, Vitamina C)',
      'Aceites esenciales puros y tinturas madre',
      'Gotas sublinguales de alta concentración medicinal',
    ],
    image: '/images/pkg-dropper-luxury.jpg',
    photoAngleLabel: 'Frasco Gotero Ámbar con Pipeta Cristal + Caja Rígida Lujo',
    materialsDescription: 'Vidrio de grado farmacéutico, bulbo dosificador de silicona y foil dorado',
    recommendedLensId: '85mm-f18',
    recommendedPresentation: 'con-caja',
  },
  {
    id: 'frasco-suplementero-capsulas',
    name: 'Bote Suplementero (Pill Jar)',
    badge: 'Cápsulas / Vitaminas',
    simpleTitle: 'Frasco Cilíndrico con Tapa de Seguridad Ancha',
    plainExplanation:
      'El empaque estándar internacional de suplementos nutricionales. Frasco cilíndrico ámbar oscuro con tapa rosca negra estriada y etiqueta envolvente satinada, con cápsulas doradas esparcidas en la base frontal.',
    visualEffect: 'Brillo satinado en la etiqueta con acentos metálicos y tapa acanalada con textura de seguridad',
    idealFor: [
      'Vitaminas (D3+K2, Complejo B, Multivitamínicos)',
      'Minerales (Citrato de Magnesio, Zinc, Calcio)',
      'Cápsulas vegetales y perlas softgel de consumo diario',
    ],
    image: '/images/pkg-supplement-jar.jpg',
    photoAngleLabel: 'Bote Suplementero Ámbar con Tapa Estriada + Cápsulas en Base',
    materialsDescription: 'Vidrio o PET ámbar oscuro de grado farmacéutico con tapa estriada',
    recommendedLensId: '85mm-f18',
    recommendedPresentation: 'con-contenido',
  },
  {
    id: 'botella-jarabe-elixir',
    name: 'Botella de Jarabe / Elixir Líquido',
    badge: 'Colágeno / Tónico',
    simpleTitle: 'Botella Ergonómica para Fórmulas Líquidas y Elixires',
    plainExplanation:
      'Envase estilizado de hombros redondeados para fórmulas líquidas orales (como colágeno hidrolizado, jarabes reconstituyentes o elixires celulares), con copa medidora superior y tipografía moderna.',
    visualEffect: 'Silueta alta y ergonómica con acabado satinado continuo y copa dosificadora superior',
    idealFor: [
      'Colágeno líquido hidrolizado y elixires celulares antiedad',
      'Jarabes expectorantes botánicos y reconstituyentes',
      'Bebidas funcionales y tónicos energéticos orales',
    ],
    image: '/images/pkg-bottle-liquid.jpg',
    photoAngleLabel: 'Botella Estilizada Líquidos con Tapa Dosificadora Medidora',
    materialsDescription: 'Botella ergonómica azul mate/satinada con copa medidora transparente',
    recommendedLensId: '85mm-f18',
    recommendedPresentation: 'solo',
  },
  {
    id: 'doypack-gomitas',
    name: 'Doypack Pastel para Gomitas',
    badge: 'Gummies / Dulce',
    simpleTitle: 'Bolsa Doypack Minimalista de Tendencia Pastel',
    plainExplanation:
      'Diseño súper en tendencia para nutracéuticos modernos y gomitas masticables funcionales. Acabado mate sedoso en tonos pastel con tipografía limpia y muesca abre-fácil.',
    visualEffect: 'Acabado mate sedoso sin reflejos duros con tipografías contemporáneas redondeadas',
    idealFor: [
      'Gomitas masticables digestivas (Cranberry, Probióticos)',
      'Gomitas para el sueño (Melatonina, Pasiflora)',
      'Gummies para cabello y uñas (Biotina)',
    ],
    image: '/images/pkg-doypack-gummies.jpg',
    photoAngleLabel: 'Doypack Mate Minimalista para Gomitas Masticables',
    materialsDescription: 'Laminado mate soft-touch termosellado con hendidura abre-fácil',
    recommendedLensId: '85mm-f18',
    recommendedPresentation: 'con-contenido',
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedLensId: string;
  onSelectLens: (lensId: string) => void;
  isDark: boolean;
  initialTab?: 'lenses' | 'packagings';
  onSelectPackaging?: (
    packagingId: string,
    presentation?: 'solo' | 'con-caja' | 'con-contenido'
  ) => void;
  selectedPackagingId?: string;
}

export const LensVisualModal: React.FC<Props> = ({
  isOpen,
  onClose,
  selectedLensId,
  onSelectLens,
  isDark,
  initialTab = 'lenses',
  onSelectPackaging,
  selectedPackagingId,
}) => {
  const [modalTab, setModalTab] = useState<'lenses' | 'packagings'>(initialTab);
  const [activeLensId, setActiveLensId] = useState<string>(selectedLensId || '85mm-f18');
  const [activePackagingId, setActivePackagingId] = useState<string>(
    selectedPackagingId || 'doypack-standup-pouch'
  );
  const [imgSrcMap, setImgSrcMap] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedLensId) setActiveLensId(selectedLensId);
  }, [selectedLensId]);

  useEffect(() => {
    if (selectedPackagingId) setActivePackagingId(selectedPackagingId);
  }, [selectedPackagingId]);

  useEffect(() => {
    if (isOpen) {
      setModalTab(initialTab);
    }
  }, [isOpen, initialTab]);

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
  const currentPkg =
    PACKAGINGS_EXPLANATIONS.find((p) => p.id === activePackagingId) || PACKAGINGS_EXPLANATIONS[0];

  const handleImageError = (id: string, fallback: string) => {
    setImgSrcMap((prev) => ({ ...prev, [id]: fallback }));
  };

  const getImageUrl = (id: string, normalUrl: string, fallbackUrl?: string) => {
    return imgSrcMap[id] || normalUrl || fallbackUrl || '';
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`max-w-5xl w-full rounded-3xl border overflow-hidden shadow-2xl transition-all my-auto ${
          isDark
            ? 'bg-[#0E1612] border-emerald-500/50 text-slate-100'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
            isDark
              ? 'bg-gradient-to-r from-emerald-950 via-[#121E19] to-amber-950/40 border-emerald-900/60'
              : 'bg-emerald-50/70 border-emerald-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0">
              {modalTab === 'lenses' ? <Camera className="w-5 h-5" /> : <Package className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                GUÍA VISUAL CON FOTOGRAFÍAS REALES DE ESTUDIO
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif">
                {modalTab === 'lenses'
                  ? 'Mira cómo cambia tu foto según el Lente y Ángulo'
                  : 'Catálogo de Formatos Reales de Empaques y Envases'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Top Category Switcher */}
            <div className="inline-flex rounded-xl bg-black/50 p-1 border border-slate-700/80">
              <button
                type="button"
                onClick={() => setModalTab('lenses')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  modalTab === 'lenses'
                    ? 'bg-amber-500 text-slate-950 shadow font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Lentes (5 Ópticas)</span>
              </button>
              <button
                type="button"
                onClick={() => setModalTab('packagings')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  modalTab === 'packagings'
                    ? 'bg-emerald-500 text-slate-950 shadow font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>Empaques Reales (6)</span>
              </button>
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
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* TAB 1: LENSES */}
          {modalTab === 'lenses' && (
            <div className="space-y-6">
              {/* Lenses Navigation Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {LENSES_EXPLANATIONS.map((lens) => {
                  const isSelected = activeLensId === lens.id;
                  const thumbUrl = getImageUrl(lens.id, lens.image, lens.fallbackImage);
                  return (
                    <button
                      key={lens.id}
                      type="button"
                      onClick={() => setActiveLensId(lens.id)}
                      className={`p-2 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-gradient-to-br from-emerald-500/25 to-amber-500/15 border-amber-400 ring-2 ring-amber-400/50 shadow-md'
                          : isDark
                          ? 'bg-black/40 border-slate-800 hover:border-slate-700 text-slate-300'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-emerald-500/40'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-black shrink-0 border border-slate-700/80">
                        <img
                          src={thumbUrl}
                          alt={lens.name}
                          onError={() => handleImageError(lens.id, lens.fallbackImage)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-black">{lens.focalLength}</span>
                        </div>
                        <div
                          className={`text-[10px] font-bold truncate ${
                            isSelected
                              ? 'text-amber-300'
                              : isDark
                              ? 'text-slate-300'
                              : 'text-stone-800'
                          }`}
                        >
                          {lens.tag.split(' ')[0]} {lens.tag.split(' ')[1] || ''}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Lens Big Visual Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* LEFT: Photo */}
                <div className="md:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-black shadow-2xl relative group">
                  <div className="relative aspect-square w-full overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={getImageUrl(currentLens.id, currentLens.image, currentLens.fallbackImage)}
                      alt={`Ejemplo con ${currentLens.name}`}
                      onError={() => handleImageError(currentLens.id, currentLens.fallbackImage)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 shadow-md flex items-center gap-1">
                        <Aperture className="w-3.5 h-3.5" /> {currentLens.focalLength} {currentLens.aperture}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-black/75 text-emerald-300 text-[10px] font-mono border border-emerald-400/30">
                        Foto real de estudio
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/30">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                        {currentLens.photoAngleLabel}
                      </div>
                      <div className="text-xs text-slate-200 mt-0.5">{currentLens.visualEffect}</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Explanation */}
                <div
                  className={`md:col-span-7 p-6 rounded-3xl border flex flex-col justify-between gap-5 ${
                    isDark
                      ? 'bg-gradient-to-br from-[#121E19] to-[#0A100D] border-emerald-800/60 shadow-xl'
                      : 'bg-stone-50/90 border-stone-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-block mb-1">
                          {currentLens.tag}
                        </span>
                        <h4 className="text-2xl font-bold font-serif text-white">
                          {currentLens.simpleTitle}
                        </h4>
                      </div>

                      <div
                        className={`p-2.5 rounded-2xl border ${
                          isDark ? 'bg-black/60 border-slate-800' : 'bg-white border-stone-200'
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Fondo desenfocado (Bokeh):
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <div
                              key={lvl}
                              className={`h-2.5 w-5 rounded-full transition-all ${
                                lvl <= currentLens.depthOfFieldLevel
                                  ? 'bg-gradient-to-r from-emerald-400 to-amber-400'
                                  : isDark
                                  ? 'bg-slate-800'
                                  : 'bg-stone-200'
                              }`}
                            />
                          ))}
                          <span className="text-xs font-bold text-amber-300 ml-1.5">
                            {currentLens.depthOfFieldLevel === 5
                              ? 'Máximo'
                              : currentLens.depthOfFieldLevel >= 3
                              ? 'Medio'
                              : 'Nítido'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border text-sm leading-relaxed ${
                        isDark
                          ? 'bg-black/50 border-emerald-500/30 text-emerald-100'
                          : 'bg-white border-emerald-200 text-emerald-950'
                      }`}
                    >
                      <p>
                        💡 <strong>En palabras sencillas:</strong> {currentLens.plainExplanation}
                      </p>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border space-y-2 ${
                        isDark ? 'bg-black/40 border-slate-800' : 'bg-white border-stone-200'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> ¿Para qué tipo de foto te conviene?
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm">
                        {currentLens.idealFor.map((use, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span className={isDark ? 'text-slate-200' : 'text-stone-700'}>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectLens(currentLens.id);
                      onClose();
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Aplicar {currentLens.name} a mi Foto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PACKAGINGS */}
          {modalTab === 'packagings' && (
            <div className="space-y-6">
              {/* Packaging Navigation Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {PACKAGINGS_EXPLANATIONS.map((pkg) => {
                  const isSelected = activePackagingId === pkg.id;
                  const thumbUrl = getImageUrl(pkg.id, pkg.image);
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setActivePackagingId(pkg.id)}
                      className={`p-2 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-gradient-to-br from-emerald-500/25 to-amber-500/15 border-emerald-400 ring-2 ring-emerald-400/50 shadow-md font-bold'
                          : isDark
                          ? 'bg-black/40 border-slate-800 hover:border-slate-700 text-slate-300'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-emerald-500/40'
                      }`}
                    >
                      <div className="w-full aspect-square rounded-xl overflow-hidden bg-black shrink-0 border border-slate-700/80">
                        <img
                          src={thumbUrl}
                          alt={pkg.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div
                          className={`text-xs font-bold truncate ${
                            isSelected ? 'text-amber-300' : isDark ? 'text-white' : 'text-stone-900'
                          }`}
                        >
                          {pkg.name}
                        </div>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 inline-block mt-0.5">
                          {pkg.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Packaging Big Visual Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* LEFT: Real Photograph of the Packaging */}
                <div className="md:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden border-2 border-emerald-500/40 bg-black shadow-2xl relative group">
                  <div className="relative aspect-square w-full overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={getImageUrl(currentPkg.id, currentPkg.image)}
                      alt={`Foto real de ${currentPkg.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-500 text-slate-950 shadow-md flex items-center gap-1">
                        <Package className="w-3.5 h-3.5" /> {currentPkg.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-black/75 text-amber-300 text-[10px] font-mono border border-amber-400/30">
                        Foto real de producto
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-emerald-500/30">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">
                        {currentPkg.photoAngleLabel}
                      </div>
                      <div className="text-xs text-slate-200 mt-0.5">{currentPkg.visualEffect}</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Packaging Detailed Explanation */}
                <div
                  className={`md:col-span-7 p-6 rounded-3xl border flex flex-col justify-between gap-5 ${
                    isDark
                      ? 'bg-gradient-to-br from-[#121E19] to-[#0A100D] border-emerald-800/60 shadow-xl'
                      : 'bg-stone-50/90 border-stone-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 inline-block mb-1">
                        {currentPkg.badge}
                      </span>
                      <h4 className="text-2xl font-bold font-serif text-white">
                        {currentPkg.simpleTitle}
                      </h4>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border text-sm leading-relaxed ${
                        isDark
                          ? 'bg-black/50 border-emerald-500/30 text-emerald-100'
                          : 'bg-white border-emerald-200 text-emerald-950'
                      }`}
                    >
                      <p>
                        💡 <strong>Cómo luce en la foto de estudio:</strong> {currentPkg.plainExplanation}
                      </p>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border space-y-2 ${
                        isDark ? 'bg-black/40 border-slate-800' : 'bg-white border-stone-200'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Ideal para fotografiar:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm">
                        {currentPkg.idealFor.map((use, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span className={isDark ? 'text-slate-200' : 'text-stone-700'}>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`p-3 rounded-2xl border text-xs flex items-center justify-between gap-2 ${
                        isDark ? 'bg-black/30 border-slate-800 text-slate-300' : 'bg-white border-stone-200 text-stone-700'
                      }`}
                    >
                      <span>
                        <strong>Materiales y textura:</strong> {currentPkg.materialsDescription}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectPackaging) {
                        onSelectPackaging(currentPkg.id, currentPkg.recommendedPresentation);
                      }
                      onSelectLens(currentPkg.recommendedLensId);
                      onClose();
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Usar este Empaque en mi Estudio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
