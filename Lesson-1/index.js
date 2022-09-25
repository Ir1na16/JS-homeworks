// 2 задание
let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;

a1 = 5 % 3;
a2 = 3 % 5;
a3 = 5 + '3';
a4 = '5' - 3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5 - 98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = +"123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0;

console.log(typeof a1, a1, typeof a2, a2, typeof a3, a3, typeof a4, a4, typeof a5, a5, typeof a6, a6, typeof a7, a7, typeof a8, a8, 
typeof a9, a9, typeof a10, a10, typeof a11, a11, typeof a12, a12, typeof a13, a13, typeof a14, a14, typeof a15, a15, typeof a16, a16, 
typeof a17, a17, typeof a18, a18);

//3 задание
let height_3 = 23, width = 10, SPryam;
SPryam = height_3 * width;
console.log('Площадь прямоугольника:', SPryam);

//4 задание
let height_4 = 10, d = a7, VCilindra;
VCilindra = 3.14 * (d / 2)**2 * height_4;
console.log('Объём цилиндра:', VCilindra); 

//5 задание
let r = 5, SKruga;
SKruga = 3.14 * r * r;
console.log('Площадь круга:', SKruga);

//6 задание
let a_6 = 5, b_6 = 7, h = 10, STrap;
STrap = ((a_6 + b_6) / 2) * h;
console.log('Площадь трапеции:', STrap);

//7 задание
let S = 2000000, p = 10, years = 5, Pereplata;
Pereplata = (S / years) * (p / 100) * years; 
console.log('Переплата по кредиту:', Pereplata);

//8 задание
let a_8 = 8, b_8 = 3, x;
x = (-a_8 + 2 * b_8 + 16) / 2;
console.log('x =', x);
//a + 2x -2b = 16
x = (a_8 - 15 * b_8) / (b_8 - 6);
console.log('x =', x);
//bx-6x=a-15b
x = 23780 / (1 + 2 + a_8 + b_8);
console.log('x =', x);