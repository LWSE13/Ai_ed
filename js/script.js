// inject header and footer components from html files
async function injectComponent(componentPath, containerId) {
    const element = document.getElementById(containerId);
    const response = await fetch(componentPath);
    const text = await response.text();
    element.innerHTML = text;
}

// Load header first, then hamburger
injectComponent("components/header.html", "header-placeholder")
    .then(() => { //.then after header loaded. Prevents breakage
        // Wait 10ms for DOM to update  to prevent breaking nav
        setTimeout(initHamburger, 10);
    });

injectComponent("components/footer.html", "footer-placeholder");

// Hamburger menu toggle
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav'); 

    if (!hamburger || !nav) {
        console.warn("Hamburger or nav not found.");
        return;
    }

    // OPEN/CLOSE on click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // CLOSE when clicking a navigation link
    document.querySelectorAll('.navigation_link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}
