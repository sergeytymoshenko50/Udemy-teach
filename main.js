let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How manu movies have you watch?");

    while(numberOfFilms == "" || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How manu movies have you watch?");
    }
}

// start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        let lastFilm = prompt("one of the last watched movies"),
            filmRating = prompt("how much will you appreciate it");
        if(lastFilm.length < 50 && lastFilm !== null && lastFilm !== "" && filmRating !== null && filmRating !== ""){
            personalMoviesDB.movies[lastFilm] = filmRating;
        }else{
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMoviesDB.count <= 10) {
        console.log("ok");
    }else if(personalMoviesDB.count > 10 && personalMoviesDB.count <= 30){
        console.log("good");
    }else if(personalMoviesDB.count >= 30) {
        console.log("well");
    }else{
        console.log("error");
    }
}

// detectPersonalLevel();

function showMyDB(checkProperty){
    if(!checkProperty) {
        console.log(personalMoviesDB);
    }
}
// showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
    for(let i = 0; i < 3; i++){
        personalMoviesDB.genres[i] = prompt(`Уour favorite genre, number ${i+1} ?`);
    }
}
// writeYourGenres();




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
function getTimeFromMinutes(minutes) {
    if(minutes < 0 || isNaN(minutes)){
        return "Ошбка проверьте данние";
    }
    
    function minToHour(minutesArg) {
        if(minutesArg < 60) {
            return 0;
        }else{
            return parseInt(minutesArg / 60);
        }
    }

    function detectNameHours(){
        if(minToHour(minutes) == 0 || 4 < minToHour(minutes)) {
            const secondNameHours = "часов";
            return secondNameHours;
        }else {            
            const firstNameHours = "часа";
            return firstNameHours;
        }
    }
    function findMinRemainder(min){
        return min - (parseInt(min / 60) * 60);
    }
    
    let finishStr = `Єто ${minToHour(minutes)} ${detectNameHours()} и ${findMinRemainder(minutes)} минут`;  
    return finishStr;
}
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes("-150"));