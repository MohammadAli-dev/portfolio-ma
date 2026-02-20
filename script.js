// Add simple reveal animations and smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Highlight
    const navLinks = document.querySelectorAll('.nav-links a');
    const pageSections = document.querySelectorAll('section[id]');
    
    const navObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active to current
                const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, navObserverOptions);

    pageSections.forEach(section => {
        navObserver.observe(section);
    });
});
