document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.accordion-icon');
    expandButtons.forEach(button => {
        button.addEventListener('click', () => { 
            const card = button.closest('.accordion-item'); 
            card.classList.toggle('active'); 
            
            
            if (card.classList.contains('active')) {
                button.textContent = '−';
            } else {
                button.textContent = '+'; 
            }
        });
    });
});
