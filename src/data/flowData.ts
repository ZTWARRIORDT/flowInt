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

export const MUSIC_PROMPTS_LIBRARY: MusicPromptPreset[] = [
  {
    id: 'spa-botanico',
    title: 'Ambient Spa, Piano Suave y Naturaleza Viva',
    mood: 'Paz, pureza orgánica, regeneración y confianza',
    bestFor: 'Colágeno, Sérums Faciales, Aceites Esenciales y Vitaminas',
    promptEs:
      'Audio: Colocar música de fondo instrumental relajante de spa con piano suave, cuerdas cálidas y sonidos sutiles de brisa en el bosque y gotas de rocío.',
    promptEn:
      'Audio: Warm, soothing spa instrumental background music with soft acoustic piano, gentle strings, and subtle forest breeze and water droplet sound effects.',
  },
  {
    id: 'energia-epica',
    title: 'Cinemático Inspirador y Vitalidad Natural',
    mood: 'Fuerza, alivio del dolor, energía y acción',
    bestFor: 'Cúrcuma + Jengibre, Magnesio, Articulaciones y Superfoods',
    promptEs:
      'Audio: Colocar música de fondo cinematográfica e inspiradora con percusión orgánica suave, violonchelo cálido y efecto de sonido envolvente en cámara lenta.',
    promptEn:
      'Audio: Uplifting cinematic background music with soft organic percussion, warm cello swells, and deep slow-motion whoosh sound effects.',
  },
  {
    id: 'frescura-detox',
    title: 'Acústico Refrescante y Cristalino (Detox)',
    mood: 'Frescura matutina, ligereza digestiva y limpieza',
    bestFor: 'Clorofila, Té Matcha, Probióticos y Goteros Líquidos',
    promptEs:
      'Audio: Colocar música de fondo alegre y fresca con guitarra acústica luminosa, marimba suave y sonido cristalino de salpicadura de agua pura.',
    promptEn:
      'Audio: Bright, refreshing acoustic background music with light acoustic guitar, soft marimba notes, and crisp crystal water splash sound effects.',
  },
  {
    id: 'artesanal-acustico',
    title: 'Folk Acústico Cálido y Tradición Artesanal',
    mood: 'Hogar, calidez familiar, cosecha pura y protección',
    bestFor: 'Miel con Propóleo, Polen, Jarabes Naturales e Infusiones',
    promptEs:
      'Audio: Colocar música de fondo acústica cálida con guitarra española suave, notas de arpa ligera y sonido relajante de miel fluyendo en una mañana soleada.',
    promptEn:
      'Audio: Warm artisanal acoustic background music with gentle fingerpicked guitar, light harp notes, and cozy morning nature ambiance.',
  },
];

export const ANATOMY_COLORS: Record<
  PromptAnatomySegment['category'],
  { bg: string; border: string; text: string; dot: string; name: string }
> = {
  producto: {
    name: 'Envase y Etiqueta',
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/40',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
  },
  beneficios: {
    name: 'Medallones de Beneficios y Texto',
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
    name: 'Lente, Encuadre y Calidad',
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
    badgeText: '4 Medallones Dorados · Articulaciones y Piel',
    aspectRatio: '1:1 Estudio',
    image: '/images/colageno-magnesio.jpg',
    headline: 'ARTICULACIONES FUERTES, PIEL FIRME Y ENERGÍA',
    summary:
      'Fotografía botánica en bosque soleado con frasco ámbar cubierto de rocío, etiqueta verde bosque con relieve dorado y 4 medallones circulares dorados flotantes que resumen sus beneficios.',
    backgroundMusicStyle: 'Piano Botánico Inspirador + Sonido Suave de Bosque Matutino',
    backgroundMusicPromptEs:
      'Música de fondo: melodía instrumental inspiradora de piano suave y cuerdas cálidas a volumen moderado, acompañada de brisa matutina en el bosque y destellos cristalinos al iluminarse cada medallón de beneficio.',
    backgroundMusicPromptEn:
      'Background music: uplifting soft piano and warm strings instrumental at balanced volume, layered with gentle morning forest breeze and subtle crystal chimes as each golden benefit medallion gleams.',
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
      'Fotografía comercial de producto natural: un frasco de vidrio ámbar con gotas de agua fresca y tapa dorada metálica sobre una mesa de madera húmeda en un bosque soleado. Etiqueta verde bosque oscuro con hojas grabadas y letras en relieve dorado: "COLÁGENO + MAGNESIO - 120 Capsules". Flotando simétricamente alrededor del frasco hay 4 medallones circulares de oro brillante con iconos luminosos: 1) "PIEL Y CABELLO", 2) "ARTICULACIONES", 3) "MÚSCULOS", 4) "ENERGÍA". Rodeado de helechos verdes, hojas de monstera y eucalipto con rayos de sol matutinos y partículas de polen dorado flotando. Lente 85mm f/1.8, calidad 8k.',
    geminiPromptEn:
      'Commercial natural product photography: a dark amber glass bottle with fresh water droplets and brushed gold cap resting on a wet wooden table in a sunlit forest. Dark forest green embossed label with gold foil typography: "COLÁGENO + MAGNESIO - 120 Capsules". Floating symmetrically around the bottle are 4 circular polished gold medallions with glowing icons: "PIEL Y CABELLO", "ARTICULACIONES", "MÚSCULOS", "ENERGÍA". Surrounded by green ferns, monstera, and eucalyptus leaves with morning sunbeams and golden dust motes. 85mm lens f/1.8, 8k.',
    cleanHeroPromptEs:
      'Fotografía de producto natural en el bosque al amanecer: frasco de vidrio ámbar con gotas de rocío y etiqueta verde oscuro con letras doradas "COLÁGENO + MAGNESIO", sobre madera rústica húmeda rodeado de helechos y hojas de eucalipto. Sin medallones ni textos flotantes externos. Rayos de sol dorados atravesando el follaje, 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Sunrise forest product photography: dewy amber glass bottle with dark green and gold foil label "COLÁGENO + MAGNESIO" on wet rustic wood surrounded by ferns and eucalyptus leaves. No floating badges or external text. Golden sunbeams filtering through foliage, 85mm f/1.8, 8k.',
    anatomy: [
      {
        category: 'producto',
        label: 'Envase Premium',
        textEs: 'Frasco ámbar con gotas de condensación, tapa dorada y etiqueta verde con relieve en oro "COLÁGENO + MAGNESIO"',
        textEn: 'Amber bottle with condensation droplets, gold cap, and embossed forest green label with gold foil',
      },
      {
        category: 'beneficios',
        label: '4 Medallones de Beneficios',
        textEs: '4 sellos dorados circulares flotantes: Piel y Cabello, Articulaciones, Músculos y Energía',
        textEn: '4 floating circular gold badges: Skin & Hair, Joints, Muscles, and Energy',
      },
      {
        category: 'iluminacion',
        label: 'Rayos de Sol (God Rays)',
        textEs: 'Rayos de sol cálidos desde la esquina superior izquierda atravesando el bosque con partículas doradas',
        textEn: 'Warm morning sunbeams from top-left filtering through forest canopy with golden particles',
      },
      {
        category: 'entorno',
        label: 'Naturaleza Viva',
        textEs: 'Madera rústica húmeda, hojas de helecho, eucalipto y monstera con gotas de rocío',
        textEn: 'Wet rustic wood surface, fern fronds, eucalyptus, and monstera leaves with dew drops',
      },
      {
        category: 'camara',
        label: 'Óptica Cinematográfica',
        textEs: 'Lente 85mm f/1.8 con desenfoque cremoso (bokeh) en el fondo y foco quirúrgico en la etiqueta',
        textEn: '85mm f/1.8 lens with creamy background bokeh and razor-sharp focus on the bottle label',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Amanecer Botánico (Gancho de Vitalidad)',
        purpose: 'Transmitir pureza natural y captar la atención con los rayos de sol y música envolvente.',
        cameraMotion: 'Dolly In lento hacia la etiqueta dorada',
        musicAndSfx: 'Piano suave inspirador + brisa matutina del bosque',
        promptEs:
          'Los rayos de sol matutinos se filtran suavemente entre las hojas del bosque iluminando el frasco de Colágeno + Magnesio. Las hojas de helecho se mueven sutilmente con la brisa y las partículas de polen dorado flotan en cámara lenta. El frasco y sus 4 medallones dorados permanecen nítidos. Audio: colocar música de fondo instrumental relajante de piano suave y cuerdas cálidas con sonido sutil de naturaleza matutina.',
        promptEn:
          'Morning sunbeams filter gently through the forest leaves illuminating the Collagen + Magnesium bottle. Fern fronds sway subtly in the breeze and golden pollen particles float in slow motion. The bottle and its 4 gold medallions remain sharp. Audio: warm, uplifting soft piano and strings background music with gentle morning forest ambiance.',
        onScreenText: '4 Beneficios en 1 sola fórmula natural 🌿✨',
        voiceoverEs: '¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Piel Radiante y Articulaciones Flexibles',
        purpose: 'Resaltar los dos medallones superiores: Piel/Cabello y Articulaciones.',
        cameraMotion: 'Pan suave de izquierda a derecha con reflejo en letras doradas',
        musicAndSfx: 'Continúa música de piano + destello sonoro suave (chime) en los medallones',
        promptEs:
          'Un destello cálido de sol recorre las letras doradas en relieve de "COLÁGENO + MAGNESIO" y hace brillar los medallones de Piel y Cabello y Articulaciones. Gotas de rocío resbalan lentamente por el vidrio ámbar. Audio: música de fondo instrumental de bienestar continua con un destello sonoro cristalino al brillar los medallones dorados.',
        promptEn:
          'A warm sunbeam sweeps across the gold foil lettering of "COLÁGENO + MAGNESIO" and makes the Skin & Hair and Joints medallions gleam. Dew drops slide slowly down the amber glass. Audio: continuous wellness instrumental background music with a soft crystal chime as the gold medallions shine.',
        onScreenText: '✨ 1. Piel y Cabello Firme · 🦴 2. Articulaciones sin Dolor',
        voiceoverEs: 'El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Músculos Recuperados y Energía Vital',
        purpose: 'Explicar la acción del Magnesio en los músculos y el nivel de energía.',
        cameraMotion: 'Orbit ligero con enfoque en los medallones inferiores',
        musicAndSfx: 'Cuerdas cálidas ascendentes que transmiten vitalidad y energía',
        promptEs:
          'Cámara en órbita lenta resaltando los medallones dorados de Músculos y Energía rodeados de hojas de eucalipto húmedas y destellos dorados que ascienden desde la madera. Audio: música de fondo inspiradora con cuerdas cálidas y percusión suave que transmite vitalidad.',
        promptEn:
          'Slow orbital camera highlighting the Muscles and Energy gold medallions surrounded by wet eucalyptus leaves and golden sparkles rising from the wood. Audio: inspiring background music with warm strings and light rhythm conveying vitality.',
        onScreenText: '💪 3. Músculos sin Calambres · ⚡ 4. Energía Todo el Día',
        voiceoverEs: 'Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Comercial (120 Cápsulas · 60 Días)',
        purpose: 'Presentar el rendimiento del envase y llamado a la acción con acorde final.',
        cameraMotion: 'Plano maestro fijo con atmósfera luminosa',
        musicAndSfx: 'Acorde final cálido y elegante de piano y arpa',
        promptEs:
          'Plano heroico final del frasco de Colágeno + Magnesio con sus 4 sellos dorados brillando en armonía bajo la luz dorada del bosque. Audio: cierre musical armónico y elegante con piano acústico y brisa suave.',
        promptEn:
          'Final hero shot of the Collagen + Magnesium bottle with its 4 golden badges glowing harmoniously under the golden forest light. Audio: harmonious and elegant musical resolution with acoustic piano and gentle breeze.',
        onScreenText: '120 Cápsulas (2 meses de tratamiento) · ¡Pide el tuyo hoy!',
        voiceoverEs: 'Un tratamiento completo de ciento veinte cápsulas para transformar tu bienestar. ¡Pídelo hoy!',
      },
    ],
  },
  {
    id: 'curcuma-ashwagandha',
    name: 'Cúrcuma + Jengibre Natural Vitae',
    brand: 'Natural Vitae',
    category: 'Antiinflamatorio y Articular',
    categoryId: 'suplementos',
    badgeText: 'Explosión Dinámica · Antiinflamatorio',
    aspectRatio: '1:1 Estudio',
    image: '/images/curcuma-ashwagandha.jpg',
    headline: 'DESINFLAMA TUS ARTICULACIONES CON PODER NATURAL',
    summary:
      'Fotografía de impacto comercial con explosión congelada de polvo dorado de cúrcuma detrás del frasco ámbar, rodajas de jengibre fresco y raíces de cúrcuma sobre pizarra negra.',
    backgroundMusicStyle: 'Cinemático Orgánico con Percusión Suave + Whoosh en Slow Motion',
    backgroundMusicPromptEs:
      'Música de fondo: instrumental cinematográfico cálido con percusión orgánica profunda, violonchelo inspirador y efecto de sonido envolvente en cámara superlenta para la explosión de cúrcuma.',
    backgroundMusicPromptEn:
      'Background music: warm cinematic instrumental with deep organic percussion, inspiring cello, and a rich slow-motion whoosh sound effect as the golden turmeric powder expands.',
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
      'Fotografía publicitaria de alta velocidad de un frasco de vidrio ámbar con tapa negra "NATURAL VITAE - CÚRCUMA + JENGIBRE - Apoyo Articular y Antiinflamatorio - 60 Cápsulas Vegetales", sobre una bandeja de piedra pizarra negra húmeda. Alrededor de la base hay rodajas frescas de jengibre, raíces de cúrcuma cortadas de color naranja intenso y una cuchara de madera con polvo de cúrcuma. Detrás del frasco, una espectacular explosión en el aire de fino polvo dorado de cúrcuma iluminada a contraluz por un foco cálido ámbar sobre fondo oscuro dramático. Lente macro 90mm, ultra detallado, 8k.',
    geminiPromptEn:
      'High-speed commercial product photography of an amber glass supplement bottle with black cap "NATURAL VITAE - CÚRCUMA + JENGIBRE - Apoyo Articular y Antiinflamatorio - 60 Cápsulas Vegetales" on a wet black slate stone tray. Surrounded at the base by fresh sliced ginger root, vibrant orange turmeric rhizomes, and a wooden spoon with turmeric powder. Behind the bottle, a dramatic mid-air explosion of fine golden turmeric powder backlit by warm amber studio lighting against a dark moody background. 90mm macro lens, ultra-detailed, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial en estudio oscuro del frasco ámbar "NATURAL VITAE CÚRCUMA + JENGIBRE" sobre piedra pizarra negra rodeado de raíces de cúrcuma y rodajas de jengibre fresco, con iluminación cálida lateral lista para animar la explosión de polvo en Google Flow.',
    cleanHeroPromptEn:
      'Dark studio commercial photo of the amber bottle "NATURAL VITAE CÚRCUMA + JENGIBRE" on black slate surrounded by turmeric roots and fresh ginger slices, with warm side lighting ready to animate powder explosion in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Frasco y Etiqueta',
        textEs: 'Frasco de vidrio ámbar con gotas de agua, tapa negra y etiqueta mostaza "CÚRCUMA + JENGIBRE"',
        textEn: 'Amber glass bottle with water droplets, black cap, and mustard-gold label "CÚRCUMA + JENGIBRE"',
      },
      {
        category: 'beneficios',
        label: 'Iconos en Etiqueta',
        textEs: 'Subtítulo "APOYO ARTICULAR Y ANTIINFLAMATORIO" con 3 sellos vectoriales (Hoja, Articulación, Corazón)',
        textEn: 'Subtitle "APOYO ARTICULAR Y ANTIINFLAMATORIO" with 3 minimalist benefit icons on the label',
      },
      {
        category: 'iluminacion',
        label: 'Contraluz Dramático',
        textEs: 'Contraluz cálido ámbar que enciende cada partícula de polvo dorado en el aire',
        textEn: 'Warm amber backlight igniting every suspended golden turmeric powder particle in mid-air',
      },
      {
        category: 'entorno',
        label: 'Ingredientes Reales + Polvo',
        textEs: 'Piedra pizarra negra, rodajas de jengibre húmedo, cúrcuma fresca y nube de especias en suspensión',
        textEn: 'Black slate stone, wet ginger slices, fresh turmeric root, and suspended spice cloud',
      },
      {
        category: 'camara',
        label: 'Alta Velocidad (High-Speed)',
        textEs: 'Captura congelada a 1/4000s, lente macro 90mm f/2.8, reflejo nítido en la base',
        textEn: 'High-speed 1/4000s freeze capture, 90mm macro lens f/2.8, crisp reflection on the dark surface',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Explosión en Cámara Superlenta (Hook)',
        purpose: 'Impactar visualmente con la nube de cúrcuma en cámara superlenta mientras el frasco está inmóvil.',
        cameraMotion: 'Slow Push-In (Acercamiento dramático en 120fps)',
        musicAndSfx: 'Música cinematográfica cálida + efecto de expansión en slow-motion',
        promptEs:
          'En cámara superlenta (super slow motion), la nube de polvo dorado de cúrcuma detrás del frasco se expande suavemente en el aire iluminada por una luz ámbar cálida. El frasco de Cúrcuma + Jengibre y las raíces en la base permanecen perfectamente enfocados y firmes. Audio: colocar música de fondo cinematográfica e inspiradora con percusión orgánica suave y efecto envolvente de polvo en cámara lenta.',
        promptEn:
          'In super slow motion, the golden turmeric powder cloud behind the bottle expands softly in mid-air backlit by warm amber light. The Turmeric + Ginger bottle and the roots at the base remain perfectly focused and steady. Audio: warm cinematic background music with soft organic percussion and a deep slow-motion powder expansion sound effect.',
        onScreenText: '¿Dolor articular o inflamación constante? 🔥🌿',
        voiceoverEs: 'Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Alivio Articular y Movilidad)',
        purpose: 'Explicar cómo la curcumina desinflama articulaciones y devuelve la movilidad.',
        cameraMotion: 'Orbit lateral bajo alrededor de la pizarra negra',
        musicAndSfx: 'Melodía acústica y violonchelo cálido constante',
        promptEs:
          'Movimiento orbital suave a ras de la piedra pizarra negra, pasando frente a las rodajas frescas de jengibre y la cuchara de madera con cúrcuma mientras finas chispas doradas flotan en el aire. Audio: música de fondo instrumental cálida con cuerdas suaves y ritmo motivador.',
        promptEn:
          'Low-angle smooth orbital movement across the black slate stone, passing the fresh ginger slices and wooden spoon with turmeric while fine golden sparks float in the air. Audio: warm instrumental background music with gentle strings and motivating rhythm.',
        onScreenText: '🦴 1. Desinflama Articulaciones · 🏃 2. Recupera tu Movilidad',
        voiceoverEs: 'Su alta concentración desinflama tus articulaciones de forma natural y alivia la rigidez muscular.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Antioxidante + Sinergia con Jengibre)',
        purpose: 'Mostrar por qué la combinación de Cúrcuma + Jengibre multiplica el efecto.',
        cameraMotion: 'Macro Zoom hacia los ingredientes puros',
        musicAndSfx: 'Música orgánica en crescendo + brillo sutil al iluminar la etiqueta',
        promptEs:
          'Plano macro cinematográfico de las raíces de cúrcuma naranja intenso y el jengibre fresco junto al frasco Natural Vitae, con iluminación dorada recorriendo los iconos de la etiqueta. Audio: música de fondo orgánica e inspiradora con destello sonoro suave.',
        promptEn:
          'Cinematic macro shot of vibrant orange turmeric roots and fresh ginger next to the Natural Vitae bottle, with golden light sweeping across the label icons. Audio: inspiring organic background music with a subtle shimmer sound.',
        onScreenText: '🛡️ 3. Poder Antioxidante · 🌱 4. Con Jengibre de Alta Absorción',
        voiceoverEs: 'Combinado con jengibre puro, protege tus células y mejora tu digestión con máxima absorción.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre (60 Cápsulas Vegetales)',
        purpose: 'Llamado a la acción claro indicando la dosis diaria.',
        cameraMotion: 'Estático con partículas doradas flotando suavemente',
        musicAndSfx: 'Resolución musical cálida y elegante',
        promptEs:
          'Plano heroico final del frasco Cúrcuma + Jengibre Natural Vitae nítido en el centro mientras las últimas partículas de polvo dorado caen lentamente sobre la pizarra negra. Audio: acorde final cálido de música instrumental de bienestar.',
        promptEn:
          'Final hero shot of the Natural Vitae Turmeric + Ginger bottle sharp in the center as the last golden powder particles settle slowly onto the black slate. Audio: warm resolving chord of wellness instrumental background music.',
        onScreenText: '60 Cápsulas Vegetales · 2 al día · ¡Haz tu pedido hoy!',
        voiceoverEs: 'Sesenta cápsulas cien por ciento vegetales para volver a moverte sin límites. ¡Pide el tuyo hoy!',
      },
    ],
  },
  {
    id: 'clorofila-matcha',
    name: 'Clorofila & Matcha — Liquid Detox',
    brand: 'Natural Wellness Drops',
    category: 'Extractos Líquidos y Detox',
    categoryId: 'extractos',
    badgeText: 'Splash de Agua Esmeralda · Gotero Detox',
    aspectRatio: '1:1 Estudio',
    image: '/images/clorofila-matcha.jpg',
    headline: 'OXIGENA TU CUERPO Y PURIFICA TU DIGESTIÓN',
    summary:
      'Gotero de vidrio verde esmeralda emergiendo de una corona de agua cristalina en movimiento con hojas frescas de menta, eucalipto y té matcha bajo rayos de sol matutinos.',
    backgroundMusicStyle: 'Acústico Refrescante Matutino + Sonido Cristalino de Agua',
    backgroundMusicPromptEs:
      'Música de fondo: melodía acústica fresca y luminosa con guitarra suave, notas de marimba y sonido cristalino de salpicadura de agua pura en cámara lenta.',
    backgroundMusicPromptEn:
      'Background music: bright, refreshing morning acoustic melody with soft guitar, light marimba notes, and crisp slow-motion crystal water splash sound effects.',
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
      'Fotografía comercial refrescante de alta velocidad: un frasco gotero de vidrio verde esmeralda con pipeta de cristal y etiqueta blanca texturizada que dice "CLOROFILA & MATCHA - LIQUID DETOX - 30ml", emergiendo del centro de una corona perfecta de agua verde cristalina (water crown splash) sobre una superficie de agua con ondas concéntricas. Hojas frescas de menta, brotes de té verde matcha y eucalipto flotan en el aire junto con microgotas de agua brillantes. Fondo de jardín botánico desenfocado con rayos de sol dorados desde arriba. Lente macro 100mm, 8k.',
    geminiPromptEn:
      'Refreshing high-speed commercial photography: an emerald green glass dropper bottle with glass pipette and textured cream label reading "CLOROFILA & MATCHA - LIQUID DETOX - 30ml", emerging from the center of a crystal-clear emerald water crown splash over rippling water. Fresh mint leaves, green matcha tea shoots, and eucalyptus float in mid-air alongside sparkling water droplets. Sunlit blurred botanical garden background with golden sunbeams. 100mm macro lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial del frasco gotero verde esmeralda "CLOROFILA & MATCHA LIQUID DETOX" sobre una superficie de agua esmeralda tranquila con ondas suaves, rodeado de hojas de menta bajo luz solar matutina, listo para animar el splash en Google Flow.',
    cleanHeroPromptEn:
      'Commercial photo of the emerald green dropper bottle "CLOROFILA & MATCHA LIQUID DETOX" on calm emerald water with gentle ripples, surrounded by mint leaves in morning sunlight, ready to animate in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Gotero Esmeralda',
        textEs: 'Frasco gotero de vidrio verde esmeralda de 30ml con pipeta transparente y etiqueta "CLOROFILA & MATCHA"',
        textEn: '30ml emerald green glass dropper bottle with clear pipette and "CLOROFILA & MATCHA" label',
      },
      {
        category: 'beneficios',
        label: 'Promesa en Etiqueta',
        textEs: 'Sello central "LIQUID DETOX · NATURAL WELLNESS DROPS" con tipografía verde bosque y oro',
        textEn: 'Central badge "LIQUID DETOX · NATURAL WELLNESS DROPS" in forest green and gold typography',
      },
      {
        category: 'iluminacion',
        label: 'Sol Matutino Traslúcido',
        textEs: 'Luz solar cálida que atraviesa el cristal verde y las paredes de agua del splash',
        textEn: 'Warm sunlight refracting through the emerald glass bottle and translucent water splash crown',
      },
      {
        category: 'entorno',
        label: 'Splash + Hojas Flotantes',
        textEs: 'Corona simétrica de agua verde cristalina, ondas concéntricas y hojas de menta y té verde en el aire',
        textEn: 'Symmetrical emerald water splash crown, concentric ripples, and floating mint and tea leaves',
      },
      {
        category: 'camara',
        label: 'Congelado Líquido',
        textEs: 'Obturación rápida 1/8000s, lente macro 100mm f/2.8, reflejo especular en el agua',
        textEn: '1/8000s high-speed liquid freeze, 100mm macro lens f/2.8, crisp water reflection',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Splash Esmeralda en Cámara Lenta (Hook)',
        purpose: 'Transmitir frescura instantánea con el movimiento líquido y música refrescante.',
        cameraMotion: 'Static Macro con movimiento fluido del agua en 120fps',
        musicAndSfx: 'Música acústica refrescante + sonido cristalino de salpicadura de agua',
        promptEs:
          'En cámara superlenta, la corona de agua verde esmeralda alrededor de la base del gotero Clorofila & Matcha ondula y libera pequeñas gotas cristalinas en el aire mientras las hojas de menta flotan suavemente. El frasco y su etiqueta permanecen completamente firmes. Audio: colocar música de fondo acústica fresca y luminosa acompañada del sonido cristalino de agua pura en cámara lenta.',
        promptEn:
          'In super slow motion, the emerald water crown around the base of the Chlorophyll & Matcha dropper ripples and releases crystal droplets into the air while mint leaves float gently. The bottle and label remain completely steady. Audio: bright, refreshing acoustic background music with crisp slow-motion crystal water splash sound effects.',
        onScreenText: '¿Te sientes hinchado y sin energía por las mañanas? 💧🌿',
        voiceoverEs: 'Transforma tus mañanas con el poder purificante de la Clorofila líquida y el Té Matcha.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Detox Profundo + Oxigenación)',
        purpose: 'Explicar cómo limpia el organismo y oxigena las células.',
        cameraMotion: 'Dolly In suave hacia el gotero iluminado por el sol',
        musicAndSfx: 'Melodía matutina suave + ondas de agua relajantes',
        promptEs:
          'Acercamiento lento hacia el frasco verde esmeralda mientras rayos de sol dorados atraviesan el cristal líquido y las ondas de agua se expanden suavemente en la base. Audio: música de fondo instrumental fresca de bienestar con sonido suave de agua.',
        promptEn:
          'Slow dolly-in toward the emerald glass bottle as golden sunbeams refract through the liquid glass and water ripples expand gently at the base. Audio: fresh wellness instrumental background music with gentle water ripple sounds.',
        onScreenText: '🌱 1. Detox Hepático y Digestivo · ✨ 2. Oxigena tu Piel',
        voiceoverEs: 'Limpia tu organismo de toxinas, desinflama tu digestión y oxigena tus células para una piel radiante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Aliento Fresco + Energía Limpia)',
        purpose: 'Destacar el toque de menta orgánica y la energía antioxidante del Matcha.',
        cameraMotion: 'Orbit ligero rodeando las hojas de menta y té verde',
        musicAndSfx: 'Guitarra acústica alegre + brisa fresca en hojas de menta',
        promptEs:
          'Las hojas frescas de menta y brotes de té verde giran suavemente en cámara lenta alrededor del gotero esmeralda con destellos de rocío bajo el sol matutino. Audio: música de fondo alegre y revitalizante con brisa suave.',
        promptEn:
          'Fresh mint leaves and green tea shoots drift gently in slow motion around the emerald dropper with sparkling dew in the morning sun. Audio: uplifting and revitalizing background music with a soft breeze.',
        onScreenText: '🍃 3. Frescura Interna con Menta · ⚡ 4. Energía Antioxidante',
        voiceoverEs: 'Su toque de menta natural refresca tu aliento desde adentro mientras el Matcha te llena de energía limpia.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Modo de Uso (20 Gotas en Agua)',
        purpose: 'Explicar lo fácil que es tomarlo cada mañana.',
        cameraMotion: 'Plano heroico luminoso',
        musicAndSfx: 'Cierre musical fresco y luminoso',
        promptEs:
          'El gotero Clorofila & Matcha brilla en el centro del agua esmeralda con reflejos solares cálidos y atmósfera de bienestar puro. Audio: acorde final luminoso de música acústica de bienestar.',
        promptEn:
          'The Chlorophyll & Matcha dropper gleams at the center of the emerald water with warm solar reflections and pure wellness atmosphere. Audio: bright resolving chord of acoustic wellness background music.',
        onScreenText: 'Solo 20 gotas en tu vaso de agua cada mañana · ¡Pídelo hoy!',
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
    badgeText: 'Lujo Botánico · Regeneración de Piel',
    aspectRatio: '1:1 Estudio',
    image: '/images/serum-botanico.jpg',
    headline: 'REGENERA, ILUMINA Y REJUVENECE TU PIEL',
    summary:
      'Gotero ámbar con etiqueta botánica ilustrada a mano posado sobre piedra volcánica y musgo húmedo, rodeado de pétalos de rosa silvestre y frutos de rosa mosqueta al atardecer.',
    backgroundMusicStyle: 'Ambient Spa de Lujo con Arpa, Piano y Brisa de Jardín',
    backgroundMusicPromptEs:
      'Música de fondo: melodía elegante de spa y alta cosmética con piano delicado, notas de arpa suave y sonido sutil de brisa al atardecer.',
    backgroundMusicPromptEn:
      'Background music: luxury skincare spa melody with delicate piano, soft harp notes, and gentle golden-hour garden breeze.',
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
      'Fotografía editorial de cosmética natural: un frasco gotero de vidrio ámbar con bulbo negro mate y etiqueta en papel algodón con ilustración botánica dorada y floral que dice "SÉRUM ROSA MOSQUETA - Boost Radiance · Renew · Hydrate - Organic Rosehip Oil 30ml". Posado sobre una roca húmeda cubierta de musgo verde esmeralda en un jardín silvestre al atardecer (golden hour). Alrededor del frasco hay pétalos de rosa suaves, frutos rojos de rosa mosqueta y finas partículas de luz dorada flotando. Bokeh cremoso de fondo, lente 85mm f/1.4, 8k.',
    geminiPromptEn:
      'Editorial natural skincare photography: an amber glass dropper bottle with matte black bulb and cotton paper label featuring gold foil and floral botanical illustration reading "SÉRUM ROSA MOSQUETA - Boost Radiance · Renew · Hydrate - Organic Rosehip Oil 30ml". Resting on a wet moss-covered stone in a wild garden at golden hour. Surrounded by soft pink rosehip petals, red rosehip berries, and floating golden light particles. Creamy background bokeh, 85mm f/1.4 lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía editorial del frasco gotero ámbar "SÉRUM ROSA MOSQUETA" sobre piedra con musgo húmedo y pétalos de rosa al atardecer, con bokeh dorado cálido de fondo, listo para animar en Google Flow.',
    cleanHeroPromptEn:
      'Editorial photo of the amber dropper bottle "SÉRUM ROSA MOSQUETA" on mossy wet stone with rose petals at golden hour and warm bokeh background, ready to animate in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Gotero Apothecary',
        textEs: 'Frasco gotero ámbar de 30ml con etiqueta de papel texturizado e ilustración botánica de rosa mosqueta',
        textEn: '30ml amber dropper bottle with textured cotton paper label and botanical rosehip illustration',
      },
      {
        category: 'beneficios',
        label: 'Trilogía de Beneficios',
        textEs: 'Leyenda frontal "BOOST RADIANCE · RENEW · HYDRATE" (Ilumina · Regenera · Hidrata)',
        textEn: 'Front claim "BOOST RADIANCE · RENEW · HYDRATE" clearly printed on the botanical label',
      },
      {
        category: 'iluminacion',
        label: 'Hora Dorada (Golden Hour)',
        textEs: 'Luz de atardecer cálida que atraviesa el vidrio ámbar haciéndolo brillar como oro líquido',
        textEn: 'Warm golden hour backlight glowing through the amber glass like liquid gold',
      },
      {
        category: 'entorno',
        label: 'Jardín Silvestre y Musgo',
        textEs: 'Roca volcánica húmeda, musgo verde vivo, pétalos rosados y frutos rojos de rosa mosqueta',
        textEn: 'Wet volcanic rock, vibrant green moss, pink rose petals, and red rosehip fruits',
      },
      {
        category: 'camara',
        label: 'Bokeh Editorial',
        textEs: 'Lente retrato 85mm f/1.4 con círculos de bokeh dorados y florales en el fondo',
        textEn: '85mm f/1.4 portrait lens with golden and floral bokeh circles in the background',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Magia Botánica al Atardecer (Hook)',
        purpose: 'Enamorar visualmente con la estética orgánica, caída de pétalos y música de spa.',
        cameraMotion: 'Dolly In suave con caída de pétalos en slow motion',
        musicAndSfx: 'Piano delicado de spa + arpa suave y brisa floral',
        promptEs:
          'El frasco de Sérum Rosa Mosqueta permanece firme sobre la roca con musgo húmedo mientras suaves pétalos de rosa caen en cámara lenta alrededor y partículas de polen dorado brillan bajo el sol del atardecer. Audio: colocar música de fondo relajante y elegante de spa con piano suave y notas de arpa.',
        promptEn:
          'The Rosehip Serum bottle remains steady on the wet mossy stone while soft pink rose petals fall in slow motion around it and golden pollen particles shimmer in the sunset light. Audio: soothing, luxury spa background music with delicate piano and harp notes.',
        onScreenText: 'El secreto botánico para una piel luminosa y sin manchas 🌸✨',
        voiceoverEs: 'Descubre el poder regenerador del Sérum de Rosa Mosqueta cien por ciento orgánico.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Atenúa Manchas + Hidratación)',
        purpose: 'Explicar su acción reparadora sobre manchas, cicatrices y sequedad.',
        cameraMotion: 'Orbit circular suave de 20 grados alrededor del gotero',
        musicAndSfx: 'Melodía envolvente de cuerdas suaves y destello cálido',
        promptEs:
          'La cámara orbita suavemente alrededor del frasco ámbar mientras la luz dorada del atardecer ilumina el aceite en su interior y las hojas de la ilustración dorada en la etiqueta brillan sutilmente. Audio: música de fondo instrumental de alta cosmética con cuerdas cálidas.',
        promptEn:
          'The camera orbits gently around the amber bottle as golden sunset light illuminates the oil inside and the gold foil botanical illustration on the label gleams subtly. Audio: luxury skincare instrumental background music with warm strings.',
        onScreenText: '✨ 1. Atenúa Manchas y Marcas · 💧 2. Hidratación Profunda',
        voiceoverEs: 'Rico en ácidos grasos esenciales, atenúa manchas y líneas de expresión mientras hidrata profundamente.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Efecto Glow y Regeneración Nocturna)',
        purpose: 'Mostrar la pureza de los frutos de rosa mosqueta prensados en frío.',
        cameraMotion: 'Macro Pan sobre el musgo húmedo y frutos rojos',
        musicAndSfx: 'Piano íntimo + sonido sutil de gota de rocío',
        promptEs:
          'Plano macro de los frutos rojos de rosa mosqueta y pétalos húmedos junto al frasco con destellos cálidos en el agua sobre la roca. Audio: continúa la música de fondo relajante de piano y naturaleza.',
        promptEn:
          'Macro shot of red rosehip berries and dewy petals next to the bottle with warm light reflections on the wet stone. Audio: continuous soothing piano and nature background music.',
        onScreenText: '🌟 3. Luminosidad Natural · 🌙 4. Regeneración Nocturna',
        voiceoverEs: 'Regenera tu piel cada noche y despierta con un rostro suave, firme y luminoso.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Ritual de Aplicación (3 Gotas cada Noche)',
        purpose: 'Cerrar con el modo de uso y llamado a la acción.',
        cameraMotion: 'Estático con bokeh dorado respirando suavemente',
        musicAndSfx: 'Acorde final sereno de arpa y piano',
        promptEs:
          'Plano heroico del Sérum de Rosa Mosqueta bañado por la luz dorada del atardecer con partículas flotantes suaves. Audio: resolución musical suave y elegante de spa.',
        promptEn:
          'Hero shot of the Rosehip Serum bathed in golden sunset light with soft floating particles. Audio: soft, elegant spa musical resolution.',
        onScreenText: 'Solo 3 gotas cada noche · 100% Orgánico · ¡Pídelo hoy!',
        voiceoverEs: 'Solo tres gotas cada noche para enamorarte de tu piel. ¡Pide tu Sérum de Rosa Mosqueta hoy!',
      },
    ],
  },
  {
    id: 'miel-propoleo',
    name: 'Miel & Propóleo Artesanal Orgánico',
    brand: 'Colmena Real Artesanal',
    category: 'Apicultura y Defensas Naturales',
    categoryId: 'apicultura',
    badgeText: 'Textura Líquida · Miel Cayendo en Vivo',
    aspectRatio: '1:1 Estudio',
    image: '/images/miel-propoleo.jpg',
    headline: 'PROTEGE TU GARGANTA Y SUBE TUS DEFENSAS',
    summary:
      'Tarro de cristal con miel ámbar brillante, tapa de madera con cordel de yute, panal de cera real, trozos de propóleo puro y cuchara mielera dejando caer un hilo dorado continuo.',
    backgroundMusicStyle: 'Guitarra Acústica Cálida Artesanal + Fluido Suave de Miel',
    backgroundMusicPromptEs:
      'Música de fondo: melodía acústica cálida y acogedora con guitarra punteada suave, violín ligero de campo y sonido relajante de miel espesa fluyendo.',
    backgroundMusicPromptEn:
      'Background music: warm, cozy artisanal acoustic melody with gentle fingerpicked guitar, light folk strings, and soothing thick honey pour ambiance.',
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
      'Fotografía gastronómica y de producto natural: un tarro de vidrio transparente lleno de miel dorada brillante con tapa de madera, precinto de seguridad y lazo rústico de hilo de yute con etiqueta crema y letras doradas en relieve: "MIEL & PROPÓLEO - ARTESANAL | ORGÁNICO - 350g". A la derecha, una cuchara mielera de madera de la que cae un hilo continuo y espeso de miel dorada traslúcida formando una espiral sobre la mesa de madera rústica. A la izquierda, trozos de panal de abejas fresco, hojas de eucalipto, polen granulado y fragmentos oscuros de propóleo puro. Luz matutina cálida de cocina rústica, 85mm, 8k.',
    geminiPromptEn:
      'Artisanal food and natural product photography: a clear glass jar filled with glowing golden honey, wooden lid, paper seal, and rustic twine bow with cream label and gold foil lettering: "MIEL & PROPÓLEO - ARTESANAL | ORGÁNICO - 350g". On the right, a wooden honey dipper dripping a thick continuous ribbon of translucent golden honey coiling onto the rustic wooden table. On the left, fresh honeycomb chunks, eucalyptus leaves, bee pollen granules, and raw dark propolis pieces. Warm morning rustic kitchen light, 85mm, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial del tarro de vidrio "MIEL & PROPÓLEO ARTESANAL ORGÁNICO" sobre mesa de madera con panal de abejas, eucalipto y cuchara mielera bajo luz cálida matutina, lista para animar la caída de la miel en Google Flow.',
    cleanHeroPromptEn:
      'Commercial photo of the glass jar "MIEL & PROPÓLEO ARTESANAL ORGÁNICO" on wooden table with honeycomb, eucalyptus, and honey dipper in warm morning light, ready to animate the honey pour in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Tarro Artesanal',
        textEs: 'Tarro de vidrio con miel ámbar traslúcida, tapa de madera, lazo de yute y etiqueta con estampado en oro',
        textEn: 'Clear glass jar with translucent amber honey, wooden lid, twine bow, and gold-stamped cream label',
      },
      {
        category: 'beneficios',
        label: 'Sello Orgánico',
        textEs: 'Inscripción "MIEL & PROPÓLEO · ARTESANAL | ORGÁNICO · MIEL DE ABEJAS CON EXTRACTO NATURAL"',
        textEn: 'Gold foil inscription "MIEL & PROPÓLEO · ARTESANAL | ORGÁNICO" with botanical bee illustrations',
      },
      {
        category: 'iluminacion',
        label: 'Translucidez Ámbar',
        textEs: 'Contraluz cálido que atraviesa el tarro de miel y el hilo líquido haciéndolos brillar como ámbar vivo',
        textEn: 'Warm backlight passing through the honey jar and liquid ribbon making them glow like living amber',
      },
      {
        category: 'entorno',
        label: 'Colmena y Acción Líquida',
        textEs: 'Cuchara mielera vertiendo miel en vivo, panal de cera hexagonal, propóleo en roca, polen y eucalipto',
        textEn: 'Honey dipper pouring thick honey, hexagonal honeycomb, raw propolis chunks, bee pollen, and eucalyptus',
      },
      {
        category: 'camara',
        label: 'Macro Gastronómico',
        textEs: 'Lente 85mm f/2.0 con nitidez absoluta en la viscosidad de la miel y fondo de cocina cálido desenfocado',
        textEn: '85mm f/2.0 lens with tack-sharp focus on the honey viscosity and warm blurred background',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Hilo de Miel Dorada en Vivo (Hook)',
        purpose: 'Hipnotizar al espectador con la caída lenta y viscosa de la miel dorada y música acústica cálida.',
        cameraMotion: 'Static Macro con fluido de miel cayendo en cámara lenta',
        musicAndSfx: 'Guitarra acústica cálida artesanal + textura sonora suave de miel',
        promptEs:
          'En cámara lenta, el hilo espeso y brillante de miel dorada fluye continuamente desde la cuchara de madera formando pliegues suaves en la base. El tarro de Miel & Propóleo permanece completamente firme y nítido mientras pequeñas partículas doradas brillan en el aire. Audio: colocar música de fondo acústica cálida con guitarra suave y ambiente matutino acogedor.',
        promptEn:
          'In slow motion, the thick glossy ribbon of golden honey flows continuously from the wooden dipper forming soft coils at the base. The Honey & Propolis jar remains completely steady and sharp while golden particles shimmer in the air. Audio: warm, cozy fingerpicked acoustic guitar background music with gentle morning ambiance.',
        onScreenText: '¿Garganta irritada o cambios de clima? 🍯🛡️',
        voiceoverEs: 'Protege tu garganta y las defensas de toda tu familia con nuestra Miel y Propóleo artesanal.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Alivio de Garganta + Escudo Antibacteriano)',
        purpose: 'Explicar la acción calmante de la miel cruda y el poder antibacteriano del propóleo.',
        cameraMotion: 'Dolly In suave hacia la etiqueta dorada y el panal',
        musicAndSfx: 'Melodía acústica familiar con cuerdas suaves',
        promptEs:
          'Acercamiento lento hacia el tarro de Miel & Propóleo mostrando la pureza del panal de cera fresca y los fragmentos de propóleo con luz matutina cálida reflejándose en las letras doradas. Audio: música de fondo instrumental acústica cálida y reconfortante.',
        promptEn:
          'Slow push-in toward the Honey & Propolis jar showcasing the fresh honeycomb and raw propolis chunks with warm morning light reflecting off the gold foil lettering. Audio: comforting warm acoustic instrumental background music.',
        onScreenText: '🍯 1. Alivia Garganta y Tos · 🛡️ 2. Antibacteriano Natural',
        voiceoverEs: 'El propóleo puro actúa como un escudo antibacteriano natural mientras la miel cruda suaviza tu garganta al instante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Defensas Altas + Energía de Colmena)',
        purpose: 'Destacar el polen, las hojas de eucalipto y la cosecha 100% pura sin azúcar añadida.',
        cameraMotion: 'Pan horizontal suave sobre los ingredientes de la colmena',
        musicAndSfx: 'Guitarra y arpa ligera que transmiten pureza natural',
        promptEs:
          'Paneo suave a ras de la mesa de madera recorriendo las hojas de eucalipto, los gránulos de polen dorado, el panal hexagonal y el hilo de miel brillante. Audio: música de fondo orgánica y alegre con guitarra acústica y notas suaves de arpa.',
        promptEn:
          'Smooth tabletop pan across the eucalyptus leaves, golden bee pollen granules, hexagonal honeycomb, and glowing honey ribbon. Audio: cheerful organic background music with acoustic guitar and light harp notes.',
        onScreenText: '🌿 3. Sube tus Defensas · ☀️ 4. 100% Pura y Orgánica',
        voiceoverEs: 'Cien por ciento pura, cruda y orgánica, llena de enzimas y antioxidantes que fortalecen tu sistema inmune.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre (1 Cucharadita cada Mañana)',
        purpose: 'Invitar a incorporarla en la rutina diaria y cerrar el pedido.',
        cameraMotion: 'Plano heroico cálido con caída continua de miel',
        musicAndSfx: 'Acorde final cálido de guitarra acústica',
        promptEs:
          'Plano final luminoso del tarro de Miel & Propóleo Artesanal con el hilo dorado de miel brillando a contraluz. Audio: cierre musical cálido y familiar con guitarra acústica.',
        promptEn:
          'Luminous final hero shot of the Artisanal Honey & Propolis jar with the golden honey ribbon glowing in backlight. Audio: warm, family-friendly acoustic guitar musical finale.',
        onScreenText: 'Tarro de 350g · 1 cucharadita cada mañana · ¡Pídelo hoy!',
        voiceoverEs: 'Una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!',
      },
    ],
  },
];

export const SCENE_TEMPLATES_LIBRARY: ScenePromptTemplate[] = [
  {
    id: 'gancho-explosion-polvo',
    categoryId: 'gancho',
    categoryLabel: 'Escena de Gancho (0–4s)',
    title: 'Explosión de Polvo Botánico en 120fps',
    idealFor: 'Cúrcuma, Jengibre, Matcha, Cacao, Maca, Superfoods en cápsulas',
    cameraMovement: 'Slow Push-In (Dolly In lento)',
    musicSuggestion: 'Cinemático con percusión orgánica + whoosh en cámara lenta',
    duration: '4 segundos',
    benefitHookExample: '🔥 ¿Dolor articular o inflamación? Activa tu bienestar desde el primer día.',
    promptEs:
      'El frasco del producto permanece perfectamente firme y nítido en el centro sobre piedra pizarra negra. En cámara superlenta (120fps super slow motion), una nube de fino polvo botánico dorado detrás del envase se expande suavemente en el aire iluminada a contraluz por un foco cálido ámbar. Audio: colocar música de fondo cinematográfica e inspiradora con percusión orgánica suave y efecto envolvente en cámara lenta.',
    promptEn:
      'The product bottle remains perfectly still and sharp in the center on black slate stone. In 120fps super slow motion, a cloud of fine golden botanical powder behind the bottle expands softly in mid-air backlit by warm amber studio lighting. Audio: warm uplifting cinematic background music with soft organic percussion and slow-motion powder expansion SFX.',
  },
  {
    id: 'gancho-splash-esmeralda',
    categoryId: 'gancho',
    categoryLabel: 'Escena de Gancho (0–4s)',
    title: 'Corona de Agua Cristalina y Hojas Flotantes',
    idealFor: 'Goteros Detox, Clorofila, Extractos Herbales, Hidratación',
    cameraMovement: 'Static Macro (Cámara fija + agua en slow-motion)',
    musicSuggestion: 'Guitarra acústica fresca + salpicadura de agua cristalina',
    duration: '4 segundos',
    benefitHookExample: '💧 Purifica tu digestión y oxigena tu cuerpo cada mañana.',
    promptEs:
      'El frasco gotero permanece completamente inmóvil y enfocado en el centro mientras una corona simétrica de agua cristalina en su base ondula en cámara superlenta, liberando microgotas brillantes y hojas de menta fresca flotando bajo rayos de sol. Audio: colocar música de fondo acústica refrescante con sonido cristalino de salpicadura de agua pura.',
    promptEn:
      'The dropper bottle remains completely still and sharp in the center while a symmetrical crystal water crown at its base ripples in super slow motion, releasing sparkling micro-droplets and fresh mint leaves floating under sunbeams. Audio: refreshing acoustic background music with crisp crystal water splash sound effects.',
  },
  {
    id: 'gancho-amanecer-bosque',
    categoryId: 'gancho',
    categoryLabel: 'Escena de Gancho (0–4s)',
    title: 'Rayos de Sol Matutinos y Rocío Resbalando',
    idealFor: 'Colágeno, Magnesio, Multivitamínicos, Adaptógenos',
    cameraMovement: 'Dolly In suave hacia la etiqueta',
    musicSuggestion: 'Piano suave de bienestar + brisa matutina del bosque',
    duration: '4 segundos',
    benefitHookExample: '🌿 4 beneficios esenciales en una sola fórmula 100% natural.',
    promptEs:
      'El frasco de vidrio ámbar permanece firme sobre madera húmeda en un bosque soleado. Una gota de rocío cristalina se desliza lentamente por el vidrio mientras los rayos de sol matutinos (god rays) atraviesan las hojas de helecho y el polen dorado flota en el aire. Audio: colocar música de fondo instrumental relajante de piano suave y cuerdas cálidas con brisa de bosque.',
    promptEn:
      'The amber glass bottle stays steady on wet wood in a sunlit forest. A crystal dew drop slides slowly down the glass while morning sunbeams filter through fern leaves and golden pollen floats in the air. Audio: soothing soft piano and warm strings background music with gentle forest breeze.',
  },
  {
    id: 'beneficios-medallones-oro',
    categoryId: 'beneficios',
    categoryLabel: 'Escena de Beneficios (4–8s)',
    title: 'Destello de Luz sobre los 4 Medallones Dorados',
    idealFor: 'Explicar los 4 beneficios principales con iconos dorados',
    cameraMovement: 'Orbit suave de 15° (Izquierda a Derecha)',
    musicSuggestion: 'Instrumental inspirador + destello cristalino (chime) por beneficio',
    duration: '4 segundos',
    benefitHookExample: '✨ 1. Piel Firme · 🦴 2. Articulaciones Sanas · 💪 3. Músculos · ⚡ 4. Energía',
    promptEs:
      'Movimiento orbital suave de 15 grados alrededor del frasco y sus 4 medallones circulares dorados flotantes. Un barrido de luz cálida recorre el relieve metálico de los medallones haciéndolos brillar con elegancia mientras partículas doradas ascienden en el fondo. Audio: colocar música de fondo inspiradora de bienestar con un sutil destello sonoro cristalino al brillar cada medallón.',
    promptEn:
      'Gentle 15-degree orbital camera movement around the bottle and its 4 floating circular gold medallions. A warm light sweep travels across the metallic relief of the medallions making them gleam elegantly while golden particles rise in the background. Audio: inspiring wellness background music with a subtle crystal chime as each medallion shines.',
  },
  {
    id: 'beneficios-gota-pipeta',
    categoryId: 'beneficios',
    categoryLabel: 'Escena de Beneficios (4–8s)',
    title: 'Gota de Oro Líquido Cayendo de la Pipeta',
    idealFor: 'Sérums Faciales, Aceites Esenciales, Extractos Sublinguales',
    cameraMovement: 'Macro Close-Up (Enfoque selectivo f/1.4)',
    musicSuggestion: 'Ambient Spa con piano delicado y notas de arpa',
    duration: '4 segundos',
    benefitHookExample: '🌸 Regenera, atenúa manchas e hidrata profundamente mientras duermes.',
    promptEs:
      'Plano macro extremo junto al frasco abierto: de la punta de la pipeta de cristal se desprende en cámara superlenta una gota dorada traslúcida y brillante, iluminada por el sol del atardecer con un fondo bokeh cremoso de flores y musgo. Audio: colocar música de fondo elegante de spa con piano delicado y notas de arpa suave.',
    promptEn:
      'Extreme macro close-up next to the bottle: from the tip of the glass pipette a translucent glowing golden drop detaches in super slow motion, backlit by golden hour sunlight with a creamy floral and moss bokeh background. Audio: luxury spa background music with delicate piano and soft harp notes.',
  },
  {
    id: 'beneficios-absorcion-celular',
    categoryId: 'beneficios',
    categoryLabel: 'Escena de Beneficios (8–12s)',
    title: 'Burbujas de Luz Dorada (Rápida Absorción y Pureza)',
    idealFor: 'Probióticos, Omega 3, Vitaminas, Citrato de Magnesio',
    cameraMovement: 'Pan vertical ascendente lento',
    musicSuggestion: 'Melodía electrónica orgánica suave (Ambient Wellness)',
    duration: '4 segundos',
    benefitHookExample: '🛡️ Absorción 3x más rápida para subir tus defensas y proteger tus células.',
    promptEs:
      'El envase permanece nítido en el centro mientras cientos de microburbujas de luz dorada y esmeralda ascienden suavemente a su alrededor en cámara lenta, transmitiendo biodisponibilidad, pureza celular y alivio inmediato. Audio: colocar música de fondo ambiental moderna y cálida con armónicos suaves.',
    promptEn:
      'The bottle remains sharp in the center while hundreds of golden and emerald light micro-bubbles ascend gently around it in slow motion, conveying bioavailability, cellular purity, and rapid relief. Audio: warm modern ambient wellness background music with soft harmonics.',
  },
  {
    id: 'ingredientes-miel-cayendo',
    categoryId: 'ingredientes',
    categoryLabel: 'Escena de Ingredientes (8–12s)',
    title: 'Hilo Continuo de Miel y Propóleo en Espiral',
    idealFor: 'Mieles, Jarabes Naturales, Propóleo, Polen, Jalea Real',
    cameraMovement: 'Static Macro con fluido viscoso en vivo',
    musicSuggestion: 'Guitarra acústica cálida artesanal + ambiente matutino',
    duration: '4 segundos',
    benefitHookExample: '🍯 Escudo antibacteriano natural que suaviza tu garganta al instante.',
    promptEs:
      'Al lado del tarro artesanal firme, una cuchara mielera de madera deja caer un hilo espeso y continuo de miel dorada traslúcida en cámara lenta, formando pliegues brillantes a contraluz junto a trozos de panal fresco y hojas de eucalipto. Audio: colocar música de fondo acústica cálida con guitarra suave y ambiente de mañana soleada.',
    promptEn:
      'Beside the steady artisanal jar, a wooden honey dipper pours a thick continuous ribbon of translucent golden honey in slow motion, forming glowing coils in backlight next to fresh honeycomb chunks and eucalyptus leaves. Audio: warm fingerpicked acoustic guitar background music with sunny morning ambiance.',
  },
  {
    id: 'ingredientes-mesa-botanica',
    categoryId: 'ingredientes',
    categoryLabel: 'Escena de Ingredientes (8–12s)',
    title: 'Paneo Macro sobre Raíces, Cápsulas y Hojas Frescas',
    idealFor: 'Demostrar que el suplemento está hecho con ingredientes 100% reales',
    cameraMovement: 'Tabletop Pan (Paneo rasante horizontal)',
    musicSuggestion: 'Cuerdas acústicas cálidas + percusión orgánica sutil',
    duration: '4 segundos',
    benefitHookExample: '🌱 Ingredientes 100% puros, orgánicos y sin químicos añadidos.',
    promptEs:
      'Paneo rasante cinematográfico sobre una mesa de madera oscura y piedra húmeda que recorre los ingredientes naturales frescos cubiertos de gotas de rocío hasta detenerse en el frasco principal iluminado con luz cálida. Audio: colocar música de fondo instrumental orgánica con guitarra y violonchelo suave.',
    promptEn:
      'Cinematic low-angle tabletop pan across dark wood and wet stone, gliding past fresh natural ingredients covered in dew drops before settling on the hero bottle lit by warm studio light. Audio: organic instrumental background music with gentle guitar and cello.',
  },
  {
    id: 'cierre-ficha-dosis',
    categoryId: 'cierre',
    categoryLabel: 'Escena de Cierre y Dosis (12–16s)',
    title: 'Plano Heroico Final con Destello en Etiqueta y Dosis',
    idealFor: 'Cerrar el video comercial invitando a comprar por WhatsApp o Web',
    cameraMovement: 'Hero Lock (Plano fijo con barrido de luz en letras doradas)',
    musicSuggestion: 'Acorde final resolutivo de piano y cuerdas + chime dorado',
    duration: '4 segundos',
    benefitHookExample: '📦 Solo 2 cápsulas al día · Tratamiento completo · ¡Pídelo hoy!',
    promptEs:
      'Plano maestro final perfectamente centrado del producto natural y sus medallones de beneficios. Un elegante destello de luz recorre las letras doradas de la etiqueta mientras las partículas del fondo se detienen suavemente. Audio: colocar cierre musical armónico e inspirador con piano acústico y cuerdas cálidas.',
    promptEn:
      'Perfectly centered final master hero shot of the natural product and its benefit medallions. An elegant light flare sweeps across the gold foil label lettering while background particles gently settle. Audio: harmonious, inspiring musical resolution with acoustic piano and warm strings.',
  },
];
