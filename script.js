function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    if (menu.classList.contains("open")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}
