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
  promptEs: string;
  promptEn: string;
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
  backgroundMusicStyle: string;
  benefits: BenefitItem[];
  geminiPromptEs: string;
  geminiPromptEn: string;
  cleanHeroPromptEs: string;
  cleanHeroPromptEn: string;
  masterFlowPromptEs: string;
  masterFlowPromptEn: string;
  flowScenes: FlowSceneStep[];
}

export interface ScenePromptTemplate {
  id: string;
  categoryId: 'gancho' | 'beneficios' | 'ingredientes' | 'cierre';
  categoryLabel: string;
  title: string;
  idealFor: string;
  duration: string;
  promptEs: string;
  promptEn: string;
}

export const VOICE_PROFILES_LIBRARY: VoiceProfile[] = [
  {
    id: 'dra-sofia',
    name: 'Voz "Dra. Sofía" (Femenina 32 años · Especialista en Bienestar)',
    role: 'Femenina · 32 años · Cálida, serena y confiable',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz de principio a fin en todas las escenas): mujer de 32 años, acento español latinoamericano neutro, timbre cálido y sereno de especialista en salud natural, ritmo pausado, grabación limpia de estudio',
    descriptionEn:
      'Character voice (keep the exact same voice from start to finish across all scenes): 32-year-old female voice, warm neutral Latin American Spanish accent, calm and trustworthy natural wellness specialist tone, measured pace, clean studio recording',
  },
  {
    id: 'mateo-narrador',
    name: 'Voz "Mateo" (Masculina 35 años · Narrador Comercial Cálido)',
    role: 'Masculina · 35 años · Barítono cercano, seguro e inspirador',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz de principio a fin en todas las escenas): hombre de 35 años, barítono suave con acento español latinoamericano neutro, tono cercano, inspirador y seguro, dicción clara de locutor comercial',
    descriptionEn:
      'Character voice (keep the exact same voice from start to finish across all scenes): 35-year-old male voice, smooth baritone with neutral Latin American Spanish accent, warm, inspiring, and confident commercial narrator tone, clear studio diction',
  },
  {
    id: 'elena-vital',
    name: 'Voz "Elena" (Femenina 27 años · Guía de Vida Saludable y Detox)',
    role: 'Femenina · 27 años · Fresca, alegre y energética',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz de principio a fin en todas las escenas): mujer joven de 27 años, acento español neutro brillante, tono fresco, vital y empático que transmite energía matutina y bienestar',
    descriptionEn:
      'Character voice (keep the exact same voice from start to finish across all scenes): 27-year-old young female voice, bright neutral Spanish accent, fresh, vibrant, and empathetic tone conveying morning energy and wellness',
  },
  {
    id: 'arturo-artesano',
    name: 'Voz "Don Arturo" (Masculina 48 años · Maestro Botánico y Tradición)',
    role: 'Masculina · 48 años · Profunda, pausada y tradicional',
    descriptionEs:
      'Voz del personaje (mantener exactamente la misma voz de principio a fin en todas las escenas): hombre de 48 años, voz profunda, cálida y pausada en español neutro, transmite tradición artesanal, pureza de campo y máxima confianza',
    descriptionEn:
      'Character voice (keep the exact same voice from start to finish across all scenes): 48-year-old mature male voice, deep, warm, and unhurried neutral Spanish accent, conveying artisanal tradition, pure nature, and deep trust',
  },
];

export const PRODUCTS_DATA: NaturalProductExample[] = [
  {
    id: 'colageno-magnesio',
    name: 'Colágeno + Magnesio Botánico',
    brand: 'Botanical Wellness Lab',
    category: 'Articulaciones, Piel y Energía',
    categoryId: 'suplementos',
    badgeText: 'Prompt Todo-en-Uno · Logos + Voz + Música',
    aspectRatio: '1:1 Estudio',
    image: '/images/colageno-magnesio.jpg',
    headline: 'ARTICULACIONES FUERTES, PIEL FIRME Y ENERGÍA',
    summary:
      'Cada prompt ya tiene todo integrado en un solo bloque: fotografía botánica con 4 logos dorados (sin letras pequeñas que se deformen), animación solo de logos y naturaleza, música de fondo de piano y la misma voz de la Dra. Sofía narrando los beneficios.',
    voiceProfileName: 'Dra. Sofía (Mujer 32 años · Especialista en Bienestar)',
    backgroundMusicStyle: 'Piano Botánico Inspirador + Brisa de Bosque',
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
      'Fotografía comercial de producto natural todo-en-uno: en el centro, un frasco de vidrio ámbar oscuro con gotas de rocío fresco y tapa dorada metálica sobre una mesa de madera húmeda en un bosque soleado al amanecer. Etiqueta verde bosque con un logo botánico dorado en relieve sin letras pequeñas. Flotando simétricamente alrededor del frasco hay 4 medallones circulares de oro cepillado que contienen ÚNICAMENTE iconos/logos simbólicos grabados en 3D (1: icono de rostro y cabello radiante, 2: icono de articulación sana, 3: icono de fuerza muscular, 4: icono de sol/energía), prohibido incluir letras pequeñas o textos largos para evitar deformaciones. Rodeado de helechos verdes, hojas de monstera y eucalipto con rayos de sol matutinos, bokeh suave y partículas de polen dorado flotando. Fotografía hiperrealista, lente macro 85mm f/1.8, iluminación comercial cálida, 8k.',
    geminiPromptEn:
      'All-in-one commercial natural product photography: centered dark amber glass bottle with fresh water droplets and brushed gold cap resting on a wet wooden table in a sunlit morning forest. Dark forest green embossed label with a clean gold botanical logo emblem and no small text. Floating symmetrically around the bottle are 4 circular brushed gold medallions featuring ONLY clean 3D engraved symbolic icons/logos (1: radiant skin/hair icon, 2: healthy joint icon, 3: muscle strength icon, 4: sun/energy icon), strictly no small letters or text so nothing warps. Surrounded by green ferns, monstera, and eucalyptus leaves with morning sunbeams, creamy bokeh, and golden pollen particles. Hyper-realistic photography, 85mm macro lens f/1.8, warm studio lighting, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial de producto natural en un bosque al amanecer: frasco de vidrio ámbar con gotas de rocío fresco, tapa dorada y etiqueta verde oscuro con logo botánico dorado limpio sobre madera rústica húmeda, rodeado de helechos y hojas de eucalipto. Sin ningún texto flotante ni letras externas, únicamente el logo simbólico en relieve. Rayos de sol dorados atravesando el follaje y partículas de polen en el aire, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Sunrise forest commercial product photography: dewy amber glass bottle with gold cap and dark green label featuring a clean gold botanical logo emblem on wet rustic wood, surrounded by ferns and eucalyptus leaves. Strictly no floating text or external letters, only the embossed symbolic logo. Golden sunbeams filtering through foliage and pollen particles in the air, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs:
      'Video comercial cinematográfico de producto natural: el frasco de vidrio ámbar de Colágeno + Magnesio permanece 100% firme, estático y nítido en el centro sobre la madera húmeda del bosque. REGLA ESTRICTA: NO animar letras ni generar textos móviles en pantalla; animar únicamente el barrido de luz solar sobre el logo botánico y sobre los 4 medallones de iconos simbólicos dorados, mientras las gotas de rocío resbalan por el vidrio, las hojas de helecho se mecen suavemente y las partículas de polen dorado flotan en cámara superlenta (120fps) con un acercamiento Dolly In muy lento. MÚSICA DE FONDO: colocar melodía instrumental inspiradora de piano suave y cuerdas cálidas a volumen moderado bajo la voz, acompañada de brisa matutina en el bosque y sutiles destellos cristalinos al iluminarse cada logo. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía? El Colágeno Hidrolizado nutre tu piel y protege tus rodillas, mientras el Magnesio puro fortalece tus músculos sin calambres. Toma dos cápsulas cada mañana y transforma tu bienestar."',
    masterFlowPromptEn:
      'Cinematic commercial natural product video: the amber glass Collagen + Magnesium bottle remains 100% still, static, and sharp in the center on the wet forest wood. STRICT RULE: Do NOT animate letters or generate moving on-screen text; animate only the warm sunlight sweep across the botanical logo and the 4 gold symbolic icon medallions, while dew drops slide down the glass, fern leaves sway gently, and golden pollen particles float in 120fps super slow motion with a very slow Dolly In camera push. BACKGROUND MUSIC: uplifting soft piano and warm strings instrumental ducked softly under the voice, layered with gentle morning forest breeze and subtle crystal chimes as each logo gleams. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía? El Colágeno Hidrolizado nutre tu piel y protege tus rodillas, mientras el Magnesio puro fortalece tus músculos sin calambres. Toma dos cápsulas cada mañana y transforma tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1 (Todo-en-Uno): Gancho Visual + Música + Voz Fija',
        promptEs:
          'Cámara en acercamiento Dolly In lento hacia el frasco de Colágeno + Magnesio en el bosque soleado. El frasco y sus logos dorados permanecen 100% estáticos y congelados (PROHIBIDO animar letras o generar textos móviles; animar únicamente el brillo sobre el logo botánico, los rayos de sol matutinos, las hojas de helecho meciéndose con la brisa y las partículas de polen dorado en cámara lenta). Música de fondo: colocar melodía instrumental inspiradora de piano suave y cuerdas cálidas a volumen moderado bajo la voz con sonido suave de bosque matutino. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?"',
        promptEn:
          'Slow Dolly In camera push toward the Collagen + Magnesium bottle in the sunlit forest. The bottle and its gold logos remain 100% static and frozen (FORBIDDEN to animate letters or generate moving text; animate only the light gleam on the botanical logo, morning sunbeams, fern fronds swaying in the breeze, and golden pollen particles in slow motion). Background music: uplifting soft piano and warm strings instrumental ducked softly under the voice with gentle morning forest ambiance. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?"',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2 (Todo-en-Uno): Logos de Piel y Articulaciones + Misma Voz + Música',
        promptEs:
          'Paneo suave de luz manteniendo el frasco 100% firme en el centro (PROHIBIDO animar o deformar letras; animar únicamente un destello cálido de luz solar que recorre el relieve metálico de los 2 medallones superiores con los logos simbólicos de piel radiante y articulaciones sanas mientras una gota de rocío resbala en cámara lenta por el vidrio ámbar). Música de fondo: continúa la melodía instrumental de piano suave y cuerdas cálidas bajo la voz, añadiendo un sutil destello sonoro cristalino al brillar los logos. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones."',
        promptEn:
          'Smooth lighting sweep keeping the bottle 100% steady in the center (FORBIDDEN to animate or warp letters; animate only a warm sunbeam sweeping across the metallic relief of the top 2 gold medallions with the radiant skin and healthy joint symbolic logos while a dew drop slides in slow motion down the amber glass). Background music: continuous soft piano and warm strings instrumental under the voice, adding a subtle crystal chime as the logos gleam. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3 (Todo-en-Uno): Logos de Músculos y Energía + Misma Voz + Música',
        promptEs:
          'Movimiento orbital muy sutil de 10 grados manteniendo el envase y su etiqueta completamente estáticos (PROHIBIDO animar letras; animar únicamente el reflejo dorado sobre los 2 medallones inferiores con los logos simbólicos de fuerza muscular y energía, junto con las hojas de eucalipto húmedas y destellos dorados ascendiendo en cámara lenta). Música de fondo: continúa la música instrumental de piano suave y cuerdas cálidas envolventes a volumen moderado bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía."',
        promptEn:
          'Very subtle 10-degree orbital motion keeping the bottle and label completely static (FORBIDDEN to animate letters; animate only the golden reflection across the bottom 2 medallions with the muscle strength and energy symbolic logos, along with wet eucalyptus leaves and rising golden sparkles in slow motion). Background music: continuous soft piano and warm enveloping strings instrumental ducked softly under the voice. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4 (Todo-en-Uno): Cierre Heroico y Dosis + Misma Voz + Música',
        promptEs:
          'Plano maestro fijo y luminoso del frasco de Colágeno + Magnesio con sus 4 medallones de logos simbólicos dorados reluciendo en armonía bajo la luz del bosque (PROHIBIDO animar letras o textos; solo brillan los logos metálicos y flotan suavemente las partículas de polen dorado). Música de fondo: acorde final armónico, cálido y resolutivo de piano acústico y cuerdas bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Solo toma dos cápsulas cada mañana para transformar tu bienestar. ¡Pide el tuyo hoy!"',
        promptEn:
          'Luminous static master hero shot of the Collagen + Magnesium bottle with its 4 gold symbolic logo medallions gleaming harmoniously in the forest light (FORBIDDEN to animate letters or text; only the metallic logos shine and golden pollen particles float gently). Background music: warm, harmonious resolving final chord of acoustic piano and strings under the voice. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Solo toma dos cápsulas cada mañana para transformar tu bienestar. ¡Pide el tuyo hoy!"',
      },
    ],
  },
  {
    id: 'curcuma-ashwagandha',
    name: 'Cúrcuma + Jengibre Natural Vitae',
    brand: 'Natural Vitae',
    category: 'Antiinflamatorio y Articular',
    categoryId: 'suplementos',
    badgeText: 'Prompt Todo-en-Uno · Explosión 120fps + Voz + Música',
    aspectRatio: '1:1 Estudio',
    image: '/images/curcuma-ashwagandha.jpg',
    headline: 'DESINFLAMA TUS ARTICULACIONES CON PODER NATURAL',
    summary:
      'Cada prompt integra en un solo texto la explosión de polvo de cúrcuma en 120fps, el bloqueo total de letras (animando solo el brillo en los logos y el polvo), la música cinematográfica de fondo y la misma voz de Mateo.',
    voiceProfileName: 'Mateo (Hombre 35 años · Narrador Comercial Cálido)',
    backgroundMusicStyle: 'Cinemático Orgánico con Percusión Suave y Violonchelo',
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
      'Fotografía publicitaria de alta velocidad todo-en-uno: en el centro, un frasco de vidrio ámbar con tapa negra y etiqueta color mostaza dorado que muestra únicamente un emblema circular metálico y 4 logos simbólicos limpios en relieve (llama antiinflamatoria, articulación en movimiento, escudo protector y hoja digestiva) sin letras pequeñas que se deformen, sobre una bandeja de piedra pizarra negra húmeda. En la base hay rodajas frescas de jengibre, raíces de cúrcuma naranja intenso y una cuchara de madera con polvo de cúrcuma. Detrás del frasco, una espectacular explosión en el aire de fino polvo dorado de cúrcuma iluminada a contraluz por luz cálida ámbar sobre fondo oscuro dramático. Lente macro 90mm, 8k.',
    geminiPromptEn:
      'All-in-one high-speed commercial product photography: centered amber glass supplement bottle with black cap and mustard-gold label featuring ONLY a metallic circular emblem and 4 clean embossed symbolic logos (anti-inflammatory flame, moving joint, protective shield, digestive leaf) with no small text that could warp, on a wet black slate stone tray. Surrounded at the base by fresh sliced ginger, vibrant orange turmeric roots, and a wooden spoon with turmeric powder. Behind the bottle, a dramatic mid-air explosion of fine golden turmeric powder backlit by warm amber studio lighting against a dark moody background. 90mm macro lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial en estudio oscuro de un frasco de vidrio ámbar con etiqueta mostaza y logo circular dorado en relieve (sin letras pequeñas ni textos externos) sobre piedra pizarra negra húmeda, rodeado de raíces de cúrcuma fresca y rodajas de jengibre con iluminación cálida ámbar a contraluz, lente macro 90mm, 8k.',
    cleanHeroPromptEn:
      'Dark studio commercial photography of an amber glass bottle with mustard-gold label and embossed circular gold logo (no small letters or external text) on wet black slate surrounded by fresh turmeric roots and ginger slices with warm amber backlighting, 90mm macro lens, 8k.',
    masterFlowPromptEs:
      'Video comercial de alta velocidad en cámara superlenta (120fps): el frasco ámbar de Cúrcuma + Jengibre permanece 100% inmóvil y estático en el centro sobre la pizarra negra. REGLA ESTRICTA: NO animar letras ni generar textos móviles en pantalla; animar únicamente la nube de polvo dorado de cúrcuma expandiéndose en el aire detrás del envase, las gotas de frescura sobre las raíces de jengibre y el barrido de luz ámbar sobre los logos simbólicos dorados. MÚSICA DE FONDO: colocar música instrumental cinematográfica cálida con percusión orgánica suave, violonchelo inspirador y efecto envolvente slow-motion bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      ', diciendo: "Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti. Su extracto concentrado desinflama tus articulaciones, devuelve tu movilidad sin rigidez y protege tus células y digestión. Toma dos cápsulas al día y vuelve a moverte con libertad."',
    masterFlowPromptEn:
      'High-speed 120fps super slow-motion commercial video: the amber Turmeric + Ginger bottle remains 100% still and static in the center on the black slate. STRICT RULE: Do NOT animate letters or generate moving text on screen; animate only the golden turmeric powder cloud expanding in mid-air behind the bottle, freshness droplets on the ginger roots, and the warm amber light sweep across the gold symbolic logos. BACKGROUND MUSIC: warm cinematic instrumental with soft organic percussion, inspiring cello, and slow-motion whoosh SFX ducked under the voice. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      ', speaking in Spanish: "Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti. Su extracto concentrado desinflama tus articulaciones, devuelve tu movilidad sin rigidez y protege tus células y digestión. Toma dos cápsulas al día y vuelve a moverte con libertad."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1 (Todo-en-Uno): Explosión de Cúrcuma 120fps + Música + Voz Fija',
        promptEs:
          'Acercamiento lento (Slow Push-In) hacia el frasco de Cúrcuma + Jengibre en el centro. El frasco y su logo circular permanecen 100% estáticos y congelados (PROHIBIDO animar letras o generar textos móviles; en cámara superlenta de 120fps se anima únicamente la nube de polvo dorado de cúrcuma expandiéndose detrás del frasco y el brillo cálido sobre el logo dorado). Música de fondo: colocar instrumental cinematográfico cálido con percusión orgánica suave, violonchelo inspirador y efecto whoosh en slow-motion bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti."',
        promptEn:
          'Slow Push-In camera motion toward the centered Turmeric + Ginger bottle. The bottle and its circular logo remain 100% static and frozen (FORBIDDEN to animate letters or generate moving text; in 120fps super slow motion, animate only the golden turmeric powder cloud expanding behind the bottle and the warm light gleam on the gold logo). Background music: warm cinematic instrumental with soft organic percussion, inspiring cello, and slow-motion whoosh SFX under the voice. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti."',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2 (Todo-en-Uno): Logos de Alivio y Movilidad + Misma Voz + Música',
        promptEs:
          'Órbita muy suave de 10 grados manteniendo el frasco completamente firme (PROHIBIDO animar o deformar letras; animar únicamente un haz de luz ámbar que recorre los logos simbólicos de alivio articular y movilidad mientras finas partículas de polvo dorado flotan lentamente alrededor). Música de fondo: continúa el instrumental cinematográfico cálido con percusión orgánica y un destello sonoro suave bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Su alta concentración de curcuminoides desinflama tus articulaciones y devuelve la movilidad sin rigidez."',
        promptEn:
          'Very gentle 10-degree orbit keeping the bottle completely steady (FORBIDDEN to animate or warp letters; animate only an amber light beam sweeping across the joint relief and mobility symbolic logos while fine golden powder particles float slowly around). Background music: continuous warm cinematic instrumental with organic percussion and a soft chime under the voice. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Su alta concentración de curcuminoides desinflama tus articulaciones y devuelve la movilidad sin rigidez."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3 (Todo-en-Uno): Raíces Frescas y Logos de Defensa + Misma Voz + Música',
        promptEs:
          'Plano cercano de las raíces frescas de cúrcuma, las rodajas húmedas de jengibre y la cuchara de madera junto al frasco 100% estático (PROHIBIDO animar letras; solo brillan los logos simbólicos de escudo antioxidante y hoja digestiva mientras el vapor aromático y chispas doradas ascienden lentamente). Música de fondo: continúa la música cinematográfica cálida de violonchelo y guitarra acústica suave bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Combinado con jengibre orgánico puro, actúa como un potente antioxidante celular y mejora tu digestión."',
        promptEn:
          'Close-up shot of the fresh turmeric roots, wet ginger slices, and wooden spoon next to the 100% static bottle (FORBIDDEN to animate letters; only the antioxidant shield and digestive leaf symbolic logos gleam while aromatic mist and golden sparks rise slowly). Background music: continuous warm cinematic cello and soft acoustic guitar under the voice. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Combinado con jengibre orgánico puro, actúa como un potente antioxidante celular y mejora tu digestión."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4 (Todo-en-Uno): Cierre Heroico y Dosis + Misma Voz + Música',
        promptEs:
          'Plano heroico final del frasco de Cúrcuma + Jengibre firme sobre la piedra pizarra con sus logos dorados reluciendo bajo un contraluz cálido mientras las últimas partículas doradas se posan suavemente (PROHIBIDO animar letras o textos). Música de fondo: acorde final resolutivo, cálido e inspirador bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Toma dos cápsulas al día y vuelve a moverte con total libertad. ¡Pide el tuyo ahora!"',
        promptEn:
          'Final hero shot of the Turmeric + Ginger bottle steady on the slate stone with its gold logos gleaming under warm backlighting while the last golden particles gently settle (FORBIDDEN to animate letters or text). Background music: warm, inspiring resolving final chord under the voice. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Toma dos cápsulas al día y vuelve a moverte con total libertad. ¡Pide el tuyo ahora!"',
      },
    ],
  },
  {
    id: 'clorofila-matcha',
    name: 'Clorofila Líquida + Menta Detox',
    brand: 'Pure Green Drops',
    category: 'Desintoxicación y Digestión',
    categoryId: 'extractos',
    badgeText: 'Prompt Todo-en-Uno · Splash Cristalino + Voz + Música',
    aspectRatio: '1:1 Estudio',
    image: '/images/clorofila-matcha.jpg',
    headline: 'DESINTOXICA TU CUERPO Y REFRESCA TU DIGESTIÓN',
    summary:
      'Cada prompt reúne en un solo bloque el splash de agua esmeralda en cámara lenta, la regla de no animar letras (solo los logos simbólicos y el agua), la música acústica fresca de fondo y la misma voz de Elena.',
    voiceProfileName: 'Elena (Mujer 27 años · Guía de Vida Saludable y Detox)',
    backgroundMusicStyle: 'Guitarra Acústica Refrescante + Salpicadura de Agua Pura',
    benefits: [
      {
        title: 'Detox Hepático y Renal',
        shortDesc: 'Ayuda a eliminar toxinas acumuladas y purifica la sangre de forma natural.',
        iconName: 'droplets',
      },
      {
        title: 'Desinflama el Abdomen',
        shortDesc: 'Combate la pesadez estomacal, los gases y mejora el tránsito intestinal.',
        iconName: 'leaf',
      },
      {
        title: 'Frescura y Aliento Limpio',
        shortDesc: 'Desodorizante interno natural con extracto puro de hojas de menta.',
        iconName: 'sparkles',
      },
      {
        title: 'Oxigenación y Vitalidad',
        shortDesc: 'Aumenta la oxigenación celular para mantenerte activo sin cafeína.',
        iconName: 'zap',
      },
    ],
    geminiPromptEs:
      'Fotografía comercial de alta velocidad todo-en-uno: en el centro, un frasco gotero de vidrio verde esmeralda con pipeta de cristal y bulbo blanco sobre una piedra de río húmeda. Etiqueta blanca minimalista únicamente con un logo de hoja verde y 4 iconos simbólicos circulares en relieve (gota purificadora, hoja digestiva, destello de frescura y símbolo de oxígeno) sin letras pequeñas que se deformen. Una corona simétrica de agua cristalina y clorofila salpica alrededor del frasco congelada en el aire junto a hojas frescas de menta, té matcha e iluminación solar brillante. Lente macro 85mm, 8k.',
    geminiPromptEn:
      'All-in-one high-speed commercial product photography: centered emerald green glass dropper bottle with glass pipette and white bulb on a wet river stone. Minimalist white label featuring ONLY a green leaf logo and 4 embossed circular symbolic icons (purifying drop, digestive leaf, freshness sparkle, oxygen symbol) with no small text that could warp. A symmetrical crown splash of crystal water and chlorophyll erupts around the bottle frozen in mid-air with fresh mint leaves, matcha tea leaves, and bright morning sunlight. 85mm macro lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial luminosa del frasco gotero verde esmeralda con logo simbólico de hoja verde (sin letras pequeñas ni textos externos) sobre piedra de río húmeda con splash de agua cristalina y hojas de menta fresca a contraluz, lente macro 85mm, 8k.',
    cleanHeroPromptEn:
      'Bright commercial photography of the emerald green dropper bottle with green leaf symbolic logo (no small letters or external text) on wet river stone with crystal water splash and fresh mint leaves backlit by morning sun, 85mm macro lens, 8k.',
    masterFlowPromptEs:
      'Video comercial refrescante en cámara superlenta (120fps): el frasco gotero de Clorofila Líquida + Menta permanece 100% fijo y estático en el centro sobre la piedra húmeda. REGLA ESTRICTA: NO animar letras ni generar textos móviles en pantalla; animar únicamente la corona de agua cristalina ondulando en cámara lenta, las hojas de menta flotando con microgotas de rocío, una gota verde esmeralda cayendo de la pipeta y el brillo solar sobre los logos simbólicos. MÚSICA DE FONDO: colocar melodía alegre y fresca de guitarra acústica luminosa y marimba suave bajo la voz, acompañada del sonido cristalino de agua pura. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEs +
      ', diciendo: "¿Sientes pesadez estomacal o falta de energía por las mañanas? La Clorofila Líquida con Menta desintoxica tu cuerpo, desinflama tu abdomen y oxigena tus células aportando frescura total. Solo diluye veinte gotas en un vaso de agua cada mañana y siente la ligereza."',
    masterFlowPromptEn:
      'Refreshing 120fps super slow-motion commercial video: the Liquid Chlorophyll + Mint dropper bottle remains 100% fixed and static in the center on the wet stone. STRICT RULE: Do NOT animate letters or generate moving on-screen text; animate only the crystal water crown rippling in slow motion, mint leaves floating with micro-droplets, an emerald green drop falling from the pipette, and sunlight gleaming on the symbolic logos. BACKGROUND MUSIC: bright, refreshing acoustic guitar and soft marimba melody ducked under the voice, layered with crisp crystal water splash SFX. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEn +
      ', speaking in Spanish: "¿Sientes pesadez estomacal o falta de energía por las mañanas? La Clorofila Líquida con Menta desintoxica tu cuerpo, desinflama tu abdomen y oxigena tus células aportando frescura total. Solo diluye veinte gotas en un vaso de agua cada mañana y siente la ligereza."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1 (Todo-en-Uno): Splash de Agua en 120fps + Música + Voz Fija',
        promptEs:
          'Plano macro fijo con el frasco gotero de Clorofila y su etiqueta 100% inmóviles en el centro (PROHIBIDO animar letras o generar textos móviles; en cámara superlenta de 120fps se anima únicamente la corona de agua cristalina salpicando alrededor de la base, las hojas de menta fresca flotando y el brillo sobre el logo de hoja verde). Música de fondo: colocar melodía alegre y fresca de guitarra acústica luminosa con sonido cristalino de salpicadura de agua pura bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "¿Sientes pesadez estomacal o falta de energía al empezar el día?"',
        promptEn:
          'Static macro shot with the Chlorophyll dropper bottle and its label 100% still in the center (FORBIDDEN to animate letters or generate moving text; in 120fps super slow motion, animate only the crystal water crown splashing around the base, fresh mint leaves floating, and the light gleam on the green leaf logo). Background music: bright, refreshing acoustic guitar melody with crisp crystal water splash SFX under the voice. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "¿Sientes pesadez estomacal o falta de energía al empezar el día?"',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2 (Todo-en-Uno): Gota Esmeralda y Logos Detox + Misma Voz + Música',
        promptEs:
          'Acercamiento suave hacia la pipeta de cristal sobre el frasco 100% estático (PROHIBIDO animar o deformar letras; animar únicamente una gota verde esmeralda traslúcida desprendiéndose de la pipeta en cámara lenta y un destello de luz sobre los logos simbólicos de gota purificadora y hoja digestiva). Música de fondo: continúa la guitarra acústica fresca y marimba suave con el sonido de una gota cristalina bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Nuestra Clorofila Líquida desintoxica tu organismo profundamente y desinflama tu abdomen de forma natural."',
        promptEn:
          'Smooth push-in toward the glass pipette above the 100% static bottle (FORBIDDEN to animate or warp letters; animate only a translucent emerald green drop detaching from the pipette in slow motion and a light gleam across the purifying drop and digestive leaf symbolic logos). Background music: continuous fresh acoustic guitar and soft marimba with a crystal water drop SFX under the voice. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Nuestra Clorofila Líquida desintoxica tu organismo profundamente y desinflama tu abdomen de forma natural."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3 (Todo-en-Uno): Hojas de Menta y Logos de Oxígeno + Misma Voz + Música',
        promptEs:
          'Órbita ligera de 10 grados manteniendo el gotero firme y sin animar letras (animar únicamente las microgotas de rocío resbalando por las hojas frescas de menta y matcha junto al brillo en los logos simbólicos de frescura y oxigenación celular). Música de fondo: continúa la melodía acústica refrescante y luminosa bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Enriquecida con menta orgánica, oxigena tus células, combate el mal aliento y te llena de vitalidad."',
        promptEn:
          'Slight 10-degree orbit keeping the dropper bottle steady without animating letters (animate only the micro-droplets sliding down the fresh mint and matcha leaves along with the gleam on the freshness and cellular oxygenation symbolic logos). Background music: continuous bright, refreshing acoustic melody under the voice. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Enriquecida con menta orgánica, oxigena tus células, combate el mal aliento y te llena de vitalidad."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4 (Todo-en-Uno): Cierre Refrescante y Dosis + Misma Voz + Música',
        promptEs:
          'Plano heroico final luminoso del frasco gotero de Clorofila completamente fijo con sus logos simbólicos reluciendo bajo el sol matutino y suaves ondas de agua en la base (PROHIBIDO animar letras o textos). Música de fondo: acorde final alegre, limpio y refrescante de guitarra acústica bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Solo diluye veinte gotas en tu vaso de agua cada mañana. ¡Pide tu Clorofila Detox hoy!"',
        promptEn:
          'Luminous final hero shot of the completely static Chlorophyll dropper bottle with its symbolic logos gleaming in morning sunlight and gentle water ripples at the base (FORBIDDEN to animate letters or text). Background music: bright, clean resolving acoustic guitar chord under the voice. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Solo diluye veinte gotas en tu vaso de agua cada mañana. ¡Pide tu Clorofila Detox hoy!"',
      },
    ],
  },
  {
    id: 'serum-botanico',
    name: 'Sérum Botánico Rosa Mosqueta + Oro',
    brand: 'Lumina Botanics',
    category: 'Regeneración Facial y Antiedad',
    categoryId: 'cosmetica',
    badgeText: 'Prompt Todo-en-Uno · Cosmética Spa + Voz + Música',
    aspectRatio: '1:1 Estudio',
    image: '/images/serum-botanico.jpg',
    headline: 'REJUVENECE, HIDRATA YATENÚA MANCHAS EN TU PIEL',
    summary:
      'Cada prompt incluye en un solo bloque la iluminación de hora dorada, los pétalos de rosa cayendo en slow-motion, la regla de no animar letras (solo logos florales en oro), la música de spa con piano y arpa y la misma voz de la Dra. Sofía.',
    voiceProfileName: 'Dra. Sofía (Mujer 32 años · Especialista en Cuidado Botánico)',
    backgroundMusicStyle: 'Ambient Spa de Lujo con Piano Delicado y Arpa',
    benefits: [
      {
        title: 'Atenúa Manchas y Cicatrices',
        shortDesc: 'Unifica el tono del rostro y regenera la piel dañada por el sol o el acné.',
        iconName: 'sun',
      },
      {
        title: 'Suaviza Líneas de Expresión',
        shortDesc: 'Estimula el colágeno natural reduciendo arrugas finas en ojos y frente.',
        iconName: 'sparkles',
      },
      {
        title: 'Hidratación Profunda 24h',
        shortDesc: 'Textura sedosa de rápida absorción que no deja sensación grasa.',
        iconName: 'droplets',
      },
      {
        title: 'Efecto Glow Natural',
        shortDesc: 'Devuelve la luminosidad inmediata gracias a sus antioxidantes botánicos.',
        iconName: 'heart',
      },
    ],
    geminiPromptEs:
      'Fotografía editorial de alta cosmética natural todo-en-uno: en el centro, un frasco gotero de vidrio esmerilado ámbar traslúcido que deja ver un sérum dorado luminoso con cuello metálico en oro rosa, posado sobre piedra travertino beige rodeada de musgo verde suave, pétalos de rosa mosqueta fresca y pequeñas flores de manzanilla. El frasco lleva únicamente un logo floral minimalista estampado en oro y 4 medallones circulares con iconos simbólicos grabados (sol antimanchas, destello antiedad, gota hidratante y corazón luminoso) sin letras pequeñas que se deformen. Luz cálida de atardecer, lente 85mm f/1.4, 8k.',
    geminiPromptEn:
      'All-in-one luxury natural skincare editorial photography: centered frosted translucent amber glass dropper bottle glowing with golden botanical serum and rose-gold metallic collar, resting on beige travertine stone surrounded by soft green moss, fresh rosehip petals, and chamomile flowers. The bottle features ONLY a minimalist gold-foil floral logo and 4 circular medallions with engraved symbolic icons (anti-spot sun, anti-aging sparkle, hydration drop, glowing heart) with no small letters that could warp. Warm golden hour sunlight, 85mm f/1.4 lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía editorial de cosmética orgánica: frasco gotero de vidrio esmerilado con sérum dorado y logo floral en oro (sin letras pequeñas ni textos externos) sobre piedra travertino rodeado de musgo verde, pétalos de rosa mosqueta y flores de manzanilla bajo luz de atardecer, lente 85mm f/1.4, 8k.',
    cleanHeroPromptEn:
      'Organic skincare editorial photography: frosted glass dropper bottle with golden serum and gold floral logo (no small letters or external text) on travertine stone surrounded by green moss, rosehip petals, and chamomile flowers in golden hour light, 85mm f/1.4 lens, 8k.',
    masterFlowPromptEs:
      'Video comercial de alta cosmética botánica en cámara lenta: el frasco esmerilado de Sérum Rosa Mosqueta + Oro permanece 100% fijo y estático sobre la piedra travertino. REGLA ESTRICTA: NO animar letras ni generar textos móviles en pantalla; animar únicamente los pétalos de rosa cayendo suavemente en slow-motion, una gota de aceite dorado brillando en la punta de la pipeta y el reflejo de luz cálida sobre el logo floral y los 4 medallones simbólicos en oro rosa. MÚSICA DE FONDO: colocar música instrumental relajante de spa de lujo con piano delicado y notas suaves de arpa a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "Devuélvele a tu rostro la luminosidad y juventud que merece. Nuestro Sérum de Rosa Mosqueta atenúa manchas, suaviza líneas de expresión e hidrata tu piel profundamente durante veinticuatro horas. Aplica tres gotas cada noche y despierta con una piel radiante."',
    masterFlowPromptEn:
      'Luxury botanical skincare slow-motion commercial video: the frosted Rosehip + Gold Serum bottle remains 100% fixed and static on the travertine stone. STRICT RULE: Do NOT animate letters or generate moving on-screen text; animate only the rose petals falling gently in slow motion, a golden oil drop glowing at the pipette tip, and the warm light reflection across the floral logo and the 4 rose-gold symbolic medallions. BACKGROUND MUSIC: soothing luxury spa instrumental with delicate piano and soft harp notes ducked under the voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "Devuélvele a tu rostro la luminosidad y juventud que merece. Nuestro Sérum de Rosa Mosqueta atenúa manchas, suaviza líneas de expresión e hidrata tu piel profundamente durante veinticuatro horas. Aplica tres gotas cada noche y despierta con una piel radiante."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1 (Todo-en-Uno): Pétalos en Slow-Motion + Música Spa + Voz Fija',
        promptEs:
          'Acercamiento Dolly In muy suave hacia el frasco de Sérum Rosa Mosqueta que permanece 100% estático sobre la piedra travertino (PROHIBIDO animar letras o generar textos móviles; animar únicamente dos pétalos de rosa mosqueta cayendo en cámara lenta, las partículas doradas de sol y el brillo sobre el logo floral en oro). Música de fondo: colocar música instrumental elegante de spa con piano delicado y notas suaves de arpa bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Devuélvele a tu rostro la luminosidad, firmeza y juventud que merece con Rosa Mosqueta pura."',
        promptEn:
          'Very gentle Dolly In push toward the Rosehip Serum bottle remaining 100% static on the travertine stone (FORBIDDEN to animate letters or generate moving text; animate only two rosehip petals falling in slow motion, golden dust motes, and the light gleam on the gold floral logo). Background music: luxury spa instrumental with delicate piano and soft harp notes under the voice. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Devuélvele a tu rostro la luminosidad, firmeza y juventud que merece con Rosa Mosqueta pura."',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2 (Todo-en-Uno): Gota de Oro y Logos Antiedad + Misma Voz + Música',
        promptEs:
          'Plano macro cercano de la pipeta de cristal sobre el frasco 100% estático (PROHIBIDO animar o deformar letras; animar únicamente una gota de aceite dorado traslúcido brillando en la punta del gotero y un barrido de luz cálida sobre los logos simbólicos de sol antimanchas y destello antiedad). Música de fondo: continúa el piano delicado de spa y arpa suave con un destello cristalino bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Su aceite prensado en frío atenúa manchas, regenera la piel y suaviza las líneas de expresión."',
        promptEn:
          'Macro close-up of the glass pipette above the 100% static bottle (FORBIDDEN to animate or warp letters; animate only a translucent golden oil drop glowing at the dropper tip and a warm light sweep across the anti-spot sun and anti-aging sparkle symbolic logos). Background music: continuous delicate spa piano and soft harp with a subtle crystal chime under the voice. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Su aceite prensado en frío atenúa manchas, regenera la piel y suaviza las líneas de expresión."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3 (Todo-en-Uno): Flores Botánicas y Logos de Hidratación + Misma Voz + Música',
        promptEs:
          'Órbita suave de 10 grados manteniendo el frasco esmerilado inmóvil y sin animar letras (animar únicamente la brisa suave sobre las flores de manzanilla y el musgo húmedo junto al destello dorado sobre los logos simbólicos de hidratación 24h y efecto glow). Música de fondo: continúa la melodía envolvente de piano y cuerdas cálidas de spa bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Con vitamina E y extractos botánicos que brindan hidratación profunda por veinticuatro horas sin sensación grasa."',
        promptEn:
          'Gentle 10-degree orbit keeping the frosted bottle still without animating letters (animate only the soft breeze across the chamomile flowers and wet moss along with the golden gleam on the 24h hydration and glow symbolic logos). Background music: continuous enveloping spa piano and warm strings under the voice. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Con vitamina E y extractos botánicos que brindan hidratación profunda por veinticuatro horas sin sensación grasa."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4 (Todo-en-Uno): Cierre Nocturno y Aplicación + Misma Voz + Música',
        promptEs:
          'Plano heroico final del frasco de Sérum Rosa Mosqueta completamente estático con su logo floral y sus 4 medallones simbólicos brillando bajo un rayo cálido de atardecer (PROHIBIDO animar letras o textos). Música de fondo: acorde final sereno, elegante y luminoso de piano y arpa bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Aplica tres gotas cada noche antes de dormir y despierta con una piel radiante. ¡Pide el tuyo hoy!"',
        promptEn:
          'Final hero shot of the completely static Rosehip Serum bottle with its floral logo and 4 symbolic medallions gleaming under a warm sunset beam (FORBIDDEN to animate letters or text). Background music: serene, elegant resolving chord of piano and harp under the voice. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Aplica tres gotas cada noche antes de dormir y despierta con una piel radiante. ¡Pide el tuyo hoy!"',
      },
    ],
  },
  {
    id: 'miel-propoleo',
    name: 'Miel Cruda + Propóleo & Eucalipto',
    brand: 'Colmena Real Orgánica',
    category: 'Defensas, Garganta y Energía',
    categoryId: 'apicultura',
    badgeText: 'Prompt Todo-en-Uno · Miel en Vivo + Voz + Música',
    aspectRatio: '1:1 Estudio',
    image: '/images/miel-propoleo.jpg',
    headline: 'SUBE TUS DEFENSAS Y ALIVIA TU GARGANTA AL INSTANTE',
    summary:
      'Cada prompt integra en un solo texto el hilo de miel dorada cayendo en cámara lenta, el bloqueo de letras (animando solo el logo de la abeja dorada y la miel), la música acústica artesanal y la misma voz de Don Arturo.',
    voiceProfileName: 'Don Arturo (Hombre 48 años · Maestro Apicultor y Tradición)',
    backgroundMusicStyle: 'Guitarra Acústica Cálida Artesanal y Notas de Arpa',
    benefits: [
      {
        title: 'Sube las Defensas',
        shortDesc: 'Rico en bioflavonoides de propóleo que refuerzan el sistema inmunológico.',
        iconName: 'shield',
      },
      {
        title: 'Alivia Garganta y Tos',
        shortDesc: 'Suaviza la irritación de garganta y despeja las vías respiratorias con eucalipto.',
        iconName: 'heart',
      },
      {
        title: 'Antibacteriano Natural',
        shortDesc: 'Protege a toda la familia frente a cambios de clima y resfriados.',
        iconName: 'award',
      },
      {
        title: 'Energía 100% Pura',
        shortDesc: 'Miel cruda sin azúcar añadida, llena de enzimas, polen y antioxidantes.',
        iconName: 'sun',
      },
    ],
    geminiPromptEs:
      'Fotografía comercial artesanal todo-en-uno: en el centro, un tarro hexagonal de vidrio transparente lleno de miel dorada brillante con un trozo de panal real adentro y tapa cubierta con tela de yute atada con cordel rústico, sobre una mesa de madera de roble al sol de la mañana. Etiqueta de papel kraft crema únicamente con el logo dorado en relieve de una abeja real y 4 medallones con iconos simbólicos (escudo de defensas, hoja de eucalipto respiratoria, panal antibacteriano y sol de energía) sin letras pequeñas que se deformen. Al lado, una cuchara mielera de madera deja caer un hilo espeso de miel dorada a contraluz junto a hojas de eucalipto y gránulos de polen. Lente 85mm f/1.8, 8k.',
    geminiPromptEn:
      'All-in-one artisanal commercial photography: centered hexagonal clear glass jar filled with glowing golden honey containing a real honeycomb chunk inside, topped with a burlap fabric cover tied with rustic twine on an oak wood table in morning sunlight. Cream kraft paper label featuring ONLY an embossed gold royal bee logo and 4 medallions with symbolic icons (immunity shield, respiratory eucalyptus leaf, antibacterial honeycomb, energy sun) with no small text that could warp. Beside the jar, a wooden honey dipper pours a thick ribbon of golden honey backlit by warm sun next to eucalyptus leaves and bee pollen granules. 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial artesanal del tarro hexagonal de vidrio con miel dorada, panal real adentro, tapa de yute y etiqueta kraft con logo dorado de abeja (sin letras pequeñas ni textos externos) sobre mesa de roble al sol matutino con miel cayendo de una cuchara de madera y hojas de eucalipto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Artisanal commercial photography of the hexagonal glass jar with golden honey, real honeycomb inside, burlap lid, and kraft label with gold bee logo (no small letters or external text) on a morning sunlit oak table with honey dripping from a wooden dipper and eucalyptus leaves, 85mm f/1.8 lens, 8k.',
    masterFlowPromptEs:
      'Video comercial artesanal en cámara lenta: el tarro hexagonal de Miel Cruda + Propóleo y su etiqueta con el logo de la abeja dorada permanecen 100% firmes y estáticos sobre la mesa de madera. REGLA ESTRICTA: NO animar letras ni generar textos móviles en pantalla; animar únicamente el hilo continuo y espeso de miel dorada cayendo en cámara lenta desde la cuchara de madera formando espirales luminosas a contraluz, el polen dorado flotando y el brillo solar sobre el logo de la abeja y los 4 iconos simbólicos. MÚSICA DE FONDO: colocar música acústica cálida con guitarra española suave y notas ligeras de arpa a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[3].descriptionEs +
      ', diciendo: "Protege tus defensas y alivia tu garganta con el tesoro más puro de la colmena. Nuestra Miel Cruda con Propóleo y Eucalipto actúa como un escudo antibacteriano natural que suaviza tu garganta al instante y fortalece tu sistema inmune. Toma una cucharadita cada mañana para cuidar a toda tu familia."',
    masterFlowPromptEn:
      'Artisanal slow-motion commercial video: the hexagonal Raw Honey + Propolis jar and its label with the gold bee logo remain 100% steady and static on the wooden table. STRICT RULE: Do NOT animate letters or generate moving on-screen text; animate only the thick continuous ribbon of golden honey pouring in slow motion from the wooden dipper forming glowing coils in backlight, golden pollen floating, and sunlight gleaming on the bee logo and the 4 symbolic icons. BACKGROUND MUSIC: warm artisanal acoustic guitar and light harp notes ducked softly under the voice. ' +
      VOICE_PROFILES_LIBRARY[3].descriptionEn +
      ', speaking in Spanish: "Protege tus defensas y alivia tu garganta con el tesoro más puro de la colmena. Nuestra Miel Cruda con Propóleo y Eucalipto actúa como un escudo antibacteriano natural que suaviza tu garganta al instante y fortalece tu sistema inmune. Toma una cucharadita cada mañana para cuidar a toda tu familia."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1 (Todo-en-Uno): Miel Cayendo en Cámara Lenta + Música + Voz Fija',
        promptEs:
          'Plano macro fijo con el tarro hexagonal de Miel + Propóleo 100% inmóvil y estático en el centro (PROHIBIDO animar letras o generar textos móviles; animar únicamente el hilo espeso de miel dorada cayendo en cámara lenta desde la cuchara mielera de madera a contraluz y el brillo cálido sobre el logo dorado de la abeja). Música de fondo: colocar música acústica cálida con guitarra española suave y ambiente matutino de campo bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "Protege tus defensas y alivia tu garganta con el tesoro más puro de la colmena."',
        promptEn:
          'Static macro shot with the hexagonal Honey + Propolis jar 100% still and static in the center (FORBIDDEN to animate letters or generate moving text; animate only the thick ribbon of golden honey pouring in slow motion from the wooden dipper in backlight and the warm gleam on the gold bee logo). Background music: warm acoustic guitar with gentle morning countryside ambiance under the voice. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "Protege tus defensas y alivia tu garganta con el tesoro más puro de la colmena."',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2 (Todo-en-Uno): Logos de Defensas y Garganta + Misma Voz + Música',
        promptEs:
          'Acercamiento lento hacia el tarro 100% estático sin animar ni deformar ninguna letra (animar únicamente un rayo de sol matutino haciendo brillar el panal de cera real dentro del frasco y los logos simbólicos de escudo de defensas y hoja de eucalipto). Música de fondo: continúa la guitarra acústica cálida y reconfortante bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "El propóleo concentrado actúa como un escudo antibacteriano natural mientras la miel con eucalipto suaviza tu garganta al instante."',
        promptEn:
          'Slow push-in toward the 100% static jar without animating or warping any letters (animate only a morning sunbeam making the real honeycomb inside the jar and the immunity shield and eucalyptus leaf symbolic logos gleam). Background music: continuous comforting warm acoustic guitar under the voice. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "El propóleo concentrado actúa como un escudo antibacteriano natural mientras la miel con eucalipto suaviza tu garganta al instante."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3 (Todo-en-Uno): Polen, Panal y Logos de Energía + Misma Voz + Música',
        promptEs:
          'Paneo suave sobre las hojas frescas de eucalipto, los gránulos de polen dorado y el trozo de panal junto al tarro completamente fijo (PROHIBIDO animar letras; animar únicamente el brillo sobre los logos simbólicos de pureza y energía solar y partículas de polen dorado en el aire). Música de fondo: continúa la guitarra acústica orgánica con notas suaves de arpa bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "Cien por ciento cruda y orgánica, rica en enzimas, polen y antioxidantes que fortalecen tu sistema inmune."',
        promptEn:
          'Smooth pan across the fresh eucalyptus leaves, golden bee pollen granules, and honeycomb chunk next to the completely static jar (FORBIDDEN to animate letters; animate only the gleam on the purity and solar energy symbolic logos and golden pollen particles in the air). Background music: continuous organic acoustic guitar with soft harp notes under the voice. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "Cien por ciento cruda y orgánica, rica en enzimas, polen y antioxidantes que fortalecen tu sistema inmune."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4 (Todo-en-Uno): Cierre Familiar y Dosis + Misma Voz + Música',
        promptEs:
          'Plano heroico final luminoso del tarro de Miel + Propóleo totalmente estático con el hilo dorado de miel brillando a contraluz y el logo de la abeja reluciendo (PROHIBIDO animar letras o textos). Música de fondo: acorde final cálido, armónico y familiar de guitarra acústica bajo la voz. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEs +
          ', diciendo: "Toma una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!"',
        promptEn:
          'Luminous final hero shot of the completely static Honey + Propolis jar with the golden honey ribbon glowing in backlight and the bee logo gleaming (FORBIDDEN to animate letters or text). Background music: warm, harmonious family-friendly acoustic guitar final chord under the voice. ' +
          VOICE_PROFILES_LIBRARY[3].descriptionEn +
          ', speaking in Spanish: "Toma una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!"',
      },
    ],
  },
];

export const SCENE_TEMPLATES_LIBRARY: ScenePromptTemplate[] = [
  {
    id: 'gancho-explosion-polvo',
    categoryId: 'gancho',
    categoryLabel: 'Escena 1 · Gancho (0–4s)',
    title: 'Explosión Botánica en 120fps (Todo-en-Uno: Logos + Voz + Música)',
    idealFor: 'Cúrcuma, Jengibre, Matcha, Maca, Superfoods en cápsulas',
    duration: '4 segundos',
    promptEs:
      'Acercamiento Slow Push-In hacia el frasco del producto sobre piedra pizarra negra. El envase y sus logos dorados permanecen 100% firmes y estáticos en el centro (PROHIBIDO animar letras o generar textos móviles; en cámara superlenta de 120fps se anima únicamente una nube de fino polvo botánico dorado expandiéndose detrás del frasco y un destello de luz cálida sobre el logo principal). Música de fondo: colocar música instrumental cinematográfica con percusión orgánica suave y efecto slow-motion a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      ', diciendo: "¿Dolor articular o inflamación constante? Activa tu bienestar desde el primer día con poder cien por ciento natural."',
    promptEn:
      'Slow Push-In camera motion toward the product bottle on black slate stone. The bottle and its gold logos remain 100% still and static in the center (FORBIDDEN to animate letters or generate moving text; in 120fps super slow motion, animate only a cloud of fine golden botanical powder expanding behind the bottle and a warm light gleam across the main logo). Background music: uplifting cinematic instrumental with soft organic percussion and slow-motion whoosh SFX ducked under the voice. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      ', speaking in Spanish: "¿Dolor articular o inflamación constante? Activa tu bienestar desde el primer día con poder cien por ciento natural."',
  },
  {
    id: 'gancho-splash-esmeralda',
    categoryId: 'gancho',
    categoryLabel: 'Escena 1 · Gancho (0–4s)',
    title: 'Splash de Agua Cristalina y Menta (Todo-en-Uno: Logos + Voz + Música)',
    idealFor: 'Goteros Detox, Clorofila, Extractos Herbales, Hidratación',
    duration: '4 segundos',
    promptEs:
      'Plano macro fijo con el frasco gotero y su logo 100% inmóviles y estáticos en el centro (PROHIBIDO animar o deformar letras; animar únicamente la corona simétrica de agua cristalina en la base ondulando en cámara superlenta de 120fps, liberando microgotas brillantes y hojas de menta fresca mientras brilla el logo de hoja verde). Música de fondo: colocar guitarra acústica refrescante y luminosa con sonido cristalino de salpicadura de agua pura bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEs +
      ', diciendo: "Purifica tu digestión, desinflama tu abdomen y oxigena tu cuerpo cada mañana."',
    promptEn:
      'Static macro shot with the dropper bottle and its logo 100% still and static in the center (FORBIDDEN to animate or warp letters; animate only the symmetrical crystal water crown at the base rippling in 120fps super slow motion, releasing sparkling micro-droplets and fresh mint leaves while the green leaf logo gleams). Background music: bright, refreshing acoustic guitar with crisp crystal water splash SFX under the voice. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEn +
      ', speaking in Spanish: "Purifica tu digestión, desinflama tu abdomen y oxigena tu cuerpo cada mañana."',
  },
  {
    id: 'gancho-amanecer-bosque',
    categoryId: 'gancho',
    categoryLabel: 'Escena 1 · Gancho (0–4s)',
    title: 'Amanecer en el Bosque y Rocío (Todo-en-Uno: Logos + Voz + Música)',
    idealFor: 'Colágeno, Magnesio, Multivitamínicos, Adaptógenos',
    duration: '4 segundos',
    promptEs:
      'Acercamiento Dolly In suave hacia el frasco de vidrio ámbar sobre madera húmeda en un bosque soleado. El envase y sus logos permanecen 100% firmes y estáticos (PROHIBIDO animar letras; animar únicamente una gota de rocío cristalina deslizándose lentamente por el vidrio, los rayos de sol matutinos entre los helechos y el brillo sobre los logos dorados). Música de fondo: colocar melodía inspiradora de piano suave y cuerdas cálidas con brisa matutina de bosque bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "Cuatro beneficios esenciales para tu piel, articulaciones y energía en una sola fórmula natural."',
    promptEn:
      'Gentle Dolly In push toward the amber glass bottle on wet wood in a sunlit forest. The bottle and its logos stay 100% steady and static (FORBIDDEN to animate letters; animate only a crystal dew drop sliding slowly down the glass, morning sunbeams filtering through ferns, and the gleam on the gold logos). Background music: inspiring soft piano and warm strings with gentle morning forest breeze under the voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "Cuatro beneficios esenciales para tu piel, articulaciones y energía en una sola fórmula natural."',
  },
  {
    id: 'beneficios-medallones-oro',
    categoryId: 'beneficios',
    categoryLabel: 'Escena 2 · Beneficios (4–8s)',
    title: 'Barrido de Luz sobre los 4 Logos Dorados (Todo-en-Uno)',
    idealFor: 'Destacar los beneficios sin deformar letras mientras habla la misma voz',
    duration: '4 segundos',
    promptEs:
      'Órbita muy suave de 10 grados manteniendo el envase 100% firme y estático en el centro (PROHIBIDO animar letras; animar únicamente un barrido de luz cálida solar que recorre el relieve metálico de los 4 medallones circulares con iconos/logos simbólicos dorados haciéndolos brillar mientras partículas de oro ascienden en cámara lenta). Música de fondo: continúa el instrumental inspirador de piano y cuerdas cálidas con un sutil destello cristalino bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "Su fórmula de alta absorción nutre tu piel y cabello desde adentro mientras protege tus articulaciones y músculos."',
    promptEn:
      'Very gentle 10-degree orbit keeping the bottle 100% steady and static in the center (FORBIDDEN to animate letters; animate only a warm sunlight sweep traveling across the metallic relief of the 4 circular gold symbolic icon/logo medallions making them gleam while gold particles rise in slow motion). Background music: continuous inspiring piano and warm strings instrumental with a subtle crystal chime under the voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "Su fórmula de alta absorción nutre tu piel y cabello desde adentro mientras protege tus articulaciones y músculos."',
  },
  {
    id: 'beneficios-gota-pipeta',
    categoryId: 'beneficios',
    categoryLabel: 'Escena 2 · Beneficios (4–8s)',
    title: 'Gota de Oro Líquido en la Pipeta (Todo-en-Uno)',
    idealFor: 'Sérums Faciales, Aceites Esenciales, Extractos en Gotero',
    duration: '4 segundos',
    promptEs:
      'Plano macro extremo junto al frasco 100% estático (PROHIBIDO animar letras; de la punta de la pipeta de cristal se desprende en cámara superlenta una gota dorada traslúcida y brillante iluminada por luz de atardecer mientras reluce el logo floral dorado del envase). Música de fondo: colocar música relajante de spa con piano delicado y notas suaves de arpa bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "Regenera las células de tu rostro, atenúa manchas e hidrata profundamente durante veinticuatro horas."',
    promptEn:
      'Extreme macro close-up next to the 100% static bottle (FORBIDDEN to animate letters; from the tip of the glass pipette a translucent glowing golden drop detaches in super slow motion backlit by sunset light while the gold floral logo on the bottle gleams). Background music: soothing luxury spa piano and soft harp notes under the voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "Regenera las células de tu rostro, atenúa manchas e hidrata profundamente durante veinticuatro horas."',
  },
  {
    id: 'beneficios-absorcion-celular',
    categoryId: 'beneficios',
    categoryLabel: 'Escena 3 · Beneficios (8–12s)',
    title: 'Microburbujas de Luz Dorada y Pureza (Todo-en-Uno)',
    idealFor: 'Probióticos, Omega 3, Vitaminas, Citrato de Magnesio',
    duration: '4 segundos',
    promptEs:
      'Plano fijo con el envase y su logo 100% estáticos y nítidos en el centro (PROHIBIDO animar ninguna letra; alrededor del frasco, cientos de microburbujas de luz dorada y esmeralda ascienden suavemente en cámara lenta iluminando los logos simbólicos de beneficios). Música de fondo: melodía ambiental cálida e inspiradora de bienestar a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "Con biodisponibilidad tres veces más rápida para fortalecer tus defensas y llenarte de energía limpia."',
    promptEn:
      'Static shot with the bottle and its logo 100% still and sharp in the center (FORBIDDEN to animate any letters; around the bottle, hundreds of golden and emerald light micro-bubbles ascend gently in slow motion illuminating the symbolic benefit logos). Background music: warm, inspiring ambient wellness melody ducked under the voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "Con biodisponibilidad tres veces más rápida para fortalecer tus defensas y llenarte de energía limpia."',
  },
  {
    id: 'ingredientes-miel-cayendo',
    categoryId: 'ingredientes',
    categoryLabel: 'Escena 3 · Ingredientes (8–12s)',
    title: 'Hilo Continuo de Miel y Propóleo a Contraluz (Todo-en-Uno)',
    idealFor: 'Mieles, Jarabes Naturales, Propóleo, Polen, Jalea Real',
    duration: '4 segundos',
    promptEs:
      'Plano macro junto al tarro artesanal 100% firme y sin animar letras de la etiqueta (animar únicamente una cuchara mielera de madera dejando caer un hilo espeso y continuo de miel dorada traslúcida en cámara lenta formando pliegues brillantes a contraluz junto al panal fresco y el logo dorado de la abeja). Música de fondo: guitarra acústica cálida artesanal y notas suaves de arpa bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[3].descriptionEs +
      ', diciendo: "Un escudo antibacteriano cien por ciento puro que suaviza tu garganta y sube tus defensas al instante."',
    promptEn:
      'Macro shot beside the 100% steady artisanal jar without animating any label letters (animate only a wooden honey dipper pouring a thick continuous ribbon of translucent golden honey in slow motion forming glowing coils in backlight next to fresh honeycomb and the gold bee logo). Background music: warm artisanal acoustic guitar and soft harp notes under the voice. ' +
      VOICE_PROFILES_LIBRARY[3].descriptionEn +
      ', speaking in Spanish: "Un escudo antibacteriano cien por ciento puro que suaviza tu garganta y sube tus defensas al instante."',
  },
  {
    id: 'ingredientes-mesa-botanica',
    categoryId: 'ingredientes',
    categoryLabel: 'Escena 3 · Ingredientes (8–12s)',
    title: 'Paneo sobre Raíces, Hojas y Frasco Estático (Todo-en-Uno)',
    idealFor: 'Demostrar ingredientes 100% reales junto al suplemento',
    duration: '4 segundos',
    promptEs:
      'Paneo rasante suave sobre mesa de madera oscura y piedra húmeda mostrando raíces frescas, hojas botánicas con gotas de rocío y el frasco 100% estático en el centro (PROHIBIDO animar letras; animar únicamente el vapor aromático, las gotas de agua y el reflejo dorado sobre los logos simbólicos). Música de fondo: instrumental orgánico de guitarra acústica y violonchelo cálido bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      ', diciendo: "Elaborado con extractos botánicos cien por ciento puros, orgánicos y libres de químicos artificiales."',
    promptEn:
      'Smooth tabletop pan across dark wood and wet stone showcasing fresh roots, botanical leaves with dew drops, and the 100% static bottle in the center (FORBIDDEN to animate letters; animate only the aromatic mist, water droplets, and golden reflection across the symbolic logos). Background music: organic acoustic guitar and warm cello instrumental under the voice. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      ', speaking in Spanish: "Elaborado con extractos botánicos cien por ciento puros, orgánicos y libres de químicos artificiales."',
  },
  {
    id: 'cierre-ficha-dosis',
    categoryId: 'cierre',
    categoryLabel: 'Escena 4 · Cierre y Dosis (12–16s)',
    title: 'Plano Heroico Final con Destello en Logos y Dosis (Todo-en-Uno)',
    idealFor: 'Cerrar el video comercial con la dosis diaria dicha por la misma voz',
    duration: '4 segundos',
    promptEs:
      'Plano maestro final perfectamente centrado del producto natural con sus 4 medallones de logos simbólicos dorados (PROHIBIDO animar letras o textos; únicamente un elegante destello de luz cálida recorre los logos metálicos mientras las partículas doradas del fondo se posan suavemente). Música de fondo: acorde final armónico, cálido y resolutivo de piano y cuerdas bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "Solo toma dos cápsulas cada mañana y siente la diferencia. ¡Escríbenos y pide el tuyo hoy!"',
    promptEn:
      'Perfectly centered final master hero shot of the natural product with its 4 gold symbolic logo medallions (FORBIDDEN to animate letters or text; only an elegant warm light flare sweeps across the metallic logos while golden background particles gently settle). Background music: warm, harmonious resolving chord of piano and strings under the voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "Solo toma dos cápsulas cada mañana y siente la diferencia. ¡Escríbenos y pide el tuyo hoy!"',
  },
];
