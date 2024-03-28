let btn = document.querySelector("#mood");
let body = document.querySelector("body");
let mode = "light"; // corrected the initial mode to "light"

btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        body.classList.remove("light"); 
        body.classList.add("dark");
    } else {
        mode = "light";
        body.classList.remove("dark"); 
        body.classList.add("light");
    }
    console.log(mode);
});