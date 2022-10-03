//1 задание
document.write('<br />1 задание<br />');
function func(a, b, c) {
    return (a - b) / c;
}
let x = func(4, 1, 3);
document.write(x);

//2 задание
document.write('<br /><br />2 задание<br />');
function exponentiation(x){
    let cube, square;
    cube = x * x * x;
    square = x * x;
    return cube + ', ' + square;
}

document.write('Куб и квадрат числа: ', exponentiation(2));

//3 задание
document.write('<br /><br />3 задание<br />');
let a, b;

function min(a, b){
    if(a < b) return a;
    else return b;
}

function max(a, b){
    if(a > b) return a;
    else return b;
}

document.write('Меньшее из чисел: ', min(1, 2), '<br />Большее из чисел: ', max(2,12));

//4 задание
document.write('<br /><br />4 задание<br />');
let i, Arr = [];

function createArr(Arr){
    let min = prompt('Минимальное значение элемента массива: ', '1');
    let max = prompt('Максимальное значение элемента массива: ', '10');
    for(i = Number(min); i <= max; i++){
        Arr.push(i);
    }
    return Arr;
}
createArr(Arr);

function showArr(Arr){
    document.write(Arr);
}
showArr(Arr);

//5 задание
document.write('<br /><br />5 задание<br />');

function isEven(x){
    if(x % 2 === 0) return true;
    else return false;
}

if(isEven(8)) document.write('Число чётное');
else document.write('Число нечётное');

//6 задание
document.write('<br /><br />6 задание<br />');
Arr = [1, 22, 2, 7, 5, 6, 47, 8, 9, 43, 50, 7];
function Even(Arr){
    for(i = 0; i < Arr.length; i++){
        if(!isEven(Arr[i])){
            Arr.splice(i, 1);
            i--;
        }
    }
    return Arr;
}

document.write('Новый массив: ', Even(Arr));

//9 задание
document.write('<br /><br />9 задание<br />')
Arr = [];

function Fibonacci(Arr){
    let a = Arr[0] = 0;
    let b = Arr[1] = 1;
    for(i = 2; i < 17; i++){
        Arr[i] = a + b;
        a = b;
        b = Arr[i];
    }
    return Arr;  
}

document.write('Массив, заполненный числами Фибоначчи: ', Fibonacci(Arr));

//10 задание
document.write('<br /><br />10 задание<br />')
x = 487265;

function Sum(x){
    x = String(x);
    let sum = 0;
    for(i = 0; i < x.length; i++){
        sum += Number(x[i]);
    }
    if(sum > 9) {
        return Sum(sum);
    }
    else return sum;
}

document.write('Конечная сумма: ', Sum(x));

//11 задание
document.write('<br /><br />11 задание<br />')
let mas11 = [3, 1, 34, 6, 8, 17, 2];
i = 0;

function Array(mas11){
    if(i < mas11.length){
        document.write(mas11[i], ' ');
        i++;
        return Array(mas11);
    }
}

Array(mas11);

//12 задание

function info(){
    let name = prompt('Введите имя', 'Иван');
    let surname = prompt('Введите фамилию', 'Иванов');
    let patronymic = prompt('Введите отчество', 'Иванович');
    let group = prompt('Введите номер группы студента', 'W4017');
    console.log('Домашняя работа: "Функции"\nВыполнил: студент гр.', group, '\n', surname, name, patronymic);
}

info();