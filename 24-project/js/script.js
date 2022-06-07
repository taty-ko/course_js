/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ad = document.querySelectorAll('.promo__adv img');
ad.forEach(img => {
    img.remove();
}); // Удаляем картинки и оставляем беграунд.

// ad.forEach(function (img) {
//     img.remove();
// });

const adBox = document.querySelectorAll('.promo__adv');
adBox.forEach(item => {
    item.remove();
}); // Удаляем весь правый столбец контента.

const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
genre.textContent = 'драма'; //
poster.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';

const filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = ''; // Очистили элемент, добавив пустую строку.


movieDB.movies.sort(); //Отсортировали объект по алфавиту.

movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `<li class="promo__interactive-item"> ${i + 1} ${film}
                                <div class="delete"></div>
                            </li>`;
});