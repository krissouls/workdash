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