let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    let button = document.getElementById("img-button")

    if (theme.getAttribute("href") == "assets/css/Light-mode.css") {
        theme.href = "assets/css/Dark-mode.css";
        button.src = "assets/img/sun-fill.svg"
    } else {
        theme.href = "assets/css/Light-mode.css";
        button.src = "assets/img/moon-stars-fill.svg"
    }
}
