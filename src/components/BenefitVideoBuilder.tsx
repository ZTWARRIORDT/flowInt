import React, { useState } from 'react';
import {
  Wand2,
  Copy,
  Check,
  Sparkles,
  Film,
  Mic,
  Award,
  Sliders,
  RotateCcw,
  Music,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';
import { VOICE_PROFILES_LIBRARY } from '../data/flowData';

interface Props {
  isDark: boolean;
}

interface PresetTemplate {
  label: string;
  productName: string;
  headline: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  dosage: string;
  packaging: string;
  environment: string;
  voiceIndex: number;
  musicIndex: number;
}

const MUSIC_OPTIONS = [
  {
    label: 'Piano Botánico y Cuerdas de Bienestar (Spa)',
    es: 'música de fondo instrumental relajante de spa con piano suave y cuerdas cálidas a volumen moderado bajo la voz',
    en: 'warm, soothing spa instrumental background music with soft piano and gentle strings ducked under the voice',
  },
  {
    label: 'Cinemático Inspirador y Percusión Orgánica (Energía)',
    es: 'música de fondo cinematográfica e inspiradora con percusión orgánica suave y violonchelo cálido bajo la voz',
    en: 'uplifting cinematic background music with soft organic percussion and warm cello swells ducked under the voice',
  },
  {
    label: 'Guitarra Acústica Refrescante y Agua Cristalina (Detox)',
    es: 'música de fondo acústica fresca y alegre con guitarra luminosa y sonido cristalino de agua bajo la voz',
    en: 'bright, refreshing acoustic guitar background music with crisp water sound effects ducked under the voice',
  },
  {
    label: 'Folk Acústico Cálido y Tradición Artesanal (Miel/Hogar)',
    es: 'música de fondo acústica cálida con guitarra española suave y notas de arpa ligera bajo la voz',
    en: 'warm artisanal acoustic background music with gentle fingerpicked guitar and light harp notes ducked under the voice',
  },
];

const QUICK_PRESETS: PresetTemplate[] = [
  {
    label: 'Citrato de Magnesio',
    productName: 'Magnesio Citrate · Natural Gold',
    headline: 'DESCANSO PROFUNDO Y MÚSCULOS SIN CALAMBRES',
    benefit1: 'Sueño Reparador',
    benefit2: 'Alivia Calambres',
    benefit3: 'Calma el Estrés',
    benefit4: 'Energía Celular',
    dosage: 'Toma dos cápsulas antes de dormir',
    packaging: 'frasco de vidrio ámbar oscuro con tapa dorada metálica y etiqueta verde esmeralda con logo botánico dorado limpio',
    environment: 'partículas de polvo de oro mágico y hojas de lavanda y eucalipto flotando suavemente',
    voiceIndex: 0,
    musicIndex: 0,
  },
  {
    label: 'Omega 3 + Vitamina E',
    productName: 'Omega 3 Ultra Pure · 1000mg',
    headline: 'CORAZÓN SANO, MEMORIA ACTIVA Y CIRCULACIÓN',
    benefit1: 'Protege el Corazón',
    benefit2: 'Memoria y Enfoque',
    benefit3: 'Baja Triglicéridos',
    benefit4: 'Visión y Articulaciones',
    dosage: 'Toma dos cápsulas blandas al día',
    packaging: 'frasco ámbar ancho con gotas de frescura, tapa dorada y logo simbólico dorado de corazón y ola marina',
    environment: 'ondas de luz dorada líquida y burbujas cristalinas de pureza en cámara lenta',
    voiceIndex: 1,
    musicIndex: 1,
  },
  {
    label: 'Biotina + Colágeno Capilar',
    productName: 'Biotina + Vitamina E · Hair Glow',
    headline: 'CABELLO ABUNDANTE, PIEL FIRME Y UÑAS FUERTES',
    benefit1: 'Frena la Caída',
    benefit2: 'Brillo y Volumen',
    benefit3: 'Uñas Fuertes',
    benefit4: 'Piel Luminosa',
    dosage: 'Toma dos gomitas masticables al día',
    packaging: 'frasco ámbar con etiqueta rosa pastel y logo floral estampado en oro brillante con gotas de rocío',
    environment: 'pétalos de rosa, hojas frescas de menta y destellos bokeh dorados y rosados',
    voiceIndex: 2,
    musicIndex: 0,
  },
  {
    label: 'Ashwagandha + Melatonina',
    productName: 'Ashwagandha Orgánica · Calma Total',
    headline: 'ADIÓS ANSIEDAD, ESTRÉS Y CANSANCIO MENTAL',
    benefit1: 'Reduce el Cortisol',
    benefit2: 'Calma la Ansiedad',
    benefit3: 'Enfoque Mental',
    benefit4: 'Sueño Profundo',
    dosage: 'Toma dos cápsulas vegetales al día',
    packaging: 'frasco de vidrio ámbar con etiqueta crema botánica y emblema dorado de raíz sagrada',
    environment: 'raíces botánicas naturales, musgo verde húmedo y rayos de sol cálidos de atardecer',
    voiceIndex: 3,
    musicIndex: 3,
  },
];

export const BenefitVideoBuilder: React.FC<Props> = ({ isDark }) => {
  const [productName, setProductName] = useState(QUICK_PRESETS[0].productName);
  const [headline, setHeadline] = useState(QUICK_PRESETS[0].headline);
  const [benefit1, setBenefit1] = useState(QUICK_PRESETS[0].benefit1);
  const [benefit2, setBenefit2] = useState(QUICK_PRESETS[0].benefit2);
  const [benefit3, setBenefit3] = useState(QUICK_PRESETS[0].benefit3);
  const [benefit4, setBenefit4] = useState(QUICK_PRESETS[0].benefit4);
  const [dosage, setDosage] = useState(QUICK_PRESETS[0].dosage);
  const [packaging, setPackaging] = useState(QUICK_PRESETS[0].packaging);
  const [environment, setEnvironment] = useState(QUICK_PRESETS[0].environment);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState<number>(0);
  const [selectedMusicIndex, setSelectedMusicIndex] = useState<number>(0);
  const [formatRatio, setFormatRatio] = useState<'1:1 Estudio' | '9:16 Vertical' | '16:9 Horizontal'>('1:1 Estudio');
  const [cameraMotion, setCameraMotion] = useState('Dolly In lento (Acercamiento cinematográfico)');
  const [outputLang, setOutputLang] = useState<'es' | 'en'>('es');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const applyPreset = (p: PresetTemplate) => {
    setProductName(p.productName);
    setHeadline(p.headline);
    setBenefit1(p.benefit1);
    setBenefit2(p.benefit2);
    setBenefit3(p.benefit3);
    setBenefit4(p.benefit4);
    setDosage(p.dosage);
    setPackaging(p.packaging);
    setEnvironment(p.environment);
    setSelectedVoiceIndex(p.voiceIndex);
    setSelectedMusicIndex(p.musicIndex);
  };

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const currentVoice = VOICE_PROFILES_LIBRARY[selectedVoiceIndex] || VOICE_PROFILES_LIBRARY[0];
  const currentMusic = MUSIC_OPTIONS[selectedMusicIndex] || MUSIC_OPTIONS[0];

  // Generated Gemini Studio Prompt (Clean logos/icons without small text that warps)
  const generatedPosterPromptEs = `Fotografía comercial de estudio en formato ${formatRatio} de un producto natural llamado "${productName}". En el centro, un ${packaging}. Alrededor del frasco, ${environment} con iluminación de estudio comercial cálida. Flotando simétricamente alrededor del frasco hay 4 medallones circulares de oro cepillado únicamente con iconos/logos simbólicos grabados en 3D representando: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, sin letras pequeñas ni textos largos que se deformen. Fotografía hiperrealista, lente macro 85mm f/1.8, 8k.`;

  const generatedPosterPromptEn = `Commercial studio product photography in ${formatRatio} aspect ratio for a natural wellness product named "${productName}". Centered ${packaging}. Surrounding the bottle, ${environment} with warm commercial studio rim lighting. Floating symmetrically around the bottle are 4 circular brushed gold medallions featuring ONLY clean 3D engraved symbolic icons/logos representing: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, with no small letters or text that could warp. Hyper-realistic commercial product photography, 85mm macro lens f/1.8, 8k.`;

  // Generated 4 Scenes for Flow (No animated letters + Same Character Voice + Background Music)
  const generatedScenes = [
    {
      num: 1,
      time: '00:00 – 00:04s',
      title: 'Escena 1: Gancho Visual (Sin Animar Letras + Misma Voz)',
      voiceLine: `¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${productName.split('·')[0].trim()}.`,
      promptEs: `El envase de "${productName}" y sus logos dorados permanecen 100% firmes y estáticos en el centro. NO animar letras ni generar textos móviles en pantalla. En cámara lenta (slow motion), únicamente ${environment} se mueven suavemente alrededor del frasco mientras un haz de luz dorada ilumina el logo. Cámara: ${cameraMotion}. Audio: colocar ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${productName.split('·')[0].trim()}."`,
      promptEn: `The "${productName}" bottle and its gold logos remain 100% still and static in the center. Do NOT animate letters or generate moving on-screen text. In super slow motion, only ${environment} drift gently around the bottle while a warm golden light beam sweeps across the logo emblem. Camera: ${cameraMotion}. Audio: ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${productName.split('·')[0].trim()}."`,
    },
    {
      num: 2,
      time: '00:04 – 00:08s',
      title: 'Escena 2: Beneficios 1 y 2 (Brillo en Logos + Misma Voz)',
      voiceLine: `Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días.`,
      promptEs: `El envase permanece completamente estático sin animar ni deformar ninguna letra. Un destello cálido de luz recorre únicamente el relieve metálico de los iconos simbólicos dorados mientras ${environment} flotan en cámara lenta. Audio: continúa la ${currentMusic.es} con un destello sonoro cristalino. ${currentVoice.descriptionEs}, diciendo: "Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días."`,
      promptEn: `The bottle stays completely static without animating or warping any letters. A warm light flare sweeps only across the metallic relief of the gold symbolic icons while ${environment} float in slow motion. Audio: continuous ${currentMusic.en} with a soft crystal chime. ${currentVoice.descriptionEn}, speaking in Spanish: "Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días."`,
    },
    {
      num: 3,
      time: '00:08 – 00:12s',
      title: 'Escena 3: Beneficios 3 y 4 + Ingredientes Puros (Misma Voz)',
      voiceLine: `Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural.`,
      promptEs: `Plano detalle macro de los ingredientes naturales puros junto al envase estático de "${productName}" con iluminación cálida dorada y partículas brillantes ascendiendo suavemente. Prohibido animar letras. Audio: continúa la ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural."`,
      promptEn: `Macro close-up shot of the pure natural ingredients next to the static "${productName}" bottle with warm golden lighting and glowing particles rising gently. Do NOT animate letters. Audio: continuous ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural."`,
    },
    {
      num: 4,
      time: '00:12 – 00:16s',
      title: 'Escena 4: Cierre Comercial y Dosis (Misma Voz)',
      voiceLine: `${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!`,
      promptEs: `Plano heroico final de "${productName}" y sus 4 medallones de iconos dorados brillando en armonía bajo un barrido de luz cálida. El envase y su logo permanecen 100% fijos sin animar letras. Audio: acorde final armónico de ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!"`,
      promptEn: `Final hero shot of "${productName}" and its 4 golden icon medallions gleaming harmoniously with a warm light sweep. The bottle and logo stay 100% static without animating letters. Audio: harmonious resolving final chord of ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!"`,
    },
  ];

  const fullExportBundle =
    `=== PROYECTO PERSONALIZADO: ${productName} ===\n\n` +
    `[PERFIL DE VOZ FIJO EN LAS 4 ESCENAS]:\n${
      outputLang === 'es' ? currentVoice.descriptionEs : currentVoice.descriptionEn
    }\n\n` +
    `[MÚSICA DE FONDO]:\n${outputLang === 'es' ? currentMusic.es : currentMusic.en}\n\n` +
    `[PROMPT DE IMAGEN GEMINI (ICONOS/LOGOS SIN LETRAS PEQUEÑAS)]:\n${
      outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn
    }\n\n` +
    `[LAS 4 ESCENAS PARA GOOGLE FLOW (SIN ANIMAR LETRAS + MISMA VOZ + MÚSICA)]:\n` +
    generatedScenes
      .map(
        (s) =>
          `\n• ${s.title} (${s.time})\n  Prompt Escena: ${
            outputLang === 'es' ? s.promptEs : s.promptEn
          }\n  Voz del personaje: "${s.voiceLine}"`
      )
      .join('\n');

  return (
    <section id="constructor-prompts" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Wand2 className="w-3.5 h-3.5" /> Constructor a Medida (Sin Animar Letras + Misma Voz + Música)
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Genera tus Prompts con la Misma Voz de Personaje y Logos Estáticos
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Elige tus 4 beneficios, selecciona el <strong>personaje de voz fijo</strong> y la{' '}
              <strong>música de fondo</strong>. Todas las escenas bloquearán la animación de letras para evitar deformaciones.
            </p>
          </div>

          {/* Quick Preset Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1">Plantillas rápidas:</span>
            {QUICK_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  productName === preset.productName
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                    : isDark
                    ? 'bg-[#151E1A] text-emerald-300 border-emerald-800/60 hover:border-amber-400'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:border-amber-500'
                }`}
              >
                + {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Column */}
          <div
            className={`lg:col-span-5 rounded-3xl border p-6 space-y-4 ${
              isDark
                ? 'bg-[#101714] border-emerald-900/60 shadow-xl'
                : 'bg-white border-stone-200 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className={`font-bold text-base flex items-center gap-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                <Sliders className="w-4 h-4 text-emerald-400" /> Configura Producto, Voz y Música
              </h3>
              <button
                type="button"
                onClick={() => applyPreset(QUICK_PRESETS[0])}
                className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Restaurar
              </button>
            </div>

            {/* Product Name */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                Nombre del Producto y Marca
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl border text-xs font-semibold ${
                  isDark
                    ? 'bg-black/50 border-slate-700 text-white'
                    : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400">
                Promesa Principal (Narrada en la Escena 1)
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

            {/* 4 Key Benefits */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Los 4 Beneficios (Iconos Simbólicos + Locución)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={benefit1}
                  onChange={(e) => setBenefit1(e.target.value)}
                  placeholder="Beneficio 1"
                  className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                    isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                />
                <input
                  type="text"
                  value={benefit2}
                  onChange={(e) => setBenefit2(e.target.value)}
                  placeholder="Beneficio 2"
                  className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                    isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                />
                <input
                  type="text"
                  value={benefit3}
                  onChange={(e) => setBenefit3(e.target.value)}
                  placeholder="Beneficio 3"
                  className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                    isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                />
                <input
                  type="text"
                  value={benefit4}
                  onChange={(e) => setBenefit4(e.target.value)}
                  placeholder="Beneficio 4"
                  className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                    isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                />
              </div>
            </div>

            {/* Consistent Character Voice Selector */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" /> Personaje de Voz Fijo (Misma Voz en las 4 Escenas)
              </label>
              <select
                value={selectedVoiceIndex}
                onChange={(e) => setSelectedVoiceIndex(Number(e.target.value))}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold ${
                  isDark
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-950'
                }`}
              >
                {VOICE_PROFILES_LIBRARY.map((vp, idx) => (
                  <option key={vp.id} value={idx} className="bg-slate-900 text-white">
                    🎙️ {vp.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Background Music Selector */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5" /> Música de Fondo para el Video
              </label>
              <select
                value={selectedMusicIndex}
                onChange={(e) => setSelectedMusicIndex(Number(e.target.value))}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold ${
                  isDark
                    ? 'bg-purple-950/30 border-purple-500/50 text-purple-200'
                    : 'bg-purple-50 border-purple-300 text-purple-950'
                }`}
              >
                {MUSIC_OPTIONS.map((m, idx) => (
                  <option key={m.label} value={idx} className="bg-slate-900 text-white">
                    🎵 {m.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dosage */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Frase de Dosis / Modo de Uso (Para el Cierre)
              </label>
              <input
                type="text"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl border text-xs ${
                  isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            {/* Packaging & Environment */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Envase y Logo Simbólico
              </label>
              <input
                type="text"
                value={packaging}
                onChange={(e) => setPackaging(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl border text-xs ${
                  isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Elementos Naturales que sí se mueven (Slow-Motion)
              </label>
              <input
                type="text"
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl border text-xs ${
                  isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            {/* Format & Camera Selectors */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">Formato</label>
                <select
                  value={formatRatio}
                  onChange={(e) =>
                    setFormatRatio(e.target.value as '1:1 Estudio' | '9:16 Vertical' | '16:9 Horizontal')
                  }
                  className={`w-full px-3 py-2 rounded-xl border text-xs font-bold ${
                    isDark ? 'bg-black/60 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                >
                  <option value="1:1 Estudio">1:1 Estudio Cuadrado</option>
                  <option value="9:16 Vertical">9:16 Vertical (Reels/Estados)</option>
                  <option value="16:9 Horizontal">16:9 Horizontal (Web/YouTube)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">Cámara en Flow</label>
                <select
                  value={cameraMotion}
                  onChange={(e) => setCameraMotion(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border text-xs font-bold ${
                    isDark ? 'bg-black/60 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                >
                  <option value="Dolly In lento (Acercamiento cinematográfico)">Dolly In lento</option>
                  <option value="Orbit suave 10° (Sin deformar logo)">Orbit suave 10°</option>
                  <option value="Static Macro (Frasco fijo + partículas en 120fps)">Static Macro</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Output Column: Live Prompts & 4-Scene Benefit Video Script */}
          <div
            className={`lg:col-span-7 rounded-3xl border p-6 space-y-6 ${
              isDark
                ? 'bg-[#101714] border-amber-500/40 shadow-2xl'
                : 'bg-white border-stone-200 shadow-xl'
            }`}
          >
            {/* Output Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                  PROMPTS GENERADOS CON BLOQUEO DE LETRAS Y VOZ FIJA
                </span>
                <h3 className={`text-xl font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {productName}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-xl bg-black/40 p-1 border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setOutputLang('es')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                      outputLang === 'es' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutputLang('en')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                      outputLang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    English
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => copyText(fullExportBundle, 'bundle-all')}
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer shadow"
                >
                  {copiedKey === 'bundle-all' ? (
                    <>
                      <Check className="w-4 h-4" /> ¡Todo Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copiar Paquete Completo
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 1. Gemini Studio Prompt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> 1. Prompt de Imagen para Gemini (4 Iconos/Logos sin Letras Pequeñas)
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyText(
                      outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn,
                      'gen-poster'
                    )
                  }
                  className="px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
                >
                  {copiedKey === 'gen-poster' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar para Gemini
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 rounded-xl bg-black/80 border border-emerald-500/40 font-mono text-xs text-slate-100 leading-relaxed select-all">
                {outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn}
              </div>
            </div>

            {/* 2. Google Flow 4 Scenes with Same Voice + Background Music */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Film className="w-4 h-4" /> 2. Las 4 Escenas en Flow (Misma Voz + Sin Animar Letras)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Letras bloqueadas
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-semibold flex items-center gap-1">
                    <UserCheck className="w-3 h-3" /> {currentVoice.name.split('(')[0]}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {generatedScenes.map((sc) => (
                  <div
                    key={sc.num}
                    className={`p-3.5 rounded-xl border space-y-2 ${
                      isDark ? 'bg-black/50 border-slate-800' : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-300">
                        {sc.title} <span className="font-mono text-slate-400">({sc.time})</span>
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          copyText(
                            outputLang === 'es' ? sc.promptEs : sc.promptEn,
                            `custom-sc-${sc.num}`
                          )
                        }
                        className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === `custom-sc-${sc.num}` ? (
                          <>
                            <Check className="w-3 h-3" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copiar Escena {sc.num}
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-200 bg-black/70 p-2.5 rounded-lg border border-slate-800 select-all">
                      {outputLang === 'es' ? sc.promptEs : sc.promptEn}
                    </p>
                    <div className="text-[11px] text-emerald-300 italic flex items-center gap-1.5 pt-0.5">
                      <Mic className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>"{sc.voiceLine}"</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
