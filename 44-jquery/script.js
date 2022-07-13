import $ from'jquery';

/* const btn = $('#btn'); // получаем первую кнопку по селектору, черз знак $

console.log(btn); */

$(document).ready(function() {

    //тогглим класс - актив, на ховер (при наведении) для первой кнопки
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    //тогглим класс для третьей кнопки, при нажатии хайдим, скрываем картинку (четную) за 3 мс.
    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle(300);
    });

    //  по нажатию на 5 кнопку, анимируем нечетную odd картинку. При нажатии на кнопку картинка тогглит прозрачность и высоту. (или появляется, или исчезает).
    $('.list-item:eq(4)').on('click', () => {
        $('.image:odd').animate({
            opacity:'toggle',
            height: 'toggle'
        }, 2000);
    });
});





// https://page2page.lohmach.info/index.php5/%d0%92%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5_%d0%b2_jQuery.html#.D0.9D.D0.B5.D0.B1.D0.BE.D0.BB.D1.8C.D1.88.D0.B0.D1.8F_.D0.BF.D0.BE.D0.B4.D1.81.D0.BA.D0.B0.D0.B7.D0.BA.D0.B0