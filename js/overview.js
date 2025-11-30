// Expandable card functionality for overview page
document.addEventListener('DOMContentLoaded', () => { // wait until html is ready or error ***REMEMBER FOR CHALLENGES & ETHICS PAGE***
    const expandButtons = document.querySelectorAll('.expand-btn');// select all expand buttons and store in variable
    
    expandButtons.forEach(button => { // for each of those
        button.addEventListener('click', () => { // add a click listener
            const card = button.closest('.benefit-card'); // find closest ben card
            card.classList.toggle('expanded'); // enable "expanded" class
            
            // Toggle button text
            if (card.classList.contains('expanded')) { // if expanded
                button.textContent = '−'; // change text of button to minus
            } else {
                button.textContent = '+'; // else keep plus
            }
        });
    });
});
