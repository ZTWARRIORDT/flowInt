import React, { useState, useEffect } from 'react';
import {
  Camera,
  Sparkles,
  Copy,
  Check,
  Package,
  RotateCcw,
  Upload,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Trash2,
  Plus,
  ShieldCheck,
  SprayCan,
  Pipette,
  Pill,
  ShoppingBag,
  Droplet,
  Tag,
} from 'lucide-react';
import {
  ENVIRONMENTS,
  PACKAGING_OPTIONS,
  CAMERA_SHOTS,
  CAMERA_LENSES,
  INFOGRAPHIC_STYLES,
  STUDIO_QUICK_PRESETS,
} from '../data/imageStudioData';

interface Props {
  isDark?: boolean;
  externalPresetPayload?: { id: string; key: number } | null;
}

type StepNumber = 1 | 2 | 3 | 4;
type EnvCategory = 'todos' | 'estudio' | 'hogar' | 'ciudad-naturaleza';

const CURATED_ENVIRONMENTS: { id: string; category: 'estudio' | 'hogar' | 'ciudad-naturaleza' }[] = [
  // Estudio y Lujo
  { id: 'arena-mediterranea', category: 'estudio' },
  { id: 'marmol-oro', category: 'estudio' },
  { id: 'pedestal-spa', category: 'estudio' },
  { id: 'estudio-neutro', category: 'estudio' },
  // Hogar Contemporáneo
  { id: 'cocina-diseno', category: 'hogar' },
  { id: 'tocador-microcemento', category: 'hogar' },
  { id: 'salon-japandi', category: 'hogar' },
  // Ciudad y Naturaleza
  { id: 'cafe-urbano', category: 'ciudad-naturaleza' },
  { id: 'terraza-metropolitana', category: 'ciudad-naturaleza' },
  { id: 'naturaleza-bosque', category: 'ciudad-naturaleza' },
  { id: 'invernadero-botanico', category: 'ciudad-naturaleza' },
  { id: 'laboratorio-clinico', category: 'ciudad-naturaleza' },
];

export const ImagePromptStudio: React.FC<Props> = ({ externalPresetPayload }) => {
  // Navigation State
  const [activeStep, setActiveStep] = useState<StepNumber>(1);

  // Step 1: Product & Packaging
  const [productName, setProductName] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [packagingId, setPackagingId] = useState<string>(PACKAGING_OPTIONS[0]?.id || 'gotero-vidrio-ambar');
  const [useReferencePhotoMode, setUseReferencePhotoMode] = useState<boolean>(true);

  // Step 2: Environment
  const [environmentId, setEnvironmentId] = useState<string>('arena-mediterranea');
  const [envCategoryFilter, setEnvCategoryFilter] = useState<EnvCategory>('todos');

  // Step 3: Camera & Typography / Infographic
  const [shotId, setShotId] = useState<string>('eye-level');
  const [lensId, setLensId] = useState<string>('85mm-f18');
  const [infographicStyle, setInfographicStyle] = useState<string>('none');
  const [benefits, setBenefits] = useState<string[]>(['', '', '', '']);

  // Aspect ratio (fixed default 1:1)
  const aspectRatio = '1:1';

  // Step 4: Language & Feedback
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  // Update lens/shot sync
  const handleSelectShot = (newShotId: string) => {
    setShotId(newShotId);
    if (newShotId === 'macro-extremo') {
      setLensId('100mm-macro');
    } else if (newShotId === 'cenital-90') {
      setLensId('50mm-f14');
    } else if (newShotId === 'picado-45') {
      setLensId('50mm-f14');
    } else {
      setLensId('85mm-f18');
    }
  };

  // Preset payload handling
  useEffect(() => {
    if (externalPresetPayload) {
      const found = STUDIO_QUICK_PRESETS.find((p) => p.id === externalPresetPayload.id);
      if (found) {
        setProductName(found.productName);
        setHeadline(found.headline);
        const b = [found.benefit1, found.benefit2, found.benefit3, found.benefit4].filter(Boolean);
        setBenefits(b.length ? b : ['', '', '', '']);
        if (found.packagingId) setPackagingId(found.packagingId);
        if (found.environmentId) setEnvironmentId(found.environmentId);
        if (found.shotId) handleSelectShot(found.shotId);
        if (found.infographicStyle) setInfographicStyle(found.infographicStyle);
        setUseReferencePhotoMode(true);
        setActiveStep(4);
        setSyncFeedback(`✓ Preset cargado: "${found.productName}"`);
        setTimeout(() => setSyncFeedback(null), 3000);
      }
    }
  }, [externalPresetPayload]);

  // Reset to clean scene
  const handleResetCleanScene = () => {
    setProductName('');
    setHeadline('');
    setBenefits(['', '', '', '']);
    setPackagingId(PACKAGING_OPTIONS[0]?.id || 'gotero-vidrio-ambar');
    setEnvironmentId('estudio-neutro');
    setShotId('eye-level');
    setLensId('85mm-f18');
    setInfographicStyle('none');
    setUseReferencePhotoMode(true);
    setActiveStep(1);
    setSyncFeedback('✓ Escena restablecida a valores limpios');
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  // Benefits handlers
  const handleAddBenefit = () => {
    if (benefits.length < 8) {
      setBenefits([...benefits, '']);
    }
  };

  const handleRemoveBenefit = (index: number) => {
    if (benefits.length > 1) {
      setBenefits(benefits.filter((_, i) => i !== index));
    }
  };

  const handleUpdateBenefit = (index: number, val: string) => {
    const next = [...benefits];
    next[index] = val;
    setBenefits(next);
  };

  const handleQuickAddBenefit = (chip: string) => {
    const emptyIdx = benefits.findIndex((b) => !b.trim());
    if (emptyIdx !== -1) {
      handleUpdateBenefit(emptyIdx, chip);
    } else if (benefits.length < 8) {
      setBenefits([...benefits, chip]);
    }
  };

  // Copy helper
  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Packaging icon helper
  const getPackagingIcon = (id: string) => {
    if (id.includes('spray') || id.includes('atomizador')) {
      return <SprayCan className="w-5 h-5 text-stone-700" />;
    }
    if (id.includes('gotero') || id.includes('pipeta')) {
      return <Pipette className="w-5 h-5 text-stone-700" />;
    }
    if (id.includes('suplementero') || id.includes('capsula') || id.includes('pill')) {
      return <Pill className="w-5 h-5 text-stone-700" />;
    }
    if (id.includes('doypack') || id.includes('pouch') || id.includes('bolsa')) {
      return <ShoppingBag className="w-5 h-5 text-stone-700" />;
    }
    if (id.includes('jarabe') || id.includes('botella') || id.includes('elixir')) {
      return <Droplet className="w-5 h-5 text-stone-700" />;
    }
    return <Package className="w-5 h-5 text-stone-700" />;
  };

  // Active items resolution
  const activePackaging = PACKAGING_OPTIONS.find((x) => x.id === packagingId) || PACKAGING_OPTIONS[0];
  const activeEnvironment = ENVIRONMENTS.find((x) => x.id === environmentId) || ENVIRONMENTS[0];
  const activeShot = CAMERA_SHOTS.find((x) => x.id === shotId) || CAMERA_SHOTS[0];
  const activeLens = CAMERA_LENSES.find((x) => x.id === lensId) || CAMERA_LENSES[0];
  const activeInfographic = INFOGRAPHIC_STYLES.find((x) => x.id === infographicStyle) || INFOGRAPHIC_STYLES[0];
  const displayProductName = productName.trim() || '[Nombre de tu Producto]';

  // Infographic fragment generator
  const getInfographicFragmentEs = (style: string) => {
    const activeBenefits = benefits.filter((b) => b.trim().length > 0);
    if (style === 'none' || activeBenefits.length === 0) {
      return 'Composición 100% limpia de catálogo comercial sin medallones, sin textos flotantes ni tarjetas externas, dejando el protagonismo visual absoluto y puro en el envase.';
    }

    switch (style) {
      case 'pill-badges': {
        const formatted = activeBenefits.map((b, i) => `${i + 1}) "+ ${b.trim()}"`).join(', ');
        return `Flotando de forma armónica y simétrica a los costados del envase hay ${activeBenefits.length} etiquetas alargadas tipo "pill badge" minimalistas con esquinas redondeadas, fondo blanco translúcido suave y texto tipográfico nítido en relieve con palabras clave legibles: ${formatted}. Diseño moderno, limpio y de alta conversión estilo e-commerce internacional.`;
      }
      case 'callout-pins': {
        const formatted = activeBenefits.map((b, i) => `${i + 1}) "${b.trim()}"`).join(', ');
        return `Composición infográfica publicitaria clínica con finas líneas guía de precisión conectando puntos clave del envase hacia ${activeBenefits.length} punteros flotantes con tipografía nítida y moderna indicando beneficios verificados: ${formatted}. Estilo infográfico científico de alta gama sin saturar la escena.`;
      }
      case 'editorial-vogue':
      case 'editorial-typography': {
        const formatted = activeBenefits.map((b) => `· ${b.trim()}`).join(' ');
        return `Diseño publicitario editorial estilo revista de bienestar de lujo (Wellness Magazine Layout): en el tercio superior de la imagen se integra con elegancia una tipografía serif moderna con titulares editoriales refinados y viñetas minimalistas: "${formatted}". Composición limpia, sofisticada con espacio negativo equilibrado y foco central en el producto.`;
      }
      case 'frosted-glass-metrics':
      case 'metric-cards': {
        const formatted = activeBenefits.map((b, i) => `Tarjeta ${i + 1}: "${b.trim()}"`).join(', ');
        return `Flotando a los lados del envase destacan paneles de vidrio esmerilado semitransparente (frosted glass) con esquinas redondeadas suaves, bordes nítidos y tipografía bold de alta conversión mostrando métricas y datos clínicos verificados: ${formatted}.`;
      }
      default:
        return 'Composición 100% limpia de catálogo comercial sin medallones, sin textos flotantes ni tarjetas externas, dejando el protagonismo visual absoluto y puro en el envase.';
    }
  };

  const getInfographicFragmentEn = (style: string) => {
    const activeBenefits = benefits.filter((b) => b.trim().length > 0);
    if (style === 'none' || activeBenefits.length === 0) {
      return '100% clean commercial catalog composition with no external medallions, floating text, or cards, showcasing only the pure product container and its textures.';
    }

    switch (style) {
      case 'pill-badges': {
        const formatted = activeBenefits.map((b, i) => `${i + 1}) "+ ${b.trim()}"`).join(', ');
        return `Floating harmoniously and symmetrically beside the container are ${activeBenefits.length} minimalist elongated pill-shaped badges with soft translucent white frosted backgrounds, rounded corners, and crisp embossed typography highlighting key claims: ${formatted}. Clean modern DTC supplement aesthetic.`;
      }
      case 'callout-pins': {
        const formatted = activeBenefits.map((b, i) => `${i + 1}) "${b.trim()}"`).join(', ');
        return `Clinical advertising infographic composition featuring fine precision guideline pins connecting key container details to ${activeBenefits.length} floating callout pointers with clean modern typography indicating verified benefits: ${formatted}. High-end scientific infographic aesthetic.`;
      }
      case 'editorial-vogue':
      case 'editorial-typography': {
        const formatted = activeBenefits.map((b) => `· ${b.trim()}`).join(' ');
        return `Luxury wellness magazine editorial advertising layout: gracefully integrated into the upper third breathing space is refined modern serif typography with elegant headline subtext and minimalist bullet points: "${formatted}". Clean, sophisticated composition with balanced negative space and central focus on the product.`;
      }
      case 'frosted-glass-metrics':
      case 'metric-cards': {
        const formatted = activeBenefits.map((b, i) => `Card ${i + 1}: "${b.trim()}"`).join(', ');
        return `Floating beside the container are semi-translucent frosted glass claim cards with soft rounded corners, crisp edges, and high-conversion bold clinical typography highlighting verified metrics: ${formatted}. Direct response advertising format.`;
      }
      default:
        return '100% clean commercial catalog composition with no external medallions, floating text, or cards, showcasing only the pure product container and its textures.';
    }
  };

  // Headline directive
  const headlineDirectiveEs = headline.trim()
    ? ` IMPORTANTE PARA FLOW: Deja la parte superior de la imagen (tercio superior) con espacio negativo limpio, aire y fondo continuo difuso, diseñado específicamente para que la frase publicitaria "${headline.trim()}" resalte con tipografía premium en pós-producción.`
    : '';
  const headlineDirectiveEn = headline.trim()
    ? ` CRITICAL DIRECTIVE FOR FLOW: Reserve the upper third (top negative breathing space) with clean uncluttered continuous background, specifically composed so the marketing headline "${headline.trim()}" can be placed with premium typography.`
    : '';

  // Framing & Shot style
  const isMacroMode = shotId === 'macro-extremo';

  let photoStyleEs = `Fotografía comercial de estudio en formato ${aspectRatio} para el producto natural "${displayProductName}", ${activeShot.promptEs}.`;
  let photoStyleEn = `Commercial studio photography in ${aspectRatio} format for the natural product "${displayProductName}", ${activeShot.promptEn}.`;

  if (isMacroMode) {
    photoStyleEs = `Fotografía macro sensorial de ultra detalle publicitario en formato ${aspectRatio} para el producto natural "${displayProductName}": encuadre microscópico cerrado enfocado en primerísimo plano sobre el relieve del logo, la textura táctil del material y las microgotas de rocío fresco condensadas, cortando estéticamente los bordes del envase para llenar por completo la toma con nitidez 8K.`;
    photoStyleEn = `Advertising sensory ultra-detail macro photography in ${aspectRatio} format for the natural product "${displayProductName}": tightly focused microscopic close-up framing on embossed logo relief, container material texture, and fresh micro-droplets, aesthetically cropping container edges to fill the entire frame with 8K clarity.`;
  } else if (shotId === 'cenital-90') {
    photoStyleEs = `Fotografía publicitaria Flat Lay cenital en formato ${aspectRatio} para el producto natural "${displayProductName}", ${activeShot.promptEs}.`;
    photoStyleEn = `Commercial advertising Flat Lay photography in ${aspectRatio} format for the natural product "${displayProductName}", ${activeShot.promptEn}.`;
  } else if (shotId === 'picado-45') {
    photoStyleEs = `Fotografía publicitaria en formato ${aspectRatio} para el producto natural "${displayProductName}", ${activeShot.promptEs}.`;
    photoStyleEn = `Commercial advertising photography in ${aspectRatio} format for the natural product "${displayProductName}", ${activeShot.promptEn}.`;
  }

  // Packaging description with Reference Photo Mode
  let packagingDescriptionEs = `En el centro destaca ${activePackaging.promptEs}, ${activeEnvironment.surfaceEs}.`;
  let packagingDescriptionEn = `Centered is ${activePackaging.promptEn}, ${activeEnvironment.surfaceEn}.`;

  if (useReferencePhotoMode) {
    const packagingHintEs = ` (silueta de ${activePackaging.label.toLowerCase()})`;
    const packagingHintEn = ` (${activePackaging.label.toLowerCase()} silhouette)`;
    packagingDescriptionEs = `[FOTO DE REFERENCIA ADJUNTA OBLIGATORIA]: Es indispensable e imperativo mantener con 100% de exactitud y fidelidad el producto y envase original${packagingHintEs} de la imagen adjunta: misma silueta geométrica, proporciones exactas, misma tapa o cierre hermético y diseño original de la etiqueta con sus logotipos reales sin rediseñar. En la escena destaca este envase original, ${activeEnvironment.surfaceEs}.`;
    packagingDescriptionEn = `[MANDATORY ATTACHED REFERENCE PHOTO]: It is strictly mandatory to preserve with 100% fidelity the authentic product container${packagingHintEn} from the attached image: identical geometric silhouette, exact proportions, authentic cap or seal, and original label graphics without redesigning. Centered in the scene is this authentic container, ${activeEnvironment.surfaceEn}.`;
  }

  // Macro Mode descriptions
  const macroPackagingEs = useReferencePhotoMode
    ? `[FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, la toma se concentra al 100% en el detalle microscópico de sus materiales originales, tipografías y logotipo auténtico en relieve. Con fondo en suave desenfoque bokeh cremoso con sutiles matices orgánicos de ${activeEnvironment.label}, sin elementos lejanos que alejen la toma.`
    : `La toma se concentra con nitidez microscópica en el detalle de ${activePackaging.label}, su logotipo botánico en relieve y microgotas sobre la superficie. Con fondo en suave desenfoque bokeh cremoso con sutiles matices orgánicos de ${activeEnvironment.label}, sin elementos lejanos que alejen la toma.`;

  const macroPackagingEn = useReferencePhotoMode
    ? `[ATTACHED REFERENCE PHOTO]: Using the attached authentic product as mandatory visual base, the framing focuses 100% on microscopic details of its authentic materials, typography, and embossed authentic logo. Smooth creamy bokeh background with subtle organic tones of ${activeEnvironment.label}, strictly no distant wide elements.`
    : `The camera focuses with microscopic sharpness on the texture of ${activePackaging.label}, its embossed botanical logo, and surface micro-droplets. Smooth creamy bokeh background with subtle organic tones of ${activeEnvironment.label}, strictly no distant wide elements.`;

  const macroMedallionsEs =
    'Composición macro limpia sin medallones externos flotantes para garantizar el acercamiento extremo de la cámara; los beneficios se reflejan en el acabado táctil del producto.';
  const macroMedallionsEn =
    'Clean macro composition without external floating medallions to allow extreme camera close-up; product benefits are embodied in its tactile quality.';

  // Main Prompt
  const mainPromptEs = isMacroMode
    ? `${photoStyleEs} ${macroPackagingEs} ${macroMedallionsEs} Con ${activeEnvironment.lightingEs}, capturado con lente macro 100mm f/2.8 con nitidez microscópica en texturas y gotas. Fotografía comercial publicitaria 8k.`
    : `${photoStyleEs} ${packagingDescriptionEs} ${getInfographicFragmentEs(infographicStyle)}${headlineDirectiveEs} Con ${activeEnvironment.lightingEs}, ${activeLens.promptEs}. Fotografía comercial hiperrealista 8k, calidad de estudio publicitario.`;

  const mainPromptEn = isMacroMode
    ? `${photoStyleEn} ${macroPackagingEn} ${macroMedallionsEn} Featuring ${activeEnvironment.lightingEn}, captured with a 100mm f/2.8 macro lens with microscopic sharpness on textures and dew droplets. 8k commercial advertising photography.`
    : `${photoStyleEn} ${packagingDescriptionEn} ${getInfographicFragmentEn(infographicStyle)}${headlineDirectiveEn} Featuring ${activeEnvironment.lightingEn}, ${activeLens.promptEn}. Hyper-realistic 8k commercial product photography, advertising studio quality.`;

  // Curated lists
  const environmentsList = CURATED_ENVIRONMENTS.map((c) => {
    const found = ENVIRONMENTS.find((e) => e.id === c.id);
    return found ? { ...found, category: c.category } : null;
  }).filter((e): e is NonNullable<typeof e> => e !== null);

  const filteredEnvironments =
    envCategoryFilter === 'todos'
      ? environmentsList
      : environmentsList.filter((e) => e.category === envCategoryFilter);

  const curatedShots = [
    CAMERA_SHOTS.find((s) => s.id === 'eye-level') || CAMERA_SHOTS[0],
    CAMERA_SHOTS.find((s) => s.id === 'picado-45') || CAMERA_SHOTS[0],
    CAMERA_SHOTS.find((s) => s.id === 'macro-extremo') || CAMERA_SHOTS[0],
    CAMERA_SHOTS.find((s) => s.id === 'cenital-90') || CAMERA_SHOTS[0],
  ];

  const curatedInfographics = [
    INFOGRAPHIC_STYLES.find((s) => s.id === 'none') || {
      id: 'none',
      label: 'Foto Limpia de Catálogo (Predeterminada)',
      badge: 'Catálogo Puro',
      shortDesc: 'Sin textos ni elementos externos flotantes.',
    },
    INFOGRAPHIC_STYLES.find((s) => s.id === 'pill-badges') || {
      id: 'pill-badges',
      label: 'Etiquetas Pill Badges Minimalistas',
      badge: 'E-Commerce DTC',
      shortDesc: 'Píldoras traslúcidas simétricas para 1 a 4 beneficios.',
    },
    INFOGRAPHIC_STYLES.find((s) => s.id === 'callout-pins') || {
      id: 'callout-pins',
      label: 'Pines Clínicos con Líneas Guía',
      badge: 'Clínico / Seed',
      shortDesc: 'Señaladores finos hacia detalles clave del empaque.',
    },
    INFOGRAPHIC_STYLES.find((s) => s.id === 'editorial-vogue') || {
      id: 'editorial-vogue',
      label: 'Wellness Magazine Layout',
      badge: 'Vogue Wellness',
      shortDesc: 'Composición editorial con aire superior para titular publicitario serif.',
    },
    INFOGRAPHIC_STYLES.find((s) => s.id === 'frosted-glass-metrics') || {
      id: 'frosted-glass-metrics',
      label: 'Tarjetas Métricas de Vidrio Esmerilado',
      badge: 'Frosted Glass',
      shortDesc: 'Paneles frosted glass con métricas clínicas de alta conversión.',
    },
  ];

  const STEPS: { num: StepNumber; title: string }[] = [
    { num: 1, title: '1. Tu Producto' },
    { num: 2, title: '2. Escenario' },
    { num: 3, title: '3. Estilo y Textos' },
    { num: 4, title: '4. Resumen y Prompt' },
  ];

  return (
    <section id="estudio-imagenes" className="py-8 pb-20 scroll-mt-16 bg-[#F7F5F0] text-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Encabezado y Acción de Reinicio */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EFECE6] text-stone-800 border border-[#E7E5DF]">
                <Camera className="w-3.5 h-3.5 text-stone-700" />
                <span>Configurador Visual en 4 Pasos</span>
              </span>
              {syncFeedback && (
                <span className="text-xs font-medium text-stone-800 bg-[#EFECE6] px-2.5 py-0.5 rounded-full border border-[#E7E5DF]">
                  {syncFeedback}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
              Estudio de Fotografía Comercial
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Genera prompts profesionales y de alta conversión listos para Google Flow.
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetCleanScene}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#FDFCF9] hover:bg-[#EFECE6] text-stone-700 hover:text-stone-900 border border-[#E7E5DF] transition-all cursor-pointer shadow-xs self-start sm:self-center"
            title="Restablecer a valores limpios iniciales"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Escena Limpia</span>
          </button>
        </div>

        {/* Stepper Horizontal Superior */}
        <div className="bg-[#FDFCF9] border border-[#E7E5DF] p-1.5 rounded-2xl shadow-xs overflow-x-auto">
          <div className="grid grid-cols-4 gap-1.5 min-w-[540px] sm:min-w-0">
            {STEPS.map((s) => {
              const isActive = activeStep === s.num;
              const isCompleted = activeStep > s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveStep(s.num)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-900 text-[#FDFCF9] shadow-xs'
                      : isCompleted
                      ? 'bg-[#EFECE6] text-stone-800 hover:bg-[#E7E5DF]'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-[#F7F5F0]'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] border border-current opacity-70">
                      {s.num}
                    </span>
                  )}
                  <span className="truncate">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENIDO DE CADA PASO */}

        {/* PASO 1: TU PRODUCTO Y ENVASE */}
        {activeStep === 1 && (
          <div className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            <div className="border-b border-[#E7E5DF] pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 block">
                Paso 1 de 4
              </span>
              <h3 className="text-xl font-bold font-serif text-stone-900 mt-1">
                Tu Producto y Silueta de Envase
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Define la identidad del producto y selecciona el empaque principal para la composición.
              </p>
            </div>

            {/* Inputs de Producto y Titular */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Ej: Cúrcuma Orgánica, Sérum Facial, Colágeno..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DF] bg-[#F7F5F0] text-stone-800 placeholder:text-stone-400 text-sm font-medium focus:outline-none focus:border-stone-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Frase de Campaña / Titular (Opcional)
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="Ej: ARTICULACIONES MÁS FUERTES · SIN LÍMITES"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DF] bg-[#F7F5F0] text-stone-800 placeholder:text-stone-400 text-sm font-medium focus:outline-none focus:border-stone-500 transition-colors"
                />
              </div>
            </div>

            {/* Selector de 6 Envases Clave */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                Selecciona la Silueta de Envase:
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PACKAGING_OPTIONS.slice(0, 6).map((pkg) => {
                  const isSelected = packagingId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setPackagingId(pkg.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                        isSelected
                          ? 'border-stone-900 bg-[#F7F5F0] ring-2 ring-stone-900/10 shadow-xs'
                          : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="p-1.5 rounded-lg bg-[#EFECE6] border border-[#E7E5DF]">
                          {getPackagingIcon(pkg.id)}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-stone-700 font-semibold truncate">
                          {pkg.badge}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-stone-900 leading-snug">
                          {pkg.label}
                        </div>
                        {pkg.shortDesc && (
                          <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                            {pkg.shortDesc}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interruptor de Foto de Referencia */}
            <div className="pt-2 border-t border-[#E7E5DF] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-sm font-bold text-stone-900 block">
                    ¿Adjuntarás foto de tu envase real en Flow?
                  </span>
                  <span className="text-xs text-stone-600">
                    Clona con 100% de exactitud la silueta, tapa y etiquetas originales de tu frasco.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setUseReferencePhotoMode(!useReferencePhotoMode)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 ${
                    useReferencePhotoMode
                      ? 'bg-stone-900 text-[#FDFCF9] border-stone-900 shadow-xs'
                      : 'bg-[#FDFCF9] text-stone-700 border-[#E7E5DF] hover:border-stone-400'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{useReferencePhotoMode ? '✓ Respetar mi frasco real' : '¿Adjuntarás foto real?'}</span>
                </button>
              </div>

              {useReferencePhotoMode && (
                <div className="p-3.5 rounded-xl bg-[#EFECE6] border border-[#E7E5DF] text-xs sm:text-sm text-stone-800 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-stone-800 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-stone-900">
                      Modo Frasco Real Activo
                    </p>
                    <p className="text-stone-700 leading-relaxed text-xs">
                      El prompt ordenará a Google Flow respetar con 100% de exactitud y fidelidad la silueta del envase, proporciones exactas, tapa y logotipo de la imagen adjunta (📎).
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="py-2.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#FDFCF9] text-sm font-medium flex items-center gap-2 cursor-pointer transition-all shadow-xs"
              >
                <span>Continuar al Paso 2: Escenario</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 2: ESCENARIO Y ATMÓSFERA */}
        {activeStep === 2 && (
          <div className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            <div className="border-b border-[#E7E5DF] pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 block">
                Paso 2 de 4
              </span>
              <h3 className="text-xl font-bold font-serif text-stone-900 mt-1">
                Escenario y Atmósfera
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Selecciona uno de los 12 entornos curados para colocar tu producto con iluminación comercial integrada.
              </p>
            </div>

            {/* Filtros por Categoría */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'todos', label: 'Todos (12)' },
                { id: 'estudio', label: 'Estudio y Lujo (4)' },
                { id: 'hogar', label: 'Hogar Contemporáneo (3)' },
                { id: 'ciudad-naturaleza', label: 'Ciudad y Naturaleza (5)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setEnvCategoryFilter(cat.id as EnvCategory)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    envCategoryFilter === cat.id
                      ? 'bg-stone-900 text-[#FDFCF9]'
                      : 'bg-[#EFECE6] text-stone-700 hover:text-stone-900 hover:bg-[#E7E5DF]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Rejilla de 12 Entornos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredEnvironments.map((env) => {
                const isSelected = environmentId === env.id;
                return (
                  <button
                    key={env.id}
                    type="button"
                    onClick={() => setEnvironmentId(env.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                      isSelected
                        ? 'border-stone-900 bg-[#F7F5F0] ring-2 ring-stone-900/10 shadow-xs'
                        : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-stone-700 font-semibold truncate">
                        {env.badge}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-stone-900 shrink-0" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-stone-900 leading-snug">
                        {env.label}
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                        {env.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Previsualización de Superficie y Luz del Entorno Activo */}
            <div className="bg-[#F7F5F0] border border-[#E7E5DF] rounded-xl p-4 space-y-1.5 text-xs">
              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-stone-700" />
                <span>Escenario Seleccionado: {activeEnvironment.label}</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                <strong>Superficie:</strong> {activeEnvironment.surfaceEs}
              </p>
              <p className="text-stone-700 leading-relaxed">
                <strong>Iluminación:</strong> {activeEnvironment.lightingEs}
              </p>
            </div>

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="py-2.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-sm font-medium flex items-center gap-2 cursor-pointer transition-all border border-[#E7E5DF]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="py-2.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#FDFCF9] text-sm font-medium flex items-center gap-2 cursor-pointer transition-all shadow-xs"
              >
                <span>Continuar al Paso 3: Estilo y Textos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 3: ESTILO FOTOGRÁFICO Y TEXTOS */}
        {activeStep === 3 && (
          <div className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            <div className="border-b border-[#E7E5DF] pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 block">
                Paso 3 de 4
              </span>
              <h3 className="text-xl font-bold font-serif text-stone-900 mt-1">
                Estilo Fotográfico y Textos
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Selecciona el encuadre de cámara y el estilo publicitario para los textos y beneficios.
              </p>
            </div>

            {/* Selector de 4 Ángulos de Cámara */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. Ángulo y Encuadre de Cámara:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {curatedShots.map((shot) => {
                  const isSelected = shotId === shot.id;
                  return (
                    <button
                      key={shot.id}
                      type="button"
                      onClick={() => handleSelectShot(shot.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'border-stone-900 bg-[#F7F5F0] ring-2 ring-stone-900/10 shadow-xs'
                          : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-stone-700 font-semibold truncate">
                          {shot.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-stone-900 shrink-0" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-stone-900">
                          {shot.label}
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {shot.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector de 5 Opciones de Infografía */}
            <div className="space-y-2.5 pt-2 border-t border-[#E7E5DF]">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  2. Diseño Tipográfico / Infográfico:
                </label>
                <span className="text-xs text-stone-500 font-medium">
                  {infographicStyle === 'none' ? 'Foto limpia activa' : 'Diseño con textos activo'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {curatedInfographics.map((styleOpt) => {
                  const isSelected = infographicStyle === styleOpt.id;
                  return (
                    <button
                      key={styleOpt.id}
                      type="button"
                      onClick={() => setInfographicStyle(styleOpt.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'border-stone-900 bg-[#F7F5F0] ring-2 ring-stone-900/10 shadow-xs'
                          : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-stone-700 font-semibold truncate">
                          {styleOpt.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-stone-900 shrink-0" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-stone-900 leading-snug">
                          {styleOpt.label}
                        </div>
                        <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                          {styleOpt.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector de Beneficios Dinámico (Solo visible cuando NO es foto limpia) */}
            {infographicStyle !== 'none' && (
              <div className="bg-[#F7F5F0] border border-[#E7E5DF] rounded-xl p-4 sm:p-5 space-y-3.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-stone-700" />
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Beneficios y Claims del Producto ({benefits.length} activos):
                    </span>
                  </div>

                  {benefits.length < 8 && (
                    <button
                      type="button"
                      onClick={handleAddBenefit}
                      className="px-2.5 py-1 rounded-lg bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-xs font-semibold flex items-center gap-1 border border-[#E7E5DF] transition-all cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Añadir Beneficio</span>
                    </button>
                  )}
                </div>

                {/* Sugerencias Rápidas */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[11px] text-stone-500 font-medium">Sugerencias:</span>
                  {[
                    'Absorción Rápida',
                    'Cero Azúcar / Keto',
                    '100% Orgánico',
                    'Refuerzo Inmune',
                    'Energía Limpia',
                    'Digestión Ligera',
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleQuickAddBenefit(chip)}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#FDFCF9] hover:bg-[#EFECE6] text-stone-700 border border-[#E7E5DF] transition-all cursor-pointer"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>

                {/* Inputs de Beneficios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {benefits.map((b, idx) => (
                    <div key={idx} className="relative flex items-center">
                      <input
                        type="text"
                        value={b}
                        onChange={(e) => handleUpdateBenefit(idx, e.target.value)}
                        placeholder={`${idx + 1}. Beneficio / Claim del producto`}
                        className="w-full pl-3 pr-8 py-2 rounded-xl border border-[#E7E5DF] bg-[#FDFCF9] text-stone-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-stone-500"
                      />
                      {benefits.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBenefit(idx)}
                          className="absolute right-2 p-1 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Eliminar beneficio"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="py-2.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-sm font-medium flex items-center gap-2 cursor-pointer transition-all border border-[#E7E5DF]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(4)}
                className="py-2.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#FDFCF9] text-sm font-medium flex items-center gap-2 cursor-pointer transition-all shadow-xs"
              >
                <span>Continuar a Resumen y Prompt</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 4: MESA DE ENTREGA Y PROMPT FINAL */}
        {activeStep === 4 && (
          <div className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            <div className="border-b border-[#E7E5DF] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 block">
                  Paso 4 de 4 · Mesa de Entrega
                </span>
                <h3 className="text-xl font-bold font-serif text-stone-900 mt-1">
                  Tu Prompt Listo para Google Flow
                </h3>
              </div>

              {/* Selector de Idioma ES / EN */}
              <div className="inline-flex rounded-xl bg-[#EFECE6] p-1 border border-[#E7E5DF] self-start sm:self-center">
                <button
                  type="button"
                  onClick={() => setOutputLang('es')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    outputLang === 'es'
                      ? 'bg-stone-900 text-[#FDFCF9] shadow-xs'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  Español
                </button>
                <button
                  type="button"
                  onClick={() => setOutputLang('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    outputLang === 'en'
                      ? 'bg-stone-900 text-[#FDFCF9] shadow-xs'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Ficha Resumen con Píldoras en Tono Lino */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Ficha de Configuración Seleccionada:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-semibold border border-[#E7E5DF]">
                  📦 {displayProductName}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  🏷 {activePackaging.label}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  🌿 {activeEnvironment.label}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  📷 {activeShot.label.split('(')[0].trim()}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  ✨ {infographicStyle === 'none' ? 'Foto Limpia' : activeInfographic.label}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  {useReferencePhotoMode ? '📎 Foto Real Activa' : 'Frasco Generado'}
                </span>
              </div>
            </div>

            {/* Caja de Prompt en Fondo Alabastro Cálido */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Prompt Final (Selección directa o 1 clic para copiar):
                </span>
                <span className="text-xs text-stone-500 font-mono">Formato {aspectRatio}</span>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FDFCF9] border border-[#E7E5DF] font-mono text-xs sm:text-sm text-stone-800 leading-relaxed select-all max-h-[300px] overflow-y-auto shadow-inner whitespace-pre-wrap">
                {outputLang === 'es' ? mainPromptEs : mainPromptEn}
              </div>
            </div>

            {/* Aviso de Foto de Referencia si está activa */}
            {useReferencePhotoMode && (
              <div className="p-3.5 rounded-xl bg-[#EFECE6] border border-[#E7E5DF] text-xs text-stone-800 flex items-center gap-2.5">
                <Upload className="w-4 h-4 text-stone-800 shrink-0" />
                <span>
                  <strong>Recordatorio para Flow:</strong> Al enviar este prompt, haz clic en el icono <strong>📎</strong> y adjunta la foto de tu envase real para asegurar réplica 1:1.
                </span>
              </div>
            )}

            {/* Botones de Acción Primarios */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
              <button
                type="button"
                onClick={() => copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-copy')}
                className="sm:col-span-8 py-3.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#FDFCF9] font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.99]"
              >
                {copiedKey === 'main-copy' ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>¡Prompt Copiado! Pégalo en Flow</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Prompt para Google Flow</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-copy');
                  window.open('https://flow.google', '_blank');
                }}
                className="sm:col-span-4 py-3.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] border border-[#E7E5DF] text-stone-800 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs"
                title="Copia el prompt y abre Google Flow en una pestaña nueva"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>Abrir Flow ↗</span>
              </button>
            </div>

            {/* Enlace para Modificar Selecciones */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="text-xs text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                ← Modificar Selección (Volver al Paso 1)
              </button>
            </div>

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="py-2.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-sm font-medium flex items-center gap-2 cursor-pointer transition-all border border-[#E7E5DF]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás al Paso 3</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
