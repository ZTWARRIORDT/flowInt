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
  {
    id: 'colageno-magnesio',
    name: 'Colágeno + Magnesio Botánico',
    brand: 'Botanical Wellness Lab',
    category: 'Articulaciones, Piel y Energía',
    categoryId: 'suplementos',
    badgeText: 'Frasco Ámbar · Fotografía en Bosque',
    aspectRatio: '1:1 Estudio',
    image: '/images/colageno-magnesio.jpg',
    headline: 'ARTICULACIONES FUERTES, PIEL FIRME Y ENERGÍA',
    summary: 'Frasco de vidrio ámbar farmacéutico con tapa dorada metálica sobre madera húmeda en bosque soleado, rodeado de softgels doradas y helechos frescos.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Piel y Cabello Radiante',
            shortDesc: 'Devuelve elasticidad, firmeza e hidratación a la piel.',
            iconName: 'sparkles'
      },
      {
            title: 'Articulaciones sin Dolor',
            shortDesc: 'Regenera el cartílago y mejora la movilidad articular.',
            iconName: 'activity'
      },
      {
            title: 'Músculos Fuertes',
            shortDesc: 'El magnesio previene calambres y acelera la recuperación.',
            iconName: 'zap'
      },
      {
            title: 'Energía Celular Diaria',
            shortDesc: 'Reduce el cansancio crónico y mejora el descanso nocturno.',
            iconName: 'sun'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Colágeno + Magnesio Botánico": en el centro destaca el producto posado sobre madera natural húmeda con musgo verde en bosque soleado. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Colágeno + Magnesio Botánico": centered product resting on madera natural húmeda con musgo verde en bosque soleado. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Colágeno + Magnesio Botánico" posado sobre madera natural húmeda con musgo verde en bosque soleado, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Colágeno + Magnesio Botánico" resting on madera natural húmeda con musgo verde en bosque soleado, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Colágeno + Magnesio Botánico" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "¿Buscas articulaciones fuertes, piel firme y energía? Prueba Colágeno + Magnesio Botánico. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Colágeno + Magnesio Botánico" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "¿Buscas articulaciones fuertes, piel firme y energía? Prueba Colágeno + Magnesio Botánico. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Colágeno + Magnesio Botánico" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Colágeno + Magnesio Botánico". Container remains static. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Piel y Cabello Radiante y Articulaciones sin Dolor. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "Piel y Cabello Radiante y Articulaciones sin Dolor desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Piel y Cabello Radiante. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "Piel y Cabello Radiante y Articulaciones sin Dolor desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Músculos Fuertes."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Músculos Fuertes."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'uro-cranberry-probioticos',
    name: 'URO Cranberry Probióticos (Bolsa Rosa)',
    brand: 'URO Natural Health',
    category: 'Salud Femenina, Digestiva e Íntima',
    categoryId: 'doypack',
    badgeText: 'Bolsa Doypack · Arena Zen 9:16',
    aspectRatio: '9:16 Vertical',
    image: '/images/uro-poster.jpg',
    headline: 'SALUD DIGESTIVA Y URINARIA · BIENESTAR FEMENINO',
    summary: 'Bolsa stand-up pouch rosa suave mate sobre pedestal minimalista de arena zen clara con microgotas de agua fresca y medallones 3D dorados.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Flora Intestinal Fuerte',
            shortDesc: 'Millones de cultivos probióticos para aliviar la inflamación.',
            iconName: 'shield'
      },
      {
            title: 'Protección Urinaria con Arándano',
            shortDesc: 'Extracto concentrado de cranberry para defensa íntima.',
            iconName: 'droplets'
      },
      {
            title: 'Extracto de Orégano Botánico',
            shortDesc: 'Defensa antimicrobiana natural para el microbioma.',
            iconName: 'leaf'
      },
      {
            title: 'Prebióticos Activos',
            shortDesc: 'Nutrición directa para las bacterias saludables.',
            iconName: 'sparkles'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "URO Cranberry Probióticos (Bolsa Rosa)": en el centro destaca el producto posado sobre pedestal minimalista de arena zen fina color crema con piedras calizas blancas. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "URO Cranberry Probióticos (Bolsa Rosa)": centered product resting on pedestal minimalista de arena zen fina color crema con piedras calizas blancas. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "URO Cranberry Probióticos (Bolsa Rosa)" posado sobre pedestal minimalista de arena zen fina color crema con piedras calizas blancas, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "URO Cranberry Probióticos (Bolsa Rosa)" resting on pedestal minimalista de arena zen fina color crema con piedras calizas blancas, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "URO Cranberry Probióticos (Bolsa Rosa)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Buscas salud digestiva y urinaria · bienestar femenino? Prueba URO Cranberry Probióticos (Bolsa Rosa). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "URO Cranberry Probióticos (Bolsa Rosa)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Buscas salud digestiva y urinaria · bienestar femenino? Prueba URO Cranberry Probióticos (Bolsa Rosa). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "URO Cranberry Probióticos (Bolsa Rosa)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "URO Cranberry Probióticos (Bolsa Rosa)". Container remains static. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Flora Intestinal Fuerte y Protección Urinaria con Arándano. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Flora Intestinal Fuerte y Protección Urinaria con Arándano desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Flora Intestinal Fuerte. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Flora Intestinal Fuerte y Protección Urinaria con Arándano desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Extracto de Orégano Botánico."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Extracto de Orégano Botánico."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'glucosamina-condroitina-msm',
    name: 'Glucosamina + Condroitina + MSM 1500mg',
    brand: 'Mobility BioHealth',
    category: 'Movilidad, Cartílago y Flexibilidad',
    categoryId: 'suplementos',
    badgeText: 'Póster Clínico · 4 Medallones 3D',
    aspectRatio: '1:1 Estudio',
    image: '/images/glucosamina-hero.jpg',
    headline: 'ARTICULACIONES MÁS FUERTES · MUÉVETE SIN LÍMITES',
    summary: 'Frasco blanco y azul sobre podio reflectante con halo azul de estudio y 4 medallones metálicos 3D con iconos grabados de rodilla, cartílago y MSM.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Regeneración de Cartílago',
            shortDesc: 'La condroitina restaura la amortiguación articular.',
            iconName: 'shield'
      },
      {
            title: 'Flexibilidad sin Dolor',
            shortDesc: 'Glucosamina pura para lubricar y eliminar rigidez.',
            iconName: 'activity'
      },
      {
            title: 'Alivio con Cúrcuma & MSM',
            shortDesc: 'Sinergia antiinflamatoria de rápida acción articular.',
            iconName: 'flame'
      },
      {
            title: 'Fuerza Muscular y Ósea',
            shortDesc: 'Refuerza tendones y previene el desgaste físico diario.',
            iconName: 'zap'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Glucosamina + Condroitina + MSM 1500mg": en el centro destaca el producto posado sobre podio reflectante con suave halo circular de estudio sobre cuarzo blanco. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Glucosamina + Condroitina + MSM 1500mg": centered product resting on podio reflectante con suave halo circular de estudio sobre cuarzo blanco. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Glucosamina + Condroitina + MSM 1500mg" posado sobre podio reflectante con suave halo circular de estudio sobre cuarzo blanco, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Glucosamina + Condroitina + MSM 1500mg" resting on podio reflectante con suave halo circular de estudio sobre cuarzo blanco, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Glucosamina + Condroitina + MSM 1500mg" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Buscas articulaciones más fuertes · muévete sin límites? Prueba Glucosamina + Condroitina + MSM 1500mg. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Glucosamina + Condroitina + MSM 1500mg" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Buscas articulaciones más fuertes · muévete sin límites? Prueba Glucosamina + Condroitina + MSM 1500mg. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Glucosamina + Condroitina + MSM 1500mg" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Glucosamina + Condroitina + MSM 1500mg". Container remains static. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Regeneración de Cartílago y Flexibilidad sin Dolor. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Regeneración de Cartílago y Flexibilidad sin Dolor desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Regeneración de Cartílago. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Regeneración de Cartílago y Flexibilidad sin Dolor desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Alivio con Cúrcuma & MSM."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Alivio con Cúrcuma & MSM."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'vitamina-d3-k2-frasco',
    name: 'Vitamina D3 + K2 Complex (Frasco Ámbar)',
    brand: 'Botanical Labs D3+K2',
    category: 'Huesos, Corazón y Defensas Inmunes',
    categoryId: 'suplementos',
    badgeText: 'Frasco Ámbar · Softgels en Bosque',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-frasco.jpg',
    headline: 'ABSORCIÓN ÓSEA PERFECTA Y DEFENSAS ALTAS',
    summary: 'Frasco de vidrio ámbar con tapa dorada y softgels derramadas sobre madera rústica en bosque con rayos de sol matutinos y follaje verde.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Fijación de Calcio Óseo',
            shortDesc: 'La K2 dirige el calcio a los huesos evitando la calcificación arterial.',
            iconName: 'shield'
      },
      {
            title: 'Inmunidad Reforzada',
            shortDesc: 'La Vitamina D3 activa las defensas y energía vital diaria.',
            iconName: 'sun'
      },
      {
            title: 'Softgels de Aceite de Coco',
            shortDesc: 'Fórmula oleosa virgen para máxima absorción biológica.',
            iconName: 'droplets'
      },
      {
            title: 'Salud Cardiovascular',
            shortDesc: 'Mantiene las arterias elásticas y apoya el corazón.',
            iconName: 'heart'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Vitamina D3 + K2 Complex (Frasco Ámbar)": en el centro destaca el producto posado sobre madera rústica húmeda con hojas de eucalipto bajo sol matutino. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Vitamina D3 + K2 Complex (Frasco Ámbar)": centered product resting on madera rústica húmeda con hojas de eucalipto bajo sol matutino. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Vitamina D3 + K2 Complex (Frasco Ámbar)" posado sobre madera rústica húmeda con hojas de eucalipto bajo sol matutino, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Vitamina D3 + K2 Complex (Frasco Ámbar)" resting on madera rústica húmeda con hojas de eucalipto bajo sol matutino, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Vitamina D3 + K2 Complex (Frasco Ámbar)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "¿Buscas absorción ósea perfecta y defensas altas? Prueba Vitamina D3 + K2 Complex (Frasco Ámbar). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Vitamina D3 + K2 Complex (Frasco Ámbar)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "¿Buscas absorción ósea perfecta y defensas altas? Prueba Vitamina D3 + K2 Complex (Frasco Ámbar). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Vitamina D3 + K2 Complex (Frasco Ámbar)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Vitamina D3 + K2 Complex (Frasco Ámbar)". Container remains static. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Fijación de Calcio Óseo y Inmunidad Reforzada. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "Fijación de Calcio Óseo y Inmunidad Reforzada desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Fijación de Calcio Óseo. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "Fijación de Calcio Óseo y Inmunidad Reforzada desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Softgels de Aceite de Coco."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Softgels de Aceite de Coco."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'vitamina-d3-k2-pouch',
    name: 'Vitamina D3 + K2 Complex (Stand-up Pouch)',
    brand: 'Botanical Labs D3+K2',
    category: 'Doypack Práctico · Minerales y Vitaminas',
    categoryId: 'doypack',
    badgeText: 'Bolsa Blanca Doypack · Roble Claro',
    aspectRatio: '1:1 Estudio',
    image: '/images/vitamina-pouch.jpg',
    headline: 'HUESOS FUERTES, CORAZÓN SANO Y VITALIDAD',
    summary: 'Bolsa stand-up pouch blanca satinada sobre mesa de roble claro con hojas frescas y medallones 3D dorados para huesos, corazón y energía.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Huesos y Dientes Fuertes',
            shortDesc: 'Máxima mineralización con biodisponibilidad superior.',
            iconName: 'shield'
      },
      {
            title: 'Protección Vascular',
            shortDesc: 'Mantiene el flujo sanguíneo óptimo y arterias limpias.',
            iconName: 'heart'
      },
      {
            title: 'Defensas al Máximo',
            shortDesc: 'Refuerza la respuesta inmune frente a cambios de estación.',
            iconName: 'sun'
      },
      {
            title: 'Formato Doypack Práctico',
            shortDesc: 'Cierre hermético que conserva la frescura de los ingredientes.',
            iconName: 'zap'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Vitamina D3 + K2 Complex (Stand-up Pouch)": en el centro destaca el producto posado sobre encimera limpia de roble claro y mármol blanco en cocina contemporánea. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Vitamina D3 + K2 Complex (Stand-up Pouch)": centered product resting on encimera limpia de roble claro y mármol blanco en cocina contemporánea. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Vitamina D3 + K2 Complex (Stand-up Pouch)" posado sobre encimera limpia de roble claro y mármol blanco en cocina contemporánea, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Vitamina D3 + K2 Complex (Stand-up Pouch)" resting on encimera limpia de roble claro y mármol blanco en cocina contemporánea, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Vitamina D3 + K2 Complex (Stand-up Pouch)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Buscas huesos fuertes, corazón sano y vitalidad? Prueba Vitamina D3 + K2 Complex (Stand-up Pouch). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Vitamina D3 + K2 Complex (Stand-up Pouch)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Buscas huesos fuertes, corazón sano y vitalidad? Prueba Vitamina D3 + K2 Complex (Stand-up Pouch). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Vitamina D3 + K2 Complex (Stand-up Pouch)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Vitamina D3 + K2 Complex (Stand-up Pouch)". Container remains static. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Huesos y Dientes Fuertes y Protección Vascular. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Huesos y Dientes Fuertes y Protección Vascular desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Huesos y Dientes Fuertes. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Huesos y Dientes Fuertes y Protección Vascular desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Defensas al Máximo."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Defensas al Máximo."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'uro-macro-textura',
    name: 'URO Macro 100mm (Ultra Detalle Textura)',
    brand: 'URO Natural Health',
    category: 'Macro Textura 100mm, Gotas y Relieve',
    categoryId: 'doypack',
    badgeText: 'Macro 100mm f/2.8 · Detalle 8K',
    aspectRatio: '1:1 Estudio',
    image: '/images/uro-macro.jpg',
    headline: 'TEXTURA MICROSCÓPICA, LOGO EN RELIEVE Y ROCÍO',
    summary: 'Toma macro extrema a escasos centímetros enfocada en el relieve auténtico del logo URO, grano táctil mate y microgotas de condensación fresca.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Relieve Táctil Auténtico',
            shortDesc: 'Detalle microscópico del logotipo sin alteración tipográfica.',
            iconName: 'target'
      },
      {
            title: 'Gotas de Rocío Fresco',
            shortDesc: 'Microgotas de condensación hiperrealistas en superficie mate.',
            iconName: 'droplets'
      },
      {
            title: 'Rosa Suave Mate Protegido',
            shortDesc: 'Color auténtico original sin tintes extraños.',
            iconName: 'sparkles'
      },
      {
            title: 'Nitidez Óptica 100mm',
            shortDesc: 'Profundidad de campo f/2.8 con bokeh suave y cremoso.',
            iconName: 'eye'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "URO Macro 100mm (Ultra Detalle Textura)": en el centro destaca el producto posado sobre primerísimo plano microscópico sobre el envase con desenfoque de arena zen. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "URO Macro 100mm (Ultra Detalle Textura)": centered product resting on primerísimo plano microscópico sobre el envase con desenfoque de arena zen. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "URO Macro 100mm (Ultra Detalle Textura)" posado sobre primerísimo plano microscópico sobre el envase con desenfoque de arena zen, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "URO Macro 100mm (Ultra Detalle Textura)" resting on primerísimo plano microscópico sobre el envase con desenfoque de arena zen, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "URO Macro 100mm (Ultra Detalle Textura)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Buscas textura microscópica, logo en relieve y rocío? Prueba URO Macro 100mm (Ultra Detalle Textura). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "URO Macro 100mm (Ultra Detalle Textura)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Buscas textura microscópica, logo en relieve y rocío? Prueba URO Macro 100mm (Ultra Detalle Textura). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "URO Macro 100mm (Ultra Detalle Textura)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "URO Macro 100mm (Ultra Detalle Textura)". Container remains static. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Relieve Táctil Auténtico y Gotas de Rocío Fresco. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Relieve Táctil Auténtico y Gotas de Rocío Fresco desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Relieve Táctil Auténtico. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Relieve Táctil Auténtico y Gotas de Rocío Fresco desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Rosa Suave Mate Protegido."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Rosa Suave Mate Protegido."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'curcuma-ashwagandha',
    name: 'Cúrcuma + Jengibre Natural Vitae',
    brand: 'Natural Vitae',
    category: 'Antiinflamatorio y Articular',
    categoryId: 'suplementos',
    badgeText: 'Explosión de Polvo 120fps · Pizarra Negra',
    aspectRatio: '1:1 Estudio',
    image: '/images/curcuma-ashwagandha.jpg',
    headline: 'DESINFLAMA TUS ARTICULACIONES CON PODER NATURAL',
    summary: 'Frasco ámbar con etiqueta mostaza y tapa negra sobre pizarra húmeda con explosión de polvo dorado de cúrcuma iluminada a contraluz.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Desinflama Articulaciones',
            shortDesc: 'Alivia el dolor e inflamación en rodillas, manos y espalda.',
            iconName: 'flame'
      },
      {
            title: 'Movilidad sin Rigidez',
            shortDesc: 'Recupera la flexibilidad al despertar y al caminar.',
            iconName: 'activity'
      },
      {
            title: 'Antioxidante Celular',
            shortDesc: 'Neutraliza radicales libres y protege los tejidos.',
            iconName: 'shield'
      },
      {
            title: 'Bienestar Digestivo',
            shortDesc: 'El jengibre puro mejora la digestión y absorción de cúrcuma.',
            iconName: 'leaf'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Cúrcuma + Jengibre Natural Vitae": en el centro destaca el producto posado sobre pizarra negra húmeda con reflejos oscuros y nube de polvo botánico. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Cúrcuma + Jengibre Natural Vitae": centered product resting on pizarra negra húmeda con reflejos oscuros y nube de polvo botánico. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Cúrcuma + Jengibre Natural Vitae" posado sobre pizarra negra húmeda con reflejos oscuros y nube de polvo botánico, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Cúrcuma + Jengibre Natural Vitae" resting on pizarra negra húmeda con reflejos oscuros y nube de polvo botánico, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Cúrcuma + Jengibre Natural Vitae" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Buscas desinflama tus articulaciones con poder natural? Prueba Cúrcuma + Jengibre Natural Vitae. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Cúrcuma + Jengibre Natural Vitae" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Buscas desinflama tus articulaciones con poder natural? Prueba Cúrcuma + Jengibre Natural Vitae. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Cúrcuma + Jengibre Natural Vitae" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Cúrcuma + Jengibre Natural Vitae". Container remains static. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Desinflama Articulaciones y Movilidad sin Rigidez. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Desinflama Articulaciones y Movilidad sin Rigidez desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Desinflama Articulaciones. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Desinflama Articulaciones y Movilidad sin Rigidez desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Antioxidante Celular."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Antioxidante Celular."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'clorofila-matcha',
    name: 'Clorofila Líquida + Menta Detox',
    brand: 'Botanical Detox Lab',
    category: 'Detox, Digestión y Alcalinidad',
    categoryId: 'goteros',
    badgeText: 'Gotero Ámbar · Splash en Agua Zen',
    aspectRatio: '1:1 Estudio',
    image: '/images/clorofila-matcha.jpg',
    headline: 'OXIGENACIÓN CELULAR, ALIENTO FRESCO Y DETOX',
    summary: 'Frasco gotero de vidrio ámbar sobre roca de río emergiendo de un espejo de agua cristalina con splash congelado a alta velocidad.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Oxigenación Celular',
            shortDesc: 'Estructura molecular similar a la hemoglobina para depurar.',
            iconName: 'droplets'
      },
      {
            title: 'Aliento Fresco Natural',
            shortDesc: 'La menta piperita desodoriza desde el tracto digestivo.',
            iconName: 'leaf'
      },
      {
            title: 'Elimina Toxinas Diarias',
            shortDesc: 'Apoya la función hepática y el tránsito intestinal ligero.',
            iconName: 'shield'
      },
      {
            title: 'Energía Matutina Pura',
            shortDesc: 'Aumenta la vitalidad sin cafeína ni taquicardia.',
            iconName: 'zap'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Clorofila Líquida + Menta Detox": en el centro destaca el producto posado sobre piedra plana de río emergiendo de un espejo de agua con reflejos cáusticos. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Clorofila Líquida + Menta Detox": centered product resting on piedra plana de río emergiendo de un espejo de agua con reflejos cáusticos. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Clorofila Líquida + Menta Detox" posado sobre piedra plana de río emergiendo de un espejo de agua con reflejos cáusticos, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Clorofila Líquida + Menta Detox" resting on piedra plana de río emergiendo de un espejo de agua con reflejos cáusticos, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Clorofila Líquida + Menta Detox" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Buscas oxigenación celular, aliento fresco y detox? Prueba Clorofila Líquida + Menta Detox. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Clorofila Líquida + Menta Detox" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Buscas oxigenación celular, aliento fresco y detox? Prueba Clorofila Líquida + Menta Detox. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Clorofila Líquida + Menta Detox" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Clorofila Líquida + Menta Detox". Container remains static. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Oxigenación Celular y Aliento Fresco Natural. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Oxigenación Celular y Aliento Fresco Natural desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Oxigenación Celular. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Oxigenación Celular y Aliento Fresco Natural desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Elimina Toxinas Diarias."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Elimina Toxinas Diarias."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'serum-botanico',
    name: 'Sérum Rosa Mosqueta & Oro 24K',
    brand: 'Aura Botánica Skincare',
    category: 'Cosmética Facial y Regeneración Celular',
    categoryId: 'goteros',
    badgeText: 'Gotero de Lujo · Mármol Calacatta',
    aspectRatio: '1:1 Estudio',
    image: '/images/serum-botanico.jpg',
    headline: 'REJUVENECE, HIDRATA Y DEVUELVE EL BRILLO NATURAL',
    summary: 'Frasco gotero de vidrio esmerilado translúcido con pipeta de oro sobre mármol Calacatta blanco con gota suspendida a punto de caer.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Efecto Tensor y Firmeza',
            shortDesc: 'Estimula la producción de colágeno y elastina natural.',
            iconName: 'sparkles'
      },
      {
            title: 'Atenúa Manchas y Líneas',
            shortDesc: 'Rosa mosqueta prensada en frío con ácido retinoico natural.',
            iconName: 'eye'
      },
      {
            title: 'Hidratación con Tacto Seco',
            shortDesc: 'Nutre profundamente la barrera cutánea sin sensación grasa.',
            iconName: 'droplets'
      },
      {
            title: 'Luminosidad con Oro 24K',
            shortDesc: 'Partículas de oro micronizadas para un resplandor inmediato.',
            iconName: 'sun'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Sérum Rosa Mosqueta & Oro 24K": en el centro destaca el producto posado sobre losa pulida de mármol blanco Calacatta con vetas doradas en tocador de lujo. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Sérum Rosa Mosqueta & Oro 24K": centered product resting on losa pulida de mármol blanco Calacatta con vetas doradas en tocador de lujo. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Sérum Rosa Mosqueta & Oro 24K" posado sobre losa pulida de mármol blanco Calacatta con vetas doradas en tocador de lujo, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Sérum Rosa Mosqueta & Oro 24K" resting on losa pulida de mármol blanco Calacatta con vetas doradas en tocador de lujo, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Sérum Rosa Mosqueta & Oro 24K" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Buscas rejuvenece, hidrata y devuelve el brillo natural? Prueba Sérum Rosa Mosqueta & Oro 24K. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Sérum Rosa Mosqueta & Oro 24K" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Buscas rejuvenece, hidrata y devuelve el brillo natural? Prueba Sérum Rosa Mosqueta & Oro 24K. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Sérum Rosa Mosqueta & Oro 24K" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Sérum Rosa Mosqueta & Oro 24K". Container remains static. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Efecto Tensor y Firmeza y Atenúa Manchas y Líneas. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Efecto Tensor y Firmeza y Atenúa Manchas y Líneas desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Efecto Tensor y Firmeza. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Efecto Tensor y Firmeza y Atenúa Manchas y Líneas desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Hidratación con Tacto Seco."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Hidratación con Tacto Seco."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'miel-propoleo',
    name: 'Miel Cruda de Bosque con Propóleo & Jalea Real',
    brand: 'Apicultura de Bosque',
    category: 'Miel Pura, Defensas e Inmunidad',
    categoryId: 'tarros',
    badgeText: 'Tarro Hexagonal · Prado al Atardecer',
    aspectRatio: '1:1 Estudio',
    image: '/images/miel-propoleo.jpg',
    headline: 'DEFENSAS INVIOLABLES Y ENERGÍA PURA DE LA COLMENA',
    summary: 'Tarro de cristal hexagonal artesanal con miel dorada espesa sobre madera de cedro en un prado con espigas al atardecer y cuchara de madera.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[3].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Defensa Antibacteriana',
            shortDesc: 'El propóleo crea una barrera natural contra virus y bacterias.',
            iconName: 'shield'
      },
      {
            title: 'Suaviza la Garganta',
            shortDesc: 'Alivio instantáneo de irritación, tos y carraspera.',
            iconName: 'droplets'
      },
      {
            title: 'Energía Celular Completa',
            shortDesc: 'La jalea real aporta vitaminas del complejo B y vitalidad.',
            iconName: 'zap'
      },
      {
            title: '100% Cruda y Pura',
            shortDesc: 'Cosechada artesanalmente sin calentar ni pasteurizar.',
            iconName: 'award'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Miel Cruda de Bosque con Propóleo & Jalea Real": en el centro destaca el producto posado sobre mesa de cedro natural en un prado al atardecer rodeado de espigas y flores silvestres. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Miel Cruda de Bosque con Propóleo & Jalea Real": centered product resting on mesa de cedro natural en un prado al atardecer rodeado de espigas y flores silvestres. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Miel Cruda de Bosque con Propóleo & Jalea Real" posado sobre mesa de cedro natural en un prado al atardecer rodeado de espigas y flores silvestres, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Miel Cruda de Bosque con Propóleo & Jalea Real" resting on mesa de cedro natural en un prado al atardecer rodeado de espigas y flores silvestres, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Miel Cruda de Bosque con Propóleo & Jalea Real" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "¿Buscas defensas inviolables y energía pura de la colmena? Prueba Miel Cruda de Bosque con Propóleo & Jalea Real. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Miel Cruda de Bosque con Propóleo & Jalea Real" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "¿Buscas defensas inviolables y energía pura de la colmena? Prueba Miel Cruda de Bosque con Propóleo & Jalea Real. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Miel Cruda de Bosque con Propóleo & Jalea Real" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Miel Cruda de Bosque con Propóleo & Jalea Real". Container remains static. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Defensa Antibacteriana y Suaviza la Garganta. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "Defensa Antibacteriana y Suaviza la Garganta desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Defensa Antibacteriana. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "Defensa Antibacteriana y Suaviza la Garganta desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Energía Celular Completa."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Energía Celular Completa."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'propoleo-spray',
    name: 'Spray Propóleo Puro Garganta + Equinácea',
    brand: 'Apicultura de Bosque',
    category: 'Vías Respiratorias y Garganta',
    categoryId: 'sprays',
    badgeText: 'Spray Atomizador · Botica Tradicional',
    aspectRatio: '1:1 Estudio',
    image: '/images/pkg-spray-box.jpg',
    headline: 'ALIVIO INMEDIATO Y DEFENSA NATURAL PARA TU VOZ',
    summary: 'Frasco ámbar con boquilla atomizadora y nube de bruma en suspensión iluminada a contraluz sobre mostrador de roble de botica con lavanda.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Alivio Rápido de Garganta',
            shortDesc: 'Calma la irritación y resequedad con atomización directa.',
            iconName: 'droplets'
      },
      {
            title: 'Acción Antiséptica Botánica',
            shortDesc: 'El propóleo puro combate bacterias en la cavidad bucal.',
            iconName: 'shield'
      },
      {
            title: 'Frescura con Eucalipto y Menta',
            shortDesc: 'Despeja las vías respiratorias superiores al instante.',
            iconName: 'leaf'
      },
      {
            title: 'Voz Clara sin Carraspera',
            shortDesc: 'Ideal para conferencistas, cantantes y uso en cambios de clima.',
            iconName: 'sparkles'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Spray Propóleo Puro Garganta + Equinácea": en el centro destaca el producto posado sobre mostrador de roble oscuro en botica tradicional con ramilletes de lavanda seca. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Spray Propóleo Puro Garganta + Equinácea": centered product resting on mostrador de roble oscuro en botica tradicional con ramilletes de lavanda seca. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Spray Propóleo Puro Garganta + Equinácea" posado sobre mostrador de roble oscuro en botica tradicional con ramilletes de lavanda seca, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Spray Propóleo Puro Garganta + Equinácea" resting on mostrador de roble oscuro en botica tradicional con ramilletes de lavanda seca, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Spray Propóleo Puro Garganta + Equinácea" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Buscas alivio inmediato y defensa natural para tu voz? Prueba Spray Propóleo Puro Garganta + Equinácea. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Spray Propóleo Puro Garganta + Equinácea" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Buscas alivio inmediato y defensa natural para tu voz? Prueba Spray Propóleo Puro Garganta + Equinácea. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Spray Propóleo Puro Garganta + Equinácea" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Spray Propóleo Puro Garganta + Equinácea". Container remains static. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Alivio Rápido de Garganta y Acción Antiséptica Botánica. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Alivio Rápido de Garganta y Acción Antiséptica Botánica desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Alivio Rápido de Garganta. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Alivio Rápido de Garganta y Acción Antiséptica Botánica desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Frescura con Eucalipto y Menta."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Frescura con Eucalipto y Menta."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'proteina-vegana-tub',
    name: 'Proteína Vegana Vainilla 1kg (Tub)',
    brand: 'Pure Plant Lab',
    category: 'Nutrición Deportiva y Masa Magra',
    categoryId: 'polvos',
    badgeText: 'Bote Cilíndrico 1kg · Cocina Nórdica',
    aspectRatio: '1:1 Estudio',
    image: '/images/pkg-supplement-jar.jpg',
    headline: 'MASA MUSCULAR MAGRA, FÁCIL DIGESTIÓN Y SACIEDAD',
    summary: 'Bote cilíndrico grande negro mate con etiqueta beige y scoop dosificador con polvo de vainilla sobre encimera de roble claro y mármol blanco.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[1].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: '25g de Proteína por Porción',
            shortDesc: 'Aislado de guisante y sacha inchi con perfil completo de aminoácidos.',
            iconName: 'zap'
      },
      {
            title: 'Cero Inflamación y sin Lácteos',
            shortDesc: 'Digestión ligera y sin pesadez estomacal post-entreno.',
            iconName: 'shield'
      },
      {
            title: 'BCAA para Recuperación',
            shortDesc: 'Acelera la reconstrucción de fibras musculares sin dolor.',
            iconName: 'activity'
      },
      {
            title: 'Sabor Vainilla Natural',
            shortDesc: 'Endulzada con extracto de hoja de stevia sin azúcares añadidos.',
            iconName: 'leaf'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Proteína Vegana Vainilla 1kg (Tub)": en el centro destaca el producto posado sobre encimera limpia de roble claro y mármol blanco mate en cocina nórdica. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Proteína Vegana Vainilla 1kg (Tub)": centered product resting on encimera limpia de roble claro y mármol blanco mate en cocina nórdica. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Proteína Vegana Vainilla 1kg (Tub)" posado sobre encimera limpia de roble claro y mármol blanco mate en cocina nórdica, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Proteína Vegana Vainilla 1kg (Tub)" resting on encimera limpia de roble claro y mármol blanco mate en cocina nórdica, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Proteína Vegana Vainilla 1kg (Tub)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Buscas masa muscular magra, fácil digestión y saciedad? Prueba Proteína Vegana Vainilla 1kg (Tub). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Proteína Vegana Vainilla 1kg (Tub)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Buscas masa muscular magra, fácil digestión y saciedad? Prueba Proteína Vegana Vainilla 1kg (Tub). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Proteína Vegana Vainilla 1kg (Tub)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Proteína Vegana Vainilla 1kg (Tub)". Container remains static. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando 25g de Proteína por Porción y Cero Inflamación y sin Lácteos. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "25g de Proteína por Porción y Cero Inflamación y sin Lácteos desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting 25g de Proteína por Porción. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "25g de Proteína por Porción y Cero Inflamación y sin Lácteos desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con BCAA para Recuperación."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con BCAA para Recuperación."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[1].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[1].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'matcha-ceremonial-uji',
    name: 'Té Matcha Ceremonial Grado Uji (Lata Hermética)',
    brand: 'Kyoto Zen Harvest',
    category: 'Superfoods, Energía y Enfoque Mental',
    categoryId: 'polvos',
    badgeText: 'Bodegón Flat Lay 90° · Bambú Zen',
    aspectRatio: '1:1 Estudio',
    image: '/images/lens-50mm-natural.jpg',
    headline: 'ENERGÍA SOSTENIDA DE 6 HORAS Y ENFOQUE MENTAL',
    summary: 'Vista cenital 90° de lata metálica verde bosque hermética con polvo verde esmeralda, cuchara de bambú chashaku y batidor chasen sobre listones de bambú.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'L-Teanina para Enfoque Calmado',
            shortDesc: 'Concentración profunda sin el nerviosismo del café.',
            iconName: 'sparkles'
      },
      {
            title: '137x Más Antioxidantes',
            shortDesc: 'Carga masiva de EGCG para neutralizar el envejecimiento.',
            iconName: 'shield'
      },
      {
            title: 'Metabolismo Activo',
            shortDesc: 'Favorece la quema de calorías de forma termogénica.',
            iconName: 'flame'
      },
      {
            title: 'Grado Ceremonial de Uji',
            shortDesc: 'Primera cosecha de primavera molida lentamente en piedra.',
            iconName: 'leaf'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Té Matcha Ceremonial Grado Uji (Lata Hermética)": en el centro destaca el producto posado sobre superficie de listones de bambú claro natural junto a lino crudo y ramas verdes. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Té Matcha Ceremonial Grado Uji (Lata Hermética)": centered product resting on superficie de listones de bambú claro natural junto a lino crudo y ramas verdes. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Té Matcha Ceremonial Grado Uji (Lata Hermética)" posado sobre superficie de listones de bambú claro natural junto a lino crudo y ramas verdes, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Té Matcha Ceremonial Grado Uji (Lata Hermética)" resting on superficie de listones de bambú claro natural junto a lino crudo y ramas verdes, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Té Matcha Ceremonial Grado Uji (Lata Hermética)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Buscas energía sostenida de 6 horas y enfoque mental? Prueba Té Matcha Ceremonial Grado Uji (Lata Hermética). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Té Matcha Ceremonial Grado Uji (Lata Hermética)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Buscas energía sostenida de 6 horas y enfoque mental? Prueba Té Matcha Ceremonial Grado Uji (Lata Hermética). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Té Matcha Ceremonial Grado Uji (Lata Hermética)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Té Matcha Ceremonial Grado Uji (Lata Hermética)". Container remains static. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando L-Teanina para Enfoque Calmado y 137x Más Antioxidantes. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "L-Teanina para Enfoque Calmado y 137x Más Antioxidantes desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting L-Teanina para Enfoque Calmado. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "L-Teanina para Enfoque Calmado y 137x Más Antioxidantes desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Metabolismo Activo."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Metabolismo Activo."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'magnesio-spray-transdermico',
    name: 'Aceite de Magnesio Transdérmico Zechstein (Spray)',
    brand: 'Mineral Balance Labs',
    category: 'Relajación Muscular y Sueño Profundo',
    categoryId: 'sprays',
    badgeText: 'Botella Spray Esmerilada · Travertino Spa',
    aspectRatio: '1:1 Estudio',
    image: '/images/WhatsApp Image 2026-10-28 at 9.09.39 AM(1).jpeg',
    headline: 'RELAJACIÓN MUSCULAR PROFUNDA Y SUEÑO REPARADOR',
    summary: 'Botella de vidrio esmerilado con boquilla spray blanca sobre podio arquitectónico de travertino beige con sombras de hojas de palmera proyectadas.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[0].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Absorción Cutánea Directa',
            shortDesc: 'Llega a los músculos en minutos sin pasar por el estómago.',
            iconName: 'droplets'
      },
      {
            title: 'Cero Calambres y Tensión',
            shortDesc: 'Relaja la musculatura tensa de piernas, cuello y hombros.',
            iconName: 'zap'
      },
      {
            title: 'Induce el Sueño Reparador',
            shortDesc: 'Calma el sistema nervioso para un descanso profundo y continuo.',
            iconName: 'sun'
      },
      {
            title: '100% Puro del Mar Zechstein',
            shortDesc: 'Cloruro de magnesio ancestral extraído a 2000m de profundidad.',
            iconName: 'shield'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Aceite de Magnesio Transdérmico Zechstein (Spray)": en el centro destaca el producto posado sobre podio arquitectónico de piedra travertino beige con sombras sutiles de hojas. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Aceite de Magnesio Transdérmico Zechstein (Spray)": centered product resting on podio arquitectónico de piedra travertino beige con sombras sutiles de hojas. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Aceite de Magnesio Transdérmico Zechstein (Spray)" posado sobre podio arquitectónico de piedra travertino beige con sombras sutiles de hojas, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Aceite de Magnesio Transdérmico Zechstein (Spray)" resting on podio arquitectónico de piedra travertino beige con sombras sutiles de hojas, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Aceite de Magnesio Transdérmico Zechstein (Spray)" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "¿Buscas relajación muscular profunda y sueño reparador? Prueba Aceite de Magnesio Transdérmico Zechstein (Spray). Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Aceite de Magnesio Transdérmico Zechstein (Spray)" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "¿Buscas relajación muscular profunda y sueño reparador? Prueba Aceite de Magnesio Transdérmico Zechstein (Spray). Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Aceite de Magnesio Transdérmico Zechstein (Spray)" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Aceite de Magnesio Transdérmico Zechstein (Spray)". Container remains static. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Absorción Cutánea Directa y Cero Calambres y Tensión. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "Absorción Cutánea Directa y Cero Calambres y Tensión desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Absorción Cutánea Directa. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "Absorción Cutánea Directa y Cero Calambres y Tensión desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Induce el Sueño Reparador."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Induce el Sueño Reparador."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[0].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[0].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'tonico-facial-rosas',
    name: 'Tónico Botánico Facial Rosas de Damasco & Hamamelis',
    brand: 'Aura Botánica Skincare',
    category: 'Cuidado Facial, Poros y Frescura',
    categoryId: 'sprays',
    badgeText: 'Spray de Cristal · Cascada Alpina',
    aspectRatio: '1:1 Estudio',
    image: '/images/WhatsApp Image 2026-10-28 at 9.09.39 AM(2).jpeg',
    headline: 'POROS CERRADOS, HIDRATACIÓN FRESCA Y PH EQUILIBRADO',
    summary: 'Botella de vidrio transparente con rocío rosado fresco sobre roca basáltica oscura pulida junto a la bruma fresca de una cascada con helechos.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[2].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Cierra Poros y Tonifica',
            shortDesc: 'El hamamelis astringente afina la textura cutánea suavemente.',
            iconName: 'target'
      },
      {
            title: 'Equilibra el pH Tras la Limpieza',
            shortDesc: 'Restaura el manto hidrolipídico natural de la piel.',
            iconName: 'droplets'
      },
      {
            title: 'Bruma Hidratante Revitalizante',
            shortDesc: 'Despierta la piel cansada con un rocío floral ultrafino.',
            iconName: 'sparkles'
      },
      {
            title: 'Destilado en Frío sin Alcohol',
            shortDesc: 'Apto para pieles ultrasensibles, sin irritación ni sequedad.',
            iconName: 'leaf'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Tónico Botánico Facial Rosas de Damasco & Hamamelis": en el centro destaca el producto posado sobre roca oscura pulida junto a la bruma fresca de una cascada de montaña. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Tónico Botánico Facial Rosas de Damasco & Hamamelis": centered product resting on roca oscura pulida junto a la bruma fresca de una cascada de montaña. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Tónico Botánico Facial Rosas de Damasco & Hamamelis" posado sobre roca oscura pulida junto a la bruma fresca de una cascada de montaña, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Tónico Botánico Facial Rosas de Damasco & Hamamelis" resting on roca oscura pulida junto a la bruma fresca de una cascada de montaña, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Tónico Botánico Facial Rosas de Damasco & Hamamelis" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Buscas poros cerrados, hidratación fresca y ph equilibrado? Prueba Tónico Botánico Facial Rosas de Damasco & Hamamelis. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Tónico Botánico Facial Rosas de Damasco & Hamamelis" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Buscas poros cerrados, hidratación fresca y ph equilibrado? Prueba Tónico Botánico Facial Rosas de Damasco & Hamamelis. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Tónico Botánico Facial Rosas de Damasco & Hamamelis" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Tónico Botánico Facial Rosas de Damasco & Hamamelis". Container remains static. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Cierra Poros y Tonifica y Equilibra el pH Tras la Limpieza. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Cierra Poros y Tonifica y Equilibra el pH Tras la Limpieza desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Cierra Poros y Tonifica. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Cierra Poros y Tonifica y Equilibra el pH Tras la Limpieza desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Bruma Hidratante Revitalizante."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Bruma Hidratante Revitalizante."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[2].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[2].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
  },
  {
    id: 'balsamo-calendula-karite',
    name: 'Bálsamo Botánico Reparador Caléndula & Karité',
    brand: 'Aura Botánica Skincare',
    category: 'Reparación de Piel, Labios y Rozaduras',
    categoryId: 'tarros',
    badgeText: 'Tarro de Aluminio · Invernadero Botánico',
    aspectRatio: '1:1 Estudio',
    image: '/images/lens-100mm-macro.jpg',
    headline: 'REPARA PIEL AGRIETADA, LABIOS Y ROZADURAS',
    summary: 'Tarro de aluminio dorado cepillado con textura cremosa mantecosa amarilla sobre mesa de madera rústica en invernadero con macetas de terracota.',
    voiceProfileName: VOICE_PROFILES_LIBRARY[3].name,
    backgroundMusicStyle: 'Música acústica y botánica envolvente de estudio',
    benefits: [
      {
            title: 'Regeneración Rápida de Tejidos',
            shortDesc: 'La caléndula acelera la cicatrización de grietas y rozaduras.',
            iconName: 'shield'
      },
      {
            title: 'Nutrición con Manteca de Karité',
            shortDesc: 'Crea una barrera emoliente que bloquea la deshidratación.',
            iconName: 'droplets'
      },
      {
            title: 'Alivio de Labios y Manos Secas',
            shortDesc: 'Suavidad inmediata desde la primera aplicación.',
            iconName: 'sparkles'
      },
      {
            title: 'Cera de Abejas Virgen Pura',
            shortDesc: 'Protege contra viento, frío y agresiones ambientales.',
            iconName: 'award'
      }
],
    geminiPromptEs: 'Fotografía publicitaria de estudio comercial de alta conversión para "Bálsamo Botánico Reparador Caléndula & Karité": en el centro destaca el producto posado sobre mesa rústica de invernadero botánico con terracota y luz tamizada de cristal. Composición equilibrada y pulcra con iluminación comercial difusa, microgotas de rocío fresco, lente prime 85mm f/1.8, 8k.',
    geminiPromptEn: 'Commercial high-converting studio advertising photography for "Bálsamo Botánico Reparador Caléndula & Karité": centered product resting on mesa rústica de invernadero botánico con terracota y luz tamizada de cristal. Balanced composition with diffused studio lighting, fresh condensation droplets, prime 85mm f/1.8 lens, 8k.',
    cleanHeroPromptEs: 'Fotografía comercial limpia de catálogo premium para "Bálsamo Botánico Reparador Caléndula & Karité" posado sobre mesa rústica de invernadero botánico con terracota y luz tamizada de cristal, sin textos flotantes ni elementos externos, foco absoluto en el producto, lente 85mm f/1.8, 8k.',
    cleanHeroPromptEn: 'Clean premium catalog commercial photography for "Bálsamo Botánico Reparador Caléndula & Karité" resting on mesa rústica de invernadero botánico con terracota y luz tamizada de cristal, without floating text or external graphics, absolute product focus, 85mm lens f/1.8, 8k.',
    masterFlowPromptEs: 'Video comercial cinematográfico: el producto "Bálsamo Botánico Reparador Caléndula & Karité" permanece 100% firme y nítido en el centro. REGLA ESTRICTA: NO animar letras ni alterar marcas; animar únicamente el barrido de luz cálida sobre el envase mientras las gotas de rocío resbalan suavemente. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "¿Buscas repara piel agrietada, labios y rozaduras? Prueba Bálsamo Botánico Reparador Caléndula & Karité. Fórmula natural de máxima potencia para tu bienestar."',
    masterFlowPromptEn: 'Cinematic commercial video: "Bálsamo Botánico Reparador Caléndula & Karité" container remains 100% still in the center. STRICT RULE: Do not animate letters; animate only warm light sweep across packaging while dew drops slide. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "¿Buscas repara piel agrietada, labios y rozaduras? Prueba Bálsamo Botánico Reparador Caléndula & Karité. Fórmula natural de máxima potencia para tu bienestar."',
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual',
        promptEs: 'Acercamiento suave hacia "Bálsamo Botánico Reparador Caléndula & Karité" en el centro. El envase permanece estático con reflejo de luz cálida. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"',
        promptEn: 'Slow camera push toward "Bálsamo Botánico Reparador Caléndula & Karité". Container remains static. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "¿Quieres sentir el verdadero poder de los ingredientes botánicos en tu rutina diaria?"'
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios Principales',
        promptEs: 'Barrido de luz sobre el relieve y textura del envase destacando Regeneración Rápida de Tejidos y Nutrición con Manteca de Karité. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "Regeneración Rápida de Tejidos y Nutrición con Manteca de Karité desde las primeras tomas."',
        promptEn: 'Light sweep across product container highlighting Regeneración Rápida de Tejidos. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "Regeneración Rápida de Tejidos y Nutrición con Manteca de Karité desde las primeras tomas."'
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Absorción y Pureza',
        promptEs: 'Detalle cercano de ingredientes botánicos frescos con partículas luminosas flotando suavemente. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "Fórmula de rápida asimilación con Alivio de Labios y Manos Secas."',
        promptEn: 'Botanical ingredients close-up. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "Fórmula de rápida asimilación con Alivio de Labios y Manos Secas."'
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Heroico',
        promptEs: 'Plano maestro fijo con el producto iluminado al centro. ' + VOICE_PROFILES_LIBRARY[3].descriptionEs + ', diciendo: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"',
        promptEn: 'Luminous master shot of the product. ' + VOICE_PROFILES_LIBRARY[3].descriptionEn + ', speaking in Spanish: "El cuidado natural que tu cuerpo merece. ¡Pide el tuyo hoy!"'
      }
    ]
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
