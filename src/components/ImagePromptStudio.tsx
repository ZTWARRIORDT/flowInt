import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Camera,
  Sparkles,
  Copy,
  Check,
  Package,
  RotateCcw,
  Aperture,
  Eye,
  Upload,
  Pipette,
  SprayCan,
  Pill,
  ShoppingBag,
  Droplet,
  Box,
  Database,
  X,
  Wand2,
  Search,
  ShieldCheck,
  Info,
  Tag,
} from 'lucide-react';
import {
  PHOTO_TYPES,
  CAMERA_SHOTS,
  CAMERA_LENSES,
  PACKAGING_OPTIONS,
  PACKAGING_PRESENTATIONS,
  PackagingPresentationMode,
  ASPECT_RATIOS,
  STUDIO_QUICK_PRESETS,
  StudioOptionItem,
  PhotoTypeOption,
  ProductQuickPreset,
  SUPPLEMENT_KNOWLEDGE_BASE,
  SupplementKnowledgeItem,
  InfographicStyle,
  INFOGRAPHIC_STYLES,
  getCompatiblePresentations,
  COMMERCIAL_ENVIRONMENTS,
  CommercialEnvironmentOption,
} from '../data/imageStudioData';
import { LensVisualModal } from './LensVisualModal';
import {
  fetchCustomItemsFromSupabase,
  checkSupabaseStatus,
} from '../lib/supabase';

interface Props {
  isDark: boolean;
  externalPresetPayload?: { id: string; key: number } | null;
}

export const ImagePromptStudio: React.FC<Props> = ({ isDark, externalPresetPayload }) => {
  // Product Identity State
  const [productName, setProductName] = useState(STUDIO_QUICK_PRESETS[0].productName);
  const [headline, setHeadline] = useState(STUDIO_QUICK_PRESETS[0].headline);
  const [benefit1, setBenefit1] = useState(STUDIO_QUICK_PRESETS[0].benefit1);
  const [benefit2, setBenefit2] = useState(STUDIO_QUICK_PRESETS[0].benefit2);
  const [benefit3, setBenefit3] = useState(STUDIO_QUICK_PRESETS[0].benefit3);
  const [benefit4, setBenefit4] = useState(STUDIO_QUICK_PRESETS[0].benefit4);

  // Photography Configuration State
  const [photoTypeId, setPhotoTypeId] = useState<string>(STUDIO_QUICK_PRESETS[0].photoTypeId);
  const [shotId, setShotId] = useState<string>(STUDIO_QUICK_PRESETS[0].shotId);
  const [lensId, setLensId] = useState<string>(STUDIO_QUICK_PRESETS[0].lensId);
  const [packagingId, setPackagingId] = useState<string>(STUDIO_QUICK_PRESETS[0].packagingId);
  const [packagingPresentation, setPackagingPresentation] = useState<PackagingPresentationMode>(
    STUDIO_QUICK_PRESETS[0].packagingPresentation || 'con-contenido'
  );
  const [environmentId, setEnvironmentId] = useState<string>('estudio-neutro');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '9:16' | '4:5' | '16:9'>(
    STUDIO_QUICK_PRESETS[0].aspectRatio
  );

  // Infographics, Reference & Extra Modifiers
  const [infographicStyle, setInfographicStyle] = useState<InfographicStyle>('pill-badges');
  const [useReferencePhotoMode, setUseReferencePhotoMode] = useState<boolean>(true);
  const [extraCustomNotes, setExtraCustomNotes] = useState<string>('');

  // UI State for Output, Modal & Preview
  const [isLensModalOpen, setIsLensModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'lenses' | 'packagings'>('lenses');
  const [showMorePackagings, setShowMorePackagings] = useState<boolean>(false);
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [outputTab, setOutputTab] = useState<'single' | 'session6'>('single');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Supabase live status & sync feedback
  const [supabaseStatus, setSupabaseStatus] = useState<
    'checking' | 'connected' | 'table_missing' | 'error'
  >('checking');
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  // Assistant for Supplements / Knowledge Auto-fill
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [assistantSearch, setAssistantSearch] = useState<string>('');

  // Check Supabase status on mount
  useEffect(() => {
    checkSupabaseStatus().then((status) => {
      setSupabaseStatus(status);
    });
  }, []);

  const handleResetCleanScene = () => {
    setPackagingPresentation('solo');
    setInfographicStyle('none');
    setEnvironmentId('estudio-neutro');
    setPhotoTypeId('hero-estudio');
    setShotId('contrapicado-heroico');
    setLensId('85mm-f18');
    setSyncFeedback('✓ Escena limpia: sin medallones, envase protagónico y fondo de estudio neutro');
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  const handleSelectPackaging = (newPkgId: string) => {
    setPackagingId(newPkgId);
    const compatible = getCompatiblePresentations(newPkgId);
    if (!compatible.includes(packagingPresentation)) {
      setPackagingPresentation('solo');
    }
  };

  const handleTogglePresentation = (presId: PackagingPresentationMode) => {
    if (packagingPresentation === presId) {
      setPackagingPresentation('solo'); // Deselect back to solo
    } else {
      setPackagingPresentation(presId);
    }
  };

  const handleToggleInfographicStyle = (style: InfographicStyle) => {
    if (infographicStyle === style) {
      setInfographicStyle('none'); // Deselect back to clean catalog
    } else {
      setInfographicStyle(style);
    }
  };

  const handleToggleEnvironment = (envId: string) => {
    if (environmentId === envId && envId !== 'estudio-neutro') {
      setEnvironmentId('estudio-neutro'); // Toggle back to clean neutral
    } else {
      setEnvironmentId(envId);
    }
  };

  const applyPreset = (preset: ProductQuickPreset) => {
    setProductName(preset.productName);
    setHeadline(preset.headline);
    setBenefit1(preset.benefit1);
    setBenefit2(preset.benefit2);
    setBenefit3(preset.benefit3);
    setBenefit4(preset.benefit4);
    setPhotoTypeId(preset.photoTypeId);
    setShotId(preset.shotId);
    setLensId(preset.lensId);
    setPackagingId(preset.packagingId);
    setPackagingPresentation(preset.packagingPresentation || 'solo');
    if (preset.environmentId) {
      setEnvironmentId(preset.environmentId);
    } else if (preset.surfaceId === 'travertino-spa') {
      setEnvironmentId('pedestal-spa');
    } else if (preset.surfaceId === 'piedra-rio-agua') {
      setEnvironmentId('agua-zen');
    } else if (preset.surfaceId === 'pizarra-negra') {
      setEnvironmentId('dark-luxury');
    } else if (preset.surfaceId === 'madera-bosque') {
      setEnvironmentId('naturaleza-bosque');
    } else {
      setEnvironmentId('estudio-neutro');
    }
    if (preset.infographicStyle) {
      setInfographicStyle(preset.infographicStyle);
    } else if (
      preset.photoTypeId === 'hero-estudio' ||
      preset.photoTypeId === 'macro-textura' ||
      preset.photoTypeId === 'flat-lay-cenital'
    ) {
      setInfographicStyle('none');
    } else {
      setInfographicStyle('gold-3d');
    }
    setAspectRatio(preset.aspectRatio);
    setUseReferencePhotoMode(true);
    setSyncFeedback(`✓ Preset fiel cargado: "${preset.productName}"`);
    setTimeout(() => setSyncFeedback(null), 3500);
  };

  // Sync when external preset is clicked from Catalog or Hero
  useEffect(() => {
    if (externalPresetPayload) {
      const found = STUDIO_QUICK_PRESETS.find((p) => p.id === externalPresetPayload.id);
      if (found) {
        applyPreset(found);
      }
    }
  }, [externalPresetPayload]);

  const handleSelectPhotoType = (pt: PhotoTypeOption) => {
    setPhotoTypeId(pt.id);
    if (pt.recommendedShotId) setShotId(pt.recommendedShotId);
    if (pt.recommendedLensId) setLensId(pt.recommendedLensId);
    if (!pt.includeMedallionsByDefault) {
      setInfographicStyle('none');
    } else if (infographicStyle === 'none') {
      setInfographicStyle('pill-badges');
    }
  };

  const handleSelectLens = (id: string) => {
    setLensId(id);
    if (id === '100mm-macro') {
      setShotId('macro-extremo');
      setPhotoTypeId('macro-textura');
    } else if (id === '90mm-highspeed') {
      setShotId('contrapicado-heroico');
      setPhotoTypeId('splash-velocidad');
    } else if (id === '35mm-f2') {
      setShotId('rasante-mesa');
    } else if (id === '85mm-f18') {
      if (shotId === 'macro-extremo') setShotId('eye-level');
      if (photoTypeId === 'macro-textura') setPhotoTypeId('hero-estudio');
    } else if (id === '50mm-f14') {
      if (shotId === 'macro-extremo') setShotId('picado-45');
      if (photoTypeId === 'macro-textura') setPhotoTypeId('flat-lay-cenital');
    }
  };

  const handleApplyKnowledgeItem = (item: SupplementKnowledgeItem) => {
    setProductName(item.name);
    setHeadline(item.headline);
    setBenefit1(item.benefit1);
    setBenefit2(item.benefit2);
    setBenefit3(item.benefit3);
    setBenefit4(item.benefit4);
    if (item.recommendedPackagingId) setPackagingId(item.recommendedPackagingId);
    if (item.recommendedPresentation) setPackagingPresentation(item.recommendedPresentation);
    setIsAssistantOpen(false);
    setSyncFeedback(`✓ Autocompletado: "${item.name}"`);
    setTimeout(() => setSyncFeedback(null), 3500);
  };

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const getPackagingIcon = (id: string) => {
    if (id.includes('spray') || id.includes('atomizador')) {
      return <SprayCan className="w-4 h-4 text-sky-400" />;
    }
    if (id.includes('gotero') || id.includes('pipeta')) {
      return <Pipette className="w-4 h-4 text-emerald-400" />;
    }
    if (id.includes('suplementero') || id.includes('capsula') || id.includes('pill')) {
      return <Pill className="w-4 h-4 text-amber-400" />;
    }
    if (id.includes('doypack') || id.includes('pouch') || id.includes('bolsa')) {
      return <ShoppingBag className="w-4 h-4 text-rose-400" />;
    }
    if (id.includes('jarabe') || id.includes('botella') || id.includes('elixir')) {
      return <Droplet className="w-4 h-4 text-cyan-400" />;
    }
    return <Package className="w-4 h-4 text-amber-300" />;
  };

  // Resolve active items
  const activePhotoType =
    PHOTO_TYPES.find((x) => x.id === photoTypeId) ||
    (photoTypeId === 'poster-infografico-flow' || photoTypeId === 'poster-medallones'
      ? PHOTO_TYPES[0]
      : PHOTO_TYPES[0]);
  const activeShot = CAMERA_SHOTS.find((x) => x.id === shotId) || CAMERA_SHOTS[0];
  const activeLens = CAMERA_LENSES.find((x) => x.id === lensId) || CAMERA_LENSES[0];
  const activePackaging = PACKAGING_OPTIONS.find((x) => x.id === packagingId) || PACKAGING_OPTIONS[0];
  const activePackagingPresentation =
    PACKAGING_PRESENTATIONS.find((x) => x.id === packagingPresentation) || PACKAGING_PRESENTATIONS[0];
  const activeEnvironment =
    COMMERCIAL_ENVIRONMENTS.find((x) => x.id === environmentId) || COMMERCIAL_ENVIRONMENTS[0];
  const activeRatio = ASPECT_RATIOS.find((x) => x.id === aspectRatio) || ASPECT_RATIOS[0];

  const presentationEs = activePackagingPresentation.promptEs ? `, ${activePackagingPresentation.promptEs}` : '';
  const presentationEn = activePackagingPresentation.promptEn ? `, ${activePackagingPresentation.promptEn}` : '';

  // Infographic & Claims Design Fragment
  const getInfographicFragmentEs = (style: InfographicStyle) => {
    const b1 = benefit1?.trim() || 'Salud y Vitalidad';
    const b2 = benefit2?.trim() || 'Fórmula 100% Pura';
    const b3 = benefit3?.trim() || 'Protección Diaria';
    const b4 = benefit4?.trim() || 'Bienestar Integral';

    switch (style) {
      case 'none':
        return 'Composición 100% limpia de catálogo comercial sin medallones, sin textos flotantes ni tarjetas externas, dejando el protagonismo visual absoluto y puro en el envase.';

      case 'pill-badges':
        return `Flotando de forma armónica y simétrica a los costados del envase hay 4 etiquetas alargadas tipo "pill badge" minimalistas con esquinas redondeadas, fondo blanco translúcido suave y texto tipográfico nítido en relieve con palabras clave legibles: 1) "+ ${b1}", 2) "+ ${b2}", 3) "+ ${b3}", 4) "+ ${b4}". Diseño moderno, limpio y de alta conversión estilo e-commerce internacional.`;

      case 'callout-pins':
        return `Composición infográfica publicitaria clínica con finas líneas guía de precisión conectando puntos clave del envase hacia 4 punteros flotantes con tipografía nítida y moderna indicando beneficios verificados: 1) "${b1}", 2) "${b2}", 3) "${b3}", 4) "${b4}". Estilo infográfico científico de alta gama sin saturar la escena.`;

      case 'live-ingredients-labels':
        return `Alrededor del envase se presentan los ingredientes naturales frescos y vivos en alta definición con pequeñas etiquetas tipográficas nítidas en papel mate blanco flotando sutilmente al lado de cada ingrediente activo: "${b1}", "${b2}", "${b3}". Fotografía publicitaria sensorial y orgánica donde la naturaleza viva y la tipografía editorial se integran perfectamente.`;

      case 'metric-cards':
        return `Flotando armónicamente a los lados del envase hay 3 tarjetas publicitarias de vidrio esmerilado (frosted glass) con datos clínicos de alto impacto impresos con tipografía bold ultra nítida: Tarjeta 1: "24/7 EFECTIVIDAD · ${b1}", Tarjeta 2: "100% FÓRMULA PURA · ${b2}", Tarjeta 3: "DOSIS ACTIVA · ${b3}". Formato publicitario de alta respuesta y conversión directa.`;

      case 'editorial-typography':
        return `Diseño publicitario editorial estilo revista de bienestar (wellness editorial layout): en la parte superior e integrada con el aire de la escena destaca una tipografía serif moderna con titulares elegantes y viñetas minimalistas legibles: "· ${b1} · ${b2} · ${b3}". Sin elementos pesados flotando, composición limpia y sofisticada con protagonismo central en el empaque.`;

      case 'crystal-minimal':
        return `Flotando de forma armónica alrededor del envase hay 4 esferas traslúcidas de cristal y borde dorado que contienen ÚNICAMENTE iconos/logos simbólicos minimalistas en 3D representando: 1) ${b1}, 2) ${b2}, 3) ${b3}, 4) ${b4}, prohibido incluir letras pequeñas o textos largos que se deformen.`;

      case 'gold-3d':
      default:
        return `Flotando simétricamente alrededor del envase hay 4 medallones circulares de oro cepillado que contienen ÚNICAMENTE iconos/logos simbólicos grabados en relieve 3D representando: 1) ${b1}, 2) ${b2}, 3) ${b3}, 4) ${b4}, prohibido incluir letras pequeñas o textos largos para evitar deformaciones.`;
    }
  };

  const getInfographicFragmentEn = (style: InfographicStyle) => {
    const b1 = benefit1?.trim() || 'Health & Vitality';
    const b2 = benefit2?.trim() || '100% Pure Formula';
    const b3 = benefit3?.trim() || 'Daily Protection';
    const b4 = benefit4?.trim() || 'Total Wellness';

    switch (style) {
      case 'none':
        return '100% clean commercial catalog composition with no external medallions, floating text, or cards, showcasing only the pure product container and its textures.';

      case 'pill-badges':
        return `Floating harmoniously and symmetrically beside the container are 4 minimalist elongated pill-shaped badges with soft translucent white frosted backgrounds, rounded corners, and crisp embossed typography highlighting key claims: 1) "+ ${b1}", 2) "+ ${b2}", 3) "+ ${b3}", 4) "+ ${b4}". Clean modern DTC supplement aesthetic.`;

      case 'callout-pins':
        return `Clinical advertising infographic composition featuring fine precision guideline pins connecting key container details to 4 floating callout pointers with clean modern typography indicating verified benefits: 1) "${b1}", 2) "${b2}", 3) "${b3}", 4) "${b4}". High-end scientific infographic aesthetic.`;

      case 'live-ingredients-labels':
        return `Fresh live raw natural botanical ingredients are artfully presented around the container in high definition, each paired with a small minimalist white matte label featuring crisp typography: "${b1}", "${b2}", "${b3}". Sensory organic advertising photography blending nature with editorial typography.`;

      case 'metric-cards':
        return `Floating harmoniously beside the container are 3 frosted glass advertising claim cards featuring bold crisp clinical typography: Card 1: "24/7 EFFECTIVENESS · ${b1}", Card 2: "100% PURE FORMULA · ${b2}", Card 3: "CLINICAL DOSE · ${b3}". High-conversion direct response advertising format.`;

      case 'editorial-typography':
        return `Wellness editorial magazine advertising layout: integrated into the upper breathing space is sophisticated modern serif typography with elegant headline subtext and clean minimalist bullet points: "· ${b1} · ${b2} · ${b3}". Clean, sophisticated composition with central focus on the product container.`;

      case 'crystal-minimal':
        return `Floating harmoniously around the container are 4 translucent glass orbs with gold rims featuring ONLY minimalist 3D symbolic icons/logos representing: 1) ${b1}, 2) ${b2}, 3) ${b3}, 4) ${b4}, strictly no small letters or text that could warp.`;

      case 'gold-3d':
      default:
        return `Floating symmetrically around the container are 4 circular brushed gold medallions featuring ONLY 3D engraved symbolic icons/logos representing: 1) ${b1}, 2) ${b2}, 3) ${b3}, 4) ${b4}, strictly no small letters or text so nothing warps.`;
    }
  };

  const extraEs = extraCustomNotes.trim() ? ` Detalle adicional: ${extraCustomNotes.trim()}.` : '';
  const extraEn = extraCustomNotes.trim() ? ` Additional detail: ${extraCustomNotes.trim()}.` : '';

  // Poster Flow headline space directive
  const isPosterFlow =
    photoTypeId === 'poster-infografico' ||
    photoTypeId === 'poster-infografico-flow' ||
    photoTypeId === 'poster-medallones';

  const headlineDirectiveEs =
    isPosterFlow && headline.trim()
      ? ` Composición publicitaria de alta conversión dejando zona superior de aire negativo limpia (negative space) para titular de campaña: "${headline.trim()}".`
      : '';
  const headlineDirectiveEn =
    isPosterFlow && headline.trim()
      ? ` High-converting advertising composition with clean top negative breathing room for campaign headline: "${headline.trim()}".`
      : '';

  const productColorNoticeEs =
    ' [PALETA Y COLOR REAL DEL OBJETO ADJUNTO: Extraer, heredar y replicar con 100% de fidelidad fotográfica la paleta de colores reales, tonalidades, degradados, logotipos, tipografías y acabados de material del objeto presente en la foto adjunta. Queda terminantemente PROHIBIDO recolorear el producto, inventar paletas ajenas o teñirlo de verde esmeralda, dorado o cualquier otro tono que no esté presente en la foto del objeto subido; todos los colores y gráficas del empaque deben clonarse directamente de la imagen adjunta].';

  const productColorNoticeEn =
    ' [AUTHENTIC COLOR INHERITANCE FROM ATTACHED PHOTO: Directly inherit and replicate with 100% chromatic fidelity the exact authentic colors, gradients, logos, typography, and container materials from the object in the attached reference photo. Strictly FORBIDDEN to recolor the container, apply foreign color casts, or tint the product emerald green, gold, or any other hue not present on the uploaded object; all container colors must originate directly from the attached image].';

  // Macro mode detection (prevents contradictory wide instructions like floating medallions or distant tables)
  const isMacroMode =
    lensId === '100mm-macro' || shotId === 'macro-extremo' || photoTypeId === 'macro-textura';

  // 1. Framing & Lens harmony (Zero contradictions)
  let photoStyleEs = `${activePhotoType.promptEs} en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}.`;
  let photoStyleEn = `${activePhotoType.promptEn} in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}.`;

  if (isMacroMode) {
    photoStyleEs = `Fotografía macro sensorial de ultra detalle publicitario (extreme tight macro close-up a escasos centímetros) en ${activeRatio.promptEs} para el producto natural "${productName}": encuadre microscópico cerrado enfocado en primerísimo plano sobre el relieve del logo, la textura táctil del material y las microgotas de rocío fresco condensadas, cortando estéticamente los bordes del envase para llenar por completo la toma con nitidez 8K (sin alejar la cámara ni mostrar el envase entero).`;
    photoStyleEn = `Advertising sensory ultra-detail macro photography (extreme tight macro close-up shot from inches away) in ${activeRatio.promptEn} for the natural product "${productName}": tightly focused microscopic close-up framing on embossed logo relief, container material texture, and fresh micro-droplets, aesthetically cropping container edges to fill the entire frame with 8K clarity (not pulling back to show the full container).`;
  } else if (lensId === '35mm-f2') {
    photoStyleEs = `Fotografía ambiental comercial capturada con lente gran angular 35mm f/2.0 en ${activeRatio.promptEs} para el producto natural "${productName}": encuadre amplio integrando el producto de forma orgánica en el entorno con gran profundidad de campo y atmósfera botánica pura.`;
    photoStyleEn = `Environmental commercial photography captured with a 35mm f/2.0 wide-angle lens in ${activeRatio.promptEn} for the natural product "${productName}": wide environmental framing organically integrating the product into the surrounding atmosphere.`;
  } else if (lensId === '90mm-highspeed') {
    photoStyleEs = `Fotografía publicitaria de alta velocidad (1/4000s freeze-motion) capturada con óptica de estudio 90mm f/4 en ${activeRatio.promptEs} para el producto natural "${productName}": acción dinámica congelando en el aire cada partícula botánica, salpicadura y gota con nitidez absoluta.`;
    photoStyleEn = `High-speed 1/4000s freeze-motion commercial advertising photography captured with a 90mm f/4 studio lens in ${activeRatio.promptEn} for the natural product "${productName}": dynamic mid-air action freezing every botanical particle, splash, and droplet in crystal-clear focus.`;
  } else if (lensId === '85mm-f18') {
    photoStyleEs = `${activePhotoType.promptEs} con lente prime 85mm f/1.8 (bokeh cremoso de estudio) en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}.`;
    photoStyleEn = `${activePhotoType.promptEn} with an 85mm f/1.8 prime lens (creamy studio bokeh) in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEs}.`;
  }

  // 2. Reference Photo Mode vs New Packaging
  let packagingDescriptionEs = `En el centro destaca ${activePackaging.promptEs}${presentationEs}, ${activeEnvironment.surfaceEs}.`;
  let packagingDescriptionEn = `Centered is ${activePackaging.promptEn}${presentationEn}, ${activeEnvironment.surfaceEn}.`;

  if (useReferencePhotoMode) {
    packagingDescriptionEs = `[FOTO DE REFERENCIA ADJUNTA OBLIGATORIA]: Es indispensable e imperativo mantener con 100% de exactitud y fidelidad el producto y envase de la imagen adjunta: misma silueta geométrica, misma tapa o cierre hermético y diseño original de la etiqueta con sus logotipos reales sin rediseñar.${productColorNoticeEs} En la escena destaca este envase original${presentationEs}, ${activeEnvironment.surfaceEs}.`;
    packagingDescriptionEn = `[MANDATORY ATTACHED REFERENCE PHOTO]: It is strictly mandatory to preserve with 100% fidelity the exact product container from the attached image: identical silhouette shape, real cap or airtight seal, and authentic label graphics without redesigning.${productColorNoticeEn} Centered in the scene is this authentic product container${presentationEn}, ${activeEnvironment.surfaceEn}.`;
  }

  // Macro specific descriptions
  const macroPackagingEs = useReferencePhotoMode
    ? `[FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, la toma se concentra al 100% en el detalle microscópico de sus materiales originales, tipografías y logotipo auténtico en relieve.${productColorNoticeEs} Con fondo en suave desenfoque bokeh cremoso con sutiles matices orgánicos de ${activeEnvironment.label}, sin elementos lejanos que alejen la toma.`
    : `La toma se concentra con nitidez microscópica en el detalle de ${activePackaging.label}, su logotipo botánico en relieve y microgotas sobre la superficie. Con fondo en suave desenfoque bokeh cremoso con sutiles matices orgánicos de ${activeEnvironment.label}, sin elementos lejanos que alejen la toma.`;

  const macroPackagingEn = useReferencePhotoMode
    ? `[ATTACHED REFERENCE PHOTO]: Using the attached authentic product as mandatory visual base, the framing focuses 100% on microscopic details of its authentic materials, typography, and embossed authentic logo.${productColorNoticeEn} Smooth creamy bokeh background with subtle organic tones of ${activeEnvironment.label}, strictly no distant wide elements.`
    : `The camera focuses with microscopic sharpness on the texture of ${activePackaging.label}, its embossed botanical logo, and surface micro-droplets. Smooth creamy bokeh background with subtle organic tones of ${activeEnvironment.label}, strictly no distant wide elements.`;

  const macroMedallionsEs =
    'Composición macro limpia sin medallones externos flotantes para garantizar el acercamiento extremo de la cámara; los beneficios se reflejan en el acabado táctil del producto.';
  const macroMedallionsEn =
    'Clean macro composition without external floating medallions to allow extreme camera close-up; product benefits are embodied in its tactile quality.';

  // Main Prompt
  const mainPromptEs = isMacroMode
    ? `${photoStyleEs} ${macroPackagingEs} ${macroMedallionsEs} Con ${activeEnvironment.lightingEs}, capturado con lente macro 100mm f/2.8 con nitidez microscópica en texturas y gotas. Fotografía comercial publicitaria 8k.${extraEs}`
    : `${photoStyleEs} ${packagingDescriptionEs} ${getInfographicFragmentEs(infographicStyle)}${headlineDirectiveEs} Con ${activeEnvironment.lightingEs}, ${activeLens.promptEs}. Fotografía comercial hiperrealista 8k, calidad de estudio publicitario.${extraEs}`;

  const mainPromptEn = isMacroMode
    ? `${photoStyleEn} ${macroPackagingEn} ${macroMedallionsEn} Featuring ${activeEnvironment.lightingEn}, captured with a 100mm f/2.8 macro lens with microscopic sharpness on textures and dew droplets. 8k commercial advertising photography.${extraEn}`
    : `${photoStyleEn} ${packagingDescriptionEn} ${getInfographicFragmentEn(infographicStyle)}${headlineDirectiveEn} Featuring ${activeEnvironment.lightingEn}, ${activeLens.promptEn}. Hyper-realistic 8k commercial product photography, advertising studio quality.${extraEn}`;

  // 6-Shot Complete Photo Session
  const bottleRefEs = useReferencePhotoMode
    ? 'el envase original de la foto de referencia adjunta (extrayendo y replicando directamente sus colores reales, silueta, tapa y diseño original de etiqueta sin recolorear ni alterar)'
    : activePackaging.promptEs;
  const bottleRefEn = useReferencePhotoMode
    ? 'the authentic product container from the attached reference photo (directly extracting and replicating its true-to-life colors, silhouette, cap, and authentic label graphics without recoloring)'
    : activePackaging.promptEn;

  const sessionRefPrefixEs = useReferencePhotoMode
    ? 'Tomando como referencia obligatoria la foto del envase adjunta (heredar fielmente sus colores reales, materiales, diseño y tipografías sin alterar ni recolorear): '
    : '';
  const sessionRefPrefixEn = useReferencePhotoMode
    ? 'Using the attached product photo as mandatory reference (faithfully extract and clone its authentic real colors, design, materials, and typography without alterations): '
    : '';

  const session6Pack = [
    {
      id: 'shot-1-poster',
      badge: 'Foto 1 · Póster de Beneficios',
      title: 'Póster Comercial con Claims / Beneficios',
      shotLabel: 'Eye-Level 0° · 85mm Bokeh',
      promptEs: `${sessionRefPrefixEs}Fotografía comercial publicitaria tipo póster en ${activeRatio.promptEs} de "${productName}", en plano frontal eye-level perfectamente simétrico. En el centro, ${bottleRefEs}${presentationEs}, ${activeEnvironment.promptEs}. ${getInfographicFragmentEs(infographicStyle === 'none' ? 'pill-badges' : infographicStyle)}${headlineDirectiveEs} Lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Commercial advertising poster photography in ${activeRatio.promptEn} of "${productName}", straight-on symmetrical eye-level shot. Centered is ${bottleRefEn}${presentationEn}, ${activeEnvironment.promptEn}. ${getInfographicFragmentEn(infographicStyle === 'none' ? 'pill-badges' : infographicStyle)}${headlineDirectiveEn} 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-2-hero',
      badge: 'Foto 2 · Catálogo Limpio',
      title: 'Hero Shot Imponente (Sin Medallones)',
      shotLabel: 'Contrapicado 15° · 85mm',
      promptEs: `${sessionRefPrefixEs}Fotografía Hero Shot comercial limpia en ${activeRatio.promptEs} de "${productName}", en plano contrapicado heroico a 15 grados que engrandece la presencia del envase. Presenta ${bottleRefEs}${presentationEs}, ${activeEnvironment.promptEs}. Sin ningún texto flotante ni medallones externos. Lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Clean commercial Hero Shot photography in ${activeRatio.promptEn} of "${productName}", shot from a 15-degree low-angle heroic perspective. Featuring ${bottleRefEn}${presentationEn}, ${activeEnvironment.promptEn}. Strictly no floating text or external medallions. 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-3-flatlay',
      badge: 'Foto 3 · Vista Cenital 90°',
      title: 'Flat Lay Cenital Editorial',
      shotLabel: 'Cenital Top-Down · 50mm',
      promptEs: `${sessionRefPrefixEs}Fotografía Flat Lay cenital en ángulo perpendicular de 90 grados desde arriba en ${activeRatio.promptEs} de "${productName}": ${bottleRefEs}${presentationEs} reposando en el centro de la composición sobre ${activeEnvironment.surfaceEs}. Iluminación suave envolvente, lente 50mm f/1.4 editorial, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Overhead 90-degree perpendicular top-down Flat Lay photography in ${activeRatio.promptEn} of "${productName}": ${bottleRefEn}${presentationEn} resting at the center on ${activeEnvironment.surfaceEn}. Soft enveloping lighting, 50mm f/1.4 editorial lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-4-macro',
      badge: 'Foto 4 · Primer Plano Sensorial',
      title: 'Macro de Gotas, Textura y Relieve',
      shotLabel: 'Macro Extremo · 100mm f/2.8',
      promptEs: `${sessionRefPrefixEs}Fotografía en primerísimo plano macro extremo (extreme tight close-up a escasos centímetros) en formato ${activeRatio.id} de "${productName}": encuadre microscópico cerrado cortando los bordes del frasco con enfoque ultra nítido sobre el relieve del logo y las microgotas de rocío fresco condensadas en ${bottleRefEs}. Fondo con suave bokeh cremoso en matices de ${activeEnvironment.label}. Iluminación ${activeEnvironment.lightingEs}, lente macro 100mm f/2.8, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Extreme macro close-up photography (shot from inches away) in ${activeRatio.id} format of "${productName}": tightly cropped frame cutting container edges with razor-sharp microscopic focus on embossed logo relief and fresh dew micro-droplets on ${bottleRefEn}. Background with smooth creamy bokeh in tones of ${activeEnvironment.label}. Lighting: ${activeEnvironment.lightingEn}, 100mm f/2.8 macro lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-5-splash',
      badge: 'Foto 5 · Splash / Acción Rápida',
      title: 'Salpicadura o Dinamismo en el Aire',
      shotLabel: 'High-Speed · 90mm f/4',
      promptEs: `${sessionRefPrefixEs}Fotografía publicitaria de alta velocidad (1/4000s freeze motion) en ${activeRatio.promptEs} de "${productName}": en el centro, ${bottleRefEs}${presentationEs} permanece firme sobre ${activeEnvironment.surfaceEs} mientras una onda dinámica de microgotas o bruma atomizada estalla en el aire iluminada a contraluz. Con ${activeEnvironment.lightingEs}, lente de estudio 90mm f/4, nitidez absoluta en cada partícula en suspensión, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}High-speed 1/4000s freeze-motion advertising photography in ${activeRatio.promptEn} of "${productName}": centered ${bottleRefEn}${presentationEn} stands steady on ${activeEnvironment.surfaceEn} while a dynamic burst of fine droplets or atomized mist erupts suspended in mid-air backlit. With ${activeEnvironment.lightingEn}, 90mm f/4 studio lens, crystal-clear focus on every suspended particle, 8k.${extraEn}`,
    },
    {
      id: 'shot-6-lifestyle',
      badge: 'Foto 6 · En Uso Real',
      title: 'Escena de Bienestar Cotidiano',
      shotLabel: 'Picado 45° · 50mm',
      promptEs: `${sessionRefPrefixEs}Fotografía editorial Lifestyle de bienestar en ${activeRatio.promptEs} para "${productName}", en plano diagonal de 45 grados: ${bottleRefEs}${presentationEs} sobre ${activeEnvironment.surfaceEs}, mientras unas manos cuidadas interactúan con el producto bajo luz suave matutina. Atmósfera cálida, confiable y de alta gama, ${activeEnvironment.lightingEs}, lente 50mm f/1.4, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Wellness editorial Lifestyle photography in ${activeRatio.promptEn} for "${productName}", 45-degree angle: ${bottleRefEn}${presentationEn} on ${activeEnvironment.surfaceEn}, while elegant hands interact with the product under soft morning light. Warm, trustworthy atmosphere, ${activeEnvironment.lightingEn}, 50mm f/1.4 lens, 8k.${extraEn}`,
    },
  ];

  return (
    <section id="estudio-imagenes" className="py-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Header + Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Camera className="w-3.5 h-3.5 text-amber-400" /> Creador Visual de Fotos Comerciales
              </span>

              {/* Reset to Clean Scene Button */}
              <button
                type="button"
                onClick={handleResetCleanScene}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-slate-700 bg-black/40 text-slate-300 hover:text-white hover:border-amber-400 transition-all cursor-pointer shadow-xs"
                title="Limpiar todos los elementos para volver a una foto de catálogo limpia"
              >
                <RotateCcw className="w-3 h-3 text-amber-400" />
                <span>Escena Limpia</span>
              </button>

              {/* Supplement & Product Autocomplete Assistant */}
              <button
                type="button"
                onClick={() => setIsAssistantOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-black bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 hover:opacity-90 transition-all cursor-pointer shadow"
                title="Buscar o autocompletar beneficios clínicos y estilo publicitario"
              >
                <Wand2 className="w-3 h-3 text-slate-950" />
                <span>✨ Asistente de Productos</span>
              </button>

              {/* Supabase connection indicator button */}
              <button
                type="button"
                onClick={() => setIsSupabaseModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                  supabaseStatus === 'connected'
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25'
                    : supabaseStatus === 'table_missing'
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25'
                    : 'bg-black/40 border-slate-700 text-slate-300'
                }`}
                title="Estado de conexión con Supabase"
              >
                <Database className="w-3 h-3" />
                <span>
                  {supabaseStatus === 'connected'
                    ? '🟢 Supabase'
                    : supabaseStatus === 'table_missing'
                    ? '🟡 Crear Tabla'
                    : '⚪ Local'}
                </span>
              </button>

              {syncFeedback && (
                <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                  {syncFeedback}
                </span>
              )}
            </div>
            <h2
              className={`text-2xl md:text-3xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Configura tu Fotografía de Producto en 3 Pasos
            </h2>
          </div>
        </div>

        {/* Studio 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN (7 Cols): 3-STEP STREAMLINED CONFIGURATOR */}
          <div className="lg:col-span-7 space-y-5">
            {/* PASO 1: TU PRODUCTO Y ENVASE */}
            <div
              className={`rounded-2xl border p-5 space-y-3.5 ${
                isDark
                  ? 'bg-[#101814] border-emerald-900/60 shadow-lg'
                  : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    Tu Producto y Tipo de Envase
                  </h3>
                </div>

                {/* Upload Real Bottle Mode Toggle */}
                <button
                  type="button"
                  onClick={() => setUseReferencePhotoMode(!useReferencePhotoMode)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    useReferencePhotoMode
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold'
                      : isDark
                      ? 'bg-black/30 border-slate-700 text-slate-300 hover:border-amber-400'
                      : 'bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <Upload className="w-3 h-3" />
                  {useReferencePhotoMode ? '✓ Respetar mi frasco real' : '¿Subirás foto de tu frasco real?'}
                </button>
              </div>

              {useReferencePhotoMode && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-amber-300 flex items-center gap-1.5">
                      <span>Modo Frasco Real Activo · Herencia Cromática Automática</span>
                    </p>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      El prompt ordena a Flow / Gemini <strong>extraer y clonar directamente los colores, tonalidades, logotipos y materiales del objeto de la foto adjunta</strong> (📎), prohibiendo de forma estricta cualquier recoloreo o tinte verde/dorado ajeno.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-emerald-400">
                      Nombre del Producto
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsAssistantOpen(true)}
                      className="text-[10px] font-bold text-amber-300 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Wand2 className="w-2.5 h-2.5" />
                      <span>Autocompletar</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className={`w-full px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                      isDark
                        ? 'bg-black/40 border-slate-700 text-white'
                        : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-amber-400">
                      Frase de Campaña / Titular
                    </label>
                    <span className="text-[9.5px] text-slate-400 font-mono">
                      Espacio Flow
                    </span>
                  </div>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Ej: ARTICULACIONES MÁS FUERTES · MUÉVETE SIN LÍMITES"
                    className={`w-full px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                      isDark
                        ? 'bg-black/40 border-slate-700 text-white'
                        : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
              </div>

              {/* 4 Benefits / Claims Fields (Universal for ANY product) */}
              <div className="space-y-1.5 pt-1 border-t border-slate-800/40">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    4 Beneficios / Palabras Clave del Producto (Aparecen en las píldoras/diseño):
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Textos de tu empaque
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={benefit1}
                    onChange={(e) => setBenefit1(e.target.value)}
                    placeholder="1. Beneficio / Claim principal"
                    className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
                      isDark ? 'bg-black/40 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                  <input
                    type="text"
                    value={benefit2}
                    onChange={(e) => setBenefit2(e.target.value)}
                    placeholder="2. Segundo beneficio / Certificación"
                    className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
                      isDark ? 'bg-black/40 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                  <input
                    type="text"
                    value={benefit3}
                    onChange={(e) => setBenefit3(e.target.value)}
                    placeholder="3. Ingrediente activo o dosis"
                    className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
                      isDark ? 'bg-black/40 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                  <input
                    type="text"
                    value={benefit4}
                    onChange={(e) => setBenefit4(e.target.value)}
                    placeholder="4. Efecto o valor agregado"
                    className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
                      isDark ? 'bg-black/40 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
              </div>

              {/* Packaging Visual Selector */}
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-emerald-400" />
                      1. Elige el Formato de Envase o Empaque:
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setModalTab('packagings');
                        setIsLensModalOpen(true);
                      }}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-400/40 hover:bg-amber-500/25 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                    >
                      <Eye className="w-3 h-3 text-amber-400" />
                      <span>Ver fotos reales de cada empaque</span>
                    </button>
                  </div>

                  {/* Primary 6 formats grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PACKAGING_OPTIONS.slice(0, 6).map((pkg) => {
                      const isSelected = packagingId === pkg.id;
                      return (
                        <div key={pkg.id} className="relative group">
                          <button
                            type="button"
                            onClick={() => handleSelectPackaging(pkg.id)}
                            className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 h-full ${
                              isSelected
                                ? 'bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border-emerald-400 ring-2 ring-emerald-400/50 shadow-md font-bold'
                                : isDark
                                ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                                : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1 pr-6">
                              <span className="p-1 rounded-md bg-white/5 border border-white/10">
                                {getPackagingIcon(pkg.id)}
                              </span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 truncate max-w-[85px]">
                                {pkg.badge}
                              </span>
                            </div>
                            <div>
                              <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : ''}`}>
                                {pkg.label}
                              </div>
                              {pkg.shortDesc && (
                                <div className="text-[9.5px] text-slate-400 line-clamp-1 leading-tight mt-0.5">
                                  {pkg.shortDesc}
                                </div>
                              )}
                            </div>
                          </button>
                          {/* Dedicated eye button on each format */}
                          <button
                            type="button"
                            title={`Ver foto real de estudio de ${pkg.label}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectPackaging(pkg.id);
                              setModalTab('packagings');
                              setIsLensModalOpen(true);
                            }}
                            className="absolute top-2 right-2 p-1 rounded-md bg-black/60 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-400/40 transition-all cursor-pointer z-10 shadow"
                          >
                            <Eye className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Extra formats dropdown / toggle */}
                  <div className="mt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowMorePackagings(!showMorePackagings)}
                      className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{showMorePackagings ? '− Menos formatos' : '+ Ver más formatos (Tarro de miel, Pote XXL...)'}</span>
                    </button>
                    {!PACKAGING_OPTIONS.slice(0, 6).some((p) => p.id === packagingId) && (
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                        Seleccionado: {activePackaging.label}
                      </span>
                    )}
                  </div>

                  {showMorePackagings && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800/60">
                      {PACKAGING_OPTIONS.slice(6).map((pkg) => {
                        const isSelected = packagingId === pkg.id;
                        return (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => handleSelectPackaging(pkg.id)}
                            className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-500/20 border-emerald-400 ring-1 ring-emerald-400 font-bold'
                                : isDark
                                ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                                : 'bg-stone-50 border-stone-200 text-stone-700'
                            }`}
                          >
                            <div className="text-[11px] font-bold line-clamp-1">{pkg.label}</div>
                            <div className="text-[9px] text-amber-300">{pkg.badge}</div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Packaging Presentation Mode */}
                <div
                  className={`p-3 rounded-xl border ${
                    isDark ? 'border-slate-800 bg-black/25' : 'border-stone-200 bg-stone-50'
                  } space-y-2`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-amber-400" />
                      2. Presentación del Envase en la Foto:
                    </label>
                    <div className="flex items-center gap-2">
                      {packagingPresentation !== 'solo' && (
                        <button
                          type="button"
                          onClick={() => setPackagingPresentation('solo')}
                          className="text-[10px] text-slate-400 hover:text-amber-400 underline cursor-pointer"
                        >
                          Deseleccionar (Solo el Envase)
                        </button>
                      )}
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">
                        {activePackagingPresentation.label}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {PACKAGING_PRESENTATIONS.filter((pres) =>
                      getCompatiblePresentations(packagingId).includes(pres.id)
                    ).map((pres) => {
                      const isSelected = packagingPresentation === pres.id;
                      return (
                        <button
                          key={pres.id}
                          type="button"
                          onClick={() => handleTogglePresentation(pres.id)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col gap-0.5 ${
                            isSelected
                              ? 'bg-amber-500/20 border-amber-400 ring-1 ring-amber-400 font-bold shadow'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span
                              className={`text-[11px] font-bold ${
                                isSelected ? 'text-amber-300 font-extrabold' : ''
                              }`}
                            >
                              {pres.label}
                            </span>
                            <span className="text-[9px] px-1 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                              {pres.badge}
                            </span>
                          </div>
                          <span className="text-[9.5px] text-slate-400 leading-tight">
                            {pres.shortDesc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* PASO 2: ESTILO VISUAL Y COMPOSICIÓN */}
            <div
              className={`rounded-2xl border p-5 space-y-4 ${
                isDark
                  ? 'bg-[#101814] border-emerald-900/60 shadow-lg'
                  : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    Estilo Visual, Entorno & Composición
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Selecciona con 1 clic</span>
              </div>

              {/* 1. Tipo de Foto / Encuadre */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 block">
                  1. ¿Qué Estilo de Fotografía Necesitas?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                  {PHOTO_TYPES.map((pt) => {
                    const isSelected = photoTypeId === pt.id;
                    return (
                      <div
                        key={pt.id}
                        onClick={() => handleSelectPhotoType(pt)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                          isSelected
                            ? 'bg-gradient-to-br from-emerald-500/25 to-amber-500/15 border-amber-400 ring-1 ring-amber-400/60 shadow-md'
                            : isDark
                            ? 'bg-black/30 border-slate-800 hover:border-emerald-500/40'
                            : 'bg-stone-50 border-stone-200 hover:border-emerald-500/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <span
                              className={`text-xs font-bold ${
                                isSelected
                                  ? 'text-amber-300 font-extrabold'
                                  : isDark
                                  ? 'text-white'
                                  : 'text-stone-900'
                              }`}
                            >
                              {pt.label}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 inline-block mt-0.5">
                            {pt.badge}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight">
                          {pt.shortDesc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Formato de Imagen / Relación de Aspecto */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/50">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label className="text-[11px] font-bold text-slate-300 block">
                    2. Formato de Imagen (Relación de Aspecto):
                  </label>
                  <span className="text-[10px] text-slate-400 font-normal">
                    (Adapta el encuadre en el prompt; elígela también en los botones de Flow o Midjourney)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ASPECT_RATIOS.map((ar) => (
                    <button
                      key={ar.id}
                      type="button"
                      onClick={() => setAspectRatio(ar.id)}
                      className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                        aspectRatio === ar.id
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold shadow'
                          : isDark
                          ? 'bg-black/30 border-slate-800 text-slate-200'
                          : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{ar.label}</div>
                      <div className="text-[9px] opacity-75">{ar.sub.split('/')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Diseño de Beneficios e Infografía */}
              <div className="pt-2 border-t border-slate-800/60 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-amber-400" />
                      3. Diseño de Beneficios e Infografía:
                    </label>
                    <span className="text-[10px] text-slate-400 block">
                      Aprovecha que Flow genera tipografía y palabras nítidas. Elige cómo mostrar tus textos o desactívalos con 1 clic.
                    </span>
                  </div>
                  {infographicStyle !== 'none' && (
                    <button
                      type="button"
                      onClick={() => setInfographicStyle('none')}
                      className="text-[10px] text-slate-400 hover:text-amber-400 underline cursor-pointer"
                    >
                      Deseleccionar (Foto 100% Limpia sin Textos)
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {INFOGRAPHIC_STYLES.map((styleOpt) => {
                    const isSelected = infographicStyle === styleOpt.id;
                    return (
                      <button
                        key={styleOpt.id}
                        type="button"
                        onClick={() => handleToggleInfographicStyle(styleOpt.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 h-full ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50 shadow font-bold'
                            : isDark
                            ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-amber-300 truncate">
                            {styleOpt.badge}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                        </div>
                        <div className={`text-xs font-bold leading-snug ${isSelected ? 'text-amber-200' : ''}`}>
                          {styleOpt.label}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-relaxed mt-1">
                          {styleOpt.shortDesc}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {isMacroMode && (
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[10.5px] text-cyan-300 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>En modo Macro (100mm), la toma es un primerísimo plano extremo del envase; los elementos flotantes se omiten automáticamente para no tapar la toma.</span>
                  </div>
                )}
              </div>

              {/* 4. Entorno Comercial Unificado (Superficie + Iluminación + Atmósfera en 1 solo selector) */}
              <div className="pt-2 border-t border-slate-800/60 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    4. Entorno / Fondo Comercial Unificado (Superficie & Luz Cohesiva):
                  </label>
                  <div className="flex items-center gap-2">
                    {environmentId !== 'estudio-neutro' && (
                      <button
                        type="button"
                        onClick={() => setEnvironmentId('estudio-neutro')}
                        className="text-[10px] text-slate-400 hover:text-amber-400 underline cursor-pointer"
                      >
                        Restablecer a Estudio Neutro
                      </button>
                    )}
                    <span className="text-[10px] text-amber-400 font-mono font-bold">
                      {activeEnvironment.label}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 max-h-[500px] overflow-y-auto pr-1">
                  {COMMERCIAL_ENVIRONMENTS.map((env) => {
                    const isSelected = environmentId === env.id;
                    return (
                      <button
                        key={env.id}
                        type="button"
                        onClick={() => handleToggleEnvironment(env.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 h-full ${
                          isSelected
                            ? 'bg-gradient-to-br from-emerald-500/20 to-amber-500/15 border-emerald-400 ring-2 ring-emerald-400/50 shadow font-bold'
                            : isDark
                            ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-amber-300 font-bold">
                            {env.badge}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                        </div>
                        <div>
                          <div className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : ''}`}>
                            {env.label}
                          </div>
                          <p className="text-[10px] text-slate-400 leading-relaxed mt-1">
                            {env.shortDesc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (5 Cols): CLEAN RESULT CARD & ONE-CLICK COPY */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-4">
            <div
              className={`rounded-2xl border p-5 space-y-4 shadow-xl ${
                isDark
                  ? 'bg-gradient-to-b from-[#111C17] to-[#0A100E] border-emerald-500/50'
                  : 'bg-white border-stone-200'
              }`}
            >
              {/* Result Header */}
              <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                    TU PROMPT DE FOTO LISTO PARA FLOW / NANOBANANA
                  </span>
                  <h3 className={`text-base font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {productName}
                  </h3>
                </div>

                <div className="inline-flex rounded-lg bg-black/40 p-0.5 border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setOutputLang('es')}
                    className={`px-2 py-0.5 rounded text-xs font-bold cursor-pointer ${
                      outputLang === 'es' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutputLang('en')}
                    className={`px-2 py-0.5 rounded text-xs font-bold cursor-pointer ${
                      outputLang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Reference Photo Reminder Banner */}
              {useReferencePhotoMode && (
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-emerald-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
                  <span className="text-[11px] font-semibold">
                    Recuerda adjuntar la foto de tu frasco con el botón <strong>📎</strong> al enviar este prompt.
                  </span>
                </div>
              )}

              {/* Recipe Quick Badges */}
              <div className="flex flex-wrap gap-1 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  {activePhotoType.label}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                  {activeEnvironment.label}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 font-mono">
                  {aspectRatio}
                </span>
              </div>

              {/* Mode Tabs: 1 Foto vs Sesión de 6 */}
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-black/40 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setOutputTab('single')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    outputTab === 'single'
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  1 Foto a Medida
                </button>
                <button
                  type="button"
                  onClick={() => setOutputTab('session6')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    outputTab === 'session6'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Pack de 6 Planos
                </button>
              </div>

              {/* TAB 1: SINGLE PROMPT */}
              {outputTab === 'single' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-black/85 border border-emerald-500/30 font-mono text-xs text-slate-100 leading-relaxed select-all max-h-[220px] overflow-y-auto">
                    {outputLang === 'es' ? mainPromptEs : mainPromptEn}
                  </div>

                  {/* Smart Guidance Badges */}
                  <div className="space-y-2">
                    {isMacroMode && (
                      <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-start gap-2 shadow-xs">
                        <Eye className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-amber-300">Modo Macro Ultra Detalle Activo: </strong>
                          El prompt enfoca a escasos centímetros sobre la textura, logotipo y microgotas. Se han retirado elementos externos para que la IA nunca aleje el producto.
                        </div>
                      </div>
                    )}

                    {useReferencePhotoMode && (
                      <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-xs text-emerald-200 flex items-start gap-2 shadow-xs">
                        <Upload className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-emerald-300">Foto de Referencia Activa: </strong>
                          Recuerda adjuntar la foto de tu envase real. El prompt ordena clonar fielmente la forma, tapa, colores y diseño original de tu empaque.
                        </div>
                      </div>
                    )}

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed">
                      ✨ <strong>Lo que generará:</strong> Una foto de estudio con{' '}
                      <strong className="text-white">{productName}</strong> al centro en{' '}
                      <strong className="text-white">{activeEnvironment.label}</strong>,{' '}
                      {activePhotoType.shortDesc.toLowerCase()}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-copy')
                      }
                      className="sm:col-span-8 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                    >
                      {copiedKey === 'main-copy' ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>¡Prompt Copiado! Pégalo en Flow</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar Prompt para Flow</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-copy');
                        window.open('https://flow.google', '_blank');
                      }}
                      className="sm:col-span-4 py-3.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-500/40 transition-all shadow"
                      title="Copia el prompt automáticamente y abre Google Flow en una nueva pestaña"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      <span>Abrir Flow ↗</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: PACK DE 6 PLANOS */}
              {outputTab === 'session6' && (
                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
                    <span>6 Planos fotográficos listos:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const allSix = session6Pack
                          .map((s) => `=== ${s.badge} ===\n${outputLang === 'es' ? s.promptEs : s.promptEn}`)
                          .join('\n\n');
                        copyText(allSix, 'copy-all-shots');
                      }}
                      className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px] cursor-pointer"
                    >
                      {copiedKey === 'copy-all-shots' ? '¡Copiados los 6!' : 'Copiar los 6'}
                    </button>
                  </div>

                  {session6Pack.map((shot) => {
                    const text = outputLang === 'es' ? shot.promptEs : shot.promptEn;
                    return (
                      <div
                        key={shot.id}
                        className="p-2.5 rounded-xl bg-black/70 border border-slate-800 space-y-1"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[11px] font-bold text-white">{shot.badge}</span>
                          <button
                            type="button"
                            onClick={() => copyText(text, shot.id)}
                            className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-[10px] font-bold transition-all cursor-pointer"
                          >
                            {copiedKey === shot.id ? 'Copiado' : 'Copiar'}
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-2 select-all font-mono">
                          {text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Visual Lens & Packaging Modal */}
      <LensVisualModal
        isOpen={isLensModalOpen}
        onClose={() => setIsLensModalOpen(false)}
        selectedLensId={lensId}
        onSelectLens={(newLensId) => handleSelectLens(newLensId)}
        isDark={isDark}
        initialTab={modalTab}
        selectedPackagingId={packagingId}
        onSelectPackaging={(pkgId, pres) => {
          handleSelectPackaging(pkgId);
          if (pres) {
            const compatible = getCompatiblePresentations(pkgId);
            if (compatible.includes(pres)) {
              setPackagingPresentation(pres);
            }
          }
        }}
      />

      {/* Intelligent Supplement Knowledge Base & Autocomplete Assistant */}
      {isAssistantOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAssistantOpen(false)}
        >
          <div
            className={`max-w-3xl w-full rounded-3xl border p-6 space-y-5 shadow-2xl my-auto ${
              isDark
                ? 'bg-[#0E1612] border-emerald-500/40 text-white'
                : 'bg-white border-stone-200 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
                  <Wand2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base flex items-center gap-2">
                    Asistente de Suplementos & E-Commerce
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                      Autocompletado
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Selecciona un producto o busca cualquier fórmula para autocompletar beneficios clínicos y estilo
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAssistantOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={assistantSearch}
                onChange={(e) => setAssistantSearch(e.target.value)}
                placeholder="Busca cualquier producto (ej: Glucosamina, Colágeno, Magnesio, D3+K2, Omega 3, Creatina, Cúrcuma...)"
                className={`w-full pl-10 pr-16 py-2.5 rounded-xl border text-xs font-semibold placeholder:text-slate-500 ${
                  isDark
                    ? 'bg-black/60 border-slate-700 text-white focus:border-emerald-400'
                    : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-emerald-600'
                }`}
              />
              {assistantSearch && (
                <button
                  type="button"
                  onClick={() => setAssistantSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* List of matching products */}
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {SUPPLEMENT_KNOWLEDGE_BASE.filter((item) => {
                const term = assistantSearch.toLowerCase().trim();
                if (!term) return true;
                return (
                  item.name.toLowerCase().includes(term) ||
                  item.category.toLowerCase().includes(term) ||
                  item.keywords.some((k) => k.toLowerCase().includes(term))
                );
              }).map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isDark
                      ? 'bg-black/40 border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/5'
                      : 'bg-stone-50 border-stone-200 hover:border-emerald-400 hover:bg-emerald-50/30'
                  }`}
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-xs text-white">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-300 font-semibold">
                      «{item.headline}»
                    </p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                        1) {item.benefit1}
                      </span>
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                        2) {item.benefit2}
                      </span>
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                        3) {item.benefit3}
                      </span>
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                        4) {item.benefit4}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      {item.shortClinicalDesc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApplyKnowledgeItem(item)}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-90 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow shrink-0 self-end sm:self-center"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Aplicar al Estudio</span>
                  </button>
                </div>
              ))}

              {/* Custom generate button if not in list */}
              {assistantSearch.trim() &&
                !SUPPLEMENT_KNOWLEDGE_BASE.some((item) =>
                  item.name.toLowerCase().includes(assistantSearch.toLowerCase().trim())
                ) && (
                  <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-center space-y-2">
                    <p className="text-xs text-amber-200">
                      ¿Quieres autocompletar tu estudio para <strong>"{assistantSearch}"</strong>?
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        const clean = assistantSearch.trim();
                        setProductName(clean);
                        setHeadline(`MÁXIMA PUREZA, VITALIDAD Y BIENESTAR CON ${clean.toUpperCase()}`);
                        setBenefit1(`Apoyo Integral con ${clean}`);
                        setBenefit2('Absorción Celular de Alta Biodisponibilidad');
                        setBenefit3('Fórmula Pura sin Aditivos Tóxicos');
                        setBenefit4('Energía y Vitalidad Diaria Comprobada');
                        setIsAssistantOpen(false);
                        setSyncFeedback(`✓ Autocompletado generado para "${clean}"`);
                        setTimeout(() => setSyncFeedback(null), 3000);
                      }}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow cursor-pointer"
                    >
                      ✨ Generar beneficios y estilo para "{assistantSearch}"
                    </button>
                  </div>
                )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              <span>💡 Ideal para Flow / Nanobanana Pro: genera composiciones estructuradas con textos de alta conversión.</span>
              <button
                type="button"
                onClick={() => setIsAssistantOpen(false)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Supabase Connection Setup Modal */}
      {isSupabaseModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsSupabaseModalOpen(false)}
        >
          <div
            className={`max-w-2xl w-full rounded-3xl border p-6 space-y-5 shadow-2xl my-auto ${
              isDark
                ? 'bg-[#0F1713] border-emerald-500/40 text-white'
                : 'bg-white border-stone-200 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base">Conexión con Supabase</h3>
                  <p className="text-xs text-slate-400">
                    Almacenamiento persistente en tu nube PostgreSQL
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsSupabaseModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-slate-800 space-y-1 text-xs">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Estado:</span>
              <div className="font-bold text-emerald-400">
                {supabaseStatus === 'connected' ? '✓ Conectado y sincronizado' : 'Modo local activo'}
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsSupabaseModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs cursor-pointer hover:bg-emerald-400"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
