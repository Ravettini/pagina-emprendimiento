const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const observed = document.querySelectorAll('section, .product-card, .about-values li, .contact-form');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

observed.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
});

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input[type="email"]');
    if (input && input.checkValidity()) {
        alert('Gracias por tu mensaje. Te contactaremos a la brevedad.');
        e.currentTarget.reset();
    }
});
