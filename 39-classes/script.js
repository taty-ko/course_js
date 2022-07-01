'use strict';

// Классы - это красивые формы конструкций.

// Абстракция. Есть концепция и есть экземпляры, которые созданы на основе концепции.
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
            // метод
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(20, 20); //400
console.log(square.calcArea());

const long = new Rectangle(201, 10); //2010
console.log(long.calcArea());



// Наследование. Способность объекта или Класса базироваться на другом объекте или классе.

class ColoredRectangleWithText extends Rectangle { //новый класс наследуется от класса Rectangle, т.е у него будет что-то новое сове, но основа будет из класса наследования.
    constructor(height, width, text, bgColor) {
        super(height, width);// вызывает супер конструктор родителя.
                // в нашем случае те строчки с this, котрые были в классе Rectangle.
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}, Ширина: ${this.width}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, "Hello there", 'yellow');

div.showMyProps();
console.log(div.calcArea());