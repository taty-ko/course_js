'use strict';


window.addEventListener('DOMContentLoaded', () => {

    // Создаем шаблон - класс и от него будет отпочковываться.
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            // прописывеем все свойства, которые нужны для создания карточки (взаимодействия и динамического изменения)
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector); //положили дом-элемент, родитель.
            this.transfer = 27;
            this.changeToUah();
        }

        // создаем методы конфертации валюты, из доллара в гривну. Со статическим курсом валют 27.
        changeToUah() {
            this.price = +this.price * this.transfer;
        }

        // метод, чтобы свормировать верстку.

        render() {
            const element = document.createElement('div'); // создаем элемент div.

            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); // для каждого нового элемента, который мы добавим в div карточки
                                                                                     // мы добавляем каждому элементу название класса - classList.add(className)

            }

           
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt} />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">
                ${this.descr}
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
            
        }

    }

   /*  const div = new MenuCard();
    div.render(); */

    new MenuCard(
        'img/tabs/elite.jpg', 
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        9 ,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg", 
        "post",
        'Меню “Постное”',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        7 ,
        '.menu .container',
        /* 'menu__item',
        'big' */
    ).render();

    new MenuCard(
        "img/tabs/vegy.jpg" , 
        "vegy",
        'Меню “Фитнес”',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        5 ,
        '.menu .container',
        'menu__item'
    ).render();

});
