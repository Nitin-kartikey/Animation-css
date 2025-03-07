document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
    });
});
