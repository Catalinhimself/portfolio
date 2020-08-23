var themechanger = document.getElementById("theme");
var body = document.getElementsByTagName("body")[0];
themechanger.addEventListener("click" , () => {
    body.classList.toggle("color-change-dark");
    bodyt.classList.toggle("color-change-light");
})