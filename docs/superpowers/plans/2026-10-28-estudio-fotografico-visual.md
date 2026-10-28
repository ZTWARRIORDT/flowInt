# Plan de Implementación: Estudio Fotográfico Visual sin Sobrecarga de Texto

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar la aplicación en un Estudio Fotográfico Comercial 100% enfocado en imágenes para Gemini / Imagen 3, eliminando por completo los videos, simplificando radicalmente los textos para principiantes y añadiendo modales visuales explicativos para los lentes de cámara.

**Architecture:** Crear `LensVisualModal.tsx` para explicar los lentes de forma visual sin jerga técnica; simplificar `ImagePromptStudio.tsx` reduciendo el texto en un 70% y organizando en 3 pasos claros; limpiar `ProductCatalogSection.tsx` y `App.tsx` retirando todos los bloques de video y dejando una interfaz limpia, espaciosa y sin saturación.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React, Vite.

## Global Constraints

- Eliminar todas las referencias a video, Google Flow, Veo 3.1, audio, voz y música.
- Ninguna jerga técnica intimidante; usar analogías sencillas y claras.
- Modal visual interactivo para los 5 lentes fotográficos principales.
- Respetar estándares de diseño: `cursor-pointer`, accesibilidad, modo claro/oscuro.
- Compilación `npm run build` sin errores.

---

### Task 1: Crear `src/components/LensVisualModal.tsx`

**Files:**
- Create: `src/components/LensVisualModal.tsx`

**Interfaces:**
- Produces: `LensVisualModal({ isOpen, onClose, selectedLensId, onSelectLens, isDark })`

- [ ] **Step 1: Crear el componente del modal con tarjetas visuales, explicaciones en lenguaje humano y comparativa de profundidad de campo (bokeh).**
- [ ] **Step 2: Verificar tipos e importaciones de Lucide.**

---

### Task 2: Rediseñar y Simplificar `src/components/ImagePromptStudio.tsx`

**Files:**
- Modify: `src/components/ImagePromptStudio.tsx`

**Interfaces:**
- Consumes: `LensVisualModal` from Task 1.
- Produces: `ImagePromptStudio({ isDark, externalPresetId })`

- [ ] **Step 1: Retirar todos los enlaces y payloads de video.**
- [ ] **Step 2: Reducir textos largos a tarjetas visuales limpias de 3 pasos.**
- [ ] **Step 3: Conectar el botón `👁️ Ver qué hace este lente` con `LensVisualModal`.**
- [ ] **Step 4: Mejorar el panel derecho con vista previa humana corta y botón gigante de Copiar.**

---

### Task 3: Limpiar `src/components/ProductCatalogSection.tsx`

**Files:**
- Modify: `src/components/ProductCatalogSection.tsx`

- [ ] **Step 1: Eliminar botones de copiado de video y escenas de 16 segundos.**
- [ ] **Step 2: Enfocar la ficha exclusivamente en los 4 estilos de fotos de estudio.**

---

### Task 4: Limpiar `src/App.tsx`

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Retirar importaciones de `BenefitVideoBuilder` y `SceneLibrarySection`.**
- [ ] **Step 2: Eliminar la sección completa `#zona-videos`, la biblioteca de escenas y la guía de modelos Veo.**
- [ ] **Step 3: Dejar el Header, el Hero y el Footer enfocados únicamente en Fotografía de Estudio.**

---

### Task 5: Compilación y Push

- [ ] **Step 1: Ejecutar `npm run build` para verificar cero errores de TypeScript y CSS.**
- [ ] **Step 2: Commit y push al repositorio remoto con el token de ZTWARRIORDT.**
