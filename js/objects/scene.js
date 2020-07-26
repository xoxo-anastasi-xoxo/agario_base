import {Food} from './food';
import {Player} from './player';

export class Scene {
    // Ширина сцены.
    width;
    // Высота сцены.
    height;
    // Цвет сцены.
    color = 'antiquewhite';
    // SVG-элемент, соответсвующий сцене.
    elem;
    transformElem;
    // Еда на сцене.
    foodPoints = new Map();
    // Игроки на сцене.
    players = [];
    // Основной игрок на сцене.
    mainPlayer;

    // Создание сцены.
    constructor(width, height, mainPlayerSpec, foodSpecs, playersSpecs) {
        this.width = width;
        this.height = height;
        this.foodPoints = foodSpecs.map((f) => new Food(f));
        this.players = playersSpecs.map(playerSpec => new Player(playerSpec, this));
        this.mainPlayer = this.players.find(player => player.id === mainPlayerSpec.id);
    }

    // Отрисовка сцены.
    draw(parentNode) {
        // Первая отрисовка объекта.
        if (!this.elem) {
            this.transformElem = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            parentNode.appendChild(this.transformElem);

            this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            this.elem.setAttribute('width', this.width);
            this.elem.setAttribute('height', this.height);
            this.elem.setAttribute('fill', this.color);
            this.elem.setAttribute('stroke-width', 3);
            this.elem.setAttribute('stroke', '#a58b8b');
            this.transformElem.appendChild(this.elem);
        }
        this.transformElem.setAttribute('transform', `translate(${-this.mainPlayer.x + innerWidth / 2}, ${-this.mainPlayer.y + innerHeight / 2})`);

        this.foodPoints.forEach((foodPoint) => foodPoint.draw(this.transformElem));
        this.players.forEach((player) => player.draw(this.transformElem));
    }

    // Удаление сцены.
    destroy() {
        if (this.elem) {
            this.elem.parentNode.removeChild(this.elem);
        }
    }
}