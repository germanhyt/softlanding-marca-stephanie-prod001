
Sobre el proyecto:

1) El proyecto es una landing para "Stephanie Hoyle" para que impulse su marca perosnal de forma independiente

2) La Arquitectura de informacióm se basa en los siguientes puntos
- en info/img/ enccontramos las imàgenes que se asignarán a cada sección de la landing
- El frame general lo revisamos de mcp con figma que te indicaré
- En caso de haber problemas con el punto anterior vamos a leer las imagenes de info/prototype/

3) Enlaces:
- Este es el enlace a su newsletter: https://sustainablecareergrowth.substack.com/
- Este es a su perfil de Linkedin: https://www.linkedin.com/in/stephaniehoyleca/
- Web de referencia: https://1f4590ac-5c75-4e5f-9d54-3a793d7af7d0-render.magicpatterns.app/


Detalles técnicos:

1) Para maquetado y estilos:
- React island y typescript: con web componentes, hooks y buenas prácticas para un rendimiento óptimo de los renders.
- Tailwindcss 4 con tailwind.config.ts: estilos con orden jerárquico y buenas prácticas, en casos especiales usar css puro.
- React Icons: Para iconos
- Framer-motion: Para efectos y animaciones, en casos especiales usar css puro.
- Swiper: Para carousel de cards, reseñas, contenidos.

2) Para SEO:
- crear config/seoConfig.ts y config/site.config.ts: Preparado para personalizar datos del cliente
- además preparar el file de robots y sitemap

3) Helpers
- utils/helpers.ts: En caso de que se necesiten funciones comunes

4) Para el gestor de depndencias:
- pnpm

5) Consideramos tailwind.config.ts y responsive:
- "import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.2rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
      },
      colors: {
        primary: {
        },
        text: {
        },
        background: {

        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient()',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
"

6) Basado en el package.json:
- "  "dependencies": {
    "@astrojs/react": "^4.4.0",
    "@astrojs/sitemap": "^3.6.0",
    "@astrojs/tailwind": "^6.0.2",
    "astro": "^5.15.3",
    "framer-motion": "^12.23.24",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^24.9.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "react-icons": "^5.5.0",
    "tailwindcss": "^3.4.18",
    "typescript": "^5.9.3",
  }" 


7) En caso sea landing basado en el astro.config.mjs cuyo ejemplo es (readaptamos):
- "// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.biotraining.pe",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2025-11-12"),
    }),
  ],
  output: "static",
});
"

---

## Planificación paso a paso

### Paso 1 (cerrado): objetivo, alcance y criterios

Objetivo del proyecto:
- Construir una landing personal para Stephanie Hoyle que comunique su propuesta de valor en growth strategy y convierta visitas en conversaciones de negocio.

Alcance MVP:
- Landing de una sola página responsive (desktop y mobile) basada en Figma.
- Secciones: Header/Hero, Consultoría, Servicios, Proceso, Sobre mí, Footer.
- CTA principal: "Elige tu estrategia".
- Enlaces activos a newsletter y LinkedIn.

Criterios de éxito:
- Alta fidelidad visual respecto a Figma.
- Carga rápida y animaciones fluidas.
- SEO técnico base completo.
- Accesibilidad mínima garantizada (estructura semántica, contraste y textos alternativos).

### Paso 2 (actual): arquitectura de información final

Orden de la landing:
1. Header + Hero.
2. Consultoría.
3. Servicios.
4. Proceso.
5. Sobre mí.
6. Footer.

Mapa de contenido por sección:

1) Header + Hero
- Contenido clave:
  - Marca personal: "Stephanie Hoyle" + subtítulo "Growth strategy".
  - Navegación principal.
  - Titular: "Estrategias que impulsan negocios reales".
  - Copia de apoyo sobre crecimiento basado en datos, investigación y creatividad.
  - CTA principal: "Elige tu estrategia".
- Assets sugeridos:
  - `info/prototype/header.png`
  - Íconos del menú y flecha CTA (si aplica en mobile).

2) Consultoría
- Contenido clave:
  - Bloque explicativo del enfoque de acompañamiento.
  - Beneficios/valor de trabajar con Stephanie.
- Assets sugeridos:
  - `info/prototype/section-consultoria.png`

3) Servicios
- Contenido clave:
  - Tarjetas de servicios (ejemplo en Figma: Growth, Brand, On-demand).
  - Breve descriptor por servicio.
  - Comportamiento de carrusel en mobile (si la densidad de cards lo requiere).
- Assets sugeridos:
  - `info/prototype/section3-servicios.png`
  - `info/img/Ilustraciones segunda sección - Web Stephanie/`

4) Proceso
- Contenido clave:
  - Título de sección: "Proceso" y subtítulo "Cómo trabajo".
  - Mensaje: "Un proceso circular, no lineal."
  - 4 pasos:
    1) Entender.
    2) Diseñar.
    3) Acompañar.
    4) Medir.
  - Cada paso con una breve explicación.
- Assets sugeridos:
  - `info/prototype/section4-proceso.png`
  - `info/img/íconos primera sección web Stephanie/`

5) Sobre mí
- Contenido clave:
  - Bloque biográfico de Stephanie.
  - Foto y narrativa de experiencia.
  - Cierre con CTA de contacto/conversación.
- Assets sugeridos:
  - `info/prototype/section5-sobremi.png`
  - `info/img/Foto Stephanie - Sección Sobre mí/`

6) Footer
- Contenido clave:
  - Enlaces de cierre.
  - Newsletter:
    - https://sustainablecareergrowth.substack.com/
  - LinkedIn:
    - https://www.linkedin.com/in/stephaniehoyleca/
- Assets sugeridos:
  - `info/prototype/footer.png`

Notas de consistencia:
- Desktop referencia base: frame `217:1311`.
- Mobile referencia base: frame `217:1473`.
- Si falla la lectura de Figma, usar capturas en `info/prototype/` como respaldo oficial.

### Paso 3 (actual): arquitectura técnica ejecutable

Stack base:
- Astro + React islands + TypeScript.
- Tailwind CSS (alineado al `package.json` actual).
- Framer Motion para animaciones puntuales.
- Swiper para carruseles en mobile (si aplica por densidad de contenido).
- React Icons para iconografía auxiliar.

Estructura objetivo de carpetas:
- `src/pages/index.astro`
- `src/layouts/MainLayout.astro`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ConsultoriaSection.tsx`
- `src/components/sections/ServiciosSection.tsx`
- `src/components/sections/ProcesoSection.tsx`
- `src/components/sections/SobreMiSection.tsx`
- `src/components/sections/FooterSection.tsx`
- `src/components/common/ButtonCTA.tsx`
- `src/components/common/Container.tsx`
- `src/components/common/SectionHeading.tsx`
- `src/config/site.config.ts`
- `src/config/seoConfig.ts`
- `src/utils/helpers.ts`
- `public/images/*` (assets optimizados desde `info/img/` o `info/prototype/`)
- `public/robots.txt`
- `public/sitemap-index.xml` (si no se genera automáticamente)

Responsabilidad por capa:
- `index.astro`: orquestación de secciones y orden final de la landing.
- `MainLayout.astro`: estructura base HTML, metadatos SEO y carga de fuentes.
- `sections/*.tsx`: UI y comportamiento por bloque de negocio.
- `common/*.tsx`: piezas reutilizables sin lógica de negocio específica.
- `config/*.ts`: configuración editable por cliente (SEO y datos globales).
- `utils/helpers.ts`: funciones utilitarias puras y reutilizables.

Plan de implementación por fases:
1. Bootstrap técnico:
   - Crear estructura de carpetas base.
   - Configurar `astro.config.mjs` y Tailwind.
   - Definir tokens iniciales (tipografía, colores, contenedor, breakpoints).
2. Maquetado estructural:
   - Construir `MainLayout.astro` + `index.astro`.
   - Implementar secciones sin animaciones (primero estático fiel a Figma).
3. Interacción y motion:
   - Integrar animaciones mínimas con Framer Motion.
   - Agregar carrusel con Swiper solo donde sea realmente necesario.
4. SEO + accesibilidad:
   - Completar `seoConfig.ts`, `site.config.ts`, `robots.txt` y sitemap.
   - Revisar headings semánticos, contraste, `alt`, `aria-label` y foco de teclado.
5. Optimización final:
   - Comprimir assets y revisar tamaños.
   - Ajustes de performance (evitar JS innecesario en islas).
   - QA visual final desktop/mobile.

Convenciones técnicas:
- Nombres de componentes en PascalCase y archivos por sección explícitos.
- Props tipadas con interfaces locales por componente.
- Evitar lógica compleja en vistas; mover utilidades a `utils/helpers.ts`.
- Mantener estilos utilitarios en Tailwind; usar CSS adicional solo en casos especiales.
- Evitar sobreanimación: prioridad a claridad, rendimiento y legibilidad.

Checklist de Definition of Done (DoD):
- Landing fiel a Figma en desktop y mobile.
- Navegación y CTA principal funcionando.
- Enlaces externos (Substack y LinkedIn) correctos.
- SEO base aplicado y validado.
- Accesibilidad mínima validada.
- Sin errores de build.

Decisión tomada:
- Se implementa el MVP con `tailwindcss@^3.4.18` para mantener compatibilidad con el stack de referencia.
- La migración a Tailwind v4 queda fuera del alcance inicial y se evaluará en una iteración posterior.

### Paso 4 (actual): mapa de contenidos definitivo (copys y enlaces)

Objetivo del paso:
- Cerrar contenido textual de cada sección para evitar retrabajo durante el maquetado.

1) Header + Hero
- Navegación:
  - Consultoría
  - Servicios
  - Proceso
  - Sobre mí
  - Newsletter
- Identidad:
  - "Stephanie Hoyle"
  - "Growth strategy"
- Titular principal (H1):
  - "Estrategias que impulsan negocios reales"
- Texto de apoyo:
  - "Ayudo a startups y negocios a crecer con estrategias de marketing basadas en datos, investigación y creatividad."
- CTA principal:
  - Label: "Elige tu estrategia"
  - Acción: scroll a sección de servicios.
- CTA de conversación:
  - "Conversemos sobre tus objetivos y veamos cómo puedo ayudarte a construir una estrategia de crecimiento que realmente funcione."

2) Consultoría
- Título de sección:
  - "Consultoría"
- Propuesta de valor:
  - Acompañamiento estratégico para traducir objetivos de negocio en planes accionables y medibles.
- Mensaje clave:
  - Crecimiento alineado con contexto real del negocio, no tácticas aisladas.

3) Servicios
- Título de sección:
  - "Servicios"
- Cards base (MVP):
  - Growth.
  - Brand.
  - On-demand.
- Formato de cada card:
  - Nombre del servicio.
  - Descripción corta (1-2 líneas).
  - Resultado esperado.
- CTA de sección:
  - "Elige tu estrategia" (reutilizable para mantener consistencia).

4) Proceso
- Título:
  - "Proceso"
- Subtítulo:
  - "Cómo trabajo."
- Frase de contexto:
  - "Un proceso circular, no lineal."
- Pasos:
  1) Entender:
     - "Inmersión profunda en tu negocio, mercado, equipo y objetivos. Sin asumir, sin saltarse pasos."
  2) Diseñar:
     - "Construcción de la estrategia y el roadmap con prioridades claras y criterios de decisión explícitos."
  3) Acompañar:
     - "Presencia activa durante la ejecución. No entrego un deck y me voy, me quedo mientras haga falta."
  4) Medir:
     - "Definición de métricas de éxito, seguimiento de resultados y ajuste continuo de la estrategia."

5) Sobre mí
- Nombre:
  - "Stephanie Hoyle"
- Rol:
  - "Growth strategy"
- Cuerpo principal:
  - "Con más de 10 años trabajando en la intersección de marketing, datos y estrategia, he acompañado a startups en sus primeras etapas, a scaleups en momentos críticos de crecimiento y a organizaciones de impacto en la construcción de sistemas sostenibles."
  - "Mi trabajo no empieza con tácticas. Empieza entendiendo el negocio, el equipo y los objetivos reales y, desde ahí, construimos juntos la estrategia que tiene más posibilidades de funcionar."
  - "Me interesa el crecimiento que dura: el que está alineado con la identidad de la organización, soportado por datos y ejecutado con criterio."
- Cierre:
  - Repetir CTA de conversación para mantener claridad de conversión.

6) Footer
- Navegación resumida:
  - Consultoría / Servicios / Proceso / Sobre mí.
- Enlaces externos:
  - Newsletter: https://sustainablecareergrowth.substack.com/
  - LinkedIn: https://www.linkedin.com/in/stephaniehoyleca/
- Copyright:
  - "© Stephanie Hoyle. Todos los derechos reservados."

Alt text propuestos (accesibilidad):
- Foto principal Stephanie:
  - "Retrato de Stephanie Hoyle".
- Ilustraciones de servicios:
  - "Ilustración representando el servicio de [nombre del servicio]".
- Íconos de proceso:
  - "Icono del paso [Entender/Diseñar/Acompañar/Medir]".
- Flecha CTA:
  - "Flecha decorativa del botón Elige tu estrategia" (si aporta significado visual; si es puramente decorativa, usar `aria-hidden`).

Definiciones de enlace y comportamiento:
- Los enlaces externos abren en nueva pestaña con `rel="noopener noreferrer"`.
- El CTA principal realiza scroll interno suave.
- Mantener consistencia de labels de CTA en todas las secciones.

### Paso 5 (actual): backlog de implementación priorizado

Objetivo del paso:
- Convertir la planificación en tareas ejecutables con orden, prioridad y criterio de cierre.

#### Sprint 1: base técnica y estructura visual (prioridad alta)

Tarea 1. Inicialización del proyecto Astro + React + TS + Tailwind.
- Prioridad: Alta.
- Dependencias: Ninguna.
- Entregable:
  - Proyecto inicial funcional con scripts de desarrollo y build.
  - Integraciones configuradas (`@astrojs/react`, `@astrojs/tailwind`, `@astrojs/sitemap`).
- Criterio de aceptación:
  - `pnpm dev` y `pnpm build` ejecutan sin error.

Tarea 2. Estructura de carpetas y arquitectura base.
- Prioridad: Alta.
- Dependencias: Tarea 1.
- Entregable:
  - Crear rutas y archivos definidos en el Paso 3 (`pages`, `layouts`, `sections`, `common`, `config`, `utils`).
- Criterio de aceptación:
  - Estructura creada y documentada en el repositorio sin archivos huérfanos.

Tarea 3. Configuración global de estilos y tokens.
- Prioridad: Alta.
- Dependencias: Tarea 1.
- Entregable:
  - `tailwind.config` con breakpoints, contenedor, tipografías y colores base.
  - Variables de diseño alineadas a Figma.
- Criterio de aceptación:
  - Se pueden aplicar clases de tipografía/color/spacing consistentes en todas las secciones.

Tarea 4. Construcción de `MainLayout` e `index`.
- Prioridad: Alta.
- Dependencias: Tareas 2 y 3.
- Entregable:
  - Layout principal semántico + página orquestadora con orden final de secciones.
- Criterio de aceptación:
  - Landing renderiza completa con todas las secciones en el orden definido.

Tarea 5. Maquetado estático de secciones (sin animaciones).
- Prioridad: Alta.
- Dependencias: Tarea 4.
- Entregable:
  - `Hero`, `Consultoria`, `Servicios`, `Proceso`, `SobreMi`, `Footer`.
  - Contenido final del Paso 4 integrado.
- Criterio de aceptación:
  - Vista desktop y mobile con fidelidad visual aceptable respecto a Figma/prototipos.

#### Sprint 2: interacción, SEO y accesibilidad (prioridad alta/media)

Tarea 6. Componentes comunes reutilizables.
- Prioridad: Media.
- Dependencias: Tarea 5.
- Entregable:
  - `ButtonCTA`, `Container`, `SectionHeading` aplicados en todas las secciones.
- Criterio de aceptación:
  - No hay duplicación innecesaria de estructura de botones/títulos/contenedores.

Tarea 7. Integración de assets optimizados.
- Prioridad: Alta.
- Dependencias: Tarea 5.
- Entregable:
  - Assets exportados y ubicados en `public/images`.
  - Peso optimizado de imágenes críticas.
- Criterio de aceptación:
  - No hay imágenes rotas y la carga visual inicial es rápida.

Tarea 8. Interacciones y animaciones mínimas.
- Prioridad: Media.
- Dependencias: Tareas 5 y 6.
- Entregable:
  - Transiciones sutiles con Framer Motion.
  - Scroll suave y microinteracciones de CTA.
- Criterio de aceptación:
  - Animaciones fluidas, sin bloquear render ni afectar legibilidad.

Tarea 9. Carrusel en servicios (condicional).
- Prioridad: Media.
- Dependencias: Tarea 5.
- Entregable:
  - Implementación con Swiper solo en mobile si la sección lo requiere.
- Criterio de aceptación:
  - Navegación táctil cómoda y contenido legible en cards.

Tarea 10. SEO técnico base.
- Prioridad: Alta.
- Dependencias: Tarea 4.
- Entregable:
  - `src/config/seoConfig.ts`, `src/config/site.config.ts`, `robots.txt`, sitemap.
  - Title, description, canonical y Open Graph iniciales.
- Criterio de aceptación:
  - Metadatos presentes y coherentes en la página principal.

Tarea 11. Accesibilidad mínima obligatoria.
- Prioridad: Alta.
- Dependencias: Tarea 5.
- Entregable:
  - Jerarquía correcta de headings.
  - `alt` text aplicado.
  - Estado de foco visible y labels en elementos interactivos.
- Criterio de aceptación:
  - Navegación por teclado funcional y contenido comprensible con lector de pantalla básico.

#### Sprint 3: calidad, ajustes y entrega (prioridad media)

Tarea 12. QA visual y responsive final.
- Prioridad: Alta.
- Dependencias: Tareas 5, 7, 8, 9, 11.
- Entregable:
  - Ajustes de spacing, tipografía y comportamiento responsive por breakpoint.
- Criterio de aceptación:
  - No hay cortes, solapamientos ni desbordes en desktop/mobile.

Tarea 13. Revisión de performance.
- Prioridad: Media.
- Dependencias: Tareas 7 y 8.
- Entregable:
  - Reducción de JS innecesario en islas.
  - Optimización de imágenes y carga diferida donde aplique.
- Criterio de aceptación:
  - Experiencia fluida en dispositivos de gama media.

Tarea 14. Preparación de release.
- Prioridad: Media.
- Dependencias: Todas las anteriores.
- Entregable:
  - Validación final de enlaces externos.
  - Checklist DoD completo.
- Criterio de aceptación:
  - Landing lista para despliegue sin bloqueantes.

Riesgos y mitigación:
- Riesgo: diferencias entre Figma y assets en `info/prototype`.
  - Mitigación: usar Figma como fuente primaria y `prototype` como fallback visual.
- Riesgo: sobreuso de animaciones.
  - Mitigación: limitar motion a elementos de alto valor comunicacional.
- Riesgo: inconsistencia tipográfica entre desktop y mobile.
  - Mitigación: definir escala tipográfica centralizada desde Tailwind al inicio.

Orden sugerido de ejecución real:
1) Tareas 1-5.
2) Tareas 10-11.
3) Tareas 6-9.
4) Tareas 12-14.

### Paso 6 (actual): plan de QA y validación final

Objetivo del paso:
- Estandarizar cómo se valida calidad antes de declarar la landing lista para release.

Entornos de validación:
- Local: QA funcional y visual durante desarrollo.
- Build local (`pnpm build` + preview): validación de release.
- Entorno de preproducción (si aplica): validación final con enlaces y metadatos reales.

Matriz mínima de dispositivos/navegadores:
- Mobile: 375px y 420px.
- Tablet: 768px.
- Desktop: 1280px y 1440px.
- Navegadores: Chrome (principal), Edge (secundario), Safari/iOS (si está disponible en pruebas).

Checklist QA funcional:
- Navegación del header:
  - Cada item hace scroll correcto a su sección.
- CTA principal:
  - "Elige tu estrategia" desplaza al bloque objetivo sin errores.
- Enlaces externos:
  - Newsletter y LinkedIn abren en nueva pestaña.
  - Usan `rel="noopener noreferrer"`.
- Sección servicios:
  - Cards renderizan correctamente.
  - Si hay carrusel en mobile, navegación táctil funciona sin cortes.

Checklist QA visual:
- Fidelidad de estructura:
  - Orden de secciones coincide con Figma.
- Tipografía:
  - Jerarquía H1/H2/H3 consistente y legible.
- Espaciado:
  - Sin bloques solapados ni saltos bruscos entre breakpoints.
- Colores:
  - Aplicación consistente de paleta principal y de texto.
- Imágenes:
  - Sin pixelación crítica, deformación o recortes no deseados.

Checklist QA de accesibilidad:
- Semántica:
  - Un único H1 y jerarquía de headings lógica.
- Alternativas textuales:
  - `alt` text en imágenes informativas.
  - Elementos decorativos con `aria-hidden` cuando corresponda.
- Teclado:
  - Foco visible en botones y enlaces.
  - Navegación con tabulación sin bloqueos.
- Legibilidad:
  - Contraste suficiente entre texto y fondo.

Checklist QA de SEO técnico:
- Metadatos:
  - `title`, `description`, canonical y Open Graph cargados.
- Indexación:
  - `robots.txt` accesible y correcto.
  - Sitemap generado y accesible.
- Contenido:
  - Headings descriptivos.
  - Enlaces internos y externos coherentes.

Checklist QA de performance:
- Build:
  - `pnpm build` sin errores.
- Payload:
  - No cargar JS innecesario en secciones estáticas.
- Imágenes:
  - Formatos/pesos optimizados para web.
- Percepción:
  - Hero y contenido above-the-fold aparecen rápido en mobile.

Criterios de severidad (para cierre de QA):
- Bloqueante (P0): rompe navegación, build, render principal o enlaces críticos.
- Alto (P1): afecta experiencia clave, pero existe workaround.
- Medio (P2): detalle visual/funcional no crítico para release.
- Bajo (P3): mejora estética o microajuste de baja prioridad.

Regla de aprobación de release:
- 0 issues P0.
- 0 issues P1 abiertos sin aprobación explícita.
- P2/P3 documentados con plan de corrección posterior.
- Checklist DoD del Paso 3 completado.

Entregables de cierre QA:
- Lista de incidencias con severidad y estado.
- Evidencia visual (capturas desktop/mobile por sección).
- Confirmación final: "Aprobado para release".

-------------------------------

- Agregar logo buena resolución
- Agregar logos de empresas
- Agregar número celular en los botones
- Agregar correo
- Potenciar SEO con newslette

- Recuerda que el dialecto es de Lima/Peru en las partes del español del texto, no es argentino


- Deslizamiento de redirección scroll con #suaves, ejemp. eb el button de "Elige tu estrategia"
- Botones de contacto redirigir a wa.me con nùmero +51951716163 con mensaje prdeterminado de foram coherente
- Correo en el footer shoylec88@gmail.com
- te comparto la parte del newsletter tomamos 3 de ellos como cards: 
  "Marketing, growth e IA: cómo usar IA donde realmente mueve el crecimiento"
  "Cómo elegir las palancas correctas y diseñar crecimiento que realmente avanza"
  "Antes de diseñar crecimiento, entiende a quién quieres servir", te comparto lo siguiente (lo colomo debajo de "Sobre mí"):
<div class="container-dOq2Em"><div class="column-HNiwn6 left-jXwsmK"><div tabindex="0" aria-label="Post preview for Marketing, growth e IA: cómo usar IA donde realmente mueve el crecimiento" role="article" class="pencraft pc-display-flex pc-flexDirection-column pc-padding-8 pc-position-relative pc-reset pc-borderRadius-sm container-H2dyKk"><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><div class="image-QTMr_S container-XxSyR3" style="aspect-ratio: 1.5 / 1;"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/$s_!23ES!,w_424,h_282,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 424w, https://substackcdn.com/image/fetch/$s_!23ES!,w_848,h_565,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 848w, https://substackcdn.com/image/fetch/$s_!23ES!,w_1250,h_833,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 1250w, https://substackcdn.com/image/fetch/$s_!23ES!,w_1272,h_847,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!23ES!,w_1456,h_970,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 1456w, https://substackcdn.com/image/fetch/$s_!23ES!,w_2500,h_1666,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 2500w, https://substackcdn.com/image/fetch/$s_!23ES!,w_3750,h_2499,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 3750w" sizes="(min-width:768px) 50vw, 100vw"><img src="https://substackcdn.com/image/fetch/$s_!23ES!,w_1250,h_833,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg" sizes="(min-width:768px) 50vw, 100vw" alt="" srcset="https://substackcdn.com/image/fetch/$s_!23ES!,w_424,h_282,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 424w, https://substackcdn.com/image/fetch/$s_!23ES!,w_848,h_565,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 848w, https://substackcdn.com/image/fetch/$s_!23ES!,w_1250,h_833,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 1250w, https://substackcdn.com/image/fetch/$s_!23ES!,w_1272,h_847,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!23ES!,w_1456,h_970,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 1456w, https://substackcdn.com/image/fetch/$s_!23ES!,w_2500,h_1666,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 2500w, https://substackcdn.com/image/fetch/$s_!23ES!,w_3750,h_2499,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7446b50-e28f-4a2d-a624-2bacb36349f1_500x500.jpeg 3750w" width="1250" height="833" class="img-OACg1c image-nBNbRY pencraft pc-reset" style="aspect-ratio: 1.5 / 1;"></picture></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-paddingLeft-16 pc-paddingRight-16 pc-paddingTop-32 pc-paddingBottom-0 pc-justifyContent-center pc-alignItems-center pc-reset flex-grow-rzmknG"><div class="pencraft pc-display-flex pc-flexDirection-column pc-paddingBottom-8 pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/marketing-growth-e-ia-como-usar-ia" data-testid="post-preview-title" class="pencraft pc-reset color-pub-primary-text-NyXPlw align-center-y7ZD4w text-wrap-balance-gt9Biw font-pub-headings-FE5byy clamp-y7pNm8 clamp-4-hyJSKl reset-IxiVJZ" style="font-size: calc(30px * var(--font_size_headings_multiplier, 1)); line-height: calc(1em * var(--font_size_headings_line_height_ratio, 1.2666666666666666));">Marketing, growth e IA: cómo usar IA donde realmente mueve el crecimiento</a></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-paddingBottom-8 pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/marketing-growth-e-ia-como-usar-ia" class="pencraft pc-reset color-primary-zABazT align-center-y7ZD4w text-wrap-balance-gt9Biw line-height-24-jnGwiv font-text-qe4AeH size-17-JHHggF clamp-y7pNm8 clamp-2-kM02pu reset-IxiVJZ">La mayoría de empresas está entrando a la conversación sobre inteligencia artificial por el lugar equivocado.</a></div><div class="pencraft pc-display-inline pc-reset color-pub-secondary-text-hGQ02T line-height-20-t4M0El font-meta-MWBumP size-11-NuY2Zx weight-medium-fw81nC transform-uppercase-yKDgcq reset-IxiVJZ meta-EgzBVA"><time datetime="2026-05-04T22:01:16.225Z" class="date-rtYe1v">May 4</time>&nbsp;<span class="dividerChar-SbAJEi">•</span>&nbsp;<span class="pencraft pc-reset reset-IxiVJZ"><span data-state="closed" style="min-width: 0px;"><a href="https://substack.com/@sustainablecareergrowth" class="link-HFGLqU">Stephanie Hoyle</a></span></span></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-paddingTop-8 pc-reset"><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset actions-YFg47u"><div class="post-ufi style-compressed themed"><div class="like-button-container post-ufi-button style-compressed"><button tabindex="0" type="button" aria-label="Like (4)" aria-pressed="false" class="pencraft pc-reset pencraft post-ufi-button style-compressed has-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></g></svg><div class="label">4</div></button></div><button tabindex="0" type="button" aria-label="View comments (1)" data-href="https://sustainablecareergrowth.substack.com/p/marketing-growth-e-ia-como-usar-ia/comments" class="pencraft pc-reset pencraft post-ufi-button style-compressed post-ufi-comment-button has-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></g></svg><div class="label">1</div></button><button tabindex="0" type="button" id="radix-P0-767" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke-width="2" stroke="var(--color-fg-primary)" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon"><g><title></title><path d="M2.53001 7.81595C3.49179 4.73911 6.43281 2.5 9.91173 2.5C13.1684 2.5 15.9537 4.46214 17.0852 7.23684L17.6179 8.67647M17.6179 8.67647L18.5002 4.26471M17.6179 8.67647L13.6473 6.91176M17.4995 12.1841C16.5378 15.2609 13.5967 17.5 10.1178 17.5C6.86118 17.5 4.07589 15.5379 2.94432 12.7632L2.41165 11.3235M2.41165 11.3235L1.5293 15.7353M2.41165 11.3235L6.38224 13.0882"></path></g></svg></button><button tabindex="0" type="button" id="radix-P0-775" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-href="javascript:void(0)" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg></button></div></div></div></div></div></div></div><div class="pencraft pc-display-flex pc-reset border-right-detail-tQ22IY" style="margin: 8px 0px;"></div><div class="column-HNiwn6 right-koj6uE"><div><div class="container-O1YsI6 two-column-list-BLHtzo"><div tabindex="0" aria-label="Post preview for Cómo elegir las palancas correctas y diseñar crecimiento que realmente avanza" role="article" class="pencraft pc-display-flex pc-flexDirection-column pc-padding-8 pc-position-relative pc-reset pc-borderRadius-sm container-H2dyKk"><div class="container-Qnseki"><div class="pencraft pc-display-flex pc-flexDirection-column pc-gap-4 pc-position-relative pc-reset flex-grow-rzmknG"><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/como-elegir-las-palancas-correctas" data-testid="post-preview-title" class="pencraft pc-reset color-pub-primary-text-NyXPlw font-pub-headings-FE5byy clamp-y7pNm8 clamp-3-lxFDfR reset-IxiVJZ" style="font-size: calc(19px * var(--font_size_headings_multiplier, 1)); line-height: calc(1em * var(--font_size_headings_line_height_ratio, 1.368421052631579));">Cómo elegir las palancas correctas y diseñar crecimiento que realmente avanza</a></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/como-elegir-las-palancas-correctas" class="pencraft pc-reset color-primary-zABazT line-height-20-t4M0El font-text-qe4AeH size-15-Psle70 clamp-y7pNm8 clamp-2-kM02pu reset-IxiVJZ">La parte más importante del proceso: convertir diagnóstico en decisiones</a></div><div class="pencraft pc-display-inline pc-reset color-pub-secondary-text-hGQ02T line-height-20-t4M0El font-meta-MWBumP size-11-NuY2Zx weight-medium-fw81nC transform-uppercase-yKDgcq reset-IxiVJZ meta-EgzBVA"><time datetime="2026-01-21T12:00:55.048Z" class="date-rtYe1v">Jan 21</time>&nbsp;<span class="dividerChar-SbAJEi">•</span>&nbsp;<span class="pencraft pc-reset reset-IxiVJZ"><span data-state="closed" style="min-width: 0px;"><a href="https://substack.com/@sustainablecareergrowth" class="link-HFGLqU">Stephanie Hoyle</a></span></span></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset actions-YFg47u"><div class="post-ufi style-compressed justified themed"><div class="like-button-container post-ufi-button style-compressed"><button tabindex="0" type="button" aria-label="Like (2)" aria-pressed="false" class="pencraft pc-reset pencraft post-ufi-button style-compressed has-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></g></svg><div class="label">2</div></button></div><button tabindex="0" type="button" aria-label="View comments (0)" data-href="https://sustainablecareergrowth.substack.com/p/como-elegir-las-palancas-correctas/comments" class="pencraft pc-reset pencraft post-ufi-button style-compressed post-ufi-comment-button no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></g></svg></button><button tabindex="0" type="button" id="radix-P0-795" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke-width="2" stroke="var(--color-fg-primary)" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon"><g><title></title><path d="M2.53001 7.81595C3.49179 4.73911 6.43281 2.5 9.91173 2.5C13.1684 2.5 15.9537 4.46214 17.0852 7.23684L17.6179 8.67647M17.6179 8.67647L18.5002 4.26471M17.6179 8.67647L13.6473 6.91176M17.4995 12.1841C16.5378 15.2609 13.5967 17.5 10.1178 17.5C6.86118 17.5 4.07589 15.5379 2.94432 12.7632L2.41165 11.3235M2.41165 11.3235L1.5293 15.7353M2.41165 11.3235L6.38224 13.0882"></path></g></svg></button><button tabindex="0" type="button" id="radix-P0-803" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-href="javascript:void(0)" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg></button></div></div></div><div class="image-tkPTAj container-XxSyR3" style="aspect-ratio: 1.5 / 1;"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/$s_!T_f6!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 320w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_424,h_282,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 424w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_640,h_426,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 640w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_848,h_564,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 848w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_960,h_639,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 960w" sizes="(min-width:768px) 50vw, 100vw"><img src="https://substackcdn.com/image/fetch/$s_!T_f6!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png" sizes="(min-width:768px) 50vw, 100vw" alt="" srcset="https://substackcdn.com/image/fetch/$s_!T_f6!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 320w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_424,h_282,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 424w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_640,h_426,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 640w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_848,h_564,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 848w, https://substackcdn.com/image/fetch/$s_!T_f6!,w_960,h_639,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d285199-f687-41cb-9091-80499faa4421_696x496.png 960w" width="320" height="213" loading="lazy" class="img-OACg1c image-nBNbRY pencraft pc-reset" style="aspect-ratio: 1.5 / 1;"></picture></div></div></div><div class="pencraft pc-display-flex pc-reset divider-QOeHtM"></div><div tabindex="0" aria-label="Post preview for Antes de diseñar crecimiento, entiende a quién quieres servir" role="article" class="pencraft pc-display-flex pc-flexDirection-column pc-padding-8 pc-position-relative pc-reset pc-borderRadius-sm container-H2dyKk"><div class="container-Qnseki"><div class="pencraft pc-display-flex pc-flexDirection-column pc-gap-4 pc-position-relative pc-reset flex-grow-rzmknG"><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/antes-de-disenar-crecimiento-entiende" data-testid="post-preview-title" class="pencraft pc-reset color-pub-primary-text-NyXPlw font-pub-headings-FE5byy clamp-y7pNm8 clamp-3-lxFDfR reset-IxiVJZ" style="font-size: calc(19px * var(--font_size_headings_multiplier, 1)); line-height: calc(1em * var(--font_size_headings_line_height_ratio, 1.368421052631579));">Antes de diseñar crecimiento, entiende a quién quieres servir</a></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/antes-de-disenar-crecimiento-entiende" class="pencraft pc-reset color-primary-zABazT line-height-20-t4M0El font-text-qe4AeH size-15-Psle70 clamp-y7pNm8 clamp-2-kM02pu reset-IxiVJZ">En el primer artículo hablamos de algo fundamental: definir qué significa crecer. Este segundo paso es igual de importante y, muchas veces, incluso más…</a></div><div class="pencraft pc-display-inline pc-reset color-pub-secondary-text-hGQ02T line-height-20-t4M0El font-meta-MWBumP size-11-NuY2Zx weight-medium-fw81nC transform-uppercase-yKDgcq reset-IxiVJZ meta-EgzBVA"><time datetime="2025-12-10T22:58:04.741Z" class="date-rtYe1v">Dec 10, 2025</time>&nbsp;<span class="dividerChar-SbAJEi">•</span>&nbsp;<span class="pencraft pc-reset reset-IxiVJZ"><span data-state="closed" style="min-width: 0px;"><a href="https://substack.com/@sustainablecareergrowth" class="link-HFGLqU">Stephanie Hoyle</a></span></span></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset actions-YFg47u"><div class="post-ufi style-compressed justified themed"><div class="like-button-container post-ufi-button style-compressed"><button tabindex="0" type="button" aria-label="Like (2)" aria-pressed="false" class="pencraft pc-reset pencraft post-ufi-button style-compressed has-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></g></svg><div class="label">2</div></button></div><button tabindex="0" type="button" aria-label="View comments (0)" data-href="https://sustainablecareergrowth.substack.com/p/antes-de-disenar-crecimiento-entiende/comments" class="pencraft pc-reset pencraft post-ufi-button style-compressed post-ufi-comment-button no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></g></svg></button><button tabindex="0" type="button" id="radix-P0-823" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke-width="2" stroke="var(--color-fg-primary)" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon"><g><title></title><path d="M2.53001 7.81595C3.49179 4.73911 6.43281 2.5 9.91173 2.5C13.1684 2.5 15.9537 4.46214 17.0852 7.23684L17.6179 8.67647M17.6179 8.67647L18.5002 4.26471M17.6179 8.67647L13.6473 6.91176M17.4995 12.1841C16.5378 15.2609 13.5967 17.5 10.1178 17.5C6.86118 17.5 4.07589 15.5379 2.94432 12.7632L2.41165 11.3235M2.41165 11.3235L1.5293 15.7353M2.41165 11.3235L6.38224 13.0882"></path></g></svg></button><button tabindex="0" type="button" id="radix-P0-831" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-href="javascript:void(0)" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg></button></div></div></div><div class="image-tkPTAj container-XxSyR3" style="aspect-ratio: 1.5 / 1;"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/$s_!R43x!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 320w, https://substackcdn.com/image/fetch/$s_!R43x!,w_424,h_282,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 424w, https://substackcdn.com/image/fetch/$s_!R43x!,w_640,h_426,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 640w, https://substackcdn.com/image/fetch/$s_!R43x!,w_848,h_564,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 848w, https://substackcdn.com/image/fetch/$s_!R43x!,w_960,h_639,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 960w" sizes="(min-width:768px) 50vw, 100vw"><img src="https://substackcdn.com/image/fetch/$s_!R43x!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png" sizes="(min-width:768px) 50vw, 100vw" alt="" srcset="https://substackcdn.com/image/fetch/$s_!R43x!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 320w, https://substackcdn.com/image/fetch/$s_!R43x!,w_424,h_282,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 424w, https://substackcdn.com/image/fetch/$s_!R43x!,w_640,h_426,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 640w, https://substackcdn.com/image/fetch/$s_!R43x!,w_848,h_564,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 848w, https://substackcdn.com/image/fetch/$s_!R43x!,w_960,h_639,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3013db14-afdf-4226-83e5-2f46973e7420_894x714.png 960w" width="320" height="213" loading="lazy" class="img-OACg1c image-nBNbRY pencraft pc-reset" style="aspect-ratio: 1.5 / 1;"></picture></div></div></div><div class="pencraft pc-display-flex pc-reset divider-QOeHtM"></div><div tabindex="0" aria-label="Post preview for Growth sostenible: por dónde empezar cuando quieres crecer mejor" role="article" class="pencraft pc-display-flex pc-flexDirection-column pc-padding-8 pc-position-relative pc-reset pc-borderRadius-sm container-H2dyKk"><div class="container-Qnseki"><div class="pencraft pc-display-flex pc-flexDirection-column pc-gap-4 pc-position-relative pc-reset flex-grow-rzmknG"><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/growth-sostenible-por-donde-empezar" data-testid="post-preview-title" class="pencraft pc-reset color-pub-primary-text-NyXPlw font-pub-headings-FE5byy clamp-y7pNm8 clamp-3-lxFDfR reset-IxiVJZ" style="font-size: calc(19px * var(--font_size_headings_multiplier, 1)); line-height: calc(1em * var(--font_size_headings_line_height_ratio, 1.368421052631579));">Growth sostenible: por dónde empezar cuando quieres crecer mejor</a></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/growth-sostenible-por-donde-empezar" class="pencraft pc-reset color-primary-zABazT line-height-20-t4M0El font-text-qe4AeH size-15-Psle70 clamp-y7pNm8 clamp-2-kM02pu reset-IxiVJZ">Cuando hablamos de growth, solemos saltar directo a tácticas: canales, campañas, contenido, automatizaciones.</a></div><div class="pencraft pc-display-inline pc-reset color-pub-secondary-text-hGQ02T line-height-20-t4M0El font-meta-MWBumP size-11-NuY2Zx weight-medium-fw81nC transform-uppercase-yKDgcq reset-IxiVJZ meta-EgzBVA"><time datetime="2025-12-01T23:18:07.843Z" class="date-rtYe1v">Dec 1, 2025</time>&nbsp;<span class="dividerChar-SbAJEi">•</span>&nbsp;<span class="pencraft pc-reset reset-IxiVJZ"><span data-state="closed" style="min-width: 0px;"><a href="https://substack.com/@sustainablecareergrowth" class="link-HFGLqU">Stephanie Hoyle</a></span></span></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset actions-YFg47u"><div class="post-ufi style-compressed justified themed"><div class="like-button-container post-ufi-button style-compressed"><button tabindex="0" type="button" aria-label="Like" aria-pressed="false" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></g></svg></button></div><button tabindex="0" type="button" aria-label="View comments (0)" data-href="https://sustainablecareergrowth.substack.com/p/growth-sostenible-por-donde-empezar/comments" class="pencraft pc-reset pencraft post-ufi-button style-compressed post-ufi-comment-button no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></g></svg></button><button tabindex="0" type="button" id="radix-P0-851" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke-width="2" stroke="var(--color-fg-primary)" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon"><g><title></title><path d="M2.53001 7.81595C3.49179 4.73911 6.43281 2.5 9.91173 2.5C13.1684 2.5 15.9537 4.46214 17.0852 7.23684L17.6179 8.67647M17.6179 8.67647L18.5002 4.26471M17.6179 8.67647L13.6473 6.91176M17.4995 12.1841C16.5378 15.2609 13.5967 17.5 10.1178 17.5C6.86118 17.5 4.07589 15.5379 2.94432 12.7632L2.41165 11.3235M2.41165 11.3235L1.5293 15.7353M2.41165 11.3235L6.38224 13.0882"></path></g></svg></button><button tabindex="0" type="button" id="radix-P0-859" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-href="javascript:void(0)" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg></button></div></div></div><div class="image-tkPTAj container-XxSyR3" style="aspect-ratio: 1.5 / 1;"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/$s_!j_6f!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 320w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_424,h_282,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 424w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_640,h_426,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 640w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_848,h_564,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 848w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_960,h_639,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 960w" sizes="(min-width:768px) 50vw, 100vw"><img src="https://substackcdn.com/image/fetch/$s_!j_6f!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png" sizes="(min-width:768px) 50vw, 100vw" alt="" srcset="https://substackcdn.com/image/fetch/$s_!j_6f!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 320w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_424,h_282,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 424w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_640,h_426,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 640w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_848,h_564,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 848w, https://substackcdn.com/image/fetch/$s_!j_6f!,w_960,h_639,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6c9ec06-7c7e-45f7-88e5-f1c4ba1870f0_896x906.png 960w" width="320" height="213" loading="lazy" class="img-OACg1c image-nBNbRY pencraft pc-reset" style="aspect-ratio: 1.5 / 1;"></picture></div></div></div><div class="pencraft pc-display-flex pc-reset divider-QOeHtM"></div><div tabindex="0" aria-label="Post preview for Volver a escribir: un regreso necesario" role="article" class="pencraft pc-display-flex pc-flexDirection-column pc-padding-8 pc-position-relative pc-reset pc-borderRadius-sm container-H2dyKk"><div class="container-Qnseki"><div class="pencraft pc-display-flex pc-flexDirection-column pc-gap-4 pc-position-relative pc-reset flex-grow-rzmknG"><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/volver-a-escribir-un-regreso-necesario" data-testid="post-preview-title" class="pencraft pc-reset color-pub-primary-text-NyXPlw font-pub-headings-FE5byy clamp-y7pNm8 clamp-3-lxFDfR reset-IxiVJZ" style="font-size: calc(19px * var(--font_size_headings_multiplier, 1)); line-height: calc(1em * var(--font_size_headings_line_height_ratio, 1.368421052631579));">Volver a escribir: un regreso necesario</a></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset"><a tabindex="-1" href="https://sustainablecareergrowth.substack.com/p/volver-a-escribir-un-regreso-necesario" class="pencraft pc-reset color-primary-zABazT line-height-20-t4M0El font-text-qe4AeH size-15-Psle70 clamp-y7pNm8 clamp-2-kM02pu reset-IxiVJZ">Han pasado casi dos años desde la última vez que nos encontramos por aquí.</a></div><div class="pencraft pc-display-inline pc-reset color-pub-secondary-text-hGQ02T line-height-20-t4M0El font-meta-MWBumP size-11-NuY2Zx weight-medium-fw81nC transform-uppercase-yKDgcq reset-IxiVJZ meta-EgzBVA"><time datetime="2025-11-26T23:08:07.415Z" class="date-rtYe1v">Nov 26, 2025</time>&nbsp;<span class="dividerChar-SbAJEi">•</span>&nbsp;<span class="pencraft pc-reset reset-IxiVJZ"><span data-state="closed" style="min-width: 0px;"><a href="https://substack.com/@sustainablecareergrowth" class="link-HFGLqU">Stephanie Hoyle</a></span></span></div><div class="pencraft pc-display-flex pc-flexDirection-column pc-reset actions-YFg47u"><div class="post-ufi style-compressed justified themed"><div class="like-button-container post-ufi-button style-compressed"><button tabindex="0" type="button" aria-label="Like (6)" aria-pressed="false" class="pencraft pc-reset pencraft post-ufi-button style-compressed has-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></g></svg><div class="label">6</div></button></div><button tabindex="0" type="button" aria-label="View comments (0)" data-href="https://sustainablecareergrowth.substack.com/p/volver-a-escribir-un-regreso-necesario/comments" class="pencraft pc-reset pencraft post-ufi-button style-compressed post-ufi-comment-button no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke-width="2" stroke="#000" xmlns="http://www.w3.org/2000/svg" class="icon" style="height: 14px; width: 14px;"><g><title></title><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></g></svg></button><button tabindex="0" type="button" id="radix-P0-879" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg role="img" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke-width="2" stroke="var(--color-fg-primary)" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon"><g><title></title><path d="M2.53001 7.81595C3.49179 4.73911 6.43281 2.5 9.91173 2.5C13.1684 2.5 15.9537 4.46214 17.0852 7.23684L17.6179 8.67647M17.6179 8.67647L18.5002 4.26471M17.6179 8.67647L13.6473 6.91176M17.4995 12.1841C16.5378 15.2609 13.5967 17.5 10.1178 17.5C6.86118 17.5 4.07589 15.5379 2.94432 12.7632L2.41165 11.3235M2.41165 11.3235L1.5293 15.7353M2.41165 11.3235L6.38224 13.0882"></path></g></svg></button><button tabindex="0" type="button" id="radix-P0-887" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-href="javascript:void(0)" class="pencraft pc-reset pencraft post-ufi-button style-compressed no-label with-border"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg></button></div></div></div><div class="image-tkPTAj container-XxSyR3" style="aspect-ratio: 1.5 / 1;"><picture><source type="image/webp" srcset="https://substackcdn.com/image/fetch/$s_!fmGx!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 320w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_424,h_282,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 424w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_640,h_426,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 640w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_848,h_564,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 848w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_960,h_639,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 960w" sizes="(min-width:768px) 50vw, 100vw"><img src="https://substackcdn.com/image/fetch/$s_!fmGx!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg" sizes="(min-width:768px) 50vw, 100vw" alt="" srcset="https://substackcdn.com/image/fetch/$s_!fmGx!,w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 320w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_424,h_282,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 424w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_640,h_426,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 640w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_848,h_564,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 848w, https://substackcdn.com/image/fetch/$s_!fmGx!,w_960,h_639,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7efa8d3-9789-4387-949e-0bf4c44843be_500x500.jpeg 960w" width="320" height="213" loading="lazy" class="img-OACg1c image-nBNbRY pencraft pc-reset" style="aspect-ratio: 1.5 / 1;"></picture></div></div></div></div></div></div></div>



-------------------------------
