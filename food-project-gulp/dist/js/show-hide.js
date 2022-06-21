
// JS

window.addEventListener('DOMContentLoaded', () => {

    // определяем сущности с которы ми будем взаимодействовать:
    const tabs = document.querySelectorAll('.tabheader__item'), // обратились ко всем вкладкам, табочкам по селектору класса
          tabsContent = document.querySelectorAll('.tabcontent'), 
          tabsParent = document.querySelector('.tabheader__items'); // только один элемент tabheader__items
  
      // скрываем все ненужные нам табы
      function hideTabContent() {
        tabsContent.forEach(item => {     //Поскольку tabsContent - это псевдомассив, поэтому перебираем его с помощью forEach
                                          // аргумент item - называем мы сами, как угодно. в Нашем случае 'item'
          item.style.display = 'none';    // каждому айтему, каждому блоку в цикле бы присваиваем свойство стиля  - display: none; 
                                          // В данном случе мы скрыли ВЕСЬ контект блока с сайта
        });
          
  
        // когда скрыли весь контект блока (картинка и текст), то мы будем убирать класс активности с правого блока с классом - tabheader
          tabs.forEach (item => {
            item.classList.remove('tabheader__item_active'); // используем метод remove. В каждом элементе tab, мы удаляем класс активности tabheader__item_active
          });
      }
  
  
      // создаем функцию, которая будет показывать нам табы
      function showTabContent(i) {
        tabsContent[i].style.display = 'block'; // і - номер по порядку нашего блока, который показываем. Показываем его с помощью изменения свойства стила - displey: block
        tabs[i].classList.add('tabheader__item_active'); // используем метод add. В каждом элементе tab, мы добавляем класс активности tabheader__item_active. Обратная операция строке 123-125
      }
  
      hideTabContent();
      showTabContent(1); // т.к function showTabContent(i) от ай, то мы хотим подсветить тот элемент, номер которого укзан в аргументе функции. В даном случе 0 - первый.
                         // и этот элемент попадает в функцию  function showTabContent(i) и у него появляется стиль дисплей блок.
  });
  