"use strict";


 const numberOfFilms = +prompt('How many films has you wathed?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('What is the latest watched film?', ''),
          rateFilm = prompt('How much stars do you evaluate it?', '');

          if (lastFilm != null && rateFilm != null && lastFilm.length != '' && rateFilm != '' && lastFilm.length < 50) {  // переменные НЕ равны null, НЕ пустые строки, длина строк не более 50 символов.
            personalMovieDB.movies[lastFilm] = rateFilm;
            console.log('done, it works.'); // если выполняется условие выше, то носоль выводит done. и повторяет еще раз вопрос.
          } else {
              console.log('error, something was wrong.'); // Если условия IF не выполнились, то  мы откатіваемся i-- на один шаг назад, к вопросам.
              i--;
          }
}

if (personalMovieDB.count < 10) {
    console.log('You whatched a little films');
}  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic whatcer.');
} else if (personalMovieDB.count >= 30) {
    console.log('You are a Cineman.');
} else  {
    console.log('Something was wrong!');
}

console.log(personalMovieDB); 
