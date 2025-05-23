document.addEventListener('DOMContentLoaded', () => {
    const heroes = document.querySelectorAll('.hero');
    let lastScrollY = window.scrollY;

    // Parallax effect
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        heroes.forEach(hero => {
            const rect = hero.getBoundingClientRect();
            const speed = 0.5;
            
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const yOffset = (currentScrollY - lastScrollY) * speed;
                const currentBackground = window.getComputedStyle(hero).backgroundPosition.split(' ');
                const currentY = parseFloat(currentBackground[1]);
                
                hero.style.backgroundPosition = `center ${currentY + yOffset}px`;
            }
        });

        lastScrollY = currentScrollY;
    });

    // Smooth scroll effect for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});