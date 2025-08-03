# 🚀 DMB - Página Web Profesional

Una página web moderna y elegante para DMB, empresa especializada en diseño UI/UX y desarrollo web. El sitio presenta un diseño monocromático minimalista con animaciones 3D interactivas y un sistema de temas claro/oscuro.

![DMB Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![GitHub](https://img.shields.io/badge/GitHub-DeevTy/DMB-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características Destacadas

### 🎨 Diseño y UX
- **Diseño monocromático**: Esquema de colores blanco y negro con transiciones suaves
- **Sistema de temas**: Cambio dinámico entre modo claro y oscuro
- **Diseño responsivo**: Optimizado para todos los dispositivos
- **Tipografía elegante**: Playfair Display para títulos, Inter para texto
- **Animaciones sutiles**: Transiciones fluidas y efectos hover

### 🌟 Animaciones 3D
- **Esfera interactiva**: Objeto 3D en la sección hero que responde al movimiento del mouse
- **Three.js**: Implementado con WebGL para rendimiento óptimo
- **Efectos de parallax**: Elementos que se mueven a diferentes velocidades al hacer scroll
- **Animaciones de entrada**: Elementos que aparecen con efectos fade-in al hacer scroll

### 🔧 Funcionalidades
- **Navegación suave**: Scroll automático a secciones
- **Formulario de contacto**: Con validación y mensaje de confirmación
- **Casos de estudio**: Modal interactivo con información detallada de proyectos
- **Menú móvil**: Navegación adaptada para dispositivos móviles
- **Optimización SEO**: Estructura semántica y metadatos

## 🚀 Instalación y Uso

### Opción 1: Clonar el repositorio
```bash
git clone https://github.com/DeevTy/DMB.git
cd DMB
```

### Opción 2: Descargar ZIP
1. Haz clic en el botón "Code" → "Download ZIP"
2. Extrae el archivo en tu carpeta de proyectos
3. Abre `index.html` en tu navegador

### Opción 3: Servidor local (Recomendado)
```bash
# Instalar dependencias (opcional)
npm install

# Iniciar servidor de desarrollo
npm start
# o
npm run dev
```

## 📁 Estructura del Proyecto

```
DMB/
├── index.html          # Página principal
├── styles.css          # Estilos CSS con variables y temas
├── script.js           # JavaScript con animaciones y funcionalidades
├── package.json        # Configuración del proyecto
├── README.md           # Documentación del proyecto
├── .gitignore          # Archivos ignorados por Git
└── upload-to-github.bat # Script para subir a GitHub
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

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #000000;
    /* ... más variables */
}
```

### Modificar Contenido
- **Texto**: Edita directamente en `index.html`
- **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
- **Casos de estudio**: Modifica el objeto `caseStudies` en `script.js`

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

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usar, modificar y distribuir libremente.

## 📞 Soporte

Para preguntas o soporte técnico:
- **Email**: contacto@dmb.com
- **Documentación**: Este README
- **Issues**: [Crear issue en GitHub](https://github.com/DeevTy/DMB/issues)

## 🌟 Agradecimientos

- [Three.js](https://threejs.org/) - Biblioteca 3D
- [Google Fonts](https://fonts.google.com/) - Tipografías
- [Unsplash](https://unsplash.com/) - Imágenes de stock
- [GitHub](https://github.com/) - Hosting del código

---

**DMB** - Diseño UI/UX y Desarrollo Web
*Construyendo el futuro digital, un píxel a la vez.*

---

⭐ **Si te gusta este proyecto, ¡dale una estrella en GitHub!** 