let numberOfFilms = +prompt("How manu movies have you watch?");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    let lastFilm = prompt("one of the last watched movies"),
        filmRating = prompt("how much will you appreciate it");
    if(lastFilm.length < 50 && lastFilm !== null && lastFilm !== "" && filmRating !== null && filmRating !== ""){
        personalMoviesDB.movies[lastFilm] = filmRating;
    }else{
        i--;
    }
}
if(personalMoviesDB.count <= 10) {
    console.log("ok");
}else if(personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30){
    console.log("good");
}else if(personalMoviesDB.count >= 30) {
    console.log("well");
}else{
    console.log("error");
}
console.log(personalMoviesDB.movies);


// не можу додуматись((((((
// const lines = 5;
// let result = '';
// for(let i = 0; i <= lines; i ++){
//     let upI = i;
//     for(let j = 0; j < (upI + 1);j++){
//         result += "*";
//         if(i === 0){
//             break;
//         }
//     }
//     upI += 2; 
//     result += "\n";
// }
// console.log(result);
    