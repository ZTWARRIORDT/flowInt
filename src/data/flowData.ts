export interface PromptAnatomySegment {
  category: 'producto' | 'iluminacion' | 'beneficios' | 'entorno' | 'camara';
  label: string;
  textEs: string;
  textEn: string;
}

export interface BenefitItem {
  title: string;
  shortDesc: string;
  iconName: 'eye' | 'sparkles' | 'target' | 'shield' | 'heart' | 'zap' | 'droplets' | 'leaf' | 'sun' | 'flame' | 'activity' | 'award';
}

export interface FlowSceneStep {
  sceneNumber: number;
  timeRange: string;
  title: string;
  purpose: string;
  flowTool: 'Frames to Video (First Frame)' | 'Ingredients to Video' | 'Scene Builder (Extend)' | 'Frames to Video (First → Last Frame)';
  cameraMotion: string;
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
  categoryId: 'poster-916' | 'suplementos' | 'extractos' | 'cosmetica' | 'apicultura';
  isUserReference?: boolean;
  badgeText: string;
  aspectRatio: '9:16 Vertical' | '1:1 Estudio';
  image: string;
  headline: string;
  summary: string;
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
    id: 'zooone-eye-vitamin',
    name: 'Zooone® Eye Vitamin & Mineral',
    brand: 'Zooone® Natural Care',
    category: 'Salud Visual · Póster Infográfico 9:16',
    categoryId: 'poster-916',
    isUserReference: true,
    badgeText: 'Tu Ejemplo Real #1 · Póster + Video de Beneficios',
    aspectRatio: '9:16 Vertical',
    image: '/images/zooone-eye-vitamin.png',
    headline: 'VISIÓN CLARA Y OJOS PROTEGIDOS',
    summary:
      'Póster comercial vertical 9:16 con frasco ámbar de tapa dorada, partículas de luz mágica, 4 medallones dorados de beneficios oculares y ficha técnica inferior. Ideal para transformar en un Reel/Estado de 16 segundos explicando sus 4 beneficios.',
    specs: {
      tipo: 'Cápsulas vitaminas para ojos',
      contenido: '90 Cápsulas',
      ingredientes: 'Vitaminas y Minerales + Luteína',
      uso: '2 al día',
      extra: 'GMP Certified Premium',
    },
    benefits: [
      {
        title: 'Hidrata y Protege Ojos',
        shortDesc: 'Combate la sequedad ocular causada por pantallas y aire acondicionado.',
        iconName: 'droplets',
      },
      {
        title: 'Visión Más Brillante',
        shortDesc: 'Luteína y zeaxantina que mejoran la nitidez y el contraste visual.',
        iconName: 'sparkles',
      },
      {
        title: 'Mejora Enfoque',
        shortDesc: 'Disminuye el cansancio al leer o trabajar largas horas frente al monitor.',
        iconName: 'target',
      },
      {
        title: 'Salud Ocular Completa',
        shortDesc: 'Escudo antioxidante integral con certificación de calidad GMP.',
        iconName: 'shield',
      },
    ],
    geminiPromptEs:
      'Póster publicitario vertical 9:16 ultra profesional de un suplemento natural llamado "Zooone EYE VITAMIN AND MINERAL SUPPLEMENT". En el centro, un frasco de vidrio ámbar oscuro con tapa dorada metálica y precinto de seguridad, etiqueta verde esmeralda y dorado con sello "GMP Certified" y "90 Cápsulas". Arriba, título grande en tipografía serif dorada metálica brillante: "VISIÓN CLARA Y OJOS PROTEGIDOS". Alrededor del frasco, destellos de polvo de oro mágico sobre fondo verde esmeralda profundo con siluetas luminosas de ojos sanos. Debajo del frasco, 4 placas cuadradas de oro cepillado con iconos grabados y texto claro: 1) "Hidrata y Protege Ojos", 2) "Visión Más Brillante", 3) "Mejora Enfoque", 4) "Salud Ocular Completa". En la base inferior, recuadro elegante oscuro con ficha técnica: Tipo: Cápsulas vitaminas para ojos, Contenido: 90 Cápsulas, Ingredientes: Vitaminas y Minerales + Luteína, Uso: 2 al día. Iluminación cinematográfica comercial, hiperrealista, 8k.',
    geminiPromptEn:
      'Ultra-professional 9:16 vertical commercial poster for a natural supplement bottle named "Zooone EYE VITAMIN AND MINERAL SUPPLEMENT". Centered dark amber glass bottle with metallic gold cap and security seal, emerald green and metallic gold label featuring "GMP Certified" badge and "90 Capsules". At the top, large glowing metallic gold serif headline: "VISIÓN CLARA Y OJOS PROTEGIDOS". Surrounding the bottle, swirling golden stardust particles over a deep emerald background with subtle glowing golden eye illustrations. Below the bottle, 4 brushed gold square medallions with engraved icons and text: "Hidrata y Protege Ojos", "Visión Más Brillante", "Mejora Enfoque", "Salud Ocular Completa". At the bottom, a sleek dark emerald specs table with icons. Studio commercial lighting, hyper-realistic, 8k resolution.',
    cleanHeroPromptEs:
      'Fotografía comercial de estudio en formato vertical 9:16 del frasco de vidrio ámbar "Zooone Eye Vitamin and Mineral Supplement" con tapa dorada metálica y etiqueta verde esmeralda con dorado, apoyado sobre un pedestal de piedra esmeralda pulida. Sin textos flotantes externos ni recuadros. Alrededor del frasco flotan suavemente partículas de luz dorada y bokeh cálido. Iluminación de contorno dorada (rim light), lente macro 85mm f/2.8, nitidez absoluta en la etiqueta, calidad 8k lista para animar en Google Flow.',
    cleanHeroPromptEn:
      'Commercial studio product photography in 9:16 vertical format of the dark amber glass bottle "Zooone Eye Vitamin and Mineral Supplement" with metallic gold cap and emerald-gold label, resting on a polished emerald stone pedestal. No external floating text overlays or badges. Surrounding the bottle, soft floating golden light particles and warm bokeh. Golden rim lighting, 85mm macro lens f/2.8, tack-sharp label typography, 8k resolution ready to animate as First Frame in Google Flow.',
    anatomy: [
      {
        category: 'producto',
        label: 'Frasco y Etiqueta',
        textEs: 'Frasco de vidrio ámbar con tapa dorada metálica y etiqueta verde/oro "Zooone Eye Vitamin 90 Cápsulas"',
        textEn: 'Dark amber glass bottle with metallic gold cap and emerald-gold label "Zooone Eye Vitamin"',
      },
      {
        category: 'beneficios',
        label: 'Titular y 4 Medallones Dorados',
        textEs: 'Título superior "VISIÓN CLARA Y OJOS PROTEGIDOS" + 4 placas de oro: Hidrata, Visión Brillante, Enfoque y Salud Ocular',
        textEn: 'Top gold headline + 4 brushed gold benefit medallions + bottom specs bar',
      },
      {
        category: 'iluminacion',
        label: 'Iluminación Comercial',
        textEs: 'Luz de contorno dorada brillante (golden rim light) con reflejos especulares en tapa y vidrio',
        textEn: 'Glowing golden rim lighting with crisp specular highlights on cap and glass',
      },
      {
        category: 'entorno',
        label: 'Atmósfera Mágica',
        textEs: 'Fondo verde esmeralda profundo con ondas de polvo de oro y destellos estelares',
        textEn: 'Deep emerald background with swirling golden stardust waves and sparkles',
      },
      {
        category: 'camara',
        label: 'Encuadre y Lente',
        textEs: 'Formato vertical 9:16 para Reels/Historias, lente macro 85mm, texto ultra nítido 8k',
        textEn: '9:16 vertical aspect ratio for Reels/Stories, 85mm macro lens, tack-sharp 8k',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho Visual (Revelación del Producto)',
        purpose: 'Captar la atención en los primeros 3 segundos mostrando el frasco impecable y el problema que resuelve.',
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Dolly In lento (Acercamiento suave al centro)',
        promptEs:
          'El frasco de Zooone Eye Vitamin permanece perfectamente firme y nítido en el centro. Partículas brillantes de polvo dorado flotan suavemente en cámara lenta alrededor del frasco mientras un haz de luz cálida recorre la tapa dorada metálica. Atmósfera cinematográfica de lujo.',
        promptEn:
          'The Zooone Eye Vitamin bottle remains perfectly still and sharp in the center. Glowing golden stardust particles float slowly in slow motion around the bottle while a warm light beam sweeps across the metallic gold cap. Luxury cinematic atmosphere.',
        onScreenText: '¿Vista cansada o borrosa frente a la pantalla? 👀✨',
        voiceoverEs: '¿Sientes los ojos secos y cansados al final del día? Tu vista necesita protección real.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Hidratación + Visión Brillante)',
        purpose: 'Explicar los dos primeros beneficios clave mientras la cámara realiza una órbita sutil.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Orbit ligero de izquierda a derecha (15 grados)',
        promptEs:
          'Movimiento orbital suave alrededor del frasco ámbar de vitaminas oculares. Ondas de energía dorada y verde esmeralda iluminan el entorno en cámara lenta, transmitiendo frescura, hidratación ocular y claridad visual. La etiqueta se mantiene 100% legible.',
        promptEn:
          'Gentle orbital camera movement around the amber eye vitamin bottle. Waves of golden and emerald green light illuminate the background in slow motion, conveying eye hydration and visual clarity. Label remains 100% legible.',
        onScreenText: '💧 1. Hidrata y Protege · ✨ 2. Visión Más Brillante con Luteína',
        voiceoverEs: 'Con Zooone y su fórmula con Luteína pura, hidratas tus ojos profundamente y recuperas una visión más clara y brillante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Enfoque y Salud Ocular Completa)',
        purpose: 'Reforzar el beneficio de enfoque mental/visual y mostrar la calidad de las cápsulas naturales.',
        flowTool: 'Ingredients to Video',
        cameraMotion: 'Macro Pan suave con enfoque selectivo (Bokeh dorado)',
        promptEs:
          'Plano detalle cinematográfico del frasco Zooone acompañado de cápsulas vegetales brillantes sobre una superficie esmeralda con destellos dorados flotando hacia arriba. Iluminación cálida de estudio que resalta la pureza y certificación GMP.',
        promptEn:
          'Cinematic close-up of the Zooone bottle next to glossy natural capsules on an emerald surface with golden sparkles floating upward. Warm studio lighting highlighting purity and GMP quality.',
        onScreenText: '🎯 3. Mejora tu Enfoque · 🛡️ 4. Salud Ocular Completa',
        voiceoverEs: 'Mejora tu enfoque diario y protege tu retina del desgaste de las pantallas con vitaminas y minerales esenciales.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre con Póster de Beneficios y Dosis',
        purpose: 'Cerrar el video mostrando la infografía completa con los 4 medallones dorados y cómo tomarlo.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Static Hero Lock con resplandor dorado en los 4 sellos',
        promptEs:
          'El póster infográfico de Zooone Eye Vitamin con sus 4 medallones dorados ("Hidrata y Protege Ojos", "Visión Más Brillante", "Mejora Enfoque", "Salud Ocular Completa") brilla con un destello elegante que recorre las placas doradas. Partículas suaves en el fondo.',
        promptEn:
          'The Zooone Eye Vitamin infographic poster with its 4 golden medallions gleams with a subtle luxury light sweep across the gold badges. Soft floating particles in the background.',
        onScreenText: 'Solo 2 cápsulas al día · Frasco de 90 Cápsulas · ¡Pídelo hoy!',
        voiceoverEs: 'Solo dos cápsulas al día para unos ojos protegidos y descansados. ¡Pide tu Zooone hoy mismo!',
      },
    ],
  },
  {
    id: 'fos-probioticos-zinc',
    name: 'FOS Probióticos y Zinc — Greensofg',
    brand: 'Greensofg · Premium Line',
    category: 'Salud Digestiva e Inmune · Póster 9:16',
    categoryId: 'poster-916',
    isUserReference: true,
    badgeText: 'Tu Ejemplo Real #2 · Póster + Video de Beneficios',
    aspectRatio: '9:16 Vertical',
    image: '/images/fos-probioticos-zinc.png',
    headline: 'ADIÓS INFLAMACIÓN Y BAJAS DEFENSAS',
    summary:
      'Póster vertical 9:16 de alto impacto para redes y WhatsApp Status: frasco ámbar con etiqueta rosa pastel, hojas frescas de menta/eucalipto, 4 medallones circulares dorados en las esquinas y barra inferior de 5 especificaciones.',
    specs: {
      tipo: 'Caramelo masticable relleno líquido',
      contenido: '100 Unidades (50 Porciones)',
      ingredientes: 'FOS + Probióticos + Zinc',
      uso: '2 al día',
      extra: 'Absorción 3x más rápida',
    },
    benefits: [
      {
        title: 'Intestino Saludable',
        shortDesc: 'Regula el tránsito intestinal de forma natural sin irritar el estómago.',
        iconName: 'activity',
      },
      {
        title: 'Defensas Altas',
        shortDesc: 'Con Zinc activo que fortalece la respuesta inmune todos los días.',
        iconName: 'shield',
      },
      {
        title: 'Digestión Ligera',
        shortDesc: 'Combate la hinchazón abdominal, gases y pesadez después de comer.',
        iconName: 'heart',
      },
      {
        title: 'Flora Intestinal',
        shortDesc: 'Fructooligosacáridos (FOS) + Probióticos con absorción 3 veces más rápida.',
        iconName: 'sparkles',
      },
    ],
    geminiPromptEs:
      'Póster publicitario vertical 9:16 de suplemento natural "FOS PROBIÓTICOS Y ZINC - Greensofg Premium Line". En el centro, un frasco ancho de vidrio ámbar oscuro con gotas de rocío frescas, tapa blanca con banda de seguridad verde y etiqueta rosa vibrante con detalles dorados que dice "FOS PROBIÓTICOS Y ZINC - 100 Unidades". En la parte superior, título en letras doradas con relieve: "ADIÓS INFLAMACIÓN Y BAJAS DEFENSAS". En las 4 esquinas rodeando el frasco, 4 medallones circulares de oro brillante en 3D con iconos grabados: 1) "Intestino Saludable", 2) "Defensas Altas", 3) "Digestión Ligera", 4) "Flora Intestinal". Hojas frescas de menta y eucalipto brotando detrás del frasco sobre un fondo degradado verde menta y rosa pastel con destellos bokeh. En la base inferior, tabla verde oscuro con bordes dorados de 5 columnas (Tipo, Contenido 100 unidades, Ingredientes FOS+Probióticos+Zinc, Uso 2 al día, Absorción 3x más rápida). Hiperrealista, 8k.',
    geminiPromptEn:
      '9:16 vertical commercial poster for natural supplement "FOS PROBIÓTICOS Y ZINC - Greensofg Premium Line". Centered wide dark amber bottle covered in fresh water droplets, white security cap with green leaf logo, and vibrant pink label with gold accents reading "FOS PROBIÓTICOS Y ZINC - 100 Unidades". Top headline in 3D metallic gold serif font: "ADIÓS INFLAMACIÓN Y BAJAS DEFENSAS". Surrounding the bottle in the four corners are 4 circular 3D polished gold medallions with icons: "Intestino Saludable", "Defensas Altas", "Digestión Ligera", "Flora Intestinal". Fresh mint and eucalyptus leaves framing the bottle against a dreamy mint-green and soft pink bokeh background with sparkles. Bottom dark green and gold specification bar with 5 columns. Commercial 8k render.',
    cleanHeroPromptEs:
      'Fotografía comercial vertical 9:16 del frasco ámbar con gotas de frescura "FOS PROBIÓTICOS Y ZINC" de etiqueta rosa y dorada, rodeado de hojas frescas de menta y eucalipto con iluminación matutina suave sobre un fondo degradado verde menta y rosa pastel con bokeh brillante. Sin textos externos ni medallones flotantes, ideal como primer fotograma limpio para animar en Google Flow.',
    cleanHeroPromptEn:
      'Vertical 9:16 commercial product photo of the dewy amber bottle "FOS PROBIÓTICOS Y ZINC" with pink and gold label, surrounded by fresh mint and eucalyptus sprigs in soft morning light over a mint-green and pastel pink bokeh background. No floating text or badges, ideal as a clean First Frame for Google Flow animation.',
    anatomy: [
      {
        category: 'producto',
        label: 'Frasco con Rocío',
        textEs: 'Frasco ámbar ancho con microgotas de condensación, etiqueta rosa pastel "FOS PROBIÓTICOS Y ZINC 100 Unidades"',
        textEn: 'Dew-covered wide amber bottle with pastel pink label "FOS PROBIÓTICOS Y ZINC"',
      },
      {
        category: 'beneficios',
        label: '4 Medallones Circulares + Tabla',
        textEs: '4 discos dorados (Intestino Saludable, Defensas Altas, Digestión Ligera, Flora Intestinal) + barra de 5 datos',
        textEn: '4 circular 3D gold medallions in the corners + 5-column bottom specification bar',
      },
      {
        category: 'iluminacion',
        label: 'Luz Fresca Brillante',
        textEs: 'Iluminación suave de estudio con destellos estelares sobre las medallas de oro y gotas de agua',
        textEn: 'Soft studio lighting with starburst highlights on gold medallions and water droplets',
      },
      {
        category: 'entorno',
        label: 'Botánica y Degradado',
        textEs: 'Ramas de eucalipto y hojas de menta flotando sobre fondo bicolor verde menta y rosa suave',
        textEn: 'Eucalyptus branches and mint leaves floating over a dual-tone mint green and soft pink bokeh background',
      },
      {
        category: 'camara',
        label: 'Encuadre 9:16',
        textEs: 'Composición simétrica vertical 9:16 de alta conversión para estados de WhatsApp e Instagram Reels',
        textEn: 'High-conversion symmetrical 9:16 vertical composition for WhatsApp Status and Instagram Reels',
      },
    ],
    flowScenes: [
      {
        sceneNumber: 1,
        timeRange: '00:00 – 00:04s',
        title: 'Escena 1: Gancho (Adiós Inflamación y Pesadez)',
        purpose: 'Conectar de inmediato con quien sufre de inflamación abdominal o defensas bajas.',
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Dolly In suave hacia el frasco con hojas en movimiento',
        promptEs:
          'El frasco de FOS Probióticos y Zinc permanece firme en el centro con sus gotas de frescura. Las hojas verdes de menta y eucalipto detrás del frasco se mecen suavemente con una brisa fresca mientras pequeñas partículas luminosas flotan en el fondo rosa y verde menta.',
        promptEn:
          'The FOS Probiotics and Zinc bottle stays sharp and steady in the center with fresh water droplets. The green mint and eucalyptus leaves behind the bottle sway gently in a fresh breeze while glowing bokeh particles float in the pink and mint background.',
        onScreenText: '¿Abdomen inflamado y defensas bajas? 🌿✨',
        voiceoverEs: 'Dile adiós a la inflamación abdominal y a las bajas defensas de una forma deliciosa y natural.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Intestino Saludable + Defensas Altas)',
        purpose: 'Explicar la doble acción del suplemento: probióticos digestivos + zinc inmunológico.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Pan vertical sutil con destellos en los medallones superiores',
        promptEs:
          'Un destello cálido de luz dorada ilumina los medallones superiores de "Intestino Saludable" y "Defensas Altas" mientras burbujas microscópicas de luz pura ascienden suavemente alrededor del envase, simbolizando absorción rápida.',
        promptEn:
          'A warm golden light sweep illuminates the top medallions while microscopic pure light bubbles ascend gently around the bottle, symbolizing rapid absorption.',
        onScreenText: '🛡️ Sube tus Defensas con Zinc + 🌱 Intestino Sano',
        voiceoverEs: 'Con FOS, Probióticos y Zinc, restauras tu flora intestinal mientras fortaleces tus defensas todos los días.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Digestión Ligera y Absorción 3x)',
        purpose: 'Destacar su formato único de caramelo masticable con relleno líquido de rápida absorción.',
        flowTool: 'Ingredients to Video',
        cameraMotion: 'Orbit corto 3D con enfoque macro',
        promptEs:
          'Giro orbital suave mostrando la frescura de las gotas de agua en el frasco ámbar y hojas de menta fresca flotando en cámara lenta. Sensación de ligereza, bienestar estomacal y frescura natural.',
        promptEn:
          'Smooth short orbital motion showcasing the fresh water droplets on the amber bottle and mint leaves floating in slow motion. Feeling of lightness and digestive wellness.',
        onScreenText: '⚡ Absorción 3x Más Rápida · Digestión Ligera al Instante',
        voiceoverEs: 'Su fórmula en caramelo masticable con relleno líquido te brinda una absorción tres veces más rápida y una digestión ligera.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Ficha Completa (100 Unidades · 2 al Día)',
        purpose: 'Mostrar los 4 sellos dorados y la tabla inferior para cerrar la venta por WhatsApp.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Plano fijo heroico con brillo dorado continuo',
        promptEs:
          'Vista completa del póster FOS Probióticos y Zinc con los 4 medallones dorados brillando suavemente y la ficha técnica inferior nítida. Partículas de luz dorada y verde menta flotando con elegancia.',
        promptEn:
          'Full view of the FOS Probiotics and Zinc poster with the 4 golden medallions softly glowing and the bottom specs bar sharp. Golden and mint light particles floating elegantly.',
        onScreenText: '100 Unidades (50 Porciones) · Solo 2 al día 💬 ¡Pídelo aquí!',
        voiceoverEs: 'Un frasco trae cien unidades para cincuenta días de bienestar. Toma dos al día. ¡Escríbenos y pide el tuyo ahora!',
      },
    ],
  },
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
        purpose: 'Transmitir pureza natural y captar la atención con los rayos de sol en movimiento.',
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Dolly In lento hacia la etiqueta dorada',
        promptEs:
          'Los rayos de sol matutinos se filtran suavemente entre las hojas del bosque iluminando el frasco de Colágeno + Magnesio. Las hojas de helecho se mueven sutilmente con la brisa y las partículas de polen dorado flotan en cámara lenta. El frasco y sus 4 medallones dorados permanecen nítidos.',
        promptEn:
          'Morning sunbeams filter gently through the forest leaves illuminating the Collagen + Magnesium bottle. Fern fronds sway subtly in the breeze and golden pollen particles float in slow motion. The bottle and its 4 gold medallions remain sharp.',
        onScreenText: '4 Beneficios en 1 sola fórmula natural 🌿✨',
        voiceoverEs: '¿Quieres rejuvenecer tu piel, cuidar tus articulaciones y recuperar tu energía diaria?',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Piel Radiante y Articulaciones Flexibles',
        purpose: 'Resaltar los dos medallones superiores: Piel/Cabello y Articulaciones.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Pan suave de izquierda a derecha con reflejo en letras doradas',
        promptEs:
          'Un destello cálido de sol recorre las letras doradas en relieve de "COLÁGENO + MAGNESIO" y hace brillar los medallones de Piel y Cabello y Articulaciones. Gotas de rocío resbalan lentamente por el vidrio ámbar.',
        promptEn:
          'A warm sunbeam sweeps across the gold foil lettering of "COLÁGENO + MAGNESIO" and makes the Skin & Hair and Joints medallions gleam. Dew drops slide slowly down the amber glass.',
        onScreenText: '✨ 1. Piel y Cabello Firme · 🦴 2. Articulaciones sin Dolor',
        voiceoverEs: 'El Colágeno Hidrolizado nutre tu piel y cabello desde adentro mientras protege tus rodillas y articulaciones.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Músculos Recuperados y Energía Vital',
        purpose: 'Explicar la acción del Magnesio en los músculos y el nivel de energía.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Orbit ligero con enfoque en los medallones inferiores',
        promptEs:
          'Cámara en órbita lenta resaltando los medallones dorados de Músculos y Energía rodeados de hojas de eucalipto húmedas y destellos dorados que ascienden desde la madera.',
        promptEn:
          'Slow orbital camera highlighting the Muscles and Energy gold medallions surrounded by wet eucalyptus leaves and golden sparkles rising from the wood.',
        onScreenText: '💪 3. Músculos sin Calambres · ⚡ 4. Energía Todo el Día',
        voiceoverEs: 'Y gracias al Magnesio puro, relajas tus músculos, evitas calambres y despiertas con máxima energía.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre Comercial (120 Cápsulas · 60 Días)',
        purpose: 'Presentar el rendimiento del envase y llamado a la acción.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Plano maestro fijo con atmósfera luminosa',
        promptEs:
          'Plano heroico final del frasco de Colágeno + Magnesio con sus 4 sellos dorados brillando en armonía bajo la luz dorada del bosque.',
        promptEn:
          'Final hero shot of the Collagen + Magnesium bottle with its 4 golden badges glowing harmoniously under the golden forest light.',
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
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Slow Push-In (Acercamiento dramático en 120fps)',
        promptEs:
          'En cámara superlenta (super slow motion), la nube de polvo dorado de cúrcuma detrás del frasco se expande suavemente en el aire iluminada por una luz ámbar cálida. El frasco de Cúrcuma + Jengibre y las raíces en la base permanecen perfectamente enfocados y firmes.',
        promptEn:
          'In super slow motion, the golden turmeric powder cloud behind the bottle expands softly in mid-air backlit by warm amber light. The Turmeric + Ginger bottle and the roots at the base remain perfectly focused and steady.',
        onScreenText: '¿Dolor articular o inflamación constante? 🔥🌿',
        voiceoverEs: 'Si el dolor articular o la inflamación te detienen, el poder natural de la Cúrcuma y el Jengibre es para ti.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Alivio Articular y Movilidad)',
        purpose: 'Explicar cómo la curcumina desinflama articulaciones y devuelve la movilidad.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Orbit lateral bajo alrededor de la pizarra negra',
        promptEs:
          'Movimiento orbital suave a ras de la piedra pizarra negra, pasando frente a las rodajas frescas de jengibre y la cuchara de madera con cúrcuma mientras finas chispas doradas flotan en el aire.',
        promptEn:
          'Low-angle smooth orbital movement across the black slate stone, passing the fresh ginger slices and wooden spoon with turmeric while fine golden sparks float in the air.',
        onScreenText: '🦴 1. Desinflama Articulaciones · 🏃 2. Recupera tu Movilidad',
        voiceoverEs: 'Su alta concentración desinflama tus articulaciones de forma natural y alivia la rigidez muscular.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Antioxidante + Sinergia con Jengibre)',
        purpose: 'Mostrar por qué la combinación de Cúrcuma + Jengibre multiplica el efecto.',
        flowTool: 'Ingredients to Video',
        cameraMotion: 'Macro Zoom hacia los ingredientes puros',
        promptEs:
          'Plano macro cinematográfico de las raíces de cúrcuma naranja intenso y el jengibre fresco junto al frasco Natural Vitae, con iluminación dorada recorriendo los iconos de la etiqueta.',
        promptEn:
          'Cinematic macro shot of vibrant orange turmeric roots and fresh ginger next to the Natural Vitae bottle, with golden light sweeping across the label icons.',
        onScreenText: '🛡️ 3. Poder Antioxidante · 🌱 4. Con Jengibre de Alta Absorción',
        voiceoverEs: 'Combinado con jengibre puro, protege tus células y mejora tu digestión con máxima absorción.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre (60 Cápsulas Vegetales)',
        purpose: 'Llamado a la acción claro indicando la dosis diaria.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Estático con partículas doradas flotando suavemente',
        promptEs:
          'Plano heroico final del frasco Cúrcuma + Jengibre Natural Vitae nítido en el centro mientras las últimas partículas de polvo dorado caen lentamente sobre la pizarra negra.',
        promptEn:
          'Final hero shot of the Natural Vitae Turmeric + Ginger bottle sharp in the center as the last golden powder particles settle slowly onto the black slate.',
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
      'Refreshing high-speed commercial photography: an emerald green glass dropper bottle with glass pipette and textured cream label reading "CLOROFILA & MATCHA - LIQUID DETOX - 30ml", emerging from the center of a crystal-clear emerald water crown splash overrippling water. Fresh mint leaves, green matcha tea shoots, and eucalyptus float in mid-air alongside sparkling water droplets. Sunlit blurred botanical garden background with golden sunbeams. 100mm macro lens, 8k.',
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
        purpose: 'Transmitir frescura instantánea con el movimiento líquido alrededor del gotero.',
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Static Macro con movimiento fluido del agua en 120fps',
        promptEs:
          'En cámara superlenta, la corona de agua verde esmeralda alrededor de la base del gotero Clorofila & Matcha ondula y libera pequeñas gotas cristalinas en el aire mientras las hojas de menta flotan suavemente. El frasco y su etiqueta permanecen completamente firmes.',
        promptEn:
          'In super slow motion, the emerald water crown around the base of the Chlorophyll & Matcha dropper ripples and releases crystal droplets into the air while mint leaves float gently. The bottle and label remain completely steady.',
        onScreenText: '¿Te sientes hinchado y sin energía por las mañanas? 💧🌿',
        voiceoverEs: 'Transforma tus mañanas con el poder purificante de la Clorofila líquida y el Té Matcha.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Detox Profundo + Oxigenación)',
        purpose: 'Explicar cómo limpia el organismo y oxigena las células.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Dolly In suave hacia el gotero iluminado por el sol',
        promptEs:
          'Acercamiento lento hacia el frasco verde esmeralda mientras rayos de sol dorados atraviesan el cristal líquido y las ondas de agua se expanden suavemente en la base.',
        promptEn:
          'Slow dolly-in toward the emerald glass bottle as golden sunbeams refract through the liquid glass and water ripples expand gently at the base.',
        onScreenText: '🌱 1. Detox Hepático y Digestivo · ✨ 2. Oxigena tu Piel',
        voiceoverEs: 'Limpia tu organismo de toxinas, desinflama tu digestión y oxigena tus células para una piel radiante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Aliento Fresco + Energía Limpia)',
        purpose: 'Destacar el toque de menta orgánica y la energía antioxidante del Matcha.',
        flowTool: 'Ingredients to Video',
        cameraMotion: 'Orbit ligero rodeando las hojas de menta y té verde',
        promptEs:
          'Las hojas frescas de menta y brotes de té verde giran suavemente en cámara lenta alrededor del gotero esmeralda con destellos de rocío bajo el sol matutino.',
        promptEn:
          'Fresh mint leaves and green tea shoots drift gently in slow motion around the emerald dropper with sparkling dew in the morning sun.',
        onScreenText: '🍃 3. Frescura Interna con Menta · ⚡ 4. Energía Antioxidante',
        voiceoverEs: 'Su toque de menta natural refresca tu aliento desde adentro mientras el Matcha te llena de energía limpia.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Modo de Uso (20 Gotas en Agua)',
        purpose: 'Explicar lo fácil que es tomarlo cada mañana.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Plano heroico luminoso',
        promptEs:
          'El gotero Clorofila & Matcha brilla en el centro del agua esmeralda con reflejos solares cálidos y atmósfera de bienestar puro.',
        promptEn:
          'The Chlorophyll & Matcha dropper gleams at the center of the emerald water with warm solar reflections and pure wellness atmosphere.',
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
        purpose: 'Enamorar visualmente con la estética orgánica y la caída de pétalos en cámara lenta.',
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Dolly In suave con caída de pétalos en slow motion',
        promptEs:
          'El frasco de Sérum Rosa Mosqueta permanece firme sobre la roca con musgo húmedo mientras suaves pétalos de rosa caen en cámara lenta alrededor y partículas de polen dorado brillan bajo el sol del atardecer.',
        promptEn:
          'The Rosehip Serum bottle remains steady on the wet mossy stone while soft pink rose petals fall in slow motion around it and golden pollen particles shimmer in the sunset light.',
        onScreenText: 'El secreto botánico para una piel luminosa y sin manchas 🌸✨',
        voiceoverEs: 'Descubre el poder regenerador del Sérum de Rosa Mosqueta cien por ciento orgánico.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Atenúa Manchas + Hidratación)',
        purpose: 'Explicar su acción reparadora sobre manchas, cicatrices y sequedad.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Orbit circular suave de 20 grados alrededor del gotero',
        promptEs:
          'La cámara orbita suavemente alrededor del frasco ámbar mientras la luz dorada del atardecer ilumina el aceite en su interior y las hojas de la ilustración dorada en la etiqueta brillan sutilmente.',
        promptEn:
          'The camera orbits gently around the amber bottle as golden sunset light illuminates the oil inside and the gold foil botanical illustration on the label gleams subtly.',
        onScreenText: '✨ 1. Atenúa Manchas y Marcas · 💧 2. Hidratación Profunda',
        voiceoverEs: 'Rico en ácidos grasos esenciales, atenúa manchas y líneas de expresión mientras hidrata profundamente.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Efecto Glow y Regeneración Nocturna)',
        purpose: 'Mostrar la pureza de los frutos de rosa mosqueta prensados en frío.',
        flowTool: 'Ingredients to Video',
        cameraMotion: 'Macro Pan sobre el musgo húmedo y frutos rojos',
        promptEs:
          'Plano macro de los frutos rojos de rosa mosqueta y pétalos húmedos junto al frasco con destellos cálidos en el agua sobre la roca.',
        promptEn:
          'Macro shot of red rosehip berries and dewy petals next to the bottle with warm light reflections on the wet stone.',
        onScreenText: '🌟 3. Luminosidad Natural · 🌙 4. Regeneración Nocturna',
        voiceoverEs: 'Regenera tu piel cada noche y despierta con un rostro suave, firme y luminoso.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Ritual de Aplicación (3 Gotas cada Noche)',
        purpose: 'Cerrar con el modo de uso y llamado a la acción.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Estático con bokeh dorado respirando suavemente',
        promptEs:
          'Plano heroico del Sérum de Rosa Mosqueta bañado por la luz dorada del atardecer con partículas flotantes suaves.',
        promptEn:
          'Hero shot of the Rosehip Serum bathed in golden sunset light with soft floating particles.',
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
        purpose: 'Hipnotizar al espectador con la caída lenta y viscosa de la miel dorada iluminada por el sol.',
        flowTool: 'Frames to Video (First Frame)',
        cameraMotion: 'Static Macro con fluido de miel cayendo en cámara lenta',
        promptEs:
          'En cámara lenta, el hilo espeso y brillante de miel dorada fluye continuamente desde la cuchara de madera formando pliegues suaves en la base. El tarro de Miel & Propóleo permanece completamente firme y nítido mientras pequeñas partículas doradas brillan en el aire.',
        promptEn:
          'In slow motion, the thick glossy ribbon of golden honey flows continuously from the wooden dipper forming soft coils at the base. The Honey & Propolis jar remains completely steady and sharp while golden particles shimmer in the air.',
        onScreenText: '¿Garganta irritada o cambios de clima? 🍯🛡️',
        voiceoverEs: 'Protege tu garganta y las defensas de toda tu familia con nuestra Miel y Propóleo artesanal.',
      },
      {
        sceneNumber: 2,
        timeRange: '00:04 – 00:08s',
        title: 'Escena 2: Beneficios 1 y 2 (Alivio de Garganta + Escudo Antibacteriano)',
        purpose: 'Explicar la acción calmante de la miel cruda y el poder antibacteriano del propóleo.',
        flowTool: 'Scene Builder (Extend)',
        cameraMotion: 'Dolly In suave hacia la etiqueta dorada y el panal',
        promptEs:
          'Acercamiento lento hacia el tarro de Miel & Propóleo mostrando la pureza del panal de cera fresca y los fragmentos de propóleo con luz matutina cálida reflejándose en las letras doradas.',
        promptEn:
          'Slow push-in toward the Honey & Propolis jar showcasing the fresh honeycomb and raw propolis chunks with warm morning light reflecting off the gold foil lettering.',
        onScreenText: '🍯 1. Alivia Garganta y Tos · 🛡️ 2. Antibacteriano Natural',
        voiceoverEs: 'El propóleo puro actúa como un escudo antibacteriano natural mientras la miel cruda suaviza tu garganta al instante.',
      },
      {
        sceneNumber: 3,
        timeRange: '00:08 – 00:12s',
        title: 'Escena 3: Beneficios 3 y 4 (Defensas Altas + Energía de Colmena)',
        purpose: 'Destacar el polen, las hojas de eucalipto y la cosecha 100% pura sin azúcar añadida.',
        flowTool: 'Ingredients to Video',
        cameraMotion: 'Pan horizontal suave sobre los ingredientes de la colmena',
        promptEs:
          'Paneo suave a ras de la mesa de madera recorriendo las hojas de eucalipto, los gránulos de polen dorado, el panal hexagonal y el hilo de miel brillante.',
        promptEn:
          'Smooth tabletop pan across the eucalyptus leaves, golden bee pollen granules, hexagonal honeycomb, and glowing honey ribbon.',
        onScreenText: '🌿 3. Sube tus Defensas · ☀️ 4. 100% Pura y Orgánica',
        voiceoverEs: 'Cien por ciento pura, cruda y orgánica, llena de enzimas y antioxidantes que fortalecen tu sistema inmune.',
      },
      {
        sceneNumber: 4,
        timeRange: '00:12 – 00:16s',
        title: 'Escena 4: Cierre (1 Cucharadita cada Mañana)',
        purpose: 'Invitar a incorporarla en la rutina diaria y cerrar el pedido.',
        flowTool: 'Frames to Video (First → Last Frame)',
        cameraMotion: 'Plano heroico cálido con caída continua de miel',
        promptEs:
          'Plano final luminoso del tarro de Miel & Propóleo Artesanal con el hilo dorado de miel brillando a contraluz.',
        promptEn:
          'Luminous final hero shot of the Artisanal Honey & Propolis jar with the golden honey ribbon glowing in backlight.',
        onScreenText: 'Tarro de 350g · 1 cucharadita cada mañana · ¡Pídelo hoy!',
        voiceoverEs: 'Una cucharadita cada mañana para cuidar a quienes más quieres. ¡Pide tu Miel con Propóleo hoy!',
      },
    ],
  },
];

export interface AnnotatedCallout {
  number: number;
  title: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface StepGuideItem {
  stepNumber: number;
  badge: string;
  toolName: 'Google Gemini' | 'Google Flow';
  title: string;
  subtitle: string;
  summary: string;
  proTip: string;
  callouts: AnnotatedCallout[];
}

export const STEP_BY_STEP_GUIDE: StepGuideItem[] = [
  {
    stepNumber: 1,
    badge: 'PASO 1 DE 6 · EN GOOGLE GEMINI',
    toolName: 'Google Gemini',
    title: 'Genera la Imagen Base o Póster de Beneficios en Gemini',
    subtitle: 'Elige entre Fotografía Limpia de Estudio (para animar el entorno) o Póster Infográfico 9:16 con 4 Medallones Dorados.',
    summary:
      'Antes de abrir Google Flow, todo gran video de producto natural nace en Gemini (Imagen 3). Aquí defines la forma exacta del envase, la textura (gotas de rocío, vidrio ámbar, relieve dorado) y los ingredientes o medallones de beneficios.',
    proTip:
      'Consejo Pro: Pídele a Gemini primero una "Versión Limpia sin textos flotantes" (para usarla en la Escena 1 de Flow) y luego la "Versión Póster con los 4 Medallones Dorados de Beneficios" (para el cierre en la Escena 4).',
    callouts: [
      {
        number: 1,
        title: 'Caja de Prompt Estructurado en Gemini',
        description:
          'Escribe la fórmula de 5 bloques: [Tipo de Envase y Etiqueta] + [Iluminación de Estudio] + [Ingredientes / 4 Sellos de Beneficios] + [Fondo Botánico] + [Proporción 9:16 o 1:1 y Lente 85mm].',
        xPercent: 18,
        yPercent: 78,
      },
      {
        number: 2,
        title: 'Verificación de Textos en la Etiqueta',
        description:
          'Revisa que el nombre del producto (ej. "Zooone Eye Vitamin" o "FOS Probióticos y Zinc") esté bien escrito. Si alguna letra falla, haz clic en "Regenerar" o pide corrección puntual.',
        xPercent: 48,
        yPercent: 42,
      },
      {
        number: 3,
        title: 'Los 4 Medallones Dorados de Beneficios',
        description:
          'Para videos de beneficios, indica exactamente los 4 textos cortos (máximo 3 palabras por sello, ej. "Intestino Saludable", "Defensas Altas").',
        xPercent: 75,
        yPercent: 62,
      },
      {
        number: 4,
        title: 'Botón Descargar en Tamaño Completo',
        description:
          'Haz clic en el icono de descarga arriba a la derecha de la imagen en Gemini para guardarla en alta resolución (.png o .jpg) antes de ir a Flow.',
        xPercent: 86,
        yPercent: 16,
      },
    ],
  },
  {
    stepNumber: 2,
    badge: 'PASO 2 DE 6 · EN GOOGLE FLOW',
    toolName: 'Google Flow',
    title: 'Abre Google Flow y Configura el Formato y Modelo Veo',
    subtitle: 'Ingresa a labs.google/fx/tools/flow, crea un proyecto nuevo y selecciona el formato vertical 9:16 o 16:9.',
    summary:
      'Google Flow es el estudio cinematográfico de IA de Google impulsado por el modelo Veo. Su ventaja frente a otros generadores es que te permite controlar fotogramas exactos, ingredientes visuales y movimientos de cámara profesionales.',
    proTip:
      'Si tu video es para Estados de WhatsApp, Reels o TikTok (como tus ejemplos de Zooone y Greensofg), selecciona siempre la proporción 9:16 (Vertical) antes de subir tu imagen.',
    callouts: [
      {
        number: 1,
        title: 'Botón "+ New Project" (Nuevo Proyecto)',
        description:
          'En la pantalla principal de Google Flow, haz clic en "+ New Project" para abrir el lienzo de creación y el Scene Builder.',
        xPercent: 16,
        yPercent: 18,
      },
      {
        number: 2,
        title: 'Selector de Modelo (Veo 2 / Veo 3 Quality)',
        description:
          'En la esquina del panel de generación, asegúrate de elegir la versión de máxima calidad de Veo para conservar las letras de la etiqueta sin distorsión.',
        xPercent: 78,
        yPercent: 20,
      },
      {
        number: 3,
        title: 'Selector de Aspect Ratio (9:16 Vertical vs 16:9)',
        description:
          'Cambia el formato a 9:16 Portrait para anuncios verticales de beneficios o 16:9 Landscape para portadas web y YouTube.',
        xPercent: 62,
        yPercent: 20,
      },
      {
        number: 4,
        title: 'Selector de Modo: "Frames to Video" vs "Ingredients"',
        description:
          'Aquí eliges cómo trabajará Flow: anclando tu foto como primer fotograma ("Frames to Video") o mezclando activos ("Ingredients").',
        xPercent: 28,
        yPercent: 82,
      },
    ],
  },
  {
    stepNumber: 3,
    badge: 'PASO 3 DE 6 · EL SECRETO CLAVE EN FLOW',
    toolName: 'Google Flow',
    title: 'Usa "Frames to Video" para que el Frasco NO se Deforme',
    subtitle: 'Sube la imagen de Gemini en la casilla "First Frame" (Primer Fotograma) para blindar la etiqueta del producto.',
    summary:
      'El error número 1 al crear videos con IA es pedir un producto desde cero solo con texto (las letras de la etiqueta salen borrosas o cambiantes). Al subir tu imagen de Gemini en "First Frame", Flow usa tu foto exacta como punto de partida.',
    proTip:
      'También puedes subir la foto limpia en "First Frame" (Fotograma Inicial) y el póster con los 4 medallones dorados en "Last Frame" (Fotograma Final) para que Flow cree una transición mágica hacia los beneficios.',
    callouts: [
      {
        number: 1,
        title: 'Pestaña "Frames to Video" (Fotogramas a Video)',
        description:
          'Selecciona esta pestaña en la barra inferior izquierda del generador de Google Flow.',
        xPercent: 18,
        yPercent: 24,
      },
      {
        number: 2,
        title: 'Casilla "First Frame" (Fotograma Inicial)',
        description:
          'Haz clic en el signo "+" de First Frame y sube la imagen del producto que descargaste de Gemini. Esto congela el diseño real de tu envase.',
        xPercent: 32,
        yPercent: 56,
      },
      {
        number: 3,
        title: 'Casilla Opcional "Last Frame" (Fotograma Final)',
        description:
          'En la escena final de tu video, coloca aquí el Póster Infográfico con los 4 beneficios dorados para que el video cierre con toda la información.',
        xPercent: 66,
        yPercent: 56,
      },
      {
        number: 4,
        title: 'Indicador de Fidelidad del Envase',
        description:
          'Al estar anclado al First Frame, solo necesitas describir en el prompt qué se mueve alrededor (luz, hojas, polvo, agua) mientras el frasco permanece intacto.',
        xPercent: 50,
        yPercent: 28,
      },
    ],
  },
  {
    stepNumber: 4,
    badge: 'PASO 4 DE 6 · CÁMARA Y PROMPT DE ACCIÓN',
    toolName: 'Google Flow',
    title: 'Configura "Camera Motion" y el Prompt de Movimiento',
    subtitle: 'Elige movimientos suaves (Dolly In u Orbit corto) y describe la acción de los elementos naturales.',
    summary:
      'En Google Flow no necesitas volver a describir toda la etiqueta del frasco (porque ya está en la imagen). En la caja de prompt de Flow debes describir: 1) que el frasco permanece firme, y 2) cómo se mueven la luz, el agua, el polvo dorado o las hojas.',
    proTip:
      'Evita giros de 360° completos porque la IA tendría que inventar la parte trasera del envase. Usa "Dolly In lento" o "Orbit suave de 15 grados".',
    callouts: [
      {
        number: 1,
        title: 'Menú "Camera Motion" (Movimiento de Cámara)',
        description:
          'Abre el selector de cámara de Flow y elige "Dolly In" (acercamiento cinematográfico), "Orbit" (giro suave) o "Static" (cámara fija mientras se mueve el agua/polvo).',
        xPercent: 22,
        yPercent: 30,
      },
      {
        number: 2,
        title: 'Regla de Oro en el Prompt de Flow',
        description:
          'Incluye siempre la frase: "The product bottle remains perfectly still and sharp in the center while..." (El frasco permanece firme y nítido en el centro mientras...).',
        xPercent: 52,
        yPercent: 68,
      },
      {
        number: 3,
        title: 'Descripción de la Física Natural (Slow Motion)',
        description:
          'Añade "in super slow motion" para que las gotas de agua, la miel cayendo o el polvo de cúrcuma se muevan con elegancia comercial.',
        xPercent: 75,
        yPercent: 68,
      },
      {
        number: 4,
        title: 'Botón "Generate" (Generar 4 Variaciones)',
        description:
          'Flow generará hasta 4 clips de video simultáneos para tu escena. Reprodúcelos y elige el que mantenga la etiqueta más nítida.',
        xPercent: 88,
        yPercent: 80,
      },
    ],
  },
  {
    stepNumber: 5,
    badge: 'PASO 5 DE 6 · INGREDIENTES EN ACCIÓN',
    toolName: 'Google Flow',
    title: 'Usa "Ingredients" para Mostrar de Qué Está Hecho y sus Beneficios',
    subtitle: 'Combina la imagen de tu frasco con fotos de los ingredientes puros (cúrcuma, menta, miel, cápsulas) para la Escena 2 y 3.',
    summary:
      'Cuando explicas los beneficios de un producto natural (ej. "Con Luteína pura", "Con Zinc y Probióticos", "Con Cúrcuma y Jengibre"), el modo "Ingredients" de Flow te permite subir hasta 3 referencias visuales para crear una escena de ingredientes vivos.',
    proTip:
      'Usa este modo para las escenas intermedias (segundos 4 al 12) mientras la voz en off explica los Beneficios 1, 2, 3 y 4 del producto.',
    callouts: [
      {
        number: 1,
        title: 'Bandeja "Ingredients" (Ingredientes del Video)',
        description:
          'En el panel izquierdo de Flow, sube como Ingrediente #1 tu frasco y como Ingrediente #2 los elementos botánicos (hojas de menta, raíces, cápsulas).',
        xPercent: 18,
        yPercent: 48,
      },
      {
        number: 2,
        title: 'Selección de Activos para la Escena',
        description:
          'Marca las casillas de los ingredientes que quieres que aparezcan integrados en el nuevo clip de 4 segundos.',
        xPercent: 44,
        yPercent: 48,
      },
      {
        number: 3,
        title: 'Prompt de Demostración de Beneficio',
        description:
          'Pide un plano macro que resalte la frescura de los ingredientes junto al envase iluminado con luz dorada.',
        xPercent: 68,
        yPercent: 72,
      },
      {
        number: 4,
        title: 'Botón "Add to Scene" (Añadir a la Escena)',
        description:
          'Cuando tengas el clip perfecto de los ingredientes, haz clic en "Add to Scene" para enviarlo a la línea de tiempo principal.',
        xPercent: 85,
        yPercent: 32,
      },
    ],
  },
  {
    stepNumber: 6,
    badge: 'PASO 6 DE 6 · VIDEO EXPLICATIVO DE BENEFICIOS',
    toolName: 'Google Flow',
    title: 'Arma el Video de Beneficios en "Scene Builder" y Exporta',
    subtitle: 'Une las 4 escenas (Gancho → Beneficios 1-2 → Beneficios 3-4 → Cierre con Dosis) en la línea de tiempo de Flow.',
    summary:
      'En el "Scene Builder" (Constructor de Escenas) de Google Flow encadenas tus 4 clips de 4 segundos para formar un spot comercial completo de 16 segundos donde se explican claramente todos los beneficios del producto natural.',
    proTip:
      'Usa la función "Extend" (Extender) en el Scene Builder si quieres que una escena continúe el movimiento exacto del clip anterior sin cortes bruscos.',
    callouts: [
      {
        number: 1,
        title: 'Clip 1 (0–4s): Gancho Visual + Promesa',
        description:
          'El primer clip en la línea de tiempo muestra la revelación del frasco y plantea la pregunta gancho (ej. "¿Ojos cansados?" o "¿Abdomen inflamado?").',
        xPercent: 16,
        yPercent: 58,
      },
      {
        number: 2,
        title: 'Clips 2 y 3 (4–12s): Explicación de los 4 Beneficios',
        description:
          'Los clips centrales muestran el giro orbital y los ingredientes mientras se presentan los 4 beneficios clave del producto (2 segundos por beneficio).',
        xPercent: 46,
        yPercent: 58,
      },
      {
        number: 3,
        title: 'Clip 4 (12–16s): Cierre con Póster Infográfico y Dosis',
        description:
          'El último clip muestra los 4 medallones dorados de beneficios y el modo de uso ("2 cápsulas al día · Pídelo hoy").',
        xPercent: 74,
        yPercent: 58,
      },
      {
        number: 4,
        title: 'Botón "Export Video (MP4)"',
        description:
          'Arriba a la derecha en el Scene Builder, exporta tu secuencia unificada en MP4 lista para subir a WhatsApp Status, Instagram Reels o TikTok.',
        xPercent: 88,
        yPercent: 18,
      },
    ],
  },
];
