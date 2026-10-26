document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    }

    // Newsletter validation demo
    const forms = document.querySelectorAll('form[novalidate]');
    forms.forEach(form => {
        // Skip auth forms (login and register) as they manage their own validation lifecycle
        if (form.id === 'registerForm' || form.id === 'loginForm') {
            return;
        }
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
            } else {
                // If it's the newsletter form
                if(form.id === 'footerNewsletterForm') {
                    document.getElementById('footerNewsletterError').classList.add('hidden');
                    document.getElementById('footerNewsletterSuccess').classList.remove('hidden');
                    form.reset();
                }
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Professional Animation & Motion: Initialize AOS
    if (typeof AOS !== 'undefined') {
        // Tag main section containers, cards, pricing plans, and testimonials with fade-up
        document.querySelectorAll('section:not(.hero-section) .container, .card, .pricing-card, .service-card, .testimonial-card, .blog-card').forEach((el) => {
            if (!el.hasAttribute('data-aos') && !el.closest('header') && !el.closest('footer')) {
                el.setAttribute('data-aos', 'fade-up');
            }
        });

        // Stagger grid columns inside rows
        document.querySelectorAll('.row.g-4, .row.g-5, .row').forEach(row => {
            const cols = row.querySelectorAll('.col-md-3, .col-md-4, .col-md-6, .col-lg-4, .col-lg-3');
            cols.forEach((col, idx) => {
                if (!col.hasAttribute('data-aos')) {
                    col.setAttribute('data-aos', 'fade-up');
                    col.setAttribute('data-aos-delay', `${((idx % 4) + 1) * 100}`);
                }
            });
        });

        AOS.init({
            duration: 750,
            easing: 'ease-out-cubic',
            once: true,
            offset: 40
        });
    }

});


// Active Navigation Link Highlighter
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    
    // Select all nav links and dropdown items
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Exclude # links (like dropdown toggles)
        if (linkPath && linkPath !== '#' && linkPath === currentLocation) {
            link.classList.add('active-nav-link');
            
            // If it\'s a dropdown item, also highlight its parent dropdown toggle
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const toggle = parentDropdown.querySelector('.dropdown-toggle');
                if (toggle) {
                    toggle.classList.add('active-nav-link');
                }
            }
        }
    });
});
