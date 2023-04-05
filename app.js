let box = document.querySelector(".container");
let btn = document.querySelector(".btn");
let colorName = document.querySelector(".colorName")

const colors = ["green", "red", "#00BFFF", "#f15025","black","pink","#2F4F4F","#48D1CC","#6B8E23"
,"seagreen","DarkOrange","Gold","rgb(238, 130, 238)","#9370DB","SlateBlue","Chartreuse"];

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}