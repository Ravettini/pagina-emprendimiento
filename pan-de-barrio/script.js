// Pexels API
const PEXELS_API = '33BWRuZiWhnIQWW2DidNd027hUTl1a2JuXge6o2xYfdOBiAiMzhExKuG';
function loadImg(query, selector, fallback) {
    document.querySelectorAll(selector).forEach(el => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {headers: {Authorization: PEXELS_API}})
        .then(r => r.json()).then(d => {if(d.photos?.length) el.style.backgroundImage = `url(${d.photos[0].src.large})`; else el.style.background = fallback;})
        .catch(() => el.style.background = fallback);
    });
}
document.addEventListener('DOMContentLoaded', () => loadImg('bakery bread artisan', '.hero-overlay', 'linear-gradient(135deg, #d4a574 0%, #8b6f47 100%)'));

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

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(250, 245, 239, 0.98)';
    } else {
        navbar.style.background = 'rgba(250, 245, 239, 0.95)';
    }
});

