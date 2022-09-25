//1 задание
let name, age, city, phone, email, company, message1;
name = prompt('Ваше имя', 'Анна');
age = prompt('Возраст', '25');
city = prompt('Город проживания', 'Минск');
phone = prompt('Телефон', '+375298379245');
email = prompt('Почта', 'anna25@gmail.com');
company = prompt('Компания', '"Беларусбанк"'); 
document.write('Меня зовут ', name,'. Мне ', age, ' лет. Я проживаю в городе ', city, ' и работаю в компании ', company, 
'. Мои контактные данные: ', phone, ' ', email); 

//2 задание
 let year = 2022 - age, message2;
 document.write('<br />', name, ' родился(лась) в ', year, ' году');

//3 задание
let stroka = '123123';

if(stroka[0]+stroka[1]+stroka[2]==stroka[3]+stroka[4]+stroka[5]){
    console.log('Да');
}
else console.log('Нет');

//4 задание
let a = 1;
if(a > 0){
    console.log('Верно'); 
} 
else console.log('Неверно');

a = 0;
if(a > 0){
    console.log('Верно'); 
} 
else console.log('Неверно');

a = -3;
if(a > 0){
    console.log('Верно'); 
} 
else console.log('Неверно');

//5 задание
let b = 2, sum, razn, pr, del;
a = 10;

sum = a + b;
razn = a - b;
pr = a * b;
del = a / b;
console.log(sum, razn, pr, del);
if(sum > 1){
    sum = sum * sum;
}

//6 задание
if(a > 2 && a < 11 || b >= 6 && b < 14){
    console.log('Верно'); 
}
else console.log('Неверно');

//7 задание
let n = 52;

if(n >= 0 && n <= 15){
    console.log('Это число попадает в 1 четверть');
}
if(n >= 16 && n <= 30){
    console.log('Это число попадает в 2 четверть');
}
if(n >= 31 && n <= 45){
    console.log('Это число попадает в 3 четверть');
}
if(n >= 46 && n < 60){
    console.log('Это число попадает в 4 четверть');
}

//8 задание
let day = 26;

if(day >= 1 && day <= 10){
    console.log('Это число попадает в 1 декаду');
}
if(day >= 11 && day <= 20){
    console.log('Это число попадает в 2 декаду');
}
if(day >= 21 && day <= 31){
    console.log('Это число попадает в 3 декаду');
}

//9 задание
let days = 3;
if(days < 365){
    console.log('Меньше года');
}
else{
    let years = days / 365;
    console.log('Года:', years);
}
if(days < 31){
    console.log('Меньше месяца');
}
else{
    let months = days / 31;
    console.log('Месяцы:', months);
}
if(days < 7){
    console.log('Меньше недели');
}
else{
    let weeks = days / 7;
    console.log('Недели:', weeks);
}
hours = days * 24;
console.log('Часы:', hours);
minuts = days * 1440;
console.log('Минуты:', minuts);
seconds = days * 86400;
console.log('Секунды:', seconds);

//10 задание
day = 136;

switch (true) {
    case day > 0 && day < 60 || day > 334 && day < 366:
        console.log('Зима');
        if(day < 32){
            console.log('Январь');
        }
        else if(day > 31 && day < 60){
            console.log('Февраль');
        }
        else{
            console.log('Декабрь');
        }
        break;
    case day > 59 && day < 152:
        console.log('Весна');
        if(day < 91){
            console.log('Март');
        }
        else if(day > 90 && day < 121){
            console.log('Апрель');
        }
        else{
            console.log('Май');
        }
        break;
    case day > 151 && day < 244:
        console.log('Лето');
        if(day < 182){
            console.log('Июнь');
        }
        else if(day > 181 && day < 213){
            console.log('Июль');
        }
        else{
            console.log('Август');
        }
        break;
    case day > 243 && day < 335:
        console.log('Осень');
        if(day < 274){
            console.log('Сентябрь');
        }
        else if(day > 273 && day < 305){
            console.log('Октябрь');
        }
        else{
            console.log('Ноябрь');
        }
        break;
}