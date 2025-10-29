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
    loadImg('forest nature conservation', '.hero-overlay', 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)');
    loadImg('delta wetland nature', '#deltaImage', 'linear-gradient(135deg, #66bb6a 0%, #2e7d32 100%)');
    loadImg('volunteer community help', '#donationImage', 'linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)');
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

// Donation Amount Buttons
const amountBtns = document.querySelectorAll('.amount-btn');
let selectedAmount = 0;

amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        amountBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedAmount = btn.dataset.amount;
    });
});

// Donate Function
function donate() {
    const customAmount = document.getElementById('customAmount').value;
    const amount = selectedAmount || customAmount || '1000';
    const message = `Hola! Quiero realizar una donación de $${parseInt(amount).toLocaleString()} para Guardianes del Delta.`;
    const whatsappUrl = `https://wa.me/5491187654321?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
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
        navbar.style.background = 'rgba(241, 248, 244, 0.98)';
    } else {
        navbar.style.background = 'rgba(241, 248, 244, 0.95)';
    }
});

