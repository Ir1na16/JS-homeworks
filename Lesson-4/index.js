//1 задание
document.write('<br />1 задание <br />');
let mas1 = [1, 2, 3, 4, 5], i;

for(i = 0; i < mas1.length; i++){
    document.write(mas1[i], ' ');
}

//2 задание
document.write('<br /><br />2 задание <br />');
let mas2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(i = 0; i < mas2.length; i++){
    if(mas2[i] > -10 && mas2[i] < -3){
        document.write(mas2[i], ' ');
    }
}

//3 задание
document.write('<br /><br />3 задание <br />');
let mas3_1 = [], mas3_2 = [], result = 0;

for(i = 23; i <= 57; i++){
    mas3_1.push(i);
}

let x = 23;
while(x <= 57){
    mas3_2.push(x);
    x++;
}

document.write(mas3_1, '<br />', mas3_2);

for(i = 0; i < mas3_1.length; i++){
    result += mas3_1[i];
}

document.write('<br />Сумма элементов массива: ', result);

//4 задание
document.write('<br /><br />4 задание <br />');
let mas4 = [10, 20, 30, 50, 235, 3000];

for(i = 0; i < mas4.length; i++){
    if(String(mas4[i])[0] == 1 || String(mas4[i])[0] == 2 || String(mas4[i])[0] == 5){
        document.write(mas4[i], ' ');
    }
}

//5 задание
document.write('<br /><br />5 задание <br />');
let mas5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(i = 0; i < mas5.length; i++){
    if(mas5[i] == 'СБ' || mas5[i] == 'ВС'){
        document.write('<b>', mas5[i], '</b> ');
    } else document.write(mas5[i], ' ');
}
//6 задание
document.write('<br /><br />6 задание <br />');
let mas6 = [10, 20, 30, 40];

mas6.push(50);
document.write('Последний элемент: ', mas6[mas6.length - 1]);

//7 задание
document.write('<br /><br />7 задание <br />');
let mas7 = [], a;
i = 0;

do {
    a = prompt('Введите число');
    if(isFinite(a) && a != ''){
        mas7[i] = a;
        i++;
    }
} while (a != '');
console.log(mas7);
document.write('Полученный массив: ', mas7);
mas7.sort(function(a, b){
    return a - b;
});
document.write('<br />Отсортированный массив: ', mas7);

//8 задание
document.write('<br /><br />8 задание <br />');
let mas8 = [12, false, 'Текст', 4, 2, -5, 0];
i = mas8.length - 1;
while(i >= 0){
    document.write(mas8[i], ' ');
    i--;
}
document.write('<br />', mas8.reverse());

//9 задание
document.write('<br /><br />9 задание <br />');
let mas9 = [5, 9, 21, , , 9, 78, , , , 6];
num = 0;

for(i = 0; i < mas9.length; i++){
    if(typeof mas9[i] == 'undefined'){
        num++;
    }
}

document.write('Кол-во пустых элементов: ', num);

//10 задание
document.write('<br /><br />10 задание <br />');
let mas10 =  [1,8,0,13,76,8,7,0,22,0,2,3,2];

a = mas10.indexOf(0);
b = mas10.lastIndexOf(0);
sum = 0;

for(i = a; i < b; i++){
    sum += mas10[i];
}

document.write('Сумма между двумя нулями: ', sum);