function handClick() {
    alert("Welcome to WorkDask");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function openform() {
    window.open("https://forms.gle/58wUuZxzo9dfFJBK8")
}

function openWhatsApp() {
    window.open("https://wa.me/919076483170", "_blank");
}

function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav-links");

function toggleMenu() {
  if (window.innerWidth <= 768) {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  }
}

// Close menu when clicking a link (only on mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});
