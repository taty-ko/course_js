// 'use strict';
// window.addEventListener('DOMContentLoaded', () => {

// //Получаем все формы со страницы
// const forms = document.querySelectorAll('form');


// // создаем объект, чтобы выводить сообщения клиенту, при взаимодействии с формой.
// const message = {
//     loading: 'Loading page',
//     succsess: 'Thank you for response. We will get you soon.',
//     failure: 'Something goes wrong',
// };

// //Пишем функцию, которая будет отвечать за постинг данных.
// function postData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault(); //чтобы не обновлялась страничка при сабмите.


//         //создадим блок с выводом сообщений, при отправке формы.
//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);

//         // под каждую форму подвязываем post data

//         forms.forEach(item => {
//             postData(item);
//         });

//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');


// /*         request.setRequestHeader('Content-type', 'multipart/form-data');
//  */        const formData = new FormData(form);

//         request.send(formData);

//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//                 statusMessage.textContent = message.succsess;
//             } else {
//                 statusMessage.textContent = message.failure;
//             }
//         });
//     });
// }

// });