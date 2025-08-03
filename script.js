// Variables globales
let scene, camera, renderer, geometry, material, mesh;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeThreeJS();
    initializeAnimations();
    initializeForm();
    initializeModal();
    initializeMobileMenu();
    initializeSmoothScrolling();
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', onDocumentMouseMove);
});

// Sistema de temas
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Aplicar tema guardado
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Actualizar animación 3D para el nuevo tema
        updateThreeJSTheme();
    });
}

// Inicialización de Three.js para animación 3D
function initializeThreeJS() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    
    // Configuración de la escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Configuración del renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Crear geometría compleja (esfera con subdivisiones)
    geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Material con efecto de wireframe
    material = new THREE.MeshBasicMaterial({
        color: getComputedStyle(document.documentElement).getPropertyValue('--text-primary'),
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    camera.position.z = 5;
    
    // Iniciar animación
    animate();
}

// Función de animación de Three.js
function animate() {
    requestAnimationFrame(animate);
    
    // Rotación suave
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    
    // Interacción con el mouse
    mesh.rotation.x += (mouseY - mesh.rotation.x) * 0.001;
    mesh.rotation.y += (mouseX - mesh.rotation.y) * 0.001;
    
    renderer.render(scene, camera);
}

// Actualizar tema de Three.js
function updateThreeJSTheme() {
    if (material) {
        material.color.setStyle(getComputedStyle(document.documentElement).getPropertyValue('--text-primary'));
    }
}

// Event listeners para Three.js
function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.01;
    mouseY = (event.clientY - windowHalfY) * 0.01;
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Sistema de animaciones al hacer scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                
                // Animación especial para títulos de sección
                if (entry.target.classList.contains('section-title')) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
                if (entry.target.classList.contains('section-subtitle')) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards 0.2s';
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos con data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Manejo del scroll
function handleScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    // Efecto de transparencia en el header
    if (scrollTop > 100) {
        header.style.background = 'var(--overlay-color)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--overlay-color)';
        header.style.backdropFilter = 'blur(10px)';
    }
    
    // Parallax suave para elementos
    const parallaxElements = document.querySelectorAll('.service-card, .portfolio-item');
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrollTop * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
}

// Inicialización del formulario
function initializeForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envío
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simular delay de envío
        setTimeout(() => {
            // Mostrar mensaje de éxito
            successMessage.classList.add('show');
            
            // Resetear formulario
            form.reset();
            
            // Resetear botón
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
            
        }, 2000);
    });
}

// Sistema de modal para casos de estudio
function initializeModal() {
    const modal = document.getElementById('caseStudyModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    
    // Cerrar modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Función para abrir casos de estudio
function openCaseStudy(project) {
    const modal = document.getElementById('caseStudyModal');
    const modalBody = document.getElementById('modalBody');
    
    const caseStudies = {
        ecommerce: {
            title: 'E-commerce Premium',
            client: 'TechStore',
            services: ['Diseño UI/UX', 'Desarrollo Web', 'Optimización SEO'],
            challenge: 'Crear una plataforma de e-commerce moderna y escalable que ofrezca una experiencia de compra excepcional.',
            solution: 'Desarrollamos una interfaz intuitiva con diseño centrado en el usuario, implementando las mejores prácticas de UX y tecnologías modernas.',
            process: [
                'Investigación de usuarios y análisis de competencia',
                'Wireframing y prototipado interactivo',
                'Diseño de interfaz y guías de estilo',
                'Desarrollo frontend con React y backend con Node.js',
                'Pruebas de usabilidad y optimización'
            ],
            results: [
                'Aumento del 150% en conversiones',
                'Reducción del 40% en tiempo de carga',
                'Mejora del 85% en satisfacción del usuario'
            ],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
        },
        fintech: {
            title: 'App Fintech',
            client: 'FinanceApp',
            services: ['Diseño UI/UX', 'Desarrollo Móvil', 'Integración API'],
            challenge: 'Diseñar una aplicación móvil que simplifique la gestión financiera personal con un enfoque en seguridad y usabilidad.',
            solution: 'Creamos una interfaz minimalista y segura que permite a los usuarios gestionar sus finanzas de manera intuitiva y eficiente.',
            process: [
                'Investigación de usuarios y análisis de necesidades',
                'Diseño de wireframes y prototipos',
                'Desarrollo de la interfaz con React Native',
                'Integración con APIs bancarias seguras',
                'Pruebas de usabilidad y seguridad'
            ],
            results: [
                'Más de 50,000 descargas en el primer mes',
                'Calificación de 4.8/5 en App Store',
                'Reducción del 60% en tiempo de configuración'
            ],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
        },
        dashboard: {
            title: 'Dashboard Corporativo',
            client: 'DataCorp',
            services: ['Diseño UI/UX', 'Desarrollo Web', 'Visualización de Datos'],
            challenge: 'Crear un dashboard ejecutivo que presente datos complejos de manera clara y accionable para la toma de decisiones.',
            solution: 'Desarrollamos una interfaz de datos intuitiva con visualizaciones interactivas y reportes personalizables.',
            process: [
                'Análisis de requerimientos y datos',
                'Diseño de arquitectura de información',
                'Creación de componentes de visualización',
                'Desarrollo con React y D3.js',
                'Implementación de filtros y reportes'
            ],
            results: [
                'Reducción del 70% en tiempo de análisis',
                'Aumento del 200% en adopción de datos',
                'Mejora del 90% en satisfacción de usuarios'
            ],
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop'
        }
    };
    
    const study = caseStudies[project];
    if (!study) return;
    
    modalBody.innerHTML = `
        <div class="case-study">
            <div class="case-study-header">
                <h2>${study.title}</h2>
                <p class="case-study-client">Cliente: ${study.client}</p>
            </div>
            
            <div class="case-study-image">
                <img src="${study.image}" alt="${study.title}">
            </div>
            
            <div class="case-study-services">
                <h3>Servicios</h3>
                <ul>
                    ${study.services.map(service => `<li>${service}</li>`).join('')}
                </ul>
            </div>
            
            <div class="case-study-content">
                <div class="case-study-section">
                    <h3>El Desafío</h3>
                    <p>${study.challenge}</p>
                </div>
                
                <div class="case-study-section">
                    <h3>La Solución</h3>
                    <p>${study.solution}</p>
                </div>
                
                <div class="case-study-section">
                    <h3>El Proceso</h3>
                    <ol>
                        ${study.process.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="case-study-section">
                    <h3>Resultados</h3>
                    <ul>
                        ${study.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Menú móvil
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav');
    
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// Scroll suave para enlaces internos
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efectos de hover mejorados
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de partículas en hover para botones
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Efecto de hover para tarjetas de servicios
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Efecto de ripple para botones
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Optimización de rendimiento
let ticking = false;

function updateOnScroll() {
    handleScroll();
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

// Throttle para eventos de scroll
window.addEventListener('scroll', requestTick);

// Detectar preferencias del usuario
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Si el usuario prefiere tema oscuro, aplicarlo automáticamente
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Mejoras de accesibilidad
document.addEventListener('keydown', function(e) {
    // Navegación con teclado
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console log para desarrollo
console.log('🚀 DMB Website loaded successfully!');
console.log('💡 Tip: Try switching between light and dark themes');
console.log('🎨 Tip: Hover over the 3D sphere to interact with it'); 