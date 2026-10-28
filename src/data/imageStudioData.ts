export interface StudioOptionItem {
  id: string;
  label: string;
  shortDesc?: string;
  badge?: string;
  promptEs: string;
  promptEn: string;
  isCustom?: boolean;
}

export type PackagingPresentationMode = 'solo' | 'con-caja' | 'con-contenido';

export interface PackagingPresentationOption {
  id: PackagingPresentationMode;
  label: string;
  badge: string;
  shortDesc: string;
  promptEs: string;
  promptEn: string;
}

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
  lightingId: string;
  packagingId: string;
  packagingPresentation?: PackagingPresentationMode;
  surfaceId: string;
  ingredientIds: string[];
  colorMoodId: string;
  aspectRatio: '1:1' | '9:16' | '4:5' | '16:9';
  voiceIndex: number;
  musicIndex: number;
}

export const PHOTO_TYPES: PhotoTypeOption[] = [
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
    id: 'con-caja',
    label: 'Dúo con Caja de Empaque',
    badge: 'Retail Premium',
    shortDesc: 'El frasco al frente con su caja exterior de empaque de pie a un lado.',
    promptEs: 'acompañado a su lado en elegante ángulo de 3/4 por su caja exterior de empaque comercial de cartón rígido con diseño botánico a juego, relieves y acabados metalizados premium',
    promptEn: 'accompanied beside it in an elegant 3/4 angle by its matching outer retail packaging carton box featuring botanical graphics, embossing, and premium foil finishes',
  },
  {
    id: 'con-contenido',
    label: 'Con Muestra de Contenido',
    badge: 'Cápsulas / Gomitas',
    shortDesc: 'Muestra de cápsulas doradas, gomitas o extracto esparcida al frente.',
    promptEs: 'con una muestra estética de su contenido esparcida artísticamente en la base frontal: cápsulas softgel doradas traslúcidas que reflejan la luz y perlas de gelatina vegetal',
    promptEn: 'with an artful sample of its contents scattered at the front base: glowing translucent golden softgel capsules reflecting soft studio light',
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
  {
    id: 'duo-caja-frasco',
    label: 'Pack Dúo: Frasco + Caja de Presentación',
    badge: 'Edición Lujo',
    promptEs: 'un frasco principal de vidrio ámbar acompañado a su lado por su caja de empaque rígida de lujo con estampado botánico en lámina de oro',
    promptEn: 'a primary amber glass bottle accompanied beside it by its luxury rigid packaging box featuring gold-foil botanical embossing',
  },
];

export const SURFACE_OPTIONS: StudioOptionItem[] = [
  {
    id: 'madera-bosque',
    label: 'Madera Húmeda en Bosque Soleado',
    promptEs: 'posado sobre una mesa de madera rústica húmeda con musgo suave en medio de un bosque verde desenfocado al amanecer',
    promptEn: 'resting on a wet rustic wooden table with soft moss set against a softly blurred sunlit morning forest background',
  },
  {
    id: 'pizarra-negra',
    label: 'Piedra Pizarra Negra Húmeda',
    promptEs: 'posado sobre una bandeja de piedra pizarra negra húmeda con reflejos especulares sobre un fondo de estudio oscuro y elegante',
    promptEn: 'resting on a wet black slate stone slab with subtle specular reflections against a dark moody studio background',
  },
  {
    id: 'travertino-spa',
    label: 'Piedra Travertino Beige de Spa',
    promptEs: 'posado sobre un bloque arquitectónico de piedra travertino beige porosa rodeado de musgo verde suave en un ambiente de spa luminoso',
    promptEn: 'resting on an architectural block of porous beige travertine stone surrounded by soft green moss in a serene luxury spa setting',
  },
  {
    id: 'piedra-rio-agua',
    label: 'Piedra de Río sobre Agua Cristalina',
    promptEs: 'posado sobre una piedra de río plana y húmeda emergiendo de un espejo de agua cristalina con ondas suaves bajo el sol',
    promptEn: 'resting on a flat wet river stone emerging from a shallow pool of crystal-clear water with gentle sunlit ripples',
  },
  {
    id: 'roble-manana',
    label: 'Mesa de Roble Artesanal Soleada',
    promptEs: 'posado sobre una mesa artesanal de madera de roble cálido bañada por la luz dorada del sol de la mañana en el campo',
    promptEn: 'resting on a warm artisanal oak wood table bathed in golden morning countryside sunlight',
  },
  {
    id: 'marmol-esmeralda',
    label: 'Mármol Verde Esmeralda y Vetas de Oro',
    promptEs: 'posado sobre una superficie pulida de mármol verde esmeralda profundo con finas vetas doradas naturales',
    promptEn: 'resting on a polished deep emerald-green marble surface with fine natural golden veins',
  },
  {
    id: 'arena-zen',
    label: 'Arena Blanca Zen y Cantos Rodados',
    promptEs: 'posado sobre arena blanca fina con ondas zen rastrilladas y piedras botánicas suaves bajo luz cálida',
    promptEn: 'resting on fine white zen garden sand with gentle raked waves and smooth botanical stones under warm light',
  },
];

export const INGREDIENT_EFFECTS: StudioOptionItem[] = [
  {
    id: 'gotas-rocio',
    label: 'Gotas de Rocío Fresco en el Envase',
    badge: 'Frescura',
    promptEs: 'microgotas cristalinas de rocío fresco adheridas al vidrio del envase',
    promptEn: 'crystal-clear fresh dew droplets clinging to the glass container',
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

export const COLOR_MOODS: StudioOptionItem[] = [
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
  },
  {
    id: 'propoleo-spray',
    label: 'Spray Propóleo Garganta + Caja',
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
    packagingPresentation: 'con-caja',
    surfaceId: 'madera-bosque',
    ingredientIds: ['miel-panal', 'helechos-eucalipto', 'gotas-rocio'],
    colorMoodId: 'honey-oak',
    aspectRatio: '1:1',
    voiceIndex: 1,
    musicIndex: 1,
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
  },
  {
    id: 'serum-botanico',
    label: 'Sérum Apitoxina Gotero + Caja Lujo',
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
    packagingPresentation: 'con-caja',
    surfaceId: 'travertino-spa',
    ingredientIds: ['petalos-rosa-manzanilla', 'gotas-rocio', 'polen-oro'],
    colorMoodId: 'rose-champagne',
    aspectRatio: '1:1',
    voiceIndex: 0,
    musicIndex: 0,
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
