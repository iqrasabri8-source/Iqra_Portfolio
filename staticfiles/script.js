// Sticky Navbar on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Active Navbar Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .service-card, .portfolio-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Initial check
reveal();

// Skill Bar Animation on Scroll
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress-line span');
    
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 100) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
}

window.addEventListener('scroll', animateSkills);
animateSkills();

// Professional Skills Circle Animation
function animateCircles() {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        const circleTop = circle.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (circleTop < windowHeight - 100) {
            const percent = circle.getAttribute('data-percent');
            circle.style.background = `conic-gradient(var(--secondary-color) ${percent * 3.6}deg, var(--bg-dark2) 0deg)`;
        }
    });
}

window.addEventListener('scroll', animateCircles);
animateCircles();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (navbar && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

// Form Submission (Prevent default for demo)


// Add hover effect to project cards
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add CSS for scroll animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    .service-card, .portfolio-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .service-card.active, .portfolio-card.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card:nth-child(1) { transition-delay: 0.1s; }
    .service-card:nth-child(2) { transition-delay: 0.2s; }
    .service-card:nth-child(3) { transition-delay: 0.3s; }
    
    .portfolio-card:nth-child(1) { transition-delay: 0.1s; }
    .portfolio-card:nth-child(2) { transition-delay: 0.2s; }
    .portfolio-card:nth-child(3) { transition-delay: 0.3s; }
    .portfolio-card:nth-child(4) { transition-delay: 0.4s; }
    .portfolio-card:nth-child(5) { transition-delay: 0.5s; }
    .portfolio-card:nth-child(6) { transition-delay: 0.6s; }
    
    .header.scroll-down {
        transform: translateY(-100%);
    }
    
    .header.scroll-up {
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

console.log('Portfolio script loaded successfully!');

