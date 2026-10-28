# Especificación de Diseño: FlowNatural Studio — Estudio Fotográfico Visual y Sin Sobrecarga de Texto

**Fecha:** 28 de Octubre de 2026  
**Objetivo:** Transformar la aplicación en un Estudio Fotográfico Comercial 100% enfocado en imágenes para Gemini / Imagen 3, eliminando por completo los videos, simplificando radicalmente los textos para usuarios principiantes y añadiendo modales visuales explicativos con ejemplos interactivos de lentes fotográficos y planos.

---

## 1. Problema y Diagnóstico

1. **Sobrecarga de texto y jerga técnica:** La versión previa contenía explicaciones densas sobre modelos de video (Veo 3.1 vs Flash vs Omni), fotogramas iniciales, descriptores de voz y múltiples bloques de prompts que abrumaban a un usuario no experto.
2. **Distracción por videos:** El usuario pidió explícitamente: *"por ahora quitemos todo lo relacionado con los videos, centremonos en imagenes por ahora, siento que todo es muy abrumador por la cantidad de texto"*.
3. **Falta de comprensión visual de lentes y planos:** Términos como `85mm f/1.8`, `100mm Macro` o `Contrapicado` requieren ejemplos visuales claros en modales para que un creador entienda qué efecto obtendrá antes de copiar el prompt.

---

## 2. Decisiones de Diseño y Alcance

### A. Eliminación Total de Video
- Se eliminan de la navegación, del Hero y de la página los componentes de video:
  - `BenefitVideoBuilder.tsx` (desconectado o removido del render principal).
  - `SceneLibrarySection.tsx` (removido del render).
  - Guía de 4 escenas de video y comparativa de modelos Veo.
  - Scripts de audio, música de fondo y descriptores de actores de voz.

### B. Estudio Visual Amigable para Principiantes
- **Reducción de texto al 70%:** Etiquetas directas, sin párrafos redundantes.
- **Asistente de 3 Pasos Clave:**
  1. **Tu Producto:** Nombre y tipo de envase visual (tarjetas con iconos claros).
  2. **¿Qué tipo de foto quieres?:** 6 estilos comerciales seleccionables en 1 clic (*Catálogo Limpio*, *Póster con Beneficios*, *Splash de Agua/Polvo*, *Bodegón Cenital desde arriba*, *Primer Plano de Gotas*, *En Uso Cotidiano*).
  3. **Lente de Cámara con Modal Visual Interactivo:** Botón `👁️ Ver qué hace este lente` que abre un modal con explicación sencilla, comparativa visual y para qué sirve.
- **Resultados en Vivo:** Panel lateral con el prompt listo en lenguaje natural optimizado para Gemini, botón gigante de **"Copiar Prompt"** y opción de generar un pack de planos en 1 clic.

### C. Modal Visual de Lentes Fotográficos (`LensVisualModal.tsx`)
Cada lente incluye:
- **85mm f/1.8 (Efecto Retrato con Fondo Desenfocado):**
  - *Explicación simple:* "El producto queda 100% nítido y el fondo se vuelve suave y borroso (bokeh). Es el favorito para catálogos y tiendas online."
  - *Cuándo usarlo:* Tienda online, e-commerce, Amazon, presentación limpia.
- **100mm f/2.8 Macro (Ultra Detalle y Texturas):**
  - *Explicación simple:* "Acerca la cámara tanto que puedes ver cada gota de rocío, la textura del sérum o el relieve dorado en el vidrio."
  - *Cuándo usarlo:* Cosmética, gotas de agua, miel cayendo, pureza del producto.
- **50mm f/1.4 (Visión Natural del Ojo Humano):**
  - *Explicación simple:* "Muestra la escena tal como la verían tus ojos al entrar a una habitación. Muy orgánico y equilibrado."
  - *Cuándo usarlo:* Bodegones con ingredientes en una mesa, cocina, spa.
- **90mm f/4 High-Speed (Congelación de Movimiento):**
  - *Explicación simple:* "Dispara a una velocidad extrema (1/4000s) para congelar salpicaduras de agua o polvo en el aire sin que salgan borrosos."
  - *Cuándo usarlo:* Splashes de clorofila, explosiones de cúrcuma o matcha.
- **35mm f/2.0 (Gran Angular con Paisaje):**
  - *Explicación simple:* "Abre el plano para mostrar el entorno completo: bosque, montañas o baño de spa alrededor del frasco."
  - *Cuándo usarlo:* Publicidad ambiental y conexión con la naturaleza.

---

## 3. Arquitectura de Componentes

1. `src/App.tsx`:
   - Header limpio (Logo + Gemini + Modo Claro/Oscuro).
   - Hero enfocado 100% en creación de imágenes comerciales.
   - Componente central: `ImagePromptStudio.tsx` (rediseñado, despejado y amigable).
   - Componente secundario: `ProductCatalogSection.tsx` (galería de 5 productos de estudio con prompts de imagen directos).
   - Modal global interactivo: `LensVisualModal.tsx`.
2. `src/components/LensVisualModal.tsx`:
   - Modal accesible con fotos de ejemplo, gráfico visual de profundidad de campo, explicación en lenguaje humano y selector para aplicar el lente en 1 clic.
3. `src/components/ImagePromptStudio.tsx`:
   - Interfaz simplificada con menos texto, tarjetas visuales, selector de lentes con acceso al modal y panel de copiado directo.

---

## 4. Criterios de Aceptación y Verificación

- [x] Cero menciones o bloques de video en la interfaz.
- [x] Textos cortos, directos y sin lenguaje técnico intimidante.
- [x] Modal interactivo de lentes con explicaciones visuales claras.
- [x] Compilación limpia sin errores de TypeScript (`npm run build`).
- [x] Diseño responsivo en móviles y escritorio con modo claro y oscuro.
