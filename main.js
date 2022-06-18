

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMoviesDB.count = +prompt("How manu movies have you watch?");
    
        while(personalMoviesDB.count == "" || personalMoviesDB.count == null || personalMoviesDB.count == isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt("How manu movies have you watch?");
        }
    },
    rememberMyFilms: function () {
        for(let i = 0; i < 2; i++){
            let lastFilm = prompt("one of the last watched movies").trim(),
                filmRating = prompt("how much will you appreciate it");
            if(lastFilm.length < 50 && lastFilm !== null && lastFilm !== "" && filmRating !== null && filmRating !== ""){
                personalMoviesDB.movies[lastFilm] = filmRating;
            }else{
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if(personalMoviesDB.count <= 10) {
            console.log("ok");
        }else if(personalMoviesDB.count > 10 && personalMoviesDB.count <= 30){
            console.log("good");
        }else if(personalMoviesDB.count >= 30) {
            console.log("well");
        }else{
            console.log("error");
        }
    },
    showMyDB: function (checkProperty){
        if(!checkProperty) {
            console.log(personalMoviesDB);
        }
    },
    writeYourGenres: function () {
        for(let i = 0; i < 3; i++){
            personalMoviesDB.genres[i] = prompt(`Уour favorite genre, number ${i+1} ?`);
            if( personalMoviesDB.genres[i] === null || personalMoviesDB.genres[i].trim() === ""){
                i--;
            }
        }
        personalMoviesDB.genres.forEach((item, i) =>{
            console.log(`Любимий жанр №${++i} - ето ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if(personalMoviesDB.privat){
            personalMoviesDB.privat = false;
        }else{
            personalMoviesDB.privat = true;
        }
    }
};


// DONE!!!!!!!(цикл з ялинкою)
// const lines = 5;
// let result = '';
// let count = 1;
// let gap = lines;
// for(let i = 0; i <= lines; i ++){
//     for(let k = gap; k > 0; k--){
//         result += " ";
//     } 
//     for(let j = 1; j <= count;j++){
//         result += "*";
//     }
//     result += "\n";
//     gap--;  
//     count +=2;
// }
// console.log(result);
// add another function
// function getMathResult(arg1, arg2) {
//     if(arg2 <= 0 && !isNaN(arg2)){
//         return arg1;
//     }
//     let resStr = `${arg1}`;
//     let sum = arg1;
//     for(let i = 1; i < arg2; i++){
//         sum += arg1;
//         resStr += `---${sum}`;
//     }
//     return resStr;
// }   
// console.log(getMathResult(3, "df"));

// convert minutes to strig with hours and minutes
// function getTimeFromMinutes(minutes) {
//     if(minutes < 0 || isNaN(minutes)){
//         return "Ошбка проверьте данние";
//     }
    
//     function minToHour(minutesArg) {
//         if(minutesArg < 60) {
//             return 0;
//         }else{
//             return parseInt(minutesArg / 60);
//         }
//     }

//     function detectNameHours(){
//         if(minToHour(minutes) == 0 || 4 < minToHour(minutes)) {
//             const secondNameHours = "часов";
//             return secondNameHours;
//         }else {            
//             const firstNameHours = "часа";
//             return firstNameHours;
//         }
//     }
//     function findMinRemainder(min){
//         return min - (parseInt(min / 60) * 60);
//     }
    
//     let finishStr = `Єто ${minToHour(minutes)} ${detectNameHours()} и ${findMinRemainder(minutes)} минут`;  
//     return finishStr;
// }
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));
// console.log(getTimeFromMinutes("-150"));

// function findMaxNumber(num1, num2, num3, num4) {
//     for(let i = 0; i < 4; i++){
               
//         if(typeof(arguments[i]) === "string" || arguments.length < 4 ){
//             return 0;
//         }
//     }
//     return Math.max(...arguments);
// }
// console.log(findMaxNumber(1, 2, 6.6));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (obj) {
//         const {age} = obj;
//         const {languages} = obj.skills;
//         languages.join(" ").toUpperCase();
//         return `Мне ${age} и я владею языками: ${languages.join(" ").toUpperCase()}`;
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let result = "";
//     for(let key in plan.skills.programmingLangs){
//         if(Object.keys(plan.skills.programmingLangs).length === 0){
//             return result;
//         }else{
//             result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//         }
//     }
//     return result;    
// }
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if(arr.length === 0){
//         return "Семя пуста";
//     }else {
//         return `Семя состоит из: ${arr.join(" ")}`;
//     }
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for(let item of arr) {
//         console.log(item.toLowerCase());
//     }
// }
// const someString = 'This is some strange string';
// const someString = [];

// function reverse(str) {
//     if(typeof(str) === "string"){
//         return str.split("").reverse().join("");
//     }
//     else{
//         return "Ошибка!";
//     }
// }


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// let allCurrencies = baseCurrencies.concat(additionalCurrencies);
// function availableCurr(arr, missingCurr) {
//     let availableCuttStr ="Доступные валюты:\n";
//     if(arr.length === 0){
//         return "Нет доступних валют.";
//     }else if(arguments.length < 2){
//         arr.forEach(function (item){
//             availableCuttStr += `${item}\n`;
//         });
//     }else{
//         for(let item of arr){
//             if(item === arguments[1]) {
//                 continue;
//             }
//             availableCuttStr += `${item}\n`;
//         }  
//     }
//     return availableCuttStr;
// }
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let sumOfSq = 0;
    data.shops.forEach(item => {
        const {width, length} = item;
        sumOfSq += (width *length);
    });
    let realBudg = sumOfSq * data.height * data.moneyPer1m3;
    if(realBudg <= data.budget){
        return "Бюджета достаточно";
    }else{
        return `Бюджета не достаточо не хватает ${realBudg - data.budget}`;
    }
}
console.log(isBudgetEnough(shoppingMallData));