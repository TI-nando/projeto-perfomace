// Academia Performance - Main JavaScript

// DOM Elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".nav-link");
const heroContent = document.querySelector(".hero-content");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Add JS-enabled class to body
  document.body.classList.add("js-enabled");

  // Initialize mobile menu
  initializeMobileMenu();

  // Initialize smooth scrolling
  initializeSmoothScroll();

  // Initialize scroll animations
  initializeScrollAnimations();

  // Initialize lazy loading for images
  initializeLazyLoading();

  // Initialize tilt effect on cards
  initializeTiltEffect();

  // Initialize form handling
  initializeFormHandling();

  // Initialize performance optimizations
  initializePerformanceOptimizations();
}

// Mobile Menu Functionality
function initializeMobileMenu() {
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleMobileMenu();
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = mobileMenu.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        closeMobileMenu();
      });
    });
  }
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains("open");

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("open");
  mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
  mobileMenuBtn.setAttribute("aria-expanded", "true");

  // Change hamburger to X
  const svg = mobileMenuBtn.querySelector("svg");
  if (svg) {
    svg.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
  }
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileMenu.style.maxHeight = "0";
  mobileMenu.classList.add("hidden");
  mobileMenuBtn.setAttribute("aria-expanded", "false");

  // Change X to hamburger
  const svg = mobileMenuBtn.querySelector("svg");
  if (svg) {
    svg.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
  }
}

// Smooth Scrolling Navigation
function initializeSmoothScroll() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only handle anchor links
      if (href.startsWith("#")) {
        e.preventDefault();
        smoothScrollTo(href);

        // Close mobile menu if open
        if (mobileMenu.classList.contains("open")) {
          closeMobileMenu();
        }
      }
    });
  });
}

function smoothScrollTo(target) {
  const targetElement = document.querySelector(target);

  if (targetElement) {
    const headerOffset = 80; // Account for fixed header
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update URL without jumping
    history.pushState(null, null, target);
  }
}

// Scroll Animations
function initializeScrollAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".animate-on-scroll");
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // Add parallax effect to hero section
  addParallaxEffect();
}

function addParallaxEffect() {
  const heroSection = document.querySelector("#home");

  if (heroSection) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Lazy Loading for Images
function initializeLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("image-loading");
          imageObserver.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll("img[data-src]");
    images.forEach((img) => imageObserver.observe(img));
  }
}

// Form Handling (for future contact forms)
function initializeFormHandling() {
  // Add any form validation or submission handling here
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Handle form submission
      console.log("Form submitted:", form);
    });
  });
}

// Performance Optimizations
function initializePerformanceOptimizations() {
  // Preload critical images
  preloadCriticalImages();

  // Optimize scroll performance
  optimizeScrollPerformance();

  // Add loading states
  addLoadingStates();
}

function preloadCriticalImages() {
  const criticalImages = [
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20gym%20interior%20with%20weight%20equipment%20and%20training%20area%2C%20dark%20lighting%2C%20professional%20fitness%20environment%2C%20high%20quality%20photography&image_size=landscape_16_9",
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20weight%20training%20gym%20equipment%2C%20barbells%20and%20dumbbells%2C%20professional%20fitness%20environment%2C%20dark%20lighting%2C%20high%20quality%20photography&image_size=landscape_4_3",
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Brazilian%20jiu-jitsu%20training%20mat%2C%20professional%20dojo%20environment%2C%20dark%20lighting%2C%20martial%20arts%20atmosphere%2C%20high%20quality%20photography&image_size=landscape_4_3",
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function optimizeScrollPerformance() {
  let ticking = false;

  function updateScrollEffects() {
    // Update any scroll-based effects here
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
}

function addLoadingStates() {
  // Add loading class to buttons on click
  const buttons = document.querySelectorAll('a[href*="wa.me"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("loading");

      // Remove loading class after delay
      setTimeout(() => {
        this.classList.remove("loading");
      }, 1000);
    });
  });
}

// Utility Functions
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

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Analytics and Tracking (placeholder)
function trackEvent(eventName, properties = {}) {
  // Placeholder for analytics tracking
  console.log("Event tracked:", eventName, properties);
}

// Error Handling
window.addEventListener("error", function (e) {
  console.error("JavaScript Error:", e.error);
  // Could send to error tracking service
});

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("ServiceWorker registration successful");
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed");
      });
  });
}

// Export functions for testing (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeApp,
    toggleMobileMenu,
    smoothScrollTo,
    debounce,
    throttle,
  };
}

// Tilt effect for cards (interactive hover)
function initializeTiltEffect() {
  const tiltCards = document.querySelectorAll(".tilt-card");
  const maxTilt = 8; // degrees

  // Only enable on precise pointers (desktop/laptop)
  const enableTilt = window.matchMedia("(pointer: fine)").matches;
  if (!enableTilt) return;

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}
