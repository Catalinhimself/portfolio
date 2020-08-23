var themechanger = document.getElementById("theme");
var body = document.getElementsByTagName("body")[0];
themechanger.addEventListener("click" , () => {
    body.classList.toggle("color-change-dark");
    body.classList.toggle("color-change-light");
})