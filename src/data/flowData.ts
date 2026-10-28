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
  categoryId: 'posters' | 'frascos' | 'macro' | string;
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
    id: 'uro-cranberry-probioticos',
    name: 'URO Probióticos Cranberry (Bolsa Rosa)',
    brand: 'URO Natural Health',
    category: 'Salud Femenina, Tracto Urinario y Digestión',
    categoryId: 'posters',
    badgeText: 'Póster 9:16 · 4 Medallones 3D Grabados',
    aspectRatio: '9:16 Vertical',
    image: '/images/uro-poster-medallones.jpg',
    headline: 'SALUD DIGESTIVA Y URINARIA · BIENESTAR FEMENINO',
    summary:
      'Póster publicitario comercial para e-commerce con la bolsa rosa suave original de URO sobre pedestal zen, acompañada de 4 medallones 3D dorados grabados con iconos botánicos de salud íntima, digestión y orégano.',
    voiceProfileName: 'Elena (Mujer 27 años · Guía de Vida Saludable)',
    backgroundMusicStyle: 'Chill Lo-Fi Acústico con Campanas Suaves y Brisa Zen',
    benefits: [
      {
        title: 'Salud Digestiva y Flora Fuerte',
        shortDesc: 'Cultivos probióticos activos para regular el tránsito intestinal y aliviar inflamación.',
        iconName: 'shield',
      },
      {
        title: 'Protección Urinaria con Arándano',
        shortDesc: 'Extracto concentrado de cranberry que previene la fijación de bacterias indeseadas.',
        iconName: 'droplets',
      },
      {
        title: 'Extracto de Orégano Botánico',
        shortDesc: 'Defensa antimicrobiana natural para el equilibrio del microbioma femenino.',
        iconName: 'leaf',
      },
      {
        title: 'Prebióticos para Nutrir la Flora',
        shortDesc: 'Fibra prebiótica pura que alimenta y multiplica las bacterias benéficas.',
        iconName: 'sparkles',
      },
    ],
    geminiPromptEs:
      'Póster publicitario comercial en formato vertical 9:16 de estudio de alta gama para el producto de salud femenina "URO Cranberry + Orégano Probióticos": en el centro sobre pedestal minimalista de arena zen clara, la bolsa stand-up pouch rosa suave mate auténtica con microgotas de condensación fresca. [FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, mantener intacta la bolsa tipo doypack con su color rosa suave original mate y logotipo URO, sin rediseñar la marca ni alterar los colores del empaque. Flotando simétricamente en 3D alrededor de la bolsa hay 4 medallones circulares de oro cepillado con iconos simbólicos limpios grabados en relieve 3D (1: icono de tracto urinario y gotas limpias, 2: icono de flora digestiva y bienestar intestinal, 3: icono de hoja botánica de orégano, 4: icono de cápsulas probióticas activas), estrictamente sin letras pequeñas que se deformen. Iluminación comercial difusa high-key con suaves destellos dorados en los medallones, lente 85mm f/1.8, 8k.',
    geminiPromptEn:
      'High-end commercial 9:16 vertical studio poster for feminine wellness product "URO Cranberry + Oregano Probiotics": centered on a minimalist light zen sand pedestal is the authentic soft matte pink stand-up pouch with fine fresh condensation droplets. [REFERENCE PHOTO ATTACHED]: Using the attached image product as mandatory visual base, keep the stand-up doypack pouch intact in its original matte soft pink color and authentic URO logo, without redesigning the brand or altering packaging colors. Symmetrically floating in 3D around the pouch are 4 circular brushed gold medallions with clean 3D embossed symbolic icons (1: urinary tract and clean droplets, 2: gut flora and digestive wellness, 3: botanical oregano leaf, 4: active probiotic capsules), strictly no small letters that could warp. High-key diffused studio lighting with subtle golden highlights on medallions, 85mm lens f/1.8, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial limpia de estudio para bolsa URO Probiotics en color rosa suave mate sobre base de arena zen y fondo difuso con iluminación softbox de estudio, microgotas de condensación en primer plano, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Clean studio commercial photography of the soft matte pink URO Probiotics pouch on a light zen sand base with diffused softbox lighting and fine condensation droplets, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs:
      'Video publicitario vertical 9:16 de alta gama: la bolsa rosa de URO permanece 100% estática y nítida en el centro. REGLA ESTRICTA: NO animar letras ni alterar la bolsa; animar únicamente el destello de luz sobre los 4 medallones 3D dorados y las microgotas de agua resbalando suavemente con un sutil acercamiento Dolly In. MÚSICA DE FONDO: instrumental suave acústico lo-fi con campanas tibetanas a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEs +
      ', diciendo: "¿Buscas equilibrio íntimo y digestivo en tu día a día? El extracto concentrado de Arándano Rojo y Orégano protege tu sistema urinario mientras los probióticos equilibran tu microbiota. Dos gomitas al día para sentirte ligera y protegida."',
    masterFlowPromptEn:
      'Vertical 9:16 commercial video: the pink URO pouch remains 100% still and sharp in the center. STRICT RULE: Do NOT animate letters or warp the pouch; animate only the light gleam on the 4 gold 3D medallions and water droplets sliding gently with a slow Dolly In. BACKGROUND MUSIC: gentle lo-fi acoustic instrumental under the voice. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEn +
      ', speaking in Spanish: "¿Buscas equilibrio íntimo y digestivo en tu día a día? El extracto concentrado de Arándano Rojo y Orégano protege tu sistema urinario mientras los probióticos equilibran tu microbiota. Dos gomitas al día para sentirte ligera y protegida."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual + Pedestal Zen',
        promptEs:
          'Acercamiento suave hacia la bolsa rosa de URO sobre arena zen. La bolsa permanece fija y nítida (animar únicamente el brillo de luz sobre el empaque y reflejos dorados). Música acústica suave de fondo. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "¿Buscas equilibrio íntimo y digestivo en tu rutina diaria?"',
        promptEn:
          'Slow Dolly In camera push toward the pink URO pouch on zen sand. Bottle remains static. Gentle acoustic music. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "¿Buscas equilibrio íntimo y digestivo en tu rutina diaria?"',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Medallones 3D de Protección Urinaria y Digestión',
        promptEs:
          'Barrido de luz sobre los 2 medallones superiores de arándano y flora intestinal manteniendo el empaque 100% estático. Música suave con campanas de fondo. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "El arándano rojo y el orégano protegen tu tracto urinario de forma natural."',
        promptEn:
          'Light sweep over top 2 medallions while keeping pouch static. Background music. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "El arándano rojo y el orégano protegen tu tracto urinario de forma natural."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Medallones de Probióticos y Bienestar',
        promptEs:
          'Reflejo dorado sobre los medallones de probióticos y prebióticos con partículas de luz ascendiendo suavemente. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Millones de probióticos activos fortalecen tu flora intestinal para decir adiós a la inflamación."',
        promptEn:
          'Gold reflection on probiotic medallions. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Millones de probióticos activos fortalecen tu flora intestinal para decir adiós a la inflamación."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico y Dosis Diaria',
        promptEs:
          'Plano maestro fijo con los 4 medallones dorados iluminados al unísono. Acorde final suave. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Solo dos gomitas al día para transformar tu bienestar. ¡Pruébalo hoy!"',
        promptEn:
          'Master hero shot with all 4 gold medallions glowing in harmony. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Solo dos gomitas al día para transformar tu bienestar. ¡Pruébalo hoy!"',
      },
    ],
  },
  {
    id: 'glucosamina-condroitina-msm',
    name: 'Glucosamina + Condroitina + Cúrcuma & MSM 1500mg',
    brand: 'Mobility BioHealth',
    category: 'Movilidad, Cartílago y Cero Dolor Articular',
    categoryId: 'posters',
    badgeText: 'Póster E-Commerce · 4 Medallones Metálicos 3D',
    aspectRatio: '1:1 Estudio',
    image: '/images/glucosamina-poster.jpg',
    headline: 'FLEXIBILIDAD ARTICULAR, CARTÍLAGO Y MOVIMIENTO',
    summary:
      'Póster publicitario e-commerce de alto impacto con frasco de suplemento articular sobre fondo azul marino y 4 medallones 3D flotantes con iconos grabados de rodilla, cartílago, absorción y cúrcuma.',
    voiceProfileName: 'Mateo (Hombre 35 años · Narrador Comercial Cálido)',
    backgroundMusicStyle: 'Cinemático Dinámico con Cello y Percusión Suave',
    benefits: [
      {
        title: 'Regeneración de Cartílago',
        shortDesc: 'La condroitina restaura la amortiguación natural en rodillas, manos y columna.',
        iconName: 'shield',
      },
      {
        title: 'Flexibilidad sin Dolor',
        shortDesc: 'Glucosamina 1500mg para lubricar articulaciones y eliminar rigidez matutina.',
        iconName: 'activity',
      },
      {
        title: 'Alivio con Cúrcuma & MSM',
        shortDesc: 'Dúo antiinflamatorio de rápida acción para articulaciones cansadas.',
        iconName: 'flame',
      },
      {
        title: 'Máxima Absorción Celular',
        shortDesc: 'Fórmula sinérgica con bio-potenciadores para resultados desde la primera semana.',
        iconName: 'zap',
      },
    ],
    geminiPromptEs:
      'Póster publicitario comercial en formato cuadrado 1:1 de estudio para e-commerce del producto "Glucosamina + Condroitina + Cúrcuma & MSM 1500mg": en el centro, el frasco de suplemento articular con tapa azul y etiqueta blanca con tonos azules sobre un podio reflectante con tenue halo de luz azulada. [FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, mantener intacto el frasco con su combinación de colores azul y blanco original, sin rediseñar logos ni alterar tipografías. Flotando simétricamente en 3D alrededor del frasco hay 4 medallones circulares plateados y dorados con iconos simbólicos limpios grabados en relieve 3D (1: icono de articulación de rodilla en movimiento, 2: icono de amortiguación de cartílago, 3: icono de llama antiinflamatoria de cúrcuma, 4: icono de molécula de absorción MSM), prohibido incluir letras pequeñas. Fondo azul marino profundo con sutil gradiente circular de estudio y partículas luminosas flotando. Fotografía publicitaria comercial 8k.',
    geminiPromptEn:
      'Commercial 1:1 square studio poster for e-commerce of "Glucosamine + Chondroitin + Turmeric & MSM 1500mg": centered joint supplement bottle with blue cap and white-blue label on a reflective podium with subtle blue halo light. [REFERENCE PHOTO ATTACHED]: Using the attached image product as mandatory visual base, keep the bottle intact in its original blue and white colors, without redesigning logos or altering typography. Symmetrically floating in 3D around the bottle are 4 circular silver-gold medallions with clean 3D embossed symbolic icons (1: moving knee joint icon, 2: cartilage cushioning icon, 3: anti-inflammatory turmeric flame, 4: MSM absorption molecule), strictly no small letters. Deep navy blue background with subtle radial studio gradient and floating light particles. Commercial advertising photography 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial de estudio para frasco de Glucosamina Condroitina sobre podio reflectante y fondo azul marino con halo de luz circular, sin textos flotantes, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Clean studio commercial photography of Glucosamine Chondroitin bottle on reflective podium against deep navy background with circular halo light, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs:
      'Video comercial dinámico: el frasco de Glucosamina y Condroitina permanece firme en el centro sobre el podio azul. REGLA ESTRICTA: NO animar letras ni deformar el producto; animar únicamente el destello de luz sobre los 4 medallones metálicos 3D y el tenue resplandor azul de fondo con suave acercamiento. MÚSICA DE FONDO: instrumental cinematográfico cálido con violonchelo inspirador y percusión sutil. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      ', diciendo: "¿Rigidez al levantarte o dolor en rodillas y articulaciones? La combinación de Glucosamina, Condroitina y MSM regenera el cartílago y desinflama con cúrcuma natural. Recupera tu movilidad y vive sin dolor."',
    masterFlowPromptEn:
      'Dynamic commercial video: Glucosamine bottle remains steady in the center. STRICT RULE: Do not animate letters or warp product; animate only light sweep across 4 metallic 3D medallions. BACKGROUND MUSIC: cinematic warm instrumental under voice. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      ', speaking in Spanish: "¿Rigidez al levantarte o dolor en rodillas y articulaciones? La combinación de Glucosamina, Condroitina y MSM regenera el cartílago y desinflama con cúrcuma natural. Recupera tu movilidad y vive sin dolor."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual Movilidad',
        promptEs:
          'Acercamiento lento al frasco de Glucosamina en fondo azul de estudio. El envase permanece estático. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "¿El dolor de rodillas o la rigidez articular te impiden moverte con libertad?"',
        promptEn:
          'Slow camera push to centered bottle on navy background. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "¿El dolor de rodillas o la rigidez articular te impiden moverte con libertad?"',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Medallones de Cartílago y Flexibilidad',
        promptEs:
          'Barrido de luz sobre los medallones 3D de cartílago y rodilla con destellos metálicos. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "La Condroitina y Glucosamina de alta pureza regeneran la amortiguación natural de tus articulaciones."',
        promptEn:
          'Light sweep over cartilage and knee medallions. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "La Condroitina y Glucosamina de alta pureza regeneran la amortiguación natural de tus articulaciones."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Medallones de Cúrcuma y MSM',
        promptEs:
          'Destello cálido sobre los medallones de alivio antiinflamatorio con partículas luminosas. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Y el MSM con extracto de Cúrcuma desinflama profundamente para eliminar la rigidez desde la primera semana."',
        promptEn:
          'Warm gleam on turmeric and MSM medallions. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Y el MSM con extracto de Cúrcuma desinflama profundamente para eliminar la rigidez desde la primera semana."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs:
          'Plano maestro fijo con todos los medallones iluminados. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Vuelve a moverte con agilidad y sin dolor. ¡Ordena tu tratamiento hoy!"',
        promptEn:
          'Hero shot with all medallions shining. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Vuelve a moverte con agilidad y sin dolor. ¡Ordena tu tratamiento hoy!"',
      },
    ],
  },
  {
    id: 'colageno-magnesio',
    name: 'Vitamina D3 + K2 Complex (Frasco Ámbar)',
    brand: 'Botanical Labs D3+K2',
    category: 'Salud Ósea, Inmunidad y Absorción de Calcio',
    categoryId: 'frascos',
    badgeText: 'Fotografía Botánica · Frasco Ámbar & Softgels',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-d3-k2-frasco.jpg',
    headline: 'ABSORCIÓN ÓSEA PERFECTA Y SISTEMA INMUNE',
    summary:
      'Fotografía de estudio comercial botánico con frasco de vidrio ámbar, tapa dorada metálica, cápsulas softgel doradas translúcidas y hojas frescas de eucalipto sobre madera rústica húmeda bañada por sol matutino.',
    voiceProfileName: 'Dra. Sofía (Mujer 32 años · Especialista en Bienestar)',
    backgroundMusicStyle: 'Piano Botánico Inspirador + Brisa de Bosque',
    benefits: [
      {
        title: 'Fijación de Calcio Óseo',
        shortDesc: 'La K2 dirige el calcio directamente a los huesos evitando la calcificación en arterias.',
        iconName: 'shield',
      },
      {
        title: 'Inmunidad y Defensas Fuertes',
        shortDesc: 'La D3 estimula la respuesta inmune y mejora el estado de ánimo y energía vital.',
        iconName: 'sun',
      },
      {
        title: 'Cápsulas Softgel Biodisponibles',
        shortDesc: 'Vehiculizadas en aceite virgen para absorción inmediata por el organismo.',
        iconName: 'droplets',
      },
      {
        title: 'Salud Cardiovascular',
        shortDesc: 'Mantiene las arterias elásticas y apoya el funcionamiento óptimo del corazón.',
        iconName: 'heart',
      },
    ],
    geminiPromptEs:
      'Fotografía publicitaria comercial en formato cuadrado 1:1 de estudio para el producto natural "Vitamina D3 + K2 Complex": en el centro, un frasco de vidrio ámbar oscuro con tapa dorada metálica y gotas de rocío fresco sobre una mesa de madera rústica húmeda en un bosque soleado al amanecer. [FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, mantener intacto el frasco de vidrio ámbar con su tapa dorada y etiqueta auténtica sin rediseñar marcas. En la base hay cápsulas softgel doradas translúcidas derramadas estéticamente, acompañadas de hojas verdes de eucalipto fresco y helechos con sutiles rayos de sol matutinos atravesando el follaje. Bokeh cremoso de bosque de fondo, lente macro 85mm f/1.8, iluminación cálida de amanecer, 8k.',
    geminiPromptEn:
      'Commercial 1:1 square studio photography for "Vitamin D3 + K2 Complex": centered dark amber glass bottle with brushed gold cap and fresh dew droplets resting on a wet rustic wood table in a sunlit morning forest. [REFERENCE PHOTO ATTACHED]: Using the attached image product as mandatory visual base, keep the amber glass bottle with its gold cap and authentic label intact without redesigning brands. At the base, golden translucent softgels are artfully scattered alongside fresh green eucalyptus leaves and ferns with soft morning sunbeams filtering through foliage. Creamy forest bokeh background, 85mm macro lens f/1.8, warm sunrise lighting, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial botánica en bosque al amanecer: frasco de vidrio ámbar con tapa dorada y cápsulas softgel sobre madera húmeda con hojas de eucalipto y rayos de sol dorados, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Sunrise forest botanical commercial photography: dewy amber glass bottle with gold cap and golden softgels on wet wood with eucalyptus leaves and golden sunbeams, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs:
      'Video comercial cinematográfico de producto natural: el frasco de vidrio ámbar de Vitamina D3 + K2 permanece 100% firme y nítido en el centro sobre la madera húmeda del bosque. REGLA ESTRICTA: NO animar letras ni alterar el envase; animar únicamente el barrido de luz solar sobre el vidrio y la tapa dorada, mientras las gotas de rocío resbalan y las partículas de polen dorado flotan con un lento acercamiento Dolly In. MÚSICA DE FONDO: melodía instrumental de piano suave y cuerdas cálidas a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEs +
      ', diciendo: "¿Sabías que tomar calcio sin Vitamina K2 puede ser perjudicial? La combinación sinérgica de Vitamina D3 y K2 asegura que el calcio llegue a tus huesos y dientes, protegiendo tus arterias. Solo una cápsula softgel al día para huesos fuertes y defensas de acero."',
    masterFlowPromptEn:
      'Cinematic natural product video: amber bottle remains 100% still on wet wood. STRICT RULE: Do not animate letters; animate only warm sunlight sweep across gold cap and glass while dew drops slide. BACKGROUND MUSIC: soft piano and warm strings under voice. ' +
      VOICE_PROFILES_LIBRARY[0].descriptionEn +
      ', speaking in Spanish: "¿Sabías que tomar calcio sin Vitamina K2 puede ser perjudicial? La combinación sinérgica de Vitamina D3 y K2 asegura que el calcio llegue a tus huesos y dientes, protegiendo tus arterias. Solo una cápsula softgel al día para huesos fuertes y defensas de acero."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual en Bosque Soleado',
        promptEs:
          'Acercamiento lento al frasco ámbar de Vitamina D3+K2 con cápsulas softgel en la madera húmeda. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "¿Sabías que el calcio necesita un guía para llegar a tus huesos y no a tus arterias?"',
        promptEn:
          'Slow Dolly In push toward amber bottle and softgels. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "¿Sabías que el calcio necesita un guía para llegar a tus huesos y no a tus arterias?"',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Cápsulas Softgel y Absorción Ósea',
        promptEs:
          'Luz dorada que atraviesa las cápsulas softgel translúcidas sobre la madera con hojas de eucalipto. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "La Vitamina K2 dirige el calcio directamente a tus huesos y dientes, evitando la calcificación arterial."',
        promptEn:
          'Golden light filtering through translucent softgels. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "La Vitamina K2 dirige el calcio directamente a tus huesos y dientes, evitando la calcificación arterial."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Defensas Inmunes y Vitalidad',
        promptEs:
          'Reflejo de sol sobre la tapa dorada del frasco mientras partículas de polen flotan suavemente. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Y la Vitamina D3 de alta concentración activa tus defensas naturales y eleva tu vitalidad."',
        promptEn:
          'Sunlight glint on gold cap. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Y la Vitamina D3 de alta concentración activa tus defensas naturales y eleva tu vitalidad."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs:
          'Plano maestro luminoso del frasco ámbar bajo la luz del amanecer con acorde final de piano. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEs +
          ', diciendo: "Una sola cápsula al día para proteger tus huesos y corazón. ¡Pide el tuyo hoy!"',
        promptEn:
          'Luminous master shot of amber bottle under sunrise light. ' +
          VOICE_PROFILES_LIBRARY[0].descriptionEn +
          ', speaking in Spanish: "Una sola cápsula al día para proteger tus huesos y corazón. ¡Pide el tuyo hoy!"',
      },
    ],
  },
  {
    id: 'uro-macro-textura',
    name: 'URO Macro 100mm (Ultra Detalle Textura)',
    brand: 'URO Natural Health',
    category: 'Macro Textura 100mm, Gotas de Rocío y Grano Mate',
    categoryId: 'macro',
    badgeText: 'Macro 100mm f/2.8 · Detalle Microscópico 8K',
    aspectRatio: '1:1 Estudio',
    image: '/images/uro-macro-textura.jpg',
    headline: 'TEXTURA MICROSCÓPICA, LOGO EN RELIEVE Y ROCÍO',
    summary:
      'Encuadre macro extremo a escasos centímetros enfocado con máxima nitidez microscópica sobre el relieve auténtico del logo URO, el acabado mate del empaque y microgotas de condensación fresca.',
    voiceProfileName: 'Elena (Mujer 27 años · Guía de Vida Saludable)',
    backgroundMusicStyle: 'Sonido Ambiente Acuático Zen + Arpa Suave',
    benefits: [
      {
        title: 'Relieve Táctil Auténtico',
        shortDesc: 'Detalle microscópico del logotipo sin distorsión ni alteración tipográfica.',
        iconName: 'target',
      },
      {
        title: 'Gotas de Rocío Fresco',
        shortDesc: 'Microgotas de condensación hiperrealistas sobre superficie mate.',
        iconName: 'droplets',
      },
      {
        title: 'Color Original Protegido',
        shortDesc: 'Rosa suave mate auténtico sin tintes verdes ni dorados invasivos.',
        iconName: 'sparkles',
      },
      {
        title: 'Nitidez Óptica 100mm',
        shortDesc: 'Profundidad de campo f/2.8 con bokeh suave y desenfoque artístico.',
        iconName: 'eye',
      },
    ],
    geminiPromptEs:
      'Fotografía macro sensorial de ultra detalle publicitario (extreme tight macro close-up a escasos centímetros) en formato cuadrado 1:1 de estudio comercial para el producto de salud femenina "URO Probiotics": encuadre microscópico cerrado enfocado en primerísimo plano sobre el relieve del logo URO auténtico, la textura táctil del material rosa mate y las microgotas de rocío fresco condensadas, cortando estéticamente los bordes del envase para llenar por completo la toma con nitidez 8K (sin alejar la cámara ni mostrar el envase entero). [FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, la toma se concentra al 100% en el detalle microscópico de su material original rosa mate, tipografía blanca nítida y logotipo auténtico en relieve sin rediseñar marcas ni alterar colores. Con fondo en suave desenfoque bokeh cremoso sin elementos lejanos que alejen la toma. Composición macro limpia sin medallones externos flotantes para garantizar el acercamiento extremo de la cámara. Con iluminación comercial difusa de estudio con brillos especulares suaves en las gotas de rocío, lente macro 100mm f/2.8 con nitidez microscópica en texturas y gotas. Fotografía comercial publicitaria 8k.',
    geminiPromptEn:
      'High-end sensory macro advertising photography (extreme tight macro close-up from just inches away) in 1:1 square format for feminine wellness product "URO Probiotics": microscopic tight framing sharply focused in extreme close-up on the authentic embossed URO logo, the tactile texture of the matte pink packaging material, and condensed fresh dew droplets, aesthetically cropping container edges to fill the entire frame with 8K clarity. [REFERENCE PHOTO ATTACHED]: Using the attached image product as mandatory visual base, the shot focuses 100% on the microscopic detail of its original matte pink material, crisp white typography, and embossed authentic logo without altering colors. Creamy bokeh background without distant objects. Clean macro composition with diffused studio lighting, specular highlights on dew drops, 100mm f/2.8 macro lens, 8k.',
    cleanHeroPromptEs:
      'Fotografía macro extrema a escasos centímetros del empaque rosa mate con microgotas de condensación y logotipo en relieve ultra nítido, lente macro 100mm f/2.8, 8k.',
    cleanHeroPromptEn:
      'Extreme close-up macro photography of matte pink packaging with condensation dew droplets and razor-sharp embossed logo, 100mm f/2.8 macro lens, 8k.',
    masterFlowPromptEs:
      'Video macro sensorial extremo: la toma permanece ultra cercana sobre la textura mate del empaque rosa y el relieve del logo. REGLA ESTRICTA: NO alejar la cámara ni deformar letras; animar únicamente el destello especular de luz deslizándose sobre las microgotas de rocío fresco y la textura táctil en cámara superlenta (120fps). MÚSICA DE FONDO: sonido de gotas zen y notas suaves de arpa. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEs +
      ', diciendo: "La pureza se siente en cada detalle. Ingredientes botánicos de máxima concentración formulados para tu bienestar."',
    masterFlowPromptEn:
      'Extreme sensory macro video: extreme close-up on matte pink texture and embossed logo. STRICT RULE: Do not pull back camera; animate only specular light glide across dew drops. BACKGROUND MUSIC: zen droplets and soft harp. ' +
      VOICE_PROFILES_LIBRARY[2].descriptionEn +
      ', speaking in Spanish: "La pureza se siente en cada detalle. Ingredientes botánicos de máxima concentración formulados para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Macro Extremo Relieve Logo',
        promptEs:
          'Enfoque microscópico en el relieve del logo con una gota de rocío resbalando lentamente. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Cada detalle refleja la pureza y calidad de una fórmula diseñada para ti."',
        promptEn:
          'Microscopic focus on embossed logo with dew drop sliding slowly. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Cada detalle refleja la pureza y calidad de una fórmula diseñada para ti."',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Microgotas de Rocío y Grano Táctil',
        promptEs:
          'Luz que barre horizontalmente las microgotas de agua creando prismas de luz en la textura mate. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Extractos botánicos vivos que conservan su máxima potencia activa."',
        promptEn:
          'Light sweep over condensation droplets creating light prisms on matte surface. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Extractos botánicos vivos que conservan su máxima potencia activa."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Destello Especular en Textura',
        promptEs:
          'Destello suave de estudio recorriendo los bordes del logo en relieve. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Formulado para proteger tu microbiota y brindarte confort absoluto cada día."',
        promptEn:
          'Soft studio flare sweeping embossed logo edges. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Formulado para proteger tu microbiota y brindarte confort absoluto cada día."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Macro Luminoso',
        promptEs:
          'Toma macro nítida final con suave destello en el logotipo. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "Siente la diferencia de un producto verdaderamente natural."',
        promptEn:
          'Final sharp macro shot with soft flare on logo. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "Siente la diferencia de un producto verdaderamente natural."',
      },
    ],
  },
  {
    id: 'vitamina-d3-k2-pouch',
    name: 'Vitamina D3 + K2 Complex (Stand-up Pouch)',
    brand: 'Botanical Labs D3+K2',
    category: 'Empaque Doypack Pouch · 4 Medallones 3D',
    categoryId: 'posters',
    badgeText: 'Póster Doypack · 4 Medallones 3D Grabados',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-d3-k2-pouch.jpg',
    headline: 'CALCIO A LOS HUESOS, CORAZÓN Y VITALIDAD',
    summary:
      'Póster comercial publicitario para bolsa doypack stand-up pouch blanca de Vitamina D3 + K2 Complex, acompañada de 4 medallones circulares 3D de oro cepillado sobre mesa de roble y hojas verdes.',
    voiceProfileName: 'Mateo (Hombre 35 años · Narrador Comercial Cálido)',
    backgroundMusicStyle: 'Guitarra Acústica Cálida y Cello Botánico',
    benefits: [
      {
        title: 'Absorción Ósea Superior',
        shortDesc: 'Sinergia D3 + K2 para máxima biodisponibilidad y mineralización de huesos y dientes.',
        iconName: 'shield',
      },
      {
        title: 'Protección Cardiovascular',
        shortDesc: 'Evita la fijación de calcio en las arterias promoviendo elasticidad vascular.',
        iconName: 'heart',
      },
      {
        title: 'Sistema Inmune Activo',
        shortDesc: 'Refuerza las defensas naturales frente a cambios de estación y fatiga.',
        iconName: 'sun',
      },
      {
        title: 'Fuerza Muscular y Energía',
        shortDesc: 'Favorece el tono muscular y combate el cansancio físico y mental acumulado.',
        iconName: 'zap',
      },
    ],
    geminiPromptEs:
      'Póster publicitario comercial en formato cuadrado 1:1 de estudio para el producto natural "Vitamina D3 + K2 Complex": en el centro, la bolsa stand-up doypack pouch blanca sobre una mesa de roble claro con hojas frescas de eucalipto y gotas de rocío. [FOTO DE REFERENCIA ADJUNTA]: Tomando como base visual obligatoria el producto de la imagen adjunta, mantener intacta la bolsa tipo doypack pouch con su empaque blanco, tipografía y logo auténtico sin rediseñar marcas ni alterar colores. Flotando simétricamente alrededor de la bolsa hay 4 medallones circulares de oro cepillado que contienen ÚNICAMENTE iconos simbólicos grabados en 3D (1: icono de hueso fuerte y calcio, 2: icono de corazón y salud vascular, 3: icono de sol y sistema inmune, 4: icono de energía muscular), estrictamente sin textos pequeños para evitar deformaciones. Fondo en suave desenfoque con hojas botánicas e iluminación comercial cálida, lente 85mm f/1.8, 8k.',
    geminiPromptEn:
      'Commercial 1:1 square studio poster for natural product "Vitamin D3 + K2 Complex": centered white stand-up doypack pouch on a light oak table with fresh eucalyptus leaves and dew droplets. [REFERENCE PHOTO ATTACHED]: Using the attached image product as mandatory visual base, keep the white doypack pouch intact with its authentic typography and logo without altering colors. Floating symmetrically around the pouch are 4 brushed gold circular medallions with clean 3D embossed symbolic icons (1: strong bone and calcium icon, 2: heart and vascular health icon, 3: sun and immune system icon, 4: muscle energy icon), strictly no small text that could warp. Soft bokeh background with botanical leaves, warm commercial lighting, 85mm lens f/1.8, 8k.',
    cleanHeroPromptEs:
      'Fotografía comercial limpia de estudio para bolsa doypack pouch de Vitamina D3+K2 sobre mesa de madera clara con hojas botánicas y luz difusa, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn:
      'Clean studio commercial photography of Vitamin D3+K2 stand-up doypack pouch on light wooden table with botanical leaves, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs:
      'Video comercial cinematográfico: la bolsa stand-up pouch de Vitamina D3 + K2 permanece 100% inmóvil y nítida en el centro. REGLA ESTRICTA: NO animar letras ni deformar el empaque; animar únicamente el destello de luz cálida sobre los 4 medallones 3D dorados y las hojas de eucalipto con suave acercamiento Dolly In. MÚSICA DE FONDO: guitarra acústica cálida y cuerdas suaves a volumen moderado bajo la voz. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEs +
      ', diciendo: "Dale a tu cuerpo la combinación perfecta para proteger tus huesos y cuidar tu corazón. Vitamina D3 y K2 en práctica presentación doypack para acompañar tu vida activa."',
    masterFlowPromptEn:
      'Cinematic commercial video: white doypack pouch remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light gleam across 4 gold 3D medallions. BACKGROUND MUSIC: warm acoustic guitar and strings under voice. ' +
      VOICE_PROFILES_LIBRARY[1].descriptionEn +
      ', speaking in Spanish: "Dale a tu cuerpo la combinación perfecta para proteger tus huesos y cuidar tu corazón. Vitamina D3 y K2 en práctica presentación doypack para acompañar tu vida activa."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual Pouch',
        promptEs:
          'Acercamiento suave hacia la bolsa stand-up pouch sobre mesa de roble claro. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "¿Quieres huesos fuertes y defensas al máximo con un solo suplemento?"',
        promptEn:
          'Slow push-in toward white stand-up pouch on oak table. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "¿Quieres huesos fuertes y defensas al máximo con un solo suplemento?"',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Medallones de Huesos y Corazón',
        promptEs:
          'Barrido de luz sobre los 2 medallones superiores con los iconos 3D de salud ósea y cardiovascular. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEs +
          ', diciendo: "La sinergia de D3 y K2 fija el calcio en tus huesos mientras protege la salud de tus arterias."',
        promptEn:
          'Light sweep over top 2 medallions for bone and heart health. ' +
          VOICE_PROFILES_LIBRARY[2].descriptionEn +
          ', speaking in Spanish: "La sinergia de D3 y K2 fija el calcio en tus huesos mientras protege la salud de tus arterias."',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Medallones de Inmunidad y Energía',
        promptEs:
          'Destello solar sobre los medallones inferiores de defensas y fuerza muscular. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "Refuerza tus defensas naturales y mantén tus músculos llenos de vitalidad."',
        promptEn:
          'Solar reflection on immune and muscle energy medallions. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "Refuerza tus defensas naturales y mantén tus músculos llenos de vitalidad."',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs:
          'Plano maestro luminoso final con los 4 medallones dorados iluminados. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEs +
          ', diciendo: "El cuidado completo que tu cuerpo merece. ¡Pide tu bolsa doypack hoy!"',
        promptEn:
          'Luminous master shot with all 4 gold medallions glowing. ' +
          VOICE_PROFILES_LIBRARY[1].descriptionEn +
          ', speaking in Spanish: "El cuidado completo que tu cuerpo merece. ¡Pide tu bolsa doypack hoy!"',
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
