// Expandable card functionality for overview page
document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.benefit-card');
            card.classList.toggle('expanded');
            
            // Toggle button text
            if (card.classList.contains('expanded')) {
                button.textContent = '−';
            } else {
                button.textContent = '+';
            }
        });
    });
});
