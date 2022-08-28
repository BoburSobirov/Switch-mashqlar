// //1//
let days = prompt("type the number of the day ");

switch (days){
    case '1':
    alert('bugun Dushanba');
    break;

    case '2':
        alert('bugun Seshanba');
        break;

    case '3':
        alert('bugun Chorshanba');
        break;
    
    case '4':
        alert('bugun Payshanba');
        break;

    case '5':
        alert('bugun Juma')
        break;

    case '6':
        alert('bugun Shanba');
        break;

    case '7':
        alert('bugun Yakshanba');

};

//2//
let scores = prompt("balingizni kiriting.");

switch(scores){
    case '1':
        alert("yomon");
        break;

    case '2':
        alert("qoniqarsiz");
        break;

    case '3':
        alert("qoniqarli");
        break;

    case '4':
        alert("yaxshi");
        break;

    case '5':
        alert("a'lo");
        break;
};

//3//
let monthName = prompt("Tug'ilgan oyingiz raqamini kiriting");

switch(monthName){
    case '1':
        alert('Yanvar');
        break;

    case '2':
        alert('Fevral');
        break;

    case '3':
        alert('Mart');
        break;

    case '4':
        alert('Aprel');
        break;

    case '5':
        alert('May');
        break;

    case '6':
        alert('Iyun');
        break;

    case '7':
        alert('Iyul');
        break;

    case '8':
        alert('Avgust');
        break;

    case '9':
        alert('Sentabr');
        break;


    case '10':
        alert('Oktabr');
        break;

    case '11':
        alert('Noyabr');
        break;

    case '12':
        alert('Dekabr');
        break;
};
if (monthName >12){
    alert("error number")
};


//4//
let monthNames = prompt("Hohlagan oyingiz raqamini kiriting");
let day;

switch (monthNames){
    case '1':
        alert('Yanvar');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '2':
        alert('Fevral');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("28 kun");
        break;

    case '3':
        alert('Mart');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '4':
            alert('Aprel');
            day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
            alert("31 kun");
            break;

    case '5':
        alert('May');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '6':
        alert('Iyun');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '7':
        alert('Iyul');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("30 kun");
        break;

    case '8':
        alert('Avgust');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '9':
        alert('Sentabr');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '10':
        alert('Oktabr');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("30 kun");
        break;

    
    case '11':
        alert('Noyabr');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

    case '12':
        alert('Dekabr');
        day = prompt("necha kun borligini bilish uchun enter raqamini bosing");
        alert("31 kun");
        break;

};


//5//????


//6//
let stipendiya = prompt("Baholaringizni 1 dan 5 gacha kiriting");


switch(stipendiya){
    case '1':
        alert("Siz qayta topshirishingiz kerak");
        break;

    case '2':
        alert("Siz  qayta topshirsangiz pul olasiz");
        break;

    case '3':
        alert("Sizga 300 ming som stipendiya beriladi");
        break;

    case '4':
        case 4:
        alert("Sizga 400 ming som stipendiya beriladi");
        break;

    case '5':
        alert("Sizga 500 ming som stipendiya beriladi");
        break;
};
