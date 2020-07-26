import '../css/index.css';

import {Scene} from './objects/scene';

// Устанавливаем соединение с сервером.
const socket = new WebSocket('ws://192.168.1.219:3000');

// Создаем основные глобальные объекты нашего игрового мира.
let canvas; // HTML-элемент svg, в котором мы будем отрисовывать свой мир.
let scene; // Сцена(пространство передвижения игрока) и все объекты, которые на ней представлены.

// Функция запуска отрисовки сцены.
const drawScene = () => {
    // Отрисуй сцену  в следующем тике снова.
    requestAnimationFrame(drawScene);

    if (scene) {
        scene.draw(canvas);
    }
};

// Получаем от сервера данные для отрисовки сцены.
socket.addEventListener('message', ({data}) => {
    const {gameSession, newPlayer, mainPlayer, newFood, deletedPlayers, deletedFood, updatePlayer} = JSON.parse(data);

    if (gameSession && mainPlayer) {
        scene = new Scene(gameSession.scene.width, gameSession.scene.height, mainPlayer, gameSession.foodPoints, gameSession.players);
    }
    if (deletedFood) {
        // TODO
    }
    if (deletedPlayers) {
        // TODO
    }
    if (newPlayer) {
        // TODO
    }
    if (newFood) {
        // TODO
    }
    if (updatePlayer) {
        // TODO
    }
});

// Настраиваем передвижение игрока.
const mousePosition = {
    x: 0,
    y: 0,
};
document.addEventListener('mousemove', (e) => {
    mousePosition.x = e.x;
    mousePosition.y = e.y;
});
setInterval(() => {
    if (scene) {
        scene.mainPlayer.move(mousePosition.x, mousePosition.y);
    }
}, 15);

// Создаем сцену.
window.onload = () => {
    canvas = document.getElementById('canvas');
    drawScene();
};
