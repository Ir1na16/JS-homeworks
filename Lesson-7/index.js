function Contact(fio, age, phone, email){
    this.fio = fio;
    this.age = age;
    this.phone = phone;
    this.email = email;

    this.showContact = function(){
        document.write('ФИО: ', this.fio);
        document.write('<br />Возраст: ', this.age);
        this.checkAge();
        document.write('<br />Телефон: ', this.phone);
        document.write('<br />Почта: ', this.email);
    }

    this.checkAge = function(){
        if(!(Number(age) % 1 == 0)){
            document.write('<br />Некорректный ввод возраста!');
        }
        else if(Number(age) < 18){
            document.write('<br />Меньше 18!');
        }
    }
}
let contacts = [];
contacts[0] = new Contact('Иванов Иван Иванович', '32', '+375298973546', 'ivanov@gmail.com');
contacts[1] = new Contact('Сергеев Дмитрий Олегович', '20', '+375448976787', 'sergeev22@gmail.com');
contacts[2] = new Contact('Рагунович Александра Витальевна', '19', '+375339878877', 'rag_al@gmail.com');

for(let i = 0; i < contacts.length; i++){
    contacts[i].showContact();
    document.write('<br /><br />');
}