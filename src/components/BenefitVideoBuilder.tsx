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
}

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
  const [formatRatio, setFormatRatio] = useState<'9:16 Vertical' | '16:9 Horizontal'>('9:16 Vertical');
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

  // Generated Gemini Poster Prompt
  const generatedPosterPromptEs = `Póster publicitario comercial en formato ${formatRatio} de un producto natural llamado "${productName}". En el centro, un ${packaging}, con tipografía perfectamente legible y nítida. En la parte superior, título de impacto en letras doradas metálicas en 3D: "${headline}". Alrededor del frasco, ${environment} con iluminación de estudio comercial cálida. Rodeando o debajo del frasco, 4 medallones de oro cepillado con iconos grabados y textos claros de beneficios: 1) "${benefit1}", 2) "${benefit2}", 3) "${benefit3}", 4) "${benefit4}". En la base inferior, recuadro elegante oscuro con ficha técnica: "${dosage}". Fotografía hiperrealista, lente macro 85mm, 8k.`;

  const generatedPosterPromptEn = `Commercial advertising poster in ${formatRatio} aspect ratio for a natural wellness product named "${productName}". Centered ${packaging} with tack-sharp legible label typography. At the top, bold 3D metallic gold serif headline: "${headline}". Surrounding the bottle, ${environment} with warm commercial studio rim lighting. Framing or below the bottle are 4 brushed gold medallions with engraved icons and clear benefit labels: 1) "${benefit1}", 2) "${benefit2}", 3) "${benefit3}", 4) "${benefit4}". At the bottom, a sleek dark specification bar reading: "${dosage}". Hyper-realistic commercial product photography, 85mm macro lens, 8k.`;

  // Generated Gemini Clean Hero Prompt (for Scene 1 First Frame)
  const generatedCleanPromptEs = `Fotografía comercial limpia en formato ${formatRatio} del producto "${productName}": un ${packaging} en el centro de la composición. Alrededor del envase, ${environment}. Sin textos externos flotantes ni medallones superpuestos. Iluminación de contorno dorada, lente macro 85mm f/2.0, etiqueta 100% nítida lista para subir como First Frame en Google Flow.`;

  // Generated 4 Scenes for Flow
  const generatedScenes = [
    {
      num: 1,
      time: '00:00 – 00:04s',
      title: 'Escena 1: Gancho Visual (Frames to Video · First Frame)',
      promptEs: `El envase de "${productName}" permanece perfectamente firme y nítido en el centro. En cámara lenta (slow motion), ${environment} se mueven suavemente alrededor del frasco mientras un haz de luz dorada ilumina la etiqueta. Movimiento de cámara: ${cameraMotion}.`,
      promptEn: `The "${productName}" bottle remains perfectly still and sharp in the center. In super slow motion, ${environment} drift gently around the bottle while a warm golden light beam sweeps across the label. Camera motion: ${cameraMotion}.`,
      voiceover: `¿Buscas ${headline.toLowerCase()}? Descubre el poder natural de ${productName.split('·')[0].trim()}.`,
      screenText: `✨ ${headline}`,
    },
    {
      num: 2,
      time: '00:04 – 00:08s',
      title: 'Escena 2: Beneficios 1 y 2 en Acción (Scene Builder · Extend)',
      promptEs: `Movimiento orbital suave de 15 grados alrededor del envase de "${productName}". Destellos dorados y ${environment} flotan en cámara lenta resaltando la pureza de la fórmula natural. La etiqueta se mantiene 100% legible.`,
      promptEn: `Smooth 15-degree orbital camera movement around the "${productName}" bottle. Golden sparkles and ${environment} float in slow motion highlighting the natural formula purity. Label stays 100% sharp.`,
      voiceover: `Su fórmula concentrada te brinda ${benefit1.toLowerCase()} y ${benefit2.toLowerCase()} desde los primeros días.`,
      screenText: `✅ 1. ${benefit1} · ✅ 2. ${benefit2}`,
    },
    {
      num: 3,
      time: '00:08 – 00:12s',
      title: 'Escena 3: Beneficios 3 y 4 + Ingredientes (Ingredients to Video)',
      promptEs: `Plano detalle macro del envase de "${productName}" rodeado de sus ingredientes naturales puros con iluminación cálida dorada y partículas brillantes ascendiendo suavemente.`,
      promptEn: `Macro close-up shot of the "${productName}" bottle surrounded by its pure natural ingredients with warm golden lighting and glowing particles rising gently.`,
      voiceover: `Además, favorece tu ${benefit3.toLowerCase()} y te garantiza ${benefit4.toLowerCase()} de forma cien por ciento natural.`,
      screenText: `🌿 3. ${benefit3} · 🛡️ 4. ${benefit4}`,
    },
    {
      num: 4,
      time: '00:12 – 00:16s',
      title: 'Escena 4: Cierre con Póster de 4 Beneficios y Dosis (Last Frame)',
      promptEs: `Vista completa del póster comercial de "${productName}" con sus 4 medallones dorados ("${benefit1}", "${benefit2}", "${benefit3}", "${benefit4}") brillando con un barrido de luz elegante y la ficha inferior "${dosage}" totalmente nítida.`,
      promptEn: `Full view of the "${productName}" commercial poster with its 4 golden medallions gleaming with a subtle luxury light sweep and the bottom specification bar sharp.`,
      voiceover: `${dosage}. ¡Escríbenos ahora y pide el tuyo hoy mismo!`,
      screenText: `📦 ${dosage} · 💬 ¡Pídelo hoy!`,
    },
  ];

  const fullExportBundle =
    `=== PROYECTO PERSONALIZADO: ${productName} ===\n\n` +
    `[PROMPT GEMINI - PÓSTER CON 4 BENEFICIOS]:\n${
      outputLang === 'es' ? generatedPosterPromptEs : generatedPosterPromptEn
    }\n\n` +
    `[PROMPT GEMINI - FOTO LIMPIA PARA FIRST FRAME]:\n${generatedCleanPromptEs}\n\n` +
    `[GUION Y ESCENAS PARA GOOGLE FLOW (16 SEGUNDOS)]:\n` +
    generatedScenes
      .map(
        (s) =>
          `\n• ${s.title} (${s.time})\n  Prompt Flow: ${
            outputLang === 'es' ? s.promptEs : s.promptEn
          }\n  Texto en pantalla: ${s.screenText}\n  Voz en off: "${s.voiceover}"`
      )
      .join('\n');

  return (
    <section id="constructor-prompts" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Wand2 className="w-3.5 h-3.5" /> Laboratorio Interactivo a Medida
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold font-serif ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}
            >
              Constructor de Prompts y Videos de Beneficios para Cualquier Producto
            </h2>
            <p className={`mt-2 max-w-3xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
              Escribe el nombre de tu producto natural y sus <strong>4 beneficios principales</strong>. El generador creará automáticamente el prompt del póster para <strong>Gemini</strong> y las <strong>4 escenas con guion explicativo de beneficios para Google Flow</strong>.
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
                <Sliders className="w-4 h-4 text-emerald-400" /> 1. Configura tu Producto y sus Beneficios
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
                Titular Superior de Impacto (Promesa Principal)
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
                <Award className="w-3.5 h-3.5" /> Los 4 Beneficios Clave (Medallones + Guion de Video)
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

            {/* Dosage & Specs */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                Contenido y Dosis (Para la Ficha y el Cierre del Video)
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
                  onChange={(e) => setFormatRatio(e.target.value as '9:16 Vertical' | '16:9 Horizontal')}
                  className={`w-full px-3 py-2 rounded-xl border text-xs font-bold ${
                    isDark ? 'bg-black/60 border-slate-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                  }`}
                >
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
                  Prompts para {productName}
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

            {/* 1. Gemini Poster Prompt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Paso A · Prompt para Gemini (Póster con los 4 Beneficios Dorados)
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

            {/* 2. Google Flow 4 Scenes with Benefit Voiceover */}
            <div className="space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Film className="w-4 h-4" /> Paso B · Las 4 Escenas en Google Flow + Guion Explicativo de Beneficios
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
                            <Copy className="w-3 h-3" /> Copiar Prompt Escena {sc.num}
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
