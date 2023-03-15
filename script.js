var body = document.querySelector('body');
var colorPickerOne = document.querySelector('#color-picker-one');
var colorPickerTwo = document.querySelector('#color-picker-two');
var h3 = document.querySelector('h3');

//initial values
colorPickerOne.value = '#468c4f';
colorPickerTwo.value = '#ca3116'


function changeBackground(){
    body.style.background = `linear-gradient(90deg, ${colorPickerOne.value},${colorPickerTwo.value})`
    h3.textContent = `linear-gradient(90deg, ${colorPickerOne.value},${colorPickerTwo.value})`
}

colorPickerOne.addEventListener('input',changeBackground);
colorPickerTwo.addEventListener('input',changeBackground);