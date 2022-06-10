'use strict';

//document.addEventListener('DOMContentLoaded', () =>  или
// window.addEventListener('DOMContentLoaded', () =>-
// DOMContentLoaded - событие - когда странице загружена.
// () => колл бек функция, которая срабатывает после того как Дом структура загружена.

document.addEventListener('DOMContentLoaded', () => {

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
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add'); //Выбрали форму c классвм .add
    const addInput = addForm.querySelector('.adding__input');// Выбрали уже в Форме поле ввода, по селектору input. Оно там одно.
    const checkBox = addForm.querySelector('[type="checkbox"]');// Выбрали  в той же Форме галочку по атрибуту - дата.




    //Добавляем обработчик события на форму - Submit
    //event - это объект события, с которым будем взаимодействовать.
    // event.preventDefault() - отменяет Дефолтное поведение. - в нашем случае отменили перезагрузку страницы.

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //отметила перезагрузку страницы, при введении данных в поле инпута.

        let newFilm = addInput.value; // в свойстве value - будет содержаться то, те данные, которые ввел пользователь  в поле input. Let - потому что мы перезапишем эту переменную далбше, в строке 43.
        const favorite = checkBox.checked; // checked - чтобы получить булиевое значение, тру-фолс, отмечено галочкой или нет.

        if (newFilm) {
            if (newFilm.length > 21)  {
                newFilm = `${newFilm.substring(0, 22)}...`; // substring - метод отрезает массив от начального (0) до конечно-заданного элемента, не включая его (22)
            }
            
            if (favorite) {
                console.log('Добавляем любимый фильм');
                alert('Добавлен любимый фильм');
            }

            movieDB.movies.push(newFilm); // Метод push - добавляет элемент.
            sortArr(movieDB.movies); // Сортируем список по алфавиту
            // в нашем случае, newFilm (строка), данные из инпута попадают в объект, в ключ movie.

            createMovieList(movieDB.movies, movieList);
        }

         event.target.reset(); //очищаем форму 
    });


    //функция для удаления контента по аргументу.
    //функция универсальная, подставтим любую константу, ее она и удалит.
    //в нашем случае удаляет переменную ad - рекламу
    const deleteAdv = (arr) => {
        arr.forEach(img => {
            img.remove();
        }); // Удаляем картинки и оставляем беграунд.
    
    };

   
    // ad.forEach(function (img) {
    //     img.remove();
    // });

    const adBox = document.querySelectorAll('.promo__adv');
    adBox.forEach(item => {
        item.remove();
    }); // Удаляем весь правый столбец контента.



    // создаем функцию makeChanges, которая позволяет делать изменения
    
    const makeChanges = () => {
        genre.textContent = 'драма'; //
        poster.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';
    };
    

    //Создаем функцию cортировки.
    const sortArr = (arr) => {
        arr.sort(); //Отсортировали объект по алфавиту.

    };


    //Создаем и добавляем элемент в html

    //films - фильмы с которыми будет работать функция
    //parent - родительские элементы, т.е какой родительский блок будет переиспользовать эти элементы.
    function createMovieList(films, parent) {
        parent.innerHTML = ''; // Очистили элемент, добавив пустую строку.
        sortArr(films); // Вызываем функцию сортировки и сортируем фильмы из Объекта movieDB (movieDB.movies)


        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
                                        <div class="delete"></div>
                                    </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();// удаляем родительский элемент.
                movieDB.movies.splice(i, 1);//splice - метод, который вырезает определенный элемент из массива ( i - номер, с которого начинаем удаление, 1 - количество элементов при удалении).


                //чтобы после нажатия на корзинку, удалялся элемент и чтобы не нарушалась нумерация фильмов в списке.
                // используем рукурсию, чтобы элементы заново перестраивались
                createMovieList(films, parent);


            });
        });
    }


    deleteAdv(ad);
    makeChanges();    
    createMovieList(movieDB.movies, movieList);   //   movieDB.movies=films - фильмы, которые будем перебирать; filmList=parent - куда мы будем новые фильмы помещать


});

