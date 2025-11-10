const fadeSections = document.querySelectorAll('.fade-section, .email-item');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeSections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 150);
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
