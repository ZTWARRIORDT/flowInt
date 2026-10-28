# FlowNatural Studio — Guía Interactiva de Google Flow y Gemini para Productos Naturales

Aplicación web interactiva que enseña paso a paso cómo generar fotografías comerciales y pósters infográficos 9:16 de **productos naturales** en **Google Gemini (Imagen 3)** y cómo pasarlos escena por escena a **Google Flow (Veo)** para crear **videos explicativos de beneficios**.

## Características Principales

- **Fórmula Comercial de 4 Escenas (16 Segundos):** Estructura probada para explicar los 4 beneficios clave de cualquier producto natural en Google Flow (*Escena 1: Gancho + First Frame*, *Escena 2: Beneficios 1 y 2*, *Escena 3: Beneficios 3 y 4 + Ingredientes*, *Escena 4: Póster Completo + Dosis*).
- **6 Capturas Visuales Estáticas con Anotaciones Numeradas:** Explicación detallada con flechas y marcadores (`1`, `2`, `3`, `4`) de la interfaz de Gemini y Google Flow (`Frames to Video`, `First Frame / Last Frame`, `Ingredients`, `Camera Motion` y `Scene Builder`).
- **Catálogo de 7 Productos Naturales Reales:**
  1. **Zooone® Eye Vitamin & Mineral Supplement** (Póster 9:16 con 4 sellos dorados de beneficios visuales)
  2. **FOS Probióticos y Zinc — Greensofg Premium Line** (Póster 9:16 salud digestiva e inmune)
  3. **Colágeno + Magnesio Botánico**
  4. **Cúrcuma + Jengibre Natural Vitae**
  5. **Clorofila & Matcha Liquid Detox**
  6. **Sérum Botánico de Rosa Mosqueta**
  7. **Miel & Propóleo Artesanal Orgánico**
- **Prompts Bilingües (Español + Inglés Técnico) y Anatomía Desglosada:** Copiado en 1 clic con código de colores por categoría (*Envase*, *Medallones de Beneficios*, *Iluminación*, *Entorno Botánico* y *Cámara*).
- **Constructor Interactivo de Prompts y Guiones de Beneficios a Medida:** Genera al instante el prompt de imagen para Gemini y las 4 escenas con locución para cualquier producto natural.

## Desarrollo Local

```bash
npm install
npm run dev
```

## Despliegue en Vercel

El proyecto incluye `vercel.json` preconfigurado para Vite:
1. Importa el repositorio `https://github.com/ZTWARRIORDT/flowInt.git` en [Vercel](https://vercel.com/new).
2. Haz clic en **Deploy** (Framework Preset: `Vite`, Output Directory: `dist`).
