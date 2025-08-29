// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger when Locomotive Scroll updates
scroll.on('scroll', ScrollTrigger.update);

// Set up ScrollTrigger proxy
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

// Hero Section Animations
gsap.from('.hero-content h1', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});

gsap.from('.hero-content h2', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: 'power4.out'
});

gsap.from('.hero-content p', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.6,
    ease: 'power4.out'
});

gsap.from('.cta-buttons', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.9,
    ease: 'power4.out'
});

// Navbar Animation
gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
});

// About Section Animation
ScrollTrigger.batch('#about .about-text', {
    onEnter: (elements) => {
        gsap.from(elements, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out'
        });
    },
    start: 'top 80%'
});

// Skills Animation
ScrollTrigger.batch('.skill-item', {
    onEnter: (elements) => {
        gsap.from(elements, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power4.out'
        });
    },
    start: 'top 80%'
});

// Portfolio Items Animation
ScrollTrigger.batch('.portfolio-item', {
    onEnter: (elements) => {
        gsap.from(elements, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out'
        });
    },
    start: 'top 80%'
});

// Reviews Animation
ScrollTrigger.batch('.review-card', {
    onEnter: (elements) => {
        gsap.from(elements, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out'
        });
    },
    start: 'top 80%'
});

// Section Headings Animation
gsap.utils.toArray('section h2').forEach(heading => {
    gsap.from(heading, {
        scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });
});

// Magnetic effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(btn, {
            duration: 0.3,
            x: (x - rect.width / 2) / rect.width * 20,
            y: (y - rect.height / 2) / rect.height * 20,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            x: 0,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// Parallax effect for background elements
gsap.utils.toArray('[data-speed]').forEach(el => {
    gsap.to(el, {
        y: (i, target) => (ScrollTrigger.maxScroll(window) - target.offsetTop) * target.dataset.speed,
        ease: 'none',
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}); 