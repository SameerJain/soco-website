// Add mouse lightup effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
    // get box of card
        const rect = card.getBoundingClientRect();
    
    // get coordinates relative to card
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
// update
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});
