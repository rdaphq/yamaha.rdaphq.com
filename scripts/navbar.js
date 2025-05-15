const navbar = document.getElementById("navbar");

function onScroll() {
    if (window.scrollY > 300) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", onScroll);