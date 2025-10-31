// Pexels API Configuration
const PEXELS_API_KEY = '33BWRuZiWhnIQWW2DidNd027hUTl1a2JuXge6o2xYfdOBiAiMzhExKuG';

// Load Images from Pexels
function loadPexelsImage(query, elementSelector, fallbackGradient) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length === 0) return;

    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            'Authorization': PEXELS_API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.photos && data.photos.length > 0) {
            const imgUrl = data.photos[0].src.large;
            elements.forEach(element => {
                element.style.backgroundImage = `url(${imgUrl})`;
                element.style.backgroundSize = 'cover';
                element.style.backgroundPosition = 'center';
            });
        } else {
            elements.forEach(element => {
                element.style.background = fallbackGradient;
            });
        }
    })
    .catch(error => {
        console.log('Error loading Pexels image:', error);
        elements.forEach(element => {
            element.style.background = fallbackGradient;
        });
    });
}

// Load Images on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadPexelsImage('code programming javascript development', '#heroCodeBg', 'transparent');
    
    // Usar el logo oficial en lugar de imagen de Pexels
    const teamPhoto = document.getElementById('teamPhoto');
    if (teamPhoto) {
        teamPhoto.style.backgroundImage = 'url(logo-removebg-preview.png)';
        teamPhoto.style.backgroundSize = 'contain';
        teamPhoto.style.backgroundPosition = 'center';
        teamPhoto.style.backgroundRepeat = 'no-repeat';
        teamPhoto.style.backgroundColor = 'transparent';
    }
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
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `Hola! Me llamo ${name}.\n\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje: ${message}`;
        const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('¡Gracias por tu mensaje! Redirigiendo a WhatsApp...');
        
        // Reset form
        this.reset();
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(2, 64, 83, 0.85)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(2, 64, 83, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

