'use strict';

window.addEventListener('DOMContentLoaded', () => {

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');


        //функция открытия модального окна, добавляем классы и удаляем.
function openModal() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // чтобы убрать прокрутку стрнчки под модальнм окном. Если убрать, то подложка будет прокручиваться.

        //если пользователь уже сам открыл модальное окно, то мы очищаем SetTimeout имодально еокно ен появляется автоматически.
    clearInterval(modalTimerId);
};

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    

      //функция закрытия окна
      function closeModalWindow() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = ''; // чтобы вернуть оверфлоу наместо, и все прокручивалось.
      }

        //закрыть модалку, нажав на крестик.
      modalCloseBtn.addEventListener('click', closeModalWindow);
    
      //закрыть модалку, нажав на подложку.
    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) { // при клике на пустое поле, в классе modal мы апускаем виент по клику и удаляем класс шоу и добавляем хайд.
            closeModalWindow()
        }
    });

    //закрытие модального окна по клавише Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) { //если человек нажал Esc И модальное окно СОДЕРЖИТ класс show, то будет работать искейп
            closeModalWindow();
        }
    });

    // https://www.toptal.com/developers/keycode/for/Escape


    // Модалка, которая всплывает через секунды, или при долистывании страницы до низа.

    const modalTimerId = setTimeout(openModal, 5000); // модальное окно всплывает через 3 секунды, как прогрузилась страничка.

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScrol);
        }
    }
    window.addEventListener('scroll', showModalByScrol);
});