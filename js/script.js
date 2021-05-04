console.log("Zapraszam Was do zobaczenia tego czego się już nieodzobaczy😎");

let button = document.querySelector(".button");
let element = document.querySelector(".element");
let newElement = document.querySelector(".newElement");
console.log("newElement");


button.addEventListener("click", () => {
    element.classList.toggle("newElement");
});

button.addEventListener("click", () => {
    if (button.innerText === "Zmień nastrój na ponury") {
        button.innerText = "Zmień nastrój na pogodny";
    } else {
        button.innerText = "Zmień nastrój na ponury";
    }
});