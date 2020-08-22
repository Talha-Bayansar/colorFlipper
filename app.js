//constants and variables
const clickMeBtn = document.querySelector(".change-btn");
const colorSpan = document.querySelector(".background-color span");
const array = ["rgba(133,122,200)", "#f15025", "red", "green"];

//functions
const changeColor = (e) => {
    colorSpan.innerText = randomElement();
    document.body.style.backgroundColor = colorSpan.innerText;
};

const randomElement = (e) => {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
};

//eventlisteners
clickMeBtn.addEventListener("click", changeColor);