import React, { useState, useEffect, useRef } from 'react';
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
  Eye,
  X,
  AlertCircle,
  Lock,
  Film,
  Play,
  Volume2,
  Clapperboard,
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
type EnvCategory = 'todos' | 'personas' | 'ingredientes-spa' | 'estudio' | 'hogar' | 'ciudad-naturaleza';

const CURATED_ENVIRONMENTS: { id: string; category: Exclude<EnvCategory, 'todos'> }[] = [
  // Interacción Humana y Lifestyle (Opción 1)
  { id: 'mano-sujecion-base', category: 'personas' },
  { id: 'mano-gotero-piel', category: 'personas' },
  { id: 'rutina-matutina-bokeh', category: 'personas' },
  // Ingredientes Puros y Spa Húmedo (Opción 3)
  { id: 'ingredientes-deconstruccion', category: 'ingredientes-spa' },
  { id: 'spa-humedo-vapor', category: 'ingredientes-spa' },
  { id: 'pedestal-spa', category: 'ingredientes-spa' },
  // Estudio y Lujo
  { id: 'arena-mediterranea', category: 'estudio' },
  { id: 'marmol-oro', category: 'estudio' },
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
  const [rawIngredientsInput, setRawIngredientsInput] = useState<string>('');

  // Step 3: Camera & Typography / Infographic
  const [shotId, setShotId] = useState<string>('eye-level');
  const [lensId, setLensId] = useState<string>('85mm-f18');
  const [infographicStyle, setInfographicStyle] = useState<string>('none');
  const [benefits, setBenefits] = useState<string[]>(['', '', '', '']);
  interface StudioPreviewItem {
    type: 'angle' | 'environment';
    id: string;
    label: string;
    badge?: string;
    shortDesc?: string;
    sampleImage?: string;
    promptEs?: string;
    surfaceEs?: string;
    lightingEs?: string;
  }
  const [previewModalItem, setPreviewModalItem] = useState<StudioPreviewItem | null>(null);

  // Aspect ratio (fixed default 1:1)
  const aspectRatio = '1:1';

  // Step 4: Language, Mode & Feedback
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [deliveryMode, setDeliveryMode] = useState<'photo' | 'video'>('photo');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  // Update lens/shot sync
  const handleSelectShot = (newShotId: string) => {
    setShotId(newShotId);
    if (newShotId === 'macro-extremo') {
      setLensId('100mm-macro');
    } else if (newShotId === 'cenital-90' || newShotId === 'picado-45' || newShotId === 'tres-cuartos') {
      setLensId('50mm-f14');
    } else if (newShotId === 'plano-general-banner') {
      setLensId('35mm-f2');
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
    setRawIngredientsInput('');
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

  // Dynamic surface customization for Raw Elements
  const hasCustomRawIngredients =
    environmentId === 'ingredientes-deconstruccion' && rawIngredientsInput.trim().length > 0;
  const isRawIngredientsEmpty =
    environmentId === 'ingredientes-deconstruccion' && rawIngredientsInput.trim().length === 0;
  const filledBenefitsCount = benefits.filter((b) => b.trim().length > 0).length;

  // Navigation Blocking Rules: Hard block forward navigation when required inputs are missing
  const isStep2Blocked = isRawIngredientsEmpty;
  const isStep3Blocked = infographicStyle !== 'none' && filledBenefitsCount === 0;

  const canNavigateToStep = (targetStep: StepNumber): boolean => {
    // Going backward or staying on current step is always allowed
    if (targetStep <= activeStep) return true;
    // Step 2 is blocked if raw ingredients is selected but empty
    if (targetStep > 2 && isStep2Blocked) return false;
    // Step 3 is blocked if an infographic design is selected but benefits are empty
    if (targetStep > 3 && isStep3Blocked) return false;
    return true;
  };

  // Smooth scroll to top of studio configurator on step change
  const scrollToStudioTop = () => {
    const el = document.getElementById('estudio-imagenes');
    if (el) {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const yOffset = -72; // Account for sticky header
      const y = el.getBoundingClientRect().top + scrollY + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateStep = (targetStep: StepNumber) => {
    if (canNavigateToStep(targetStep)) {
      setActiveStep(targetStep);
      setTimeout(scrollToStudioTop, 30);
    }
  };

  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const timer = setTimeout(scrollToStudioTop, 30);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const effectiveSurfaceEs = hasCustomRawIngredients
    ? `posado sobre una losa pulida de piedra natural texturizada rodeado armoniosamente de ingredientes botánicos crudos en corte transversal fresco: ${rawIngredientsInput.trim()}, con microgotas de rocío fresco comunicando máxima frescura orgánica y alta potencia biológica`
    : activeEnvironment.surfaceEs;

  const effectiveSurfaceEn = hasCustomRawIngredients
    ? `resting on a polished natural textured stone slab harmoniously surrounded by fresh cross-cut raw botanical active ingredients: ${rawIngredientsInput.trim()}, with fresh dew micro-droplets conveying peak organic freshness and biological potency`
    : activeEnvironment.surfaceEn;

  // Packaging description with Reference Photo Mode
  let packagingDescriptionEs = `En el centro destaca ${activePackaging.promptEs}, ${effectiveSurfaceEs}.`;
  let packagingDescriptionEn = `Centered is ${activePackaging.promptEn}, ${effectiveSurfaceEn}.`;

  if (useReferencePhotoMode) {
    const packagingHintEs = ` (silueta de ${activePackaging.label.toLowerCase()})`;
    const packagingHintEn = ` (${activePackaging.label.toLowerCase()} silhouette)`;
    packagingDescriptionEs = `[FOTO DE REFERENCIA ADJUNTA OBLIGATORIA]: Es indispensable e imperativo mantener con 100% de exactitud y fidelidad el producto y envase original${packagingHintEs} de la imagen adjunta: misma silueta geométrica, proporciones exactas, misma tapa o cierre hermético y diseño original de la etiqueta con sus logotipos reales sin rediseñar. En la escena destaca este envase original, ${effectiveSurfaceEs}.`;
    packagingDescriptionEn = `[MANDATORY ATTACHED REFERENCE PHOTO]: It is strictly mandatory to preserve with 100% fidelity the authentic product container${packagingHintEn} from the attached image: identical geometric silhouette, exact proportions, authentic cap or seal, and original label graphics without redesigning. Centered in the scene is this authentic container, ${effectiveSurfaceEn}.`;
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

  // Directive for Human Interaction & Lifestyle scenes
  const isPersonScene = activeEnvironment.id.startsWith('mano-') || activeEnvironment.id.includes('rutina');
  const humanDirectiveEs = isPersonScene
    ? ' DIRECTIVA ANATÓMICA OBLIGATORIA PARA FLOW: Manos con anatomía perfecta natural de 5 dedos proporcionados, manicura neutra y limpia, cero dedos adicionales o deformidades, y con el 100% de la etiqueta y logotipo del envase completamente despejados y legibles.'
    : '';
  const humanDirectiveEn = isPersonScene
    ? ' CRITICAL ANATOMICAL DIRECTIVE FOR FLOW: Perfectly proportioned natural 5-finger hand anatomy, clean neutral manicured nails, zero extra digits or deformities, keeping 100% of the container label and logo completely unobstructed, clear, and readable.'
    : '';

  // Main Prompt
  const mainPromptEs = isMacroMode
    ? `${photoStyleEs} ${macroPackagingEs} ${macroMedallionsEs}${humanDirectiveEs} Con ${activeEnvironment.lightingEs}, capturado con lente macro 100mm f/2.8 con nitidez microscópica en texturas y gotas. Fotografía comercial publicitaria 8k.`
    : `${photoStyleEs} ${packagingDescriptionEs} ${getInfographicFragmentEs(infographicStyle)}${headlineDirectiveEs}${humanDirectiveEs} Con ${activeEnvironment.lightingEs}, ${activeLens.promptEs}. Fotografía comercial hiperrealista 8k, calidad de estudio publicitario.`;

  const mainPromptEn = isMacroMode
    ? `${photoStyleEn} ${macroPackagingEn} ${macroMedallionsEn}${humanDirectiveEn} Featuring ${activeEnvironment.lightingEn}, captured with a 100mm f/2.8 macro lens with microscopic sharpness on textures and dew droplets. 8k commercial advertising photography.`
    : `${photoStyleEn} ${packagingDescriptionEn} ${getInfographicFragmentEn(infographicStyle)}${headlineDirectiveEn}${humanDirectiveEn} Featuring ${activeEnvironment.lightingEn}, ${activeLens.promptEn}. Hyper-realistic 8k commercial product photography, advertising studio quality.`;

  // Dynamic Video Storyboard generation for Flow (15s commercial / 4 sequential scenes)
  const b1 = benefits.filter((b) => b.trim().length > 0)[0] || 'ingredientes botánicos activos de alta pureza';
  const b2 = benefits.filter((b) => b.trim().length > 0)[1] || 'absorción celular optimizada y rápida acción';

  const videoScenes = [
    {
      sceneNum: 1,
      timeRange: '00:00 - 00:03',
      title: outputLang === 'es' ? 'Escena 1 · El Gancho Visual (Hook Shot)' : 'Scene 1 · The Hook Shot',
      badge: '0–3s · Scroll-Stopper',
      cameraMovement: outputLang === 'es' ? 'Slow Push-In a 120fps' : '120fps Slow Push-In',
      promptEs: `Cámara en movimiento rápido de acercamiento (Push-In) hacia ${displayProductName} sobre ${effectiveSurfaceEs}. En cámara superlenta a 120fps se anima una suave onda de luz y microgotas de rocío en el entorno mientras el envase, sus tipografías y logotipo original permanecen 100% firmes y estáticos en el centro. [DIRECTIVA ANTI-DEFORMACIÓN FLOW]: El producto no debe mutar ni recolorearse; animar exclusivamente la atmósfera y partículas circundantes. Cinematografía comercial publicitaria 8k.`,
      promptEn: `Dynamic rapid push-in camera motion toward ${displayProductName} on ${effectiveSurfaceEn}. In 120fps super slow motion, animate expanding gentle light waves and micro-dew mist in the surroundings while the authentic bottle, typography, and logo remain 100% steady and static in the center. [FLOW ANTI-MORPHING DIRECTIVE]: Product must not mutate or recolor; animate strictly surrounding atmosphere and particles. 8k commercial motion cinematography.`,
      voiceScriptEs: `¿Buscas máxima potencia natural para tu bienestar diario? Descubre ${displayProductName}.`,
      voiceScriptEn: `Looking for maximum natural potency in your daily routine? Discover ${displayProductName}.`,
      soundDesignEs: 'Whoosh cinemático suave con impacto sutil de bajo y percusión orgánica de ritmo ascendente.',
      soundDesignEn: 'Soft cinematic whoosh with subtle bass pulse and rising organic percussion rhythm.',
    },
    {
      sceneNum: 2,
      timeRange: '00:03 - 00:07',
      title: outputLang === 'es' ? 'Escena 2 · La Revelación (Hero Reveal)' : 'Scene 2 · The Hero Reveal',
      badge: '3–7s · Volumen 3D',
      cameraMovement: outputLang === 'es' ? 'Giro Orbital Suave 15°' : 'Smooth 15° Orbital Pan',
      promptEs: `Giro orbital suave de cámara a 15 grados alrededor de ${displayProductName} en ${activeEnvironment.label}. Un barrido de luz solar cálida recorre la curvatura del envase destacando su vidrio y etiqueta original nítida. Con ${activeEnvironment.lightingEs}. [DIRECTIVA ANTI-DEFORMACIÓN FLOW]: Silueta del envase y textos intactos sin temblores ni distorsión; animar únicamente el haz de luz y suaves sombras botánicas en movimiento. Calidad cinematográfica publicitaria 8k.`,
      promptEn: `Smooth 15-degree orbital camera pan around ${displayProductName} in ${activeEnvironment.label}. A sweep of warm sunlight travels across the container surface highlighting its glass finish and authentic label. Featuring ${activeEnvironment.lightingEn}. [FLOW ANTI-MORPHING DIRECTIVE]: Container silhouette and texts stay intact without jitter; animate only the light beam and gentle drifting botanical shadows. 8k commercial motion cinematography.`,
      voiceScriptEs: headline.trim()
        ? `${headline.trim()}. Formulado con ${b1} para resultados de alta fidelidad.`
        : `Fórmula botánica avanzada con ${b1}. Diseñada para acompañar tu estilo de vida.`,
      voiceScriptEn: headline.trim()
        ? `${headline.trim()}. Formulated with ${b1} for high-fidelity results.`
        : `Advanced botanical formula with ${b1}. Designed for your daily lifestyle.`,
      soundDesignEs: 'Melodía inspiradora de cuerdas acústicas y piano moderno con brillo especular sutil.',
      soundDesignEn: 'Uplifting acoustic strings and modern piano melody with subtle shimmer chime.',
    },
    {
      sceneNum: 3,
      timeRange: '00:07 - 00:11',
      title: outputLang === 'es' ? 'Escena 3 · Acción Sensorial & Beneficios' : 'Scene 3 · Sensory Action & Benefits',
      badge: '7–11s · Textura & Prueba',
      cameraMovement: outputLang === 'es' ? 'Slow Tilt-Down Macro' : 'Slow Tilt-Down Macro',
      promptEs: `Toma macro con cámara descendente lenta (Slow Tilt-Down). Un haz de luz resalta una microgota brillante deslizándose con tensión superficial perfecta cerca del envase ${displayProductName}, mientras flotan sutiles partículas luminosas de frescura botánica. [DIRECTIVA ANTI-DEFORMACIÓN FLOW]: Los logotipos del envase permanecen nítidos y fijos; animar únicamente el brillo de la gota y la profundidad de campo. Calidad de estudio publicitario 8k.`,
      promptEn: `Macro shot with slow downward camera glide (Slow Tilt-Down). A beam of light illuminates a sparkling dew droplet gliding with perfect surface tension near the ${displayProductName} container, accompanied by subtle floating luminous botanical particles. [FLOW ANTI-MORPHING DIRECTIVE]: Container logos remain tack-sharp and stationary; animate only droplet glint and depth-of-field transition. 8k commercial studio quality.`,
      voiceScriptEs: `Doble acción comprobada: ${b1} y ${b2}. Siente la diferencia desde la primera toma.`,
      voiceScriptEn: `Proven dual action: ${b1} and ${b2}. Feel the difference from day one.`,
      soundDesignEs: 'Gota cristalina con eco suave (droplet chime) y transición a ritmo envolvente y positivo.',
      soundDesignEn: 'Crystal droplet sound with soft reverb and smooth transition into warm confident beat.',
    },
    {
      sceneNum: 4,
      timeRange: '00:11 - 00:15',
      title: outputLang === 'es' ? 'Escena 4 · Cierre Comercial & CTA' : 'Scene 4 · Commercial Lockup & CTA',
      badge: '11–15s · Llamada a la Acción',
      cameraMovement: outputLang === 'es' ? 'Slow Pull-Back Frontal' : 'Frontal Slow Pull-Back',
      promptEs: `Encuadre frontal heroico de ${displayProductName} con sutil retroceso lento de cámara (Slow Pull-Back), revelando una composición simétrica limpia con aire superior para titular publicitario. Iluminación comercial de alta gama con sutiles destellos de éxito en los bordes del envase. [DIRECTIVA ANTI-DEFORMACIÓN FLOW]: Logo y envase 100% fidedignos y estáticos; el video cierra en un fotograma publicitario impecable listo para llamada a la acción. Fotografía comercial de alta conversión 8k.`,
      promptEn: `Heroic frontal lockup of ${displayProductName} with subtle slow camera pull-back, revealing a clean symmetrical composition with top breathing room for advertising text. High-end commercial studio lighting with gentle edge rim glints. [FLOW ANTI-MORPHING DIRECTIVE]: Logo and container 100% faithful and static; video concludes on a flawless commercial hero frame ready for call-to-action. 8k high-conversion advertising cinematography.`,
      voiceScriptEs: `Lleva tu bienestar al siguiente nivel con ${displayProductName}. Haz clic en el enlace y pide el tuyo hoy.`,
      voiceScriptEn: `Elevate your wellness with ${displayProductName}. Click the link below and get yours today.`,
      soundDesignEs: 'Resolución musical armoniosa de alta energía, campana sutil de confirmación de marca.',
      soundDesignEn: 'Harmonious high-energy musical resolution, subtle brand lockup confirmation chime.',
    },
  ];

  const fullStoryboardText = videoScenes
    .map(
      (s) =>
        `========================================\n` +
        `${s.title.toUpperCase()} (${s.timeRange})\n` +
        `Cámara: ${s.cameraMovement}\n` +
        `----------------------------------------\n` +
        `PROMPT FLOW VIDEO (IMAGE-TO-VIDEO):\n` +
        `${outputLang === 'es' ? s.promptEs : s.promptEn}\n\n` +
        `GUION DE LOCUCIÓN (VOICEOVER):\n` +
        `"${outputLang === 'es' ? s.voiceScriptEs : s.voiceScriptEn}"\n\n` +
        `DISEÑO SONORO / SFX:\n` +
        `${outputLang === 'es' ? s.soundDesignEs : s.soundDesignEn}\n`
    )
    .join('\n');

  // Curated lists
  const environmentsList = CURATED_ENVIRONMENTS.map((c) => {
    const found = ENVIRONMENTS.find((e) => e.id === c.id);
    return found ? { ...found, category: c.category } : null;
  }).filter((e): e is NonNullable<typeof e> => e !== null);

  const filteredEnvironments =
    envCategoryFilter === 'todos'
      ? environmentsList
      : environmentsList.filter((e) => e.category === envCategoryFilter);

  const curatedShots = CAMERA_SHOTS;

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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/25">
                <Camera className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Configurador Visual en 4 Pasos</span>
              </span>
              {syncFeedback && (
                <span className="text-xs font-medium text-stone-800 bg-[#EFECE6] px-2.5 py-0.5 rounded-full border border-[#E7E5DF]">
                  {syncFeedback}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-sans text-stone-900 tracking-tight">
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
              const canNavigate = canNavigateToStep(s.num);

              return (
                <button
                  key={s.num}
                  type="button"
                  disabled={!canNavigate}
                  onClick={() => {
                    if (canNavigate) handleNavigateStep(s.num);
                  }}
                  title={
                    !canNavigate
                      ? 'Paso bloqueado: completa los campos obligatorios del paso actual para avanzar'
                      : undefined
                  }
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? 'bg-[#C85A32] text-white shadow-xs cursor-default'
                      : !canNavigate
                      ? 'opacity-40 text-stone-400 bg-transparent cursor-not-allowed'
                      : isCompleted
                      ? 'bg-[#EFECE6] text-stone-800 hover:bg-[#E7E5DF] cursor-pointer'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-[#F7F5F0] cursor-pointer'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : !canNavigate ? (
                    <Lock className="w-3.5 h-3.5 opacity-70" />
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
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C85A32] block">
                Paso 1 de 4
              </span>
              <h3 className="text-xl font-black font-sans text-stone-900 mt-1">
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DF] bg-[#F7F5F0] text-stone-800 placeholder:text-stone-400 text-sm font-medium focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] transition-colors"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DF] bg-[#F7F5F0] text-stone-800 placeholder:text-stone-400 text-sm font-medium focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] transition-colors"
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
                          ? 'border-[#C85A32] bg-[#FDFBF9] ring-2 ring-[#C85A32]/20 shadow-xs'
                          : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`p-1.5 rounded-lg border transition-colors ${
                          isSelected
                            ? 'bg-[#C85A32]/10 border-[#C85A32]/30 text-[#C85A32]'
                            : 'bg-[#EFECE6] border-[#E7E5DF] text-stone-700'
                        }`}>
                          {getPackagingIcon(pkg.id)}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold truncate ${
                          isSelected
                            ? 'bg-[#C85A32]/15 text-[#C85A32]'
                            : 'bg-[#EFECE6] text-stone-700'
                        }`}>
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

            {/* Aviso Permanente de Réplica de Frasco Real */}
            <div className="pt-2 border-t border-[#E7E5DF]">
              <div className="p-3.5 rounded-xl bg-[#FDFBF9] border border-[#E7E5DF] text-xs text-stone-700 flex items-start sm:items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/25 flex items-center justify-center shrink-0 text-[#C85A32]">
                  <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-stone-900 text-xs sm:text-sm">
                    Réplica 1:1 de Frasco Real Siempre Activa
                  </p>
                  <p className="text-stone-600 leading-relaxed text-xs">
                    El prompt incluirá siempre la instrucción técnica para que Google Flow clone con 100% de exactitud y fidelidad la silueta del envase, tapa y etiquetas de la foto real que adjuntes (📎).
                  </p>
                </div>
              </div>
            </div>

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-end">
              <button
                type="button"
                onClick={() => handleNavigateStep(2)}
                className="py-2.5 px-5 rounded-xl bg-[#C85A32] hover:bg-[#B84A22] text-white text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-xs"
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
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C85A32] block">
                Paso 2 de 4
              </span>
              <h3 className="text-xl font-black font-sans text-stone-900 mt-1">
                Escenario y Atmósfera
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Selecciona uno de los {environmentsList.length} entornos curados para colocar tu producto con iluminación comercial integrada.
              </p>
            </div>

            {/* Filtros por Categoría */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'todos', label: `Todos (${environmentsList.length})` },
                { id: 'personas', label: 'Personas y Manos (3)' },
                { id: 'ingredientes-spa', label: 'Ingredientes y Spa (3)' },
                { id: 'estudio', label: 'Estudio y Lujo (3)' },
                { id: 'hogar', label: 'Hogar Contemporáneo (3)' },
                { id: 'ciudad-naturaleza', label: 'Ciudad y Naturaleza (5)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setEnvCategoryFilter(cat.id as EnvCategory)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    envCategoryFilter === cat.id
                      ? 'bg-[#C85A32] text-white shadow-xs font-semibold'
                      : 'bg-[#EFECE6] text-stone-700 hover:text-stone-900 hover:bg-[#E7E5DF]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Rejilla de Entornos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredEnvironments.map((env) => {
                const isSelected = environmentId === env.id;
                return (
                  <div
                    key={env.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setEnvironmentId(env.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setEnvironmentId(env.id);
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 group ${
                      isSelected
                        ? 'border-[#C85A32] bg-[#FDFBF9] ring-2 ring-[#C85A32]/20 shadow-xs'
                        : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold truncate ${
                        isSelected ? 'bg-[#C85A32]/15 text-[#C85A32]' : 'bg-[#EFECE6] text-stone-700'
                      }`}>
                        {env.badge}
                      </span>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {env.sampleImage && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPreviewModalItem({
                                type: 'environment',
                                id: env.id,
                                label: env.label,
                                badge: env.badge,
                                shortDesc: env.shortDesc,
                                sampleImage: env.sampleImage,
                                surfaceEs: env.surfaceEs,
                                lightingEs: env.lightingEs,
                              });
                            }}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-700 hover:text-[#C85A32] border border-[#E7E5DF] transition-all cursor-pointer shadow-xs text-[11px] font-semibold"
                            title={`Ver foto de ejemplo del escenario: ${env.label}`}
                            aria-label={`Ver foto de ejemplo del escenario ${env.label}`}
                          >
                            <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
                            <span>Ejemplo</span>
                          </button>
                        )}
                        {isSelected && <Check className="w-4 h-4 text-[#C85A32] shrink-0 stroke-[2.5]" />}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-stone-900 leading-snug">
                        {env.label}
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                        {env.shortDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Panel de Personalización de Ingredientes en Escena (Solo visible en Deconstrucción) */}
            {environmentId === 'ingredientes-deconstruccion' && (
              <div className="bg-[#FDFBF9] border border-[#C85A32]/30 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7E5DF] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/25 text-[#C85A32]">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C85A32] block">
                        Personalización de Escena
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 leading-tight">
                        Ingredientes a Deconstruir alrededor del Envase
                      </h4>
                    </div>
                  </div>

                  {rawIngredientsInput && (
                    <button
                      type="button"
                      onClick={() => setRawIngredientsInput('')}
                      className="text-xs text-stone-500 hover:text-[#C85A32] transition-colors cursor-pointer self-start sm:self-center font-medium"
                    >
                      Restablecer a sugerencia base
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                    Escribe tus ingredientes activos (separados por coma):
                  </label>
                  <input
                    type="text"
                    value={rawIngredientsInput}
                    onChange={(e) => setRawIngredientsInput(e.target.value)}
                    placeholder="Ej: Rodajas de naranja fresca, raíz de jengibre en corte, hojas de menta con rocío, semillas de chía..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DF] bg-[#F7F5F0] text-stone-800 placeholder:text-stone-400 text-sm font-medium focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] transition-colors"
                  />
                  {isRawIngredientsEmpty ? (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 text-xs flex items-start gap-2.5 mt-2">
                      <AlertCircle className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-stone-900">Paso Bloqueado · Ingredientes Obligatorios:</span> No has rellenado ningún ingrediente específico. Para poder avanzar al Paso 3, <strong>escribe tus ingredientes arriba o añade una sugerencia rápida</strong> con 1 clic (o elige otro escenario).
                      </div>
                    </div>
                  ) : (
                    <p className="text-[11px] text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>Ingredientes configurados: Flow rodeará tu envase con estos elementos en corte fresco.</span>
                    </p>
                  )}
                </div>

                {/* Sugerencias Rápidas de 1 Clic */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-stone-700 block">
                    Añadir con 1 clic:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      'Raíz de Cúrcuma fresca',
                      'Cítricos en rodajas',
                      'Frutos Rojos / Berries',
                      'Hojas de Menta con rocío',
                      'Raíz de Jengibre en corte',
                      'Hojas de Aloe Vera',
                      'Polvo de Matcha verde',
                      'Semillas de Chía',
                      'Flores secas de Caléndula',
                      'Cristales de Sal Marina',
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setRawIngredientsInput((prev) => {
                            const trimmed = prev.trim();
                            if (!trimmed) return item;
                            if (trimmed.toLowerCase().includes(item.toLowerCase())) return prev;
                            return `${trimmed}, ${item}`;
                          });
                        }}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#F7F5F0] hover:bg-[#EFECE6] text-stone-700 hover:text-stone-900 border border-[#E7E5DF] transition-all cursor-pointer shadow-2xs active:scale-[0.98]"
                      >
                        + {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Previsualización de Superficie y Luz del Entorno Activo */}
            <div className="bg-[#F7F5F0] border border-[#E7E5DF] rounded-xl p-4 space-y-1.5 text-xs">
              <div className="font-bold text-stone-900 flex items-center justify-between gap-1.5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Escenario Seleccionado: {activeEnvironment.label}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-stone-700 font-semibold">
                  {activeEnvironment.badge}
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                <strong>Superficie / Sujeción:</strong> {effectiveSurfaceEs}
              </p>
              <p className="text-stone-700 leading-relaxed">
                <strong>Iluminación:</strong> {activeEnvironment.lightingEs}
              </p>
              {isPersonScene && (
                <div className="pt-2 mt-1 border-t border-[#E7E5DF] flex items-center gap-2 text-[#C85A32] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Directiva Anti-Artefacto: Sujeción baja obligatoria con 100% de etiqueta y logotipo despejados.</span>
                </div>
              )}
            </div>

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleNavigateStep(1)}
                className="py-2.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#E7E5DF]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                {isStep2Blocked && (
                  <span className="text-xs font-semibold text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/25 px-3 py-1.5 rounded-xl text-center flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#C85A32]" />
                    Añade al menos un ingrediente para avanzar
                  </span>
                )}
                <button
                  type="button"
                  disabled={isStep2Blocked}
                  onClick={() => {
                    if (!isStep2Blocked) handleNavigateStep(3);
                  }}
                  className={`py-2.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    isStep2Blocked
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed opacity-75 shadow-none'
                      : 'bg-[#C85A32] hover:bg-[#B84A22] text-white cursor-pointer shadow-xs active:scale-[0.99]'
                  }`}
                  title={isStep2Blocked ? 'Añade al menos un ingrediente para desbloquear' : undefined}
                >
                  <span>Continuar al Paso 3: Estilo y Textos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PASO 3: ESTILO FOTOGRÁFICO Y TEXTOS */}
        {activeStep === 3 && (
          <div className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            <div className="border-b border-[#E7E5DF] pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C85A32] block">
                Paso 3 de 4
              </span>
              <h3 className="text-xl font-black font-sans text-stone-900 mt-1">
                Estilo Fotográfico y Textos
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Selecciona el encuadre de cámara y el estilo publicitario para los textos y beneficios.
              </p>
            </div>

            {/* Selector de 8 Ángulos y Encuadres de Cámara */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  1. Ángulo y Encuadre de Cámara (8 Opciones Comerciales):
                </label>
                <span className="text-xs text-stone-500 font-medium">
                  {activeShot.label.split('(')[0].trim()} activo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {curatedShots.map((shot) => {
                  const isSelected = shotId === shot.id;
                  return (
                    <div
                      key={shot.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelectShot(shot.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleSelectShot(shot.id);
                        }
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 group ${
                        isSelected
                          ? 'border-[#C85A32] bg-[#FDFBF9] ring-2 ring-[#C85A32]/20 shadow-xs'
                          : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1.5">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold truncate ${
                          isSelected ? 'bg-[#C85A32]/15 text-[#C85A32]' : 'bg-[#EFECE6] text-stone-700'
                        }`}>
                          {shot.badge}
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {shot.sampleImage && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewModalItem({
                                  type: 'angle',
                                  id: shot.id,
                                  label: shot.label,
                                  badge: shot.badge,
                                  shortDesc: shot.shortDesc,
                                  sampleImage: shot.sampleImage,
                                  promptEs: shot.promptEs,
                                });
                              }}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-700 hover:text-[#C85A32] border border-[#E7E5DF] transition-all cursor-pointer shadow-xs text-[11px] font-semibold"
                              title={`Ver foto de ejemplo del ángulo: ${shot.label}`}
                              aria-label={`Ver foto de ejemplo del ángulo ${shot.label}`}
                            >
                              <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
                              <span>Ejemplo</span>
                            </button>
                          )}
                          {isSelected && <Check className="w-4 h-4 text-[#C85A32] shrink-0 stroke-[2.5]" />}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-bold text-stone-900 leading-snug">
                          {shot.label}
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {shot.shortDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selector de 5 Opciones de Infografía */}
            <div className="space-y-2.5 pt-2 border-t border-[#E7E5DF]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  2. Diseño Tipográfico / Infográfico:
                </label>
                <div className="flex items-center gap-2">
                  {infographicStyle !== 'none' && filledBenefitsCount === 0 && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C85A32] bg-[#C85A32]/10 px-2 py-0.5 rounded-md border border-[#C85A32]/30">
                      <AlertCircle className="w-3 h-3 text-[#C85A32]" />
                      <span>Bloqueado: Rellena al menos 1 beneficio</span>
                    </span>
                  )}
                  <span className="text-xs text-stone-500 font-medium">
                    {infographicStyle === 'none' ? 'Foto limpia activa' : 'Diseño con textos activo'}
                  </span>
                </div>
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
                          ? 'border-[#C85A32] bg-[#FDFBF9] ring-2 ring-[#C85A32]/20 shadow-xs'
                          : 'bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold truncate ${
                          isSelected ? 'bg-[#C85A32]/15 text-[#C85A32]' : 'bg-[#EFECE6] text-stone-700'
                        }`}>
                          {styleOpt.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#C85A32] shrink-0 stroke-[2.5]" />}
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
                    <Tag className="w-4 h-4 text-[#C85A32]" />
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Beneficios y Claims del Producto ({filledBenefitsCount} de {benefits.length} completados):
                    </span>
                  </div>

                  {benefits.length < 8 && (
                    <button
                      type="button"
                      onClick={handleAddBenefit}
                      className="px-2.5 py-1 rounded-lg bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-xs font-semibold flex items-center gap-1 border border-[#E7E5DF] transition-all cursor-pointer"
                    >
                      <Plus className="w-3 h-3 text-[#C85A32]" />
                      <span>Añadir Beneficio</span>
                    </button>
                  )}
                </div>

                {/* Aviso si no hay ningún beneficio rellenado */}
                {filledBenefitsCount === 0 && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-stone-900">Paso Bloqueado · Beneficios Obligatorios:</span> Has seleccionado un diseño con textos (<strong>{activeInfographic.label}</strong>), pero no has rellenado ningún beneficio todavía. Para poder avanzar al Paso 4, <strong>escribe al menos un beneficio o haz clic en una sugerencia</strong> con 1 clic (o selecciona "Foto Limpia de Catálogo").
                    </div>
                  </div>
                )}

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
                        className="w-full pl-3 pr-8 py-2 rounded-xl border border-[#E7E5DF] bg-[#FDFCF9] text-stone-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32]"
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
            <div className="pt-4 border-t border-[#E7E5DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleNavigateStep(2)}
                className="py-2.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#E7E5DF]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                {isStep3Blocked && (
                  <span className="text-xs font-semibold text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/25 px-3 py-1.5 rounded-xl text-center flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#C85A32]" />
                    Rellena al menos un beneficio para avanzar
                  </span>
                )}
                <button
                  type="button"
                  disabled={isStep3Blocked}
                  onClick={() => {
                    if (!isStep3Blocked) handleNavigateStep(4);
                  }}
                  className={`py-2.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    isStep3Blocked
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed opacity-75 shadow-none'
                      : 'bg-[#C85A32] hover:bg-[#B84A22] text-white cursor-pointer shadow-xs active:scale-[0.99]'
                  }`}
                  title={isStep3Blocked ? 'Rellena al menos un beneficio para desbloquear' : undefined}
                >
                  <span>Continuar a Resumen y Prompt</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PASO 4: MESA DE ENTREGA Y PROMPT FINAL */}
        {activeStep === 4 && (
          <div className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            <div className="border-b border-[#E7E5DF] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C85A32] block">
                  Paso 4 de 4 · Mesa de Entrega
                </span>
                <h3 className="text-xl font-black font-sans text-stone-900 mt-1">
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
                      ? 'bg-[#C85A32] text-white shadow-xs'
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
                      ? 'bg-[#C85A32] text-white shadow-xs'
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
                  {hasCustomRawIngredients ? ` (${rawIngredientsInput.slice(0, 24)}...)` : ''}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  📷 {activeShot.label.split('(')[0].trim()}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  ✨ {infographicStyle === 'none' ? 'Foto Limpia' : activeInfographic.label}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#EFECE6] text-stone-800 font-medium border border-[#E7E5DF]">
                  📎 Réplica 1:1 de Foto Real
                </span>
              </div>
            </div>

            {/* Avisos en Caso de Opciones sin Rellenar */}
            {isRawIngredientsEmpty && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-bold text-stone-900">
                    Aviso: Escenario de Deconstrucción sin Ingredientes Personalizados
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    No especificaste ningún ingrediente activo en el Paso 2; el prompt se generará con la mezcla botánica genérica por defecto (cúrcuma, cítricos y ramas frescas). Si deseas ingredientes propios de tu fórmula, vuelve al Paso 2 y rellena al menos uno.
                  </p>
                </div>
              </div>
            )}

            {infographicStyle !== 'none' && filledBenefitsCount === 0 && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-950 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-bold text-stone-900">
                    Aviso: Estilo "{activeInfographic.label}" sin Beneficios Rellenados
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Seleccionaste un diseño con etiquetas o textos publicitarios, pero no rellenaste ningún beneficio en el Paso 3. Para no generar etiquetas vacías en Flow, el prompt se está compilando como foto limpia. Vuelve al Paso 3 y añade al menos un beneficio.
                  </p>
                </div>
              </div>
            )}

            {/* Selector de Modo de Entrega: Foto Maestra 8K vs Video Storyboard */}
            <div className="bg-[#EFECE6] p-1.5 rounded-2xl flex flex-col sm:flex-row border border-[#E7E5DF] gap-1">
              <button
                type="button"
                onClick={() => setDeliveryMode('photo')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  deliveryMode === 'photo'
                    ? 'bg-[#FDFCF9] text-stone-900 shadow-xs border border-[#E7E5DF]'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Camera className="w-4 h-4 text-[#C85A32]" />
                <span>1. Foto Maestra 8K (Master Keyframe)</span>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMode('video')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  deliveryMode === 'video'
                    ? 'bg-[#FDFCF9] text-stone-900 shadow-xs border border-[#E7E5DF]'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Film className="w-4 h-4 text-[#C85A32]" />
                <span>2. Storyboard de Video (15s · 4 Escenas)</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#C85A32]/10 text-[#C85A32] font-semibold border border-[#C85A32]/25">
                  Flow Video
                </span>
              </button>
            </div>

            {/* MODO FOTO: PROMPT MAESTRO DE CATÁLOGO */}
            {deliveryMode === 'photo' && (
              <div className="space-y-4">
                {/* Banner de Explicación del Pipeline */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-950 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C85A32] mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong>Fase 1 del Pipeline de Video:</strong> En Google Flow, genera primero esta <strong>Foto Maestra</strong> adjuntando tu foto real con el clip (📎). Una vez obtenida la imagen 8K perfecta de tu producto, pasa a la pestaña <strong>"2. Storyboard de Video"</strong> para animarla escena por escena sin deformaciones.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Prompt de Foto Maestra (Keyframe para Flow):
                    </span>
                    <span className="text-xs text-stone-500 font-mono">Formato {aspectRatio}</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-[#FDFCF9] border border-[#E7E5DF] font-mono text-xs sm:text-sm text-stone-800 leading-relaxed select-all max-h-[280px] overflow-y-auto shadow-inner whitespace-pre-wrap">
                    {outputLang === 'es' ? mainPromptEs : mainPromptEn}
                  </div>
                </div>

                {useReferencePhotoMode && (
                  <div className="p-3 rounded-xl bg-[#FDFBF9] border border-[#C85A32]/30 text-xs text-stone-800 flex items-center gap-2.5">
                    <Upload className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>
                      <strong>Recordatorio en Flow:</strong> Al pegar este prompt, haz clic en el icono <strong>📎</strong> y sube la foto de tu envase real para anclar la marca con 100% de exactitud.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-copy')}
                    className="sm:col-span-8 py-3.5 px-5 rounded-xl bg-[#C85A32] hover:bg-[#B84A22] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.99]"
                  >
                    {copiedKey === 'main-copy' ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>¡Prompt Copiado! Pégalo en Flow</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Prompt de Foto Maestra</span>
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
                    title="Copia el prompt y abre Google Flow"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>Abrir Flow ↗</span>
                  </button>
                </div>
              </div>
            )}

            {/* MODO VIDEO: STORYBOARD COMERCIAL EN 4 ESCENAS PARA FLOW */}
            {deliveryMode === 'video' && (
              <div className="space-y-5">
                {/* Banner de Guía del Pipeline de Video */}
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E7E5DF] space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <Clapperboard className="w-4 h-4 text-[#C85A32]" />
                    <span>Pipeline Image-to-Video en Google Flow (Anuncio de 15 Segundos)</span>
                  </div>
                  <p className="leading-relaxed">
                    Sube la <strong>Foto Maestra generada en la Fase 1</strong> a la sección de video de Flow como <strong>Fotograma Inicial (Start Frame)</strong>. Luego, genera cada una de estas 4 escenas pegando su prompt de cámara y locución.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 items-center justify-between">
                    <button
                      type="button"
                      onClick={() => copyText(fullStoryboardText, 'full-storyboard')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#C85A32] hover:bg-[#B84A22] text-white transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      {copiedKey === 'full-storyboard' ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>¡Storyboard Completo Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Guion Completo (4 Escenas)</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => window.open('https://flow.google', '_blank')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 border border-[#E7E5DF] transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Ir a Google Flow ↗</span>
                    </button>
                  </div>
                </div>

                {/* Lista de las 4 Tarjetas de Escena */}
                <div className="space-y-4">
                  {videoScenes.map((scene) => (
                    <div
                      key={scene.sceneNum}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FDFCF9] border border-[#E7E5DF] space-y-3.5 shadow-2xs hover:border-stone-400 transition-all"
                    >
                      {/* Cabecera de la Escena */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7E5DF] pb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="w-6 h-6 rounded-lg bg-[#C85A32] text-white flex items-center justify-center text-xs font-black">
                            {scene.sceneNum}
                          </span>
                          <span className="font-black text-sm text-stone-900">
                            {scene.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-stone-700 font-semibold">
                            ⏱ {scene.timeRange}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C85A32]/10 text-[#C85A32] font-semibold border border-[#C85A32]/25">
                            📹 {scene.cameraMovement}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => copyText(outputLang === 'es' ? scene.promptEs : scene.promptEn, `scene-${scene.sceneNum}`)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 border border-[#E7E5DF] transition-all cursor-pointer self-start sm:self-auto"
                        >
                          {copiedKey === `scene-${scene.sceneNum}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                              <span className="text-emerald-700">¡Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#C85A32]" />
                              <span>Copiar Prompt Escena</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Prompt para el generador de video */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-bold text-stone-700">
                          <span className="flex items-center gap-1">
                            <Play className="w-3 h-3 text-[#C85A32] fill-current" />
                            Prompt de Movimiento para Flow Video:
                          </span>
                          <span className="text-stone-400 font-mono text-[10px]">Start Frame Image-to-Video</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#E7E5DF] font-mono text-xs text-stone-800 leading-relaxed select-all">
                          {outputLang === 'es' ? scene.promptEs : scene.promptEn}
                        </div>
                      </div>

                      {/* Guion de Locución y SFX */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs pt-1">
                        <div className="sm:col-span-8 p-3 rounded-xl bg-[#FDFBF9] border border-[#E7E5DF] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-stone-800 flex items-center gap-1.5 text-[11px]">
                              <Volume2 className="w-3.5 h-3.5 text-[#C85A32]" />
                              Guion de Voz en Off (Voiceover):
                            </span>
                            <button
                              type="button"
                              onClick={() => copyText(outputLang === 'es' ? scene.voiceScriptEs : scene.voiceScriptEn, `voice-${scene.sceneNum}`)}
                              className="text-[10px] text-[#C85A32] hover:underline font-semibold cursor-pointer"
                            >
                              {copiedKey === `voice-${scene.sceneNum}` ? '✓ Copiado' : 'Copiar voz'}
                            </button>
                          </div>
                          <p className="italic text-stone-800 font-medium">
                            "{outputLang === 'es' ? scene.voiceScriptEs : scene.voiceScriptEn}"
                          </p>
                        </div>

                        <div className="sm:col-span-4 p-3 rounded-xl bg-[#F7F5F0] border border-[#E7E5DF] space-y-1">
                          <span className="font-bold text-stone-700 block text-[11px]">
                            🎵 Audio & SFX:
                          </span>
                          <p className="text-stone-600 text-[11px] leading-relaxed">
                            {outputLang === 'es' ? scene.soundDesignEs : scene.soundDesignEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enlace para Modificar Selecciones */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => handleNavigateStep(1)}
                className="text-xs text-[#C85A32] hover:underline cursor-pointer font-medium"
              >
                ← Modificar Selección (Volver al Paso 1)
              </button>
            </div>

            {/* Barra de Navegación Inferior */}
            <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleNavigateStep(3)}
                className="py-2.5 px-4 rounded-xl bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-800 text-sm font-medium flex items-center gap-2 cursor-pointer transition-all border border-[#E7E5DF]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás al Paso 3</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal de Ejemplo Visual Unificado (Ángulos y Escenarios) */}
        {previewModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setPreviewModalItem(null)}
          >
            <div
              className="bg-[#FDFCF9] border border-[#E7E5DF] rounded-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Encabezado fijo */}
              <div className="px-5 py-3.5 border-b border-[#E7E5DF] flex items-center justify-between bg-[#F7F5F0] shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/25 text-[#C85A32]">
                    <Eye className="w-4 h-4 stroke-[2.2]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C85A32] block">
                      {previewModalItem.type === 'angle' ? 'Ejemplo de Ángulo / Encuadre' : 'Ejemplo de Escenario'} · {previewModalItem.badge}
                    </span>
                    <h4 className="text-base font-black font-sans text-stone-900 leading-tight">
                      {previewModalItem.label}
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewModalItem(null)}
                  className="p-1.5 rounded-xl hover:bg-[#EFECE6] text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  title="Cerrar vista previa"
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Contenido scrolleable */}
              <div className="overflow-y-auto flex-1">
                {/* Imagen de Ejemplo */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden flex items-center justify-center border-b border-[#E7E5DF]">
                  {previewModalItem.sampleImage ? (
                    <img
                      src={previewModalItem.sampleImage}
                      alt={`Ejemplo visual de ${previewModalItem.label}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  ) : (
                    <div className="text-xs text-stone-500">Sin imagen de ejemplo</div>
                  )}
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-medium shadow-xs">
                    {previewModalItem.type === 'angle' ? 'Foto de Demostración de Perspectiva' : 'Foto de Demostración de Escenario'}
                  </div>
                </div>

                {/* Detalles y Directivas */}
                <div className="p-5 space-y-3 bg-[#FDFCF9]">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {previewModalItem.shortDesc}
                  </p>

                  {previewModalItem.type === 'angle' && previewModalItem.promptEs && (
                    <p className="text-[11px] font-mono text-stone-600 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#E7E5DF]">
                      <span className="font-bold text-[#C85A32]">Comando Flow:</span> "{previewModalItem.promptEs}"
                    </p>
                  )}

                  {previewModalItem.type === 'environment' && (
                    <div className="space-y-1.5 text-xs text-stone-700 bg-[#F7F5F0] p-3 rounded-xl border border-[#E7E5DF]">
                      {previewModalItem.surfaceEs && (
                        <p>
                          <strong className="text-stone-900">Superficie:</strong> {previewModalItem.surfaceEs}
                        </p>
                      )}
                      {previewModalItem.lightingEs && (
                        <p>
                          <strong className="text-stone-900">Iluminación:</strong> {previewModalItem.lightingEs}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer con Acciones fijas */}
              <div className="p-4 bg-[#F7F5F0] border-t border-[#E7E5DF] flex items-center justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setPreviewModalItem(null)}
                  className="py-2 px-4 rounded-xl text-xs font-semibold bg-[#EFECE6] hover:bg-[#E7E5DF] text-stone-700 border border-[#E7E5DF] transition-all cursor-pointer"
                >
                  Cerrar
                </button>

                {previewModalItem.type === 'angle' ? (
                  <button
                    type="button"
                    onClick={() => {
                      handleSelectShot(previewModalItem.id);
                      setPreviewModalItem(null);
                    }}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      shotId === previewModalItem.id
                        ? 'bg-[#EFECE6] text-stone-800 border border-[#E7E5DF]'
                        : 'bg-[#C85A32] hover:bg-[#B84A22] text-white'
                    }`}
                  >
                    {shotId === previewModalItem.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Ángulo ya Seleccionado</span>
                      </>
                    ) : (
                      <>
                        <span>Seleccionar este Ángulo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setEnvironmentId(previewModalItem.id);
                      setPreviewModalItem(null);
                    }}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      environmentId === previewModalItem.id
                        ? 'bg-[#EFECE6] text-stone-800 border border-[#E7E5DF]'
                        : 'bg-[#C85A32] hover:bg-[#B84A22] text-white'
                    }`}
                  >
                    {environmentId === previewModalItem.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Escenario ya Seleccionado</span>
                      </>
                    ) : (
                      <>
                        <span>Seleccionar este Escenario</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
