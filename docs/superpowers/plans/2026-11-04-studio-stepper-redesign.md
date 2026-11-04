# Studio Stepper Horizontal Minimalista Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar NaturalStudio reemplazando el diseño oscuro de 2 columnas por un Stepper horizontal limpio en 4 pasos con paleta cálida editorial ("Lino y Alabastro"), suprimiendo la galería inferior, el modal de autocompletado y el selector de aspecto.

**Architecture:** Se desacopla el configurador visual en 4 vistas modulares dentro de `ImagePromptStudio.tsx` controladas por un estado `currentStep: 1 | 2 | 3 | 4`. Se actualizan los datos en `imageStudioData.ts` para incorporar los nuevos entornos urbanos y de hogar y los estilos editoriales/clínicos. Se limpia `App.tsx` retirando `ProductCatalogSection` y ajustando el lienzo general a la paleta marfil cálida.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React, Vite, Playwright (para verificación de interfaz e interacciones).

## Global Constraints

- Paleta cromática estricta: Fondo general `#F7F5F0`, tarjetas `#FDFCF9`, bordes `#E7E5DF`, texto `#292524`, acentos `#1C1917` / `#EFECE6`. Sin fondos oscuros `#0A100E`, sin verde esmeralda ni oro brillante.
- Ancho máximo centrado: `max-w-4xl` (`960px`) con 100% de ancho útil en móvil y escritorio.
- Sin selector de relación de aspecto visible en el flujo principal (predeterminado en 1:1 limpio).
- Supresión completa del render de `ProductCatalogSection` y del modal asistente de autocompletar.
- Cero errores de TypeScript y build en producción limpio con `npm run build`.

---

### Task 1: Actualizar Datos y Catálogos en `imageStudioData.ts`

**Files:**
- Modify: `src/data/imageStudioData.ts`
- Test: `npm run build`

**Interfaces:**
- Produces:
  - Nuevos entornos en `ENVIRONMENTS`: `cocina-diseno`, `tocador-microcemento`, `salon-japandi`, `cafe-urbano`, `terraza-metropolitana`.
  - Nuevos estilos en `INFOGRAPHIC_STYLES`: `editorial-vogue` ("Wellness Magazine Layout"), `frosted-glass-metrics` ("Tarjetas Métricas de Vidrio Esmerilado").
  - Exportación consolidada de los 6 tipos de envase clave en `PACKAGING_OPTIONS`.

- [ ] **Step 1: Agregar los nuevos entornos urbanos, domésticos y estilos de texto en `src/data/imageStudioData.ts`**
Añadir a `ENVIRONMENTS` las opciones:
  - `cocina-diseno`: "Cocina de Diseño y Luz Matutina" (barra de silestone blanco, nogal, luz de ventana matutina).
  - `tocador-microcemento`: "Tocador de Baño en Microcemento" (superficie mineral, grifería negra mate, espejo retroiluminado cálido).
  - `salon-japandi`: "Mesa de Centro Estilo Japandi" (madera clara, cerámica artesanal, luz de tarde filtrada por lino).
  - `cafe-urbano`: "Café Urbano de Especialidad" (mesa de terrazo pulido, ventanal de hierro, skyline difuso).
  - `terraza-metropolitana`: "Terraza / Ático Metropolitano" (piedra exterior contemporánea, ciudad al amanecer en bokeh).
Añadir a `INFOGRAPHIC_STYLES`:
  - `editorial-vogue`: "Titular Editorial de Revista de Lujo (Wellness Magazine)" con espacio negativo superior para tipografía serif moderna.
  - `frosted-glass-metrics`: "Tarjetas Métricas de Vidrio Esmerilado" con paneles frosted glass semitransparentes.

- [ ] **Step 2: Verificar tipos y exportaciones**
Ejecutar: `npm run build`
Esperado: Compilación exitosa sin errores de tipado.

- [ ] **Step 3: Commit**
```bash
git add src/data/imageStudioData.ts
git commit -m "feat(data): add urban and home environments and professional editorial text styles"
```

---

### Task 2: Rediseñar el Contenedor y Stepper Horizontal en `ImagePromptStudio.tsx`

**Files:**
- Modify: `src/components/ImagePromptStudio.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `ENVIRONMENTS`, `PACKAGING_OPTIONS`, `CAMERA_SHOTS`, `INFOGRAPHIC_STYLES` de `imageStudioData.ts`.
- Produces:
  - Estado `activeStep: 1 | 2 | 3 | 4`.
  - Barra de Stepper Horizontal superior con navegación libre e indicadores de paso completado.
  - Barra inferior con botones `Atrás` y `Continuar al Paso X`.
  - Eliminación de la columna lateral derecha del prompt y del modal popup de autocompletado.
  - Eliminación del selector de aspecto ratio.

- [ ] **Step 1: Configurar el estado de navegación por pasos y eliminar el layout de 2 columnas**
En `ImagePromptStudio.tsx`:
  - Definir `const [activeStep, setActiveStep] = useState<number>(1);`
  - Reemplazar la grilla `lg:grid-cols-12` por un contenedor centrado `max-w-4xl mx-auto space-y-6`.
  - Renderizar la barra del Stepper con 4 etapas:
    1. `1. Tu Producto`
    2. `2. Escenario`
    3. `3. Estilo y Textos`
    4. `4. Resumen y Prompt`
  - Añadir soporte para hacer clic directo en cualquiera de los 4 pasos del encabezado.

- [ ] **Step 2: Implementar las vistas del Paso 1, Paso 2 y Paso 3 en ancho completo**
  - **Paso 1:** Input de producto amplio, selector de 6 envases en tarjetas alabastro (`bg-[#FDFCF9] border-[#E7E5DF] hover:border-stone-400`), interruptor de foto de referencia con explicación clara.
  - **Paso 2:** Rejilla de 12 entornos curados (con filtros visuales: Estudio, Hogar, Ciudad/Naturaleza) y previsualización de superficie/luz.
  - **Paso 3:** Selector de 4 ángulos de cámara y 5 opciones de infografía (con selector de beneficios dinámico solo cuando no es foto limpia).

- [ ] **Step 3: Implementar la vista del Paso 4 (Mesa de Entrega y Prompt Final)**
  - Ficha resumen con píldoras en tono lino (`bg-[#EFECE6] text-stone-800`).
  - Selector de idioma `ES` / `EN`.
  - Caja de prompt en fuente monoespaciada legible sobre fondo alabastro cálido (`bg-[#FDFCF9] border-[#E7E5DF] text-stone-800`).
  - Botón primario en carbón profundo: `"Copiar Prompt para Google Flow"` con retroalimentación visual de copiado.
  - Botón secundario `"Abrir Flow ↗"`.
  - Botón `"Modificar Selección"` para volver al Paso 1.

- [ ] **Step 4: Verificar compilación**
Ejecutar: `npm run build`
Esperado: 0 errores de compilación.

- [ ] **Step 5: Commit**
```bash
git add src/components/ImagePromptStudio.tsx
git commit -m "feat(studio): implement 4-step horizontal stepper and warm alabaster UI"
```

---

### Task 3: Limpiar `App.tsx` y Unificar la Paleta Global en `index.css`

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css`
- Test: `npm run build`

**Interfaces:**
- Consumes: `ImagePromptStudio` actualizado.
- Produces:
  - Eliminación de la sección `ProductCatalogSection` (galería inferior de 10 productos).
  - Canvas global en tono `#F7F5F0`.
  - Header minimalista marfil cálido con logo "NaturalStudio" y botón discreto para reiniciar escena.
  - Footer sobrio en alabastro/lino.

- [ ] **Step 1: Ajustar `index.css` para soportar la paleta marfil cálida**
Asegurar que `body` y el canvas raíz tengan `background-color: #F7F5F0; color: #292524;`.

- [ ] **Step 2: Remover `ProductCatalogSection` y limpiar `App.tsx`**
  - Retirar la importación y renderizado de `ProductCatalogSection`.
  - Ajustar el Navbar superior con fondo marfil (`bg-[#F7F5F0]/90 backdrop-blur border-b border-[#E7E5DF]`).
  - Actualizar el footer en tono lino limpio.

- [ ] **Step 3: Verificar compilación**
Ejecutar: `npm run build`
Esperado: Reducción del tamaño del bundle y 0 errores.

- [ ] **Step 4: Commit**
```bash
git add src/App.tsx src/index.css
git commit -m "refactor(app): remove legacy catalog gallery and unify warm alabaster theme"
```

---

### Task 4: Verificación Integral de Flujo y Pruebas Automatizadas con Playwright

**Files:**
- Test: `npm run build`
- Test: Verificación e2e con Playwright en `http://localhost:5173`

**Interfaces:**
- Verifica:
  - Navegación secuencial y por clics directos entre los pasos 1, 2, 3 y 4.
  - Correcta generación del prompt en el Paso 4 con el nombre del producto, envase y entorno seleccionado.
  - Funcionamiento del toggle de foto de referencia con la silueta del envase.
  - Inexistencia de textos fantasma al seleccionar "Foto Limpia de Catálogo".
  - Comportamiento responsive en resoluciones de escritorio (1280px) y móvil (390px).

- [ ] **Step 1: Iniciar servidor dev y verificar carga de página**
Navegar a `http://localhost:5173` y comprobar que la paleta visible es `#F7F5F0` y que el Stepper muestra el Paso 1.

- [ ] **Step 2: Ejecutar prueba de avance paso a paso y generación de prompt**
Simular selección de envase "Bolsa Doypack", avance al Paso 2, selección de "Cocina de Diseño", avance al Paso 3, selección de "Foto Limpia", avance al Paso 4 y comprobar que el prompt contiene exactamente las directivas seleccionadas.

- [ ] **Step 3: Ejecutar prueba de saltos en el Stepper**
Hacer clic en el Paso 2 desde el Paso 4, cambiar a "Café Urbano", volver al Paso 4 y verificar que el prompt se actualizó en tiempo real.

- [ ] **Step 4: Capturar screenshot final de confirmación**
Tomar captura de pantalla en el Paso 4 para documentar la entrega visual.

- [ ] **Step 5: Commit y Push**
```bash
git add -A
git commit -m "chore(release): verify studio stepper redesign and clean up legacy elements"
git push origin main
```
