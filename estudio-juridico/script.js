// Pexels API
const PEXELS_API = '33BWRuZiWhnIQWW2DidNd027hUTl1a2JuXge6o2xYfdOBiAiMzhExKuG';
function loadImg(query, selector, fallback) {
    document.querySelectorAll(selector).forEach(el => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {headers: {Authorization: PEXELS_API}})
        .then(r => r.json()).then(d => {if(d.photos?.length) el.style.backgroundImage = `url(${d.photos[0].src.large})`; else el.style.background = fallback;})
        .catch(() => el.style.background = fallback);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    loadImg('justice scales law court', '#heroImage', 'linear-gradient(135deg, #660000 0%, #0D0D0D 100%)');
    
    loadImg('professional lawyer team meeting', '#teamImage', 'linear-gradient(135deg, #660000 0%, #990000 100%)');
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
        const service = formData.get('service');
        const message = formData.get('message');
        
        const whatsappMessage = `Hola! Me llamo ${name}.\n\nEmail: ${email}\nTeléfono: ${phone}\nÁrea de Consulta: ${service}\n\nMensaje: ${message}`;
        const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        alert('¡Gracias por tu consulta! Redirigiendo a WhatsApp...');
        this.reset();
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

