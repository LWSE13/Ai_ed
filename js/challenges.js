document.addEventListener('DOMContentLoaded', () => { // when html is loaded
    const expandButtons = document.querySelectorAll('.accordion-icon'); // select all expand buttons and assign to variable "expandButtons"
    expandButtons.forEach(button => { // for each button in expandButtons
        button.addEventListener('click', () => { // add a click event listener
            const card = button.closest('.accordion-item'); // find closest accordion item and assign to variable "card"
            card.classList.toggle('active'); // toggle "active" class on card (accordian we just assigned)
            
            
            if (card.classList.contains('active')) { // if card has "active" class
                button.textContent = '−'; // change button text to minus
            } else {
                button.textContent = '+'; // change button text to plus
            }
        });
    });
});
