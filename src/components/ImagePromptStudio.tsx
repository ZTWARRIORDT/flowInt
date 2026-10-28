import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
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
  const [benefits, setBenefits] = useState<string[]>([
    STUDIO_QUICK_PRESETS[0].benefit1,
    STUDIO_QUICK_PRESETS[0].benefit2,
    STUDIO_QUICK_PRESETS[0].benefit3,
    STUDIO_QUICK_PRESETS[0].benefit4,
  ]);

  // Photography Configuration State
  const [photoTypeId, setPhotoTypeId] = useState<string>(STUDIO_QUICK_PRESETS[0].photoTypeId);
  const [shotId, setShotId] = useState<string>(STUDIO_QUICK_PRESETS[0].shotId);
  const [lensId, setLensId] = useState<string>(STUDIO_QUICK_PRESETS[0].lensId);
  const [packagingId, setPackagingId] = useState<string>(STUDIO_QUICK_PRESETS[0].packagingId);
  const [packagingPresentation, setPackagingPresentation] = useState<PackagingPresentationMode>(
    STUDIO_QUICK_PRESETS[0].packagingPresentation || 'solo'
  );
  const [environmentId, setEnvironmentId] = useState<string>(STUDIO_QUICK_PRESETS[0].environmentId || 'arena-zen');
  const [aspectRatio, setAspectRatio] = useState<string>(
    STUDIO_QUICK_PRESETS[0].aspectRatio
  );

  // Infographics, Reference & Extra Modifiers
  const [infographicStyle, setInfographicStyle] = useState<string>(STUDIO_QUICK_PRESETS[0].infographicStyle || 'pill-badges');
  const [realProductColor, setRealProductColor] = useState<string>(
    STUDIO_QUICK_PRESETS[0].realProductColor || ''
  );
  const [useReferencePhotoMode, setUseReferencePhotoMode] = useState<boolean>(true);
  const [extraCustomNotes, setExtraCustomNotes] = useState<string>('');

  // Custom User-Created Options (persisted in localStorage)
  const [customEnvironments, setCustomEnvironments] = useState<CommercialEnvironmentOption[]>(() => {
    try {
      const s = localStorage.getItem('natural_studio_custom_envs');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const [customInfographicStyles, setCustomInfographicStyles] = useState<{
    id: string;
    label: string;
    badge: string;
    shortDesc: string;
    promptEs: string;
    promptEn: string;
  }[]>(() => {
    try {
      const s = localStorage.getItem('natural_studio_custom_infographics');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const [customPhotoTypes, setCustomPhotoTypes] = useState<PhotoTypeOption[]>(() => {
    try {
      const s = localStorage.getItem('natural_studio_custom_phototypes');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const [customAspectRatios, setCustomAspectRatios] = useState<{
    id: string;
    label: string;
    sub: string;
    promptEs: string;
    promptEn: string;
  }[]>(() => {
    try {
      const s = localStorage.getItem('natural_studio_custom_ratios');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  // Modals for Custom Items
  const [isAddEnvModalOpen, setIsAddEnvModalOpen] = useState<boolean>(false);
  const [newEnvForm, setNewEnvForm] = useState({
    label: '',
    badge: 'Personalizado',
    shortDesc: '',
    surfaceEs: '',
    surfaceEn: '',
    lightingEs: '',
    lightingEn: '',
  });

  const [isAddInfographicModalOpen, setIsAddInfographicModalOpen] = useState<boolean>(false);
  const [newInfographicForm, setNewInfographicForm] = useState({
    label: '',
    badge: 'Diseño Personalizado',
    shortDesc: '',
    promptEs: '',
    promptEn: '',
  });

  const [isAddPhotoTypeModalOpen, setIsAddPhotoTypeModalOpen] = useState<boolean>(false);
  const [newPhotoTypeForm, setNewPhotoTypeForm] = useState({
    label: '',
    badge: 'Personalizado',
    shortDesc: '',
    promptEs: '',
    promptEn: '',
  });

  const [isAddRatioModalOpen, setIsAddRatioModalOpen] = useState<boolean>(false);
  const [newRatioForm, setNewRatioForm] = useState({
    id: '',
    label: '',
    sub: '',
    promptEs: '',
    promptEn: '',
  });

  // UI State for Output, Modal & Preview
  const [isLensModalOpen, setIsLensModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'lenses' | 'packagings'>('lenses');
  const [showMorePackagings, setShowMorePackagings] = useState<boolean>(false);
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
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

  // Dynamic Benefits Helpers
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

  // Custom Items Handlers
  const handleSaveCustomEnv = () => {
    if (!newEnvForm.label.trim()) return;
    const id = `custom-env-${Date.now()}`;
    const created: CommercialEnvironmentOption = {
      id,
      label: newEnvForm.label.trim(),
      badge: newEnvForm.badge.trim() || 'Personalizado',
      shortDesc: newEnvForm.shortDesc.trim() || newEnvForm.surfaceEs.slice(0, 75),
      surfaceEs: newEnvForm.surfaceEs.trim() || `sobre superficie personalizada de ${newEnvForm.label}`,
      surfaceEn: newEnvForm.surfaceEn.trim() || `on custom surface for ${newEnvForm.label}`,
      lightingEs: newEnvForm.lightingEs.trim() || 'bajo luz comercial cálida de estudio',
      lightingEn: newEnvForm.lightingEn.trim() || 'under warm commercial studio light',
    };
    const updated = [created, ...customEnvironments];
    setCustomEnvironments(updated);
    localStorage.setItem('natural_studio_custom_envs', JSON.stringify(updated));
    setEnvironmentId(id);
    setIsAddEnvModalOpen(false);
    setNewEnvForm({ label: '', badge: 'Personalizado', shortDesc: '', surfaceEs: '', surfaceEn: '', lightingEs: '', lightingEn: '' });
    setSyncFeedback(`✓ Escenario añadido: "${created.label}"`);
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  const handleDeleteCustomEnv = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customEnvironments.filter((x) => x.id !== id);
    setCustomEnvironments(updated);
    localStorage.setItem('natural_studio_custom_envs', JSON.stringify(updated));
    if (environmentId === id) setEnvironmentId('arena-zen');
  };

  const handleSaveCustomInfographic = () => {
    if (!newInfographicForm.label.trim()) return;
    const id = `custom-info-${Date.now()}`;
    const created = {
      id,
      label: newInfographicForm.label.trim(),
      badge: newInfographicForm.badge.trim() || 'Diseño Personalizado',
      shortDesc: newInfographicForm.shortDesc.trim() || 'Estilo infográfico personalizado.',
      promptEs: newInfographicForm.promptEs.trim() || 'Flotando alrededor del envase con diseño gráfico personalizado.',
      promptEn: newInfographicForm.promptEn.trim() || 'Floating around the container with custom graphic design.',
    };
    const updated = [created, ...customInfographicStyles];
    setCustomInfographicStyles(updated);
    localStorage.setItem('natural_studio_custom_infographics', JSON.stringify(updated));
    setInfographicStyle(id);
    setIsAddInfographicModalOpen(false);
    setNewInfographicForm({ label: '', badge: 'Diseño Personalizado', shortDesc: '', promptEs: '', promptEn: '' });
    setSyncFeedback(`✓ Estilo de diseño añadido: "${created.label}"`);
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  const handleDeleteCustomInfographic = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customInfographicStyles.filter((x) => x.id !== id);
    setCustomInfographicStyles(updated);
    localStorage.setItem('natural_studio_custom_infographics', JSON.stringify(updated));
    if (infographicStyle === id) setInfographicStyle('pill-badges');
  };

  const handleSaveCustomPhotoType = () => {
    if (!newPhotoTypeForm.label.trim()) return;
    const id = `custom-pt-${Date.now()}`;
    const created: PhotoTypeOption = {
      id,
      label: newPhotoTypeForm.label.trim(),
      badge: newPhotoTypeForm.badge.trim() || 'Personalizado',
      shortDesc: newPhotoTypeForm.shortDesc.trim() || 'Toma publicitaria personalizada.',
      promptEs: newPhotoTypeForm.promptEs.trim() || `Fotografía publicitaria comercial de ${newPhotoTypeForm.label}`,
      promptEn: newPhotoTypeForm.promptEn.trim() || `Commercial advertising photography of ${newPhotoTypeForm.label}`,
      recommendedShotId: 'eye-level',
      recommendedLensId: '85mm-f18',
      includeMedallionsByDefault: true,
    };
    const updated = [created, ...customPhotoTypes];
    setCustomPhotoTypes(updated);
    localStorage.setItem('natural_studio_custom_phototypes', JSON.stringify(updated));
    setPhotoTypeId(id);
    setIsAddPhotoTypeModalOpen(false);
    setNewPhotoTypeForm({ label: '', badge: 'Personalizado', shortDesc: '', promptEs: '', promptEn: '' });
    setSyncFeedback(`✓ Tipo de foto añadido: "${created.label}"`);
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  const handleDeleteCustomPhotoType = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customPhotoTypes.filter((x) => x.id !== id);
    setCustomPhotoTypes(updated);
    localStorage.setItem('natural_studio_custom_phototypes', JSON.stringify(updated));
    if (photoTypeId === id) setPhotoTypeId('poster-infografico-flow');
  };

  const handleSaveCustomRatio = () => {
    if (!newRatioForm.id.trim()) return;
    const id = newRatioForm.id.trim();
    const created = {
      id,
      label: newRatioForm.label.trim() || id,
      sub: newRatioForm.sub.trim() || 'Personalizado',
      promptEs: newRatioForm.promptEs.trim() || `formato personalizado ${id}`,
      promptEn: newRatioForm.promptEn.trim() || `custom ${id} aspect ratio`,
    };
    const updated = [created, ...customAspectRatios];
    setCustomAspectRatios(updated);
    localStorage.setItem('natural_studio_custom_ratios', JSON.stringify(updated));
    setAspectRatio(id);
    setIsAddRatioModalOpen(false);
    setNewRatioForm({ id: '', label: '', sub: '', promptEs: '', promptEn: '' });
    setSyncFeedback(`✓ Formato añadido: "${created.label}"`);
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  const handleDeleteCustomRatio = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customAspectRatios.filter((x) => x.id !== id);
    setCustomAspectRatios(updated);
    localStorage.setItem('natural_studio_custom_ratios', JSON.stringify(updated));
    if (aspectRatio === id) setAspectRatio('1:1');
  };

  const handleToggleInfographicStyle = (style: string) => {
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
    setBenefits([preset.benefit1, preset.benefit2, preset.benefit3, preset.benefit4].filter(Boolean));
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
      setInfographicStyle('pill-badges');
    }
    setAspectRatio(preset.aspectRatio);
    setRealProductColor(preset.realProductColor || '');
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
      setShotId('cenital-90');
    } else if (id === '85mm-f18') {
      if (shotId === 'macro-extremo') setShotId('eye-level');
      if (photoTypeId === 'macro-textura') setPhotoTypeId('poster-infografico-flow');
    } else if (id === '50mm-f14') {
      if (shotId === 'macro-extremo') setShotId('picado-45');
      if (photoTypeId === 'macro-textura') setPhotoTypeId('flat-lay-cenital');
    }
  };

  const handleApplyKnowledgeItem = (item: SupplementKnowledgeItem) => {
    setProductName(item.name);
    setHeadline(item.headline);
    setBenefits([item.benefit1, item.benefit2, item.benefit3, item.benefit4].filter(Boolean));
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

  // Resolve combined active items
  const allPhotoTypes = [...PHOTO_TYPES, ...customPhotoTypes];
  const allEnvironments = [...COMMERCIAL_ENVIRONMENTS, ...customEnvironments];
  const allAspectRatios = [...ASPECT_RATIOS, ...customAspectRatios];
  const allInfographicStyles = [...INFOGRAPHIC_STYLES, ...customInfographicStyles];

  const activePhotoType =
    allPhotoTypes.find((x) => x.id === photoTypeId) ||
    allPhotoTypes[0];
  const activeShot = CAMERA_SHOTS.find((x) => x.id === shotId) || CAMERA_SHOTS[0];
  const activeLens = CAMERA_LENSES.find((x) => x.id === lensId) || CAMERA_LENSES[0];
  const activePackaging = PACKAGING_OPTIONS.find((x) => x.id === packagingId) || PACKAGING_OPTIONS[0];
  const activePackagingPresentation =
    PACKAGING_PRESENTATIONS.find((x) => x.id === packagingPresentation) || PACKAGING_PRESENTATIONS[0];
  const activeEnvironment =
    allEnvironments.find((x) => x.id === environmentId) || allEnvironments[0];
  const activeRatio = allAspectRatios.find((x) => x.id === aspectRatio) || allAspectRatios[0];

  const presentationEs = activePackagingPresentation.promptEs ? `, ${activePackagingPresentation.promptEs}` : '';
  const presentationEn = activePackagingPresentation.promptEn ? `, ${activePackagingPresentation.promptEn}` : '';

  // Infographic & Claims Design Fragment with Dynamic Benefits
  const getInfographicFragmentEs = (style: string) => {
    const activeBenefits = benefits.filter((b) => b.trim().length > 0);
    const list = activeBenefits.length > 0 ? activeBenefits : ['Salud y Vitalidad', 'Fórmula Pura', 'Protección Diaria', 'Bienestar Integral'];

    const customFound = customInfographicStyles.find((c) => c.id === style);
    if (customFound) {
      const customFormatted = list.map((b, i) => `${i + 1}) "${b}"`).join(', ');
      return customFound.promptEs.includes('{beneficios}')
        ? customFound.promptEs.replace('{beneficios}', customFormatted)
        : `${customFound.promptEs} Mostrando los beneficios clave: ${customFormatted}.`;
    }

    switch (style) {
      case 'none':
        return 'Composición 100% limpia de catálogo comercial sin medallones, sin textos flotantes ni tarjetas externas, dejando el protagonismo visual absoluto y puro en el envase.';

      case 'pill-badges': {
        const formatted = list.map((b, i) => `${i + 1}) "+ ${b}"`).join(', ');
        return `Flotando de forma armónica y simétrica a los costados del envase hay ${list.length} etiquetas alargadas tipo "pill badge" minimalistas con esquinas redondeadas, fondo blanco translúcido suave y texto tipográfico nítido en relieve con palabras clave legibles: ${formatted}. Diseño moderno, limpio y de alta conversión estilo e-commerce internacional.`;
      }

      case 'callout-pins': {
        const formatted = list.map((b, i) => `${i + 1}) "${b}"`).join(', ');
        return `Composición infográfica publicitaria clínica con finas líneas guía de precisión conectando puntos clave del envase hacia ${list.length} punteros flotantes con tipografía nítida y moderna indicando beneficios verificados: ${formatted}. Estilo infográfico científico de alta gama sin saturar la escena.`;
      }

      case 'live-ingredients-labels': {
        const formatted = list.map((b) => `"${b}"`).join(', ');
        return `Alrededor del envase se presentan los ingredientes naturales frescos y vivos en alta definición con pequeñas etiquetas tipográficas nítidas en papel mate blanco flotando sutilmente al lado de cada ingrediente activo: ${formatted}. Fotografía publicitaria sensorial y orgánica donde la naturaleza viva y la tipografía editorial se integran perfectamente.`;
      }

      case 'metric-cards': {
        const formatted = list.slice(0, 3).map((b, i) => `Tarjeta ${i + 1}: "100% EFECTIVIDAD · ${b}"`).join(', ');
        return `Flotando armónicamente a los lados del envase hay tarjetas publicitarias de vidrio esmerilado (frosted glass) con datos clínicos de alto impacto impresos con tipografía bold ultra nítida: ${formatted}. Formato publicitario de alta respuesta y conversión directa.`;
      }

      case 'editorial-typography': {
        const formatted = list.map((b) => `· ${b}`).join(' ');
        return `Diseño publicitario editorial estilo revista de bienestar (wellness editorial layout): en la parte superior e integrada con el aire de la escena destaca una tipografía serif moderna con titulares elegantes y viñetas minimalistas legibles: "${formatted}". Sin elementos pesados flotando, composición limpia y sofisticada con protagonismo central en el empaque.`;
      }

      case 'crystal-minimal': {
        const formatted = list.map((b, i) => `${i + 1}) ${b}`).join(', ');
        return `Flotando de forma armónica alrededor del envase hay esferas traslúcidas de cristal y borde dorado que contienen ÚNICAMENTE iconos/logos simbólicos minimalistas en 3D representando: ${formatted}, prohibido incluir letras pequeñas o textos largos que se deformen.`;
      }

      case 'gold-3d':
      default: {
        const formatted = list.map((b, i) => `${i + 1}) ${b}`).join(', ');
        return `Flotando simétricamente alrededor del envase hay medallones circulares de oro cepillado que contienen ÚNICAMENTE iconos/logos simbólicos grabados en relieve 3D representando: ${formatted}, prohibido incluir letras pequeñas o textos largos para evitar deformaciones.`;
      }
    }
  };

  const getInfographicFragmentEn = (style: string) => {
    const activeBenefits = benefits.filter((b) => b.trim().length > 0);
    const list = activeBenefits.length > 0 ? activeBenefits : ['Health & Vitality', 'Pure Formula', 'Daily Protection', 'Total Wellness'];

    const customFound = customInfographicStyles.find((c) => c.id === style);
    if (customFound) {
      const customFormatted = list.map((b, i) => `${i + 1}) "${b}"`).join(', ');
      return customFound.promptEn.includes('{benefits}')
        ? customFound.promptEn.replace('{benefits}', customFormatted)
        : `${customFound.promptEn} Featuring key benefits: ${customFormatted}.`;
    }

    switch (style) {
      case 'none':
        return '100% clean commercial catalog composition with no external medallions, floating text, or cards, showcasing only the pure product container and its textures.';

      case 'pill-badges': {
        const formatted = list.map((b, i) => `${i + 1}) "+ ${b}"`).join(', ');
        return `Floating harmoniously and symmetrically beside the container are ${list.length} minimalist elongated pill-shaped badges with soft translucent white frosted backgrounds, rounded corners, and crisp embossed typography highlighting key claims: ${formatted}. Clean modern DTC supplement aesthetic.`;
      }

      case 'callout-pins': {
        const formatted = list.map((b, i) => `${i + 1}) "${b}"`).join(', ');
        return `Clinical advertising infographic composition featuring fine precision guideline pins connecting key container details to ${list.length} floating callout pointers with clean modern typography indicating verified benefits: ${formatted}. High-end scientific infographic aesthetic.`;
      }

      case 'live-ingredients-labels': {
        const formatted = list.map((b) => `"${b}"`).join(', ');
        return `Fresh live raw natural botanical ingredients are artfully presented around the container in high definition, each paired with a small minimalist white matte label featuring crisp typography: ${formatted}. Sensory organic advertising photography blending nature with editorial typography.`;
      }

      case 'metric-cards': {
        const formatted = list.slice(0, 3).map((b, i) => `Card ${i + 1}: "100% CLINICAL EFFECTIVENESS · ${b}"`).join(', ');
        return `Floating harmoniously beside the container are frosted glass advertising claim cards featuring bold crisp clinical typography: ${formatted}. High-conversion direct response advertising format.`;
      }

      case 'editorial-typography': {
        const formatted = list.map((b) => `· ${b}`).join(' ');
        return `Wellness editorial magazine advertising layout: integrated into the upper breathing space is sophisticated modern serif typography with elegant headline subtext and clean minimalist bullet points: "${formatted}". Clean, sophisticated composition with central focus on the product container.`;
      }

      case 'crystal-minimal': {
        const formatted = list.map((b, i) => `${i + 1}) ${b}`).join(', ');
        return `Floating harmoniously around the container are translucent glass orbs with gold rims featuring ONLY minimalist 3D symbolic icons/logos representing: ${formatted}, strictly no small letters or text that could warp.`;
      }

      case 'gold-3d':
      default: {
        const formatted = list.map((b, i) => `${i + 1}) ${b}`).join(', ');
        return `Floating symmetrically around the container are circular brushed gold medallions featuring ONLY 3D engraved symbolic icons/logos representing: ${formatted}, strictly no small letters or text so nothing warps.`;
      }
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
      ? ` IMPORTANTE PARA FLOW: Deja la parte superior de la imagen (tercio superior) con espacio negativo limpio, aire y fondo continuo difuso, diseñado específicamente para que la frase publicitaria "${headline.trim()}" resalte con tipografía premium en pós-producción.`
      : '';
  const headlineDirectiveEn =
    isPosterFlow && headline.trim()
      ? ` CRITICAL DIRECTIVE FOR FLOW: Reserve the upper third (top negative breathing space) with clean uncluttered continuous background, specifically composed so the marketing headline "${headline.trim()}" can be placed with premium typography.`
      : '';

  // Macro mode detection
  const isMacroMode = photoTypeId === 'macro-textura' || shotId === 'macro-extremo';

  // Product color protection directive
  const productColorNoticeEs = realProductColor
    ? ` REGLA ESTRICTA DE COLOR: Preserva exactamente la tonalidad real: "${realProductColor}". Está terminantemente prohibido recolorear, desaturar o inventar tonos.`
    : '';
  const productColorNoticeEn = realProductColor
    ? ` STRICT COLOR INTEGRITY: Preserve true-to-life color: "${realProductColor}". Do not recolor, desaturate, or invent arbitrary shades.`
    : '';

  // 1. Framing & Lens harmony
  let photoStyleEs = `${activePhotoType.promptEs} en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}.`;
  let photoStyleEn = `${activePhotoType.promptEn} in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}.`;

  if (isMacroMode) {
    photoStyleEs = `Fotografía macro sensorial de ultra detalle publicitario en ${activeRatio.promptEs} para el producto natural "${productName}": encuadre microscópico cerrado enfocado en primerísimo plano sobre el relieve del logo, la textura táctil del material y las microgotas de rocío fresco condensadas, cortando estéticamente los bordes del envase para llenar por completo la toma con nitidez 8K.`;
    photoStyleEn = `Advertising sensory ultra-detail macro photography in ${activeRatio.promptEn} for the natural product "${productName}": tightly focused microscopic close-up framing on embossed logo relief, container material texture, and fresh micro-droplets, aesthetically cropping container edges to fill the entire frame with 8K clarity.`;
  } else if (lensId === '35mm-f2') {
    photoStyleEs = `Fotografía ambiental comercial capturada con lente gran angular 35mm f/2.0 en ${activeRatio.promptEs} para el producto natural "${productName}": encuadre amplio integrando el producto de forma orgánica en el entorno con gran profundidad de campo y atmósfera botánica pura.`;
    photoStyleEn = `Environmental commercial photography captured with a 35mm f/2.0 wide-angle lens in ${activeRatio.promptEn} for the natural product "${productName}": wide environmental framing organically integrating the product into the surrounding atmosphere.`;
  } else if (lensId === '90mm-highspeed') {
    photoStyleEs = `Fotografía publicitaria de alta velocidad (1/4000s freeze-motion) capturada con óptica de estudio 90mm f/4 en ${activeRatio.promptEs} para el producto natural "${productName}": acción dinámica congelando en el aire cada partícula botánica, salpicadura y gota con nitidez absoluta.`;
    photoStyleEn = `High-speed 1/4000s freeze-motion commercial advertising photography captured with a 90mm f/4 studio lens in ${activeRatio.promptEn} for the natural product "${productName}": dynamic mid-air action freezing every botanical particle, splash, and droplet in crystal-clear focus.`;
  } else if (lensId === '85mm-f18') {
    photoStyleEs = `${activePhotoType.promptEs} con lente prime 85mm f/1.8 (bokeh cremoso de estudio) en ${activeRatio.promptEs} para el producto natural "${productName}", ${activeShot.promptEs}.`;
    photoStyleEn = `${activePhotoType.promptEn} with an 85mm f/1.8 prime lens (creamy studio bokeh) in ${activeRatio.promptEn} for the natural product "${productName}", ${activeShot.promptEn}.`;
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

              {/* Dynamic Benefits / Claims Fields (Universal for ANY product) */}
              <div className="space-y-2 pt-1 border-t border-slate-800/40">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Beneficios y Claims del Producto ({benefits.length} activos):
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-mono">
                      Aparecen en tus infografías/Flow
                    </span>
                    {benefits.length < 8 && (
                      <button
                        type="button"
                        onClick={handleAddBenefit}
                        className="px-2 py-0.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 text-[10px] font-bold flex items-center gap-1 cursor-pointer transition-all border border-emerald-500/30"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Añadir Beneficio</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Quick chip pills for rapid insertion */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[9.5px] text-slate-400 font-medium">Sugerencias rápidas:</span>
                  {[
                    'Absorción Rápida',
                    'Cero Azúcar / Keto',
                    '100% Orgánico',
                    'Refuerzo Inmune',
                    'Energía Limpia',
                    'Digestión Ligera',
                    'Piel Firme y Radiante',
                    'Sin Rellenos Químicos'
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleQuickAddBenefit(chip)}
                      className="px-2 py-0.5 rounded-md text-[9.5px] font-medium bg-black/40 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>

                {/* Benefits Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {benefits.map((b, idx) => (
                    <div key={idx} className="relative flex items-center">
                      <input
                        type="text"
                        value={b}
                        onChange={(e) => handleUpdateBenefit(idx, e.target.value)}
                        placeholder={`${idx + 1}. Beneficio / Claim del producto`}
                        className={`w-full pl-2.5 pr-7 py-1.5 rounded-lg border text-xs font-medium ${
                          isDark ? 'bg-black/40 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                        }`}
                      />
                      {benefits.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBenefit(idx)}
                          className="absolute right-1.5 p-1 text-slate-500 hover:text-rose-400 rounded transition-colors cursor-pointer"
                          title="Eliminar beneficio"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
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
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label className="text-[11px] font-bold text-slate-300 block">
                    1. ¿Qué Estilo de Fotografía Necesitas?
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsAddPhotoTypeModalOpen(true)}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-400/40 hover:bg-amber-500/25 flex items-center gap-1 cursor-pointer transition-all"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Añadir Tipo de Foto</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                  {allPhotoTypes.map((pt) => {
                    const isSelected = photoTypeId === pt.id;
                    const isCustom = customPhotoTypes.some((c) => c.id === pt.id);
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
                            {isCustom && (
                              <button
                                type="button"
                                onClick={(e) => handleDeleteCustomPhotoType(pt.id, e)}
                                className="text-slate-500 hover:text-rose-400 p-0.5"
                                title="Eliminar tipo personalizado"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
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
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-normal">
                      (Elige o añade tu formato preferido)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsAddRatioModalOpen(true)}
                      className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/25 flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Añadir Formato</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {allAspectRatios.map((ar) => {
                    const isCustom = customAspectRatios.some((c) => c.id === ar.id);
                    return (
                      <button
                        key={ar.id}
                        type="button"
                        onClick={() => setAspectRatio(ar.id)}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer relative ${
                          aspectRatio === ar.id
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold shadow'
                            : isDark
                            ? 'bg-black/30 border-slate-800 text-slate-200'
                            : 'bg-stone-50 border-stone-200 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{ar.label}</span>
                          {isCustom && (
                            <span
                              onClick={(e) => handleDeleteCustomRatio(ar.id, e)}
                              className="text-slate-400 hover:text-rose-400 p-0.5"
                              title="Eliminar formato"
                            >
                              <Trash2 className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <div className="text-[9px] opacity-75">{ar.sub.split('/')[0]}</div>
                      </button>
                    );
                  })}
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
                      Aprovecha que Flow genera tipografía y palabras nítidas. Elige cómo mostrar tus textos o añade tu diseño.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddInfographicModalOpen(true)}
                      className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-400/40 hover:bg-amber-500/25 flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Añadir Estilo de Diseño</span>
                    </button>
                    {infographicStyle !== 'none' && (
                      <button
                        type="button"
                        onClick={() => setInfographicStyle('none')}
                        className="text-[10px] text-slate-400 hover:text-amber-400 underline cursor-pointer"
                      >
                        Deseleccionar (Foto Limpia)
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {allInfographicStyles.map((styleOpt) => {
                    const isSelected = infographicStyle === styleOpt.id;
                    const isCustom = customInfographicStyles.some((c) => c.id === styleOpt.id);
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
                          <div className="flex items-center gap-1">
                            {isCustom && (
                              <span
                                onClick={(e) => handleDeleteCustomInfographic(styleOpt.id, e)}
                                className="text-slate-400 hover:text-rose-400 p-0.5"
                                title="Eliminar diseño"
                              >
                                <Trash2 className="w-3 h-3" />
                              </span>
                            )}
                            {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                          </div>
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
                    4. Entorno / Fondo Comercial Unificado ({allEnvironments.length} disponibles):
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddEnvModalOpen(true)}
                      className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/25 flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Añadir Escenario</span>
                    </button>
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
                  {allEnvironments.map((env) => {
                    const isSelected = environmentId === env.id;
                    const isCustom = customEnvironments.some((c) => c.id === env.id);
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
                          <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-amber-300 font-bold truncate">
                            {env.badge}
                          </span>
                          <div className="flex items-center gap-1">
                            {isCustom && (
                              <span
                                onClick={(e) => handleDeleteCustomEnv(env.id, e)}
                                className="text-slate-400 hover:text-rose-400 p-0.5"
                                title="Eliminar escenario"
                              >
                                <Trash2 className="w-3 h-3" />
                              </span>
                            )}
                            {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          </div>
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

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-black/85 border border-emerald-500/30 font-mono text-xs text-slate-100 leading-relaxed select-all max-h-[260px] overflow-y-auto">
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

      {/* Modal: Añadir Escenario Personalizado */}
      {isAddEnvModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAddEnvModalOpen(false)}
        >
          <div
            className={`max-w-md w-full rounded-2xl border p-5 space-y-4 shadow-2xl my-auto ${
              isDark ? 'bg-[#0E1612] border-emerald-500/40 text-white' : 'bg-white border-stone-200 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Añadir Escenario / Entorno Personalizado
              </h3>
              <button
                type="button"
                onClick={() => setIsAddEnvModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold block mb-1 text-slate-300">Nombre del Escenario</label>
                <input
                  type="text"
                  value={newEnvForm.label}
                  onChange={(e) => setNewEnvForm({ ...newEnvForm, label: e.target.value })}
                  placeholder="Ej: Terraza Mediterránea de Olivos"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Categoría / Etiqueta</label>
                <input
                  type="text"
                  value={newEnvForm.badge}
                  onChange={(e) => setNewEnvForm({ ...newEnvForm, badge: e.target.value })}
                  placeholder="Ej: Exterior, Rústico, Spa, Lujo"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Superficie y Fondo (Descripción para Flow)</label>
                <textarea
                  value={newEnvForm.surfaceEs}
                  onChange={(e) => setNewEnvForm({ ...newEnvForm, surfaceEs: e.target.value })}
                  placeholder="Ej: sobre mesa de madera rústica de olivo frente al mar con flores secas y fondo de colinas doradas"
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Iluminación (Descripción técnica)</label>
                <input
                  type="text"
                  value={newEnvForm.lightingEs}
                  onChange={(e) => setNewEnvForm({ ...newEnvForm, lightingEs: e.target.value })}
                  placeholder="Ej: bajo luz dorada cálida de poniente con reflejos sutiles y sombras alargadas"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddEnvModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveCustomEnv}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow"
              >
                Guardar Escenario
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Añadir Estilo de Diseño / Infografía */}
      {isAddInfographicModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAddInfographicModalOpen(false)}
        >
          <div
            className={`max-w-md w-full rounded-2xl border p-5 space-y-4 shadow-2xl my-auto ${
              isDark ? 'bg-[#0E1612] border-amber-500/40 text-white' : 'bg-white border-stone-200 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-400" />
                Añadir Estilo de Diseño e Infografía
              </h3>
              <button
                type="button"
                onClick={() => setIsAddInfographicModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold block mb-1 text-slate-300">Nombre del Estilo</label>
                <input
                  type="text"
                  value={newInfographicForm.label}
                  onChange={(e) => setNewInfographicForm({ ...newInfographicForm, label: e.target.value })}
                  placeholder="Ej: Etiquetas Neumórficas de Cristal"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Descripción Corta</label>
                <input
                  type="text"
                  value={newInfographicForm.shortDesc}
                  onChange={(e) => setNewInfographicForm({ ...newInfographicForm, shortDesc: e.target.value })}
                  placeholder="Ej: Tarjetas de vidrio esmerilado con bordes brillantes y tipografía nítida."
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Instrucción para Flow (Usa {beneficios} donde van los textos)</label>
                <textarea
                  value={newInfographicForm.promptEs}
                  onChange={(e) => setNewInfographicForm({ ...newInfographicForm, promptEs: e.target.value })}
                  placeholder="Ej: Flotando armónicamente alrededor del envase destacan tarjetas de cristal esmerilado con bordes suaves que exhiben los beneficios: {beneficios}."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddInfographicModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveCustomInfographic}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 shadow"
              >
                Guardar Estilo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Añadir Tipo de Foto / Estilo Visual */}
      {isAddPhotoTypeModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAddPhotoTypeModalOpen(false)}
        >
          <div
            className={`max-w-md w-full rounded-2xl border p-5 space-y-4 shadow-2xl my-auto ${
              isDark ? 'bg-[#0E1612] border-emerald-500/40 text-white' : 'bg-white border-stone-200 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-400" />
                Añadir Tipo de Foto / Estilo Visual
              </h3>
              <button
                type="button"
                onClick={() => setIsAddPhotoTypeModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold block mb-1 text-slate-300">Nombre del Tipo de Foto</label>
                <input
                  type="text"
                  value={newPhotoTypeForm.label}
                  onChange={(e) => setNewPhotoTypeForm({ ...newPhotoTypeForm, label: e.target.value })}
                  placeholder="Ej: Levitación Cinematográfica Botánica"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Descripción del Efecto / Encuadre</label>
                <textarea
                  value={newPhotoTypeForm.promptEs}
                  onChange={(e) => setNewPhotoTypeForm({ ...newPhotoTypeForm, promptEs: e.target.value })}
                  placeholder="Ej: Fotografía comercial publicitaria con el envase suspendido en levitación sutil en el centro con humo botánico difuso y partículas de luz"
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddPhotoTypeModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveCustomPhotoType}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow"
              >
                Guardar Tipo de Foto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Añadir Formato / Aspect Ratio */}
      {isAddRatioModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAddRatioModalOpen(false)}
        >
          <div
            className={`max-w-md w-full rounded-2xl border p-5 space-y-4 shadow-2xl my-auto ${
              isDark ? 'bg-[#0E1612] border-emerald-500/40 text-white' : 'bg-white border-stone-200 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Box className="w-4 h-4 text-emerald-400" />
                Añadir Formato / Relación de Aspecto
              </h3>
              <button
                type="button"
                onClick={() => setIsAddRatioModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold block mb-1 text-slate-300">Relación (ej: 3:4, 2:3, 21:9)</label>
                <input
                  type="text"
                  value={newRatioForm.id}
                  onChange={(e) => setNewRatioForm({ ...newRatioForm, id: e.target.value })}
                  placeholder="Ej: 3:4"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Nombre / Uso</label>
                <input
                  type="text"
                  value={newRatioForm.label}
                  onChange={(e) => setNewRatioForm({ ...newRatioForm, label: e.target.value })}
                  placeholder="Ej: 3:4 Retrato Editorial"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
              <div>
                <label className="font-bold block mb-1 text-slate-300">Instrucción de Encuadre para Flow</label>
                <input
                  type="text"
                  value={newRatioForm.promptEs}
                  onChange={(e) => setNewRatioForm({ ...newRatioForm, promptEs: e.target.value })}
                  placeholder="Ej: formato vertical 3:4 con encuadre editorial equilibrado"
                  className="w-full px-3 py-2 rounded-lg border border-slate-700 bg-black/50 text-white text-xs"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddRatioModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveCustomRatio}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow"
              >
                Guardar Formato
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
