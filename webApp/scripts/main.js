let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let nav = document.getElementsByClassName("navbar");
    let theme = document.getElementById("theme");
    let button = document.getElementById("img-button");

    if (theme.getAttribute("href") == "../assets/css/Light-mode.css") {
        nav.classlist.toogle("dark-nav")
        nav.classlist.toogle("bg-primary")
        theme.href = "../assets/css/Dark-mode.css";
        button.src = "../assets/img/sun-fill.svg"
    } else {
        nav.classlist.toogle("bg-primary")
        nav.classlist.toogle("dark-nav")
        theme.href = "../assets/css/Light-mode.css";
        button.src = "../assets/img/moon-stars-fill.svg"
    }
}

