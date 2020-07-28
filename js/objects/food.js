export class Food {
    id;
    // Координаты пищи на сцене.
    x;
    y;
    // Радиус пищи.
    radius = 10;
    // Цвет пищи.
    color;
    // SVG-элемент, олицетворяющий данную точку.
    elem;

    // Создание объекта.
    constructor({id, x, y, radius}) {

    }

    // Отрисовка объекта.
    draw(parentNode) {

    }

    // Удаление объекта со сцены.
    destroy() {

    }
}