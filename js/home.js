function toggleCard(cardHeader) {
    const card = cardHeader.parentElement;
    const content = card.querySelector('.card-content');

    if (card.classList.contains('active')) {
        // Recolher
        content.style.maxHeight = 0;
        content.style.padding = '0';
    } else {
        // Expandir
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '0';
    }
    
    card.classList.toggle('active');
}