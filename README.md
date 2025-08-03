# DMB - Página Web Profesional

Una página web moderna y elegante para DMB, empresa especializada en diseño UI/UX y desarrollo web. El sitio presenta un diseño monocromático minimalista con animaciones 3D interactivas y un sistema de temas claro/oscuro.

## 🚀 Características

### Diseño y UX
- **Diseño monocromático**: Esquema de colores blanco y negro con transiciones suaves
- **Sistema de temas**: Cambio dinámico entre modo claro y oscuro
- **Diseño responsivo**: Optimizado para todos los dispositivos
- **Tipografía elegante**: Playfair Display para títulos, Inter para texto
- **Animaciones sutiles**: Transiciones fluidas y efectos hover

### Animaciones 3D
- **Esfera interactiva**: Objeto 3D en la sección hero que responde al movimiento del mouse
- **Three.js**: Implementado con WebGL para rendimiento óptimo
- **Efectos de parallax**: Elementos que se mueven a diferentes velocidades al hacer scroll
- **Animaciones de entrada**: Elementos que aparecen con efectos fade-in al hacer scroll

### Funcionalidades
- **Navegación suave**: Scroll automático a secciones
- **Formulario de contacto**: Con validación y mensaje de confirmación
- **Casos de estudio**: Modal interactivo con información detallada de proyectos
- **Menú móvil**: Navegación adaptada para dispositivos móviles
- **Optimización SEO**: Estructura semántica y metadatos

### Accesibilidad
- **Navegación por teclado**: Soporte completo para usuarios que navegan con teclado
- **Contraste alto**: Compatible con preferencias de alto contraste
- **Movimiento reducido**: Respeta las preferencias de movimiento del usuario
- **ARIA labels**: Etiquetas de accesibilidad para lectores de pantalla

## 📁 Estructura del Proyecto

```
Dmb/
├── index.html          # Página principal
├── styles.css          # Estilos CSS con variables y temas
├── script.js           # JavaScript con animaciones y funcionalidades
└── README.md           # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Funcionalidades interactivas
- **Three.js**: Animaciones 3D y WebGL
- **Google Fonts**: Playfair Display e Inter

## 🎨 Secciones del Sitio

### 1. Header
- Logo de DMB
- Navegación principal
- Botón de cambio de tema
- Menú móvil responsive

### 2. Hero Section
- Título impactante con animación
- Descripción de servicios
- Botones de call-to-action
- Esfera 3D interactiva de fondo

### 3. Servicios
- Diseño UI/UX
- Desarrollo Web
- Características detalladas de cada servicio

### 4. Portafolio
- Proyectos destacados
- Casos de estudio interactivos
- Imágenes de alta calidad
- Información detallada de cada proyecto

### 5. Contacto
- Formulario de contacto funcional
- Información de contacto
- Mensaje de confirmación

### 6. Footer
- Logo y descripción
- Enlaces a redes sociales
- Información de copyright

## 🚀 Cómo Usar

### Instalación Local
1. Clona o descarga los archivos del proyecto
2. Abre `index.html` en tu navegador web
3. ¡Disfruta de la experiencia!

### Personalización

#### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #000000;
    /* ... más variables */
}
```

#### Modificar Contenido
- **Texto**: Edita directamente en `index.html`
- **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
- **Casos de estudio**: Modifica el objeto `caseStudies` en `script.js`

#### Añadir Nuevas Secciones
1. Agrega el HTML en `index.html`
2. Añade los estilos correspondientes en `styles.css`
3. Implementa funcionalidades JavaScript si es necesario

## 🎯 Características Técnicas

### Rendimiento
- **Lazy loading**: Imágenes que se cargan solo cuando son visibles
- **Optimización de animaciones**: Uso de `requestAnimationFrame`
- **Throttling**: Eventos de scroll optimizados
- **Compresión de assets**: Imágenes optimizadas

### Compatibilidad
- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos móviles**: iOS Safari, Chrome Mobile
- **Accesibilidad**: WCAG 2.1 AA compliant

### SEO
- **Metadatos**: Título, descripción y palabras clave
- **Estructura semántica**: Uso correcto de elementos HTML5
- **Open Graph**: Metadatos para redes sociales
- **Sitemap**: Estructura clara para motores de búsqueda

## 🔧 Funcionalidades Avanzadas

### Sistema de Temas
```javascript
// Cambiar tema programáticamente
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
```

### Animaciones 3D
```javascript
// Personalizar la esfera 3D
geometry = new THREE.SphereGeometry(2, 64, 64);
material = new THREE.MeshBasicMaterial({
    color: '#000000',
    wireframe: true,
    opacity: 0.3
});
```

### Formulario de Contacto
```javascript
// Manejar envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Lógica de envío personalizada
});
```

## 📱 Responsive Design

### Breakpoints
- **Móvil**: < 480px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Móviles
- Menú hamburguesa
- Botones de tamaño táctil (44px mínimo)
- Imágenes optimizadas
- Scroll suave

## 🎨 Personalización de Estilos

### Variables CSS Principales
```css
:root {
    --bg-primary: #ffffff;        /* Fondo principal */
    --text-primary: #000000;      /* Texto principal */
    --accent-color: #000000;      /* Color de acento */
    --border-color: #e0e0e0;      /* Color de bordes */
    --shadow-light: rgba(0,0,0,0.1); /* Sombra ligera */
}
```

### Animaciones Personalizables
```css
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 🔍 Optimización

### Performance
- **Minificación**: CSS y JS optimizados
- **Compresión**: Imágenes comprimidas
- **Caching**: Headers de caché apropiados
- **CDN**: Three.js cargado desde CDN

### SEO
- **Meta tags**: Completos y optimizados
- **Schema markup**: Estructura de datos
- **Sitemap**: Generación automática
- **Analytics**: Preparado para Google Analytics

## 🚀 Despliegue

### Opciones de Hosting
- **Netlify**: Despliegue automático desde Git
- **Vercel**: Optimizado para sitios estáticos
- **GitHub Pages**: Hosting gratuito
- **Servidor propio**: Compatible con cualquier servidor web

### Configuración Recomendada
1. Sube los archivos a tu servidor
2. Configura HTTPS
3. Añade Google Analytics
4. Configura formulario de contacto (Formspree, Netlify Forms)

## 📞 Soporte

Para preguntas o soporte técnico:
- **Email**: contacto@dmb.com
- **Documentación**: Este README
- **Issues**: Crear issue en el repositorio

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usar, modificar y distribuir libremente.

---

**DMB** - Diseño UI/UX y Desarrollo Web
*Construyendo el futuro digital, un píxel a la vez.* 