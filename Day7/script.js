document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const notifications = document.querySelectorAll(".notification");
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");
    const headerTitle = document.querySelector(".header-title");
    const menuIcon = document.querySelector(".menu-icon");
    notifications.forEach((notification, index) => {
        setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateY(0)";
    }, index * 1000);
});
menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("open");
});
searchIcon.addEventListener("click", function(event) {
    event.stopPropagation();
    if (searchBar.style.width === "180px") {
        closeSearchBar();
    } else {
        openSearchBar();
    }
});
searchIcon.addEventListener("click", () => {
    const currentWidth = window.getComputedStyle(searchBar).width;
    if (parseInt(currentWidth) > 0) {
        searchBar.style.width = "0";
        searchBar.style.opacity = "0";
        headerTitle.style.opacity = "1";
        menuIcon.style.opacity = "1";
    } else {
        searchBar.style.width = "150px";
        searchBar.style.opacity = "1";
        headerTitle.style.opacity = "0";
        menuIcon.style.opacity = "0";
    }
});
});
document.addEventListener("click", function(event) {
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        closeSearchBar();
    }
});
function openSearchBar() {
    searchBar.style.width = "180px";
    searchBar.style.opacity = "1";
    headerTitle.style.opacity = "0";
}
function closeSearchBar() {
    searchBar.style.width = "0";
    searchBar.style.opacity = "0";
    headerTitle.style.opacity = "1";
}