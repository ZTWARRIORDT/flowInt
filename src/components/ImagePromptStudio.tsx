import React, { useState, useEffect } from 'react';
import {
  Camera,
  Sparkles,
  Copy,
  Check,
  Plus,
  Trash2,
  Package,
  Leaf,
  Award,
  RotateCcw,
  Aperture,
  Eye,
  Sliders,
  HelpCircle,
  Upload,
  Pipette,
  SprayCan,
  Pill,
  ShoppingBag,
  Droplet,
  Box,
  Database,
  ExternalLink,
  FileCode,
  X,
  Wand2,
  Search,
  ShieldCheck,
  Info,
} from 'lucide-react';
import {
  PHOTO_TYPES,
  CAMERA_SHOTS,
  CAMERA_LENSES,
  LIGHTING_STYLES,
  PACKAGING_OPTIONS,
  PACKAGING_PRESENTATIONS,
  PackagingPresentationMode,
  SURFACE_OPTIONS,
  INGREDIENT_EFFECTS,
  ACCOMPANIMENT_OPTIONS,
  COLOR_MOODS,
  ASPECT_RATIOS,
  STUDIO_QUICK_PRESETS,
  StudioOptionItem,
  PhotoTypeOption,
  ProductQuickPreset,
  SUPPLEMENT_KNOWLEDGE_BASE,
  SupplementKnowledgeItem,
} from '../data/imageStudioData';
import { LensVisualModal, PACKAGINGS_EXPLANATIONS } from './LensVisualModal';
import {
  fetchCustomItemsFromSupabase,
  saveCustomItemToSupabase,
  deleteCustomItemFromSupabase,
  checkSupabaseStatus,
} from '../lib/supabase';

interface Props {
  isDark: boolean;
  externalPresetId?: string | null;
}

type CustomCategoryKey =
  | 'photoTypes'
  | 'shots'
  | 'lenses'
  | 'lightings'
  | 'packagings'
  | 'surfaces'
  | 'ingredients'
  | 'moods';

interface CustomItemsMap {
  photoTypes: PhotoTypeOption[];
  shots: StudioOptionItem[];
  lenses: StudioOptionItem[];
  lightings: StudioOptionItem[];
  packagings: StudioOptionItem[];
  surfaces: StudioOptionItem[];
  ingredients: StudioOptionItem[];
  moods: StudioOptionItem[];
}

const STORAGE_KEY = 'flow_natural_custom_studio_items_v2';

const DEFAULT_CUSTOM_MAP: CustomItemsMap = {
  photoTypes: [],
  shots: [],
  lenses: [],
  lightings: [],
  packagings: [],
  surfaces: [],
  ingredients: [],
  accompaniments: [],
  moods: [],
};

export const ImagePromptStudio: React.FC<Props> = ({ isDark, externalPresetId }) => {
  // Custom user-added items persisted in localStorage
  const [customItems, setCustomItems] = useState<CustomItemsMap>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CUSTOM_MAP, ...JSON.parse(saved) };
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_CUSTOM_MAP;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customItems));
    } catch {
      // ignore storage errors
    }
  }, [customItems]);

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
  const [lightingId, setLightingId] = useState<string>(STUDIO_QUICK_PRESETS[0].lightingId);
  const [packagingId, setPackagingId] = useState<string>(STUDIO_QUICK_PRESETS[0].packagingId);
  const [packagingPresentation, setPackagingPresentation] = useState<PackagingPresentationMode>(
    STUDIO_QUICK_PRESETS[0].packagingPresentation || 'con-contenido'
  );
  const [surfaceId, setSurfaceId] = useState<string>(STUDIO_QUICK_PRESETS[0].surfaceId);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>(
    STUDIO_QUICK_PRESETS[0].ingredientIds
  );
  const [colorMoodId, setColorMoodId] = useState<string>(STUDIO_QUICK_PRESETS[0].colorMoodId);
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '9:16' | '4:5' | '16:9'>(
    STUDIO_QUICK_PRESETS[0].aspectRatio
  );

  // Medallions, Reference & Extra Modifiers
  const [medallionStyle, setMedallionStyle] = useState<'gold-3d' | 'crystal-minimal' | 'none'>(
    'gold-3d'
  );
  // Default to true as the user requested: mostly real products will be used
  const [useReferencePhotoMode, setUseReferencePhotoMode] = useState<boolean>(true);
  const [extraCustomNotes, setExtraCustomNotes] = useState<string>('');

  // Selected accompaniments / props
  const [selectedAccompanimentIds, setSelectedAccompanimentIds] = useState<string[]>([
    'capsulas-softgel-base',
  ]);
  const [newAccompanimentInput, setNewAccompanimentInput] = useState<string>('');

  // UI State for Output, Modal & Add-Custom forms
  const [isLensModalOpen, setIsLensModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'lenses' | 'packagings'>('lenses');
  const [showMorePackagings, setShowMorePackagings] = useState<boolean>(false);
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [outputTab, setOutputTab] = useState<'single' | 'session6'>('single');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeAddCategory, setActiveAddCategory] = useState<CustomCategoryKey | null>(null);
  const [newCustomLabel, setNewCustomLabel] = useState<string>('');
  const [newCustomPrompt, setNewCustomPrompt] = useState<string>('');
  const [newIngredientInput, setNewIngredientInput] = useState<string>('');

  // Supabase live status & sync feedback
  const [supabaseStatus, setSupabaseStatus] = useState<
    'checking' | 'connected' | 'table_missing' | 'error'
  >('checking');
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  // Assistant for Supplements / Knowledge Auto-fill
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [assistantSearch, setAssistantSearch] = useState<string>('');

  // Check Supabase status and fetch remote custom items on mount
  useEffect(() => {
    checkSupabaseStatus().then((status) => {
      setSupabaseStatus(status);
      if (status === 'connected') {
        fetchCustomItemsFromSupabase().then((remoteMap) => {
          if (remoteMap) {
            setCustomItems((prev) => {
              const updated: CustomItemsMap = { ...prev };
              (Object.keys(remoteMap) as CustomCategoryKey[]).forEach((cat) => {
                const remoteList = (remoteMap[cat] as StudioOptionItem[]) || [];
                const localList = (prev[cat] as StudioOptionItem[]) || [];
                const dict = new Map<string, StudioOptionItem>();
                localList.forEach((item) => dict.set(item.id, item));
                remoteList.forEach((item) => dict.set(item.id, item));
                updated[cat] = Array.from(dict.values()) as any;
              });
              return updated;
            });
          }
        });
      }
    });
  }, []);

  const handleQuickAddIngredient = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = newIngredientInput.trim();
    if (!clean) return;

    const newId = `custom-ing-${Date.now()}`;
    const newItem: StudioOptionItem = {
      id: newId,
      label: clean,
      badge: 'Propio',
      shortDesc: clean,
      promptEs: clean,
      promptEn: clean,
      isCustom: true,
    };

    setCustomItems((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, newItem],
    }));

    setSelectedIngredientIds((prev) => [...prev, newId]);
    setNewIngredientInput('');

    // Persist to Supabase
    saveCustomItemToSupabase('ingredients', newItem).then((ok) => {
      if (ok) {
        setSyncFeedback(`✓ Ingrediente "${clean}" guardado en Supabase`);
        setTimeout(() => setSyncFeedback(null), 3000);
      }
    });
  };

  const handleQuickAddAccompaniment = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = newAccompanimentInput.trim();
    if (!clean) return;

    const newId = `custom-acc-${Date.now()}`;
    const newItem: StudioOptionItem = {
      id: newId,
      label: clean,
      badge: 'Propio',
      shortDesc: 'Acompañamiento personalizado en escena',
      promptEs: clean,
      promptEn: clean,
      isCustom: true,
    };

    setCustomItems((prev) => ({
      ...prev,
      accompaniments: [...(prev.accompaniments || []), newItem],
    }));

    setSelectedAccompanimentIds((prev) => [...prev, newId]);
    setNewAccompanimentInput('');

    saveCustomItemToSupabase('accompaniments', newItem).then((ok) => {
      if (ok) {
        setSyncFeedback(`✓ Acompañamiento "${clean}" guardado en Supabase`);
        setTimeout(() => setSyncFeedback(null), 3000);
      }
    });
  };

  const handleResetCleanScene = () => {
    setSelectedIngredientIds([]);
    setSelectedAccompanimentIds([]);
    setPackagingPresentation('solo');
    setMedallionStyle('none');
    setPhotoTypeId('hero-estudio');
    setShotId('contrapicado-heroico');
    setLightingId('hora-dorada');
    setLensId('85mm-f18');
    setSyncFeedback('✓ Escena limpia: sin props ni medallones');
    setTimeout(() => setSyncFeedback(null), 3000);
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
    if (item.recommendedAccompaniments) setSelectedAccompanimentIds(item.recommendedAccompaniments);
    if (item.recommendedIngredients) setSelectedIngredientIds(item.recommendedIngredients);
    if (item.recommendedColorMood) setColorMoodId(item.recommendedColorMood);
    setIsAssistantOpen(false);
    setSyncFeedback(`✓ Autocompletado: "${item.name}"`);
    setTimeout(() => setSyncFeedback(null), 3500);
  };

  // Merged lists (Default + User Custom)
  const allPhotoTypes = [...PHOTO_TYPES, ...customItems.photoTypes];
  const allShots = [...CAMERA_SHOTS, ...customItems.shots];
  const allLenses = [...CAMERA_LENSES, ...customItems.lenses];
  const allLightings = [...LIGHTING_STYLES, ...customItems.lightings];
  const allPackagings = [...PACKAGING_OPTIONS, ...customItems.packagings];
  const allSurfaces = [...SURFACE_OPTIONS, ...customItems.surfaces];
  const allIngredients = [...INGREDIENT_EFFECTS, ...customItems.ingredients];
  const allAccompaniments = [
    ...ACCOMPANIMENT_OPTIONS,
    ...((customItems.accompaniments as StudioOptionItem[]) || []),
  ];
  const allMoods = [...COLOR_MOODS, ...customItems.moods];

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
    setLightingId(preset.lightingId);
    setPackagingId(preset.packagingId);
    setPackagingPresentation(preset.packagingPresentation || 'solo');
    setSurfaceId(preset.surfaceId);
    setSelectedIngredientIds(preset.ingredientIds);
    setColorMoodId(preset.colorMoodId);
    setAspectRatio(preset.aspectRatio);
  };

  // Sync when external preset is clicked from Catalog
  useEffect(() => {
    if (externalPresetId) {
      const found = STUDIO_QUICK_PRESETS.find((p) => p.id === externalPresetId);
      if (found) {
        applyPreset(found);
      }
    }
  }, [externalPresetId]);

  const handleSelectPhotoType = (pt: PhotoTypeOption) => {
    setPhotoTypeId(pt.id);
    if (pt.recommendedShotId) setShotId(pt.recommendedShotId);
    if (pt.recommendedLensId) setLensId(pt.recommendedLensId);
    if (pt.recommendedLightingId) setLightingId(pt.recommendedLightingId);
    setMedallionStyle(pt.includeMedallionsByDefault ? 'gold-3d' : 'none');
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
      setPhotoTypeId('naturaleza-epica');
    } else if (id === '85mm-f18') {
      if (shotId === 'macro-extremo') setShotId('eye-level');
      if (photoTypeId === 'macro-textura') setPhotoTypeId('poster-medallones');
    } else if (id === '50mm-f14') {
      if (shotId === 'macro-extremo') setShotId('picado-45');
      if (photoTypeId === 'macro-textura') setPhotoTypeId('flat-lay-cenital');
    }
  };

  const toggleIngredient = (id: string) => {
    setSelectedIngredientIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddCustomItem = (category: CustomCategoryKey) => {
    const cleanLabel = newCustomLabel.trim();
    const cleanPrompt = newCustomPrompt.trim() || cleanLabel;
    if (!cleanLabel) return;

    const newId = `custom-${category}-${Date.now()}`;

    if (category === 'photoTypes') {
      const newPt: PhotoTypeOption = {
        id: newId,
        label: cleanLabel,
        badge: 'Propio',
        shortDesc: cleanPrompt,
        promptEs: `Fotografía comercial con estilo ${cleanPrompt}`,
        promptEn: `Commercial product photography featuring ${cleanPrompt}`,
        recommendedShotId: shotId,
        recommendedLensId: lensId,
        recommendedLightingId: lightingId,
        includeMedallionsByDefault: medallionStyle !== 'none',
        isCustom: true,
      };
      setCustomItems((prev) => ({ ...prev, photoTypes: [...prev.photoTypes, newPt] }));
      setPhotoTypeId(newId);
    } else {
      const newItem: StudioOptionItem = {
        id: newId,
        label: cleanLabel,
        badge: 'Propio',
        shortDesc: cleanPrompt,
        promptEs: cleanPrompt,
        promptEn: cleanPrompt,
        isCustom: true,
      };
      setCustomItems((prev) => ({
        ...prev,
        [category]: [...prev[category], newItem],
      }));

      if (category === 'shots') setShotId(newId);
      if (category === 'lenses') setLensId(newId);
      if (category === 'lightings') setLightingId(newId);
      if (category === 'packagings') setPackagingId(newId);
      if (category === 'surfaces') setSurfaceId(newId);
      if (category === 'moods') setColorMoodId(newId);
      if (category === 'ingredients') {
        setSelectedIngredientIds((prev) => [...prev, newId]);
      }

      // Persist to Supabase
      saveCustomItemToSupabase(category, newItem).then((ok) => {
        if (ok) {
          setSyncFeedback(`✓ Guardado en Supabase: "${cleanLabel}"`);
          setTimeout(() => setSyncFeedback(null), 3000);
        }
      });
    }

    setNewCustomLabel('');
    setNewCustomPrompt('');
    setActiveAddCategory(null);
  };

  const handleDeleteCustomItem = (category: CustomCategoryKey, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomItems((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.id !== id),
    }));
    if (category === 'ingredients') {
      setSelectedIngredientIds((prev) => prev.filter((item) => item !== id));
    }
    if (category === 'accompaniments') {
      setSelectedAccompanimentIds((prev) => prev.filter((item) => item !== id));
    }
    deleteCustomItemFromSupabase(id);
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
  const activePhotoType = allPhotoTypes.find((x) => x.id === photoTypeId) || allPhotoTypes[0];
  const activeShot = allShots.find((x) => x.id === shotId) || allShots[0];
  const activeLens = allLenses.find((x) => x.id === lensId) || allLenses[0];
  const activeLighting = allLightings.find((x) => x.id === lightingId) || allLightings[0];
  const activePackaging = allPackagings.find((x) => x.id === packagingId) || allPackagings[0];
  const activePackagingPresentation =
    PACKAGING_PRESENTATIONS.find((x) => x.id === packagingPresentation) || PACKAGING_PRESENTATIONS[0];
  const activeSurface = allSurfaces.find((x) => x.id === surfaceId) || allSurfaces[0];
  const activeMood = allMoods.find((x) => x.id === colorMoodId) || allMoods[0];
  const activeRatio = ASPECT_RATIOS.find((x) => x.id === aspectRatio) || ASPECT_RATIOS[0];
  const activeIngredients = allIngredients.filter((x) => selectedIngredientIds.includes(x.id));
  const activeAccompaniments = allAccompaniments.filter((x) =>
    selectedAccompanimentIds.includes(x.id)
  );

  const presentationEs = activePackagingPresentation.promptEs ? `, ${activePackagingPresentation.promptEs}` : '';
  const presentationEn = activePackagingPresentation.promptEn ? `, ${activePackagingPresentation.promptEn}` : '';

  const ingredientsListEs =
    activeIngredients.length > 0
      ? activeIngredients.map((i) => i.promptEs).join(', ')
      : 'elementos botánicos puros y gotas de rocío fresco';

  const ingredientsListEn =
    activeIngredients.length > 0
      ? activeIngredients.map((i) => i.promptEn).join(', ')
      : 'pure botanical elements and fresh dew droplets';

  // Deduplicate accompaniments if presentation already includes softgel/capsule sample
  const filteredAccompaniments =
    packagingPresentation === 'con-contenido'
      ? activeAccompaniments.filter((x) => x.id !== 'capsulas-softgel-base')
      : activeAccompaniments;

  const accompanimentsListEs =
    filteredAccompaniments.length > 0
      ? filteredAccompaniments.map((x) => x.promptEs).join(', ')
      : '';
  const accompanimentsListEn =
    filteredAccompaniments.length > 0
      ? filteredAccompaniments.map((x) => x.promptEn).join(', ')
      : '';

  // Medallion fragment
  const getMedallionFragmentEs = (style: 'gold-3d' | 'crystal-minimal' | 'none') => {
    if (style === 'none') {
      return 'Composición 100% limpia sin medallones externos ni textos flotantes, destacando únicamente el logo simbólico en relieve del envase.';
    }
    if (style === 'crystal-minimal') {
      return `Flotando de forma armónica alrededor del envase hay 4 esferas traslúcidas de cristal y borde dorado que contienen ÚNICAMENTE iconos/logos simbólicos minimalistas en 3D representando: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, prohibido incluir letras pequeñas o textos largos que se deformen.`;
    }
    return `Flotando simétricamente alrededor del envase hay 4 medallones circulares de oro cepillado que contienen ÚNICAMENTE iconos/logos simbólicos grabados en relieve 3D representando: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, prohibido incluir letras pequeñas o textos largos para evitar deformaciones.`;
  };

  const getMedallionFragmentEn = (style: 'gold-3d' | 'crystal-minimal' | 'none') => {
    if (style === 'none') {
      return '100% clean composition with no external medallions or floating text, showcasing only the embossed symbolic logo on the container.';
    }
    if (style === 'crystal-minimal') {
      return `Floating harmoniously around the container are 4 translucent glass orbs with gold rims featuring ONLY minimalist 3D symbolic icons/logos representing: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, strictly no small letters or text that could warp.`;
    }
    return `Floating symmetrically around the container are 4 circular brushed gold medallions featuring ONLY 3D engraved symbolic icons/logos representing: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, strictly no small letters or text so nothing warps.`;
  };

  const extraEs = extraCustomNotes.trim() ? ` Detalle adicional: ${extraCustomNotes.trim()}.` : '';
  const extraEn = extraCustomNotes.trim() ? ` Additional detail: ${extraCustomNotes.trim()}.` : '';

  // Poster Flow headline space directive
  const isPosterFlow =
    photoTypeId === 'poster-infografico-flow' || photoTypeId === 'poster-medallones';

  const headlineDirectiveEs =
    isPosterFlow && headline.trim()
      ? ` Composición publicitaria de alta conversión dejando zona superior de aire negativo limpia (negative space) para titular de campaña: "${headline.trim()}".`
      : '';
  const headlineDirectiveEn =
    isPosterFlow && headline.trim()
      ? ` High-converting advertising composition with clean top negative breathing room for campaign headline: "${headline.trim()}".`
      : '';

  // Strict color protection against background mood tinting
  const colorDirectiveEs = useReferencePhotoMode
    ? (colorMoodId === 'original-fiel'
        ? 'con iluminación de estudio neutra de alta fidelidad preservando al 100% los tonos y colores reales originales del producto adjunto'
        : `con paleta cromática aplicada exclusivamente al fondo, iluminación ambiental y destellos de recorte: ${activeMood.promptEs} (manteniendo estrictamente inalterados los colores reales, tintes originales de la etiqueta, tapa y frasco de la foto adjunta, prohibido recolorear el producto)`)
    : `con ${activeMood.promptEs}`;

  const colorDirectiveEn = useReferencePhotoMode
    ? (colorMoodId === 'original-fiel'
        ? 'with neutral commercial studio high-fidelity lighting preserving 100% of authentic true-to-life product label colors'
        : `with color palette applied strictly to background, ambient lighting, and rim highlights: ${activeMood.promptEn} (strictly preserving authentic label, cap, and container colors from attached photo without recoloring product)`)
    : `with ${activeMood.promptEn}`;

  // Macro mode detection (prevents contradictory wide instructions like floating medallions or whole distant tables)
  const isMacroMode =
    lensId === '100mm-macro' || shotId === 'macro-extremo' || photoTypeId === 'macro-textura';

  // 1. Framing & Lens harmony (Zero contradictions)
  let photoStyleEs = `${activePhotoType.promptEs} en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}.`;
  let photoStyleEn = `${activePhotoType.promptEn} in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}.`;

  if (isMacroMode) {
    photoStyleEs = `Fotografía macro sensorial de ultra detalle publicitario (extreme tight macro close-up a escasos centímetros) en ${activeRatio.promptEs} para el producto natural "${productName}": encuadre microscópico cerrado enfocado en primerísimo plano sobre el relieve del logo, la textura táctil del material y las microgotas de rocío fresco condensadas, cortando estéticamente los bordes del envase para llenar por completo la toma con nitidez 8K (sin alejar la cámara ni mostrar el envase entero).`;
    photoStyleEn = `Advertising sensory ultra-detail macro photography (extreme tight macro close-up shot from inches away) in ${activeRatio.promptEn} for the natural product "${productName}": tightly focused microscopic close-up framing on embossed logo relief, container material texture, and fresh micro-droplets, aesthetically cropping container edges to fill the entire frame with 8K clarity (not pulling back to show the full container).`;
  } else if (lensId === '35mm-f2') {
    photoStyleEs = `Fotografía ambiental comercial capturada con lente gran angular 35mm f/2.0 en ${activeRatio.promptEs} para el producto natural "${productName}": encuadre amplio integrando el producto de forma orgánica en la inmensidad del paisaje natural con gran profundidad de campo y atmósfera botánica pura.`;
    photoStyleEn = `Environmental commercial photography captured with a 35mm f/2.0 wide-angle lens in ${activeRatio.promptEn} for the natural product "${productName}": wide environmental framing organically integrating the product into the expansive natural landscape.`;
  } else if (lensId === '90mm-highspeed') {
    photoStyleEs = `Fotografía publicitaria de alta velocidad (1/4000s freeze-motion) capturada con óptica de estudio 90mm f/4 en ${activeRatio.promptEs} para el producto natural "${productName}": acción dinámica congelando en el aire cada partícula botánica, salpicadura y gota con nitidez absoluta.`;
    photoStyleEn = `High-speed 1/4000s freeze-motion commercial advertising photography captured with a 90mm f/4 studio lens in ${activeRatio.promptEn} for the natural product "${productName}": dynamic mid-air action freezing every botanical particle, splash, and droplet in crystal-clear focus.`;
  } else if (lensId === '85mm-f18') {
    photoStyleEs = `${activePhotoType.promptEs} con lente prime 85mm f/1.8 (bokeh cremoso de estudio) en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}.`;
    photoStyleEn = `${activePhotoType.promptEn} with an 85mm f/1.8 prime lens (creamy studio bokeh) in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}.`;
  }

  // 2. Reference Photo Mode vs New Packaging
  let packagingDescriptionEs = `En el centro destaca ${activePackaging.promptEs}${presentationEs}${accompanimentsListEs ? `, acompañado armónicamente por ${accompanimentsListEs}` : ''}, ${activeSurface.promptEs}.`;
  let packagingDescriptionEn = `Centered is ${activePackaging.promptEn}${presentationEn}${accompanimentsListEn ? `, harmoniously accompanied by ${accompanimentsListEn}` : ''}, ${activeSurface.promptEn}.`;

  if (useReferencePhotoMode) {
    packagingDescriptionEs = `[FOTO DE REFERENCIA ADJUNTA OBLIGATORIA]: Es indispensable e imperativo mantener con 100% de exactitud y fidelidad el producto y envase de la imagen adjunta: misma silueta geométrica, misma tapa, mismos colores reales y el diseño original de la etiqueta con sus logotipos y textos reales sin rediseñar, deformar ni inventar marcas nuevas. En la escena destaca este envase original${presentationEs}${accompanimentsListEs ? `, acompañado armónicamente por ${accompanimentsListEs}` : ''}, ${activeSurface.promptEs}.`;
    packagingDescriptionEn = `[MANDATORY ATTACHED REFERENCE PHOTO]: It is strictly mandatory to preserve with 100% fidelity the exact product container from the attached image: identical silhouette shape, real cap, original label design, colors, and authentic logos without redesigning, warping, or inventing new graphics. Centered in the scene is this authentic product container${presentationEn}${accompanimentsListEn ? `, harmoniously accompanied by ${accompanimentsListEn}` : ''}, ${activeSurface.promptEn}.`;
  }

  // Macro specific descriptions (omits distant tables, full packaging bodies, or distant floating medallions)
  const macroPackagingEs = useReferencePhotoMode
    ? `[FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, la toma se concentra al 100% en el detalle microscópico de sus materiales originales, tipografías y logotipo auténtico en relieve sin rediseñar marcas ni alterar colores${accompanimentsListEs ? `, con una muestra en primer plano de ${accompanimentsListEs}` : ''}. Con fondo en suave desenfoque bokeh cremoso con sutiles matices orgánicos de ${activeSurface.label}, sin elementos lejanos que alejen la toma.`
    : `La toma se concentra con nitidez microscópica en el detalle de ${activePackaging.label}, su logotipo botánico en relieve y microgotas sobre la superficie${accompanimentsListEs ? `, con una muestra en primer plano de ${accompanimentsListEs}` : ''}. Con fondo en suave desenfoque bokeh cremoso con sutiles matices orgánicos de ${activeSurface.label}, sin elementos lejanos que alejen la toma.`;

  const macroPackagingEn = useReferencePhotoMode
    ? `[ATTACHED REFERENCE PHOTO]: Using the attached authentic product as mandatory visual base, the framing focuses 100% on microscopic details of its authentic materials, typography, and embossed authentic logo without redesigning brands or altering colors${accompanimentsListEn ? `, with an immediate foreground sample of ${accompanimentsListEn}` : ''}. Smooth creamy bokeh background with subtle organic tones of ${activeSurface.label}, strictly no distant wide elements.`
    : `The camera focuses with microscopic sharpness on the texture of ${activePackaging.label}, its embossed botanical logo, and surface micro-droplets${accompanimentsListEn ? `, with an immediate foreground sample of ${accompanimentsListEn}` : ''}. Smooth creamy bokeh background with subtle organic tones of ${activeSurface.label}, strictly no distant wide elements.`;

  const macroMedallionsEs =
    'Composición macro limpia sin medallones externos flotantes para garantizar el acercamiento extremo de la cámara; los beneficios se reflejan en el acabado táctil del producto.';
  const macroMedallionsEn =
    'Clean macro composition without external floating medallions to allow extreme camera close-up; product benefits are embodied in its tactile quality.';

  // Main Prompt
  const mainPromptEs = isMacroMode
    ? `${photoStyleEs} ${macroPackagingEs} ${macroMedallionsEs} Con ${activeLighting.promptEs}, ${colorDirectiveEs}, capturado con lente macro 100mm f/2.8 con nitidez microscópica en texturas y gotas. Fotografía comercial publicitaria 8k.${extraEs}`
    : `${photoStyleEs} ${packagingDescriptionEs} Alrededor del envase se aprecian ${ingredientsListEs}. ${getMedallionFragmentEs(medallionStyle)}${headlineDirectiveEs} Con ${activeLighting.promptEs}, ${colorDirectiveEs}, ${activeLens.promptEs}. Fotografía comercial hiperrealista 8k, calidad de estudio publicitario.${extraEs}`;

  const mainPromptEn = isMacroMode
    ? `${photoStyleEn} ${macroPackagingEn} ${macroMedallionsEn} Featuring ${activeLighting.promptEn}, ${colorDirectiveEn}, captured with a 100mm f/2.8 macro lens with microscopic sharpness on textures and dew droplets. 8k commercial advertising photography.${extraEn}`
    : `${photoStyleEn} ${packagingDescriptionEn} Surrounding the container are ${ingredientsListEn}. ${getMedallionFragmentEn(medallionStyle)}${headlineDirectiveEn} Featuring ${activeLighting.promptEn}, ${colorDirectiveEn}, ${activeLens.promptEn}. Hyper-realistic 8k commercial product photography, advertising studio quality.${extraEn}`;

  // 6-Shot Complete Photo Session
  const bottleRefEs = useReferencePhotoMode
    ? 'el envase original de la foto de referencia adjunta (manteniendo con exactitud su silueta, tapa y diseño original de etiqueta sin recolorear)'
    : activePackaging.promptEs;
  const bottleRefEn = useReferencePhotoMode
    ? 'the original product container from the attached reference photo (preserving exact silhouette, cap, and authentic label graphics without recoloring)'
    : activePackaging.promptEn;

  const sessionRefPrefixEs = useReferencePhotoMode
    ? 'Tomando como referencia obligatoria la foto del frasco adjunta (mantener idénticos colores reales, diseño y tipografías sin alterar): '
    : '';
  const sessionRefPrefixEn = useReferencePhotoMode
    ? 'Using the attached product photo as mandatory reference (preserve exact authentic colors, design, and typography without alterations): '
    : '';

  const accInSessionEs = accompanimentsListEs ? `, acompañado armónicamente por ${accompanimentsListEs}` : '';
  const accInSessionEn = accompanimentsListEn ? `, accompanied harmoniously by ${accompanimentsListEn}` : '';

  const session6Pack = [
    {
      id: 'shot-1-poster',
      badge: 'Foto 1 · Póster de Beneficios',
      title: 'Póster Comercial Simétrico con 4 Medallones 3D',
      shotLabel: 'Eye-Level 0° · 85mm Bokeh',
      promptEs: `${sessionRefPrefixEs}Fotografía comercial publicitaria tipo póster en ${activeRatio.promptEs} de "${productName}", en plano frontal eye-level perfectamente simétrico. En el centro, ${bottleRefEs}${presentationEs}${accInSessionEs}, ${activeSurface.promptEs}, rodeado de ${ingredientsListEs}. ${getMedallionFragmentEs('gold-3d')}${headlineDirectiveEs} Con ${activeLighting.promptEs} y ${colorDirectiveEs}, lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Commercial advertising poster photography in ${activeRatio.promptEn} of "${productName}", straight-on symmetrical eye-level shot. Centered is ${bottleRefEn}${presentationEn}${accInSessionEn}, ${activeSurface.promptEn}, surrounded by ${ingredientsListEn}. ${getMedallionFragmentEn('gold-3d')}${headlineDirectiveEn} With ${activeLighting.promptEn} and ${colorDirectiveEn}, 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-2-hero',
      badge: 'Foto 2 · Catálogo Limpio',
      title: 'Hero Shot Imponente (Sin Medallones)',
      shotLabel: 'Contrapicado 15° · 85mm',
      promptEs: `${sessionRefPrefixEs}Fotografía Hero Shot comercial limpia en ${activeRatio.promptEs} de "${productName}", en plano contrapicado heroico a 15 grados que engrandece la presencia del envase. Presenta ${bottleRefEs}${presentationEs}${accInSessionEs}, ${activeSurface.promptEs}, acompañado de ${ingredientsListEs}. Sin ningún texto flotante ni medallones externos. Con ${activeLighting.promptEs} y ${colorDirectiveEs}, lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Clean commercial Hero Shot photography in ${activeRatio.promptEn} of "${productName}", shot from a 15-degree low-angle heroic perspective. Featuring ${bottleRefEn}${presentationEn}${accInSessionEn}, ${activeSurface.promptEn}, accompanied by ${ingredientsListEn}. Strictly no floating text or external medallions. With ${activeLighting.promptEn} and ${colorDirectiveEn}, 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-3-flatlay',
      badge: 'Foto 3 · Vista Cenital 90°',
      title: 'Flat Lay de Ingredientes desde Arriba',
      shotLabel: 'Cenital Top-Down · 50mm',
      promptEs: `${sessionRefPrefixEs}Fotografía Flat Lay cenital en ángulo perpendicular de 90 grados desde arriba en ${activeRatio.promptEs} de "${productName}": ${bottleRefEs}${presentationEs}${accInSessionEs} reposando en el centro de la composición ${activeSurface.promptEs}, rodeado en círculo armónico por sus ingredientes naturales puros (${ingredientsListEs}). Iluminación suave de ventana con sombras orgánicas, ${colorDirectiveEs}, lente 50mm f/1.4 editorial, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Overhead 90-degree perpendicular top-down Flat Lay photography in ${activeRatio.promptEn} of "${productName}": ${bottleRefEn}${presentationEn}${accInSessionEn} resting at the center ${activeSurface.promptEn}, artfully encircled by its raw natural ingredients (${ingredientsListEn}). Soft window daylight with organic shadows, ${colorDirectiveEn}, 50mm f/1.4 editorial lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-4-macro',
      badge: 'Foto 4 · Primer Plano Sensorial',
      title: 'Macro de Gotas, Textura y Relieve Dorado',
      shotLabel: 'Macro Extremo · 100mm f/2.8',
      promptEs: `${sessionRefPrefixEs}Fotografía en primerísimo plano macro extremo (extreme tight close-up a pocos centímetros) en formato ${activeRatio.id} de "${productName}": encuadre cerrado cortando los bordes del frasco con enfoque microscópico ultra nítido sobre el relieve del logo y las microgotas de rocío fresco en ${bottleRefEs}${accInSessionEs}, con ${ingredientsListEs} en primer plano. Iluminación a contraluz cálida, ${colorDirectiveEs}, lente macro 100mm f/2.8, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Extreme macro close-up photography (shot from inches away) in ${activeRatio.id} format of "${productName}": tightly cropped frame cutting bottle edges with razor-sharp microscopic focus on embossed logo relief and fresh micro-droplets on ${bottleRefEn}${accInSessionEn}, with ${ingredientsListEn} in immediate foreground. Warm backlit studio lighting, ${colorDirectiveEn}, 100mm f/2.8 macro lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-5-splash',
      badge: 'Foto 5 · Splash / Acción Rápida',
      title: 'Salpicadura o Polvo Congelado en el Aire',
      shotLabel: 'High-Speed · 90mm f/4',
      promptEs: `${sessionRefPrefixEs}Fotografía publicitaria de alta velocidad (1/4000s freeze motion) en ${activeRatio.promptEs} de "${productName}": en el centro, ${bottleRefEs}${presentationEs}${accInSessionEs} permanece firme mientras a su alrededor estalla en el aire una onda dinámica de ${ingredientsListEs} iluminada a contraluz con destellos dorados. Con ${colorDirectiveEs}, lente de estudio 90mm f/4, nitidez absoluta en cada partícula en suspensión, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}High-speed 1/4000s freeze-motion advertising photography in ${activeRatio.promptEn} of "${productName}": centered ${bottleRefEn}${presentationEn}${accInSessionEn} stands steady while a dynamic mid-air burst of ${ingredientsListEn} erupts around it backlit with golden sparkles. With ${colorDirectiveEn}, 90mm f/4 studio lens, crystal-clear focus on every suspended particle, 8k.${extraEn}`,
    },
    {
      id: 'shot-6-lifestyle',
      badge: 'Foto 6 · En Uso Real',
      title: 'Escena de Bienestar Cotidiano en una Mesa',
      shotLabel: 'Picado 45° · 50mm',
      promptEs: `${sessionRefPrefixEs}Fotografía editorial Lifestyle de bienestar en ${activeRatio.promptEs} para "${productName}", en plano diagonal de 45 grados: ${bottleRefEs}${presentationEs}${accInSessionEs} ${activeSurface.promptEs} junto a ${ingredientsListEs}, mientras unas manos cuidadas preparan el producto bajo el sol matutino. Atmósfera cálida, hogareña y confiable, ${colorDirectiveEs}, lente 50mm f/1.4, 8k.${extraEs}`,
      promptEn: `${sessionRefPrefixEn}Wellness editorial Lifestyle photography in ${activeRatio.promptEn} for "${productName}", 45-degree angle: ${bottleRefEn}${presentationEn}${accInSessionEn} ${activeSurface.promptEn} alongside ${ingredientsListEn}, while sunlit elegant hands interact with the product. Warm, trustworthy morning atmosphere, ${colorDirectiveEn}, 50mm f/1.4 lens, 8k.${extraEn}`,
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
                title="Limpiar todos los props e ingredientes para volver a una foto de catálogo limpia"
              >
                <RotateCcw className="w-3 h-3 text-amber-400" />
                <span>Escena Limpia</span>
              </button>

              {/* Supplement & Product Autocomplete Assistant */}
              <button
                type="button"
                onClick={() => setIsAssistantOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-black bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 hover:opacity-90 transition-all cursor-pointer shadow"
                title="Buscar o autocompletar beneficios clínicos, props y estilo publicitario"
              >
                <Wand2 className="w-3 h-3 text-slate-950" />
                <span>✨ Asistente de Suplementos</span>
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
                title="Estado de conexión con Supabase (clic para ver configuración)"
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
          {/* LEFT COLUMN (7 Cols): 3-STEP VISUAL CONFIGURATOR */}
          <div className="lg:col-span-7 space-y-5">
            {/* STEP 1: TU PRODUCTO Y ENVASE */}
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
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-2.5">
                  <Upload className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-amber-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Modo Frasco Real Activo (Blindaje de Color):
                    </p>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      El prompt ordena preservar al 100% la forma, tapa, sellos y colores reales de tu producto sin recolorearlo. Recuerda adjuntar la foto en Gemini usando el botón del clip 📎.
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
                    {allPackagings.slice(0, 6).map((pkg) => {
                      const isSelected = packagingId === pkg.id;
                      return (
                        <div key={pkg.id} className="relative group">
                          <button
                            type="button"
                            onClick={() => setPackagingId(pkg.id)}
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
                              setPackagingId(pkg.id);
                              setModalTab('packagings');
                              setIsLensModalOpen(true);
                            }}
                            className="absolute top-2 right-2 p-1 rounded-md bg-black/60 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-400/40 transition-all cursor-pointer z-10 shadow"
                          >
                            <Eye className="w-3 h-3" />
                          </button>
                          {pkg.isCustom && (
                            <button
                              type="button"
                              title={`Eliminar este empaque personalizado (${pkg.label})`}
                              onClick={(e) => handleDeleteCustomItem('packagings', pkg.id, e)}
                              className="absolute top-2 left-2 p-1 rounded-md bg-rose-500/80 hover:bg-rose-600 text-white transition-all cursor-pointer z-10 shadow"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
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
                    {!allPackagings.slice(0, 6).some((p) => p.id === packagingId) && (
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                        Seleccionado: {activePackaging.label}
                      </span>
                    )}
                  </div>

                  {showMorePackagings && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800/60">
                      {allPackagings.slice(6).map((pkg) => {
                        const isSelected = packagingId === pkg.id;
                        return (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => setPackagingId(pkg.id)}
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
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-amber-400" />
                      2. Presentación del Envase en la Foto:
                    </label>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">
                      {activePackagingPresentation.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {PACKAGING_PRESENTATIONS.map((pres) => {
                      const isSelected = packagingPresentation === pres.id;
                      return (
                        <button
                          key={pres.id}
                          type="button"
                          onClick={() => setPackagingPresentation(pres.id)}
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

                {/* Accompaniments & Props Selector */}
                <div
                  className={`p-3.5 rounded-xl border ${
                    isDark ? 'border-slate-800 bg-black/25' : 'border-stone-200 bg-stone-50'
                  } space-y-2.5`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      3. Acompañamientos Comerciales y Props (Toca para activar):
                    </label>
                    <div className="flex items-center gap-2">
                      {selectedAccompanimentIds.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedAccompanimentIds([])}
                          className="text-[10px] text-slate-400 hover:text-amber-400 underline cursor-pointer"
                        >
                          Deseleccionar todos ({selectedAccompanimentIds.length})
                        </button>
                      )}
                      <span className="text-[10px] text-amber-400 font-mono font-bold">
                        {selectedAccompanimentIds.length} activo(s)
                      </span>
                    </div>
                  </div>

                  {/* Form to quick-add custom accompaniment */}
                  <form onSubmit={handleQuickAddAccompaniment} className="flex gap-2">
                    <input
                      type="text"
                      value={newAccompanimentInput}
                      onChange={(e) => setNewAccompanimentInput(e.target.value)}
                      placeholder="Escribe un acompañamiento propio (ej: flores de caléndula, rama de canela, rodajas de naranja...)"
                      className={`flex-1 px-3 py-1.5 rounded-lg border text-xs font-medium placeholder:text-slate-500 ${
                        isDark
                          ? 'bg-black/50 border-slate-700 text-white focus:border-emerald-400'
                          : 'bg-white border-stone-300 text-stone-900 focus:border-emerald-600'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all shrink-0"
                    >
                      <Plus className="w-3 h-3" />
                      <span>+ Añadir Prop</span>
                    </button>
                  </form>

                  {/* Chips grid */}
                  <div className="flex flex-wrap gap-1.5">
                    {allAccompaniments.map((acc) => {
                      const isSelected = selectedAccompanimentIds.includes(acc.id);
                      return (
                        <button
                          key={acc.id}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedAccompanimentIds((prev) =>
                                prev.filter((id) => id !== acc.id)
                              );
                            } else {
                              setSelectedAccompanimentIds((prev) => [...prev, acc.id]);
                            }
                          }}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500/25 border-emerald-400 text-emerald-200 font-bold shadow-xs'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          {isSelected ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Plus className="w-3 h-3 text-slate-500" />
                          )}
                          <span>{acc.label}</span>
                          {acc.isCustom && (
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCustomItem('accompaniments', acc.id, e);
                              }}
                              title="Eliminar este acompañamiento propio"
                              className="ml-1 hover:text-rose-400 cursor-pointer"
                            >
                              ×
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: ¿QUÉ FOTO NECESITAS? (VISUAL CARDS) */}
            <div
              className={`rounded-2xl border p-5 space-y-3.5 ${
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
                    ¿Qué Estilo de Fotografía Necesitas?
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Selecciona con 1 clic</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {allPhotoTypes.slice(0, 6).map((pt) => {
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

            {/* STEP 3: LENTE CON MODAL VISUAL + FORMATO */}
            <div
              className={`rounded-2xl border p-5 space-y-4 ${
                isDark
                  ? 'bg-[#101814] border-emerald-900/60 shadow-lg'
                  : 'bg-white border-stone-200 shadow-md'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-cyan-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    Lente de Cámara y Formato de Imagen
                  </h3>
                </div>

                {/* THE STAR BUTTON: OPEN VISUAL LENS MODAL */}
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('lenses');
                    setIsLensModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver qué hace cada lente con ejemplos</span>
                </button>
              </div>

              {/* Lenses Quick Chips */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    Lente actual:{' '}
                    <strong className="text-amber-300">{activeLens.label}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setModalTab('lenses');
                      setIsLensModalOpen(true);
                    }}
                    className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <HelpCircle className="w-3 h-3" /> ¿Cuál me conviene?
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {allLenses.map((lens) => {
                    const isSelected = lensId === lens.id;
                    return (
                      <button
                        key={lens.id}
                        type="button"
                        onClick={() => handleSelectLens(lens.id)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 border-amber-400 shadow font-extrabold'
                            : isDark
                            ? 'bg-black/30 border-slate-800 text-slate-200 hover:border-slate-700'
                            : 'bg-stone-50 border-stone-200 text-stone-700'
                        }`}
                      >
                        <Aperture className="w-3 h-3" />
                        <span>{lens.label.split('(')[0].trim()}</span>
                      </button>
                    );
                  })}
                </div>

                {lensId === '100mm-macro' && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      <strong>Modo Macro 100mm sincronizado:</strong> Encuadre cerrado microscópico a corta distancia (enfoca gotas y textura de cerca; la IA no alejará la cámara).
                    </span>
                  </div>
                )}
              </div>

              {/* Formato / Proporción */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/50">
                <label className="text-[11px] font-bold text-slate-400 block">
                  ¿Para dónde es la foto? (Formato)
                </label>
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

              {/* Escenario y Entorno de Estudio */}
              <div className="space-y-2 pt-2.5 border-t border-slate-800/60">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Escenario y Entorno Comercial:
                  </label>
                  <span className="text-[10px] text-amber-400 font-mono font-bold truncate max-w-[200px]">
                    {activeSurface.label.split('(')[0].trim()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {allSurfaces.map((surf) => {
                    const isSelected = surfaceId === surf.id;
                    return (
                      <div key={surf.id} className="relative group">
                        <button
                          type="button"
                          onClick={() => setSurfaceId(surf.id)}
                          className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 h-full ${
                            isSelected
                              ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50 shadow font-bold'
                              : isDark
                              ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-amber-300 truncate max-w-[120px]">
                              {surf.badge || 'Escenario'}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                          </div>
                          <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-amber-200' : ''}`}>
                            {surf.label.split('(')[0].trim()}
                          </div>
                          <div className="text-[9.5px] text-slate-400 line-clamp-1 leading-tight">
                            {surf.promptEs.slice(0, 55)}...
                          </div>
                        </button>
                        {surf.isCustom && (
                          <button
                            type="button"
                            title="Eliminar este escenario personalizado"
                            onClick={(e) => handleDeleteCustomItem('surfaces', surf.id, e)}
                            className="absolute top-2 left-2 p-1 rounded-md bg-rose-500/80 hover:bg-rose-600 text-white transition-all cursor-pointer z-10 shadow"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Paleta Cromática y Atmósfera de Color */}
              <div className="space-y-2 pt-2.5 border-t border-slate-800/60">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    Paleta Cromática y Atmósfera de Color:
                  </label>
                  <span className="text-[10px] text-cyan-300 font-mono font-bold truncate max-w-[200px]">
                    {activeMood.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {allMoods.map((mood) => {
                    const isSelected = colorMoodId === mood.id;
                    return (
                      <div key={mood.id} className="relative group">
                        <button
                          type="button"
                          onClick={() => setColorMoodId(mood.id)}
                          className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 h-full ${
                            isSelected
                              ? 'bg-cyan-500/20 border-cyan-400 ring-2 ring-cyan-400/50 shadow font-bold'
                              : isDark
                              ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-cyan-300 truncate">
                              {mood.badge || 'Paleta'}
                            </span>
                            {isSelected && <Check className="w-3 h-3 text-cyan-400 shrink-0" />}
                          </div>
                          <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-cyan-200' : ''}`}>
                            {mood.label}
                          </div>
                        </button>
                        {mood.isCustom && (
                          <button
                            type="button"
                            title="Eliminar esta paleta propia"
                            onClick={(e) => handleDeleteCustomItem('moods', mood.id, e)}
                            className="absolute top-1.5 right-1.5 p-1 rounded-md bg-rose-500/80 hover:bg-rose-600 text-white transition-all cursor-pointer z-10 shadow"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dedicated Ingredients & Nature Section with Custom Input */}
              <div className="space-y-3 pt-3 border-t border-slate-800/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Ingredientes Naturales alrededor del Frasco
                    </span>
                  </div>
                  {selectedIngredientIds.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedIngredientIds([])}
                      className="text-[10px] text-slate-400 hover:text-amber-400 underline cursor-pointer"
                    >
                      Deseleccionar todos ({selectedIngredientIds.length})
                    </button>
                  )}
                </div>

                {/* Form to write and add custom ingredients */}
                <form
                  onSubmit={handleQuickAddIngredient}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={newIngredientInput}
                      onChange={(e) => setNewIngredientInput(e.target.value)}
                      placeholder="Escribe un ingrediente (ej: semillas de chía, miel líquida, manzanilla...)"
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs font-medium placeholder:text-slate-500 ${
                        isDark
                          ? 'bg-black/50 border-slate-700 text-white focus:border-emerald-400'
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-emerald-600'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow transition-all shrink-0"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Agregar Ingrediente</span>
                  </button>
                </form>

                {/* Active & Suggested Ingredient Chips */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 block font-semibold">
                    Toca para agregar o quitar de la foto:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {allIngredients.map((ing) => {
                      const isSelected = selectedIngredientIds.includes(ing.id);
                      return (
                        <div
                          key={ing.id}
                          onClick={() => toggleIngredient(ing.id)}
                          className={`px-2.5 py-1 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-emerald-300 border-emerald-400 shadow-xs'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-slate-300'
                          }`}
                        >
                          {isSelected ? (
                            <span className="text-emerald-400 font-bold">✓</span>
                          ) : (
                            <span className="text-slate-500">+</span>
                          )}
                          <span>{ing.label}</span>
                          {ing.isCustom && (
                            <button
                              type="button"
                              onClick={(e) => handleDeleteCustomItem('ingredients', ing.id, e)}
                              className="text-rose-400 hover:text-rose-200 ml-1 font-bold cursor-pointer"
                              title="Eliminar este ingrediente"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
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
                    TU PROMPT DE FOTO LISTO PARA GEMINI
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
                    Recuerda adjuntar la foto de tu frasco con el botón <strong>📎 en Gemini</strong> al enviar este prompt.
                  </span>
                </div>
              )}

              {/* Recipe Quick Badges */}
              <div className="flex flex-wrap gap-1 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  {activePhotoType.label}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                  {activeLens.label.split('(')[0]}
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
                          El prompt enfoca a escasos centímetros sobre la textura, logotipo y microgotas. Se han retirado medallones lejanos y mesas completas para garantizar que la IA nunca aleje el producto.
                        </div>
                      </div>
                    )}

                    {useReferencePhotoMode && (
                      <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-xs text-emerald-200 flex items-start gap-2 shadow-xs">
                        <Upload className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-emerald-300">Foto de Referencia Activa: </strong>
                          Recuerda adjuntar la foto de tu envase real en Gemini (icono clip 📎). El prompt ordena preservar exactamente la forma, tapa y diseño original de tu etiqueta.
                        </div>
                      </div>
                    )}

                    {/* Plain Language Explanation of what will be generated */}
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed">
                      ✨ <strong>Lo que generará:</strong> Una foto de estudio con{' '}
                      <strong className="text-white">{productName}</strong> al centro, con{' '}
                      <strong className="text-white">{activeLens.label.split('(')[0]}</strong>,{' '}
                      {activePhotoType.shortDesc.toLowerCase()}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-copy')
                    }
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    {copiedKey === 'main-copy' ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>¡Prompt Copiado! Pégalo en Gemini</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Prompt para Gemini</span>
                      </>
                    )}
                  </button>
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
          setPackagingId(pkgId);
          if (pres) setPackagingPresentation(pres);
        }}
      />

      {/* Supabase Connection & SQL Setup Modal */}
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

            {/* Status Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase">URL del Proyecto:</span>
                <div className="font-mono text-emerald-400 truncate">
                  https://vqezqrqlxxdrldqldphc.supabase.co
                </div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase">
                  Estado de la Base de Datos:
                </span>
                <div className="font-bold flex items-center gap-1.5">
                  {supabaseStatus === 'connected' ? (
                    <span className="text-emerald-400">🟢 Conectado y Listo</span>
                  ) : supabaseStatus === 'table_missing' ? (
                    <span className="text-amber-400">🟡 Requiere crear la tabla (ver script abajo)</span>
                  ) : (
                    <span className="text-slate-300">⚪ Conectando / Local</span>
                  )}
                </div>
              </div>
            </div>

            {/* Instruction & SQL box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <FileCode className="w-4 h-4 text-emerald-400" />
                  Script SQL para tu panel de Supabase:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const sql = `-- Tabla de items del estudio
create table if not exists public.studio_custom_items (
  id text primary key,
  category text not null,
  label text not null,
  badge text default 'Propio',
  short_desc text,
  prompt_es text not null,
  prompt_en text not null,
  is_custom boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.studio_custom_items enable row level security;

create policy "Permitir lectura publica" on public.studio_custom_items for select using (true);
create policy "Permitir insercion publica" on public.studio_custom_items for insert with check (true);
create policy "Permitir eliminacion publica" on public.studio_custom_items for delete using (true);`;
                    navigator.clipboard.writeText(sql);
                    copyText(sql, 'sql-copy');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                >
                  {copiedKey === 'sql-copy' ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedKey === 'sql-copy' ? '¡SQL Copiado!' : 'Copiar SQL'}</span>
                </button>
              </div>

              <pre className="p-3.5 rounded-xl bg-black border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-48 leading-relaxed">
{`-- Ejecuta esto en el SQL Editor de tu Supabase:
create table if not exists public.studio_custom_items (
  id text primary key,
  category text not null,
  label text not null,
  badge text default 'Propio',
  short_desc text,
  prompt_es text not null,
  prompt_en text not null,
  is_custom boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.studio_custom_items enable row level security;
create policy "Permitir lectura publica" on public.studio_custom_items for select using (true);
create policy "Permitir insercion publica" on public.studio_custom_items for insert with check (true);
create policy "Permitir eliminacion publica" on public.studio_custom_items for delete using (true);`}
              </pre>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
              <a
                href="https://supabase.com/dashboard/project/vqezqrqlxxdrldqldphc/sql"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all shadow"
              >
                <span>Abrir SQL Editor en Supabase</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  checkSupabaseStatus().then((s) => setSupabaseStatus(s));
                  setIsSupabaseModalOpen(false);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
              >
                Listo / Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

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
                      Autocompletado Flow
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Selecciona un producto o escribe en el buscador para autocompletar beneficios clínicos, props y estilo
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
              <span>💡 Ideal para Flow / Nanobanana Pro: genera composiciones estructuradas con medallones 3D e información clínica.</span>
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
    </section>
  );
};
