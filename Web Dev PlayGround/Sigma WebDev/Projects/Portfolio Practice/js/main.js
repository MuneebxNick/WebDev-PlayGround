// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const backToTop = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const body = document.body;
const navLinksItems = document.querySelectorAll('.nav-links a');

// Theme Toggle
function initTheme() {
    // Always set the light theme by default
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Show moon icon for light theme

    // Check for saved theme only after setting default, to allow user override
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Show sun icon for dark theme
    }
}

// Theme toggle functionality
function updateThemeIcon(theme) {
    // Use the globally defined themeToggle DOM element, avoiding redundant DOM queries.
    themeToggle.innerHTML = theme === 'light'
        ? '<i class="moon-icon fas fa-moon"></i>'
        : '<i class="sun-icon fas fa-sun"></i>';
}

// Initialize theme (the `initTheme` function is defined outside this selection).
// As per the instructions, `initTheme` is expected to set the default theme to 'light'
// and ignore device preferences, only respecting a user's saved preference if it's 'dark'.
initTheme();

// After `initTheme` has run and determined the final theme (which could be 'light' by default
// or 'dark' if a preference was saved), explicitly call `updateThemeIcon`.
// This ensures that the theme toggle icon accurately reflects the current theme state
// using the `updateThemeIcon` helper function, making it the single source of truth for icon display.
const currentInitialTheme = document.documentElement.getAttribute('data-theme');
updateThemeIcon(currentInitialTheme);

// Attach event listener for theme toggle functionality.
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the user's preference
    updateThemeIcon(newTheme); // Update the icon to match the new theme
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            console.log('Hamburger clicked'); // Debug line
        });
    }

    // Close menu when clicking links
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

// Typing Effect
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.textContent = this.txt;

        let typeSpeed = 50;

        if (this.isDeleting) {
            typeSpeed /= 1;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1000;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
function initTypeWriter() {
    const txtElement = document.querySelector('.typed-text');
    const words = [
        'Front-End Web Developer',
        'Programmer',
        'Web Designer',
        'Poet',
        'Teacher'

    ];
    const wait = 500;
    new TypeWriter(txtElement, words, wait);
}

// Scroll Functions
function handleScroll() {
    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // Active nav link
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Reveal sections
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

// Smooth Scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to Top
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    alert(data.errors.map(error => error.message).join(", "));
                } else {
                    alert('Oops! There was an error sending your message.');
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Oops! There was an error sending your message.');
        }
    });
}

// Event Listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    initTheme();
    initTypeWriter();
    handleScroll();
});

// Optional: Stop animation when tab is not visible
document.addEventListener('visibilitychange', () => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.animationPlayState = document.hidden ? 'paused' : 'running';
    }
});

// Update active link on scroll
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Call updateActiveLink on scroll
window.addEventListener('scroll', updateActiveLink);

