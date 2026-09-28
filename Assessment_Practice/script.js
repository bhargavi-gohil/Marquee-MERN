// form validation

const students = [];
const form = document.querySelector("#studentForm");


document.querySelector("darkMode").addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");

    this.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode" : "Dark Mode";
});