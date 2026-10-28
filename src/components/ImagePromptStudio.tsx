import React, { useState, useEffect } from 'react';
import {
  Camera,
  Sparkles,
  Copy,
  Check,
  Plus,
  Trash2,
  Layers,
  Sun,
  Aperture,
  Package,
  Leaf,
  Award,
  Wand2,
  ArrowDown,
  RotateCcw,
  Eye,
  Grid,
  CheckCircle2,
  Sliders,
  Image as ImageIcon,
  Maximize2,
  Palette,
  Upload,
} from 'lucide-react';
import {
  PHOTO_TYPES,
  CAMERA_SHOTS,
  CAMERA_LENSES,
  LIGHTING_STYLES,
  PACKAGING_OPTIONS,
  SURFACE_OPTIONS,
  INGREDIENT_EFFECTS,
  COLOR_MOODS,
  ASPECT_RATIOS,
  STUDIO_QUICK_PRESETS,
  StudioOptionItem,
  PhotoTypeOption,
  ProductQuickPreset,
} from '../data/imageStudioData';

export interface SyncedProductPayload {
  productName: string;
  headline: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  dosage: string;
  packagingPromptEs: string;
  environmentPromptEs: string;
  aspectRatio: '1:1 Estudio' | '9:16 Vertical' | '16:9 Horizontal';
  voiceIndex?: number;
  musicIndex?: number;
  imagePromptEs?: string;
  imagePromptEn?: string;
}

interface Props {
  isDark: boolean;
  externalPresetId?: string | null;
  onSendToVideoBuilder: (payload: SyncedProductPayload) => void;
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

const STORAGE_KEY = 'flow_natural_custom_studio_items_v1';

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

export const ImagePromptStudio: React.FC<Props> = ({
  isDark,
  externalPresetId,
  onSendToVideoBuilder,
}) => {
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
  const [dosage, setDosage] = useState(STUDIO_QUICK_PRESETS[0].dosage);

  // Photography Configuration State
  const [photoTypeId, setPhotoTypeId] = useState<string>(STUDIO_QUICK_PRESETS[0].photoTypeId);
  const [shotId, setShotId] = useState<string>(STUDIO_QUICK_PRESETS[0].shotId);
  const [lensId, setLensId] = useState<string>(STUDIO_QUICK_PRESETS[0].lensId);
  const [lightingId, setLightingId] = useState<string>(STUDIO_QUICK_PRESETS[0].lightingId);
  const [packagingId, setPackagingId] = useState<string>(STUDIO_QUICK_PRESETS[0].packagingId);
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
  const [autoRecommendOptics, setAutoRecommendOptics] = useState<boolean>(true);
  const [extraCustomNotes, setExtraCustomNotes] = useState<string>('');
  const [voiceIndex, setVoiceIndex] = useState<number>(0);
  const [musicIndex, setMusicIndex] = useState<number>(0);

  // UI State for Output & Add-Custom forms
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [outputTab, setOutputTab] = useState<'single' | 'session6' | 'anatomy'>('single');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeAddCategory, setActiveAddCategory] = useState<CustomCategoryKey | null>(null);
  const [newCustomLabel, setNewCustomLabel] = useState<string>('');
  const [newCustomPrompt, setNewCustomPrompt] = useState<string>('');
  const [activeStepFilter, setActiveStepFilter] = useState<
    'all' | 'tipo-plano' | 'luz-color' | 'envase-escenario' | 'beneficios'
  >('all');

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
    setDosage(preset.dosage);
    setPhotoTypeId(preset.photoTypeId);
    setShotId(preset.shotId);
    setLensId(preset.lensId);
    setLightingId(preset.lightingId);
    setPackagingId(preset.packagingId);
    setSurfaceId(preset.surfaceId);
    setSelectedIngredientIds(preset.ingredientIds);
    setColorMoodId(preset.colorMoodId);
    setAspectRatio(preset.aspectRatio);
    setVoiceIndex(preset.voiceIndex);
    setMusicIndex(preset.musicIndex);
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
    if (autoRecommendOptics) {
      if (pt.recommendedShotId) setShotId(pt.recommendedShotId);
      if (pt.recommendedLensId) setLensId(pt.recommendedLensId);
      if (pt.recommendedLightingId) setLightingId(pt.recommendedLightingId);
      setMedallionStyle(pt.includeMedallionsByDefault ? 'gold-3d' : 'none');
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
        badge: 'Personalizado',
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

  // Resolve active items
  const activePhotoType = allPhotoTypes.find((x) => x.id === photoTypeId) || allPhotoTypes[0];
  const activeShot = allShots.find((x) => x.id === shotId) || allShots[0];
  const activeLens = allLenses.find((x) => x.id === lensId) || allLenses[0];
  const activeLighting = allLightings.find((x) => x.id === lightingId) || allLightings[0];
  const activePackaging = allPackagings.find((x) => x.id === packagingId) || allPackagings[0];
  const activeSurface = allSurfaces.find((x) => x.id === surfaceId) || allSurfaces[0];
  const activeMood = allMoods.find((x) => x.id === colorMoodId) || allMoods[0];
  const activeRatio = ASPECT_RATIOS.find((x) => x.id === aspectRatio) || ASPECT_RATIOS[0];
  const activeIngredients = allIngredients.filter((x) => selectedIngredientIds.includes(x.id));

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

  // Main Custom Image Prompt
  const mainPromptEs = `${refInstructionEs}${activePhotoType.promptEs} en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}. En el centro destaca ${activePackaging.promptEs}, ${activeSurface.promptEs}. Alrededor del envase se aprecian ${ingredientsListEs}. ${getMedallionFragmentEs(medallionStyle)} Con ${activeLighting.promptEs}, ${activeMood.promptEs}, ${activeLens.promptEs}. Fotografía comercial hiperrealista 8k, calidad de estudio publicitario.${extraEs}`;

  const mainPromptEn = `${refInstructionEn}${activePhotoType.promptEn} in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}. Centered is ${activePackaging.promptEn}, ${activeSurface.promptEn}. Surrounding the container are ${ingredientsListEn}. ${getMedallionFragmentEn(medallionStyle)} Featuring ${activeLighting.promptEn}, ${activeMood.promptEn}, ${activeLens.promptEn}. Hyper-realistic 8k commercial product photography, advertising studio quality.${extraEn}`;

  // 6-Shot Complete Photo Session Generator for the same product
  const session6Pack = [
    {
      id: 'shot-1-poster',
      badge: 'Foto 1 · Póster Beneficios (First Frame Flow)',
      title: 'Póster Comercial Simétrico con 4 Medallones Dorados 3D',
      shotLabel: 'Eye-Level 0° · 85mm f/1.8',
      promptEs: `${refInstructionEs}Fotografía comercial publicitaria tipo póster en ${activeRatio.promptEs} de "${productName}", en plano frontal eye-level perfectamente simétrico. En el centro, ${activePackaging.promptEs}, ${activeSurface.promptEs}, rodeado de ${ingredientsListEs}. ${getMedallionFragmentEs('gold-3d')} Con ${activeLighting.promptEs} y ${activeMood.promptEs}, lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Commercial advertising poster photography in ${activeRatio.promptEn} of "${productName}", straight-on symmetrical eye-level shot. Centered is ${activePackaging.promptEn}, ${activeSurface.promptEn}, surrounded by ${ingredientsListEn}. ${getMedallionFragmentEn('gold-3d')} With ${activeLighting.promptEn} and ${activeMood.promptEn}, 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-2-hero',
      badge: 'Foto 2 · Hero Shot E-Commerce',
      title: 'Plano Contrapicado Heroico Limpio (Sin Medallones)',
      shotLabel: 'Contrapicado 15° · 85mm f/1.8',
      promptEs: `${refInstructionEs}Fotografía Hero Shot comercial limpia en ${activeRatio.promptEs} de "${productName}", en plano contrapicado heroico a 15 grados que engrandece la presencia del envase. Presenta ${activePackaging.promptEs}, ${activeSurface.promptEs}, acompañado de ${ingredientsListEs}. Sin ningún texto flotante ni medallones externos, destacando únicamente el relieve del envase. Con ${activeLighting.promptEs}, lente 85mm f/1.8, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Clean commercial Hero Shot photography in ${activeRatio.promptEn} of "${productName}", shot from a 15-degree low-angle heroic perspective giving the container monumental presence. Featuring ${activePackaging.promptEn}, ${activeSurface.promptEn}, accompanied by ${ingredientsListEn}. Strictly no floating text or external medallions. With ${activeLighting.promptEn}, 85mm f/1.8 lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-3-flatlay',
      badge: 'Foto 3 · Bodegón Cenital 90°',
      title: 'Flat Lay Cenital de Ingredientes Puros',
      shotLabel: 'Cenital 90° Top-Down · 50mm f/1.4',
      promptEs: `${refInstructionEs}Fotografía Flat Lay cenital en ángulo perpendicular de 90 grados desde arriba en ${activeRatio.promptEs} de "${productName}": ${activePackaging.promptEs} reposando en el centro de la composición ${activeSurface.promptEs}, rodeado en círculo armónico por sus ingredientes naturales puros (${ingredientsListEs}). Iluminación suave de ventana con sombras orgánicas, ${activeMood.promptEs}, lente 50mm f/1.4 editorial, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Overhead 90-degree perpendicular top-down Flat Lay photography in ${activeRatio.promptEn} of "${productName}": ${activePackaging.promptEn} resting at the center ${activeSurface.promptEn}, artfully encircled by its raw natural ingredients (${ingredientsListEn}). Soft window daylight with organic shadows, ${activeMood.promptEn}, 50mm f/1.4 editorial lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-4-macro',
      badge: 'Foto 4 · Macro Sensorial',
      title: 'Plano Macro Extremo de Textura, Rocío y Pureza',
      shotLabel: 'Macro Extremo · 100mm f/2.8',
      promptEs: `${refInstructionEs}Fotografía en primerísimo plano macro extremo (extreme close-up) en ${activeRatio.promptEs} de "${productName}": enfoque microscópico ultra nítido sobre el relieve dorado y las microgotas de rocío fresco en ${activePackaging.promptEs}, con ${ingredientsListEs} en primer plano mostrando toda su textura orgánica pura. Iluminación a contraluz cálida, lente macro 100mm f/2.8, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Extreme macro close-up photography in ${activeRatio.promptEn} of "${productName}": razor-sharp microscopic focus on the metallic gold relief and fresh micro-droplets on ${activePackaging.promptEn}, with ${ingredientsListEn} in the immediate foreground showcasing pure organic texture. Warm backlit studio lighting, 100mm f/2.8 macro lens, 8k.${extraEn}`,
    },
    {
      id: 'shot-5-splash',
      badge: 'Foto 5 · Acción Alta Velocidad',
      title: 'Splash / Explosión Botánica Congelada a 1/4000s',
      shotLabel: 'High-Speed Sync · 90mm f/4',
      promptEs: `${refInstructionEs}Fotografía publicitaria de alta velocidad (1/4000s freeze motion) en ${activeRatio.promptEs} de "${productName}": en el centro, ${activePackaging.promptEs} permanece firme mientras a su alrededor estalla en el aire una onda dinámica de ${ingredientsListEs} iluminada a contraluz con destellos dorados. Lente de estudio 90mm f/4, nitidez absoluta en cada partícula en suspensión, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}High-speed 1/4000s freeze-motion advertising photography in ${activeRatio.promptEn} of "${productName}": centered ${activePackaging.promptEn} stands steady while a dynamic mid-air burst of ${ingredientsListEn} erupts around it backlit with golden sparkles. 90mm f/4 studio lens, crystal-clear focus on every suspended particle, 8k.${extraEn}`,
    },
    {
      id: 'shot-6-lifestyle',
      badge: 'Foto 6 · Lifestyle en Uso',
      title: 'Escena Editorial de Rutina y Bienestar Real',
      shotLabel: 'Picado Editorial 45° · 50mm f/1.4',
      promptEs: `${refInstructionEs}Fotografía editorial Lifestyle de bienestar en ${activeRatio.promptEs} para "${productName}", en plano diagonal de 45 grados: ${activePackaging.promptEs} ${activeSurface.promptEs} junto a ${ingredientsListEs}, mientras unas manos cuidadas e iluminadas por el sol matutino preparan la dosis diaria (${dosage.toLowerCase()}). Atmósfera cálida, hogareña y confiable, lente 50mm f/1.4, 8k.${extraEs}`,
      promptEn: `${refInstructionEn}Wellness editorial Lifestyle photography in ${activeRatio.promptEn} for "${productName}", 45-degree angle: ${activePackaging.promptEn} ${activeSurface.promptEn} alongside ${ingredientsListEn}, while sunlit elegant hands prepare the daily dose (${dosage.toLowerCase()}). Warm, trustworthy morning atmosphere, 50mm f/1.4 lens, 8k.${extraEn}`,
    },
  ];

  const handleSendToVideo = () => {
    const mappedRatio: '1:1 Estudio' | '9:16 Vertical' | '16:9 Horizontal' =
      aspectRatio === '9:16'
        ? '9:16 Vertical'
        : aspectRatio === '16:9'
        ? '16:9 Horizontal'
        : '1:1 Estudio';

    onSendToVideoBuilder({
      productName,
      headline,
      benefit1,
      benefit2,
      benefit3,
      benefit4,
      dosage,
      packagingPromptEs: activePackaging.promptEs,
      environmentPromptEs: ingredientsListEs,
      aspectRatio: mappedRatio,
      voiceIndex,
      musicIndex,
      imagePromptEs: mainPromptEs,
      imagePromptEn: mainPromptEn,
    });

    const el = document.getElementById('constructor-prompts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderAddCustomModalInline = (category: CustomCategoryKey, title: string, placeholderPrompt: string) => {
    if (activeAddCategory !== category) {
      return (
        <button
          type="button"
          onClick={() => {
            setActiveAddCategory(category);
            setNewCustomLabel('');
            setNewCustomPrompt('');
          }}
          className={`px-3 py-2 rounded-xl border border-dashed text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            isDark
              ? 'border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400'
              : 'border-emerald-600/50 text-emerald-800 hover:bg-emerald-50'
          }`}
        >
          <Plus className="w-3.5 h-3.5" /> + Añadir {title} propio
        </button>
      );
    }

    return (
      <div
        className={`col-span-full p-4 rounded-2xl border space-y-3 ${
          isDark
            ? 'bg-emerald-950/30 border-emerald-500/50'
            : 'bg-emerald-50/80 border-emerald-300'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5" /> Nuevo {title} Personalizado
          </span>
          <button
            type="button"
            onClick={() => setActiveAddCategory(null)}
            className="text-xs text-slate-400 hover:text-white cursor-pointer"
          >
            Cancelar
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <input
            type="text"
            value={newCustomLabel}
            onChange={(e) => setNewCustomLabel(e.target.value)}
            placeholder={`Nombre corto (ej: Mi ${title})`}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold ${
              isDark
                ? 'bg-black/60 border-slate-700 text-white'
                : 'bg-white border-stone-300 text-stone-900'
            }`}
          />
          <input
            type="text"
            value={newCustomPrompt}
            onChange={(e) => setNewCustomPrompt(e.target.value)}
            placeholder={placeholderPrompt}
            className={`px-3 py-2 rounded-xl border text-xs ${
              isDark
                ? 'bg-black/60 border-slate-700 text-white'
                : 'bg-white border-stone-300 text-stone-900'
            }`}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => handleAddCustomItem(category)}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer shadow"
          >
            <Check className="w-3.5 h-3.5" /> Guardar y Seleccionar
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="estudio-imagenes" className="py-12 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header + Quick Product Templates */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Camera className="w-3.5 h-3.5 text-amber-400" /> Estudio Principal · Creador de Prompts Según tu Necesidad de Imagen
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Diseña tu Fotografía Comercial por Planos, Tipos de Foto y Escenarios
            </h2>
            <p className={`text-sm md:text-base max-w-3xl ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Elige el <strong>tipo de fotografía</strong> que necesitas, ajusta el <strong>plano/ángulo</strong>, la <strong>óptica</strong>, la <strong>iluminación</strong>, el <strong>envase</strong> y los <strong>ingredientes</strong>, o añade tus propias opciones con <span className="text-emerald-400 font-bold">+ Añadir propio</span>.
            </p>
          </div>

          {/* Quick Product Presets */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mr-1">
              Cargar producto:
            </span>
            {STUDIO_QUICK_PRESETS.map((preset) => {
              const active = productName === preset.productName;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 border-transparent shadow-md'
                      : isDark
                      ? 'bg-[#121B17] text-slate-200 border-emerald-900/70 hover:border-amber-400'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-emerald-600'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Filter Navigation Bar for Quick Jumping */}
        <div
          className={`p-2 rounded-2xl border flex flex-wrap items-center justify-between gap-2 ${
            isDark ? 'bg-[#0E1612] border-emerald-900/50' : 'bg-stone-100 border-stone-200'
          }`}
        >
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'Ver Todo el Estudio Completo', icon: Grid },
              { id: 'tipo-plano', label: '1. Tipo de Foto, Plano y Lente', icon: Camera },
              { id: 'luz-color', label: '2. Iluminación y Atmósfera', icon: Sun },
              { id: 'envase-escenario', label: '3. Envase, Base e Ingredientes', icon: Package },
              { id: 'beneficios', label: '4. Producto y Medallones 3D', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeStepFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveStepFilter(
                      tab.id as 'all' | 'tipo-plano' | 'luz-color' | 'envase-escenario' | 'beneficios'
                    )
                  }
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : isDark
                      ? 'text-slate-300 hover:bg-white/5'
                      : 'text-stone-700 hover:bg-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <label className="flex items-center gap-2 px-3 py-1.5 text-xs text-amber-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={autoRecommendOptics}
              onChange={(e) => setAutoRecommendOptics(e.target.checked)}
              className="rounded accent-emerald-500 cursor-pointer"
            />
            <span>Sugerir plano y lente al cambiar tipo de foto</span>
          </label>
        </div>

        {/* Main Studio 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (7 Cols): VISUAL PHOTOGRAPHY CONFIGURATOR */}
          <div className="lg:col-span-7 space-y-6">
            {/* BLOCK 0: QUICK PRODUCT IDENTITY & 4 BENEFITS */}
            {(activeStepFilter === 'all' || activeStepFilter === 'beneficios') && (
              <div
                className={`rounded-3xl border p-6 space-y-4 ${
                  isDark
                    ? 'bg-[#101814] border-emerald-900/60 shadow-xl'
                    : 'bg-white border-stone-200 shadow-md'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      A
                    </span>
                    <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      Identidad del Producto, Medallones 3D y Foto de Referencia
                    </h3>
                  </div>

                  {/* Reference Photo Mode Toggle */}
                  <button
                    type="button"
                    onClick={() => setUseReferencePhotoMode(!useReferencePhotoMode)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
                      useReferencePhotoMode
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                        : isDark
                        ? 'bg-black/40 border-slate-700 text-slate-300 hover:border-amber-400'
                        : 'bg-stone-100 border-stone-300 text-stone-700'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    {useReferencePhotoMode
                      ? 'Modo "Subir mi Frasco Real" Activo'
                      : '¿Subirás foto de tu frasco real?'}
                  </button>
                </div>

                {useReferencePhotoMode && (
                  <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-xs text-amber-200 leading-relaxed">
                    <strong>Modo Foto de Referencia activado:</strong> El prompt incluirá la orden de respetar al 100% la forma, colores y etiqueta de la foto del envase que subas a Gemini o Flow.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Nombre del Producto Natural
                    </label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs font-bold ${
                        isDark
                          ? 'bg-black/50 border-slate-700 text-white'
                          : 'bg-stone-50 border-stone-300 text-stone-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Promesa / Titular Principal
                    </label>
                    <input
                      type="text"
                      value={headline}
                      onChange={(e) => setHeadline(e.target.value)}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs font-semibold ${
                        isDark
                          ? 'bg-black/50 border-slate-700 text-white'
                          : 'bg-stone-50 border-stone-300 text-stone-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Medallion Style Selector */}
                <div className="space-y-2 pt-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Estilo de Medallones de Beneficios en la Imagen (Sin Letras que se Deformen)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        id: 'gold-3d',
                        title: '4 Medallones de Oro 3D',
                        desc: 'Iconos simbólicos grabados en oro cepillado',
                      },
                      {
                        id: 'crystal-minimal',
                        title: '4 Esferas de Cristal & Oro',
                        desc: 'Burbujas traslúcidas con icono minimalista',
                      },
                      {
                        id: 'none',
                        title: 'Sin Medallones (Limpio)',
                        desc: 'Solo el envase y los ingredientes naturales',
                      },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() =>
                          setMedallionStyle(m.id as 'gold-3d' | 'crystal-minimal' | 'none')
                        }
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          medallionStyle === m.id
                            ? 'bg-amber-500/20 border-amber-400 ring-1 ring-amber-400'
                            : isDark
                            ? 'bg-black/40 border-slate-800 hover:border-slate-700'
                            : 'bg-stone-50 border-stone-200'
                        }`}
                      >
                        <div
                          className={`text-xs font-bold ${
                            medallionStyle === m.id
                              ? 'text-amber-300'
                              : isDark
                              ? 'text-white'
                              : 'text-stone-900'
                          }`}
                        >
                          {m.title}
                        </div>
                        <div className="text-[10px] text-slate-400">{m.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4 Benefits Inputs */}
                {medallionStyle !== 'none' && (
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Los 4 Beneficios (Se convierten en Iconos 3D en la foto y en el Guion de Video abajo)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <input
                        type="text"
                        value={benefit1}
                        onChange={(e) => setBenefit1(e.target.value)}
                        placeholder="Beneficio 1"
                        className={`px-3 py-2 rounded-xl border text-xs font-semibold ${
                          isDark
                            ? 'bg-black/50 border-slate-700 text-white'
                            : 'bg-stone-50 border-stone-300 text-stone-900'
                        }`}
                      />
                      <input
                        type="text"
                        value={benefit2}
                        onChange={(e) => setBenefit2(e.target.value)}
                        placeholder="Beneficio 2"
                        className={`px-3 py-2 rounded-xl border text-xs font-semibold ${
                          isDark
                            ? 'bg-black/50 border-slate-700 text-white'
                            : 'bg-stone-50 border-stone-300 text-stone-900'
                        }`}
                      />
                      <input
                        type="text"
                        value={benefit3}
                        onChange={(e) => setBenefit3(e.target.value)}
                        placeholder="Beneficio 3"
                        className={`px-3 py-2 rounded-xl border text-xs font-semibold ${
                          isDark
                            ? 'bg-black/50 border-slate-700 text-white'
                            : 'bg-stone-50 border-stone-300 text-stone-900'
                        }`}
                      />
                      <input
                        type="text"
                        value={benefit4}
                        onChange={(e) => setBenefit4(e.target.value)}
                        placeholder="Beneficio 4"
                        className={`px-3 py-2 rounded-xl border text-xs font-semibold ${
                          isDark
                            ? 'bg-black/50 border-slate-700 text-white'
                            : 'bg-stone-50 border-stone-300 text-stone-900'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* BLOCK 1: PHOTOGRAPHY TYPE (NECESIDAD DE IMAGEN) */}
            {(activeStepFilter === 'all' || activeStepFilter === 'tipo-plano') && (
              <div
                className={`rounded-3xl border p-6 space-y-4 ${
                  isDark
                    ? 'bg-[#101814] border-emerald-900/60 shadow-xl'
                    : 'bg-white border-stone-200 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-stone-900'}`}>
                        Tipo de Fotografía (Según tu Necesidad)
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Elige el concepto visual: póster con medallones, catálogo limpio, splash, flat lay cenital, macro o lifestyle
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allPhotoTypes.map((pt) => {
                    const isSelected = photoTypeId === pt.id;
                    return (
                      <div
                        key={pt.id}
                        onClick={() => handleSelectPhotoType(pt)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-400 ring-2 ring-emerald-400/50 shadow-lg'
                            : isDark
                            ? 'bg-black/40 border-slate-800 hover:border-emerald-500/40'
                            : 'bg-stone-50 border-stone-200 hover:border-emerald-500/40'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`font-bold text-xs ${
                                isSelected
                                  ? 'text-emerald-300'
                                  : isDark
                                  ? 'text-white'
                                  : 'text-stone-900'
                              }`}
                            >
                              {pt.label}
                            </span>
                            <div className="flex items-center gap-1">
                              {pt.badge && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                  {pt.badge}
                                </span>
                              )}
                              {pt.isCustom && (
                                <button
                                  type="button"
                                  onClick={(e) => handleDeleteCustomItem('photoTypes', pt.id, e)}
                                  className="p-1 text-rose-400 hover:text-rose-300 cursor-pointer"
                                  title="Eliminar opción personalizada"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>
                          {pt.shortDesc && (
                            <p className="text-[11px] text-slate-400 leading-snug">{pt.shortDesc}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {renderAddCustomModalInline(
                    'photoTypes',
                    'Tipo de Foto',
                    'Describe el estilo (ej: Producto flotando sobre nubes doradas de sueño)'
                  )}
                </div>
              </div>
            )}

            {/* BLOCK 2: CAMERA SHOT / ANGLE & OPTICS */}
            {(activeStepFilter === 'all' || activeStepFilter === 'tipo-plano') && (
              <div
                className={`rounded-3xl border p-6 space-y-5 ${
                  isDark
                    ? 'bg-[#101814] border-emerald-900/60 shadow-xl'
                    : 'bg-white border-stone-200 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-stone-900'}`}>
                        Plano de Cámara, Ángulo, Lente y Formato
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Controla desde dónde mira la cámara y el desenfoque óptico del fondo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Camera Shots / Planos */}
                <div className="space-y-2.5">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Plano y Ángulo Fotográfico
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {allShots.map((shot) => {
                      const isSelected = shotId === shot.id;
                      return (
                        <div
                          key={shot.id}
                          onClick={() => setShotId(shot.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/15 border-amber-400 ring-1 ring-amber-400'
                              : isDark
                              ? 'bg-black/40 border-slate-800 hover:border-amber-500/40'
                              : 'bg-stone-50 border-stone-200 hover:border-amber-500/40'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span
                              className={`text-xs font-bold ${
                                isSelected
                                  ? 'text-amber-300'
                                  : isDark
                                  ? 'text-white'
                                  : 'text-stone-900'
                              }`}
                            >
                              {shot.label}
                            </span>
                            <div className="flex items-center gap-1">
                              {shot.badge && (
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                                  {shot.badge}
                                </span>
                              )}
                              {shot.isCustom && (
                                <button
                                  type="button"
                                  onClick={(e) => handleDeleteCustomItem('shots', shot.id, e)}
                                  className="p-1 text-rose-400 hover:text-rose-300 cursor-pointer"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>
                          {shot.shortDesc && (
                            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                              {shot.shortDesc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'shots',
                      'Plano / Ángulo',
                      'Ej: en plano holandés inclinado a 20 grados con reflejo en espejo'
                    )}
                  </div>
                </div>

                {/* Sub-section: Lenses */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/50">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Aperture className="w-3.5 h-3.5" /> Óptica, Lente y Bokeh
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allLenses.map((lens) => {
                      const isSelected = lensId === lens.id;
                      return (
                        <button
                          key={lens.id}
                          type="button"
                          onClick={() => setLensId(lens.id)}
                          className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-200 hover:border-emerald-500/40'
                              : 'bg-stone-50 border-stone-200 text-stone-800'
                          }`}
                        >
                          <span>{lens.label}</span>
                          {lens.isCustom && (
                            <span
                              onClick={(e) => handleDeleteCustomItem('lenses', lens.id, e)}
                              className="text-rose-500 hover:text-rose-700 ml-1"
                            >
                              ×
                            </span>
                          )}
                        </button>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'lenses',
                      'Lente',
                      'Ej: capturado con lente anamórfico 40mm f/2 con destellos horizontales'
                    )}
                  </div>
                </div>

                {/* Sub-section: Aspect Ratio */}
                <div className="space-y-2 pt-2 border-t border-slate-800/50">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                    Proporción / Formato de Salida
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {ASPECT_RATIOS.map((ar) => (
                      <button
                        key={ar.id}
                        type="button"
                        onClick={() => setAspectRatio(ar.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          aspectRatio === ar.id
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow'
                            : isDark
                            ? 'bg-black/40 border-slate-800 text-slate-200 hover:border-slate-700'
                            : 'bg-stone-50 border-stone-200 text-stone-800'
                        }`}
                      >
                        <div className="text-xs font-bold">{ar.label}</div>
                        <div
                          className={`text-[10px] ${
                            aspectRatio === ar.id ? 'text-slate-900' : 'text-slate-400'
                          }`}
                        >
                          {ar.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* BLOCK 3: LIGHTING & COLOR MOOD */}
            {(activeStepFilter === 'all' || activeStepFilter === 'luz-color') && (
              <div
                className={`rounded-3xl border p-6 space-y-5 ${
                  isDark
                    ? 'bg-[#101814] border-emerald-900/60 shadow-xl'
                    : 'bg-white border-stone-200 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-stone-900'}`}>
                        Iluminación de Estudio y Paleta de Color
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Define la atmósfera lumínica y los tonos dominantes de la imagen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lighting Cards */}
                <div className="space-y-2.5">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5" /> Estilo de Iluminación
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {allLightings.map((light) => {
                      const isSelected = lightingId === light.id;
                      return (
                        <div
                          key={light.id}
                          onClick={() => setLightingId(light.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/15 border-amber-400 ring-1 ring-amber-400'
                              : isDark
                              ? 'bg-black/40 border-slate-800 hover:border-amber-500/40'
                              : 'bg-stone-50 border-stone-200'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span
                              className={`text-xs font-bold ${
                                isSelected
                                  ? 'text-amber-300'
                                  : isDark
                                  ? 'text-white'
                                  : 'text-stone-900'
                              }`}
                            >
                              {light.label}
                            </span>
                            {light.isCustom && (
                              <button
                                type="button"
                                onClick={(e) => handleDeleteCustomItem('lightings', light.id, e)}
                                className="p-1 text-rose-400 hover:text-rose-300 cursor-pointer"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                          {light.shortDesc && (
                            <p className="text-[11px] text-slate-400 mt-1">{light.shortDesc}</p>
                          )}
                        </div>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'lightings',
                      'Iluminación',
                      'Ej: iluminación cálida de velas de spa y rayos de luna suaves'
                    )}
                  </div>
                </div>

                {/* Color Palette Chips */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/50">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" /> Paleta Cromática / Mood
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allMoods.map((mood) => {
                      const isSelected = colorMoodId === mood.id;
                      return (
                        <button
                          key={mood.id}
                          type="button"
                          onClick={() => setColorMoodId(mood.id)}
                          className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-200 hover:border-emerald-500/40'
                              : 'bg-stone-50 border-stone-200 text-stone-800'
                          }`}
                        >
                          <span>{mood.label}</span>
                          {mood.isCustom && (
                            <span
                              onClick={(e) => handleDeleteCustomItem('moods', mood.id, e)}
                              className="text-rose-500 ml-1"
                            >
                              ×
                            </span>
                          )}
                        </button>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'moods',
                      'Paleta de Color',
                      'Ej: paleta cromática de tonos terracota orgánicos, verde oliva y cobre'
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* BLOCK 4: PACKAGING, SURFACE & MULTI-SELECT INGREDIENTS */}
            {(activeStepFilter === 'all' || activeStepFilter === 'envase-escenario') && (
              <div
                className={`rounded-3xl border p-6 space-y-5 ${
                  isDark
                    ? 'bg-[#101814] border-emerald-900/60 shadow-xl'
                    : 'bg-white border-stone-200 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-stone-900'}`}>
                        Envase, Superficie e Ingredientes / Efectos (Multi-Selección)
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Elige el tipo de frasco, dónde está apoyado y combina todos los ingredientes o efectos que quieras
                      </p>
                    </div>
                  </div>
                </div>

                {/* Packaging */}
                <div className="space-y-2.5">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" /> Tipo de Envase y Acabado
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {allPackagings.map((pkg) => {
                      const isSelected = packagingId === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setPackagingId(pkg.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-emerald-500/15 border-emerald-400 ring-1 ring-emerald-400'
                              : isDark
                              ? 'bg-black/40 border-slate-800 hover:border-emerald-500/40'
                              : 'bg-stone-50 border-stone-200'
                          }`}
                        >
                          <div>
                            <div
                              className={`text-xs font-bold ${
                                isSelected
                                  ? 'text-emerald-300'
                                  : isDark
                                  ? 'text-white'
                                  : 'text-stone-900'
                              }`}
                            >
                              {pkg.label}
                            </div>
                            {pkg.badge && (
                              <span className="text-[10px] font-mono text-amber-400">
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                          {pkg.isCustom && (
                            <button
                              type="button"
                              onClick={(e) => handleDeleteCustomItem('packagings', pkg.id, e)}
                              className="p-1 text-rose-400 hover:text-rose-300 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'packagings',
                      'Envase',
                      'Describe tu envase (ej: frasco de vidrio azul cobalto con tapa de bambú orgánico)'
                    )}
                  </div>
                </div>

                {/* Surface / Background */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/50">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Superficie / Base y Escenario de Fondo
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allSurfaces.map((surf) => {
                      const isSelected = surfaceId === surf.id;
                      return (
                        <button
                          key={surf.id}
                          type="button"
                          onClick={() => setSurfaceId(surf.id)}
                          className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-200 hover:border-amber-500/40'
                              : 'bg-stone-50 border-stone-200 text-stone-800'
                          }`}
                        >
                          <span>{surf.label}</span>
                          {surf.isCustom && (
                            <span
                              onClick={(e) => handleDeleteCustomItem('surfaces', surf.id, e)}
                              className="text-rose-600 ml-1"
                            >
                              ×
                            </span>
                          )}
                        </button>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'surfaces',
                      'Superficie / Fondo',
                      'Ej: posado sobre una roca volcánica negra frente a una cascada tropical'
                    )}
                  </div>
                </div>

                {/* Multi-Select Ingredients & Physical Effects */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/50">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5" /> Ingredientes y Efectos Físicos (Puedes elegir varios)
                    </label>
                    <span className="text-[11px] font-mono text-amber-400">
                      {selectedIngredientIds.length} seleccionados
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allIngredients.map((ing) => {
                      const isSelected = selectedIngredientIds.includes(ing.id);
                      return (
                        <button
                          key={ing.id}
                          type="button"
                          onClick={() => toggleIngredient(ing.id)}
                          className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 ring-1 ring-emerald-400/50'
                              : isDark
                              ? 'bg-black/40 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-stone-50 border-stone-200 text-stone-700'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          <span>{ing.label}</span>
                          {ing.isCustom && (
                            <span
                              onClick={(e) => handleDeleteCustomItem('ingredients', ing.id, e)}
                              className="text-rose-400 hover:text-rose-300 ml-1"
                            >
                              ×
                            </span>
                          )}
                        </button>
                      );
                    })}
                    {renderAddCustomModalInline(
                      'ingredients',
                      'Ingrediente o Efecto',
                      'Ej: granos de café orgánico tostado, ramas de canela y vapor cálido'
                    )}
                  </div>
                </div>

                {/* Extra free-text detail */}
                <div className="pt-2 border-t border-slate-800/50">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Detalles Extra Personalizados (Opcional · Se añade al final del prompt)
                  </label>
                  <input
                    type="text"
                    value={extraCustomNotes}
                    onChange={(e) => setExtraCustomNotes(e.target.value)}
                    placeholder="Ej: incluir una cuchara dosificadora dorada al lado derecho o reflejo en el agua..."
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs ${
                      isDark
                        ? 'bg-black/50 border-slate-700 text-white'
                        : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (5 Cols): STICKY LIVE RECIPE & MULTI-SHOT OUTPUT */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-5">
            <div
              className={`rounded-3xl border p-6 space-y-5 ${
                isDark
                  ? 'bg-gradient-to-b from-[#111C17] to-[#0C1310] border-emerald-500/50 shadow-2xl'
                  : 'bg-white border-stone-200 shadow-2xl'
              }`}
            >
              {/* Top Output Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                    RESULTADO EN VIVO · GEMINI / IMAGEN 3 / MIDJOURNEY
                  </span>
                  <h3 className={`text-lg font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {productName}
                  </h3>
                </div>

                {/* ES / EN Switcher */}
                <div className="inline-flex rounded-xl bg-black/50 p-1 border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setOutputLang('es')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                      outputLang === 'es' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutputLang('en')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                      outputLang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Active Visual Recipe Summary Badges */}
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  📸 {activePhotoType.label}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  📐 {activeShot.label}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  🔭 {activeLens.label.split(' ')[0]}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  ☀️ {activeLighting.label}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/10 text-white">
                  {aspectRatio}
                </span>
              </div>

              {/* Output Mode Tabs: 1. Prompt a Medida | 2. Sesión de 6 Planos | 3. Anatomía por Colores */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/40 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setOutputTab('single')}
                  className={`py-2 px-2 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${
                    outputTab === 'single'
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  1. Prompt a Medida
                </button>
                <button
                  type="button"
                  onClick={() => setOutputTab('session6')}
                  className={`py-2 px-2 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${
                    outputTab === 'session6'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  2. Pack 6 Planos
                </button>
                <button
                  type="button"
                  onClick={() => setOutputTab('anatomy')}
                  className={`py-2 px-2 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${
                    outputTab === 'anatomy'
                      ? 'bg-purple-400 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  3. Anatomía Visual
                </button>
              </div>

              {/* TAB 1: SINGLE CUSTOM IMAGE PROMPT */}
              {outputTab === 'single' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-black/85 border border-emerald-500/40 font-mono text-xs text-slate-100 leading-relaxed select-all max-h-[300px] overflow-y-auto">
                    {outputLang === 'es' ? mainPromptEs : mainPromptEn}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      copyText(outputLang === 'es' ? mainPromptEs : mainPromptEn, 'main-studio-img')
                    }
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 hover:opacity-95 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    {copiedKey === 'main-studio-img' ? (
                      <>
                        <Check className="w-4 h-4" /> ¡Prompt de Imagen Copiado al Portapapeles!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copiar Prompt de Imagen ({outputLang.toUpperCase()})
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* TAB 2: 6-SHOT COMPLETE PHOTO SESSION PACK */}
              {outputTab === 'session6' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-amber-300 font-semibold">
                      6 planos distintos generados para <strong>{productName}</strong>:
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const allSix = session6Pack
                          .map(
                            (s) =>
                              `=== ${s.badge.toUpperCase()}: ${s.title} ===\n${
                                outputLang === 'es' ? s.promptEs : s.promptEn
                              }`
                          )
                          .join('\n\n');
                        copyText(allSix, 'copy-all-6-shots');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedKey === 'copy-all-6-shots' ? (
                        <>
                          <Check className="w-3 h-3" /> ¡6 Planos Copiados!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copiar los 6 Planos
                        </>
                      )}
                    </button>
                  </div>

                  <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                    {session6Pack.map((shot) => {
                      const text = outputLang === 'es' ? shot.promptEs : shot.promptEn;
                      return (
                        <div
                          key={shot.id}
                          className="p-3 rounded-xl bg-black/75 border border-slate-800 space-y-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-mono text-amber-400 block">
                                {shot.badge} · {shot.shotLabel}
                              </span>
                              <span className="text-xs font-bold text-white">{shot.title}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => copyText(text, shot.id)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 text-[11px] font-bold flex items-center gap-1 cursor-pointer shrink-0 transition-all"
                            >
                              {copiedKey === shot.id ? (
                                <>
                                  <Check className="w-3 h-3" /> Copiado
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" /> Copiar
                                </>
                              )}
                            </button>
                          </div>
                          <p className="text-[11px] font-mono text-slate-300 line-clamp-3 select-all">
                            {text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: COLOR-CODED PROMPT ANATOMY */}
              {outputTab === 'anatomy' && (
                <div className="space-y-3">
                  <p className="text-[11px] text-slate-400">
                    Así se construye tu prompt bloque por bloque según tus elecciones:
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                      <strong className="text-emerald-400 block text-[10px] uppercase">
                        1. Tipo de Foto + Plano y Ángulo:
                      </strong>
                      {activePhotoType.promptEs} ({activeRatio.id}), {activeShot.promptEs}.
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">
                      <strong className="text-amber-400 block text-[10px] uppercase">
                        2. Envase + Superficie/Escenario:
                      </strong>
                      {activePackaging.promptEs}, {activeSurface.promptEs}.
                    </div>
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200">
                      <strong className="text-cyan-400 block text-[10px] uppercase">
                        3. Ingredientes + Medallones 3D:
                      </strong>
                      {ingredientsListEs}. {getMedallionFragmentEs(medallionStyle)}
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200">
                      <strong className="text-purple-400 block text-[10px] uppercase">
                        4. Iluminación + Color + Lente:
                      </strong>
                      {activeLighting.promptEs}, {activeMood.promptEs}, {activeLens.promptEs}.
                    </div>
                  </div>
                </div>
              )}

              {/* Bridge Button: Send to Video Builder Below */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <button
                  type="button"
                  onClick={handleSendToVideo}
                  className={`w-full py-3 px-4 rounded-2xl border font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#17241E] border-amber-500/50 text-amber-300 hover:bg-amber-500 hover:text-slate-950'
                      : 'bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-500 hover:text-slate-950'
                  }`}
                >
                  <Wand2 className="w-4 h-4" />
                  <span>Pasar este Producto al Generador de Videos Abajo</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Sincroniza tu producto, envase, ingredientes y beneficios con las 4 escenas de Google Flow abajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
