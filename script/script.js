let hamburgerMenu = document.querySelector(".hamburger-menu");
let show_hide_menu = document.querySelector(".show-hide-menu");

let x = 0;
hamburgerMenu.addEventListener("click", function () {
    if (x == 0) {
        show_hide_menu.style.height = "271px";
        x = 1;

    }
    else {
        show_hide_menu.style.height = "0";
        x = 0;
    }
})
