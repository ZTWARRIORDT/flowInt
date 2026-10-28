export interface StudioOptionItem {
  id: string;
  label: string;
  shortDesc?: string;
  badge?: string;
  promptEs: string;
  promptEn: string;
  isCustom?: boolean;
}

export type PackagingPresentationMode =
  | 'solo'
  | 'con-contenido'
  | 'con-cuchara'
  | 'con-gotero-activo'
  | 'con-spray-niebla'
  | 'con-miel-cucharon'
  | 'con-fruto-fresco';

export interface PackagingPresentationOption {
  id: PackagingPresentationMode;
  label: string;
  badge: string;
  shortDesc: string;
  promptEs: string;
  promptEn: string;
}

export type InfographicStyle =
  | 'none'
  | 'pill-badges'
  | 'callout-pins'
  | 'live-ingredients-labels'
  | 'metric-cards'
  | 'editorial-typography'
  | 'gold-3d'
  | 'crystal-minimal';

export interface InfographicStyleOption {
  id: InfographicStyle;
  label: string;
  badge: string;
  iconType: string;
  shortDesc: string;
}

export interface CommercialEnvironmentOption {
  id: string;
  label: string;
  badge: string;
  shortDesc: string;
  surfaceEs: string;
  surfaceEn: string;
  lightingEs: string;
  lightingEn: string;
  promptEs: string;
  promptEn: string;
}

export const COMMERCIAL_ENVIRONMENTS: CommercialEnvironmentOption[] = [
  {
    id: 'estudio-neutro',
    label: 'Estudio Comercial Neutro',
    badge: 'E-Commerce Puro',
    shortDesc: 'Fondo infinito minimalista en tono neutro suave con iluminación difusa 5500K y sombras de contacto limpias.',
    surfaceEs: 'posado sobre una superficie mate lisa y neutra en suave tono arena/gris claro con fondo infinito de estudio comercial sin distracciones',
    surfaceEn: 'resting on a smooth neutral matte surface in soft sand/light-grey tone against a distraction-free commercial studio infinity backdrop',
    lightingEs: 'iluminación de estudio comercial neutra difusa de tres puntos (luz blanca 5500K de alta fidelidad) con sombras de contacto naturales y suaves',
    lightingEn: 'neutral three-point commercial studio diffused lighting (5500K true-to-life white light) with clean natural soft contact shadows',
    promptEs: 'posado sobre una superficie mate lisa y neutra con fondo infinito de estudio comercial limpio sin distracciones, bajo iluminación de estudio comercial difusa (luz neutra 5500K de alta fidelidad) con sombras naturales suaves',
    promptEn: 'resting on a smooth neutral matte surface against a clean commercial studio infinity backdrop without distractions, under diffused commercial studio lighting (5500K true-to-life neutral light) with soft natural shadows',
  },
  {
    id: 'naturaleza-bosque',
    label: 'Naturaleza & Rocío Fresco',
    badge: 'Orgánico / Botánico',
    shortDesc: 'Superficie de madera natural húmeda con musgo suave, luz de sol matutino filtrada y bokeh orgánico.',
    surfaceEs: 'posado sobre una mesa de madera natural rústica húmeda con sutil musgo verde vivo sobre un fondo botánico orgánico en suave desenfoque bokeh',
    surfaceEn: 'resting on a wet rustic natural wooden tabletop with subtle live green moss against a softly blurred organic botanical bokeh background',
    lightingEs: 'iluminación natural de sol matutino suave atravesando follaje con brillos especulares en microgotas de rocío fresco',
    lightingEn: 'soft morning sunlight filtering through botanical canopy with gentle specular highlights on fresh dew micro-droplets',
    promptEs: 'posado sobre madera natural húmeda con sutil musgo verde sobre un fondo botánico orgánico en suave desenfoque bokeh, bajo iluminación natural de sol matutino suave filtrado y microgotas de rocío fresco',
    promptEn: 'resting on wet natural wood with subtle live green moss against a softly blurred botanical bokeh background, under soft filtered morning sunlight and fresh dew micro-droplets',
  },
  {
    id: 'pedestal-spa',
    label: 'Pedestal Spa & Bienestar',
    badge: 'Vogue / Cosmética',
    shortDesc: 'Podio arquitectónico de travertino o mármol beige con luz cálida de ventana y sombras de hojas proyectadas.',
    surfaceEs: 'elevado sobre un bloque arquitectónico geométrico de piedra travertino porosa beige en un entorno limpio de spa contemporáneo',
    surfaceEn: 'elevated on a geometric architectural block of porous beige travertine stone in a clean contemporary wellness spa setting',
    lightingEs: 'iluminación arquitectónica de spa con luz cálida suave de ventana proyectando sombras orgánicas de hojas de palmera (dappled gobo shadows)',
    lightingEn: 'architectural luxury spa lighting with soft warm window sunlight casting organic palm leaf shadows (dappled gobo leaf shadows)',
    promptEs: 'elevado sobre un podio arquitectónico de piedra travertino beige en un entorno zen de spa contemporáneo, bajo luz cálida suave de ventana proyectando sombras sutiles de hojas botánicas',
    promptEn: 'elevated on an architectural podium of beige travertine stone in a contemporary wellness spa setting, under soft warm window sunlight casting subtle botanical leaf shadows',
  },
  {
    id: 'agua-zen',
    label: 'Agua Zen & Pureza Cristalina',
    badge: 'Fresco / Detox',
    shortDesc: 'Superficie con espejo de agua cristalina pura, microondas luminosas y reflejos cáusticos celestes.',
    surfaceEs: 'posado sobre una piedra plana de río emergiendo de un espejo de agua cristalina poco profundo con ondas circulares sutiles',
    surfaceEn: 'resting on a flat smooth river stone emerging from a shallow pool of crystal-clear water with subtle rippling circular waves',
    lightingEs: 'iluminación diurna cristalina de clave alta (high-key daylight) con reflejos cáusticos luminosos y transparencia acuática',
    lightingEn: 'bright crystal-clear high-key daylight with luminous aquatic caustic refractions and pure transparency',
    promptEs: 'posado sobre una piedra plana de río emergiendo de un espejo de agua cristalina con ondas suaves y reflejos celestes, bajo luz diurna cristalina pura de clave alta con destellos cáusticos',
    promptEn: 'resting on a flat river stone emerging from a shallow pool of crystal-clear water with gentle ripples and pure reflections, under bright crystal daylight with caustic light refractions',
  },
  {
    id: 'dark-luxury',
    label: 'Pizarra Negra & Dark Luxury',
    badge: 'Alto Impacto Premium',
    shortDesc: 'Bloque de piedra pizarra negra mate con contraluz sutil, destellos especulares y contraste refinado.',
    surfaceEs: 'posado sobre una losa pulida de piedra pizarra negra húmeda con reflejos especulares oscuros sobre fondo negro mate refinado',
    surfaceEn: 'resting on a polished wet black slate stone slab with deep specular reflections against a sleek matte dark studio background',
    lightingEs: 'iluminación dramática chiaroscuro de lujo con doble luz de contorno (rim light) que perfila la silueta del envase con elegancia',
    lightingEn: 'dramatic luxury chiaroscuro lighting with dual edge rim lighting outlining the container silhouette with sleek elegance',
    promptEs: 'posado sobre una bandeja de piedra pizarra negra húmeda con sutiles reflejos especulares sobre fondo oscuro refinado, bajo iluminación dramática chiaroscuro de lujo con luz de contorno elegante',
    promptEn: 'resting on a wet black slate stone slab with subtle specular reflections against a sleek dark studio background, under dramatic luxury chiaroscuro lighting with elegant rim edge light',
  },
];

export interface PhotoTypeOption extends StudioOptionItem {
  recommendedShotId: string;
  recommendedLensId: string;
  recommendedLightingId: string;
  includeMedallionsByDefault: boolean;
}

export interface ProductQuickPreset {
  id: string;
  label: string;
  productName: string;
  headline: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  dosage: string;
  photoTypeId: string;
  shotId: string;
  lensId: string;
  environmentId?: string;
  lightingId?: string;
  packagingId: string;
  packagingPresentation?: PackagingPresentationMode;
  surfaceId?: string;
  ingredientIds?: string[];
  colorMoodId?: string;
  aspectRatio: '1:1' | '9:16' | '4:5' | '16:9';
  voiceIndex: number;
  musicIndex: number;
  realProductColor?: string;
}

export const PHOTO_TYPES: PhotoTypeOption[] = [
  {
    id: 'poster-infografico-flow',
    label: 'Póster E-Commerce (Flow / Nanobanana)',
    badge: 'Nanobanana Pro',
    shortDesc: 'Composición de alta conversión: envase al centro con softgels, espacio superior libre para titular, y medallones laterales con beneficios e ingredientes.',
    promptEs: 'Fotografía comercial publicitaria tipo póster e-commerce de alta conversión en composición equilibrada: envase protagónico en el centro con espacio de aire superior limpio (negative space) para titular de campaña, flanqueado armónicamente por medallones circulares con iconos simbólicos 3D en relieve',
    promptEn: 'High-converting commercial e-commerce advertising poster photography with balanced composition: hero product centered with clean top negative breathing room for campaign headline, flanked harmoniously by circular medallions featuring 3D embossed symbolic icons',
    recommendedShotId: 'eye-level',
    recommendedLensId: '85mm-f18',
    recommendedLightingId: 'estudio-rim',
    includeMedallionsByDefault: true,
  },
  {
    id: 'poster-medallones',
    label: 'Póster con 4 Medallones 3D',
    badge: 'Ideal para Flow',
    shortDesc: 'Envase central rodeado de 4 medallones dorados con iconos 3D de beneficios (sin letras pequeñas).',
    promptEs: 'Fotografía comercial publicitaria de estudio tipo póster con composición simétrica de alto impacto',
    promptEn: 'High-impact symmetrical commercial advertising studio poster product photography',
    recommendedShotId: 'eye-level',
    recommendedLensId: '85mm-f18',
    recommendedLightingId: 'estudio-rim',
    includeMedallionsByDefault: true,
  },
  {
    id: 'hero-estudio',
    label: 'Hero Shot Limpio (Catálogo)',
    badge: 'E-commerce',
    shortDesc: 'Protagonismo absoluto del envase con botánica limpia alrededor, sin medallones flotantes.',
    promptEs: 'Fotografía Hero Shot comercial limpia de catálogo premium con protagonismo absoluto en el envase',
    promptEn: 'Clean premium catalog commercial Hero Shot photography with absolute focus on the product container',
    recommendedShotId: 'contrapicado-heroico',
    recommendedLensId: '85mm-f18',
    recommendedLightingId: 'hora-dorada',
    includeMedallionsByDefault: false,
  },
  {
    id: 'splash-velocidad',
    label: 'Splash & Alta Velocidad',
    badge: '1/4000s Freeze',
    shortDesc: 'Explosión de polvo botánico o corona de agua cristalina congelada en el aire a alta velocidad.',
    promptEs: 'Fotografía publicitaria de alta velocidad (1/4000s freeze motion) con acción dinámica congelada en el aire',
    promptEn: 'High-speed commercial advertising photography (1/4000s freeze motion) with dynamic mid-air action',
    recommendedShotId: 'contrapicado-heroico',
    recommendedLensId: '90mm-highspeed',
    recommendedLightingId: 'moody-contraluz',
    includeMedallionsByDefault: true,
  },
  {
    id: 'flat-lay-cenital',
    label: 'Flat Lay Cenital (Bodegón)',
    badge: 'Vista 90°',
    shortDesc: 'Producto acostado sobre la mesa rodeado artísticamente de sus ingredientes puros vistos desde arriba.',
    promptEs: 'Fotografía Flat Lay cenital de bodegón orgánico con composición geométrica ordenada de ingredientes alrededor del producto',
    promptEn: 'Organic still-life overhead Flat Lay photography with an artfully arranged geometric composition of raw ingredients around the product',
    recommendedShotId: 'cenital-90',
    recommendedLensId: '50mm-f14',
    recommendedLightingId: 'softbox-cenital',
    includeMedallionsByDefault: false,
  },
  {
    id: 'macro-textura',
    label: 'Macro Textura y Pureza',
    badge: 'Ultra Detalle',
    shortDesc: 'Primerísimo plano destacando gotas de rocío, textura de miel/sérum, cápsulas o relieve dorado.',
    promptEs: 'Fotografía macro sensorial de ultra detalle enfocada en la pureza de las texturas, gotas de frescura y acabados en relieve del envase',
    promptEn: 'Ultra-detailed sensory macro photography focused on texture purity, freshness droplets, and embossed container finishes',
    recommendedShotId: 'macro-extremo',
    recommendedLensId: '100mm-macro',
    recommendedLightingId: 'hora-dorada',
    includeMedallionsByDefault: false,
  },
  {
    id: 'lifestyle-uso',
    label: 'Lifestyle Orgánico en Uso',
    badge: 'Humano / Real',
    shortDesc: 'Escena cálida de rutina diaria (mesa de mañana o spa) con manos cuidadas interactuando con el producto.',
    promptEs: 'Fotografía editorial Lifestyle de bienestar cotidiano mostrando el producto en un entorno real cálido con manos elegantes interactuando sutilmente',
    promptEn: 'Everyday wellness editorial Lifestyle photography showing the product in a warm real-world setting with elegant hands subtly interacting',
    recommendedShotId: 'picado-45',
    recommendedLensId: '50mm-f14',
    recommendedLightingId: 'hora-dorada',
    includeMedallionsByDefault: false,
  },
  {
    id: 'podio-minimal',
    label: 'Podio Arquitectónico Spa',
    badge: 'Luxury Minimal',
    shortDesc: 'Envase elevado sobre un pedestal geométrico de piedra natural con sombras de hojas proyectadas.',
    promptEs: 'Fotografía editorial minimalista de alta gama con el producto elevado sobre un podio arquitectónico de piedra natural',
    promptEn: 'High-end minimalist editorial photography featuring the product elevated on a natural stone architectural podium',
    recommendedShotId: 'eye-level',
    recommendedLensId: '85mm-f18',
    recommendedLightingId: 'spa-gobo',
    includeMedallionsByDefault: true,
  },
  {
    id: 'naturaleza-epica',
    label: 'Escenario Épico en Naturaleza',
    badge: 'Inmersivo',
    shortDesc: 'El producto integrado directamente en un ecosistema virgen (bosque húmedo, río o colmena al sol).',
    promptEs: 'Fotografía comercial inmersiva en locación natural virgen con profundidad atmosférica y realismo botánico',
    promptEn: 'Immersive commercial location photography set in an untouched natural ecosystem with atmospheric depth and botanical realism',
    recommendedShotId: 'rasante-mesa',
    recommendedLensId: '35mm-f2',
    recommendedLightingId: 'hora-dorada',
    includeMedallionsByDefault: true,
  },
];

export const CAMERA_SHOTS: StudioOptionItem[] = [
  {
    id: 'contrapicado-heroico',
    label: 'Contrapicado Heroico (Low Angle)',
    badge: 'Poder y Presencia',
    shortDesc: 'Cámara ligeramente por debajo mirando hacia arriba (15°); hace que el envase luzca imponente y premium.',
    promptEs: 'en plano contrapicado heroico (low-angle hero shot a 15 grados) que engrandece la silueta del envase',
    promptEn: 'shot from a heroic 15-degree low-angle perspective that gives the bottle a commanding, monumental presence',
  },
  {
    id: 'eye-level',
    label: 'Nivel de Ojos (Eye-Level 0°)',
    badge: 'Estándar Estudio',
    shortDesc: 'Cámara totalmente frontal a la altura del centro del envase; líneas verticales rectas sin distorsión.',
    promptEs: 'en plano frontal a nivel de los ojos (eye-level directo a 0 grados) perfectamente centrado y simétrico',
    promptEn: 'shot straight-on at eye-level (0-degree frontal angle), perfectly centered and symmetrical with zero distortion',
  },
  {
    id: 'cenital-90',
    label: 'Cenital 90° (Top-Down)',
    badge: 'Flat Lay',
    shortDesc: 'Vista perpendicular desde arriba hacia la mesa; ideal para rodear el producto de ingredientes.',
    promptEs: 'en plano cenital perpendicular de 90 grados desde arriba (top-down overhead view)',
    promptEn: 'shot from a perpendicular 90-degree overhead top-down perspective (flat lay angle)',
  },
  {
    id: 'picado-45',
    label: 'Picado Editorial (45° Angle)',
    badge: 'Perspectiva Natural',
    shortDesc: 'Vista diagonal superior como la mirada humana hacia una mesa; muestra etiqueta, tapa y base.',
    promptEs: 'en plano picado diagonal a 45 grados mostrando simultáneamente el frente del envase, su tapa y los ingredientes en la base',
    promptEn: 'shot from a 45-degree high editorial angle showcasing the front label, cap, and base ingredients simultaneously',
  },
  {
    id: 'macro-extremo',
    label: 'Plano Macro Extremo (Close-Up)',
    badge: 'Detalle Textura',
    shortDesc: 'Encuadre muy cerrado resaltando gotas de rocío, relieve metálico del logo y textura pura.',
    promptEs: 'en primerísimo plano macro extremo (extreme close-up shot) capturando cada microgota, textura orgánica y relieve metálico',
    promptEn: 'in an extreme macro close-up shot capturing every micro-droplet, organic texture, and metallic relief detail',
  },
  {
    id: 'tres-cuartos',
    label: 'Ángulo 3/4 Dinámico',
    badge: 'Volumen 3D',
    shortDesc: 'Giro suave de 30° que aporta profundidad tridimensional al envase y su etiqueta.',
    promptEs: 'en plano medio con ángulo dinámico de tres cuartos (3/4 commercial angle) que resalta el volumen tridimensional del envase',
    promptEn: 'in a medium shot at a dynamic three-quarter commercial angle emphasizing the 3D volume of the container',
  },
  {
    id: 'rasante-mesa',
    label: 'Plano Rasante (Surface Level)',
    badge: 'Profundidad',
    shortDesc: 'Cámara al ras de la mesa con hojas o ingredientes desenfocados en primer término (foreground bokeh).',
    promptEs: 'en plano rasante a nivel de la superficie con elementos botánicos suavemente desenfocados en primer término (foreground bokeh)',
    promptEn: 'at surface-skimming tabletop level with softly blurred botanical elements in the foreground creating deep dimensional bokeh',
  },
];

export const CAMERA_LENSES: StudioOptionItem[] = [
  {
    id: '85mm-f18',
    label: '85mm f/1.8 Prime (Bokeh Cremoso)',
    badge: 'Favorito',
    shortDesc: 'Comprime el fondo con un desenfoque suave de estudio manteniendo el envase 100% nítido.',
    promptEs: 'capturado con lente prime 85mm f/1.8, enfoque selectivo ultra nítido en el envase y fondo con bokeh cremoso',
    promptEn: 'captured with an 85mm f/1.8 prime lens, tack-sharp focus on the bottle and creamy background bokeh',
  },
  {
    id: '100mm-macro',
    label: '100mm f/2.8 Macro (Ultra Detalle)',
    badge: 'Nitidez 8K',
    shortDesc: 'Óptica macro profesional para ver la refracción en gotas de agua, cristales y fibras botánicas.',
    promptEs: 'capturado con lente macro 100mm f/2.8 con nitidez microscópica en texturas, vidrio y gotas de rocío',
    promptEn: 'captured with a 100mm f/2.8 macro lens delivering microscopic sharpness on textures, glass, and dew drops',
  },
  {
    id: '50mm-f14',
    label: '50mm f/1.4 Editorial Natural',
    badge: 'Orgánico',
    shortDesc: 'Perspectiva natural y luminosa ideal para bodegones, flat lays y escenas de estilo de vida.',
    promptEs: 'capturado con lente 50mm f/1.4 de estética editorial orgánica y transición suave de profundidad de campo',
    promptEn: 'captured with a 50mm f/1.4 lens for an organic editorial aesthetic and smooth depth-of-field roll-off',
  },
  {
    id: '90mm-highspeed',
    label: '90mm f/4 High-Speed Sync',
    badge: 'Splash / Polvo',
    shortDesc: 'Mayor profundidad de campo y obturación ultrarrápida para congelar partículas y líquidos.',
    promptEs: 'capturado con lente de estudio 90mm f/4 de alta velocidad congelando cada partícula y gota en el aire con nitidez total',
    promptEn: 'captured with a 90mm f/4 high-speed studio lens freezing every airborne particle and droplet in crystal-clear focus',
  },
  {
    id: '35mm-f2',
    label: '35mm f/2.0 Gran Angular Ambiental',
    badge: 'Paisaje / Entorno',
    shortDesc: 'Abre el campo visual para mostrar el bosque, el río o el spa alrededor del producto.',
    promptEs: 'capturado con lente 35mm f/2.0 ambiental que integra el producto dentro de la amplitud del paisaje natural',
    promptEn: 'captured with a 35mm f/2.0 environmental lens integrating the product within the wider natural landscape',
  },
];

export const LIGHTING_STYLES: StudioOptionItem[] = [
  {
    id: 'hora-dorada',
    label: 'Sol de Amanecer / Hora Dorada',
    badge: 'Cálido Natural',
    shortDesc: 'Rayos solares dorados atravesando hojas con atmósfera matutina mágica.',
    promptEs: 'iluminación natural de hora dorada al amanecer con rayos de sol cálidos atravesando el follaje y brillos especulares suaves',
    promptEn: 'golden hour sunrise natural lighting with warm sunbeams filtering through foliage and soft specular highlights',
  },
  {
    id: 'estudio-rim',
    label: 'Estudio Comercial + Rim Light Dorado',
    badge: 'Publicitario',
    shortDesc: 'Luz principal suave + doble luz de recorte lateral que hace brillar el vidrio y los logos en oro.',
    promptEs: 'iluminación de estudio comercial de tres puntos con luz de recorte cálida (warm golden rim lighting) que perfila el envase y hace relucir el oro metálico',
    promptEn: 'three-point commercial studio lighting with warm golden rim lighting outlining the bottle and making the metallic gold gleam',
  },
  {
    id: 'moody-contraluz',
    label: 'Contraluz Dramático Oscuro (Moody)',
    badge: 'Alto Contraste',
    shortDesc: 'Fondo oscuro elegante con potente contraluz ámbar que enciende polvos, miel o líquidos.',
    promptEs: 'iluminación dramática chiaroscuro de lujo sobre fondo oscuro con potente contraluz ámbar que ilumina las partículas y el vidrio desde atrás',
    promptEn: 'dramatic luxury chiaroscuro studio lighting against a dark moody background with warm amber backlighting glowing through particles and glass',
  },
  {
    id: 'dia-cristalino',
    label: 'Luz de Día Cristalina (High-Key)',
    badge: 'Fresco / Detox',
    shortDesc: 'Luz solar de mediodía limpia, pura y luminosa; resalta la transparencia del agua y hojas verdes.',
    promptEs: 'iluminación diurna cristalina de clave alta (bright high-key natural daylight) con reflejos limpios de agua pura y frescura matutina',
    promptEn: 'bright high-key crystal natural daylight with clean pure water reflections and morning freshness',
  },
  {
    id: 'spa-gobo',
    label: 'Luz de Spa con Sombras de Follaje',
    badge: 'Editorial Cosmética',
    shortDesc: 'Luz cálida de ventana proyectando sombras orgánicas de hojas de palma sobre piedra.',
    promptEs: 'iluminación arquitectónica de spa con luz solar suave filtrada a través de hojas botánicas (dappled gobo leaf shadows) sobre tonos neutros',
    promptEn: 'architectural luxury spa lighting with soft sunlight filtered through botanical leaves casting dappled gobo shadows across warm neutrals',
  },
  {
    id: 'softbox-cenital',
    label: 'Softbox Difuso de Galería',
    badge: 'Cero Sombras Duras',
    shortDesc: 'Luz envolvente de estudio fotográfico que garantiza colores puros y lectura perfecta.',
    promptEs: 'iluminación envolvente de softbox difuso de estudio con degradados de luz sedosos en el cristal y colores fieles',
    promptEn: 'enveloping diffused studio softbox lighting with silky light gradients across the glass and true-to-life colors',
  },
];

export const PACKAGING_PRESENTATIONS: PackagingPresentationOption[] = [
  {
    id: 'solo',
    label: 'Solo el Envase',
    badge: 'Protagónico',
    shortDesc: 'Fotografía limpia y minimalista enfocada al 100% en el envase.',
    promptEs: 'presentado como envase único y protagónico con silueta limpia sobre la superficie',
    promptEn: 'presented cleanly as a standalone hero product with crisp silhouette on the surface',
  },
  {
    id: 'con-spray-niebla',
    label: 'Con Bruma / Niebla Atomizada',
    badge: 'Para Sprays',
    shortDesc: 'Fina nube de microgotas suspendidas en el aire a contraluz.',
    promptEs: 'con una fina bruma y nube suspendida de microgotas atomizadas en el aire iluminada a contraluz saliendo de la boquilla del spray',
    promptEn: 'with a delicate illuminated backlit fine-mist cloud of atomized micro-droplets suspended in the air diffusing from the spray nozzle',
  },
  {
    id: 'con-contenido',
    label: 'Con Muestra de Contenido',
    badge: 'Cápsulas / Gomitas',
    shortDesc: 'Muestra de cápsulas doradas, gomitas o extracto esparcida al frente.',
    promptEs: 'con una muestra estética de su contenido esparcida artísticamente en la base frontal: cápsulas softgel doradas traslúcidas que reflejan la luz y perlas de gelatina vegetal',
    promptEn: 'with an artful sample of its contents scattered at the front base: glowing translucent golden softgel capsules reflecting soft studio light',
  },
  {
    id: 'con-cuchara',
    label: 'Con Cuchara Artesanal de Polvo/Extracto',
    badge: 'Dosificador',
    shortDesc: 'Cuchara de madera con extracto puro en polvo reposando al lado.',
    promptEs: 'con una cuchara dosificadora de madera artesanal rústica con una muestra de extracto botánico en polvo posada al lado del envase',
    promptEn: 'with a rustic artisanal wooden dosing spoon holding a sample of botanical powder extract resting beside the container',
  },
  {
    id: 'con-gotero-activo',
    label: 'Con Pipeta y Gota Suspendida',
    badge: 'Gotas Activas',
    shortDesc: 'Pipeta de cristal abierta en ángulo con una gota ámbar luminosa.',
    promptEs: 'con la pipeta de cristal del gotero abierta en ángulo mostrando una gota traslúcida y luminosa suspendida en su punta',
    promptEn: 'with the glass dropper pipette resting open at an angle showing a luminous translucent droplet suspended at its tip',
  },
  {
    id: 'con-miel-cucharon',
    label: 'Con Cucharón Mielero / Panal',
    badge: 'Miel / Artesanal',
    shortDesc: 'Cucharón de madera con hilo espeso de miel dorada y panal.',
    promptEs: 'acompañado por un cucharón mielero de madera artesanal con un hilo espeso de miel dorada goteando lentamente y un trozo de panal natural',
    promptEn: 'accompanied by an artisanal wooden honey dipper with a slow stream of thick golden honey dripping beside a chunk of natural honeycomb',
  },
  {
    id: 'con-fruto-fresco',
    label: 'Con Fruto Fresco o Raíz Cortada',
    badge: 'Origen Botánico',
    shortDesc: 'Trozos de fruto fresco cortado o raíces húmedas en la base.',
    promptEs: 'acompañado en la base por rodajas frescas del ingrediente botánico puro y hojas aromáticas con gotas de rocío',
    promptEn: 'accompanied at the base by fresh slices of the raw botanical ingredient and aromatic leaves with fresh dew droplets',
  },
];

export const getCompatiblePresentations = (packagingId: string): PackagingPresentationMode[] => {
  const p = packagingId.toLowerCase();
  if (p.includes('spray') || p.includes('atomizador')) {
    return ['solo', 'con-spray-niebla', 'con-fruto-fresco'];
  }
  if (p.includes('gotero') || p.includes('pipeta')) {
    return ['solo', 'con-gotero-activo', 'con-fruto-fresco'];
  }
  if (p.includes('miel') || p.includes('hexagonal') || p.includes('yute')) {
    return ['solo', 'con-miel-cucharon', 'con-fruto-fresco'];
  }
  if (p.includes('pote') || p.includes('tarro') || p.includes('polvo') || p.includes('ancho')) {
    return ['solo', 'con-cuchara', 'con-fruto-fresco'];
  }
  if (p.includes('capsula') || p.includes('suplementero') || p.includes('frasco-ambar')) {
    return ['solo', 'con-contenido', 'con-fruto-fresco'];
  }
  if (p.includes('doypack') || p.includes('pouch') || p.includes('bolsa')) {
    return ['solo', 'con-contenido', 'con-cuchara', 'con-fruto-fresco'];
  }
  if (p.includes('jarabe') || p.includes('botella') || p.includes('elixir')) {
    return ['solo', 'con-fruto-fresco'];
  }
  return ['solo', 'con-contenido', 'con-cuchara', 'con-gotero-activo', 'con-spray-niebla', 'con-fruto-fresco'];
};

export const INFOGRAPHIC_STYLES: InfographicStyleOption[] = [
  {
    id: 'pill-badges',
    label: 'Badges Pill Minimalistas (+ Beneficios)',
    badge: 'Opción 1 · E-Commerce DTC',
    iconType: 'pill',
    shortDesc: 'Etiquetas flotantes con bordes redondeados y tipografía nítida (+ FLORA INTESTINAL).',
  },
  {
    id: 'callout-pins',
    label: 'Callout Pins con Líneas Guía',
    badge: 'Opción 2 · Clínico / Seed',
    iconType: 'pin',
    shortDesc: 'Líneas finas de precisión conectando el envase con punteros flotantes y datos.',
  },
  {
    id: 'live-ingredients-labels',
    label: 'Ingredientes Vivos con Etiquetas Tipográficas',
    badge: 'Opción 3 · Sensorial Botánico',
    iconType: 'leaf',
    shortDesc: 'Ingredientes reales frescos con pequeñas etiquetas en papel mate al lado.',
  },
  {
    id: 'metric-cards',
    label: 'Tarjetas de Métricas Clínicas (24/7, 100%)',
    badge: 'Opción 4 · Alto Impacto Ads',
    iconType: 'chart',
    shortDesc: 'Tarjetas de vidrio esmerilado con números y datos duros de conversión.',
  },
  {
    id: 'editorial-typography',
    label: 'Póster Tipográfico Editorial de Revista',
    badge: 'Opción 6 · Vogue Wellness',
    iconType: 'type',
    shortDesc: 'Titulares serif modernos y viñetas elegantes integradas en el aire superior.',
  },
  {
    id: 'gold-3d',
    label: 'Medallones 3D de Oro Cepillado',
    badge: 'Clásico Simétrico',
    iconType: 'award',
    shortDesc: 'Monedas circulares metálicas con iconos simbólicos grabados.',
  },
  {
    id: 'crystal-minimal',
    label: 'Esferas de Cristal Translúcido',
    badge: 'Minimalista',
    iconType: 'sparkles',
    shortDesc: 'Burbujas de agua y cristal con iconos 3D grabados y cáusticas de luz.',
  },
  {
    id: 'none',
    label: 'Sin Elementos Flotantes (Foto 100% Limpia)',
    badge: 'Catálogo Puro',
    iconType: 'shield',
    shortDesc: 'Composición limpia sin nada flotando, foco absoluto en el producto.',
  },
];

export const PACKAGING_OPTIONS: StudioOptionItem[] = [
  {
    id: 'gotero-vidrio-ambar',
    label: 'Frasco Gotero Ámbar',
    badge: 'Aceites / Sérums',
    shortDesc: 'Gotero clásico de vidrio ámbar con pipeta de cristal y bulbo dosificador.',
    promptEs: 'un frasco gotero de vidrio ámbar oscuro con pipeta de cristal, bulbo dosificador de silicona con anillo metálico dorado, gotas de rocío fresco y etiqueta botánica limpia en relieve',
    promptEn: 'a dark amber glass dropper bottle with clear glass pipette, silicone bulb with gold metallic collar, fine dew droplets, and clean embossed botanical label',
  },
  {
    id: 'spray-atomizador',
    label: 'Frasco Spray / Atomizador',
    badge: 'Propóleo / Brumas',
    shortDesc: 'Boquilla nebulizadora de spray bucal para garganta o bruma facial.',
    promptEs: 'un frasco de vidrio ámbar equipado con cabezal atomizador y boquilla spray ergonómica blanca para garganta (throat fine-mist spray actuator), tapa protectora traslúcida y etiqueta botánica médica en relieve',
    promptEn: 'an amber glass bottle equipped with an ergonomic white fine-mist throat spray actuator nozzle, translucent protective cap, and embossed medicinal botanical label',
  },
  {
    id: 'frasco-suplementero-capsulas',
    label: 'Bote Suplementero (Pill Jar)',
    badge: 'Cápsulas / Softgels',
    shortDesc: 'Frasco cilíndrico ámbar con tapa de rosca de seguridad ancha para pastillas o softgels.',
    promptEs: 'un frasco suplementero cilíndrico de vidrio o PET ámbar oscuro de grado farmacéutico con tapa rosca de seguridad ancha estriada negra mate y etiqueta envolvente con detalles dorados',
    promptEn: 'a pharmaceutical-grade dark amber cylindrical supplement pill bottle with wide ribbed matte black safety screw cap and wrap-around label with metallic gold accents',
  },
  {
    id: 'doypack-standup-pouch',
    label: 'Bolsa Doypack con Cierre Zip',
    badge: 'Gomitas / Polvos',
    shortDesc: 'Bolsa vertical flexible con sellado hermético superior y abre-fácil.',
    promptEs: 'un empaque vertical tipo bolsa Doypack (stand-up pouch) con acabado mate suave al tacto, sellado térmico superior con muesca abre-fácil, cierre hermético y logotipo botánico estampado en lámina metálica',
    promptEn: 'a stand-up flexible Doypack pouch with soft-touch matte finish, heat-sealed top with tear notch, zip closure, and metallic foil stamped botanical logo emblem',
  },
  {
    id: 'botella-jarabe-elixir',
    label: 'Botella de Jarabe / Elixir Líquido',
    badge: 'Colágeno / Tónico',
    shortDesc: 'Botella estilizada con copa medidora o tapa dosificadora superior.',
    promptEs: 'una botella estilizada de silueta ergonómica para suplemento líquido o elixir botánico con acabado azul oscuro o ámbar satinado, copa medidora transparente sobre la tapa y diseño tipográfico moderno',
    promptEn: 'a stylized ergonomic liquid supplement or botanical elixir bottle with smooth satin finish, transparent dosing measuring cup over the cap, and modern typography label',
  },
  {
    id: 'tarro-pomadera-crema',
    label: 'Tarro Bajo / Pomadera (Bálsamo)',
    badge: 'Cremas / Pomadas',
    shortDesc: 'Pomo de vidrio pesado de boca ancha para bálsamos o ungüentos.',
    promptEs: 'un tarro bajo cosmético de boca ancha de vidrio pesado ámbar para ungüento o pomada botánica con tapa de rosca metálica o de bambú y etiqueta botánica minimalista',
    promptEn: 'a low-profile heavy-base amber glass cosmetic ointment jar with brushed metal or bamboo screw lid and minimalist botanical label',
  },
  {
    id: 'tarro-hexagonal-yute',
    label: 'Tarro Hexagonal + Tela de Yute',
    badge: 'Miel / Artesanal',
    shortDesc: 'Tarro hexagonal de vidrio con miel dorada y tela de yute atada con cordel.',
    promptEs: 'un tarro hexagonal de vidrio transparente lleno de miel dorada brillante con un trozo de panal real adentro, tapa cubierta con tela de yute rústico atada con cordel y etiqueta kraft con logo dorado de abeja',
    promptEn: 'a clear hexagonal glass jar filled with glowing golden honey containing a real honeycomb chunk inside, topped with rustic burlap fabric tied with twine and a kraft label with an embossed gold bee logo',
  },
  {
    id: 'pote-ancho-gold',
    label: 'Pote Grande Colágeno/Proteína 500g',
    badge: 'Polvos / XXL',
    shortDesc: 'Pote ancho con tapa metálica dorada de rosca.',
    promptEs: 'un pote ancho premium de acabado verde esmeralda mate con tapa metálica dorada brillante y sello botánico central en relieve de oro 3D',
    promptEn: 'a wide premium matte emerald-green canister jar with a gleaming brushed gold lid and central 3D gold-embossed botanical crest',
  },
  // Alias de compatibilidad
  {
    id: 'frasco-ambar-dorado',
    label: 'Frasco Vidrio Ámbar + Tapa Dorada',
    badge: 'Suplementos',
    promptEs: 'un frasco cilíndrico de vidrio ámbar oscuro con gotas de rocío fresco, tapa metálica de oro cepillado y etiqueta verde bosque en relieve con un logo botánico dorado limpio',
    promptEn: 'a dark amber cylindrical glass bottle with fresh water droplets, brushed gold metallic cap, and embossed forest-green label featuring a clean gold botanical logo emblem',
  },
  {
    id: 'gotero-esmeralda',
    label: 'Gotero Esmeralda + Pipeta Cristal',
    badge: 'Detox / Gotas',
    promptEs: 'un frasco gotero de vidrio verde esmeralda traslúcido con pipeta de cristal, bulbo blanco con anillo dorado y etiqueta minimalista blanca con un logo simbólico de hoja verde en relieve',
    promptEn: 'a translucent emerald-green glass dropper bottle with glass pipette, white bulb with gold collar, and minimalist white label featuring an embossed green leaf symbolic logo',
  },
  {
    id: 'gotero-esmerilado-oro',
    label: 'Gotero Esmerilado + Cuello Oro Rosa',
    badge: 'Sérum / Facial',
    promptEs: 'un elegante frasco gotero de vidrio esmerilado ámbar traslúcido que deja ver el sérum dorado luminoso en su interior, con cuello metálico en oro rosa y logo floral estampado en lámina de oro',
    promptEn: 'an elegant frosted translucent amber glass dropper bottle glowing with golden serum inside, rose-gold metallic collar, and a minimalist gold-foil floral logo',
  },
  {
    id: 'frasco-ambar-negro',
    label: 'Frasco Ámbar + Tapa Negra & Etiqueta Mostaza',
    badge: 'Cúrcuma / Raíces',
    promptEs: 'un frasco robusto de vidrio ámbar con tapa negra mate y etiqueta color mostaza dorado con emblema circular metálico en relieve',
    promptEn: 'a sturdy amber glass supplement bottle with matte black cap and mustard-gold label featuring a metallic embossed circular emblem',
  },
  {
    id: 'doypack-kraft',
    label: 'Bolsa Doypack Kraft Orgánica',
    badge: 'Superfoods / Té',
    promptEs: 'un empaque vertical tipo bolsa Doypack de papel kraft orgánico texturizado con cierre hermético y sello circular estampado en oro metálico',
    promptEn: 'a stand-up textured organic kraft paper Doypack pouch with matte finish and a central metallic gold-foil stamped circular emblem',
  },
];

export const SURFACE_OPTIONS: StudioOptionItem[] = [
  {
    id: 'travertino-spa',
    label: 'Pedestal Travertino de Spa (Luz & Sombras de Palmera)',
    badge: 'Lujo Spa / Vogue',
    promptEs: 'posado sobre un bloque arquitectónico de piedra travertino beige porosa rodeado de musgo verde suave bajo luz cálida de ventana con sombras orgánicas de hojas de palmera',
    promptEn: 'resting on an architectural block of porous beige travertine stone surrounded by soft green moss under warm window light with organic palm leaf shadows',
  },
  {
    id: 'piedra-rio-agua',
    label: 'Piedra Zen sobre Espejo de Agua Cristalina',
    badge: 'Pureza Agua',
    promptEs: 'posado sobre una piedra volcánica oscura o de río plana y húmeda emergiendo de un espejo de agua cristalina con ondas suaves y reflejos celestes bajo el sol',
    promptEn: 'resting on a flat wet river stone emerging from a shallow pool of crystal-clear water with gentle sunlit ripples and pure reflections',
  },
  {
    id: 'estudio-arena-minimal',
    label: 'Estudio Minimalista Neutro Arena (Catálogo E-Commerce)',
    badge: 'Sin Distracciones',
    promptEs: 'posado sobre una superficie mate color arena neutra y suave con fondo de estudio minimalista sin distracciones, realzando la etiqueta del producto con nitidez pura',
    promptEn: 'resting on a smooth soft-sand neutral matte surface against a minimalist distraction-free studio background highlighting pure product label textures',
  },
  {
    id: 'roble-cocina-lino',
    label: 'Cocina Botánica de Roble & Lino Matutino',
    badge: 'Hogareño Cálido',
    promptEs: 'posado sobre una barra de cocina de roble claro escandinavo con un paño de lino natural beige y luz matutina fresca filtrándose por una gran ventana',
    promptEn: 'resting on a Scandinavian light oak kitchen counter with natural beige linen fabric and fresh morning sunlight streaming through a large window',
  },
  {
    id: 'madera-bosque',
    label: 'Madera Húmeda en Bosque Soleado',
    badge: 'Rústico Orgánico',
    promptEs: 'posado sobre una mesa de madera rústica húmeda con musgo suave en medio de un bosque verde desenfocado al amanecer',
    promptEn: 'resting on a wet rustic wooden table with soft moss set against a softly blurred sunlit morning forest background',
  },
  {
    id: 'manantial-musgo',
    label: 'Manantial de Montaña con Rocas y Musgo Vivo',
    badge: 'Naturaleza Pura',
    promptEs: 'posado entre rocas húmedas y musgo verde vibrante junto a un manantial de agua pura de montaña con microgotas de rocío matutino',
    promptEn: 'resting among wet rocks and vibrant green moss beside a natural pure mountain spring with fresh morning dew drops',
  },
  {
    id: 'pizarra-negra',
    label: 'Pizarra Negra Chiaroscuro (Dark Luxury)',
    badge: 'Alto Contraste',
    promptEs: 'posado sobre una bandeja de piedra pizarra negra húmeda con sutiles reflejos especulares sobre fondo oscuro y elegante con luz de contorno dorada',
    promptEn: 'resting on a wet black slate stone slab with subtle specular reflections against a dark moody studio background with golden rim lighting',
  },
  {
    id: 'pradera-atardecer',
    label: 'Pradera Botánica de Flores al Atardecer',
    badge: 'Hora Dorada',
    promptEs: 'posado en medio de una pradera botánica de flores silvestres, manzanilla y lavanda bañada por los tonos dorados y ámbar del atardecer',
    promptEn: 'resting amidst a botanical meadow of wild chamomile and lavender flowers bathed in golden amber sunset tones',
  },
  {
    id: 'marmol-esmeralda',
    label: 'Mármol Verde Esmeralda y Vetas de Oro',
    badge: 'Alta Gama',
    promptEs: 'posado sobre una superficie pulida de mármol verde esmeralda profundo con finas vetas doradas naturales',
    promptEn: 'resting on a polished deep emerald-green marble surface with fine natural golden veins',
  },
  {
    id: 'arena-zen',
    label: 'Arena Blanca Zen y Cantos Rodados',
    badge: 'Equilibrio Zen',
    promptEs: 'posado sobre arena blanca fina con ondas zen rastrilladas y piedras botánicas suaves bajo luz cálida',
    promptEn: 'resting on fine white zen garden sand with gentle raked waves and smooth botanical stones under warm light',
  },
];

export const INGREDIENT_EFFECTS: StudioOptionItem[] = [
  {
    id: 'gotas-rocio',
    label: 'Gotas de Rocío Fresco en el Envase',
    badge: 'Frescura',
    promptEs: 'microgotas cristalinas de rocío fresco adheridas a la superficie del envase',
    promptEn: 'crystal-clear fresh dew droplets clinging to the container surface',
  },
  {
    id: 'helechos-eucalipto',
    label: 'Helechos, Monstera y Hojas de Eucalipto',
    badge: 'Botánica',
    promptEs: 'hojas frescas de helecho verde, monstera y ramas aromáticas de eucalipto rodeando la base',
    promptEn: 'fresh green fern fronds, monstera, and aromatic eucalyptus leaves surrounding the base',
  },
  {
    id: 'polen-oro',
    label: 'Partículas de Polen Dorado y Bokeh',
    badge: 'Atmósfera',
    promptEs: 'partículas brillantes de polen dorado y destellos de luz bokeh flotando en el aire',
    promptEn: 'glowing golden pollen particles and warm bokeh light orbs floating in the air',
  },
  {
    id: 'explosion-curcuma',
    label: 'Explosión de Polvo Botánico Dorado',
    badge: 'Impacto',
    promptEs: 'una espectacular explosión en el aire de fino polvo botánico dorado detrás del envase',
    promptEn: 'a dramatic mid-air explosion of fine golden botanical powder erupting behind the bottle',
  },
  {
    id: 'raices-curcuma-jengibre',
    label: 'Raíces de Cúrcuma, Jengibre y Cuchara',
    badge: 'Raíces',
    promptEs: 'raíces frescas de cúrcuma naranja intenso, rodajas húmedas de jengibre y una cuchara de madera con extracto en polvo',
    promptEn: 'vibrant orange fresh turmeric roots, wet sliced ginger, and a wooden spoon filled with powdered extract',
  },
  {
    id: 'splash-agua-clorofila',
    label: 'Corona de Agua Cristalina Salpicando',
    badge: 'Splash',
    promptEs: 'una corona simétrica de agua cristalina y gotas esmeralda salpicando congeladas en el aire alrededor del envase',
    promptEn: 'a symmetrical crown splash of crystal-clear water and emerald droplets frozen in mid-air around the bottle',
  },
  {
    id: 'menta-matcha',
    label: 'Hojas de Menta Fresca y Té Matcha',
    badge: 'Verdes',
    promptEs: 'hojas frescas de menta orgánica y brotes de té verde matcha con gotas de agua pura',
    promptEn: 'fresh organic mint leaves and green matcha tea leaves covered in pure water droplets',
  },
  {
    id: 'petalos-rosa-manzanilla',
    label: 'Pétalos de Rosa Mosqueta y Manzanilla',
    badge: 'Floral',
    promptEs: 'pétalos aterciopelados de rosa mosqueta fresca y pequeñas flores blancas de manzanilla posados con delicadeza',
    promptEn: 'velvety fresh rosehip petals and delicate white chamomile flowers artfully scattered around',
  },
  {
    id: 'miel-panal',
    label: 'Hilo de Miel Dorada Cayendo + Panal',
    badge: 'Apicultura',
    promptEs: 'una cuchara mielera de madera dejando caer un hilo espeso y brillante de miel dorada a contraluz junto a trozos de panal y polen',
    promptEn: 'a wooden honey dipper pouring a thick glowing ribbon of golden honey in backlight next to raw honeycomb and bee pollen',
  },
  {
    id: 'lavanda-romero',
    label: 'Ramas de Lavanda y Romero Fresco',
    badge: 'Calma / Relax',
    promptEs: 'espigas frescas de lavanda violeta y ramas de romero orgánico aromático',
    promptEn: 'fresh purple lavender sprigs and aromatic organic rosemary branches',
  },
  {
    id: 'citricos-vitamina',
    label: 'Rodajas de Naranja, Limón y Camu Camu',
    badge: 'Vitamina C',
    promptEs: 'rodajas traslúcidas de naranja fresca, limón húmedo y frutos rojos ricos en antioxidantes iluminados a contraluz',
    promptEn: 'translucent fresh orange slices, dewy lemon, and antioxidant-rich red berries glowing in backlight',
  },
  {
    id: 'capsulas-perlas-oro',
    label: 'Cápsulas Doradas / Perlas Softgel en Base',
    badge: 'Suplemento',
    promptEs: 'un pequeño grupo de cápsulas vegetales y perlas doradas traslúcidas brillando con elegancia junto a la base del frasco',
    promptEn: 'a small cluster of translucent golden softgel capsules gleaming elegantly beside the base of the bottle',
  },
];

export const ACCOMPANIMENT_OPTIONS: StudioOptionItem[] = [
  {
    id: 'capsulas-softgel-base',
    label: 'Cápsulas Softgel / Perlas Doradas',
    badge: 'Contenido',
    shortDesc: 'Muestra de cápsulas o perlas traslúcidas reflejando la luz en la base.',
    promptEs: 'una muestra estética de cápsulas softgel doradas traslúcidas y perlas botánicas esparcidas armónicamente en la base frontal',
    promptEn: 'an artful scattering of glowing translucent golden softgel capsules and botanical pearls resting at the front base',
  },
  {
    id: 'monticulo-polvo-msm',
    label: 'Montículo de Polvo Puro (MSM / Colágeno)',
    badge: 'Ingrediente',
    shortDesc: 'Montículo estético de polvo botánico blanco puro en primer plano.',
    promptEs: 'un pequeño montículo estético de extracto en polvo blanco puro finamente tamizado reposando en la base frontal',
    promptEn: 'a neat aesthetic mound of fine pure white powder extract sifted at the front base',
  },
  {
    id: 'esferas-moleculares-3d',
    label: 'Esferas Moleculares 3D (Ácido Hialurónico)',
    badge: 'Ciencia / Glow',
    shortDesc: 'Esferas traslúcidas luminosas de hidratación / ácido hialurónico.',
    promptEs: 'esferas microscópicas traslúcidas y luminosas de agua y gel activo reflejando destellos celestes en la base',
    promptEn: 'luminous translucent microscopic water and active gel spheres reflecting soft cyan light refractions at the base',
  },
  {
    id: 'modelo-articular-3d',
    label: 'Gráfico Cartílago Articular 3D con Luz',
    badge: 'Salud Articular',
    shortDesc: 'Icono tridimensional flotante de articulación sana con luz azul/dorada.',
    promptEs: 'un icono tridimensional flotante y pulido de articulación de cartílago con brillo azul luminoso y destellos ámbar',
    promptEn: 'a polished floating 3D anatomical joint cartilage emblem with glowing blue luminosity and amber accents',
  },
  {
    id: 'cuchara-madera-polvo',
    label: 'Cuchara de Madera con Polvo Puro',
    badge: 'Utensilio',
    shortDesc: 'Cuchara dosificadora artesanal con extracto botánico puro en polvo.',
    promptEs: 'una cuchara de madera artesanal rústica con una porción de extracto botánico puro en polvo reposando al lado',
    promptEn: 'a rustic handcrafted wooden spoon holding a scoop of fine botanical powder extract resting beside the product',
  },
  {
    id: 'pipeta-gota-suspendida',
    label: 'Pipeta de Cristal con Gota Dorada',
    badge: 'Sérum / Gotero',
    shortDesc: 'Pipeta dosificadora de cristal con una gota líquida cayendo o suspendida.',
    promptEs: 'la pipeta de cristal del gotero abierta en ángulo con una gota ámbar luminosa y traslúcida suspendida en su extremo',
    promptEn: 'the glass dropper pipette resting at an angle with a luminous glowing amber droplet suspended at its tip',
  },
  {
    id: 'miel-panal-cuchara',
    label: 'Panal de Abejas e Hilo de Miel',
    badge: 'Miel / Propóleo',
    shortDesc: 'Trozo de panal natural con hilo espeso de miel brillante.',
    promptEs: 'un trozo de panal de cera de abejas natural exudando miel dorada espesa con finas gotas brillantes a contraluz',
    promptEn: 'a chunk of raw natural honeycomb oozing rich golden honey with glistening backlit nectar droplets',
  },
  {
    id: 'frutos-frescos-coco',
    label: 'Frutos Frescos y Coco Cortado',
    badge: 'Frescura',
    shortDesc: 'Trozos frescos de coco, cítricos o fruto fresco en la base.',
    promptEs: 'trozos frescos de coco partido con textura blanca pura y rodajas botánicas brillantes dispuestas en la base',
    promptEn: 'freshly cracked coconut pieces with pure white texture and glistening botanical slices arranged at the base',
  },
  {
    id: 'raices-curcuma-jengibre-props',
    label: 'Raíces y Rodajas Frescas',
    badge: 'Raíces',
    shortDesc: 'Raíces de cúrcuma y jengibre cortadas húmedas.',
    promptEs: 'raíces botánicas enteras y rodajas frescas húmedas con textura fibrosa natural posadas en la base',
    promptEn: 'whole natural botanical roots and freshly sliced moist cuts showing organic fibrous textures on the surface',
  },
  {
    id: 'flores-manzanilla-lavanda',
    label: 'Flores Botánicas Silvestres',
    badge: 'Flores',
    shortDesc: 'Flores de manzanilla, caléndula y espigas de lavanda fresca.',
    promptEs: 'flores frescas de manzanilla silvestre, pétalos dorados de caléndula y ramas aromáticas de lavanda',
    promptEn: 'fresh wild chamomile blossoms, golden calendula petals, and aromatic lavender sprigs',
  },
  {
    id: 'vaso-agua-cristal',
    label: 'Vaso de Agua Pura & Gotas',
    badge: 'Bienestar',
    shortDesc: 'Vaso de cristal con agua pura y rodaja de limón al fondo.',
    promptEs: 'un vaso de cristal fino con agua pura transparente y una rodaja fresca de limón con reflejos de luz pura',
    promptEn: 'a fine glass tumbler filled with crystal-clear pure water and a fresh lemon slice with bright light refractions',
  },
  {
    id: 'cuenco-ceramica-hierbas',
    label: 'Cuenco de Cerámica con Hierbas',
    badge: 'Artesanal',
    shortDesc: 'Pequeño cuenco artesanal de arcilla con hierbas secas.',
    promptEs: 'un pequeño cuenco de cerámica artesanal mate con una mezcla botánica de hierbas aromáticas deshidratadas',
    promptEn: 'a small handcrafted matte ceramic bowl containing a botanical blend of dried aromatic herbs',
  },
];

export const COLOR_MOODS: StudioOptionItem[] = [
  {
    id: 'original-fiel',
    label: 'Neutro / Fiel al Frasco Original',
    badge: '100% Real',
    promptEs: 'iluminación de estudio comercial neutra de alta fidelidad que preserva con exactitud los tonos y colores originales del producto y su etiqueta, sin tintes de color dominantes',
    promptEn: 'neutral commercial studio high-fidelity lighting preserving exact true-to-life colors and tones of the product label without dominant color casts',
  },
  {
    id: 'blue-sport-clean',
    label: 'Azul Articular & Plata Titanio',
    badge: 'E-commerce Ads',
    promptEs: 'paleta cromática de azul real intenso, destellos cian luminoso, plata titanio y sutiles acentos dorados',
    promptEn: 'color palette of vibrant royal blue, luminous cyan accents, titanium silver, and subtle gold highlights',
  },
  {
    id: 'emerald-gold',
    label: 'Esmeralda Botánico & Oro',
    promptEs: 'paleta cromática de verde esmeralda profundo, oro metálico cepillado y tonos tierra cálidos',
    promptEn: 'color palette of deep emerald green, brushed metallic gold, and warm earthy tones',
  },
  {
    id: 'amber-spice',
    label: 'Ámbar Especiado & Negro Pizarra',
    promptEs: 'paleta cromática de ámbar dorado intenso, naranja cúrcuma y contraste negro pizarra elegante',
    promptEn: 'color palette of rich golden amber, turmeric orange, and sleek black slate contrast',
  },
  {
    id: 'mint-crystal',
    label: 'Verde Menta, Agua & Blanco Puro',
    promptEs: 'paleta cromática refrescante de verde menta luminoso, cristal transparente y blanco puro',
    promptEn: 'refreshing color palette of luminous mint green, crystal clear water, and pure white',
  },
  {
    id: 'rose-champagne',
    label: 'Oro Rosa, Champagne & Travertino',
    promptEs: 'paleta cromática editorial de oro rosa suave, ámbar champán y piedra beige crema',
    promptEn: 'editorial color palette of soft rose gold, champagne amber, and creamy beige stone',
  },
  {
    id: 'honey-oak',
    label: 'Miel Brillante, Kraft & Roble',
    promptEs: 'paleta cromática artesanal de miel dorada traslúcida, papel kraft crema y madera de roble cálido',
    promptEn: 'artisanal color palette of translucent golden honey, cream kraft paper, and warm oak wood',
  },
  {
    id: 'lavender-night',
    label: 'Lavanda Sereno, Azul Noche & Oro',
    promptEs: 'paleta cromática relajante de violeta lavanda suave, verde salvia nocturno y destellos de oro cálido',
    promptEn: 'soothing color palette of soft lavender violet, nocturnal sage green, and warm gold accents',
  },
];

export const ASPECT_RATIOS: {
  id: '1:1' | '9:16' | '4:5' | '16:9';
  label: string;
  sub: string;
  promptEs: string;
  promptEn: string;
}[] = [
  {
    id: '1:1',
    label: '1:1 Cuadrado',
    sub: 'Estudio / Catálogo / Feed',
    promptEs: 'formato cuadrado 1:1 de estudio comercial',
    promptEn: '1:1 square commercial studio aspect ratio',
  },
  {
    id: '9:16',
    label: '9:16 Vertical',
    sub: 'Reels / TikTok / Póster Flow',
    promptEs: 'formato vertical 9:16 a pantalla completa dejando aire superior e inferior equilibrado',
    promptEn: '9:16 vertical full-screen aspect ratio with balanced top and bottom breathing room',
  },
  {
    id: '4:5',
    label: '4:5 Retrato Ads',
    sub: 'Instagram / Facebook Ads',
    promptEs: 'formato retrato publicitario 4:5 optimizado para anuncios en redes sociales',
    promptEn: '4:5 portrait advertising aspect ratio optimized for social media ads',
  },
  {
    id: '16:9',
    label: '16:9 Horizontal',
    sub: 'Cine / Web Hero / YouTube',
    promptEs: 'formato panorámico horizontal 16:9 cinematográfico',
    promptEn: '16:9 widescreen cinematic horizontal aspect ratio',
  },
];

export const STUDIO_QUICK_PRESETS: ProductQuickPreset[] = [
  {
    id: 'uro-cranberry-probioticos',
    label: 'Bolsa Rosa URO Cranberry Probióticos',
    productName: 'URO Cranberry + Orégano Probióticos + Prebióticos',
    headline: 'SALUD DIGESTIVA Y URINARIA · BIENESTAR FEMENINO DIARIO',
    benefit1: 'Salud Digestiva y Flora Intestinal Fuerte',
    benefit2: 'Protección Urinaria con Arándano Rojo',
    benefit3: 'Extracto de Orégano Antibacteriano Natural',
    benefit4: 'Prebióticos para Microbiota Equilibrada',
    dosage: 'Mastica dos gomitas al día',
    photoTypeId: 'macro-textura',
    shotId: 'macro-extremo',
    lensId: '100mm-macro',
    lightingId: 'softbox-cenital',
    packagingId: 'doypack-standup-pouch',
    packagingPresentation: 'solo',
    surfaceId: 'arena-zen',
    ingredientIds: ['gotas-rocio'],
    colorMoodId: 'original-fiel',
    aspectRatio: '9:16',
    voiceIndex: 2,
    musicIndex: 2,
    realProductColor: 'Rosa suave mate con tipografía blanca y fucsia',
  },
  {
    id: 'glucosamina-condroitina-msm',
    label: 'Glucosamina + Condroitina + MSM',
    productName: 'Glucosamin Chondroitin MSM 1500mg',
    headline: 'ARTICULACIONES MÁS FUERTES · MUÉVETE SIN LÍMITES',
    benefit1: 'Apoya la Salud Articular y Cartílago',
    benefit2: 'Mejora la Movilidad y Flexibilidad Diaria',
    benefit3: 'Comodidad al Moverte sin Molestias',
    benefit4: 'Fórmula Combinada con Ácido Hialurónico',
    dosage: 'Toma dos cápsulas blandas al día con agua',
    photoTypeId: 'poster-infografico-flow',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    lightingId: 'estudio-rim',
    packagingId: 'frasco-suplementero-capsulas',
    packagingPresentation: 'con-contenido',
    surfaceId: 'estudio-arena-minimal',
    ingredientIds: ['gotas-rocio', 'polen-oro'],
    colorMoodId: 'blue-sport-clean',
    aspectRatio: '9:16',
    voiceIndex: 1,
    musicIndex: 0,
    realProductColor: 'Frasco blanco puro mate con tapa azul marino y detalles plateados',
  },
  {
    id: 'colageno-magnesio',
    label: 'Cápsulas Vitamina D3+K2',
    productName: 'Vitamina D3 + K2 Complex',
    headline: 'HUESOS FUERTES, INMUNIDAD ALTA Y ENERGÍA',
    benefit1: 'Huesos y Músculos Fuertes',
    benefit2: 'Inmunidad Alta y Defensas',
    benefit3: 'Corazón y Arterias Limpias',
    benefit4: 'Energía Celular y Ánimo',
    dosage: 'Toma dos cápsulas con el desayuno',
    photoTypeId: 'poster-medallones',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    lightingId: 'estudio-rim',
    packagingId: 'frasco-suplementero-capsulas',
    packagingPresentation: 'con-contenido',
    surfaceId: 'madera-bosque',
    ingredientIds: ['gotas-rocio', 'helechos-eucalipto', 'polen-oro'],
    colorMoodId: 'emerald-gold',
    aspectRatio: '1:1',
    voiceIndex: 0,
    musicIndex: 0,
    realProductColor: 'Frasco ámbar oscuro farmacéutico con tapa negra estriada y etiqueta dorada',
  },
  {
    id: 'uro-macro-textura',
    label: 'URO Macro Textura 100mm & Microgotas',
    productName: 'URO Cranberry + Orégano Probióticos + Prebióticos',
    headline: 'TEXTURA SENSORIAL, MICROGOTAS Y RELIEVE DORADO',
    benefit1: 'Microgotas de Rocío Condensadas',
    benefit2: 'Relieve de Logotipo en Oro 3D',
    benefit3: 'Textura Táctil Soft-Touch Mate',
    benefit4: 'Enfoque Microscópico Ultra Nítido 8K',
    dosage: 'Mastica dos gomitas al día',
    photoTypeId: 'macro-textura',
    shotId: 'macro-extremo',
    lensId: '100mm-macro',
    environmentId: 'agua-zen',
    packagingId: 'doypack-standup-pouch',
    packagingPresentation: 'solo',
    aspectRatio: '9:16',
    voiceIndex: 2,
    musicIndex: 2,
    realProductColor: 'Verde esmeralda o rosa suave con relieve dorado metálico',
  },
  {
    id: 'vitamina-d3-k2-pouch',
    label: 'Vitamina D3 + K2 Stand-Up Pouch',
    productName: 'Vitamina D3 + K2 Complex',
    headline: 'NUTRICIÓN BOTÁNICA EN BOLSA FLEXIBLE DOYPACK',
    benefit1: 'Huesos y Músculos Fuertes',
    benefit2: 'Inmunidad y Defensas Blindadas',
    benefit3: 'Corazón y Arterias Limpias',
    benefit4: 'Energía y Vitalidad Celular',
    dosage: 'Toma dos cápsulas con el desayuno',
    photoTypeId: 'poster-medallones',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    environmentId: 'naturaleza-bosque',
    packagingId: 'doypack-standup-pouch',
    packagingPresentation: 'con-contenido',
    aspectRatio: '9:16',
    voiceIndex: 0,
    musicIndex: 0,
  },
  {
    id: 'propoleo-spray',
    label: 'Spray Propóleo Puro Garganta',
    productName: 'Propóleo Puro Spray Garganta',
    headline: 'ALIVIO INMEDIATO Y DEFENSA NATURAL PARA TU VOZ',
    benefit1: 'Alivio Rápido de Garganta',
    benefit2: 'Defensa Antibacteriana',
    benefit3: 'Frescura con Eucalipto',
    benefit4: 'Voz Clara sin Carraspera',
    dosage: 'Aplica 2 a 3 atomizaciones directas en la garganta',
    photoTypeId: 'poster-medallones',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    lightingId: 'hora-dorada',
    packagingId: 'spray-atomizador',
    packagingPresentation: 'con-fruto-fresco',
    surfaceId: 'madera-bosque',
    ingredientIds: ['miel-panal', 'helechos-eucalipto', 'gotas-rocio'],
    colorMoodId: 'honey-oak',
    aspectRatio: '1:1',
    voiceIndex: 1,
    musicIndex: 1,
    realProductColor: 'Frasco ámbar de vidrio con atomizador spray negro y etiqueta dorada',
  },
  {
    id: 'doypack-probioticos',
    label: 'Bolsa Doypack Gomitas Probióticas',
    productName: 'Gummies Probióticos & Cranberry',
    headline: 'SALUD DIGESTIVA Y BIENESTAR EN GOMITAS DELICIOSAS',
    benefit1: 'Salud Digestiva Diaria',
    benefit2: 'Flora Intestinal Fuerte',
    benefit3: 'Arándano Rojo Antioxidante',
    benefit4: '100% Vegano y Sin Azúcar',
    dosage: 'Mastica dos gomitas deliciosas al día',
    photoTypeId: 'hero-estudio',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    lightingId: 'dia-cristalino',
    packagingId: 'doypack-standup-pouch',
    packagingPresentation: 'con-contenido',
    surfaceId: 'travertino-spa',
    ingredientIds: ['citricos-vitamina', 'polen-oro', 'gotas-rocio'],
    colorMoodId: 'mint-crystal',
    aspectRatio: '1:1',
    voiceIndex: 2,
    musicIndex: 2,
    realProductColor: 'Bolsa stand-up pouch doypack rosa pastel mate con tipografía blanca',
  },
  {
    id: 'blue-line-colageno',
    label: 'Botella Blue Line Colágeno Líquido',
    productName: 'Blue Line Colágeno Líquido + NAD',
    headline: 'ENERGÍA CELULAR, DESINFLAMA Y NUTRE ARTICULACIONES',
    benefit1: 'Piel y Articulaciones Firmes',
    benefit2: 'Energía Celular y Antiedad',
    benefit3: 'Desinflama con Cúrcuma',
    benefit4: 'Huesos Fuertes con Magnesio',
    dosage: '15ml diarios medidos con la copa dosificadora',
    photoTypeId: 'poster-medallones',
    shotId: 'contrapicado-heroico',
    lensId: '85mm-f18',
    lightingId: 'estudio-rim',
    packagingId: 'botella-jarabe-elixir',
    packagingPresentation: 'solo',
    surfaceId: 'marmol-esmeralda',
    ingredientIds: ['gotas-rocio', 'polen-oro', 'helechos-eucalipto'],
    colorMoodId: 'emerald-gold',
    aspectRatio: '1:1',
    voiceIndex: 0,
    musicIndex: 0,
    realProductColor: 'Botella azul cobalto brillante con tapa dorada metálica',
  },
  {
    id: 'serum-botanico',
    label: 'Sérum Apitoxina Gotero de Lujo',
    productName: 'Sérum Apitoxina & Oro Botánico',
    headline: 'EFECTO TENSOR INMEDIATO Y LUMINOSIDAD PROFUNDA',
    benefit1: 'Efecto Lifting Botánico',
    benefit2: 'Regeneración Profunda',
    benefit3: 'Atenúa Líneas y Manchas',
    benefit4: 'Luminosidad Dorada Glow',
    dosage: 'Aplica tres gotas sobre la piel limpia de noche',
    photoTypeId: 'podio-minimal',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    lightingId: 'spa-gobo',
    packagingId: 'gotero-vidrio-ambar',
    packagingPresentation: 'con-gotero-activo',
    surfaceId: 'travertino-spa',
    ingredientIds: ['petalos-rosa-manzanilla', 'gotas-rocio', 'polen-oro'],
    colorMoodId: 'rose-champagne',
    aspectRatio: '1:1',
    voiceIndex: 0,
    musicIndex: 0,
    realProductColor: 'Frasco gotero de vidrio ámbar con pipeta dorada y bulbo blanco',
  },
  {
    id: 'curcuma-ashwagandha',
    label: 'Cúrcuma + Jengibre Raíces',
    productName: 'Cúrcuma + Jengibre Natural Vitae',
    headline: 'DESINFLAMA TUS ARTICULACIONES CON PODER NATURAL',
    benefit1: 'Desinflama Articulaciones',
    benefit2: 'Movilidad sin Rigidez',
    benefit3: 'Antioxidante Celular',
    benefit4: 'Bienestar Digestivo',
    dosage: 'Toma dos cápsulas al día',
    photoTypeId: 'splash-velocidad',
    shotId: 'contrapicado-heroico',
    lensId: '90mm-highspeed',
    lightingId: 'moody-contraluz',
    packagingId: 'frasco-suplementero-capsulas',
    packagingPresentation: 'con-contenido',
    surfaceId: 'pizarra-negra',
    ingredientIds: ['explosion-curcuma', 'raices-curcuma-jengibre', 'polen-oro'],
    colorMoodId: 'amber-spice',
    aspectRatio: '1:1',
    voiceIndex: 1,
    musicIndex: 1,
  },
  {
    id: 'clorofila-matcha',
    label: 'Clorofila Líquida Gotas Detox',
    productName: 'Clorofila Líquida + Menta Detox',
    headline: 'DESINTOXICA TU CUERPO Y REFRESCA TU DIGESTIÓN',
    benefit1: 'Detox Hepático y Renal',
    benefit2: 'Desinflama el Abdomen',
    benefit3: 'Frescura y Aliento Limpio',
    benefit4: 'Oxigenación y Vitalidad',
    dosage: 'Diluye veinte gotas en un vaso de agua cada mañana',
    photoTypeId: 'splash-velocidad',
    shotId: 'eye-level',
    lensId: '90mm-highspeed',
    lightingId: 'dia-cristalino',
    packagingId: 'gotero-vidrio-ambar',
    packagingPresentation: 'solo',
    surfaceId: 'piedra-rio-agua',
    ingredientIds: ['splash-agua-clorofila', 'menta-matcha', 'gotas-rocio'],
    colorMoodId: 'mint-crystal',
    aspectRatio: '1:1',
    voiceIndex: 2,
    musicIndex: 2,
  },
  {
    id: 'miel-propoleo',
    label: 'Tarro Artesanal Miel Cruda',
    productName: 'Miel Cruda + Propóleo & Eucalipto',
    headline: 'SUBE TUS DEFENSAS Y ALIVIA TU GARGANTA AL INSTANTE',
    benefit1: 'Sube las Defensas',
    benefit2: 'Alivia Garganta y Tos',
    benefit3: 'Antibacteriano Natural',
    benefit4: 'Energía 100% Pura',
    dosage: 'Toma una cucharadita cada mañana',
    photoTypeId: 'macro-textura',
    shotId: 'eye-level',
    lensId: '85mm-f18',
    lightingId: 'hora-dorada',
    packagingId: 'tarro-hexagonal-yute',
    packagingPresentation: 'solo',
    surfaceId: 'roble-manana',
    ingredientIds: ['miel-panal', 'helechos-eucalipto', 'polen-oro'],
    colorMoodId: 'honey-oak',
    aspectRatio: '1:1',
    voiceIndex: 3,
    musicIndex: 3,
  },
];

export interface SupplementKnowledgeItem {
  id: string;
  name: string;
  category: string;
  keywords: string[];
  headline: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  recommendedPackagingId: string;
  recommendedPresentation: PackagingPresentationMode;
  recommendedAccompaniments: string[];
  recommendedIngredients: string[];
  recommendedColorMood: string;
  shortClinicalDesc: string;
  realProductColor?: string;
}

export const SUPPLEMENT_KNOWLEDGE_BASE: SupplementKnowledgeItem[] = [
  {
    id: 'kb-uro-cranberry',
    name: 'URO Cranberry + Orégano Probióticos (Bolsa Rosa)',
    category: 'Salud Femenina & Digestiva',
    keywords: ['uro', 'cranberry', 'oregano', 'probioticos', 'prebioticos', 'rosa', 'urinaria', 'gomitas', 'vital world'],
    headline: 'SALUD DIGESTIVA Y URINARIA · BIENESTAR FEMENINO DIARIO',
    benefit1: 'Salud Digestiva y Flora Intestinal Fuerte',
    benefit2: 'Protección Urinaria con Arándano Rojo',
    benefit3: 'Extracto de Orégano Antibacteriano Natural',
    benefit4: 'Prebióticos para Microbiota Equilibrada',
    recommendedPackagingId: 'doypack-standup-pouch',
    recommendedPresentation: 'solo',
    recommendedAccompaniments: [],
    recommendedIngredients: ['gotas-rocio'],
    recommendedColorMood: 'original-fiel',
    realProductColor: 'Rosa suave mate con tipografía blanca y fucsia',
    shortClinicalDesc: 'Empaque bolsa Doypack rosa mate de alta conversión con probióticos y arándano para salud digestiva y urinaria.',
  },
  {
    id: 'kb-glucosamina',
    name: 'Glucosamina + Condroitina MSM',
    category: 'Salud Articular & Cartílago',
    keywords: ['glucosamina', 'condroitina', 'msm', 'articulaciones', 'rodilla', 'cartilago', 'joint', 'flexibilidad'],
    headline: 'ARTICULACIONES MÁS FUERTES · MUÉVETE SIN LÍMITES',
    benefit1: 'Apoya la Salud Articular y Cartílago',
    benefit2: 'Mejora la Movilidad y Flexibilidad Diaria',
    benefit3: 'Comodidad al Moverte sin Molestias',
    benefit4: 'Fórmula Combinada con Ácido Hialurónico',
    recommendedPackagingId: 'frasco-suplementero-capsulas',
    recommendedPresentation: 'con-contenido',
    recommendedAccompaniments: ['capsulas-softgel-base', 'monticulo-polvo-msm', 'modelo-articular-3d'],
    recommendedIngredients: ['gotas-rocio', 'polen-oro'],
    recommendedColorMood: 'blue-sport-clean',
    shortClinicalDesc: 'Nutrición avanzada para el cartílago, lubricación del líquido sinovial y soporte para personas activas.',
  },
  {
    id: 'kb-colageno',
    name: 'Colágeno Hidrolizado + Biotina & Vitamina C',
    category: 'Antiedad & Articulaciones',
    keywords: ['colageno', 'collagen', 'biotina', 'piel', 'uñas', 'cabello', 'arrugas', 'antiedad'],
    headline: 'PIEL RADIANTE, CABELLO FUERTE Y ARTICULACIONES FIRMES',
    benefit1: 'Elasticidad y Firmeza en la Piel',
    benefit2: 'Fortalece Cabello, Pestañas y Uñas',
    benefit3: 'Protege Ligamentos y Tendones',
    benefit4: 'Antioxidante Celular con Vitamina C',
    recommendedPackagingId: 'pote-ancho-gold',
    recommendedPresentation: 'con-cuchara',
    recommendedAccompaniments: ['cuchara-madera-polvo', 'capsulas-softgel-base'],
    recommendedIngredients: ['citricos-vitamina', 'polen-oro', 'gotas-rocio'],
    recommendedColorMood: 'rose-champagne',
    shortClinicalDesc: 'Péptidos bioactivos de colágeno hidrolizado tipo I y III con alta absorción celular.',
  },
  {
    id: 'kb-magnesio',
    name: 'Citrato de Magnesio Puro + B6',
    category: 'Sistema Nervioso & Músculos',
    keywords: ['magnesio', 'citrato', 'calambres', 'sueño', 'estres', 'musculos', 'energia', 'nervios'],
    headline: 'RELAJA TUS MÚSCULOS, ALIVIA EL ESTRÉS Y DUERME PROFUNDO',
    benefit1: 'Alivio Inmediato de Tensión y Calambres',
    benefit2: 'Sueño Reparador y Relajación Mental',
    benefit3: 'Energía Celular y Producción de ATP',
    benefit4: 'Salud Ósea y Equilibrio Muscular',
    recommendedPackagingId: 'frasco-suplementero-capsulas',
    recommendedPresentation: 'con-contenido',
    recommendedAccompaniments: ['capsulas-softgel-base', 'vaso-agua-cristal'],
    recommendedIngredients: ['polen-oro', 'gotas-rocio'],
    recommendedColorMood: 'original-fiel',
    shortClinicalDesc: 'Forma quelada de alta biodisponibilidad para optimizar más de 300 reacciones bioquímicas.',
  },
  {
    id: 'kb-vitamina-d3-k2',
    name: 'Vitamina D3 + K2 Complex',
    category: 'Inmunidad & Densidad Ósea',
    keywords: ['vitamina d3', 'd3', 'k2', 'huesos', 'defensas', 'inmunidad', 'arterias', 'calcio'],
    headline: 'HUESOS FUERTES, DEFENSAS BLINDADAS Y CORAZÓN SANO',
    benefit1: 'Fija el Calcio Directo en los Huesos',
    benefit2: 'Inmunidad Alta y Defensas Fuertes',
    benefit3: 'Arterias Limpias y Salud Cardíaca',
    benefit4: 'Fuerza Muscular y Estado de Ánimo',
    recommendedPackagingId: 'frasco-suplementero-capsulas',
    recommendedPresentation: 'con-contenido',
    recommendedAccompaniments: ['capsulas-softgel-base'],
    recommendedIngredients: ['gotas-rocio', 'helechos-eucalipto', 'polen-oro'],
    recommendedColorMood: 'emerald-gold',
    shortClinicalDesc: 'Sinergia clínica perfecta: la D3 maximiza la absorción del calcio y la K2 (MK-7) lo guía hacia el hueso.',
  },
  {
    id: 'kb-creatina',
    name: 'Creatina Monohidratada 100% Pura',
    category: 'Rendimiento Deportivo & Fuerza',
    keywords: ['creatina', 'creatine', 'fuerza', 'musculo', 'gimnasio', 'potencia', 'fitness', 'recuperacion'],
    headline: 'MÁS FUERZA, MÁXIMA POTENCIA Y MASA MUSCULAR LIMPIA',
    benefit1: 'Aumento Explosivo de Fuerza y Potencia',
    benefit2: 'Mayor Resistencia en Entrenamientos',
    benefit3: 'Recuperación Muscular Rápida',
    benefit4: 'Soporte Cognitivo y Enfoque Mental',
    recommendedPackagingId: 'pote-ancho-gold',
    recommendedPresentation: 'con-cuchara',
    recommendedAccompaniments: ['cuchara-madera-polvo', 'vaso-agua-cristal'],
    recommendedIngredients: ['polen-oro'],
    recommendedColorMood: 'blue-sport-clean',
    shortClinicalDesc: 'Monohidrato micronizado de máxima pureza para saturar los depósitos de fosfocreatina muscular.',
  },
  {
    id: 'kb-omega-3',
    name: 'Omega 3 Triple Fuerza (EPA / DHA)',
    category: 'Corazón & Salud Cerebral',
    keywords: ['omega 3', 'pescado', 'epa', 'dha', 'corazon', 'cerebro', 'memoria', 'trigliceridos', 'colesterol'],
    headline: 'PROTECCIÓN CARDIOVASCULAR Y AGUDEZA MENTAL TOTAL',
    benefit1: 'Corazón Sano y Control de Triglicéridos',
    benefit2: 'Claridad Mental y Memoria Ágil',
    benefit3: 'Desinflamación Sistémica Natural',
    benefit4: 'Visión Nítida y Salud Ocular',
    recommendedPackagingId: 'frasco-suplementero-capsulas',
    recommendedPresentation: 'con-contenido',
    recommendedAccompaniments: ['capsulas-softgel-base'],
    recommendedIngredients: ['gotas-rocio', 'polen-oro'],
    recommendedColorMood: 'blue-sport-clean',
    shortClinicalDesc: 'Aceite de pescado salvaje purificado por destilación molecular sin metales pesados.',
  },
  {
    id: 'kb-ashwagandha',
    name: 'Ashwagandha KSM-66 Orgánica',
    category: 'Adaptógeno & Antiestrés',
    keywords: ['ashwagandha', 'estres', 'cortisol', 'ansiedad', 'calma', 'tiroides', 'vigor', 'adaptogeno'],
    headline: 'REDUCE EL CORTISOL, CONTROLA LA ANSIEDAD Y VITALIZA TU DÍA',
    benefit1: 'Disminuye el Estrés y Calma la Mente',
    benefit2: 'Equilibrio Hormonal y Menos Fatiga',
    benefit3: 'Mejora el Rendimiento Físico y Vigor',
    benefit4: 'Sueño Profundo sin Somnolencia Diurna',
    recommendedPackagingId: 'frasco-suplementero-capsulas',
    recommendedPresentation: 'con-contenido',
    recommendedAccompaniments: ['capsulas-softgel-base', 'flores-manzanilla-lavanda'],
    recommendedIngredients: ['polen-oro', 'helechos-eucalipto'],
    recommendedColorMood: 'amber-spice',
    shortClinicalDesc: 'Extracto de raíz estandarizado con la mayor concentración de withanólidos bioactivos.',
  },
  {
    id: 'kb-curcuma',
    name: 'Cúrcuma + Jengibre & Piperina 95%',
    category: 'Antiinflamatorio & Digestivo',
    keywords: ['curcuma', 'turmeric', 'jengibre', 'piperina', 'inflamacion', 'dolor', 'articulaciones', 'digestion'],
    headline: 'DESINFLAMA TU CUERPO Y ALIVIA DOLORES DE FORMA NATURAL',
    benefit1: 'Potente Acción Antiinflamatoria Natural',
    benefit2: 'Alivia Dolores Articulares y Rigidez',
    benefit3: 'Protección Antioxidante Hepática',
    benefit4: 'Mejora la Digestión y Microbiota',
    recommendedPackagingId: 'frasco-suplementero-capsulas',
    recommendedPresentation: 'con-contenido',
    recommendedAccompaniments: ['capsulas-softgel-base', 'raices-curcuma-jengibre-props'],
    recommendedIngredients: ['explosion-curcuma', 'raices-curcuma-jengibre', 'polen-oro'],
    recommendedColorMood: 'amber-spice',
    shortClinicalDesc: 'Curcumina al 95% combinada con pimienta negra para aumentar la biodisponibilidad un 2000%.',
  },
  {
    id: 'kb-propoleo',
    name: 'Propóleo Puro Spray Garganta + Miel',
    category: 'Vías Respiratorias & Defensas',
    keywords: ['propoleo', 'garganta', 'tos', 'miel', 'spray', 'voz', 'infeccion', 'carraspasso', 'resfriado'],
    headline: 'ALIVIO INMEDIATO DE GARGANTA Y ESCUDO NATURAL PARA TU VOZ',
    benefit1: 'Alivio Rápido de Irritación y Dolor',
    benefit2: 'Efecto Antibacteriano y Antiviral',
    benefit3: 'Frescura Balsámica con Eucalipto',
    benefit4: 'Voz Clara y Garganta Despejada',
    recommendedPackagingId: 'spray-atomizador',
    recommendedPresentation: 'solo',
    recommendedAccompaniments: ['miel-panal-cuchara'],
    recommendedIngredients: ['miel-panal', 'helechos-eucalipto', 'gotas-rocio'],
    recommendedColorMood: 'honey-oak',
    shortClinicalDesc: 'Spray bucal con propóleo verde de alta graduación, bioflavonoides y miel pura de bosque.',
  },
  {
    id: 'kb-serum-hialuronico',
    name: 'Sérum Ácido Hialurónico + Vitamina C',
    category: 'Dermo-Cosmética Facial',
    keywords: ['serum', 'hialuronico', 'facial', 'arrugas', 'hidratacion', 'glow', 'piel', 'botanico'],
    headline: 'HIDRATACIÓN PROFUNDA, EFECTO TENSOR Y LUZ RADIANTE',
    benefit1: 'Rellena Líneas de Expresión y Arrugas',
    benefit2: 'Hidratación Multicapa con Hialurónico',
    benefit3: 'Tono Luminoso y Manchas Atenuadas',
    benefit4: 'Piel Suave, Firme y Rejuvenecida',
    recommendedPackagingId: 'gotero-vidrio-ambar',
    recommendedPresentation: 'con-gotero-activo',
    recommendedAccompaniments: ['pipeta-gota-suspendida', 'esferas-moleculares-3d'],
    recommendedIngredients: ['petalos-rosa-manzanilla', 'gotas-rocio', 'polen-oro'],
    recommendedColorMood: 'rose-champagne',
    shortClinicalDesc: 'Triple peso molecular para hidratar desde la superficie hasta las capas profundas de la dermis.',
  },
];
