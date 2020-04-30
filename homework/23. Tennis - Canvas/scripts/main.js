const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Задаю размеры поля
canvas.width = 1000;
canvas.height = 600;

//Задаю размеры ракетки
const rocketWidth = 20;
const rocketHeight = 150;

//Задаю первоначальное положения ракеток по центру
let Rocket1Y = 600 / 2 - rocketHeight / 2;
let Rocket2Y = 600 / 2 - rocketHeight / 2;

//Задаю шаг передвижения ракетки
let step = 3;

//движение
let action = false;
let timerId;

//Шарик вылетает рандомно при старте
function randomXNumber() {
    let num = Math.random();
    if (num < 0.5) {
        num = -1;
    } else {
        num = 1;
    }
    return num;
}

function randomYNumber(min, max) {
    let num = Math.random() * (max - min) + min;
    if (num === 0) {
        num = 2;
    }
    return num;
}

//Задаю параметры шарика
//первоначальное положение (1000 и 600 - размеры канваса)
let ballX = 1000 / 2; 
let ballY = 600 / 2;
//радиус шарика
let ballRadius = 15; 
//скорость шарика
let speedX = randomXNumber();
let speedY = randomYNumber(-1, 1); 
//поле
render();

function start() {
    //сбрасываю настройки мячика
    ballReset();
    //дизэйблю кнопку когда игра начинается
    document.getElementById("startButton").disabled = true;
    timerId = setInterval(updateView, 0);
    //разрешаю ракеткам двигаться
    action = true;
}

function stop() {
    //возвращаю кнопку к жизни когда кто-то пропустил мячик
    document.getElementById("startButton").disabled = false;
    //запрещаю ракеткам двигаться
    action = false;
    clearInterval(timerId);
}

function render() {
    //поле
    context.fillStyle = "#fbfd99";
    context.fillRect(0, 0, 1000, 600);

    //отрисовываю ракетки
    //левая ракетка
    context.fillStyle = "#008000";
    context.fillRect(0, Rocket1Y, rocketWidth, rocketHeight); 
    //правая ракетка
    context.fillStyle = "#0000cc";
    context.fillRect(1000 - rocketWidth, Rocket2Y, rocketWidth, rocketHeight); 
    //мячик
    context.fillStyle = "#ff0000";
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
}

function updateView() {
    render();
    ballX += speedX;
    ballY += speedY;
    //проверяю пол
    if (ballY + ballRadius > 600) {
        speedY = -speedY;
    }
    //проверяю потолок
    if (ballY - ballRadius < 0) {
        speedY = -speedY;
    }
    //проверяю правую стену
    if (
        ballX + ballRadius === 1000 - rocketWidth &&
        ballY > Rocket2Y &&
        ballY - ballRadius < Rocket2Y + rocketHeight
    ) {
        speedX = -speedX;
    }
    if (ballX + ballRadius > 1000) {
        speedX = 0;
        speedY = 0;
        stop();
        document.getElementById("leftPlayer").innerHTML++;
    }

    //проверяю левую стену
    if (
        ballX - ballRadius === rocketWidth &&
        ballY + ballRadius > Rocket1Y &&
        ballY - ballRadius < Rocket1Y + rocketHeight
    ) {
        speedX = -speedX;
    }
    if (ballX - ballRadius < 0) {
        speedX = 0;
        speedY = 0;
        stop();
        document.getElementById("rightPlayer").innerHTML++;
    }

    if (action === true) {
        moveRockets();
    }
}

let leftUp = false;
let leftDown = false;
let rightUp = false;
let rightDown = false;
//движение ракеток
function moveRockets() {
    if (leftUp) {
        Rocket1Y -= step;
        if (Rocket1Y < 0) {
            Rocket1Y = 0;
        }
    }
    if (leftDown) {
        Rocket1Y = Rocket1Y + step;
        if (Rocket1Y + rocketHeight > 600) {
            Rocket1Y = 600 - rocketHeight;
        }
    }
    if (rightUp) {
        Rocket2Y -= step;
        if (Rocket2Y < 0) {
            Rocket2Y = 0;
        }
    }
    if (rightDown) {
        Rocket2Y = Rocket2Y + step;
        if (Rocket2Y + rocketHeight > 600) {
            Rocket2Y = 600 - rocketHeight;
        }
    }
}
document.onkeydown = function(event) {
    if (event.keyCode === 87) {
        leftUp = true
    }
    if (event.keyCode === 83) {
        leftDown = true
    }
    if (event.keyCode === 38) {
        rightUp = true
    }
    if (event.keyCode === 40) {
        rightDown = true
    }
};
document.onkeyup = function(event) {
    if (event.keyCode === 87) {
        leftUp = false
    }
    if (event.keyCode === 83) {
        leftDown = false
    }
    if (event.keyCode === 38) {
        rightUp = false
    }
    if (event.keyCode === 40) {
        rightDown = false
    }
};

function ballReset() {
    ballX = 1000 / 2;
    ballY = 600 / 2;
    speedX = randomXNumber();
    speedY = randomYNumber(-1, 1);
    Rocket1Y = 600 / 2 - rocketHeight / 2;
    Rocket2Y = 600 / 2 - rocketHeight / 2;
}