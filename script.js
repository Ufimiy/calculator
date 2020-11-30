"use strict";
let number_1 = document.querySelector(".number_1");
let number_2 = document.querySelector(".number_2");
let numbers = document.querySelector(".numbers");
let focus = false;
let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");
let clear = document.querySelector(".clear");
let otvet = document.querySelector(".otvet");
/* document.querySelector - найди в документе элемент селектором которого является ()) */
let sum = document.querySelector(".sum");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");

numbers.onclick = function (event) {
    alert(document.body.innerText);
    alert(document.body.innerHTML);
    let target = event.target;
    /* в переменной таргет хранится элемент на который нажали*/
    if (target.classList.contains("digit") == false) {
        return;
        /* target - это элемент на который нажали 
        classList - в списке его классов 
        contains - содержится ли 
        Если в списке классов элемента на который нажали не содержится класс диджит, то выход
        */
    }
    if (focus == true) {
        number_2.value += target.innerText;
        /* Если функция фокус истина, то текст пишется в инпут 2*/
    }
    if (focus == false) {
        number_1.value += target.innerText;
        /* Если функция фокус истина, то текст пишется в инпут 1 
        innerTex - текстовое содержимое кнопки */
    }
};

number_2.onclick = function () {
    focus = true;
    /* инпут 2 нажимается если фокус = истине */
};

number_1.onclick = function () {
    focus = false;
    /* инпут 1 нажимается если фокус = лжи */
};

arrow_left.onclick = function () {
    focus = false;
    /*  при нажатии на стрелку влево функция фокус = лжи */
};

arrow_right.onclick = function () {
    focus = true;
    /* при нажатии на стрелку вправо функция фокус = истине */
};

clear.onclick = function () {
    number_1.value = "";
    number_2.value = "";
    otvet.innerHTML = "";
    /* при нажатии на кнопку клир весь текст стирается */
};

sum.onclick = function () {
    if (check() == true) {
        otvet.innerHTML = parseFloat(number_1.value) + parseFloat(number_2.value);
        /* otvet.innerHTML = (number_1.value) + (number_2.value); */
    }
    /* parseInt - приобразует текст в целое число. parseFloat */
};

minus.onclick = function () {
    if (check() == true) {
        otvet.innerHTML = parseFloat(number_1.value) - parseFloat(number_2.value);
    }
    /* parseInt - приобразует текст в целое число. parseFloat */
};

multiply.onclick = function () {
    if (check() == true) {
        otvet.innerHTML = parseFloat(number_1.value) * parseFloat(number_2.value);
    }
    /* parseInt - приобразует текст в целое число. parseFloat */
};

divide.onclick = function () {
    if (check() == true) {
        otvet.innerHTML = parseFloat(number_1.value) / parseFloat(number_2.value);
    }
    /* parseInt - приобразует текст в целое число. parseFloat */
};

function check() {
    if ((number_1.value == "") || (number_2.value == "")) {
        alert("Ошибка");
        return false;
    } else {
        return true;
    }
    /* Функция чек
     Если в инпут 1 нету числа или в инпут 2 нету числа
    в alert пишется ошибка
    вернуть ложь иначе вернуть истину*/
}
