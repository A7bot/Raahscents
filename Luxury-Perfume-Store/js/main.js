// ========================================
// RAAH SCENTS - UPDATED JAVASCRIPT
// Mobile & Desktop Detection + Menu Toggle
// ========================================

// ── DEVICE DETECTION ──
const DeviceDetect = {
  isMobile() {
    return window.innerWidth <= 768;
  },

  isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  },

  isDesktop() {
    return window.innerWidth > 1024;
  },

  getDevice() {
    if (this.isMobile()) return 'mobile';
    if (this.isTablet()) return 'tablet';
    return 'desktop';
  }
};

// ── MOBILE MENU TOGGLE ──
let mobileMenuOpen = false;

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
      menu.classList.add('active');
      toggle.classList.add('active');
      toggle.textContent = '✕';
    } else {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.textContent = '☰';
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOpen = false;
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.textContent = '☰';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      if (mobileMenuOpen) {
        mobileMenuOpen = false;
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.textContent = '☰';
      }
    }
  });
}

// ── RESIZE LISTENER ──
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu on resize to desktop
    if (!DeviceDetect.isMobile() && mobileMenuOpen) {
      mobileMenuOpen = false;
      const menu = document.querySelector('.nav-menu');
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (menu) menu.classList.remove('active');
      if (toggle) {
        toggle.classList.remove('active');
        toggle.textContent = '☰';
      }
    }
  }, 250);
});

// ── MODAL FUNCTIONALITY ──
function openModal(name, price, ml = '') {
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalPrice').textContent = price;

  const mlText = ml ? ` (${ml})` : '';
  const msg = encodeURIComponent(
    `Hello RAAH SCENTS! 👋\n\nI'd like to order:\n\n🌟 *${name}${mlText}*\n💰 Price: ${price}\n\nPlease confirm availability and delivery details. Thank you!`
  );

  document.getElementById('modalWhatsApp').href = `https://wa.me/2349066444873?text=${msg}`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (
    !e ||
    e.target === document.getElementById('modalOverlay') ||
    (e.currentTarget && e.currentTarget.classList.contains('modal-close'))
  ) {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ── SCROLL REVEAL ANIMATION ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ── FLOATING PARTICLES ──
function createParticles(containerId = 'particles', count = 30) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Reduce particles on mobile
  const particleCount = DeviceDetect.isMobile() ? count / 2 : count;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = Math.random() * 3 + 1 + 'px';
    p.style.animationDuration = Math.random() * 10 + 8 + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(p);
  }
}

// ── ACTIVE NAV LINK ──
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage || (href === '/' && !currentPage)) {
      link.classList.add('active');
    }
  });
}

// ── FORMAT CURRENCY ──
function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
}

// ── SEARCH & FILTER ──
function filterProducts(products, filters = {}) {
  return products.filter((product) => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (filters.minPrice && product.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && product.price > filters.maxPrice) {
      return false;
    }

    // Search query
    if (filters.search) {
      const query = filters.search.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    return true;
  });
}

// ── SORT PRODUCTS ──
function sortProducts(products, sortBy = 'name') {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'newest':
      return sorted.sort((a, b) => {
        const aBadge = a.badge === 'New' ? 1 : 0;
        const bBadge = b.badge === 'New' ? 1 : 0;
        return bBadge - aBadge;
      });
    default:
      return sorted;
  }
}

// ── RATING DISPLAY ──
function renderStars(rating = 0, count = 0) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '★';
    } else if (i === fullStars && hasHalfStar) {
      stars += '☆';
    } else {
      stars += '☆';
    }
  }

  return `<span class="stars">${stars}</span> ${count > 0 ? `(${count})` : ''}`;
}

// ── LOCAL STORAGE HELPERS ──
const Storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(`raah_${key}`, JSON.stringify(value));
    } catch (e) {
      console.log('Storage full or disabled');
    }
  },
  get: (key) => {
    try {
      const item = localStorage.getItem(`raah_${key}`);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      return null;
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(`raah_${key}`);
    } catch (e) {
      console.log('Cannot remove from storage');
    }
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.log('Cannot clear storage');
    }
  },
};

// ── CART FUNCTIONALITY ──
const Cart = {
  add: (product, size = '50ml') => {
    let cart = Cart.get();
    const item = {
      ...product,
      selectedSize: size,
      addedAt: new Date().toISOString(),
    };
    cart.push(item);
    Storage.set('cart', cart);
    return cart;
  },

  get: () => Storage.get('cart') || [],

  remove: (productId) => {
    let cart = Cart.get();
    cart = cart.filter((item) => item.id !== productId);
    Storage.set('cart', cart);
    return cart;
  },

  clear: () => {
    Storage.remove('cart');
  },

  getTotal: () => {
    const cart = Cart.get();
    return cart.reduce((total, item) => total + item.price, 0);
  },
};

// ── FAVORITES FUNCTIONALITY ──
const Favorites = {
  add: (productId) => {
    let favorites = Favorites.get();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      Storage.set('favorites', favorites);
    }
    return favorites;
  },

  get: () => Storage.get('favorites') || [],

  remove: (productId) => {
    let favorites = Favorites.get();
    favorites = favorites.filter((id) => id !== productId);
    Storage.set('favorites', favorites);
    return favorites;
  },

  has: (productId) => Favorites.get().includes(productId),
};

// ── SMOOTH SCROLL ANCHOR ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      // Close mobile menu if open
      if (mobileMenuOpen) {
        mobileMenuOpen = false;
        const menu = document.querySelector('.nav-menu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        if (menu) menu.classList.remove('active');
        if (toggle) {
          toggle.classList.remove('active');
          toggle.textContent = '☰';
        }
      }
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── DEBOUNCE HELPER ──
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ── THROTTLE HELPER ──
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ── PRINT DEVICE INFO (For Debugging) ──
function debugDeviceInfo() {
  console.log('Device Info:', {
    device: DeviceDetect.getDevice(),
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: DeviceDetect.isMobile(),
    isTablet: DeviceDetect.isTablet(),
    isDesktop: DeviceDetect.isDesktop(),
    userAgent: navigator.userAgent
  });
}

// ── INITIALIZE ON LOAD ──
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 RAAH SCENTS Website Loaded');
  console.log('Device:', DeviceDetect.getDevice());
  
  setActiveNavLink();
  initMobileMenu();
  
  // Log device info in console for debugging
  debugDeviceInfo();
});

// ── LOG WHEN DEVICE CHANGES ──
window.addEventListener('orientationchange', () => {
  console.log('Orientation changed to:', DeviceDetect.getDevice());
  // Close menu if opened
  if (mobileMenuOpen) {
    mobileMenuOpen = false;
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (menu) menu.classList.remove('active');
    if (toggle) {
      toggle.classList.remove('active');
      toggle.textContent = '☰';
    }
  }
});
