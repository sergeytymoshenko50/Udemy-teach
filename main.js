// let numberOfFilms = +prompt("How manu movies have you watch?");

// const personalMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++){
//     let lastFilm = prompt("one of the last watched movies"),
//         filmRating = prompt("how much will you appreciate it");
//     if(lastFilm.length < 50 && lastFilm !== null && lastFilm !== "" && filmRating !== null && filmRating !== ""){
//         personalMoviesDB.movies[lastFilm] = filmRating;
//     }else{
//         i--;
//     }
// }
// if(personalMoviesDB.count <= 10) {
//     console.log("ok");
// }else if(personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30){
//     console.log("good");
// }else if(personalMoviesDB.count >= 30) {
//     console.log("well");
// }else{
//     console.log("error");
// }
// console.log(personalMoviesDB.movies);


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
    