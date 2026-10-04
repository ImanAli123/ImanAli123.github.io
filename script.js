// Mobile menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#111827";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";

    }

});


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 850) {
            navLinks.style.display = "none";
        }

    });

});