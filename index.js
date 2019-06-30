let button = document.querySelector('.containerButton');
let screen = document.querySelector('#screen');
let resetScreen = false;
let mayCount = false;
let temp = '';
let operator = '';
button.addEventListener('click', function (e) {
    let buttonClick = e.target;
    let valueButton = buttonClick.innerText;
    if (valueButton == 'C') {
        screen.value = '';
    } else if (valueButton == '<') {
        screen.value = screen.value.slice(0, -1);
    } else if (valueButton == '=') {
        if (mayCount == true) {
            screen.value = eval(temp + operator + screen.value);
            mayCount = false;
        }
    }
    else if (buttonClick.classList.contains('operator')) {
        if (mayCount == true) {
            screen.value = eval(temp + operator + screen.value);
            mayCount = false;
        }
        temp = screen.value;
        operator = valueButton;
        resetScreen = true;
    }
    else {
        if (resetScreen == true) {
            screen.value = valueButton;
            resetScreen = false;
            mayCount = true;
        } else {
            screen.value = screen.value + valueButton;
        }
    }
});



