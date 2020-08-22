//constants and variables
const clickMeBtn = document.querySelector(".change-btn");
const colorSpan = document.querySelector(".background-color span");
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//functions
const changeColor = (e) => {
    colorSpan.innerText = getColor();
    document.body.style.backgroundColor = colorSpan.innerText;
};

const getColor = (e) => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * array.length);
        hexCode += array[randomNumber];
    };
    return hexCode;
};

//eventlisteners
clickMeBtn.addEventListener("click", changeColor);