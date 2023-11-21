// Task 1
function calculateHeron() {
    var a = parseFloat(document.getElementById('heronA').value);
    var b = parseFloat(document.getElementById('heronB').value);
    var c = parseFloat(document.getElementById('heronC').value);

    var p = (a + b + c) / 2;

    var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    document.getElementById('heronResult').innerHTML = "Площа трикутника за формулою Герона: " + area;
}

// Task 2
function calculateAngle() {
    var a = parseFloat(document.getElementById('angleA').value);
    var b = parseFloat(document.getElementById('angleB').value);
    var angle = parseFloat(document.getElementById('angle').value);

    var angleInRadians = (angle * Math.PI) / 180;
    var area = (1 / 2) * a * b * Math.sin(angleInRadians);

    document.getElementById('angleResult').innerHTML = "Площа трикутника за двома сторонами і кутом: " + area;
}

// Task 3
function calculateSideAndHeight() {
    var side = parseFloat(document.getElementById('side').value);
    var height = parseFloat(document.getElementById('height').value);

    var area = (1 / 2) * side * height;

    document.getElementById('sideResult').innerHTML = "Площа трикутника за стороною і висотою: " + area;
}

// Task 4 
function calculateSidesAndRadius() {
    var a = parseFloat(document.getElementById('sidesA').value);
    var b = parseFloat(document.getElementById('sidesB').value);
    var c = parseFloat(document.getElementById('sidesC').value);
    var radius = parseFloat(document.getElementById('radius').value);

    var area = (a * b * c) / (4 * radius);

    document.getElementById('sidesResult').innerHTML = "Площа трикутника за трьома сторонами і радіусом описаного кола: " + area;
}
// Task 5
function isPalindrome(num) {
    var numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
}

// Функція для виклику при натисканні кнопки "Перевірити"
function checkPalindrome() {
    // Отримання значення числа з поля введення
    var inputNumber = document.getElementById("inputNumber").value;
    
    // Перевірка, чи введене значення є числом
    if (!isNaN(inputNumber)) {
        // Перевірка, чи число є паліндромом
        var result = isPalindrome(inputNumber) ? "Це число є паліндромом." : "Це число не є паліндромом.";
        // Вивід результату на сторінку
        document.getElementById("result").innerText = result;
    } else {
        // Якщо введено не число, вивести повідомлення про помилку
        document.getElementById("result").innerText = "Будь ласка, введіть числове значення.";
    }
}

function isAnagram(word1, word2) {
    // Перетворення слов у масиви літер та сортування їх
    var sortedWord1 = word1.toLowerCase().split('').sort().join('');
    var sortedWord2 = word2.toLowerCase().split('').sort().join('');
    
    // Порівняння відсортованих масивів
    return sortedWord1 === sortedWord2;
}

// Функція для виклику при натисканні кнопки "Перевірити"
function checkAnagram() {
    // Отримання значень двох слів з полів введення
    var inputWord1 = document.getElementById("inputWord1").value;
    var inputWord2 = document.getElementById("inputWord2").value;
    
    // Перевірка, чи введено два слова
    if (inputWord1 && inputWord2) {
        // Перевірка, чи слова є анаграмою
        var result = isAnagram(inputWord1, inputWord2) ? "Це анаграма." : "Це не анаграма.";
        // Вивід результату на сторінку
        document.getElementById("result2").innerText = result;
    } else {
        // Якщо не введено два слова, вивести повідомлення про помилку
        document.getElementById("result2").innerText = "Будь ласка, введіть обидва слова.";
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Функція для виклику при натисканні кнопки "Знайти число"
function getFibonacciNumber() {
    // Отримання порядкового номера з поля введення
    var index = parseInt(document.getElementById("fibIndex").value);

    // Перевірка, чи введено число
    if (!isNaN(index)) {
        // Знаходження числа в послідовності Фібоначчі та виведення результату на сторінку
        var result = fibonacci(index);
        document.getElementById("fibResult").innerText = "Число у послідовності Фібоначчі: " + result;
    } else {
        // Якщо введено не число, вивести повідомлення про помилку
        document.getElementById("fibResult").innerText = "Будь ласка, введіть числове значення.";
    }
}

function isFibonacciNumber(num) {
    var a = 0, b = 1;
    while (b < num) {
        var temp = a + b;
        a = b;
        b = temp;
    }
    return b === num;
}

// Функція для виклику при натисканні кнопки "Перевірити"
function checkFibonacci() {
    // Отримання значення числа з поля введення
    var checkNumber = parseInt(document.getElementById("checkFibNumber").value);

    // Перевірка, чи введено число
    if (!isNaN(checkNumber)) {
        // Перевірка, чи число належить послідовності Фібоначчі та виведення результату на сторінку
        var result = isFibonacciNumber(checkNumber) ? "Це число належить послідовності Фібоначчі." : "Це число не належить послідовності Фібоначчі.";
        document.getElementById("checkFibResult").innerText = result;
    } else {
        // Якщо введено не число, вивести повідомлення про помилку
        document.getElementById("checkFibResult").innerText = "Будь ласка, введіть числове значення.";
    }
}