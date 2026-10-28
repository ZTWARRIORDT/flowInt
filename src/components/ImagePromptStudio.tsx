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
  COLOR_MOODS,
  ASPECT_RATIOS,
  STUDIO_QUICK_PRESETS,
  StudioOptionItem,
  PhotoTypeOption,
  ProductQuickPreset,
} from '../data/imageStudioData';
import { LensVisualModal } from './LensVisualModal';

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
  const [useReferencePhotoMode, setUseReferencePhotoMode] = useState<boolean>(false);
  const [extraCustomNotes, setExtraCustomNotes] = useState<string>('');

  // UI State for Output, Modal & Add-Custom forms
  const [isLensModalOpen, setIsLensModalOpen] = useState<boolean>(false);
  const [showMorePackagings, setShowMorePackagings] = useState<boolean>(false);
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [outputTab, setOutputTab] = useState<'single' | 'session6'>('single');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeAddCategory, setActiveAddCategory] = useState<CustomCategoryKey | null>(null);
  const [newCustomLabel, setNewCustomLabel] = useState<string>('');
  const [newCustomPrompt, setNewCustomPrompt] = useState<string>('');
  const [newIngredientInput, setNewIngredientInput] = useState<string>('');

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
  };

  // Merged lists (Default + User Custom)
  const allPhotoTypes = [...PHOTO_TYPES, ...customItems.photoTypes];
  const allShots = [...CAMERA_SHOTS, ...customItems.shots];
  const allLenses = [...CAMERA_LENSES, ...customItems.lenses];
  const allLightings = [...LIGHTING_STYLES, ...customItems.lightings];
  const allPackagings = [...PACKAGING_OPTIONS, ...customItems.packagings];
  const allSurfaces = [...SURFACE_OPTIONS, ...customItems.surfaces];
  const allIngredients = [...INGREDIENT_EFFECTS, ...customItems.ingredients];
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

  const refInstructionEs = useReferencePhotoMode
    ? 'Tomando como referencia exacta el envase de la imagen subida (mantener idéntica la forma del frasco, colores y diseño original de la etiqueta sin alterar ni deformar sus logos): '
    : '';

  const refInstructionEn = useReferencePhotoMode
    ? 'Using the uploaded product image as the exact reference (preserve the identical bottle shape, colors, and original label design without altering or warping its logos): '
    : '';

  const extraEs = extraCustomNotes.trim() ? ` Detalle adicional: ${extraCustomNotes.trim()}.` : '';
  const extraEn = extraCustomNotes.trim() ? ` Additional detail: ${extraCustomNotes.trim()}.` : '';

  // Main Prompt
  const mainPromptEs = `${refInstructionEs}${activePhotoType.promptEs} en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}. En el centro destaca ${activePackaging.promptEs}${presentationEs}, ${activeSurface.promptEs}. Alrededor del envase se aprecian ${ingredientsListEs}. ${getMedallionFragmentEs(medallionStyle)} Con ${activeLighting.promptEs}, ${activeMood.promptEs}, ${activeLens.promptEs}. Fotografía comercial hiperrealista 8k, calidad de estudio publicitario.${extraEs}`;

  const mainPromptEn = `${refInstructionEn}${activePhotoType.promptEn} in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}. Centered is ${activePackaging.promptEn}${presentationEn}, ${activeSurface.promptEn}. Surrounding the container are ${ingredientsListEn}. ${getMedallionFragmentEn(medallionStyle)} Featuring ${activeLighting.promptEn}, ${activeMood.promptEn}, ${activeLens.promptEn}. Hyper-realistic 8k commercial product photography, advertising studio quality.${extraEn}`;

  // 6-Shot Complete Photo Session
  const session6Pack = [
    {
      id: 'shot-1-poster',
      badge: 'Foto 1 · Póster de Beneficios',
      title: 'Póster Comercial Simétrico con 4 Medallones 3D',
      shotLabel: 'Eye-Level 0° · 85mm Bokeh',
      promptEs: `${refInstructionEs}Fotografía comercial publicitaria tipo póster en ${activeRatio.promptEs} de "${productName}", en plano frontal eye-level perfectamente simétrico. En el centro, ${activePackaging.promptEs}${presentationEs}, ${activeSurface.promptEs}, rodeado de ${ingredientsListEs}. ${getMedallionFragmentEs('gold-3d')} Con ${activeLighting.promptEs} y ${activeMood.promptEs}, lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Commercial advertising poster photography in ${activeRatio.promptEn} of "${productName}", straight-on symmetrical eye-level shot. Centered is ${activePackaging.promptEn}${presentationEn}, ${activeSurface.promptEn}, surrounded by ${ingredientsListEn}. ${getMedallionFragmentEn('gold-3d')} With ${activeLighting.promptEn} and ${activeMood.promptEn}, 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-2-hero',
      badge: 'Foto 2 · Catálogo Limpio',
      title: 'Hero Shot Imponente (Sin Medallones)',
      shotLabel: 'Contrapicado 15° · 85mm',
      promptEs: `${refInstructionEs}Fotografía Hero Shot comercial limpia en ${activeRatio.promptEs} de "${productName}", en plano contrapicado heroico a 15 grados que engrandece la presencia del envase. Presenta ${activePackaging.promptEs}${presentationEs}, ${activeSurface.promptEs}, acompañado de ${ingredientsListEs}. Sin ningún texto flotante ni medallones externos. Con ${activeLighting.promptEs}, lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Clean commercial Hero Shot photography in ${activeRatio.promptEn} of "${productName}", shot from a 15-degree low-angle heroic perspective. Featuring ${activePackaging.promptEn}${presentationEn}, ${activeSurface.promptEn}, accompanied by ${ingredientsListEn}. Strictly no floating text or external medallions. With ${activeLighting.promptEn}, 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-3-flatlay',
      badge: 'Foto 3 · Vista Cenital 90°',
      title: 'Flat Lay de Ingredientes desde Arriba',
      shotLabel: 'Cenital Top-Down · 50mm',
      promptEs: `${refInstructionEs}Fotografía Flat Lay cenital en ángulo perpendicular de 90 grados desde arriba en ${activeRatio.promptEs} de "${productName}": ${activePackaging.promptEs}${presentationEs} reposando en el centro de la composición ${activeSurface.promptEs}, rodeado en círculo armónico por sus ingredientes naturales puros (${ingredientsListEs}). Iluminación suave de ventana con sombras orgánicas, ${activeMood.promptEs}, lente 50mm f/1.4 editorial, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Overhead 90-degree perpendicular top-down Flat Lay photography in ${activeRatio.promptEn} of "${productName}": ${activePackaging.promptEn}${presentationEn} resting at the center ${activeSurface.promptEn}, artfully encircled by its raw natural ingredients (${ingredientsListEn}). Soft window daylight with organic shadows, ${activeMood.promptEn}, 50mm f/1.4 editorial lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-4-macro',
      badge: 'Foto 4 · Primer Plano Sensorial',
      title: 'Macro de Gotas, Textura y Relieve Dorado',
      shotLabel: 'Macro Extremo · 100mm f/2.8',
      promptEs: `${refInstructionEs}Fotografía en primerísimo plano macro extremo (extreme close-up) en ${activeRatio.promptEs} de "${productName}": enfoque microscópico ultra nítido sobre el relieve dorado y las microgotas de rocío fresco en ${activePackaging.promptEs}, con ${ingredientsListEs} en primer plano. Iluminación a contraluz cálida, lente macro 100mm f/2.8, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Extreme macro close-up photography in ${activeRatio.promptEn} of "${productName}": razor-sharp microscopic focus on the metallic gold relief and fresh micro-droplets on ${activePackaging.promptEn}, with ${ingredientsListEn} in the immediate foreground. Warm backlit studio lighting, 100mm f/2.8 macro lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-5-splash',
      badge: 'Foto 5 · Splash / Acción Rápida',
      title: 'Salpicadura o Polvo Congelado en el Aire',
      shotLabel: 'High-Speed · 90mm f/4',
      promptEs: `${refInstructionEs}Fotografía publicitaria de alta velocidad (1/4000s freeze motion) en ${activeRatio.promptEs} de "${productName}": en el centro, ${activePackaging.promptEs}${presentationEs} permanece firme mientras a su alrededor estalla en el aire una onda dinámica de ${ingredientsListEs} iluminada a contraluz con destellos dorados. Lente de estudio 90mm f/4, nitidez absoluta en cada partícula en suspensión, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}High-speed 1/4000s freeze-motion advertising photography in ${activeRatio.promptEn} of "${productName}": centered ${activePackaging.promptEn}${presentationEn} stands steady while a dynamic mid-air burst of ${ingredientsListEn} erupts around it backlit with golden sparkles. 90mm f/4 studio lens, crystal-clear focus on every suspended particle, 8k.${extraEn}`,
    },
    {
      id: 'shot-6-lifestyle',
      badge: 'Foto 6 · En Uso Real',
      title: 'Escena de Bienestar Cotidiano en una Mesa',
      shotLabel: 'Picado 45° · 50mm',
      promptEs: `${refInstructionEs}Fotografía editorial Lifestyle de bienestar en ${activeRatio.promptEs} para "${productName}", en plano diagonal de 45 grados: ${activePackaging.promptEs}${presentationEs} ${activeSurface.promptEs} junto a ${ingredientsListEs}, mientras unas manos cuidadas preparan el producto bajo el sol matutino. Atmósfera cálida, hogareña y confiable, lente 50mm f/1.4, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Wellness editorial Lifestyle photography in ${activeRatio.promptEn} for "${productName}", 45-degree angle: ${activePackaging.promptEn}${presentationEn} ${activeSurface.promptEn} alongside ${ingredientsListEn}, while sunlit elegant hands interact with the product. Warm, trustworthy morning atmosphere, 50mm f/1.4 lens, 8k.${extraEn}`,
    },
  ];

  return (
    <section id="estudio-imagenes" className="py-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Header + Quick Product Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-400" /> Creador Visual de Fotos Comerciales
            </div>
            <h2
              className={`text-2xl md:text-3xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Configura tu Fotografía de Producto en 3 Pasos
            </h2>
          </div>

          {/* Quick Product Presets */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-1">Ejemplos:</span>
            {STUDIO_QUICK_PRESETS.map((preset) => {
              const active = productName === preset.productName;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    active
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-extrabold'
                      : isDark
                      ? 'bg-[#121B17] text-slate-300 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-500/50'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-emerald-400 mb-1">
                    Nombre del Producto
                  </label>
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
                  <label className="block text-[11px] font-bold text-amber-400 mb-1">
                    Frase corta de beneficio (Titular)
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
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
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-emerald-400" />
                      1. Elige el Formato de Envase o Empaque:
                    </label>
                    <span className="text-[10px] text-amber-300 font-semibold">
                      {activePackaging.label}
                    </span>
                  </div>

                  {/* Primary 6 formats grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {allPackagings.slice(0, 6).map((pkg) => {
                      const isSelected = packagingId === pkg.id;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setPackagingId(pkg.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 ${
                            isSelected
                              ? 'bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border-emerald-400 ring-2 ring-emerald-400/50 shadow-md font-bold'
                              : isDark
                              ? 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="p-1 rounded-md bg-white/5 border border-white/10">
                              {getPackagingIcon(pkg.id)}
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300">
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

                {/* Packaging Presentation Mode (Solo / Con Caja / Con Contenido) */}
                <div
                  className={`p-3 rounded-xl border ${
                    isDark ? 'border-slate-800 bg-black/25' : 'border-stone-200 bg-stone-50'
                  } space-y-2`}
                >
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-amber-400" />
                      2. Acompañamiento del Envase en la Foto:
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
                  onClick={() => setIsLensModalOpen(true)}
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
                    onClick={() => setIsLensModalOpen(true)}
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
                        onClick={() => setLensId(lens.id)}
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

                  {/* Plain Language Explanation of what will be generated */}
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed">
                    ✨ <strong>Lo que generará:</strong> Una foto de estudio con{' '}
                    <strong className="text-white">{productName}</strong> al centro, con{' '}
                    <strong className="text-white">{activeLens.label.split('(')[0]}</strong>,{' '}
                    {activePhotoType.shortDesc.toLowerCase()}
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

      {/* Interactive Visual Lens Modal */}
      <LensVisualModal
        isOpen={isLensModalOpen}
        onClose={() => setIsLensModalOpen(false)}
        selectedLensId={lensId}
        onSelectLens={(newLensId) => setLensId(newLensId)}
        isDark={isDark}
      />
    </section>
  );
};
