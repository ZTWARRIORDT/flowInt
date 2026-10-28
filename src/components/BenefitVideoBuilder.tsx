import React, { useState } from 'react';
import {
  Wand2,
  Copy,
  Check,
  Sparkles,
  Film,
  Award,
  Sliders,
  RotateCcw,
  Music,
  UserCheck,
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
  const shortProdName = productName.split('·')[0].trim();

  // 1. All-in-One Gemini Studio Prompt
  const generatedPosterPromptEs = `Fotografía comercial de estudio todo-en-uno en formato ${formatRatio} de un producto natural llamado "${productName}": en el centro, un ${packaging}. Alrededor del frasco, ${environment} con iluminación de estudio comercial cálida. Flotando simétricamente alrededor del frasco hay 4 medallones circulares de oro cepillado que contienen ÚNICAMENTE iconos/logos simbólicos grabados en 3D representando: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, prohibido incluir letras pequeñas ni textos largos que se deformen. Fotografía hiperrealista, lente macro 85mm f/1.8, 8k.`;

  const generatedPosterPromptEn = `All-in-one commercial studio product photography in ${formatRatio} aspect ratio for a natural product named "${productName}": centered ${packaging}. Surrounding the bottle, ${environment} with warm commercial studio rim lighting. Floating symmetrically around the bottle are 4 circular brushed gold medallions featuring ONLY clean 3D engraved symbolic icons/logos representing: 1) ${benefit1}, 2) ${benefit2}, 3) ${benefit3}, 4) ${benefit4}, strictly no small letters or text that could warp. Hyper-realistic commercial product photography, 85mm macro lens f/1.8, 8k.`;

  // 2. Single Master Flow Video Prompt (Everything inside 1 single prompt)
  const generatedMasterFlowEs = `Video comercial cinematográfico de producto natural: el envase de "${productName}" y sus logos dorados permanecen 100% firmes, estáticos y nítidos en el centro con movimiento de cámara ${cameraMotion}. REGLA ESTRICTA: PROHIBIDO animar letras o generar textos móviles en pantalla; animar únicamente el barrido de luz cálida sobre el logo principal y sobre los 4 medallones con iconos simbólicos (${benefit1}, ${benefit2}, ${benefit3}, ${benefit4}) mientras ${environment} se mueven suavemente en cámara superlenta (120fps). MÚSICA DE FONDO: colocar ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "¿Buscas ${headline.toLowerCase()}? Descubre ${shortProdName}: su fórmula natural te brinda ${benefit1.toLowerCase()}, ${benefit2.toLowerCase()}, ${benefit3.toLowerCase()} y ${benefit4.toLowerCase()}. ${dosage}. ¡Pide el tuyo hoy mismo!"`;

  const generatedMasterFlowEn = `Cinematic commercial natural product video: the "${productName}" bottle and its gold logos remain 100% still, static, and sharp in the center with ${cameraMotion} camera motion. STRICT RULE: FORBIDDEN to animate letters or generate moving on-screen text; animate only the warm light sweep across the main logo and the 4 symbolic icon medallions (${benefit1}, ${benefit2}, ${benefit3}, ${benefit4}) while ${environment} drift gently in 120fps super slow motion. BACKGROUND MUSIC: ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "¿Buscas ${headline.toLowerCase()}? Descubre ${shortProdName}: su fórmula natural te brinda ${benefit1.toLowerCase()}, ${benefit2.toLowerCase()}, ${benefit3.toLowerCase()} y ${benefit4.toLowerCase()}. ${dosage}. ¡Pide el tuyo hoy mismo!"`;

  // 3. The 4 Scenes (Each prompt already has everything unified inside it)
  const generatedScenes = [
    {
      num: 1,
      time: '00:00 – 00:04s',
      title: 'Escena 1 (Todo-en-Uno): Gancho + Logos + Música + Voz Fija',
      promptEs: `Cámara en ${cameraMotion} hacia el envase de "${productName}" que permanece 100% firme y estático en el centro (PROHIBIDO animar letras o generar textos móviles; animar únicamente ${environment} en cámara lenta y un haz de luz dorada sobre el logo principal). Música de fondo: colocar ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${shortProdName}."`,
      promptEn: `${cameraMotion} toward the "${productName}" bottle remaining 100% still and static in the center (FORBIDDEN to animate letters or generate moving text; animate only ${environment} in slow motion and a golden light beam across the main logo). Background music: ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${shortProdName}."`,
    },
    {
      num: 2,
      time: '00:04 – 00:08s',
      title: 'Escena 2 (Todo-en-Uno): Logos de Beneficios 1 y 2 + Misma Voz + Música',
      promptEs: `El envase permanece completamente estático en el centro (PROHIBIDO animar o deformar letras; animar únicamente un destello cálido de luz que recorre el relieve metálico de los logos simbólicos de ${benefit1} y ${benefit2} mientras ${environment} flotan en cámara lenta). Música de fondo: continúa la ${currentMusic.es} con un destello sonoro cristalino. ${currentVoice.descriptionEs}, diciendo: "Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días."`,
      promptEn: `The bottle stays completely static in the center (FORBIDDEN to animate or warp letters; animate only a warm light flare sweeping across the metallic relief of the ${benefit1} and ${benefit2} symbolic logos while ${environment} float in slow motion). Background music: continuous ${currentMusic.en} with a soft crystal chime. ${currentVoice.descriptionEn}, speaking in Spanish: "Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días."`,
    },
    {
      num: 3,
      time: '00:08 – 00:12s',
      title: 'Escena 3 (Todo-en-Uno): Logos de Beneficios 3 y 4 + Misma Voz + Música',
      promptEs: `Plano cercano de los ingredientes naturales junto al envase 100% estático de "${productName}" (PROHIBIDO animar letras; animar únicamente el brillo dorado sobre los logos simbólicos de ${benefit3} y ${benefit4} y partículas luminosas ascendiendo suavemente). Música de fondo: continúa la ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural."`,
      promptEn: `Close-up shot of the natural ingredients next to the 100% static "${productName}" bottle (FORBIDDEN to animate letters; animate only the golden gleam on the ${benefit3} and ${benefit4} symbolic logos and glowing particles rising gently). Background music: continuous ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural."`,
    },
    {
      num: 4,
      time: '00:12 – 00:16s',
      title: 'Escena 4 (Todo-en-Uno): Cierre Heroico y Dosis + Misma Voz + Música',
      promptEs: `Plano heroico final de "${productName}" y sus 4 medallones de logos simbólicos dorados brillando en armonía con el envase 100% fijo (PROHIBIDO animar letras o textos). Música de fondo: acorde final armónico y resolutivo de ${currentMusic.es}. ${currentVoice.descriptionEs}, diciendo: "${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!"`,
      promptEn: `Final hero shot of "${productName}" and its 4 golden symbolic logo medallions gleaming harmoniously with the bottle 100% static (FORBIDDEN to animate letters or text). Background music: harmonious resolving final chord of ${currentMusic.en}. ${currentVoice.descriptionEn}, speaking in Spanish: "${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!"`,
    },
  ];

  const fullExportBundle =
    `=== PROYECTO TODO-EN-UNO: ${productName} ===\n\n` +
    `1) PROMPT DE IMAGEN GEMINI (TODO EN UNO):\n${
      outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn
    }\n\n` +
    `2) PROMPT MAESTRO DE VIDEO FLOW EN 1 SOLO BLOQUE (TODO EN UNO):\n${
      outputLang === 'es' ? generatedMasterFlowEs : generatedMasterFlowEn
    }\n\n` +
    `3) SECUENCIA DE 4 ESCENAS FLOW (CADA PROMPT YA TIENE TODO ADENTRO):\n` +
    generatedScenes
      .map(
        (s) =>
          `\n[${s.title} · ${s.time}]\n${outputLang === 'es' ? s.promptEs : s.promptEn}`
      )
      .join('\n');

  return (
    <section id="constructor-prompts" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Wand2 className="w-3.5 h-3.5" /> Constructor de Prompts Todo-en-Uno (Nada por Separado)
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Personaliza tu Producto y Obtén el Prompt Completo Todo-en-Uno
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Todo lo que configures a la izquierda se une automáticamente dentro de un <strong>único prompt listo para copiar y pegar</strong> (escena, prohibición de animar letras animando solo logos, música de fondo, misma voz de personaje y diálogo).
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
                <Sliders className="w-4 h-4 text-emerald-400" /> Datos que se Integran al Prompt
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
                Nombre del Producto
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
                Promesa Principal (Integrada en el Gancho)
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
                <Award className="w-3.5 h-3.5" /> Los 4 Beneficios (Logos Simbólicos + Locución)
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
                <UserCheck className="w-3.5 h-3.5" /> Misma Voz de Personaje (Se incrusta dentro del prompt)
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
                <Music className="w-3.5 h-3.5" /> Música de Fondo (Se incrusta dentro del prompt)
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
                Frase de Dosis / Modo de Uso
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
                Elementos Naturales en Movimiento (Slow-Motion)
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

          {/* Right Output Column: Self-Contained All-in-One Prompts */}
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
                  PROMPTS TODO-EN-UNO (ESCENA + SOLO LOGOS + VOZ FIJA + MÚSICA + GUION)
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
                      <Copy className="w-4 h-4" /> Copiar Todo
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 1. All-in-One Gemini Studio Prompt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> 1. Prompt de Imagen Todo-en-Uno para Gemini
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyText(
                      outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn,
                      'gen-poster'
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold flex items-center gap-1 cursor-pointer transition-all"
                >
                  {copiedKey === 'gen-poster' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> ¡Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar Prompt de Imagen
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 rounded-xl bg-black/85 border border-emerald-500/40 font-mono text-xs text-slate-100 leading-relaxed select-all">
                {outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn}
              </div>
            </div>

            {/* 2. Single Unified Master Video Prompt for Flow */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#16221C] to-[#1A1610] border border-amber-500/60 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Film className="w-4 h-4" /> 2. Prompt Maestro de Video Todo-en-Uno para Flow (Todo en 1 Solo Bloque)
                </span>
                <button
                  type="button"
                  onClick={() =>
                    copyText(
                      outputLang === 'es' ? generatedMasterFlowEs : generatedMasterFlowEn,
                      'gen-master-flow'
                    )
                  }
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer transition-all shadow"
                >
                  {copiedKey === 'gen-master-flow' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> ¡Prompt Maestro Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar Prompt Maestro Todo-en-Uno
                    </>
                  )}
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-black/85 border border-amber-500/40 font-mono text-xs text-slate-100 leading-relaxed select-all">
                {outputLang === 'es' ? generatedMasterFlowEs : generatedMasterFlowEn}
              </div>
            </div>

            {/* 3. The 4 Self-Contained Scene Prompts */}
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Film className="w-4 h-4" /> 3. Las 4 Escenas Todo-en-Uno (Cada Prompt ya Incluye Escena + Voz + Música + Diálogo)
              </span>

              <div className="grid grid-cols-1 gap-3">
                {generatedScenes.map((sc) => (
                  <div
                    key={sc.num}
                    className={`p-3.5 rounded-xl border space-y-2 ${
                      isDark ? 'bg-black/55 border-slate-800' : 'bg-stone-50 border-stone-200'
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
                        className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-extrabold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === `custom-sc-${sc.num}` ? (
                          <>
                            <Check className="w-3 h-3" /> ¡Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copiar Escena {sc.num} Todo-en-1
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-100 bg-black/80 p-3 rounded-lg border border-slate-800 leading-relaxed select-all">
                      {outputLang === 'es' ? sc.promptEs : sc.promptEn}
                    </p>
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
