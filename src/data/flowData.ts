export interface PromptAnatomySegment {
  category: 'producto' | 'iluminacion' | 'beneficios' | 'entorno' | 'camara';
  label: string;
  textEs: string;
  textEn: string;
}

export interface BenefitItem {
  title: string;
  shortDesc: string;
  iconName:
    | 'eye'
    | 'sparkles'
    | 'target'
    | 'shield'
    | 'heart'
    | 'zap'
    | 'droplets'
    | 'leaf'
    | 'sun'
    | 'flame'
    | 'activity'
    | 'award';
}

export interface VoiceProfile {
  id: string;
  name: string;
  role: string;
  descriptionEs: string;
  descriptionEn: string;
}

export interface FlowSceneStep {
  sceneNumber: number;
  timeRange: string;
  title: string;
  purpose: string;
  cameraMotion: string;
  musicAndSfx: string;
  promptEs: string;
  promptEn: string;
  onScreenText: string;
  voiceoverEs: string;
}

export interface NaturalProductExample {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryId: 'suplementos' | 'extractos' | 'cosmetica' | 'apicultura';
  badgeText: string;
  aspectRatio: '1:1 Estudio' | '9:16 Vertical';
  image: string;
  headline: string;
  summary: string;
  voiceProfileName: string;
  voiceProfilePromptEs: string;
  voiceProfilePromptEn: string;
  backgroundMusicStyle: string;
  backgroundMusicPromptEs: string;
  backgroundMusicPromptEn: string;
  specs: {
    tipo: string;
    contenido: string;
    ingredientes: string;
    uso: string;
    extra: string;
  };
  benefits: BenefitItem[];
  geminiPromptEs: string;
  geminiPromptEn: string;
  cleanHeroPromptEs: string;
  cleanHeroPromptEn: string;
  anatomy: PromptAnatomySegment[];
  flowScenes: FlowSceneStep[];
}

export interface ScenePromptTemplate {
  id: string;
  categoryId: 'gancho' | 'beneficios' | 'ingredientes' | 'cierre';
  categoryLabel: string;
  title: string;
  idealFor: string;
  cameraMovement: string;
  musicSuggestion: string;
  voiceAnchor: string;
  duration: string;
  benefitHookExample: string;
  promptEs: string;
  promptEn: string;
}

export interface MusicPromptPreset {
  id: string;
  title: string;
  mood: string;
  bestFor: string;
  promptEs: string;
  promptEn: string;
}

export const VOICE_PROFILES_LIBRARY: VoiceProfile[] = [
  {
    id: 'dra-sofia',
    name: 'Voz 1: "Dra. Sofía" (Especialista en Bienestar Natural)',
    role: 'Femenina · 32 años · Cálida, serena y confiable',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz en todas las escenas): mujer de 32 años, acento español latinoamericano neutro, timbre cálido y sereno de especialista en salud natural, ritmo pausado, grabación limpia de estudio',
    descriptionEn:
      'Character voice (keep the exact same voice across all scenes): 32-year-old female voice, warm neutral Latin American Spanish accent, calm and trustworthy natural wellness specialist tone, measured pace, clean studio recording',
  },
  {
    id: 'mateo-narrador',
    name: 'Voz 2: "Mateo" (Narrador Comercial Orgánico)',
    role: 'Masculina · 35 años · Barítono cercano, seguro e inspirador',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz en todas las escenas): hombre de 35 años, barítono suave con acento español latinoamericano neutro, tono cercano, inspirador y seguro, dicción clara de locutor comercial',
    descriptionEn:
      'Character voice (keep the exact same voice across all scenes): 35-year-old male voice, smooth baritone with neutral Latin American Spanish accent, warm, inspiring, and confident commercial narrator tone, clear studio diction',
  },
  {
    id: 'elena-vital',
    name: 'Voz 3: "Elena" (Guía de Vida Saludable y Detox)',
    role: 'Femenina · 27 años · Fresca, alegre y energética',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz en todas las escenas): mujer joven de 27 años, acento español neutro brillante, tono fresco, vital y empático que transmite energía matutina y bienestar',
    descriptionEn:
      'Character voice (keep the exact same voice across all scenes): 27-year-old young female voice, bright neutral Spanish accent, fresh, vibrant, and empathetic tone conveying morning energy and wellness',
  },
  {
    id: 'arturo-artesano',
    name: 'Voz 4: "Don Arturo" (Maestro Botánico y Tradición)',
    role: 'Masculina · 48 años · Profunda, pausada y tradicional',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz en todas las escenas): hombre de 48 años, voz profunda, cálida y pausada en español neutro, transmite tradición artesanal, pureza de campo y máxima confianza',
    descriptionEn:
      'Character voice (keep the exact same voice across all scenes): 48-year-old mature male voice, deep, warm, and unhurried neutral Spanish accent, conveying artisanal tradition, pure nature, and deep trust',
  },
];

export const MUSIC_PROMPTS_LIBRARY: MusicPromptPreset[] = [
  {
    id: 'spa-botanico',
    title: 'Ambient Spa, Piano Suave y Naturaleza Viva',
    mood: 'Paz, pureza orgánica, regeneración y confianza',
    bestFor: 'Colágeno, Sérums Faciales, Aceites Esenciales y Vitaminas',
    promptEs:
      'Música de fondo: colocar melodía instrumental relajante de spa con piano suave, cuerdas cálidas y sonidos sutiles de brisa en el bosque y gotas de rocío (volumen suave bajo la voz).',
    promptEn:
      'Background music: warm, soothing spa instrumental with soft acoustic piano, gentle strings, and subtle forest breeze and water droplet SFX (ducked softly under the voiceover).',
  },
  {
    id: 'energia-epica',
    title: 'Cinemático Inspirador y Vitalidad Natural',
    mood: 'Fuerza, alivio del dolor, energía y acción',
    bestFor: 'Cúrcuma + Jengibre, Magnesio, Articulaciones y Superfoods',
    promptEs:
      'Música de fondo: colocar música cinematográfica e inspiradora con percusión orgánica suave, violonchelo cálido y efecto de sonido envolvente en cámara lenta (volumen suave bajo la voz).',
    promptEn:
      'Background music: uplifting cinematic music with soft organic percussion, warm cello swells, and deep slow-motion whoosh SFX (ducked softly under the voiceover).',
  },
  {
    id: 'frescura-detox',
    title: 'Acústico Refrescante y Cristalino (Detox)',
    mood: 'Frescura matutina, ligereza digestiva y limpieza',
    bestFor: 'Clorofila, Té Matcha, Probióticos y Goteros Líquidos',
    promptEs:
      'Música de fondo: colocar melodía alegre y fresca con guitarra acústica luminosa, marimba suave y sonido cristalino de salpicadura de agua pura (volumen suave bajo la voz).',
    promptEn:
      'Background music: bright, refreshing acoustic guitar melody with soft marimba notes and crisp crystal water splash SFX (ducked softly under the voiceover).',
  },
  {
    id: 'artesanal-acustico',
    title: 'Folk Acústico Cálido y Tradición Artesanal',
    mood: 'Hogar, calidez familiar, cosecha pura y protección',
    bestFor: 'Miel con Propóleo, Polen, Jarabes Naturales e Infusiones',
    promptEs:
      'Música de fondo: colocar música acústica cálida con guitarra española suave, notas de arpa ligera y sonido relajante de miel fluyendo en una mañana soleada (volumen suave bajo la voz).',
    promptEn:
      'Background music: warm artisanal acoustic music with gentle fingerpicked guitar, light harp notes, and cozy morning nature ambiance (ducked softly under the voiceover).',
  },
];

export const ANATOMY_COLORS: Record<
  PromptAnatomySegment['category'],
  { bg: string; border: string; text: string; dot: string; name: string }
> = {
  producto: {
    name: 'Envase y Logo Fijo (Sin Animar Letras)',
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/40',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
  },
  beneficios: {
    name: 'Iconos / Logos Simbólicos (Sin Letras Móviles)',
    bg: 'bg-amber-500/15',
    border: 'border-amber-500/40',
    text: 'text-amber-300',
    dot: 'bg-amber-400',
  },
  iluminacion: {
    name: 'Iluminación de Estudio',
    bg: 'bg-sky-500/15',
    border: 'border-sky-500/40',
    text: 'text-sky-300',
    dot: 'bg-sky-400',
  },
  entorno: {
    name: 'Entorno Botánico y Partículas',
    bg: 'bg-purple-500/15',
    border: 'border-purple-500/40',
    text: 'text-purple-300',
    dot: 'bg-purple-400',
  },
  camara: {
    name: 'Lente, Voz Fija y Música',
    bg: 'bg-rose-500/15',
    border: 'border-rose-500/40',
    text: 'text-rose-300',
    dot: 'bg-rose-400',
  },
};

export const PRODUCTS_DATA: NaturalProductExample[] = [
  {
    id: 'colageno-magnesio',
    name: 'Colágeno + Magnesio Botánico',
    brand: 'Botanical Wellness Lab',
    category: 'Articulaciones, Piel y Energía',
    categoryId: 'suplementos',
    badgeText: 'Logos Dorados · Sin Animar Letras · Voz Fija',
    aspectRatio: '1:1 Estudio',
    image: '/images/colageno-magnesio.jpg',
    headline: 'ARTICULACIONES FUERTES, PIEL FIRME Y ENERGÍA',
    summary:
      'Fotografía botánica en bosque soleado con frasco ámbar cubierto de rocío e iconos dorados de beneficios. En Flow se anima únicamente la luz solar, el rocío y el brillo de los logos sin animar letras, manteniendo la misma voz de especialista en las 4 escenas.',
    voiceProfileName: 'Voz 1: "Dra. Sofía" (Femenina 32 años · Especialista en Bienestar)',
    voiceProfilePromptEs: VOICE_PROFILES_LIBRARY[0].descriptionEs,
    voiceProfilePromptEn: VOICE_PROFILES_LIBRARY[0].descriptionEn,
    backgroundMusicStyle: 'Piano Botánico Inspirador + Sonido Suave de Bosque Matutino',
    backgroundMusicPromptEs:
      'Música de fondo: melodía instrumental inspiradora de piano suave y cuerdas cálidas a volumen moderado bajo la voz, acompañada de brisa matutina en el bosque.',
    backgroundMusicPromptEn:
      'Background music: uplifting soft piano and warm strings instrumental ducked softly under the voice, layered with gentle morning forest breeze.',
    specs: {
      tipo: 'Cápsulas Naturales Hidrolizadas',
      contenido: '120 Cápsulas (60 Porciones)',
      ingredientes: 'Colágeno Hidrolizado + Magnesio Puro',
      uso: '2 cápsulas con el desayuno',
      extra: 'Alta Biodisponibilidad',
    },
    benefits: [
      {
        title: 'Piel y Cabello Radiante',
        shortDesc: 'Devuelve la elasticidad, firmeza e hidratación a la piel y fortalece las uñas.',
        iconName: 'sparkles',
      },
      {
        title: 'Articulaciones sin Dolor',
        shortDesc: 'Regenera el cartílago y mejora la movilidad de rodillas, manos y espalda.',
        iconName: 'activity',
      },
      {
        title: 'Músculos Fuertes',
        shortDesc: 'El magnesio previene calambres nocturnos y acelera la recuperación física.',
        iconName: 'zap',
      },
      {
        title: 'Energía todo el Día',
        shortDesc: 'Reduce el cansancio crónico y mejora la calidad del descanso nocturno.',
        iconName: 'sun',
      },
    ],
    geminiPromptEs:
      'Fotografía comercial de producto natural: un frasco de vidrio ámbar con gotas de agua fresca y tapa dorada metálica sobre una mesa de madera húmeda en un bosque soleado. Etiqueta verde bosque oscuro con emblema botánico dorado limpio. Flotando simétricamente alrededor del frasco hay 4 medallones circulares de oro brillante únicamente con iconos/logos simbólicos grabados en 3D (1: icono de rostro y cabello radiante, 2: icono de articulación sana, 3: icono de fuerza muscular, 4: icono de rayo de energía) sin letras pequeñas que se deformen. Rodeado de helechos verdes, hojas de monstera y eucalipto con rayos de sol matutinos y partículas de polen dorado flotando. Lente 85mm f/1.8, calidad 8k.',
    geminiPromptEn:
      'Commercial natural product photography: a dark amber glass bottle with fresh water droplets and brushed gold cap resting on a wet wooden table in a sunlit forest. Dark forest green embossed label with a clean gold botanical logo emblem. Floating symmetrically around the bottle are 4 circular polished gold medallions featuring ONLY clean 3D engraved symbolic icons/logos (1: radiant skin/hair icon, 2: healthy joint icon, 3: muscle strength icon, 4: energy bolt icon) with no small text. Surrounded by green ferns, monstera, and eucalyptus leaves with morning sunbeams and golden dust motes. 85mm lens f/1.8, 8k.',
    cleanHeroPromptEs:
      'Fotografía de producto natural en el bosque al amanecer: frasco de vidrio ámbar con gotas de rocío y etiqueta verde oscuro con logo botánico dorado sobre madera rústica húmeda rodeado de helechos y hojas de eucalipto. Sin textos flotantes ni letras externas. Rayos de sol dorados atravesando el follaje, 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Sunrise forest product photography: dewy amber glass bottle with dark green label and gold botanical logo emblem on wet rustic wood surrounded by ferns and eucalyptus leaves. No floating text or letters. Golden sunbeams filtering through foliage, 85mm f/1.8, 8k.',
    anatomy: [
      {
        category: 'producto',
        label: 'Envase y Logo Estático',
        textEs: 'Frasco ámbar con gotas de condensación y logo dorado fijo (regla en Flow: prohibido animar o deformar letras)',
        textEn: 'Amber bottle with condensation droplets and static gold logo (Flow rule: do not animate or warp letters)',
      },
      {
        category: 'beneficios',
        label: '4 Medallones con Iconos/Logos (Sin Letras)',
        textEs: '4 discos dorados con símbolos puros (Piel, Articulación, Músculo, Energía) sin letras pequeñas para evitar fallos en IA',
        textEn: '4 gold discs with pure symbolic icons (Skin, Joint, Muscle, Energy) without small text to avoid AI letter warping',
      },
      {
        category: 'iluminacion',
        label: 'Rayos de Sol (God Rays)',
        textEs: 'Rayos de sol cálidos atravesando el bosque y reflejándose sobre los logos metálicos en oro',
        textEn: 'Warm morning sunbeams filtering through the forest and reflecting off the metallic gold logos',
      },
      {
        category: 'entorno',
        label: 'Naturaleza Viva en Movimiento',
        textEs: 'Helechos, eucalipto, gotas de rocío y polen dorado (lo único que se mueve en cámara lenta)',
        textEn: 'Ferns, eucalyptus, dew drops, and golden pollen (the only elements moving in slow motion)',
      },
      {
        category: 'camara',
        label: 'Misma Voz ("Dra. Sofía") + Música',
        textEs: 'Anclaje de voz femenina de 32 años idéntica en las 4 escenas + música de piano botánico de fondo',
        textEn: 'Identical 32yo female wellness specialist voice anchored across all 4 scenes + botanical piano background music',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Amanecer Botánico (Gancho sin Animar Letras)',
        purpose: 'Captar la atención animando los rayos de sol y el polen mientras el envase y su logo están 100% fijos.',
        cameraMotion: 'Dolly In lento hacia el centro',
        musicAndSfx: 'Piano suave inspirador + Voz "Dra. Sofía" (Escena 1/4)',
        promptEs:
          'El frasco de Colágeno + Magnesio y sus logos dorados permanecen 100% estáticos y nítidos. NO animar letras ni generar textos flotantes en pantalla. Únicamente se mueven en cámara lenta los rayos de sol matutinos, las hojas de helecho con la brisa y las partículas de polen dorado. Música de fondo: piano suave inspirador y cuerdas cálidas con brisa de bosque. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?"',
        promptEn:
          'The Collagen + Magnesium bottle and its gold logos remain 100% static and sharp. Do NOT animate letters or generate moving text on screen. Only animate in slow motion the morning sunbeams, fern fronds swaying in the breeze, and golden pollen particles. Background music: uplifting soft piano and warm strings with forest breeze. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?"',
        onScreenText: 'Solo Iconos/Logos Dorados Fijos (Sin letras animadas)',
        voiceoverEs: '¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Brillo en Logos de Piel y Articulaciones)',
        purpose: 'Iluminar los iconos dorados superiores mientras la misma voz explica los primeros 2 beneficios.',
        cameraMotion: 'Pan suave con reflejo de luz en los iconos dorados',
        musicAndSfx: 'Piano continuo + destello cristalino + Misma Voz "Dra. Sofía" (Escena 2/4)',
        promptEs:
          'El frasco permanece firme sin deformar ni animar ninguna letra. Un destello cálido de luz solar recorre únicamente el relieve metálico de los medallones con los iconos de piel y articulaciones mientras una gota de rocío resbala lentamente por el vidrio ámbar. Música de fondo: continúa el piano suave y cuerdas cálidas con un sutil destello cristalino. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones."',
        promptEn:
          'The bottle stays steady without animating or warping any letters. A warm sunbeam sweeps only across the metallic relief of the gold icon medallions while a dew drop slides slowly down the amber glass. Background music: continuous soft piano and warm strings with a subtle crystal chime. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones."',
        onScreenText: 'Destello sobre Icono 1 (Piel) e Icono 2 (Articulación)',
        voiceoverEs: 'El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Logos de Músculos y Energía)',
        purpose: 'Explicar la acción del Magnesio manteniendo el mismo timbre de voz y sin textos móviles.',
        cameraMotion: 'Orbit ligero 10° enfocando los iconos inferiores y hojas',
        musicAndSfx: 'Cuerdas cálidas + Misma Voz "Dra. Sofía" (Escena 3/4)',
        promptEs:
          'Movimiento orbital muy sutil de 10 grados manteniendo el envase y su logo completamente estáticos y sin animar letras. La luz dorada ilumina los medallones con los símbolos de fuerza muscular y energía rodeados de hojas de eucalipto húmedas y destellos dorados que ascienden en cámara lenta. Música de fondo: cuerdas cálidas y piano inspirador. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía."',
        promptEn:
          'Subtle 10-degree orbital motion keeping the bottle and its logo completely static without animating any letters. Golden light illuminates the muscle and energy symbol medallions surrounded by wet eucalyptus leaves and rising golden sparkles in slow motion. Background music: warm strings and inspiring piano. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía."',
        onScreenText: 'Destello sobre Icono 3 (Músculos) e Icono 4 (Energía)',
        voiceoverEs: 'Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Comercial (Dosis Diaria con la Misma Voz)',
        purpose: 'Cerrar con el plano heroico limpio mientras la misma voz indica la dosis.',
        cameraMotion: 'Plano maestro fijo con partículas doradas suaves',
        musicAndSfx: 'Acorde final de piano + Misma Voz "Dra. Sofía" (Escena 4/4)',
        promptEs:
          'Plano heroico fijo del frasco y sus 4 medallones de iconos dorados brillando en armonía bajo la luz del bosque. Prohibido animar letras o textos. Solo las partículas de polen dorado flotan suavemente. Música de fondo: acorde final armónico y elegante de piano acústico. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Solo toma dos cápsulas cada mañana para transformar tu bienestar. ¡Pide el tuyo hoy!"',
        promptEn:
          'Static final hero shot of the bottle and its 4 gold icon medallions glowing harmoniously in the forest light. Do NOT animate any letters or text. Only golden pollen particles float gently. Background music: harmonious resolving acoustic piano chord. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Solo toma dos cápsulas cada mañana para transformar tu bienestar. ¡Pide el tuyo hoy!"',
        onScreenText: 'Plano limpio sin letras móviles (la voz da el cierre)',
        voiceoverEs: 'Solo toma dos cápsulas cada mañana para transformar tu bienestar. ¡Pide el tuyo hoy!',
      },
    ],
  },
  {
    id: 'curcuma-ashwagandha',
    name: 'Cúrcuma + Jengibre Natural Vitae',
    brand: 'Natural Vitae',
    category: 'Antiinflamatorio y Articular',
    categoryId: 'suplementos',
    badgeText: 'Explosión Dinámica · Sin Animar Letras · Voz Fija',
    aspectRatio: '1:1 Estudio',
    image: '/images/curcuma-ashwagandha.jpg',
    headline: 'DESINFLAMA TUS ARTICULACIONES CON PODER NATURAL',
    summary:
      'Explosión en cámara superlenta de polvo dorado de cúrcuma detrás del frasco ámbar con rodajas de jengibre fresco. El frasco y su logo quedan congelados sin animar letras, y el narrador "Mateo" mantiene la misma voz en las 4 escenas.',
    voiceProfileName: 'Voz 2: "Mateo" (Masculina 35 años · Narrador Comercial Cálido)',
    voiceProfilePromptEs: VOICE_PROFILES_LIBRARY[1].descriptionEs,
    voiceProfilePromptEn: VOICE_PROFILES_LIBRARY[1].descriptionEn,
    backgroundMusicStyle: 'Cinemático Orgánico con Percusión Suave + Whoosh en Slow Motion',
    backgroundMusicPromptEs:
      'Música de fondo: instrumental cinematográfico cálido con percusión orgánica profunda y violonchelo inspirador a volumen moderado bajo la voz.',
    backgroundMusicPromptEn:
      'Background music: warm cinematic instrumental with deep organic percussion and inspiring cello ducked softly under the voice.',
    specs: {
      tipo: 'Cápsulas Vegetales Concentradas',
      contenido: '60 Cápsulas Vegetales',
      ingredientes: 'Extracto de Cúrcuma + Jengibre Orgánico',
      uso: '2 cápsulas al día con comidas',
      extra: '95% Curcuminoides Activos',
    },
    benefits: [
      {
        title: 'Desinflama Articulaciones',
        shortDesc: 'Alivia el dolor e inflamación en rodillas, manos, hombros y espalda.',
        iconName: 'flame',
      },
      {
        title: 'Movilidad sin Rigidez',
        shortDesc: 'Recupera la flexibilidad al despertar y al realizar actividad física.',
        iconName: 'activity',
      },
      {
        title: 'Antioxidante Celular',
        shortDesc: 'Neutraliza los radicales libres y protege los tejidos del envejecimiento.',
        iconName: 'shield',
      },
      {
        title: 'Bienestar Digestivo',
        shortDesc: 'El jengibre puro mejora la digestión y potencia la absorción de la cúrcuma.',
        iconName: 'leaf',
      },
    ],
    geminiPromptEs:
      'Fotografía publicitaria de alta velocidad de un frasco de vidrio ámbar con tapa negra y etiqueta color mostaza con un emblema circular dorado minimalista y 3 iconos simbólicos limpios (hoja botánica, articulación, escudo protector), sobre una bandeja de piedra pizarra negra húmeda. Alrededor de la base hay rodajas frescas de jengibre, raíces de cúrcuma cortadas de color naranja intenso y una cuchara de madera con polvo de cúrcuma. Detrás del frasco, una espectacular explosión en el aire de fino polvo dorado de cúrcuma iluminada a contraluz por un foco cálido ámbar sobre fondo oscuro dramático. Lente macro 90mm, 8k.',
    geminiPromptEn:
      'High-speed commercial product photography of an amber glass supplement bottle with black cap and mustard-gold label featuring a clean circular gold logo emblem and 3 symbolic icons (botanical leaf, joint icon, shield icon), on a wet black slate stone tray. Surrounded at the base by fresh sliced ginger root, vibrant orange turmeric rhizomes, and a wooden spoon with turmeric powder. Behind the bottle, a dramatic mid-air explosion of fine golden turmeric powder backlit by warm amber studio lighting against a dark moody background. 90mm macro lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial en estudio oscuro del frasco ámbar con etiqueta mostaza y logo circular dorado limpio sobre piedra pizarra negra rodeado de raíces de cúrcuma y rodajas de jengibre fresco, sin textos flotantes externos, lista para animar el polvo en Google Flow.',
    cleanHeroPromptEn:
      'Dark studio commercial photo of the amber bottle with mustard-gold label and clean circular gold logo on black slate surrounded by turmeric roots and fresh ginger slices, no floating text, ready to animate powder in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Frasco y Logo Congelados',
        textEs: 'Frasco de vidrio ámbar con gotas de agua y logo circular fijo (sin animar letras en el video)',
        textEn: 'Amber glass bottle with water droplets and static circular logo (no animated letters in video)',
      },
      {
        category: 'beneficios',
        label: '3 Iconos Simbólicos en Etiqueta',
        textEs: 'Símbolos vectoriales limpios (Hoja, Articulación, Escudo) que no sufren deformación al animar la luz',
        textEn: 'Clean symbolic icons (Leaf, Joint, Shield) that never deform when lighting moves',
      },
      {
        category: 'iluminacion',
        label: 'Contraluz Dramático',
        textEs: 'Contraluz cálido ámbar que enciende cada partícula de polvo dorado en el aire',
        textEn: 'Warm amber backlight igniting every suspended golden turmeric powder particle in mid-air',
      },
      {
        category: 'entorno',
        label: 'Explosión de Polvo + Raíces',
        textEs: 'Solo se anima la nube de polvo de cúrcuma en 120fps mientras el frasco permanece inmóvil',
        textEn: 'Only the turmeric powder cloud animates in 120fps while the bottle stays completely still',
      },
      {
        category: 'camara',
        label: 'Misma Voz ("Mateo") + Música',
        textEs: 'Voz masculina barítono de 35 años idéntica en las 4 escenas + música cinematográfica con percusión suave',
        textEn: 'Identical 35yo male baritone narrator across all 4 scenes + cinematic organic percussion music',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Explosión en Cámara Superlenta (Hook)',
        purpose: 'Impactar con la nube de cúrcuma en 120fps manteniendo el frasco estático sin animar letras.',
        cameraMotion: 'Slow Push-In (Acercamiento suave)',
        musicAndSfx: 'Música cinematográfica cálida + Misma Voz "Mateo" (Escena 1/4)',
        promptEs:
          'El frasco y su logo permanecen 100% estáticos y enfocados en el centro. NO animar letras ni generar texto en pantalla. En cámara superlenta (120fps), únicamente la nube de polvo dorado de cúrcuma detrás del frasco se expande suavemente en el aire iluminada por luz ámbar. Música de fondo: instrumental cinematográfico con percusión orgánica suave y efecto slow-motion. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti."',
        promptEn:
          'The bottle and its logo remain 100% static and focused in the center. Do NOT animate letters or generate on-screen text. In 120fps super slow motion, only the golden turmeric powder cloud behind the bottle expands softly in mid-air lit by amber light. Background music: cinematic instrumental with soft organic percussion and slow-motion SFX. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti."',
        onScreenText: 'Polvo dorado en 120fps (Frasco y logo fijos sin animar letras)',
        voiceoverEs: 'Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Alivio Articular y Movilidad)',
        purpose: 'Explicar con la misma voz cómo desinflama articulaciones mientras brillan los ingredientes.',
        cameraMotion: 'Paneo suave a ras de la pizarra negra',
        musicAndSfx: 'Violonchelo cálido + Misma Voz "Mateo" (Escena 2/4)',
        promptEs:
          'El envase permanece completamente inmóvil sin animar letras ni deformar la etiqueta. Un haz de luz cálida ilumina las rodajas frescas de jengibre y la cuchara de madera con cúrcuma mientras finas chispas doradas flotan en cámara lenta. Música de fondo: continúa el instrumental cálido de violonchelo y percusión suave. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Su alta concentración desinflama tus articulaciones de forma natural y alivia la rigidez muscular."',
        promptEn:
          'The bottle stays completely still without animating letters or warping the label. A warm light beam illuminates the fresh ginger slices and wooden spoon with turmeric while fine golden sparks float in slow motion. Background music: continuous warm cello and soft percussion instrumental. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Su alta concentración desinflama tus articulaciones de forma natural y alivia la rigidez muscular."',
        onScreenText: 'Luz sobre raíces y logo simbólico (Sin texto móvil)',
        voiceoverEs: 'Su alta concentración desinflama tus articulaciones de forma natural y alivia la rigidez muscular.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Antioxidante + Sinergia con Jengibre)',
        purpose: 'Resaltar los iconos simbólicos de la etiqueta con un barrido de luz sin tocar las letras.',
        cameraMotion: 'Macro Zoom lento hacia las raíces de cúrcuma',
        musicAndSfx: 'Música orgánica en crescendo + Misma Voz "Mateo" (Escena 3/4)',
        promptEs:
          'Plano macro de las raíces de cúrcuma naranja intenso y el jengibre fresco junto al frasco estático. Prohibido animar letras; únicamente un destello dorado recorre los iconos simbólicos y las gotas de agua en el vidrio. Música de fondo: música orgánica e inspiradora. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Combinado con jengibre puro, protege tus células y mejora tu digestión con máxima absorción."',
        promptEn:
          'Macro shot of vibrant orange turmeric roots and fresh ginger next to the static bottle. Do NOT animate letters; only a golden light flare sweeps across the symbolic icons and water droplets on the glass. Background music: inspiring organic music. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Combinado con jengibre puro, protege tus células y mejora tu digestión con máxima absorción."',
        onScreenText: 'Reflejo dorado en iconos y raíces frescas',
        voiceoverEs: 'Combinado con jengibre puro, protege tus células y mejora tu digestión con máxima absorción.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre (Dosis Diaria con la Misma Voz)',
        purpose: 'Cerrar la historia con la misma voz de Mateo y las partículas posándose.',
        cameraMotion: 'Estático con partículas doradas cayendo lentamente',
        musicAndSfx: 'Acorde final cálido + Misma Voz "Mateo" (Escena 4/4)',
        promptEs:
          'Plano heroico final del frasco totalmente estático y nítido en el centro mientras las últimas partículas de polvo dorado caen lentamente sobre la pizarra negra. Sin animar letras ni textos. Música de fondo: acorde final cálido y resolutivo. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Toma dos cápsulas vegetales al día para volver a moverte sin límites. ¡Haz tu pedido hoy!"',
        promptEn:
          'Final hero shot of the bottle completely static and sharp in the center as the last golden powder particles settle slowly onto the black slate. No animated letters or text. Background music: warm resolving final chord. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Toma dos cápsulas vegetales al día para volver a moverte sin límites. ¡Haz tu pedido hoy!"',
        onScreenText: 'Cierre limpio (Logo fijo + Voz indicando la dosis)',
        voiceoverEs: 'Toma dos cápsulas vegetales al día para volver a moverte sin límites. ¡Haz tu pedido hoy!',
      },
    ],
  },
  {
    id: 'clorofila-matcha',
    name: 'Clorofila & Matcha — Liquid Detox',
    brand: 'Natural Wellness Drops',
    category: 'Extractos Líquidos y Detox',
    categoryId: 'extractos',
    badgeText: 'Splash Esmeralda · Sin Animar Letras · Voz Fija',
    aspectRatio: '1:1 Estudio',
    image: '/images/clorofila-matcha.jpg',
    headline: 'OXIGENA TU CUERPO Y PURIFICA TU DIGESTIÓN',
    summary:
      'Gotero verde esmeralda emergiendo de una corona de agua cristalina con hojas de menta y matcha. Solo se anima el agua y las hojas en slow-motion (sin animar letras), con la voz fresca de "Elena" idéntica en las 4 escenas.',
    voiceProfileName: 'Voz 3: "Elena" (Femenina 27 años · Guía Fresca y Vital)',
    voiceProfilePromptEs: VOICE_PROFILES_LIBRARY[2].descriptionEs,
    voiceProfilePromptEn: VOICE_PROFILES_LIBRARY[2].descriptionEn,
    backgroundMusicStyle: 'Acústico Refrescante Matutino + Sonido Cristalino de Agua',
    backgroundMusicPromptEs:
      'Música de fondo: melodía acústica fresca y luminosa con guitarra suave y sonido cristalino de agua pura a volumen moderado bajo la voz.',
    backgroundMusicPromptEn:
      'Background music: bright, refreshing morning acoustic melody with soft guitar and crisp crystal water splash SFX ducked under the voice.',
    specs: {
      tipo: 'Gotas Líquidas Concentradas',
      contenido: '30 ml (60 Porciones)',
      ingredientes: 'Clorofila Líquida + Extracto de Té Matcha + Menta',
      uso: '20 gotas en un vaso de agua cada mañana',
      extra: '100% Vegano · Sin Azúcar',
    },
    benefits: [
      {
        title: 'Detox Profundo',
        shortDesc: 'Ayuda al hígado y al sistema digestivo a eliminar toxinas acumuladas.',
        iconName: 'droplets',
      },
      {
        title: 'Oxigenación y Piel Limpia',
        shortDesc: 'La clorofila oxigena la sangre y refleja una piel más fresca y luminosa.',
        iconName: 'sparkles',
      },
      {
        title: 'Frescura y Aliento Puro',
        shortDesc: 'Desodorizante interno natural con extracto de hojas de menta orgánica.',
        iconName: 'leaf',
      },
      {
        title: 'Energía Verde con Matcha',
        shortDesc: 'Aporta antioxidantes y vitalidad suave sin los picos de la cafeína sintética.',
        iconName: 'zap',
      },
    ],
    geminiPromptEs:
      'Fotografía comercial refrescante de alta velocidad: un frasco gotero de vidrio verde esmeralda con pipeta de cristal y etiqueta crema texturizada con un logo simbólico de hoja dorada y gota verde, emergiendo del centro de una corona perfecta de agua verde cristalina (water crown splash) sobre una superficie de agua con ondas concéntricas. Hojas frescas de menta, brotes de té verde matcha y eucalipto flotan en el aire junto con microgotas de agua brillantes. Fondo de jardín botánico desenfocado con rayos de sol dorados desde arriba. Lente macro 100mm, 8k.',
    geminiPromptEn:
      'Refreshing high-speed commercial photography: an emerald green glass dropper bottle with glass pipette and textured cream label featuring a clean golden leaf and green drop logo emblem, emerging from the center of a crystal-clear emerald water crown splash over rippling water. Fresh mint leaves, green matcha tea shoots, and eucalyptus float in mid-air alongside sparkling water droplets. Sunlit blurred botanical garden background with golden sunbeams. 100mm macro lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial del frasco gotero verde esmeralda con logo de hoja dorada sobre una superficie de agua esmeralda tranquila con ondas suaves, rodeado de hojas de menta bajo luz solar matutina, sin letras flotantes, listo para animar el agua en Google Flow.',
    cleanHeroPromptEn:
      'Commercial photo of the emerald green dropper bottle with golden leaf logo on calm emerald water with gentle ripples, surrounded by mint leaves in morning sunlight, no floating letters, ready to animate water in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Gotero Esmeralda Fijo',
        textEs: 'Frasco gotero verde esmeralda 100% estático (prohibido animar letras de la etiqueta)',
        textEn: '100% static emerald green dropper bottle (animating label letters is forbidden)',
      },
      {
        category: 'beneficios',
        label: 'Logo Botánico Limpio',
        textEs: 'Emblema de hoja y gota dorada que se mantiene firme mientras la voz narra los 4 beneficios',
        textEn: 'Golden leaf and drop emblem that stays sharp while the voiceover narrates the 4 benefits',
      },
      {
        category: 'iluminacion',
        label: 'Sol Matutino Traslúcido',
        textEs: 'Luz solar cálida que atraviesa el cristal verde y las paredes de agua del splash',
        textEn: 'Warm sunlight refracting through the emerald glass bottle and translucent water splash crown',
      },
      {
        category: 'entorno',
        label: 'Splash + Hojas en Slow Motion',
        textEs: 'Corona de agua verde cristalina, ondas y hojas de menta flotando suavemente',
        textEn: 'Crystal emerald water crown, ripples, and mint leaves floating gently in slow motion',
      },
      {
        category: 'camara',
        label: 'Misma Voz ("Elena") + Música',
        textEs: 'Voz femenina joven de 27 años idéntica en las 4 escenas + guitarra acústica fresca y agua',
        textEn: 'Identical 27yo fresh female voice across all 4 scenes + bright acoustic guitar and water SFX',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Splash Esmeralda en Cámara Lenta (Hook)',
        purpose: 'Animar solo la corona de agua y las hojas de menta manteniendo el gotero inmóvil.',
        cameraMotion: 'Static Macro con agua en 120fps',
        musicAndSfx: 'Guitarra acústica fresca + agua + Misma Voz "Elena" (Escena 1/4)',
        promptEs:
          'El frasco gotero y su logo permanecen 100% firmes y estáticos en el centro. NO animar letras ni generar textos móviles. En cámara superlenta, únicamente la corona de agua verde esmeralda ondula liberando microgotas cristalinas mientras las hojas de menta flotan suavemente. Música de fondo: guitarra acústica fresca y sonido cristalino de agua pura. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Transforma tus mañanas con el poder purificante de la Clorofila líquida y el Té Matcha."',
        promptEn:
          'The dropper bottle and its logo remain 100% steady and static in the center. Do NOT animate letters or generate moving text. In super slow motion, only the emerald water crown ripples releasing crystal micro-droplets while mint leaves float gently. Background music: fresh acoustic guitar and crisp water splash SFX. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Transforma tus mañanas con el poder purificante de la Clorofila líquida y el Té Matcha."',
        onScreenText: 'Solo se anima el agua y las hojas (Etiqueta fija)',
        voiceoverEs: 'Transforma tus mañanas con el poder purificante de la Clorofila líquida y el Té Matcha.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Detox Profundo + Oxigenación)',
        purpose: 'Explicar con la misma voz de Elena cómo limpia y oxigena el cuerpo.',
        cameraMotion: 'Dolly In suave hacia el gotero iluminado por el sol',
        musicAndSfx: 'Melodía acústica matutina + Misma Voz "Elena" (Escena 2/4)',
        promptEs:
          'Acercamiento lento hacia el frasco verde esmeralda estático sin animar ninguna letra de la etiqueta. Los rayos de sol dorados atraviesan el cristal líquido y las ondas de agua se expanden suavemente en la base. Música de fondo: continúa la melodía acústica fresca de bienestar. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Limpia tu organismo de toxinas, desinflama tu digestión y oxigena tus células para una piel radiante."',
        promptEn:
          'Slow dolly-in toward the static emerald glass bottle without animating any label letters. Golden sunbeams refract through the liquid glass and water ripples expand gently at the base. Background music: continuous fresh acoustic wellness melody. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Limpia tu organismo de toxinas, desinflama tu digestión y oxigena tus células para una piel radiante."',
        onScreenText: 'Ondas de agua y luz solar (Sin letras animadas)',
        voiceoverEs: 'Limpia tu organismo de toxinas, desinflama tu digestión y oxigena tus células para una piel radiante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Aliento Fresco + Energía Limpia)',
        purpose: 'Destacar las hojas de menta y té verde en cámara lenta con la misma voz.',
        cameraMotion: 'Orbit corto 10° rodeando las hojas de menta',
        musicAndSfx: 'Guitarra alegre + brisa + Misma Voz "Elena" (Escena 3/4)',
        promptEs:
          'Las hojas frescas de menta y brotes de té verde flotan suavemente en cámara lenta alrededor del gotero esmeralda fijo con destellos de rocío bajo el sol matutino. Prohibido animar letras o textos. Música de fondo: guitarra acústica alegre y brisa suave. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Su toque de menta orgánica refresca tu aliento desde adentro mientras el Matcha te llena de energía limpia."',
        promptEn:
          'Fresh mint leaves and green tea shoots float gently in slow motion around the static emerald dropper with sparkling dew in the morning sun. Do NOT animate letters or text. Background music: cheerful acoustic guitar and soft breeze. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Su toque de menta orgánica refresca tu aliento desde adentro mientras el Matcha te llena de energía limpia."',
        onScreenText: 'Hojas de menta y matcha flotando en 120fps',
        voiceoverEs: 'Su toque de menta orgánica refresca tu aliento desde adentro mientras el Matcha te llena de energía limpia.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Modo de Uso (20 Gotas en Agua)',
        purpose: 'Cerrar con la dosis matutina narrada por la misma voz de Elena.',
        cameraMotion: 'Plano heroico fijo luminoso',
        musicAndSfx: 'Acorde final luminoso + Misma Voz "Elena" (Escena 4/4)',
        promptEs:
          'El gotero permanece estático y nítido en el centro del agua esmeralda con reflejos solares cálidos. Sin animar letras. Música de fondo: acorde final luminoso de guitarra acústica. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Solo agrega veinte gotas a tu vaso de agua cada mañana. ¡Pide tu Liquid Detox hoy!"',
        promptEn:
          'The dropper stays static and sharp at the center of the emerald water with warm solar reflections. No animated letters. Background music: bright resolving acoustic guitar chord. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Solo agrega veinte gotas a tu vaso de agua cada mañana. ¡Pide tu Liquid Detox hoy!"',
        onScreenText: 'Plano heroico limpio + Voz indicando las 20 gotas',
        voiceoverEs: 'Solo agrega veinte gotas a tu vaso de agua cada mañana. ¡Pide tu Liquid Detox hoy!',
      },
    ],
  },
  {
    id: 'serum-botanico',
    name: 'Sérum Botánico de Rosa Mosqueta',
    brand: 'Organic Rosehip Apothecary',
    category: 'Cosmética Natural y Skincare',
    categoryId: 'cosmetica',
    badgeText: 'Ilustración Botánica · Sin Animar Letras · Voz Fija',
    aspectRatio: '1:1 Estudio',
    image: '/images/serum-botanico.jpg',
    headline: 'REGENERA, ILUMINA Y REJUVENECE TU PIEL',
    summary:
      'Gotero ámbar con logo floral dorado sobre roca y musgo húmedo al atardecer. En Flow solo caen los pétalos y brilla el logo floral sin animar letras, manteniendo la voz serena de "Dra. Sofía" en las 4 escenas.',
    voiceProfileName: 'Voz 1: "Dra. Sofía" (Femenina 32 años · Especialista en Skincare)',
    voiceProfilePromptEs: VOICE_PROFILES_LIBRARY[0].descriptionEs,
    voiceProfilePromptEn: VOICE_PROFILES_LIBRARY[0].descriptionEn,
    backgroundMusicStyle: 'Ambient Spa de Lujo con Arpa, Piano y Brisa de Jardín',
    backgroundMusicPromptEs:
      'Música de fondo: melodía elegante de spa y alta cosmética con piano delicado y notas de arpa suave a volumen moderado bajo la voz.',
    backgroundMusicPromptEn:
      'Background music: luxury skincare spa melody with delicate piano and soft harp notes ducked softly under the voice.',
    specs: {
      tipo: 'Aceite Regenerador Prensado en Frío',
      contenido: '30 ml / 1 fl oz',
      ingredientes: '100% Aceite Orgánico de Rosa Mosqueta Pura',
      uso: '3 a 4 gotas en rostro y cuello cada noche',
      extra: 'Sin Parabenos · Cruelty Free',
    },
    benefits: [
      {
        title: 'Atenúa Manchas y Marcas',
        shortDesc: 'Unifica el tono de la piel y suaviza cicatrices, estrías y líneas de expresión.',
        iconName: 'sparkles',
      },
      {
        title: 'Hidratación Profunda',
        shortDesc: 'Rico en Omega 3, 6 y 9 que restauran la barrera cutánea sin obstruir poros.',
        iconName: 'droplets',
      },
      {
        title: 'Luminosidad Instantánea',
        shortDesc: 'Efecto "glow" natural que devuelve la vitalidad a pieles secas o apagadas.',
        iconName: 'sun',
      },
      {
        title: 'Regeneración Nocturna',
        shortDesc: 'Estimula la producción natural de colágeno mientras descansas.',
        iconName: 'heart',
      },
    ],
    geminiPromptEs:
      'Fotografía editorial de cosmética natural: un frasco gotero de vidrio ámbar con bulbo negro mate y etiqueta en papel algodón con un logo ilustrado de hoja dorada y flor de rosa mosqueta sobre una roca húmeda cubierta de musgo verde esmeralda en un jardín silvestre al atardecer (golden hour). Alrededor del frasco hay pétalos de rosa suaves, frutos rojos de rosa mosqueta y finas partículas de luz dorada flotando. Bokeh cremoso de fondo, lente 85mm f/1.4, 8k.',
    geminiPromptEn:
      'Editorial natural skincare photography: an amber glass dropper bottle with matte black bulb and cotton paper label featuring a gold foil leaf and rosehip flower logo illustration resting on a wet moss-covered stone in a wild garden at golden hour. Surrounded by soft pink rosehip petals, red rosehip berries, and floating golden light particles. Creamy background bokeh, 85mm f/1.4 lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía editorial del frasco gotero ámbar con logo floral dorado sobre piedra con musgo húmedo y pétalos de rosa al atardecer, sin letras pequeñas, con bokeh dorado cálido de fondo, listo para animar en Google Flow.',
    cleanHeroPromptEn:
      'Editorial photo of the amber dropper bottle with gold floral logo on mossy wet stone with rose petals at golden hour, no small letters, warm bokeh background, ready to animate in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Gotero y Logo Floral Fijos',
        textEs: 'Frasco gotero ámbar con ilustración botánica fija (prohibido animar letras en el video)',
        textEn: 'Amber dropper bottle with static botanical logo illustration (no animated letters in video)',
      },
      {
        category: 'beneficios',
        label: 'Emblema Floral en Oro',
        textEs: 'El destello de luz solo recorre el logo de la hoja dorada mientras las letras permanecen quietas',
        textEn: 'The light flare only sweeps across the gold leaf logo while any label text stays completely still',
      },
      {
        category: 'iluminacion',
        label: 'Hora Dorada (Golden Hour)',
        textEs: 'Luz de atardecer cálida que atraviesa el vidrio ámbar haciéndolo brillar como oro líquido',
        textEn: 'Warm golden hour backlight glowing through the amber glass like liquid gold',
      },
      {
        category: 'entorno',
        label: 'Pétalos Cayendo en Slow Motion',
        textEs: 'Roca con musgo húmedo, pétalos rosados cayendo suavemente y polen dorado',
        textEn: 'Wet mossy rock, pink petals falling gently in slow motion, and golden pollen',
      },
      {
        category: 'camara',
        label: 'Misma Voz ("Dra. Sofía") + Música Spa',
        textEs: 'Voz femenina serena de 32 años idéntica en las 4 escenas + piano y arpa de spa',
        textEn: 'Identical 32yo serene female voice across all 4 scenes + spa piano and harp music',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Magia Botánica al Atardecer (Hook)',
        purpose: 'Animar la caída lenta de pétalos y polen manteniendo el frasco estático sin animar letras.',
        cameraMotion: 'Dolly In suave con caída de pétalos',
        musicAndSfx: 'Piano delicado y arpa + Misma Voz "Dra. Sofía" (Escena 1/4)',
        promptEs:
          'El frasco de Sérum Rosa Mosqueta y su etiqueta permanecen 100% firmes y estáticos sobre la roca con musgo. NO animar letras ni generar textos en pantalla. Únicamente caen suaves pétalos de rosa en cámara lenta alrededor del frasco y brillan partículas de polen dorado al atardecer. Música de fondo: piano delicado de spa y notas suaves de arpa. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Descubre el poder regenerador del Sérum de Rosa Mosqueta cien por ciento orgánico."',
        promptEn:
          'The Rosehip Serum bottle and its label remain 100% steady and static on the mossy stone. Do NOT animate letters or generate on-screen text. Only soft pink rose petals fall in slow motion around the bottle and golden pollen particles shimmer in the sunset light. Background music: delicate spa piano and soft harp notes. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Descubre el poder regenerador del Sérum de Rosa Mosqueta cien por ciento orgánico."',
        onScreenText: 'Caída de pétalos en slow motion (Etiqueta fija sin animar letras)',
        voiceoverEs: 'Descubre el poder regenerador del Sérum de Rosa Mosqueta cien por ciento orgánico.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Atenúa Manchas + Hidratación)',
        purpose: 'Hacer brillar el logo de la hoja dorada mientras la misma voz explica los beneficios.',
        cameraMotion: 'Orbit corto 10° con reflejo en el logo dorado',
        musicAndSfx: 'Cuerdas suaves de spa + Misma Voz "Dra. Sofía" (Escena 2/4)',
        promptEs:
          'El frasco permanece firme sin animar ni deformar ninguna letra. La luz dorada del atardecer ilumina el aceite en el interior del vidrio ámbar y hace brillar sutilmente el logo de la hoja dorada en la etiqueta. Música de fondo: continúa el piano de spa y cuerdas cálidas. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Rico en ácidos grasos esenciales, atenúa manchas y líneas de expresión mientras hidrata profundamente."',
        promptEn:
          'The bottle stays steady without animating or warping any letters. Golden sunset light illuminates the oil inside the amber glass and makes the gold leaf logo on the label gleam subtly. Background music: continuous spa piano and warm strings. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Rico en ácidos grasos esenciales, atenúa manchas y líneas de expresión mientras hidrata profundamente."',
        onScreenText: 'Brillo exclusivo sobre el logo floral dorado',
        voiceoverEs: 'Rico en ácidos grasos esenciales, atenúa manchas y líneas de expresión mientras hidrata profundamente.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Efecto Glow y Regeneración Nocturna)',
        purpose: 'Mostrar los frutos de rosa mosqueta y el musgo húmedo con la misma voz.',
        cameraMotion: 'Macro Pan sobre el musgo húmedo y frutos rojos',
        musicAndSfx: 'Piano íntimo + Misma Voz "Dra. Sofía" (Escena 3/4)',
        promptEs:
          'Plano macro de los frutos rojos de rosa mosqueta y pétalos húmedos junto al frasco estático con destellos cálidos en el agua sobre la roca. Prohibido animar letras. Música de fondo: piano relajante de alta cosmética. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Regenera tu piel cada noche y despierta con un rostro suave, firme y luminoso."',
        promptEn:
          'Macro shot of red rosehip berries and dewy petals next to the static bottle with warm light reflections on the wet stone. Do NOT animate letters. Background music: soothing luxury skincare piano. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Regenera tu piel cada noche y despierta con un rostro suave, firme y luminoso."',
        onScreenText: 'Macro de frutos y rocío (Sin textos móviles)',
        voiceoverEs: 'Regenera tu piel cada noche y despierta con un rostro suave, firme y luminoso.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Ritual de Aplicación (3 Gotas cada Noche)',
        purpose: 'Cerrar con el modo de uso en la misma voz de la Dra. Sofía.',
        cameraMotion: 'Estático con bokeh dorado respirando suavemente',
        musicAndSfx: 'Acorde final de arpa + Misma Voz "Dra. Sofía" (Escena 4/4)',
        promptEs:
          'Plano heroico fijo del Sérum de Rosa Mosqueta bañado por la luz dorada del atardecer con partículas flotantes suaves. El envase y su logo permanecen 100% estáticos sin animar letras. Música de fondo: resolución suave de arpa y piano. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Solo aplica tres gotas cada noche para enamorarte de tu piel. ¡Pídelo hoy!"',
        promptEn:
          'Static hero shot of the Rosehip Serum bathed in golden sunset light with soft floating particles. The bottle and its logo stay 100% static without animating letters. Background music: soft harp and piano resolution. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Solo aplica tres gotas cada noche para enamorarte de tu piel. ¡Pídelo hoy!"',
        onScreenText: 'Cierre heroico fijo + Voz indicando las 3 gotas',
        voiceoverEs: 'Solo aplica tres gotas cada noche para enamorarte de tu piel. ¡Pídelo hoy!',
      },
    ],
  },
  {
    id: 'miel-propoleo',
    name: 'Miel & Propóleo Artesanal Orgánico',
    brand: 'Colmena Real Artesanal',
    category: 'Apicultura y Defensas Naturales',
    categoryId: 'apicultura',
    badgeText: 'Miel en Vivo · Sin Animar Letras · Voz Fija',
    aspectRatio: '1:1 Estudio',
    image: '/images/miel-propoleo.jpg',
    headline: 'PROTEGE TU GARGANTA Y SUBE TUS DEFENSAS',
    summary:
      'Tarro de cristal con miel ámbar brillante, panal fresco y cuchara mielera dejando caer un hilo dorado continuo. Solo fluye la miel en cámara lenta (el tarro y su logo de abeja quedan fijos sin animar letras), narrado con la voz tradicional de "Don Arturo".',
    voiceProfileName: 'Voz 4: "Don Arturo" (Masculina 48 años · Maestro Artesano Cálido)',
    voiceProfilePromptEs: VOICE_PROFILES_LIBRARY[3].descriptionEs,
    voiceProfilePromptEn: VOICE_PROFILES_LIBRARY[3].descriptionEn,
    backgroundMusicStyle: 'Guitarra Acústica Cálida Artesanal + Fluido Suave de Miel',
    backgroundMusicPromptEs:
      'Música de fondo: melodía acústica cálida y acogedora con guitarra punteada suave a volumen moderado bajo la voz.',
    backgroundMusicPromptEn:
      'Background music: warm, cozy artisanal acoustic melody with gentle fingerpicked guitar ducked softly under the voice.',
    specs: {
      tipo: 'Miel Cruda de Abejas con Extracto de Propóleo',
      contenido: 'Tarro de Vidrio 350g',
      ingredientes: 'Miel Multifloral Orgánica + Propóleo Puro + Polen',
      uso: '1 cucharadita en las mañanas o en infusión tibia',
      extra: 'Cosecha Artesanal 100% Pura',
    },
    benefits: [
      {
        title: 'Alivia Garganta y Tos',
        shortDesc: 'Calma la irritación de garganta y suaviza las vías respiratorias al instante.',
        iconName: 'heart',
      },
      {
        title: 'Antibiótico Natural',
        shortDesc: 'El propóleo puro actúa como escudo antibacteriano y antiviral de la colmena.',
        iconName: 'shield',
      },
      {
        title: 'Refuerza las Defensas',
        shortDesc: 'Ideal para proteger a niños y adultos durante cambios de clima e invierno.',
        iconName: 'award',
      },
      {
        title: 'Energía Pura y Vitalidad',
        shortDesc: 'Enzimas vivas, polen y minerales que revitalizan el cuerpo de forma natural.',
        iconName: 'sun',
      },
    ],
    geminiPromptEs:
      'Fotografía gastronómica y de producto natural: un tarro de vidrio transparente lleno de miel dorada brillante con tapa de madera, lazo rústico de hilo de yute y etiqueta crema con el logo dorado en relieve de una abeja y un panal hexagonal. A la derecha, una cuchara mielera de madera de la que cae un hilo continuo y espeso de miel dorada traslúcida formando una espiral sobre la mesa de madera rústica. A la izquierda, trozos de panal de abejas fresco, hojas de eucalipto, polen granulado y fragmentos oscuros de propóleo puro. Luz matutina cálida de cocina rústica, 85mm, 8k.',
    geminiPromptEn:
      'Artisanal food and natural product photography: a clear glass jar filled with glowing golden honey, wooden lid, rustic twine bow, and cream label featuring an embossed gold bee and hexagonal honeycomb logo emblem. On the right, a wooden honey dipper dripping a thick continuous ribbon of translucent golden honey coiling onto the rustic wooden table. On the left, fresh honeycomb chunks, eucalyptus leaves, bee pollen granules, and raw dark propolis pieces. Warm morning rustic kitchen light, 85mm, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial del tarro de vidrio con miel dorada y logo de abeja en oro sobre mesa de madera con panal de abejas, eucalipto y cuchara mielera bajo luz cálida matutina, sin textos móviles, lista para animar la caída de la miel en Google Flow.',
    cleanHeroPromptEn:
      'Commercial photo of the glass honey jar with gold bee logo on wooden table with honeycomb, eucalyptus, and honey dipper in warm morning light, no moving text, ready to animate the honey pour in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Tarro y Logo de Abeja Fijos',
        textEs: 'Tarro de vidrio y etiqueta estáticos (en Flow solo se anima el hilo de miel, nunca las letras)',
        textEn: 'Static glass jar and label (in Flow only the honey ribbon animates, never the letters)',
      },
      {
        category: 'beneficios',
        label: 'Logo de Abeja y Panal en Oro',
        textEs: 'Emblemas dorados de abeja y panal que reflejan la luz matutina sin deformarse',
        textEn: 'Gold bee and honeycomb emblems reflecting morning light without warping',
      },
      {
        category: 'iluminacion',
        label: 'Translucidez Ámbar',
        textEs: 'Contraluz cálido que atraviesa el tarro de miel y el hilo líquido haciéndolos brillar como ámbar vivo',
        textEn: 'Warm backlight passing through the honey jar and liquid ribbon making them glow like living amber',
      },
      {
        category: 'entorno',
        label: 'Miel Cayendo en Cámara Lenta',
        textEs: 'Cuchara mielera vertiendo miel en vivo, panal hexagonal, propóleo en roca, polen y eucalipto',
        textEn: 'Honey dipper pouring thick honey, hexagonal honeycomb, raw propolis chunks, bee pollen, and eucalyptus',
      },
      {
        category: 'camara',
        label: 'Misma Voz ("Don Arturo") + Guitarra',
        textEs: 'Voz masculina madura y cálida de 48 años idéntica en las 4 escenas + guitarra acústica artesanal',
        textEn: 'Identical 48yo warm mature male voice across all 4 scenes + artisanal acoustic guitar',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Hilo de Miel Dorada en Vivo (Hook)',
        purpose: 'Animar únicamente la caída lenta de la miel manteniendo el tarro y sus letras 100% quietos.',
        cameraMotion: 'Static Macro con fluido de miel en cámara lenta',
        musicAndSfx: 'Guitarra acústica cálida + Misma Voz "Don Arturo" (Escena 1/4)',
        promptEs:
          'El tarro de Miel & Propóleo y su etiqueta permanecen 100% firmes y estáticos. NO animar letras ni generar textos móviles. En cámara lenta, únicamente el hilo espeso y brillante de miel dorada fluye continuamente desde la cuchara de madera formando pliegues suaves en la base. Música de fondo: guitarra acústica cálida artesanal. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "Protege tu garganta y las defensas de toda tu familia con nuestra Miel y Propóleo artesanal."',
        promptEn:
          'The Honey & Propolis jar and its label remain 100% steady and static. Do NOT animate letters or generate moving text. In slow motion, only the thick glossy ribbon of golden honey flows continuously from the wooden dipper forming soft coils at the base. Background music: warm artisanal acoustic guitar. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "Protege tu garganta y las defensas de toda tu familia con nuestra Miel y Propóleo artesanal."',
        onScreenText: 'Solo fluye el hilo de miel (Etiqueta y letras 100% fijas)',
        voiceoverEs: 'Protege tu garganta y las defensas de toda tu familia con nuestra Miel y Propóleo artesanal.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Alivio de Garganta + Escudo Antibacteriano)',
        purpose: 'Explicar con la misma voz de Don Arturo el poder del propóleo y la miel cruda.',
        cameraMotion: 'Dolly In lento hacia el panal y el logo de abeja',
        musicAndSfx: 'Guitarra acústica familiar + Misma Voz "Don Arturo" (Escena 2/4)',
        promptEs:
          'Acercamiento lento hacia el tarro estático sin animar ninguna letra. La luz matutina cálida hace brillar el panal de cera fresca, los fragmentos de propóleo y el logo dorado de la abeja. Música de fondo: continúa la guitarra acústica cálida y reconfortante. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "El propóleo puro actúa como un escudo antibacteriano natural mientras la miel cruda suaviza tu garganta al instante."',
        promptEn:
          'Slow push-in toward the static jar without animating any letters. Warm morning light makes the fresh honeycomb, raw propolis chunks, and the gold bee logo gleam. Background music: continuous comforting warm acoustic guitar. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "El propóleo puro actúa como un escudo antibacteriano natural mientras la miel cruda suaviza tu garganta al instante."',
        onScreenText: 'Brillo cálido en el panal y en el logo de la abeja',
        voiceoverEs: 'El propóleo puro actúa como un escudo antibacteriano natural mientras la miel cruda suaviza tu garganta al instante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Defensas Altas + Energía de Colmena)',
        purpose: 'Recorrer los ingredientes puros de la colmena manteniendo la misma voz.',
        cameraMotion: 'Pan horizontal suave sobre el eucalipto, polen y panal',
        musicAndSfx: 'Guitarra y arpa ligera + Misma Voz "Don Arturo" (Escena 3/4)',
        promptEs:
          'Paneo suave a ras de la mesa de madera recorriendo las hojas de eucalipto, los gránulos de polen dorado y el panal hexagonal junto al tarro estático. Prohibido animar letras. Música de fondo: guitarra acústica orgánica y notas suaves de arpa. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "Cien por ciento pura, cruda y orgánica, llena de enzimas y antioxidantes que fortalecen tu sistema inmune."',
        promptEn:
          'Smooth tabletop pan across the eucalyptus leaves, golden bee pollen granules, and hexagonal honeycomb next to the static jar. Do NOT animate letters. Background music: organic acoustic guitar and light harp notes. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "Cien por ciento pura, cruda y orgánica, llena de enzimas y antioxidantes que fortalecen tu sistema inmune."',
        onScreenText: 'Paneo sobre polen, eucalipto y panal real',
        voiceoverEs: 'Cien por ciento pura, cruda y orgánica, llena de enzimas y antioxidantes que fortalecen tu sistema inmune.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre (1 Cucharadita cada Mañana)',
        purpose: 'Cerrar con la recomendación diaria en la misma voz tradicional.',
        cameraMotion: 'Plano heroico cálido con caída continua de miel',
        musicAndSfx: 'Acorde final acústico + Misma Voz "Don Arturo" (Escena 4/4)',
        promptEs:
          'Plano final luminoso del tarro totalmente estático con el hilo dorado de miel brillando a contraluz. Sin animar letras ni textos. Música de fondo: acorde final cálido y familiar de guitarra acústica. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "Toma una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!"',
        promptEn:
          'Luminous final hero shot of the completely static jar with the golden honey ribbon glowing in backlight. No animated letters or text. Background music: warm family-friendly acoustic guitar finale. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "Toma una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!"',
        onScreenText: 'Cierre limpio (Tarro fijo + Voz indicando la dosis)',
        voiceoverEs: 'Toma una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!',
      },
    ],
  },
];

export const SCENE_TEMPLATES_LIBRARY: ScenePromptTemplate[] = [
  {
    id: 'gancho-explosion-polvo',
    categoryId: 'gancho',
    categoryLabel: 'Escena de Gancho (0–4s)',
    title: 'Explosión de Polvo Botánico en 120fps (Sin Animar Letras)',
    idealFor: 'Cúrcuma, Jengibre, Matcha, Cacao, Maca, Superfoods en cápsulas',
    cameraMovement: 'Slow Push-In (Dolly In lento)',
    musicSuggestion: 'Cinemático con percusión orgánica + whoosh en cámara lenta',
    voiceAnchor: 'Misma Voz Fija (Narrador "Mateo" o "Dra. Sofía")',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "¿Dolor articular o inflamación? Activa tu bienestar desde el primer día."',
    promptEs:
      'El frasco del producto y su logo permanecen 100% firmes y estáticos en el centro sobre piedra pizarra negra. NO animar letras ni generar textos móviles. En cámara superlenta (120fps super slow motion), únicamente una nube de fino polvo botánico dorado detrás del envase se expande suavemente en el aire iluminada a contraluz. Música de fondo: instrumental cinematográfico con percusión orgánica suave. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      '.',
    promptEn:
      'The product bottle and its logo remain 100% still and static in the center on black slate stone. Do NOT animate letters or generate moving text. In 120fps super slow motion, only a cloud of fine golden botanical powder behind the bottle expands softly in mid-air backlit by warm amber light. Background music: uplifting cinematic music with soft organic percussion. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      '.',
  },
  {
    id: 'gancho-splash-esmeralda',
    categoryId: 'gancho',
    categoryLabel: 'Escena de Gancho (0–4s)',
    title: 'Corona de Agua Cristalina y Hojas (Etiqueta Congelada)',
    idealFor: 'Goteros Detox, Clorofila, Extractos Herbales, Hidratación',
    cameraMovement: 'Static Macro (Frasco fijo + agua en slow-motion)',
    musicSuggestion: 'Guitarra acústica fresca + salpicadura de agua cristalina',
    voiceAnchor: 'Misma Voz Fija ("Elena" · Voz fresca matutina)',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Purifica tu digestión y oxigena tu cuerpo cada mañana."',
    promptEs:
      'El frasco gotero y su logo permanecen completamente inmóviles y estáticos en el centro. Prohibido animar o deformar letras. Únicamente la corona simétrica de agua cristalina en su base ondula en cámara superlenta liberando microgotas brillantes y hojas de menta fresca. Música de fondo: guitarra acústica refrescante con sonido cristalino de agua pura. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEs +
      '.',
    promptEn:
      'The dropper bottle and its logo remain completely still and static in the center. Animating or warping letters is forbidden. Only the symmetrical crystal water crown at its base ripples in super slow motion releasing sparkling micro-droplets and fresh mint leaves. Background music: refreshing acoustic guitar with crisp crystal water splash SFX. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEn +
      '.',
  },
  {
    id: 'gancho-amanecer-bosque',
    categoryId: 'gancho',
    categoryLabel: 'Escena de Gancho (0–4s)',
    title: 'Rayos de Sol Matutinos y Rocío Resbalando',
    idealFor: 'Colágeno, Magnesio, Multivitamínicos, Adaptógenos',
    cameraMovement: 'Dolly In suave hacia el logo dorado',
    musicSuggestion: 'Piano suave de bienestar + brisa matutina del bosque',
    voiceAnchor: 'Misma Voz Fija ("Dra. Sofía" · Especialista)',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Cuatro beneficios esenciales en una sola fórmula cien por ciento natural."',
    promptEs:
      'El frasco de vidrio ámbar y su etiqueta permanecen 100% firmes sobre madera húmeda en un bosque soleado. NO animar letras. Una gota de rocío cristalina se desliza lentamente por el vidrio mientras los rayos de sol matutinos atraviesan las hojas de helecho y el polen dorado flota en el aire. Música de fondo: piano suave y cuerdas cálidas con brisa de bosque. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      '.',
    promptEn:
      'The amber glass bottle and its label stay 100% steady on wet wood in a sunlit forest. Do NOT animate letters. A crystal dew drop slides slowly down the glass while morning sunbeams filter through fern leaves and golden pollen floats in the air. Background music: soft piano and warm strings with gentle forest breeze. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      '.',
  },
  {
    id: 'beneficios-medallones-oro',
    categoryId: 'beneficios',
    categoryLabel: 'Escena de Beneficios (4–8s)',
    title: 'Destello de Luz sobre Logos/Iconos Dorados (Sin Letras)',
    idealFor: 'Iluminar los 4 iconos simbólicos de beneficios mientras habla el locutor',
    cameraMovement: 'Orbit suave de 10° (Sin deformar el envase)',
    musicSuggestion: 'Instrumental inspirador + destello cristalino (chime) por icono',
    voiceAnchor: 'Misma Voz Fija que en la Escena 1',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Nutre tu piel y cabello mientras proteges tus articulaciones y músculos."',
    promptEs:
      'El envase permanece firme y estático. NO animar letras; únicamente un barrido de luz cálida recorre el relieve metálico de los 4 medallones circulares con iconos/logos simbólicos dorados haciéndolos brillar con elegancia mientras partículas doradas ascienden en el fondo. Música de fondo: instrumental inspirador de bienestar con destello cristalino suave. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      '.',
    promptEn:
      'The bottle remains steady and static. Do NOT animate letters; only a warm light sweep travels across the metallic relief of the 4 circular gold symbolic icon/logo medallions making them gleam elegantly while golden particles rise in the background. Background music: inspiring wellness instrumental with a subtle crystal chime. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      '.',
  },
  {
    id: 'beneficios-gota-pipeta',
    categoryId: 'beneficios',
    categoryLabel: 'Escena de Beneficios (4–8s)',
    title: 'Gota de Oro Líquido Cayendo de la Pipeta',
    idealFor: 'Sérums Faciales, Aceites Esenciales, Extractos Sublinguales',
    cameraMovement: 'Macro Close-Up (Enfoque selectivo f/1.4)',
    musicSuggestion: 'Ambient Spa con piano delicado y notas de arpa',
    voiceAnchor: 'Misma Voz Fija ("Dra. Sofía")',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Regenera, atenúa manchas e hidrata profundamente mientras duermes."',
    promptEs:
      'Plano macro extremo junto al frasco estático (sin animar letras): de la punta de la pipeta de cristal se desprende en cámara superlenta una gota dorada traslúcida y brillante, iluminada por el sol del atardecer con un fondo bokeh cremoso de flores y musgo. Música de fondo: spa elegante con piano delicado y arpa suave. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      '.',
    promptEn:
      'Extreme macro close-up next to the static bottle (do not animate letters): from the tip of the glass pipette a translucent glowing golden drop detaches in super slow motion, backlit by golden hour sunlight with a creamy floral and moss bokeh background. Background music: luxury spa piano and soft harp. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      '.',
  },
  {
    id: 'beneficios-absorcion-celular',
    categoryId: 'beneficios',
    categoryLabel: 'Escena de Beneficios (8–12s)',
    title: 'Burbujas de Luz Dorada (Rápida Absorción y Pureza)',
    idealFor: 'Probióticos, Omega 3, Vitaminas, Citrato de Magnesio',
    cameraMovement: 'Plano fijo con microburbujas ascendentes',
    musicSuggestion: 'Melodía orgánica suave (Ambient Wellness)',
    voiceAnchor: 'Misma Voz Fija en todas las escenas',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Con absorción tres veces más rápida para subir tus defensas y energía."',
    promptEs:
      'El envase y su logo permanecen 100% estáticos y nítidos en el centro sin animar ninguna letra. Alrededor del frasco, cientos de microburbujas de luz dorada y esmeralda ascienden suavemente en cámara lenta transmitiendo biodisponibilidad y pureza celular. Música de fondo: ambiental moderna y cálida con armónicos suaves. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      '.',
    promptEn:
      'The bottle and its logo remain 100% static and sharp in the center without animating any letters. Around the bottle, hundreds of golden and emerald light micro-bubbles ascend gently in slow motion conveying bioavailability and cellular purity. Background music: warm modern ambient wellness music. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      '.',
  },
  {
    id: 'ingredientes-miel-cayendo',
    categoryId: 'ingredientes',
    categoryLabel: 'Escena de Ingredientes (8–12s)',
    title: 'Hilo Continuo de Miel y Propóleo en Espiral',
    idealFor: 'Mieles, Jarabes Naturales, Propóleo, Polen, Jalea Real',
    cameraMovement: 'Static Macro con fluido viscoso en vivo',
    musicSuggestion: 'Guitarra acústica cálida artesanal + ambiente matutino',
    voiceAnchor: 'Misma Voz Fija ("Don Arturo" · Voz artesanal)',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Un escudo antibacteriano natural que suaviza tu garganta al instante."',
    promptEs:
      'Al lado del tarro artesanal 100% firme (sin animar letras de la etiqueta), una cuchara mielera de madera deja caer un hilo espeso y continuo de miel dorada traslúcida en cámara lenta formando pliegues brillantes a contraluz junto a trozos de panal fresco. Música de fondo: guitarra acústica cálida artesanal. ' +
      VOICE_PROFILES_LIBRARY[3].descriptionEs +
      '.',
    promptEn:
      'Beside the 100% steady artisanal jar (do not animate label letters), a wooden honey dipper pours a thick continuous ribbon of translucent golden honey in slow motion forming glowing coils in backlight next to fresh honeycomb chunks. Background music: warm fingerpicked acoustic guitar. ' +
      VOICE_PROFILES_LIBRARY[3].descriptionEn +
      '.',
  },
  {
    id: 'ingredientes-mesa-botanica',
    categoryId: 'ingredientes',
    categoryLabel: 'Escena de Ingredientes (8–12s)',
    title: 'Paneo Macro sobre Raíces, Cápsulas y Hojas Frescas',
    idealFor: 'Demostrar que el suplemento está hecho con ingredientes 100% reales',
    cameraMovement: 'Tabletop Pan (Paneo rasante horizontal)',
    musicSuggestion: 'Cuerdas acústicas cálidas + percusión orgánica sutil',
    voiceAnchor: 'Misma Voz Fija ("Mateo" · Narrador Comercial)',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Ingredientes cien por ciento puros, orgánicos y de máxima absorción."',
    promptEs:
      'Paneo rasante cinematográfico sobre una mesa de madera oscura y piedra húmeda que recorre los ingredientes naturales frescos cubiertos de gotas de rocío junto al frasco estático. Prohibido animar letras. Música de fondo: instrumental orgánico con guitarra y violonchelo suave. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      '.',
    promptEn:
      'Cinematic low-angle tabletop pan across dark wood and wet stone gliding past fresh natural ingredients covered in dew drops next to the static bottle. Do NOT animate letters. Background music: organic instrumental with gentle guitar and cello. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      '.',
  },
  {
    id: 'cierre-ficha-dosis',
    categoryId: 'cierre',
    categoryLabel: 'Escena de Cierre y Dosis (12–16s)',
    title: 'Plano Heroico Final con Destello en el Logo (Sin Animar Letras)',
    idealFor: 'Cerrar el video comercial con la dosis diaria dicha por el mismo locutor',
    cameraMovement: 'Hero Lock (Plano fijo con barrido de luz en el logo dorado)',
    musicSuggestion: 'Acorde final resolutivo de piano y cuerdas + chime dorado',
    voiceAnchor: 'Misma Voz Fija cerrando el llamado a la acción',
    duration: '4 segundos',
    benefitHookExample: 'Locución: "Solo toma dos cápsulas al día. ¡Escríbenos y pide el tuyo hoy!"',
    promptEs:
      'Plano maestro final perfectamente centrado del producto natural y sus medallones de iconos dorados. NO animar letras; únicamente un elegante destello de luz recorre el logo dorado mientras las partículas del fondo se posan suavemente. Música de fondo: acorde final armónico de piano y cuerdas cálidas. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      '.',
    promptEn:
      'Perfectly centered final master hero shot of the natural product and its gold icon medallions. Do NOT animate letters; only an elegant light flare sweeps across the gold logo emblem while background particles gently settle. Background music: harmonious resolving chord of piano and warm strings. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      '.',
  },
];
