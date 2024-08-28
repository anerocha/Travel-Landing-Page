// Animações ao rolar a página
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.offer-card, .welcome-card, .destination-card');
    const scrollPos = window.scrollY + window.innerHeight;
    
    elements.forEach(element => {
        if (element.getBoundingClientRect().top + window.scrollY < scrollPos) {
            element.classList.add('fade-in');
        }
    });
});

// Eventos de hover adicionais
const cards = document.querySelectorAll('.offer-card, .welcome-card, .destination-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-effect');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-effect');
    });
});
