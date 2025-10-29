// Pexels API Configuration
const PEXELS_API_KEY = '33BWRuZiWhnIQWW2DidNd027hUTl1a2JuXge6o2xYfdOBiAiMzhExKuG';
const BASE_URL = 'https://api.pexels.com/v1/search';

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

// Load Images from Pexels
function loadPexelsImage(query, elementId, fallbackGradient) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(`${BASE_URL}?query=${query}&per_page=1`, {
        headers: {
            'Authorization': PEXELS_API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.photos && data.photos.length > 0) {
            const imgUrl = data.photos[0].src.large;
            element.style.backgroundImage = `url(${imgUrl})`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
        } else {
            element.style.background = fallbackGradient;
        }
    })
    .catch(error => {
        console.log('Error loading Pexels image:', error);
        element.style.background = fallbackGradient;
    });
}

// Load Images on Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Hero Image
    loadPexelsImage('yoga meditation wellness', 'heroImage', 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)');
    
    // Class Images
    loadPexelsImage('hatha yoga class', 'classImage1', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
    loadPexelsImage('vinyasa flow yoga', 'classImage2', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
    loadPexelsImage('yin yoga meditation', 'classImage3', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
    loadPexelsImage('meditation mindfulness', 'classImage4', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
    
    // Instructor Images
    loadPexelsImage('yoga instructor woman', 'instructorImage1', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
    loadPexelsImage('yoga instructor man', 'instructorImage2', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
    loadPexelsImage('meditation instructor', 'instructorImage3', 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)');
});

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

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

