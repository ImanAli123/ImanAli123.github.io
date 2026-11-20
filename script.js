// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuBtn.textContent = open ? "\u2715" : "\u2630";
}

menuBtn.addEventListener("click", () =>
    setMenu(!navLinks.classList.contains("open")));

// Close when a link is clicked
navLinks.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => setMenu(false)));

// Close with Escape
document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
});

// Close when clicking outside the header
document.addEventListener("click", e => {
    if (!e.target.closest("header")) setMenu(false);
});

// Reset when the window grows past the mobile breakpoint
window.addEventListener("resize", () => {
    if (window.innerWidth > 960) setMenu(false);
});