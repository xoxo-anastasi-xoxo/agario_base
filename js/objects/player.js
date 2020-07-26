import {getRandomColor} from '../utils';

export class Player {
    id;
    // Координаты игрока на сцене.
    x;
    y;
    // Радиус игрока. Изначально игрок появляется на сцене
    radius = 30;
    // Цвет игрока.
    color;
    scene;


    // Создание объекта.
    constructor({id, x, y}, scene) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = getRandomColor();
        this.scene = scene;
    }

    // Отрисовка объекта.
    draw(parentElement) {
        // Первая отрисовка объекта.
        if (!this.elem) {
            this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

            this.elem.setAttribute('fill', this.color);
            this.elem.setAttribute('stroke-width', 2);
            this.elem.setAttribute('stroke', 'grey');

            parentElement.appendChild(this.elem);
        }
        this.elem.setAttribute('r', this.radius);
        this.elem.setAttribute('cx', this.x);
        this.elem.setAttribute('cy', this.y);
    }

    move(mouseX, mouseY) {
        this.x = this.x + (mouseX - innerWidth / 2) / 50;
        this.x = Math.max(Math.min(this.x, this.scene.width - this.radius), this.radius);
        this.y = this.y + (mouseY - innerHeight / 2) / 50;
        this.y = Math.max(Math.min(this.y, this.scene.height - this.radius), this.radius);
    }

    // Удаление объекта со сцены.
    destroy() {
        if (this.elem) {
            this.elem.parentNode.removeChild(this.elem);
        }
    }
}