// Pexels API
const PEXELS_API = '33BWRuZiWhnIQWW2DidNd027hUTl1a2JuXge6o2xYfdOBiAiMzhExKuG';
function loadImg(query, selector, fallback) {
    document.querySelectorAll(selector).forEach(el => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {headers: {Authorization: PEXELS_API}})
        .then(r => r.json()).then(d => {
            if(d.photos?.length) {
                el.style.backgroundImage = `url(${d.photos[0].src.large})`;
                el.style.backgroundSize = 'cover';
                el.style.backgroundPosition = 'center';
            } else {
                el.style.background = fallback;
            }
        })
        .catch(() => {
            console.error('Error loading image for:', selector);
            el.style.background = fallback;
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const imageQuery = 'woman nutritionist doctor';
    loadImg(imageQuery, '#heroImage', 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)');
    // Usar la misma imagen del hero para el Sobre Mí
    loadImg(imageQuery, '#marianaImage', 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)');
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        const whatsappMessage = `Hola Mariana! Me llamo ${name}.\n\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje: ${message}`;
        const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        alert('¡Gracias por tu consulta! Redirigiendo a WhatsApp...');
        this.reset();
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(241, 248, 244, 0.98)';
    } else {
        navbar.style.background = 'rgba(241, 248, 244, 0.95)';
    }
});

