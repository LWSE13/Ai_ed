// inject header and footer components from html files
async function injectComponent(componentPath, containerId) { // async function(a function that does not block other code whilst waiting)
    const element = document.getElementById(containerId); // get element by id and take a id as parameter
    const response = await fetch(componentPath); // wait for fetch to get component path before proceeding
    const text = await response.text(); // wait for response to be converted to text before proceeding
    element.innerHTML = text; // set inner html of element to text we fetched
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
    const hamburger = document.getElementById('hamburger'); // grabs hamburger by id and grabs all nav elements
    const nav = document.querySelector('nav'); 

    if (!hamburger || !nav) { // error handling (warns if either hamburger or nav not found)
        console.warn("Hamburger or nav not found.");
        return; // return early to avoid errors
    }

    // OPEN/CLOSE on click
    hamburger.addEventListener('click', () => { // clickable event listener
        hamburger.classList.toggle('active'); // that activates hamburger class
        nav.classList.toggle('active'); // and activates nav class
    });

    // CLOSE when clicking a navigation link
    document.querySelectorAll('.navigation_link').forEach(link => { // for each navigation link
        link.addEventListener('click', () => { // add click listener
            hamburger.classList.remove('active'); // remove active class from hamburger
            nav.classList.remove('active'); // remove active class from nav (prevents menu staying open after clicking link)
        });
    });
}
