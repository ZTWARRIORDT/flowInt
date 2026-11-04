# Especificación de Rediseño: NaturalStudio Stepper Horizontal Minimalista

**Fecha:** 2026-11-04  
**Estado:** Aprobado para Plan de Implementación  
**Alcance:** Rediseño de interfaz, simplificación del flujo UX y migración a paleta cálida editorial.

---

## 1. Problema y Diagnóstico Previo

La versión previa de `NaturalStudio` presentaba cuatro fricciones principales:
1. **Sobrecarga visual y fatiga cromática:** La interfaz oscura con acentos verde esmeralda y oro/ámbar generaba una estética de panel financiero/cripto, con bajo contraste y poca coherencia con el minimalismo editorial.
2. **Asimetría de pantalla y espacio desperdiciado:** La vista dividida en dos columnas (controles a la izquierda y caja de prompt fija a la derecha) reducía el ancho útil en un 40%, comprimiendo tarjetas y selectores en pantallas portátiles y móviles.
3. **Controles redundantes:** El selector de relación de aspecto (*aspect ratio*) resultaba innecesario dado que Google Flow gestiona el formato en su propio lienzo de generación.
4. **Ruido cognitivo:** La galería inferior de 10 productos y el modal de autocompletado de hierbas aumentaban el peso del DOM y distraían a los usuarios que ya disponen de su propio producto.

---

## 2. Objetivos de Diseño

* **Flujo Lineal en 4 Pasos (Stepper Horizontal Híbrido):** 100% de ancho útil centrado (máx. `960px`), mostrando únicamente la información relevante de cada etapa, con navegación libre mediante clics en la barra superior.
* **Paleta "Lino y Alabastro Cálido":** Sustitución del fondo oscuro por marfil suave (`#F7F5F0`), superficies alabastro (`#FDFCF9`), bordes de lino (`#E7E5DF`) y tipografía en carbón cálido (`#292524`).
* **Supresión de Componentes Obsoletos:** Eliminación de `ProductCatalogSection` (galería inferior de 10 fotos), el modal de autocompletado botánico y el selector visible de relación de aspecto.
* **Mesa de Entrega en Paso 4:** Resumen visual sobrio en chips, caja de prompt bilingüe (ES / EN) en un clic y botones directos para copiar y lanzar Google Flow.

---

## 3. Sistema Visual y Tokens

| Elemento | Token Tailwind / Hex | Propósito |
| :--- | :--- | :--- |
| **Fondo General (Canvas)** | `#F7F5F0` (`bg-[#F7F5F0]`) | Tono marfil suave mate, sin blanco clínico ni gris frío. |
| **Superficies / Tarjetas** | `#FDFCF9` (`bg-[#FDFCF9]`) | Alabastro cálido con borde sutil `border-[#E7E5DF]`. |
| **Bordes y Divisores** | `#E7E5DF` (`border-[#E7E5DF]`) | Piedra lino suave para separar secciones sin rigidez. |
| **Texto Principal** | `#292524` (`text-stone-800`) | Carbón cálido profundo de máxima legibilidad. |
| **Texto Secundario** | `#57534E` (`text-stone-600`) | Arcilla neutra / lino medio para subtítulos y descripciones. |
| **Acento Activo / Botón Primario** | `#1C1917` (`bg-stone-900 text-[#FDFCF9]`) | Carbón orgánico profundo para estados seleccionados y CTA principal. |
| **Acento Secundario** | `#EFECE6` (`bg-[#EFECE6] text-stone-800`) | Lino cálido para píldoras de resumen y botones secundarios. |

---

## 4. Flujo Detallado en 4 Pasos

```text
[ 1. Tu Producto ] ─── [ 2. Escenario ] ─── [ 3. Estilo y Textos ] ─── [ 4. Resumen y Prompt ]
```

### Paso 1: Tu Producto y Envase
* **Input de Nombre de Producto:** Campo de texto limpio para marca/nombre. Si se deja vacío, el generador recurre a `'[Nombre de tu Producto]'`.
* **Selector de Silueta de Envase (Grid de 6 tarjetas limpias):**
  1. *Bolsa Doypack Stand-up Pouch*
  2. *Frasco Suplementero de Cápsulas*
  3. *Frasco Gotero de Vidrio Ámbar*
  4. *Tarro / Pomadera de Crema*
  5. *Botella Jarabe / Elixir*
  6. *Spray Atomizador*
* **Interruptor Foto de Referencia:** Toggle *"¿Adjuntarás foto real en Flow? (Sí / No)"*.
  * Si es **Sí**: Añade al prompt la directiva estricta de clonar la silueta geométrica, proporciones exactas, tapa y logotipo de la imagen adjunta.

### Paso 2: Escenario y Atmósfera
Catálogo curado de 12 entornos divididos por categorías funcionales:
* **Estudio y Lujo:**
  * *Arena Zen y Piedra Caliza*
  * *Mármol Calacatta y Detalles Dorados*
  * *Pedestal de Travertino y Agua Serena*
  * *Estudio Minimalista Neutro*
* **Hogar Contemporáneo:**
  * *Cocina de Diseño y Luz Matutina* (Barra de silestone, tabla de nogal, luz de ventana)
  * *Tocador de Baño en Microcemento* (Superficie mineral, grifería negra mate, espejo cálido)
  * *Mesa de Centro Estilo Japandi* (Madera clara, cerámica artesanal, luz de tarde filtrada)
* **Entornos de Ciudad y Naturaleza:**
  * *Café Urbano de Especialidad* (Mesa de terrazo, ventanal de hierro, ciudad difusa)
  * *Terraza / Ático Metropolitano* (Piedra exterior, skyline arquitectónico en bokeh)
  * *Madera de Roble y Lino Natural*
  * *Invernadero Botánico con Rocío*
  * *Laboratorio Clínico Limpio*

### Paso 3: Estilo Fotográfico y Textos
* **Ángulo y Encuadre de Cámara (4 opciones):**
  1. *Frontal a Nivel de Ojos (Eye-level 0°)*: Simetría pura sin distorsión de perspectiva.
  2. *Picado Editorial (45°)*: Muestra simultáneamente etiqueta frontal, tapa y base.
  3. *Macro Textura Extremo*: Enfoque microscópico sobre relieve de marca, vidrio y gotas.
  4. *Cenital 90° (Flat Lay)*: Toma perpendicular desde arriba.
* **Diseño Tipográfico / Infográfico (5 variantes):**
  1. *Foto Limpia de Catálogo (Predeterminada)*: Sin textos ni elementos externos flotantes.
  2. *Etiquetas Pill Badges Minimalistas*: Píldoras traslúcidas simétricas para 1 a 4 beneficios.
  3. *Pines Clínicos con Líneas Guía*: Señaladores finos hacia detalles clave del empaque.
  4. *Wellness Magazine Layout*: Composición editorial con aire superior para titular publicitario serif.
  5. *Tarjetas Métricas de Vidrio Esmerilado*: Paneles frosted glass con porcentajes de eficacia clínica.

### Paso 4: Resumen y Entrega (Prompt Terminal)
* **Ficha de Configuración:** Fila horizontal de chips en tono lino confirmando la combinación elegida.
* **Caja de Prompt:** Fuente monoespaciada de alto contraste, seleccionable en 1 clic.
* **Selector de Idioma:** Conmutador rápido `ES` / `EN`.
* **Botones de Acción:**
  * Primario: `"Copiar Prompt para Google Flow"` (con retroalimentación visual de copiado).
  * Secundario: `"Abrir Flow ↗"` (apertura directa de `flow.google`).
  * Enlace: `"Modificar selecciones"` (retorna al Paso 1 manteniendo el estado).

---

## 5. Arquitectura de Componentes y Estado

```
src/
├── App.tsx                     (Contenedor principal, Navbar limpia marfil, render de ImagePromptStudio)
├── components/
│   ├── ImagePromptStudio.tsx   (Componente principal reestructurado como Stepper 4 Pasos)
│   ├── StepProduct.tsx         (Paso 1: Nombre, Envase, Toggle Referencia)
│   ├── StepEnvironment.tsx     (Paso 2: 12 Entornos organizados con fotos/iconos y luz integrada)
│   ├── StepPhotoStyle.tsx      (Paso 3: Ángulo de cámara y 5 Estilos de texto)
│   └── StepSummaryPrompt.tsx   (Paso 4: Resumen de selecciones, Prompt copiable y Enlace Flow)
└── data/
    └── imageStudioData.ts      (Constantes depuradas: 12 entornos, 6 envases, 4 ángulos, 5 estilos)
```

* **Eliminaciones planificadas:**
  * Remover renderizado de `ProductCatalogSection` de `App.tsx`.
  * Eliminar modal de autocompletado de hierbas de `ImagePromptStudio.tsx`.
  * Remover control de aspecto visible y columna derecha fija.

---

## 6. Pruebas y Criterios de Aceptación

1. **Prueba de Navegación del Stepper:** Posibilidad de avanzar secuencialmente con botón "Continuar" o saltar libremente haciendo clic en los encabezados del stepper.
2. **Generación de Prompt Fiel:**
   * Si no hay nombre: se utiliza `'[Nombre de tu Producto]'` de manera limpia.
   * Si el modo referencia está activo: incluye la silueta del envase seleccionado y la directiva de preservación de proporciones de PicWish.
   * Si se elige foto limpia: garantiza cero textos fantasma o claims de relleno.
3. **Consistencia Visual en Dispositivos Móviles:** El área de trabajo de 960px se ajusta de forma fluida a pantallas de teléfono y tablet sin desbordes horizontales ni barras laterales apretadas.
4. **Verificación Técnica de Compilación:** `npm run build` ejecutado con 0 errores de TypeScript y 0 regresiones.
