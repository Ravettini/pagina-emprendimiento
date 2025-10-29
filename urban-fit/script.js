// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    loadImg('fitness workout training', '.hero-overlay', 'linear-gradient(135deg, #ff4081 0%, #c2185b 100%)');
    loadImg('fitness team sportswear', '#teamImage', 'linear-gradient(135deg, #ff4081 0%, #c2185b 100%)');
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

// Add to Cart
function addToCart(id, name, price) {
    const item = { id, name, price, quantity: 1 };
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(item);
    }
    
    saveCart();
    updateCartUI();
    showCart();
}

// Remove from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>El carrito está vacío</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <p>Cantidad: ${item.quantity}</p>
                    </div>
                    <div>
                        <p>$${(item.price * item.quantity).toLocaleString()}</p>
                        <button onclick="removeFromCart(${item.id})" style="background: transparent; border: none; color: var(--color-primary); cursor: pointer; margin-top: 0.5rem;">Eliminar</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
    }
}

// Show Cart
function showCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('active');
    }
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('active');
    }
}

// Checkout
function checkout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const items = cart.map(item => `${item.name} x${item.quantity}`).join('\n');
    const message = `Hola! Quiero realizar esta compra:\n\n${items}\n\nTotal: $${total.toLocaleString()}`;
    const whatsappUrl = `https://wa.me/5491187654321?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeCart();
}

// Cart Button
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showCart();
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
        if (!this.classList.contains('cart-btn')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
    }
});

// Initialize Cart UI
updateCartUI();

