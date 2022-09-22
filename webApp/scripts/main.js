let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    let button = document.getElementById("img-button");

    if (theme.getAttribute("href") == "../assets/css/Light-mode.css") {
        theme.href = "../assets/css/Dark-mode.css";
        button.src = "../assets/img/sun-fill.svg"
    } else {
        theme.href = "../assets/css/Light-mode.css";
        button.src = "../assets/img/moon-stars-fill.svg"
    }
}


let like = document.getElementById("flavour");

like.onclick = function () {
    let imgl = document.getElementById("her-l");

    if (imgl.getAttribute("src") == "../assets/img/heart.svg") {
        imgl.src = "../assets/img/heart-fill.svg"
    } else {
        imgl.src = "../assets/img/heart.svg"
    }
}

