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
} from 'lucide-react';

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
  musicStyleEs: string;
  musicStyleEn: string;
}

const MUSIC_OPTIONS = [
  {
    label: 'Piano Botánico y Cuerdas de Bienestar (Spa)',
    es: 'colocar música de fondo instrumental relajante de spa con piano suave, cuerdas cálidas y brisa natural sutil',
    en: 'warm, soothing spa instrumental background music with soft piano, gentle strings, and subtle nature ambiance',
  },
  {
    label: 'Cinemático Inspirador y Percusión Orgánica (Energía)',
    es: 'colocar música de fondo cinematográfica e inspiradora con percusión orgánica suave, violonchelo cálido y efectos en cámara lenta',
    en: 'uplifting cinematic background music with soft organic percussion, warm cello swells, and slow-motion sound effects',
  },
  {
    label: 'Guitarra Acústica Refrescante y Agua Cristalina (Detox)',
    es: 'colocar música de fondo acústica fresca y alegre con guitarra luminosa, marimba suave y sonido cristalino de agua',
    en: 'bright, refreshing acoustic guitar background music with soft marimba notes and crisp water sound effects',
  },
  {
    label: 'Folk Acústico Cálido y Tradición Artesanal (Miel/Hogar)',
    es: 'colocar música de fondo acústica cálida con guitarra española suave, notas de arpa ligera y ambiente matutino acogedor',
    en: 'warm artisanal acoustic background music with gentle fingerpicked guitar, light harp notes, and cozy morning ambiance',
  },
];

const QUICK_PRESETS: PresetTemplate[] = [
  {
    label: 'Citrato de Magnesio',
    productName: 'Magnesio Citrate 500mg · Natural Gold',
    headline: 'DESCANSO PROFUNDO Y MÚSCULOS SIN CALAMBRES',
    benefit1: 'Sueño Reparador',
    benefit2: 'Alivia Calambres',
    benefit3: 'Calma el Estrés',
    benefit4: 'Energía Celular',
    dosage: '100 Cápsulas · Uso: 2 cápsulas antes de dormir',
    packaging: 'frasco de vidrio ámbar oscuro con tapa dorada metálica y etiqueta verde esmeralda con letras doradas',
    environment: 'partículas de polvo de oro mágico y hojas de lavanda y eucalipto flotando suavemente',
    musicStyleEs: MUSIC_OPTIONS[0].es,
    musicStyleEn: MUSIC_OPTIONS[0].en,
  },
  {
    label: 'Omega 3 + Vitamina E',
    productName: 'Omega 3 Ultra Pure · 1000mg EPA/DHA',
    headline: 'CORAZÓN SANO, MEMORIA ACTIVA Y CIRCULACIÓN',
    benefit1: 'Protege el Corazón',
    benefit2: 'Memoria y Enfoque',
    benefit3: 'Baja Triglicéridos',
    benefit4: 'Visión y Articulaciones',
    dosage: '90 Cápsulas Blandas (Softgels) · Uso: 2 al día',
    packaging: 'frasco ámbar ancho con gotas de frescura, tapa dorada con sello de seguridad y cápsulas softgel doradas traslúcidas',
    environment: 'ondas de luz dorada líquida y burbujas cristalinas de pureza marina en cámara lenta',
    musicStyleEs: MUSIC_OPTIONS[1].es,
    musicStyleEn: MUSIC_OPTIONS[1].en,
  },
  {
    label: 'Biotina + Colágeno Capilar',
    productName: 'Biotina + Vitamina E · Hair & Skin Glow',
    headline: 'CABELLO ABUNDANTE, PIEL FIRME Y UÑAS FUERTES',
    benefit1: 'Frena la Caída',
    benefit2: 'Brillo y Volumen',
    benefit3: 'Uñas Indestructibles',
    benefit4: 'Piel Luminosa',
    dosage: '60 Gomitas / Cápsulas Masticables · Uso: 2 al día',
    packaging: 'frasco ámbar con etiqueta rosa pastel y acabados en oro brillante con gotas de rocío',
    environment: 'pétalos de rosa, hojas frescas de menta y destellos bokeh dorados y rosados',
    musicStyleEs: MUSIC_OPTIONS[0].es,
    musicStyleEn: MUSIC_OPTIONS[0].en,
  },
  {
    label: 'Ashwagandha + Melatonina',
    productName: 'Ashwagandha Orgánica · Calma & Bienestar',
    headline: 'ADIÓS ANSIEDAD, ESTRÉS Y CANSANCIO MENTAL',
    benefit1: 'Reduce el Cortisol',
    benefit2: 'Calma la Ansiedad',
    benefit3: 'Enfoque Mental',
    benefit4: 'Sueño Profundo',
    dosage: '90 Cápsulas Vegetales · Uso: 2 al día',
    packaging: 'frasco de vidrio ámbar con etiqueta crema botánica y sello dorado GMP Certified',
    environment: 'raíces botánicas naturales, musgo verde húmedo y rayos de sol cálidos de atardecer',
    musicStyleEs: MUSIC_OPTIONS[3].es,
    musicStyleEn: MUSIC_OPTIONS[3].en,
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
  const [selectedMusicIndex, setSelectedMusicIndex] = useState<number>(0);
  const [formatRatio, setFormatRatio] = useState<'9:16 Vertical' | '1:1 Estudio' | '16:9 Horizontal'>('1:1 Estudio');
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
  };

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const currentMusic = MUSIC_OPTIONS[selectedMusicIndex] || MUSIC_OPTIONS[0];

  // Generated Gemini Studio Prompt
  const generatedPosterPromptEs = `Fotografía comercial de estudio en formato ${formatRatio} de un producto natural llamado "${productName}". En el centro, un ${packaging}, con tipografía perfectamente legible y nítida. Alrededor del frasco, ${environment} con iluminación de estudio comercial cálida. Flotando simétricamente alrededor del frasco hay 4 medallones circulares de oro cepillado con iconos luminosos: 1) "${benefit1}", 2) "${benefit2}", 3) "${benefit3}", 4) "${benefit4}". Fotografía hiperrealista, lente macro 85mm f/1.8, 8k.`;

  const generatedPosterPromptEn = `Commercial studio product photography in ${formatRatio} aspect ratio for a natural wellness product named "${productName}". Centered ${packaging} with tack-sharp legible label typography. Surrounding the bottle, ${environment} with warm commercial studio rim lighting. Floating symmetrically around the bottle are 4 circular brushed gold medallions with glowing icons: 1) "${benefit1}", 2) "${benefit2}", 3) "${benefit3}", 4) "${benefit4}". Hyper-realistic commercial product photography, 85mm macro lens f/1.8, 8k.`;

  // Generated 4 Scenes for Flow with Background Music included
  const generatedScenes = [
    {
      num: 1,
      time: '00:00 – 00:04s',
      title: 'Escena 1: Gancho Visual + Música de Fondo',
      promptEs: `El envase de "${productName}" permanece perfectamente firme y nítido en el centro. En cámara lenta (slow motion), ${environment} se mueven suavemente alrededor del frasco mientras un haz de luz dorada ilumina la etiqueta. Movimiento de cámara: ${cameraMotion}. Audio: ${currentMusic.es}.`,
      promptEn: `The "${productName}" bottle remains perfectly still and sharp in the center. In super slow motion, ${environment} drift gently around the bottle while a warm golden light beam sweeps across the label. Camera motion: ${cameraMotion}. Audio: ${currentMusic.en}.`,
      voiceover: `¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${productName.split('·')[0].trim()}.`,
      screenText: `✨ ${headline}`,
    },
    {
      num: 2,
      time: '00:04 – 00:08s',
      title: 'Escena 2: Beneficios 1 y 2 en Acción',
      promptEs: `Movimiento orbital suave de 15 grados alrededor del envase de "${productName}". Destellos dorados y ${environment} flotan en cámara lenta resaltando los medallones de "${benefit1}" y "${benefit2}". Audio: continúa de forma envolvente al ${currentMusic.es} con un destello sonoro cristalino.`,
      promptEn: `Smooth 15-degree orbital camera movement around the "${productName}" bottle. Golden sparkles and ${environment} float in slow motion highlighting the "${benefit1}" and "${benefit2}" medallions. Audio: continuous ${currentMusic.en} with a soft crystal chime.`,
      voiceover: `Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días.`,
      screenText: `✅ 1. ${benefit1} · ✅ 2. ${benefit2}`,
    },
    {
      num: 3,
      time: '00:08 – 00:12s',
      title: 'Escena 3: Beneficios 3 y 4 + Ingredientes Puros',
      promptEs: `Plano detalle macro del envase de "${productName}" rodeado de sus ingredientes naturales puros con iluminación cálida dorada resaltando "${benefit3}" y "${benefit4}". Audio: ${currentMusic.es}.`,
      promptEn: `Macro close-up shot of the "${productName}" bottle surrounded by its pure natural ingredients with warm golden lighting highlighting "${benefit3}" and "${benefit4}". Audio: ${currentMusic.en}.`,
      voiceover: `Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural.`,
      screenText: `🌿 3. ${benefit3} · 🛡️ 4. ${benefit4}`,
    },
    {
      num: 4,
      time: '00:12 – 00:16s',
      title: 'Escena 4: Cierre con los 4 Beneficios y Dosis',
      promptEs: `Plano heroico final de "${productName}" con sus 4 medallones dorados ("${benefit1}", "${benefit2}", "${benefit3}", "${benefit4}") brillando en armonía bajo un barrido de luz cálida. Audio: acorde final armónico y elegante al ${currentMusic.es}.`,
      promptEn: `Final hero shot of "${productName}" with its 4 golden medallions gleaming harmoniously with a warm light sweep. Audio: harmonious resolving final chord of ${currentMusic.en}.`,
      voiceover: `${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!`,
      screenText: `📦 ${dosage} · 💬 ¡Pídelo hoy!`,
    },
  ];

  const fullExportBundle =
    `=== PROYECTO PERSONALIZADO: ${productName} ===\n\n` +
    `[PROMPT DE IMAGEN GEMINI]:\n${
      outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn
    }\n\n` +
    `[MÚSICA DE FONDO ELEGIDA]:\n${outputLang === 'es' ? currentMusic.es : currentMusic.en}\n\n` +
    `[GUION Y 4 ESCENAS CON MÚSICA PARA GOOGLE FLOW (16 SEGUNDOS)]:\n` +
    generatedScenes
      .map(
        (s) =>
          `\n• ${s.title} (${s.time})\n  Prompt Escena + Música: ${
            outputLang === 'es' ? s.promptEs : s.promptEn
          }\n  Texto en pantalla: ${s.screenText}\n  Voz en off: "${s.voiceover}"`
      )
      .join('\n');

  return (
    <section id="constructor-prompts" className="py-16 border-t border-emerald-900/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Wand2 className="w-3.5 h-3.5" /> Constructor Interactivo de Prompts, Escenas y Música
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Crea tus Prompts de Imagen y Escenas con Música de Fondo a Medida
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Personaliza tu producto natural, sus <strong>4 beneficios principales</strong> y el{' '}
              <strong>estilo de música de fondo</strong>. Obtendrás al instante el prompt de imagen para Gemini y las 4 escenas con música integrada para Flow.
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
            className={`lg:col-span-5 rounded-3xl border p-6 space-y-5 ${
              isDark
                ? 'bg-[#101714] border-emerald-900/60 shadow-xl'
                : 'bg-white border-stone-200 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className={`font-bold text-base flex items-center gap-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                <Sliders className="w-4 h-4 text-emerald-400" /> 1. Datos de tu Producto, Beneficios y Música
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
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                Nombre del Producto y Marca
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isDark
                    ? 'bg-black/50 border-slate-700 text-white'
                    : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            {/* Headline */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400">
                Promesa Principal / Gancho del Video
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isDark
                    ? 'bg-black/50 border-slate-700 text-white'
                    : 'bg-stone-50 border-stone-300 text-stone-900'
                }`}
              />
            </div>

            {/* 4 Key Benefits */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Los 4 Beneficios Clave del Producto
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">Beneficio #1</span>
                  <input
                    type="text"
                    value={benefit1}
                    onChange={(e) => setBenefit1(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                      isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">Beneficio #2</span>
                  <input
                    type="text"
                    value={benefit2}
                    onChange={(e) => setBenefit2(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                      isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">Beneficio #3</span>
                  <input
                    type="text"
                    value={benefit3}
                    onChange={(e) => setBenefit3(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                      isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">Beneficio #4</span>
                  <input
                    type="text"
                    value={benefit4}
                    onChange={(e) => setBenefit4(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-semibold ${
                      isDark ? 'bg-black/50 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Background Music Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5" /> Música de Fondo para el Video en Flow
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

            {/* Dosage & Specs */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                Contenido y Dosis (Para el Cierre)
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
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Descripción del Envase
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

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Elementos en Movimiento (Para Flow Slow-Motion)
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
                    setFormatRatio(e.target.value as '9:16 Vertical' | '1:1 Estudio' | '16:9 Horizontal')
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
                  <option value="Orbit suave 15° (Giro corto 3D)">Orbit suave 15°</option>
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
                  RESULTADO GENERADO EN TIEMPO REAL
                </span>
                <h3 className={`text-xl font-bold font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  Prompts + Escenas con Música para {productName}
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
                  <Sparkles className="w-4 h-4" /> 1. Prompt de Imagen para Gemini (Con los 4 Medallones Dorados)
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

            {/* 2. Google Flow 4 Scenes with Background Music & Benefit Voiceover */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Film className="w-4 h-4" /> 2. Las 4 Escenas en Flow (Con Música de Fondo y Beneficios)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px] font-semibold flex items-center gap-1">
                  <Music className="w-3 h-3" /> Música de fondo incluida en cada escena
                </span>
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
                            <Copy className="w-3 h-3" /> Copiar Escena {sc.num} + Música
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-200 bg-black/70 p-2.5 rounded-lg border border-slate-800 select-all">
                      {outputLang === 'es' ? sc.promptEs : sc.promptEn}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] pt-1">
                      <span className="text-emerald-300 font-semibold">{sc.screenText}</span>
                      <span className="text-slate-300 italic flex items-center gap-1">
                        <Mic className="w-3 h-3 text-amber-400 shrink-0" /> "{sc.voiceover}"
                      </span>
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
