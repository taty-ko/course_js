"use strict";


//Taty
const numberOfFilms = +prompt("How many films has you wathed?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("What is the latest watched film?", "");
const rateFilm = prompt("How much stars do you evaluate it?", "");
personalMovieDB.movies[lastFilm] = rateFilm;
//personalMovieDB.movies.lastFilm = rateFilm;

console.log(personalMovieDB);
 

//Teacher
/* const numberOfFilms = +prompt('How many films has you wathed?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('What is the latest watched film?', ''),
      b = prompt('How much stars do you evaluate it?', ''),
      c = prompt('What is the latest watched film?', ''),
      d = prompt('How much stars do you evaluate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */
