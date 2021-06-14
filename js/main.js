function menu() {
    var menu = document.getElementById("menu");
    var hamburger = document.getElementById("menu-toggle-button");
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        hamburger.style.opacity = "0.5";
    } else {
        menu.style.display = 'none';
        hamburger.style.opacity = "1";
    }
}