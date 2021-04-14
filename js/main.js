document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const toggleMenuButton = document.querySelector(".toggle_menu");

    toggleMenuButton.addEventListener("click", function() {
        nav.classList.toggle("active");
    })
})