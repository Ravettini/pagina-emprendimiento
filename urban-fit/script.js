// Pexels API Configuration
const PEXELS_API_KEY = '33BWRuZiWhnIQWW2DidNd027hUTl1a2JuXge6o2xYfdOBiAiMzhExKuG';

// Load Images from Pexels
function loadPexelsImage(query, elementId, fallbackGradient) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            'Authorization': PEXELS_API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.photos && data.photos.length > 0) {
            const imgUrl = data.photos[0].src.large;
            element.style.backgroundImage = `url(${imgUrl})`;
        } else {
            element.style.background = fallbackGradient;
        }
    })
    .catch(error => {
        console.log('Error loading Pexels image:', error);
        element.style.background = fallbackGradient;
    });
}

// Load avatar with specific query
function loadPexelsAvatar(query, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            'Authorization': PEXELS_API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.photos && data.photos.length > 0) {
            const imgUrl = data.photos[0].src.medium;
            element.style.backgroundImage = `url(${imgUrl})`;
        }
    })
    .catch(error => {
        console.log('Error loading Pexels avatar:', error);
    });
}

// Load Images on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadPexelsImage('gym workout fitness training', 'heroBg', 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)');
    loadPexelsImage('gym equipment fitness', 'aboutImg', 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)');
    loadPexelsImage('gym weights fitness', 'facility1', 'linear-gradient(135deg, #666 0%, #1a1a1a 100%)');
    loadPexelsImage('gym functional training', 'facility2', 'linear-gradient(135deg, #666 0%, #1a1a1a 100%)');
    loadPexelsImage('gym cardio machines', 'facility3', 'linear-gradient(135deg, #666 0%, #1a1a1a 100%)');
    loadPexelsImage('gym locker room', 'facility4', 'linear-gradient(135deg, #666 0%, #1a1a1a 100%)');
    
    // Load avatars for testimonials - specific by gender
    loadPexelsAvatar('man fitness portrait', 'avatar1'); // Martín
    loadPexelsAvatar('woman fitness portrait', 'avatar2'); // Laura
    loadPexelsAvatar('man fitness portrait', 'avatar3'); // Diego
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
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

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for Anchor Links
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
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `Hola! Soy ${name}.\n\nTeléfono: ${phone}\nEmail: ${email}\n\nConsulta: ${message}`;
        const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('¡Gracias por tu consulta! Redirigiendo a WhatsApp...');
        
        // Reset form
        this.reset();
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 1)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 107, 53, 0.2)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = 'none';
    }
});
