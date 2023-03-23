var body = document.querySelector('body');
var colorPickerOne = document.querySelector('#color-picker-one');
var colorPickerTwo = document.querySelector('#color-picker-two');
var randomColorBtn = document.querySelector('button')
var h3 = document.querySelector('h3');

//initial values
colorPickerOne.value = '#468c4f';
colorPickerTwo.value = '#ca3116'


function changeBackground(){
    body.style.background = `linear-gradient(90deg, ${colorPickerOne.value},${colorPickerTwo.value})`
    h3.textContent = `linear-gradient(90deg, ${colorPickerOne.value},${colorPickerTwo.value})`
}

function generateRandomColors(){
    var red1 = Math.floor(Math.random() * 256);
    var green1 = Math.floor(Math.random() * 256);
    var blue1 = Math.floor(Math.random() * 256);

    return `rgb(${red1},${green1},${blue1})`
}

function changeToRandomBackground(){
    var color1 = generateRandomColors();
    var color2 = generateRandomColors();
    body.style.background = `linear-gradient(90deg, ${color1},${color2})`
    h3.textContent = body.style.background + ';'
}

colorPickerOne.addEventListener('input',changeBackground);
colorPickerTwo.addEventListener('input',changeBackground);
randomColorBtn.addEventListener('click',changeToRandomBackground)