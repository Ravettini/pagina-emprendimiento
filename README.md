# Pixel Emprende - Portafolio de Diseño Web

Proyecto completo de diseño y desarrollo web que incluye un estudio de diseño (sitio principal) + 5 demos para diferentes rubros.

## 📁 Estructura del Proyecto

```
/
├── pixel-emprende/          # Sitio principal - Estudio de Diseño
├── pan-de-barrio/          # Demo 1 - Panadería Artesanal
├── nutri-mariana/          # Demo 2 - Nutricionista Profesional
├── urban-fit/              # Demo 3 - Indumentaria Deportiva
├── manitas-express/        # Demo 4 - Mantenimiento del Hogar
├── guardianes-del-delta/   # Demo 5 - ONG Ecológica
└── luz-interior-yoga/     # Demo 6 - Estudio de Yoga y Bienestar
```

## 🎨 Sitios Desarrollados

### 1. Pixel Emprende (Sitio Principal)
**Ruta:** `pixel-emprende/index.html`

Estudio de diseño web profesional con:
- Paleta: Negro, Blanco, Azul eléctrico (#00d4ff)
- Hero impactante con propuesta de valor
- 3 planes de precios (Básico, Profesional, Premium)
- Portafolio con links a los 5 demos
- Sección "Quiénes Somos"
- Testimonios de clientes
- Formulario de contacto funcional
- Botón fijo de WhatsApp

### 2. Pan de Barrio (Panadería)
**Ruta:** `pan-de-barrio/index.html`

Sitio cálido y acogedor con:
- Paleta: Crema, Marrón, Dorado (#d4a574)
- Tipografía redondeada y amigable
- Productos destacados con precios
- Carta online completa
- Horarios siempre visibles
- Ubicación con mapa integrado
- Botón fijo de pedidos por WhatsApp

### 3. NutriMariana (Nutricionista)
**Ruta:** `nutri-mariana/index.html`

Sitio minimalista y profesional con:
- Paleta: Verde agua suave (#66bb6a), Gris claro
- Hero con foto humana cálida
- 3 servicios con precios orientativos
- Testimonios de pacientes
- Sección de blog para artículos
- Formulario de contacto
- Integración con Calendly

### 4. UrbanFit (Indumentaria Deportiva)
**Ruta:** `urban-fit/index.html`

Sitio moderno y dinámico con:
- Paleta: Negro, Gris, Fucsia (#ff4081)
- Estilo urbano y contrastado
- Catálogo de productos con carrito funcional
- Promociones destacadas
- Sección "Antes y Después"
- Pasarela de pago integrada con WhatsApp

### 5. Manitas Express (Mantenimiento)
**Ruta:** `manitas-express/index.html`

Sitio profesional y directo con:
- Paleta: Azul (#2196f3), Blanco, Gris
- Iconografía clara de servicios
- Tarifas transparentes
- Galería de trabajos
- Zona de cobertura
- Formulario de cotización

### 6. Guardianes del Delta (ONG)
**Ruta:** `guardianes-del-delta/index.html`

Sitio inspirador con enfoque ecológico:
- Paleta: Verde (#4caf50), Tierra, Celeste agua
- Imágenes automáticas de Pexels
- Proyectos en curso
- Sistema de donaciones
- Noticias y actividades
- Sección de voluntariado

### 7. Luz Interior Yoga (Yoga y Bienestar)
**Ruta:** `luz-interior-yoga/index.html`

Sitio de yoga con estética relajante:
- Paleta: Lavanda (#a78bfa), Blanco, Gris perla
- Tipografías suaves y redondeadas
- Hero con imagen de naturaleza
- Tipos de clases con descripción
- Horarios completos
- Perfil de instructores
- Integración con Calendly

## ✨ Características Técnicas

### Todas las páginas incluyen:

- ✅ **Diseño Responsive** - Adaptable a móviles, tablets y desktop
- ✅ **Animaciones Suaves** - Efectos fade-in y transiciones
- ✅ **SEO Básico** - Meta tags, descripciones y palabras clave
- ✅ **Formularios Funcionales** - Integrados con WhatsApp
- ✅ **CTA Visibles** - Botones de llamada a la acción siempre accesibles
- ✅ **Botón Flotante WhatsApp** - Siempre disponible
- ✅ **Navegación Suave** - Scroll animado entre secciones
- ✅ **Código Limpio** - HTML semántico y CSS organizado
- ✅ **Tipografías Elegantes** - Google Fonts cuidadosamente seleccionadas
- ✅ **Paletas Consistentes** - Según el rubro de cada sitio
- ✅ **Imágenes de Pexels** - Carga automática de imágenes reales según el tema

## 🚀 Cómo Usar

### Opción 1: Visualización Local
Cada carpeta es un sitio independiente. Abre el archivo `index.html` directamente en tu navegador:

```bash
# Ejemplo para ver el sitio principal
pixel-emprende/index.html

# Ejemplo para ver una demo
pan-de-barrio/index.html
```

### Opción 2: Servidor Local
Si quieres probar con un servidor local (recomendado para formularios):

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Con PHP
php -S localhost:8000
```

Luego accede a: `http://localhost:8000/pixel-emprende/`

## 📝 Personalización

### Cambiar Números de WhatsApp
Busca y reemplaza en cada archivo `.js` y `.html`:
```javascript
// Ejemplo
https://wa.me/5491123456789
```

### Cambiar Colores
Edita las variables CSS en `:root` de cada archivo `style.css`:
```css
:root {
    --color-primary: #00d4ff;
    --color-primary-dark: #00a8cc;
    /* ... */
}
```

### Imágenes de Pexels
Todos los sitios cargan automáticamente imágenes de alta calidad desde la API de Pexels:

- **Pixel Emprende:** Imágenes de diseño web y tecnología
- **Pan de Barrio:** Imágenes de panadería y productos artesanales
- **NutriMariana:** Imágenes de nutrición y alimentación saludable
- **UrbanFit:** Imágenes de fitness y entrenamiento
- **Manitas Express:** Imágenes de reparaciones del hogar
- **Guardianes del Delta:** Imágenes de naturaleza y conservación
- **Luz Interior Yoga:** Imágenes de yoga, meditación y bienestar

Las imágenes se cargan automáticamente al abrir la página. Si la API no responde, se mostrarán degradados de colores como respaldo.

## 📱 Funcionalidades Especiales

### UrbanFit - Carrito de Compras
- Carrito funcional con LocalStorage
- Cantidad de items en tiempo real
- Modal de carrito
- Checkout por WhatsApp con resumen

### Tutos Demos - Formularios
- Integración directa con WhatsApp
- Mensajes pre-cargados según el contexto
- Validación de campos

### Guardianes del Delta - Donaciones
- Botones de monto preseleccionables
- Input de monto personalizado
- Redirección a WhatsApp con mensaje pre-armado

## 🎯 Metas de Diseño Cumplidas

- ✅ Diseños profesionales y modernos
- ✅ Estética clara con buen uso de espacios en blanco
- ✅ Tipografías elegantes y legibles
- ✅ Colores consistentes según rubro
- ✅ Animaciones sutiles sin exagerar
- ✅ Totalmente responsive
- ✅ SEO básico implementado
- ✅ Formularios funcionales
- ✅ CTA siempre visibles
- ✅ Código limpio y mantenible

## 📞 Números de Contacto (Placeholders)

Todos los números de WhatsApp son placeholders. Reemplázalos con los números reales:

- **Pixel Emprende:** +54 9 11 2345-6789
- **Pan de Barrio:** +54 9 11 1234-5678
- **NutriMariana:** +54 9 11 9876-5432
- **UrbanFit:** +54 9 11 8765-4321
- **Manitas Express:** +54 9 11 2345-6789
- **Guardianes del Delta:** +54 9 11 8765-4321

## 📄 Licencia

Este es un proyecto de demostración. Todas las imágenes son placeholders que deben ser reemplazadas por imágenes reales libres de derechos o propias.

---

**Desarrollado para:** Emprendimiento Páginas Web  
**Año:** 2024  
**Versión:** 1.0

