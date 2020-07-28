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

    }

    // Отрисовка объекта.
    draw(parentElement) {

    }

    // Передвинуть объект по карте в направлении (mouseX, mouseY).
    move(mouseX, mouseY) {

    }

    // Удаление объекта со сцены.
    destroy() {

    }
}