"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const hamburgare = document.querySelector(".hamburger");
    const mobilMeny = document.querySelector(".mobile-menu");

    hamburgare.addEventListener("click", () => {
        mobilMeny.classList.toggle("open");
        hamburgare.classList.toggle("open");
    })
})