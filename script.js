// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".menu-item, .about-image, .about-text, .contact-text, .contact-details"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {
    observer.observe(element);
});


// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(45, 33, 27, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});