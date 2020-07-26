import {getRandomColor} from '../utils';

export class Food {
    id;
    // Координаты пищи на сцене.
    x;
    y;
    // Радиус пищи. Также может быть использован как параметр питательности.
    radius = 10;
    // Цвет пищи.
    color;
    // SVG-элемент, олицетворяющий данную точку.
    elem;

    // Создание объекта.
    constructor({id, x, y, radius}) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = getRandomColor();
        if (radius) {
            this.radius = radius;
        }
    }

    // Отрисовка объекта.
    draw(parentNode) {
        // Первая отрисовка объекта.
        if (!this.elem) {
            this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

            this.elem.setAttribute('r', this.radius);
            this.elem.setAttribute('fill', this.color);
            this.elem.setAttribute('stroke-width', 1);
            this.elem.setAttribute('stroke', 'grey');
            this.elem.setAttribute('cx', this.x);
            this.elem.setAttribute('cy', this.y);

            parentNode.appendChild(this.elem);
        }
    }

    // Удаление объекта со сцены.
    destroy() {
        if (this.elem) {
            this.elem.parentNode.removeChild(this.elem);
            this.elem = null;
        }
    }
}