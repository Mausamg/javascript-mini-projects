let boddy = document.querySelector("body");
let currentMode = "light";

let butt = document.querySelector("#butt");
butt.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        boddy.classList.add("light");
        boddy.classList.remove("dark");
    } else {
        currentMode = "light";
        boddy.classList.add("dark");
        boddy.classList.remove("light");
    }
})