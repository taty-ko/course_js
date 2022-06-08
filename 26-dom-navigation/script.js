'use strict';

 // От Родителя.
 console.log(document.body); // <body>...</body>
console.log(document.head); // <head>...</head>
console.log(document.documentElement); // body, head, html

console.log(document.body.childNodes); // childNodes позволяет получить все Узлы (ноды) дом дерева, увидет все очерние элементы.
                                      // Node - узел. Узлы, которые являются дочерними элэментами у body. 
                                      //NodeList(6) [text, div.wrapper, text, comment, text, script]0: text1: div.wrapper2: text3: comment4: text5: script6: text7: comment8: text9: script10: textlength: 11[[Prototype]]: NodeList
                                      // NodeLost - псевдомассив элементов из body.


console.log(document.body.firstChild); //#text
console.log(document.body.firstElementChild);  // wrapper

console.log(document.body.lastChild);


// Parent, child, sibling
// Через свойство parentNode обращаемся к родителю, в котором лежит элемент с айди #current
console.log(document.querySelector('#current').parentNode); 

console.log(document.querySelector('#current').parentElement);// В отличие от Ноды, которая может вернуть перенос, ELEMENT всегда вернет элемент.


//Хотим обратиться к робительскому элементу на порядок выше, т.е wrapper
console.log(document.querySelector('#current').parentNode.parentNode);

// Дата атрибуты
console.log(document.querySelector('[data-current="3"]').nextSibling); // Получаем первый соседний узел (ноду) после 
                                                                       // элемента с дата-атрибутом - [data-current="3"].
                                                                       //В нашем случае - это перенос строки #text.

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Получаем первый соседний ЭЛЭМЕНТ после. В нашем случае li.

console.log(document.querySelector('[data-current="3"]').previousSibling); // Получаем предыдущий соседний узел (ноду).
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // Получаем предыдущий соседний элемент li.

 
//nodeName: "#text"
for (let node of document.body.childNodes) {
if (node.name == '#text') {
    continue; //  continue - приостанавливает цикл на этом месте, и продолжает его дальше. пропустив элемент с #text
}

    console.log(node);
}

