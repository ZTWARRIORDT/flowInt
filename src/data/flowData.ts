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
  categoryId: 'suplementos' | 'doypack' | 'goteros' | 'sprays' | 'tarros' | 'polvos' | string;
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
  // --- GRUPO 1: URO CRANBERRY PROBIÓTICOS (BOLSA ROSA DOYPACK) ---
  {
    id: 'uro-cranberry-zen-pill',
    name: 'URO Cranberry Probióticos (Bolsa Rosa · Arena Zen)',
    brand: 'URO Vaginal & Digestive Health',
    category: 'Salud Femenina y Digestiva',
    categoryId: 'uro',
    badgeText: 'Doypack Rosa · Arena Zen & Badges Pill',
    aspectRatio: '1:1 Estudio',
    image: '/images/uro-poster.jpg',
    headline: 'SALUD DIGESTIVA Y URINARIA · BIENESTAR FEMENINO',
    summary: 'Bolsa stand-up pouch rosa pastel mate centrada sobre lecho de arena zen rastrillada y losas de piedra caliza lisa, con 4 badges pill flotantes estilizados.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      { title: 'Flora Intestinal y Digestión Ligera', shortDesc: 'Equilibrio de la microbiota digestiva.', iconName: 'sparkles' },
      { title: 'Protección Urinaria con Arándano', shortDesc: 'Extracto estandarizado PAC de arándano rojo.', iconName: 'shield' },
      { title: 'Extracto de Orégano Antibacteriano', shortDesc: 'Defensa antimicrobiana activa natural.', iconName: 'leaf' },
      { title: 'Microbiota Femenina Equilibrada', shortDesc: 'Cepas probióticas vivas para bienestar íntimo.', iconName: 'heart' }
    ],
    packagingPromptEs: 'bolsa stand-up pouch rosa pastel mate con logo URO tipográfico nítido y letras blancas de alta legibilidad',
    packagingPromptEn: 'a matte pastel pink stand-up pouch with clean typographic URO logo and high-legibility white lettering',
    environmentPromptEs: 'sobre lecho de arena zen rastrillada con patrones geométricos sutiles y losas de piedra caliza lisa bajo luz natural matutina suave',
    environmentPromptEn: 'on raked zen sand with subtle geometric ripples and smooth flat limestone slabs under soft morning natural diffused sunlight',
    infographicPromptEs: 'flotando simétricamente alrededor del envase hay 4 badges horizontales redondeados estilo pastilla en verde salvia y blanco mate con los beneficios',
    infographicPromptEn: 'floating symmetrically around the package are 4 horizontal rounded pill-shaped badges in sage green and matte white with benefits',
    geminiPromptEs: 'Fotografía comercial de estudio en formato 1:1 de la bolsa pouch rosa URO sobre arena zen con badges pill flotantes de alta legibilidad.',
    geminiPromptEn: '1:1 commercial studio product photography of URO pink pouch centered on zen sand with pill badges.',
    cleanHeroPromptEs: 'Hero shot minimalista de la bolsa pouch rosa URO sobre losa caliza.',
    cleanHeroPromptEn: 'Minimalist hero shot of URO pink pouch on limestone slab.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA ADJUNTA OBLIGATORIA]: Clonar exactamente la bolsa pouch rosa URO. Escena en arena zen con badges pill.',
    masterFlowPromptEn: '[MANDATORY ATTACHED REFERENCE PHOTO]: Replicate exact URO pink pouch container on zen sand with pill badges.',
    flowScenes: []
  },
  {
    id: 'uro-cranberry-marmol-pins',
    name: 'URO Cranberry (Mármol Calacatta & Pins Dorados)',
    brand: 'URO Vaginal & Digestive Health',
    category: 'Salud Femenina y Digestiva',
    categoryId: 'uro',
    badgeText: 'Doypack Rosa · Mármol & Callout Pins',
    aspectRatio: '4:5 Vertical',
    image: '/images/uro-frontal.jpg',
    headline: 'BIENESTAR ÍNTIMO PREMIUM CON ACTIVOS BOTÁNICOS',
    summary: 'Bolsa pouch rosa URO en plano picado a 45 grados sobre superficie pulida de mármol blanco Calacatta con vetas doradas suaves y callout pins circulares de lujo.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música serena y fresca de bienestar',
    benefits: [
      { title: 'Extracto Puro de Arándano Rojo 50:1', shortDesc: 'Concentrado botánico antioxidante puro.', iconName: 'sparkles' },
      { title: 'Prebióticos FOS de Alta Absorción', shortDesc: 'Nutrición directa para bacterias benéficas.', iconName: 'shield' },
      { title: 'Orégano Silvestre Protector', shortDesc: 'Carvacrol purificado para defensa total.', iconName: 'leaf' },
      { title: 'Confort Diario sin Molestias', shortDesc: 'Bienestar duradero todo el día.', iconName: 'heart' }
    ],
    packagingPromptEs: 'bolsa pouch rosa pastel impermeable con logo URO frontal nítido',
    packagingPromptEn: 'matte pastel pink pouch with sharp front URO branding',
    environmentPromptEs: 'sobre encimera de mármol Calacatta blanco pulido con vetas doradas suaves y reflejos especulares de luz difusa de tocador de lujo',
    environmentPromptEn: 'on polished white Calacatta marble countertop with gentle gold veining and subtle specular reflections',
    infographicPromptEs: 'conectados con finas líneas doradas semitransparentes hay 4 callout pins circulares flotantes con borde dorado y tipografía moderna',
    infographicPromptEn: 'connected with ultra-thin semi-transparent golden guide lines are 4 circular callout pins with gold foil borders',
    geminiPromptEs: 'Fotografía comercial editorial 4:5 de URO sobre mármol Calacatta con callout pins dorados.',
    geminiPromptEn: '4:5 editorial product photography of URO on Calacatta marble with gold callout pins.',
    cleanHeroPromptEs: 'Hero shot 4:5 de URO sobre mármol blanco.',
    cleanHeroPromptEn: '4:5 hero shot of URO on white marble.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Mantener la bolsa rosa URO original. Escena sobre mármol Calacatta con callout pins dorados.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Maintain original URO pink pouch on Calacatta marble with gold callout pins.',
    flowScenes: []
  },
  {
    id: 'uro-macro-textura',
    name: 'URO Macro 100mm (Ultra Detalle Textura Softgels)',
    brand: 'URO Vaginal & Digestive Health',
    category: 'Salud Femenina y Digestiva',
    categoryId: 'uro',
    badgeText: 'Lente Macro 100mm · Softgels y Rim Light',
    aspectRatio: '1:1 Estudio',
    image: '/images/uro-macro.jpg',
    headline: 'PUREZA Y CONCENTRACIÓN EN CADA SOFTGEL',
    summary: 'Macrofotografía extrema a 100mm f/2.8 enfocada en las cápsulas blandas translúcidas doradas con microgotas condensadas junto a la base de la bolsa URO.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música ambiental suave y minimalista',
    benefits: [
      { title: 'Cápsula Blanda de Rápida Liberación', shortDesc: 'Desintegración estomacal en menos de 5 min.', iconName: 'sparkles' },
      { title: 'Cero Aditivos Químicos ni Rellenos', shortDesc: '100% extractos limpios sin estearato.', iconName: 'shield' },
      { title: 'Aceite de Orégano Estandarizado', shortDesc: 'Concentración garantizada de activos.', iconName: 'leaf' },
      { title: 'Biodisponibilidad 3x Superior', shortDesc: 'Máxima absorción celular sin pérdidas.', iconName: 'heart' }
    ],
    packagingPromptEs: 'cápsulas blandas doradas ambarinas traslúcidas descansando sobre superficie pulida frente a la bolsa rosa URO',
    packagingPromptEn: 'translucent golden amber softgels resting on a clean surface in front of the pink URO pouch',
    environmentPromptEs: 'estudio oscuro con haz focal estrecho y rim light de contraluz nítido que ilumina las microgotas de agua condensada sobre las perlas',
    environmentPromptEn: 'dark studio setting with narrow spotlight beam and crisp backlight rim lighting making condensed water micro-droplets glisten',
    infographicPromptEs: 'sin elementos flotantes, encuadre cerrado macro extremo 100mm con foco crítico en la transparencia de las cápsulas y textura',
    infographicPromptEn: 'no floating elements, extreme 100mm macro tight framing with critical focus on softgel translucency and texture',
    geminiPromptEs: 'Macrofotografía 100mm de cápsulas softgel URO con iluminación de rim light.',
    geminiPromptEn: '100mm macro photography of URO softgels with rim light.',
    cleanHeroPromptEs: 'Macro 100mm de perlas doradas URO.',
    cleanHeroPromptEn: '100mm macro of URO golden pearls.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Detalle macro de cápsulas blandas doradas junto al envase original URO.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Macro detail of golden softgels next to original URO pouch.',
    flowScenes: []
  },
  {
    id: 'uro-splash-cascada',
    name: 'URO Splash Cascada Alpina (Energía & Frescura 9:16)',
    brand: 'URO Vaginal & Digestive Health',
    category: 'Salud Femenina y Digestiva',
    categoryId: 'uro',
    badgeText: 'Splash Dinámico · Cascada Alpina & Reels 9:16',
    aspectRatio: '9:16 Vertical',
    image: '/images/uro-frontal.jpg',
    headline: 'FRESCURA VITAL Y DEFENSA ACTIVA TODO EL DÍA',
    summary: 'Composición vertical de alta velocidad 9:16 donde la bolsa rosa URO permanece nítida y estática mientras una corona de salpicadura de agua helada y arándanos frescos explota alrededor.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música dinámica de alta energía positiva',
    benefits: [
      { title: 'Efecto Refrescante Inmediato', shortDesc: 'Sensación de ligereza desde la primera toma.', iconName: 'sparkles' },
      { title: 'Defensa Inmune de Vías Urinarias', shortDesc: 'Barrera activa con PACs de arándano.', iconName: 'shield' },
      { title: 'Digestión Desinflamada al Instante', shortDesc: 'Alivia pesadez y distensión abdominal.', iconName: 'leaf' },
      { title: 'Fórmula Limpia para Todos los Días', shortDesc: 'Apto para consumo diario continuo.', iconName: 'heart' }
    ],
    packagingPromptEs: 'bolsa pouch rosa URO impermeable perfectamente enfocada al centro',
    packagingPromptEn: 'waterproof pink URO pouch perfectly focused at the center',
    environmentPromptEs: 'rocas de basalto húmedas frente a una cascada alpina de fondo desenfocado con neblina fresca y arcoíris difuso',
    environmentPromptEn: 'wet dark basalt rock in front of a blurred alpine waterfall background with fresh mist and subtle rainbow reflection',
    infographicPromptEs: 'formato vertical 9:16 con titulares y badges pill translúcidos con bordes en cian y blanco en las zonas superior e inferior',
    infographicPromptEn: '9:16 vertical full-screen format with translucent pill badges in cyan and white in the top and bottom negative space',
    geminiPromptEs: 'Fotografía dinámica 9:16 de URO con salpicadura de agua congelada frente a cascada.',
    geminiPromptEn: 'Dynamic 9:16 product photo of URO with frozen water splash in front of alpine waterfall.',
    cleanHeroPromptEs: 'Toma vertical de URO en cascada alpina.',
    cleanHeroPromptEn: 'Vertical shot of URO at alpine waterfall.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Mantener la bolsa URO rosa con corona de agua congelada a 1/4000s.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Keep URO pink pouch with crown water splash at 1/4000s.',
    flowScenes: []
  },

  // --- GRUPO 2: GLUCOSAMINA + CONDROITINA + MSM (FRASCO BLANCO) ---
  {
    id: 'glucosamina-travertino-spa',
    name: 'Glucosamina + MSM (Travertino Spa & Cápsulas en Base)',
    brand: 'ArthroFlex Lab',
    category: 'Articulaciones y Movilidad',
    categoryId: 'glucosamina',
    badgeText: 'Frasco Blanco · Pedestal Travertino & Spa',
    aspectRatio: '1:1 Estudio',
    image: '/images/glucosamina-hero.jpg',
    headline: 'FLEXIBILIDAD ARTICULAR, ALIVIO Y REGENERACIÓN',
    summary: 'Frasco blanco médico de Glucosamina + Condroitina + MSM 1500mg centrado sobre un pedestal de piedra travertino beige poroso, con tabletas blancas descansando sobre la base.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      { title: 'Regenera el Cartílago Desgastado', shortDesc: 'Nutre la matriz extracelular articular.', iconName: 'sparkles' },
      { title: 'Alivio Rápido del Dolor Articular', shortDesc: 'Reduce molestias en rodillas y hombros.', iconName: 'shield' },
      { title: 'Máxima Flexibilidad y Movilidad', shortDesc: 'Lubricación sinovial óptima para caminar.', iconName: 'heart' },
      { title: 'MSM Puro para Reducir Inflamación', shortDesc: 'Azufre bioasimilable anti-rigidez.', iconName: 'leaf' }
    ],
    packagingPromptEs: 'frasco blanco cilíndrico farmacéutico de boca ancha con tapa estriada blanca y etiqueta azul y plateada con rodilla anatómica 3D',
    packagingPromptEn: 'pharmaceutical white cylindrical wide-mouth bottle with white ribbed cap and blue-silver label showing 3D anatomical joint',
    environmentPromptEs: 'sobre pedestal geométrico de piedra travertino beige poroso y madera natural bajo luz de spa cenital suave con sombras de hojas de palma',
    environmentPromptEn: 'on geometric porous beige travertine stone pedestal and natural wood under soft overhead spa light with palm leaf gobo shadows',
    infographicPromptEs: 'flotando alrededor del frasco hay 4 badges pill en azul zafiro y blanco perla con tipografía sans-serif impecable',
    infographicPromptEn: 'floating around the bottle are 4 pill badges in sapphire blue and pearl white with pristine sans-serif typography',
    geminiPromptEs: 'Fotografía comercial de frasco de glucosamina sobre pedestal de travertino con badges pill.',
    geminiPromptEn: 'Commercial photography of glucosamine bottle on travertine pedestal with pill badges.',
    cleanHeroPromptEs: 'Hero shot de frasco de glucosamina en pedestal de travertino.',
    cleanHeroPromptEn: 'Hero shot of glucosamine bottle on travertine pedestal.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA ADJUNTA]: Clonar fielmente el frasco blanco de Glucosamina 1500mg. Escena en pedestal de travertino.',
    masterFlowPromptEn: '[MANDATORY REFERENCE PHOTO]: Replicate white Glucosamine 1500mg container on travertine pedestal.',
    flowScenes: []
  },
  {
    id: 'glucosamina-laboratorio-clinico',
    name: 'Glucosamina Complex (Laboratorio Clínico & Cards Métricas)',
    brand: 'ArthroFlex Lab',
    category: 'Articulaciones y Movilidad',
    categoryId: 'glucosamina',
    badgeText: 'Frasco Blanco · Laboratorio & Cards Métricas 4:5',
    aspectRatio: '4:5 Vertical',
    image: '/images/glucosamina-hero.jpg',
    headline: '1500MG DE GLUCOSAMINA CLÍNICAMENTE DOSIFICADA',
    summary: 'Composición de alta credibilidad médica sobre superficie de vidrio templado y acero pulido con iluminación limpia de laboratorio y tarjetas métricas semitransparentes.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música corporativa tecnológica suave',
    benefits: [
      { title: '1500mg Sulfato Glucosamina Clínico', shortDesc: 'Dosis comprobada en ensayos clínicos.', iconName: 'sparkles' },
      { title: 'Condroitina Bovina de Absorción', shortDesc: 'Pureza molecular superior para cartílago.', iconName: 'shield' },
      { title: '500mg MSM Orgánico Anti-Rigidez', shortDesc: 'Alivio articular en menos de 14 días.', iconName: 'leaf' },
      { title: 'Sin Molestias Gastrointestinales', shortDesc: 'Tolerancia digestiva 100% probada.', iconName: 'heart' }
    ],
    packagingPromptEs: 'frasco blanco médico de Glucosamina en plano tres cuartos impecablemente enfocado',
    packagingPromptEn: 'medical white Glucosamine bottle in three-quarter view with tack-sharp focus',
    environmentPromptEs: 'superficie de cristal templado y acero inoxidable quirúrgico con fondo de laboratorio clínico desenfocado y luz perimetral azul cian suave',
    environmentPromptEn: 'tempered glass and surgical stainless steel surface with blurred clinical lab background and soft cyan ambient rim light',
    infographicPromptEs: 'tarjetas métricas flotantes semitransparentes con bordes de cristal neumórfico mostrando dosis clínicas en tipografía técnica clara',
    infographicPromptEn: 'floating translucent metric cards with glassmorphism borders displaying clinical dosages in clean technical font',
    geminiPromptEs: 'Fotografía 4:5 de Glucosamina en laboratorio clínico con tarjetas métricas de dosificación.',
    geminiPromptEn: '4:5 photography of Glucosamine in clinical lab with metric dosage cards.',
    cleanHeroPromptEs: 'Toma médica limpia de Glucosamina en laboratorio.',
    cleanHeroPromptEn: 'Clean medical shot of Glucosamine in lab.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Frasco blanco de Glucosamina en entorno de laboratorio médico con tarjetas de datos clínicos.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: White Glucosamine bottle in medical lab setting with clinical data cards.',
    flowScenes: []
  },
  {
    id: 'glucosamina-cocina-nordica',
    name: 'Glucosamina + MSM (Hero Shot en Roble Nórdico & Mañana)',
    brand: 'ArthroFlex Lab',
    category: 'Articulaciones y Movilidad',
    categoryId: 'glucosamina',
    badgeText: 'Frasco Blanco · Hero Shot en Roble Nórdico',
    aspectRatio: '1:1 Estudio',
    image: '/images/glucosamina-hero.jpg',
    headline: 'TU HÁBITO MATUTINO PARA MOVERTE SIN LÍMITES',
    summary: 'Hero shot minimalista sin elementos flotantes: el frasco blanco de Glucosamina destaca al centro sobre una mesa de roble claro con lino blanco y un rayo de sol matutino.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      { title: 'Rutina Diaria de Movilidad Sin Dolor', shortDesc: 'Fácil de incorporar en el desayuno.', iconName: 'sparkles' },
      { title: 'Protege Tus Articulaciones al Entrenar', shortDesc: 'Resistencia articular para running y pesas.', iconName: 'shield' },
      { title: 'Absorción Óptima con Alimentos', shortDesc: 'Sin acidez estomacal.', iconName: 'leaf' },
      { title: 'Confort en Rodillas al Subir Escaleras', shortDesc: 'Dile adiós a los crujidos articulares.', iconName: 'heart' }
    ],
    packagingPromptEs: 'frasco blanco de Glucosamina 1500mg perfectamente iluminado',
    packagingPromptEn: 'white bottle of Glucosamine 1500mg cleanly illuminated',
    environmentPromptEs: 'sobre mesa de madera de roble nórdico claro junto a un mantel de lino crudo bajo luz matutina dorada oblicua',
    environmentPromptEn: 'on light nordic oak wood table next to raw linen napkin under oblique golden morning sunlight',
    infographicPromptEs: 'sin elementos flotantes ni textos gráficos en la escena, foco absoluto en el frasco y la atmósfera hogareña',
    infographicPromptEn: 'no floating elements or graphic text, absolute focus on the bottle and warm domestic atmosphere',
    geminiPromptEs: 'Hero shot limpio de Glucosamina sobre mesa de roble y lino.',
    geminiPromptEn: 'Clean hero shot of Glucosamine on oak table and linen.',
    cleanHeroPromptEs: 'Hero shot puro de Glucosamina en madera de roble.',
    cleanHeroPromptEn: 'Pure hero shot of Glucosamine on oak wood.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Frasco blanco original de Glucosamina sobre roble nórdico sin textos flotantes.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Original white Glucosamine bottle on nordic oak without floating text.',
    flowScenes: []
  },
  {
    id: 'glucosamina-flatlay-cenital',
    name: 'Glucosamina Flat Lay Cenital (Vista 90° con Ingredientes)',
    brand: 'ArthroFlex Lab',
    category: 'Articulaciones y Movilidad',
    categoryId: 'glucosamina',
    badgeText: 'Flat Lay Cenital 90° · Ingredientes & Cápsulas',
    aspectRatio: '1:1 Estudio',
    image: '/images/glucosamina-hero.jpg',
    headline: 'FÓRMULA SINÉRGICA COMPLETA DE ALTA PUREZA',
    summary: 'Vista cenital cenital exacta a 90 grados: el frasco blanco reposa al centro rodeado armoniosamente de tabletas blancas desbordadas, polvo de condroitina y cristales de MSM.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[3].name,
    backgroundMusicStyle: 'Música ambiental suave y minimalista',
    benefits: [
      { title: 'Glucosamina Marina Purificada', shortDesc: 'Máxima concentración sin contaminantes.', iconName: 'sparkles' },
      { title: 'Condroitina en Polvo Micronizado', shortDesc: 'Biodisponibilidad inmediata.', iconName: 'shield' },
      { title: 'Cristales Puros de Azufre MSM', shortDesc: 'Flexibilidad y desinflamación profunda.', iconName: 'leaf' },
      { title: 'Cápsulas Fáciles de Deglutir', shortDesc: 'Recubrimiento suave sin sabor residual.', iconName: 'heart' }
    ],
    packagingPromptEs: 'frasco blanco de Glucosamina colocado en vista cenital vertical 90 grados',
    packagingPromptEn: 'white Glucosamine bottle placed in straight overhead 90-degree flat lay top view',
    environmentPromptEs: 'superficie de madera clara y lino crudo con cuencos de cerámica artesanal con ingredientes botánicos',
    environmentPromptEn: 'light natural wood surface and raw linen fabric with small ceramic bowls holding botanical powders',
    infographicPromptEs: 'pequeñas etiquetas tipográficas en papel kraft mate al lado de cada ingrediente activo con finas flechas indicadoras',
    infographicPromptEn: 'small typographic matte kraft labels next to each active raw ingredient with fine clean arrows',
    geminiPromptEs: 'Flat lay cenital 90 grados de Glucosamina con ingredientes botánicos reales.',
    geminiPromptEn: '90-degree flat lay of Glucosamine with real botanical raw ingredients.',
    cleanHeroPromptEs: 'Vista cenital de Glucosamina e ingredientes.',
    cleanHeroPromptEn: 'Top-down view of Glucosamine and ingredients.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Frasco blanco de Glucosamina en plano cenital 90° con cápsulas desbordadas.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: White Glucosamine bottle in 90° top view with spilled tablets.',
    flowScenes: []
  },

  // --- GRUPO 3: VITAMINA D3 + K2 COMPLEX (FRASCO ÁMBAR VIDRIO) ---
  {
    id: 'vitamina-d3-frasco-botica',
    name: 'Vitamina D3+K2 Frasco (Herbolario & Botica Antigua)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-frasco',
    badgeText: 'Frasco Ámbar · Botica Antigua & Madera Oscura',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-frasco.jpg',
    headline: 'HUESOS FUERTES, INMUNIDAD POTENTE Y ABSORCIÓN TOTAL',
    summary: 'Frasco ámbar de vidrio botánico con tapa dorada metálica sobre mostrador de madera de roble oscuro envejecido, ramilletes secos y luz ámbar acogedora de botica tradicional.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      { title: 'Vitamina D3 5000 UI de Alta Potencia', shortDesc: 'Dosis clínica para niveles óptimos en sangre.', iconName: 'sparkles' },
      { title: 'K2 MK-7 Guía el Calcio a los Huesos', shortDesc: 'Evita calcificación en arterias.', iconName: 'shield' },
      { title: 'Refuerzo Clave del Sistema Inmune', shortDesc: 'Defensa activa contra infecciones.', iconName: 'leaf' },
      { title: 'Base en Aceite MCT para Absorción', shortDesc: 'Soluble en grasas saludables de coco.', iconName: 'heart' }
    ],
    packagingPromptEs: 'frasco ámbar de vidrio farmacéutico con tapa metálica dorada y etiqueta crema botánica limpia',
    packagingPromptEn: 'amber glass botanical supplement bottle with metallic gold cap and clean cream botanical label',
    environmentPromptEs: 'sobre mostrador de roble oscuro envejecido de botica artesanal, rodeado de ramilletes de lavanda seca y luz cálida de tungsteno',
    environmentPromptEn: 'on aged dark oak apothecary counter surrounded by dried lavender bundles and warm incandescent amber studio glow',
    infographicPromptEs: '4 badges pill redondeados con borde ámbar dorado y tipografía limpia flotando alrededor del frasco',
    infographicPromptEn: '4 rounded pill badges with amber gold border and clean typography floating around the bottle',
    geminiPromptEs: 'Fotografía comercial de Vitamina D3 frasco ámbar en botica antigua con badges pill.',
    geminiPromptEn: 'Commercial photo of Vitamin D3 amber bottle in vintage apothecary with pill badges.',
    cleanHeroPromptEs: 'Hero shot de frasco ámbar en botica.',
    cleanHeroPromptEn: 'Hero shot of amber bottle in apothecary.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Clonar fielmente el frasco ámbar de Vitamina D3+K2. Escena en botica tradicional.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Replicate exact Vitamin D3+K2 amber bottle in vintage apothecary.',
    flowScenes: []
  },
  {
    id: 'vitamina-d3-frasco-hora-dorada',
    name: 'Vitamina D3+K2 Frasco (Pradera en Hora Dorada 4:5)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-frasco',
    badgeText: 'Frasco Ámbar · Luz Solar & Pradera al Atardecer',
    aspectRatio: '4:5 Vertical',
    image: '/images/vitamina-frasco.jpg',
    headline: 'LA ENERGÍA DEL SOL EN CADA GOTA BOTÁNICA',
    summary: 'Frasco ámbar de Vitamina D3 en plano picado a 45 grados sobre tronco seco en una pradera silvestre iluminada por el sol poniente en hora dorada con destellos cálidos.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música serena y fresca de bienestar',
    benefits: [
      { title: 'Activa tu Vitalidad Matutina', shortDesc: 'Supera el cansancio crónico.', iconName: 'sparkles' },
      { title: 'Mejora el Estado de Ánimo y Enfoque', shortDesc: 'Soporte hormonal natural.', iconName: 'shield' },
      { title: 'Protege las Arterias contra Calcinosis', shortDesc: 'Sinergia K2 menaquinona-7.', iconName: 'heart' },
      { title: 'Sin Rellenos Artificiales ni Alérgenos', shortDesc: 'Fórmula hipoalergénica pura.', iconName: 'leaf' }
    ],
    packagingPromptEs: 'frasco ámbar de Vitamina D3 con tapa dorada resplandeciente bajo luz de sol',
    packagingPromptEn: 'amber glass bottle of Vitamin D3 with glowing gold cap under natural sunlight',
    environmentPromptEs: 'en una pradera silvestre sobre madera dorada con flores campestres y luz dorada rasante de atardecer',
    environmentPromptEn: 'in a wild golden hour prairie on weathered wood with wild flowers and low-angle warm golden sunlight',
    infographicPromptEs: 'callout pins circulares con bordes dorados y líneas de conexión finas hacia la etiqueta',
    infographicPromptEn: 'circular callout pins with gold foil borders and thin connector lines toward label',
    geminiPromptEs: 'Fotografía 4:5 de Vitamina D3 en pradera en hora dorada con callout pins.',
    geminiPromptEn: '4:5 photo of Vitamin D3 in golden hour meadow with callout pins.',
    cleanHeroPromptEs: 'Toma en pradera soleada de Vitamina D3.',
    cleanHeroPromptEn: 'Sunny prairie shot of Vitamin D3.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Frasco ámbar de Vitamina D3 en pradera dorada al atardecer.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Vitamin D3 amber bottle in golden hour sunset meadow.',
    flowScenes: []
  },
  {
    id: 'vitamina-d3-frasco-dark-luxury',
    name: 'Vitamina D3+K2 Frasco (Pizarra Negra & Dark Luxury)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-frasco',
    badgeText: 'Dark Luxury · Pizarra Negra & Rim Light Dorado',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-frasco.jpg',
    headline: 'BIENESTAR CELULAR DE MÁXIMA EXIGENCIA',
    summary: 'Composición de lujo oscuro sobre piedra pizarra negra pulida con reflejos especulares, contraluz dorado perimetral sobre el frasco ámbar y tipografía editorial sobria.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música corporativa tecnológica suave',
    benefits: [
      { title: 'Grado Clínico Premium Certificado', shortDesc: 'Estándar USP verificado por terceros.', iconName: 'sparkles' },
      { title: 'Sinergia Molecular D3 + K2', shortDesc: 'Ratio bioactivo balanceado.', iconName: 'shield' },
      { title: 'Soporte Cardiovascular Avanzado', shortDesc: 'Elasticidad endotelial y arterial.', iconName: 'heart' },
      { title: 'Certificación de Pureza en Laboratorio', shortDesc: 'Test de metales pesados negativo.', iconName: 'leaf' }
    ],
    packagingPromptEs: 'frasco ámbar de Vitamina D3 con tapa dorada con rim light de estudio',
    packagingPromptEn: 'amber Vitamin D3 bottle with gold cap illuminated by studio rim lighting',
    environmentPromptEs: 'sobre losa de piedra pizarra negra oscura con reflejos especulares mínimos y luz perimetral dorada',
    environmentPromptEn: 'on dark black slate slab with subtle specular reflections and gold perimeter rim light',
    infographicPromptEs: 'titulares editoriales sobrios en tipografía serif fina con interletrado amplio en oro blanco',
    infographicPromptEn: 'understated editorial typography in thin serif font with wide kerning in white gold',
    geminiPromptEs: 'Fotografía Dark Luxury de Vitamina D3 sobre pizarra negra con luz de rim light.',
    geminiPromptEn: 'Dark Luxury photo of Vitamin D3 on black slate with rim light.',
    cleanHeroPromptEs: 'Hero shot dark luxury de Vitamina D3.',
    cleanHeroPromptEn: 'Dark luxury hero shot of Vitamin D3.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Frasco ámbar de Vitamina D3 sobre pizarra negra en estudio oscuro.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Vitamin D3 amber bottle on black slate in dark studio.',
    flowScenes: []
  },
  {
    id: 'vitamina-d3-frasco-bambu-zen',
    name: 'Vitamina D3+K2 Frasco (Rincón Zen & Etiquetas Vivas)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-frasco',
    badgeText: 'Rincón Zen · Bambú Natural & Etiquetas Vivas',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-frasco.jpg',
    headline: 'EQUILIBRIO NATURAL Y ARMONÍA INTEGRAL',
    summary: 'Frasco ámbar de Vitamina D3 reposando sobre listones de bambú claro natural junto a hojas verdes frescas y pequeñas etiquetas en papel mate que identifican los activos naturales.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      { title: 'Calcio Bien Dirigido sin Depósitos', shortDesc: 'Protección para corazón y articulaciones.', iconName: 'sparkles' },
      { title: 'Menos Fatiga en Días Nublados', shortDesc: 'Mantén tu energía y vitalidad.', iconName: 'shield' },
      { title: 'Ingredientes Limpios No OGM', shortDesc: 'Sin gluten, soja ni transgénicos.', iconName: 'leaf' },
      { title: 'Frasco Vidrio Ámbar Protección UV', shortDesc: 'Preserva la potencia de la fórmula.', iconName: 'heart' }
    ],
    packagingPromptEs: 'frasco ámbar con perlas doradas suaves descansando a su lado',
    packagingPromptEn: 'amber glass bottle with smooth golden softgels resting next to it',
    environmentPromptEs: 'sobre estera de bambú claro natural con tallos de bambú zen y luz serena de media tarde',
    environmentPromptEn: 'on natural light bamboo mat with zen bamboo stems and serene mid-afternoon sunlight',
    infographicPromptEs: 'etiquetas tipográficas minimalistas en papel mate junto a los ingredientes botánicos',
    infographicPromptEn: 'minimalist typographic labels in matte paper next to botanical ingredients',
    geminiPromptEs: 'Fotografía zen de Vitamina D3 sobre bambú con etiquetas vivas de ingredientes.',
    geminiPromptEn: 'Zen photography of Vitamin D3 on bamboo with live ingredient labels.',
    cleanHeroPromptEs: 'Toma zen de Vitamina D3 en bambú.',
    cleanHeroPromptEn: 'Zen shot of Vitamin D3 on bamboo.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Frasco ámbar de Vitamina D3 sobre bambú zen con etiquetas botánicas.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Vitamin D3 amber bottle on zen bamboo with botanical labels.',
    flowScenes: []
  },

  // --- GRUPO 4: VITAMINA D3 + K2 COMPLEX (STAND-UP POUCH DOYPACK) ---
  {
    id: 'vitamina-d3-pouch-cocina',
    name: 'Vitamina D3+K2 Pouch (Cocina Nórdica & Lino Crudo)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-pouch',
    badgeText: 'Doypack Blanco · Cocina Nórdica & Badges Pill',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-pouch.jpg',
    headline: 'NUTRICIÓN ESENCIAL EN FORMATO PRÁCTICO DOYPACK',
    summary: 'Bolsa stand-up pouch blanca mate resellable de Vitamina D3+K2 sobre una encimera de madera clara y lino en una cocina nórdica luminosa, con 4 badges pill en verde salvia.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música serena y fresca de bienestar',
    benefits: [
      { title: 'Empaque Resellable Hermético', shortDesc: 'Mantiene frescura y potencia intactas.', iconName: 'sparkles' },
      { title: 'Gomitas o Polvo D3+K2 Fácil', shortDesc: 'Agradable y cómodo para el día a día.', iconName: 'shield' },
      { title: 'Absorción Óptima Familiar', shortDesc: 'Dosis equilibrada para todas las edades.', iconName: 'leaf' },
      { title: 'Sin Frascos Pesados: Llévalo Contigo', shortDesc: 'Ideal para viajes y oficina.', iconName: 'heart' }
    ],
    packagingPromptEs: 'bolsa stand-up doypack blanca mate con cierre hermético y etiqueta limpia en tonos tierra y dorado',
    packagingPromptEn: 'matte white stand-up doypack pouch with zipper seal and clean label in earth and gold tones',
    environmentPromptEs: 'sobre encimera de roble nórdico claro con servilleta de lino beige bajo luz matutina fresca',
    environmentPromptEn: 'on light nordic oak kitchen counter with beige linen napkin under fresh morning sunlight',
    infographicPromptEs: '4 badges horizontales estilo pastilla en verde salvia y blanco flotando con los beneficios',
    infographicPromptEn: '4 horizontal pill badges in sage green and white floating with benefits',
    geminiPromptEs: 'Fotografía comercial de Vitamina D3 en bolsa doypack en cocina nórdica con badges pill.',
    geminiPromptEn: 'Commercial photo of Vitamin D3 doypack pouch in nordic kitchen with pill badges.',
    cleanHeroPromptEs: 'Hero shot de doypack de Vitamina D3 en cocina nórdica.',
    cleanHeroPromptEn: 'Hero shot of Vitamin D3 doypack in nordic kitchen.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Clonar fielmente la bolsa pouch de Vitamina D3. Escena en cocina nórdica.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Replicate exact Vitamin D3 pouch in nordic kitchen.',
    flowScenes: []
  },
  {
    id: 'vitamina-d3-pouch-invernadero',
    name: 'Vitamina D3+K2 Pouch (Invernadero Botánico & Helechos 4:5)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-pouch',
    badgeText: 'Doypack Blanco · Invernadero Botánico 4:5',
    aspectRatio: '4:5 Vertical',
    image: '/images/vitamina-pouch.jpg',
    headline: 'ORIGEN BOTÁNICO PURO Y SOSTENIBLE',
    summary: 'Bolsa pouch de Vitamina D3 en plano a 45 grados dentro de un invernadero botánico con helechos húmedos y cristaleras con luz difusa suave y callout pins dorados.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[3].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      { title: 'Ingredientes de Cultivo Limpio', shortDesc: 'Extracción botánica 100% natural.', iconName: 'sparkles' },
      { title: 'Empaque Eco-Responsable Resellable', shortDesc: 'Menor huella de carbono que el vidrio.', iconName: 'shield' },
      { title: 'Refuerzo Diario de Huesos y Dientes', shortDesc: 'Fijación biológica activa de calcio.', iconName: 'heart' },
      { title: 'Alta Retención de Nutrientes Activos', shortDesc: 'Protegido contra luz y humedad.', iconName: 'leaf' }
    ],
    packagingPromptEs: 'bolsa pouch blanca de Vitamina D3 centrada con luz verde translúcida de fondo',
    packagingPromptEn: 'white Vitamin D3 pouch centered with green translucent foliage background',
    environmentPromptEs: 'en pedestal rústico dentro de un invernadero botánico rodeado de helechos y hojas húmedas',
    environmentPromptEn: 'on rustic pedestal inside botanical greenhouse surrounded by ferns and moist leaves',
    infographicPromptEs: 'callout pins circulares con bordes dorados conectados con guías sutiles',
    infographicPromptEn: 'circular callout pins with gold borders connected with subtle guide lines',
    geminiPromptEs: 'Fotografía 4:5 de Vitamina D3 pouch en invernadero con callout pins.',
    geminiPromptEn: '4:5 photo of Vitamin D3 pouch in greenhouse with callout pins.',
    cleanHeroPromptEs: 'Toma botánica en invernadero de Vitamina D3 pouch.',
    cleanHeroPromptEn: 'Botanical shot in greenhouse of Vitamin D3 pouch.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Bolsa pouch blanca de Vitamina D3 en invernadero botánico con callout pins.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: White Vitamin D3 pouch in botanical greenhouse with callout pins.',
    flowScenes: []
  },
  {
    id: 'vitamina-d3-pouch-salar-minimal',
    name: 'Vitamina D3+K2 Pouch (Salar Minimal & Cielo Abierto)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-pouch',
    badgeText: 'Hero Shot · Desierto de Sal Minimalista',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-pouch.jpg',
    headline: 'SIMPLICIDAD, PUREZA Y MÁXIMO IMPACTO VISUAL',
    summary: 'Hero shot impactante y minimalista: la bolsa pouch blanca destaca en contrapicado sobre suelo blanco de sal cristalina hexagonal bajo un cielo azul profundo y despejado.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música ambiental suave y minimalista',
    benefits: [
      { title: 'Claridad y Transparencia en la Fórmula', shortDesc: 'Etiqueta limpia sin letra pequeña.', iconName: 'sparkles' },
      { title: 'Libre de Químicos y Conservantes', shortDesc: 'Pureza absoluta grado clínico.', iconName: 'shield' },
      { title: 'Dosificación Precisa Garantizada', shortDesc: 'Concentración exacta por porción.', iconName: 'leaf' },
      { title: 'Estética Blanca y Luminosa', shortDesc: 'Diseño prémium para tu bienestar.', iconName: 'heart' }
    ],
    packagingPromptEs: 'bolsa pouch blanca de Vitamina D3 erguida con máxima nitidez',
    packagingPromptEn: 'white Vitamin D3 pouch standing tall with razor-sharp crispness',
    environmentPromptEs: 'sobre el suelo blanco resplandeciente de un salar con patrones poligonales bajo cielo azul diáfano',
    environmentPromptEn: 'on the brilliant white crust of a salt flat with polygonal patterns under open azure blue sky',
    infographicPromptEs: 'sin elementos gráficos flotantes, composición pura de alto impacto visual',
    infographicPromptEn: 'no floating graphic elements, pure high-impact visual composition',
    geminiPromptEs: 'Hero shot minimalista de Vitamina D3 pouch en desierto de sal blanco.',
    geminiPromptEn: 'Minimalist hero shot of Vitamin D3 pouch on white salt flat.',
    cleanHeroPromptEs: 'Hero shot de Vitamina D3 en salar.',
    cleanHeroPromptEn: 'Hero shot of Vitamin D3 on salt flat.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Bolsa pouch de Vitamina D3 en salar blanco sin textos flotantes.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: Vitamin D3 pouch on white salt flat without floating text.',
    flowScenes: []
  },
  {
    id: 'vitamina-d3-pouch-color-block',
    name: 'Vitamina D3+K2 Pouch (Color Block Pastel DTC 9:16)',
    brand: 'Solaris Botanicals',
    category: 'Inmunidad y Huesos',
    categoryId: 'vitamina-pouch',
    badgeText: 'Color Block Pastel · Campaña DTC Reels 9:16',
    aspectRatio: '9:16 Vertical',
    image: '/images/vitamina-pouch.jpg',
    headline: 'EL SUPLEMENTO MODERNO QUE TU CUERPO ADORA',
    summary: 'Campaña publicitaria DTC en formato 9:16 con podios cilíndricos en tonos pastel menta y melocotón, sombras gráficas suaves y badges pill modernos listos para Reels y TikTok.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música dinámica de alta energía positiva',
    benefits: [
      { title: 'Formato Friendly para Redes Sociales', shortDesc: 'Look and feel fresco y viral.', iconName: 'sparkles' },
      { title: 'Sabor Delicioso sin Culpas', shortDesc: 'Gomitas veganas con aroma natural.', iconName: 'shield' },
      { title: 'Resultados Visibles en 30 Días', shortDesc: 'Vitalidad, cabello y uñas fuertes.', iconName: 'leaf' },
      { title: 'Fácil de Incorporar en tu Rutina', shortDesc: 'Un toque de color y salud diaria.', iconName: 'heart' }
    ],
    packagingPromptEs: 'bolsa pouch blanca de Vitamina D3 sobre podio cilíndrico color menta pastel',
    packagingPromptEn: 'white Vitamin D3 pouch resting on pastel mint cylinder podium',
    environmentPromptEs: 'estudio con podios geométricos pastel melocotón y menta con sombras suaves y estética DTC moderna',
    environmentPromptEn: 'studio with geometric pastel peach and mint podiums with crisp soft shadows and modern DTC aesthetics',
    infographicPromptEs: 'badges pill vibrantes con tipografía geométrica bold flotando en las zonas superior e inferior 9:16',
    infographicPromptEn: 'vibrant pill badges with bold geometric typography floating in 9:16 vertical format',
    geminiPromptEs: 'Fotografía publicitaria 9:16 de Vitamina D3 pouch en estudio color block pastel.',
    geminiPromptEn: '9:16 commercial advertising photo of Vitamin D3 pouch in pastel color block studio.',
    cleanHeroPromptEs: 'Toma vertical 9:16 de Vitamina D3 en estudio pastel.',
    cleanHeroPromptEn: '9:16 vertical shot of Vitamin D3 in pastel studio.',
    masterFlowPromptEs: '[FOTO DE REFERENCIA]: Bolsa pouch blanca de Vitamina D3 en estudio color block pastel para Reels 9:16.',
    masterFlowPromptEn: '[REFERENCE PHOTO]: White Vitamin D3 pouch in pastel color block studio for 9:16 Reels.',
    flowScenes: []
  }
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
