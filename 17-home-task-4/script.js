"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = + prompt('How many films has you wathed?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = + prompt('How many films has you wathed?', '');
        }
     },
     rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('What is the latest watched film?', ''),
                  rateFilm = prompt('How much stars do you evaluate it?', '');
        
                  if (lastFilm != null && rateFilm != null && lastFilm.length != '' && rateFilm != '' && lastFilm.length < 50) {  // переменные НЕ равны null, НЕ пустые строки, длина строк не более 50 символов.
                    personalMovieDB.movies[lastFilm] = rateFilm;
                    console.log('done, it works.'); // если выполняется условие выше, то консоль выводит done. и повторяет еще раз вопрос.
                  } else {
                      console.log('error, something was wrong.'); // Если условия IF не выполнились, то  мы откатіваемся i-- на один шаг назад, к вопросам.
                      i--;
                  }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You whatched a little films');
        }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic whatcer.');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a Cineman.');
        } else  {
            console.log('Something was wrong!');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`What is your lovely genre for number ${i}`); // не создавали переменной дополнительной, а сразу записали промпты в всойства объекта.
        }
    }
};
personalMovieDB.start();



/* function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('What is the latest watched film?', ''),
              rateFilm = prompt('How much stars do you evaluate it?', '');
    
              if (lastFilm != null && rateFilm != null && lastFilm.length != '' && rateFilm != '' && lastFilm.length < 50) {  // переменные НЕ равны null, НЕ пустые строки, длина строк не более 50 символов.
                personalMovieDB.movies[lastFilm] = rateFilm;
                console.log('done, it works.'); // если выполняется условие выше, то консоль выводит done. и повторяет еще раз вопрос.
              } else {
                  console.log('error, something was wrong.'); // Если условия IF не выполнились, то  мы откатіваемся i-- на один шаг назад, к вопросам.
                  i--;
              }
    }
}
 */
// rememberMyFilms();

/* function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('You whatched a little films');
    }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic whatcer.');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a Cineman.');
    } else  {
        console.log('Something was wrong!');
    }
} */
// detectPersonalLevel();

/*  function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB); 
    }
}
showMyDB(personalMovieDB.privat);  


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your lovely genre for number ${i}`); // не создавали переменной дополнительной, а сразу записали промпты в всойства объекта.
    }
}
writeYourGenres(); */
