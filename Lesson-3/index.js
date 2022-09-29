//1 задание
let i;
document.write('1 задание <br />');

for (i = 1; i <= 50; i++) {
    document.write(i, ' ');
}

document.write('<br />');

for (i = 35; i >= 8; i--) {
    document.write(i, ' ');
}

document.write('<br />');

//2 задание
let x = 89;
document.write('<br /> 2 задание <br />');

while (x >= 11) {
    document.write(x, '<br />');
    x--;
}

//3 задание
let sum = 0;
document.write('<br /> 3 задание <br />');

for (i = 0; i <= 100; i++) {
    sum += i;
}

document.write('Сумма: ', sum, '<br />');

//4 задание
let j;
document.write('<br /> 4 задание <br />');

for (i = 0; i <= 5; i++) {
    sum = 0;
    for (j = 0; j <= i; j++) {
        sum += j;
    }
    document.write('В числе ', i, ' сумма составляет ', sum, '<br />');
}

//5 задание
x = 8;
document.write('<br /> 5 задание <br />');

while (x <= 56) {
    if (x % 2 == 0) {
        document.write(x, ' ');
    }
    x++;
}

document.write('<br />');

for (i = 8; i <= 56; i++) {
    if (i % 2 == 0) {
        document.write(i, ' ');
    }
}

document.write('<br />');

//6 задание
let pr;
document.write('<br /> 6 задание <br />');

for (i = 2; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        pr = i * j;
        document.write(i, ' * ', j, ' = ', pr, '<br />');
    }
    document.write('<br />');
}

//7 задание
let n = 1000, num = 0;
document.write('7 задание <br />');

while (n / 2 >= 50) {
    n = n / 2;
    num++;
}

document.write('Число: ', n, ' Кол-во итераций: ', num, '<br />');

//8 задание
let sr = 0;
sum = 0;
num = 0;
document.write('<br />8 задание <br />');

do {
    str = prompt('Введите число');
    sum += Number(str);
    num++;
} while (str != '' && str != 0);

sr = sum / (num - 1);
document.write('Общая сумма: ', sum, ' Среднее арифметическое: ', sr, '<br />');

//9 задание
str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let min = Number(str[0]), max = Number(str[0]);
document.write('<br />9 задание <br />');

x = 0;
for(i = 0; i < str.length - 1; i++){
    if(str[i] == ' ') continue;
    if(str[i + 1] == ' '){
        x = Number(str[i]);
    }
    else {
        x = Number(str[i] + str[i + 1]);
        i++;
    }
    if(x < min){
        min = x;
    }
    if(x > max){
        max = x;
    }
}

document.write('Самое маленькое число: ', min, '<br />Самое большое число: ', max, '<br />');

//10 задание
n = 5687, sum = 0;
document.write('<br />10 задание <br />');

n = String(n);
for(i = 0; i < n.length; i++){
    document.write(n[i], ' ');
    sum += Number(n[i]);
}

document.write('<br />В числе n ', n.length, ' цифры<br />Сумма цифр числа n: ', sum);