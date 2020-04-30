const svg = document.getElementById('svg');
console.log(svg);
const svg_xnls = 'http://www.w3.org/2000/svg';
//если не найдет аттрибутов width || height, то вернет null
const width = parseFloat(svg.getAttributeNS(null, 'width'));
const height = parseFloat(svg.getAttributeNS(null, 'height'));
// радиус часиков (большого желтого круга)
const clockRadius = width / 2;
// радиус кружочков с цифрами часов времени
const radius = 0.8 * clockRadius;

//создаю переменные половин ширины и высоты
let widthHalf = width / 2;
let heightHalf = height / 2;

// создаю функцию желтого круга
function drawClockBody(clock) {

    // создаю круг
    let clockBodyStyle = document.createElementNS(svg_xnls, 'circle');

    // задаю атрибуты/стили (с - center)
    clockBodyStyle.setAttributeNS(null, 'cx', widthHalf);
    clockBodyStyle.setAttributeNS(null, 'cy', heightHalf);
    clockBodyStyle.setAttributeNS(null, 'r', widthHalf);
    clockBodyStyle.setAttributeNS(null, 'fill', '#fcca66');
    clockBodyStyle.setAttributeNS(null, 'stroke', 'none');

    //рисую круг в HTML
    svg.appendChild(clockBodyStyle);
}

drawClockBody();

// можно было сделать двумя функциями
// создаю функцию для кружочков с цифрами
function drawHours(hour, hourValue) {

    // градус угла
    const angel = 30;

    for (let i = 1; i <= 12; i++) {

        // рисую круг
        let hourCircle = document.createElementNS(svg_xnls, 'circle');
        svg.appendChild(hourCircle);

        // раставляю кружочки по кругу
        let angelRadian = (angel * i * Math.PI) / 180;

        //считаю центр кружочка относительно тела часов
        let hourCenterX = clockRadius + radius * Math.sin(angelRadian);
        let hourCenterY = clockRadius - radius * Math.cos(angelRadian);

        // задаю атрибуты/стили
        hourCircle.setAttributeNS(null, 'cx', hourCenterX);
        hourCircle.setAttributeNS(null, 'cy', hourCenterY);
        hourCircle.setAttributeNS(null, 'r', 40);
        hourCircle.setAttributeNS(null, 'fill', '#48b382');
        hourCircle.setAttributeNS(null, 'stroke', 'none');

        // cоздаю текс
        let text = document.createElementNS(svg_xnls, 'text');
        svg.appendChild(text);
        // контент текста равен i
        text.textContent = i;
        // задаю атрибуты/стили
        text.setAttributeNS(null, 'x', hourCenterX);
        text.setAttributeNS(null, 'y', hourCenterY + 13);
        text.style.width = '80';
        text.style.height = '80';
        text.style.fontSize = '40';
        text.style.fontWeight = 'bold';
        text.style.textAnchor = 'middle';
    }
}
drawHours();

// создаю функцию стрелок
function drawArrows(hour_arrow, minute_arrow, second_aqrrow) {

    // создаю стрелку часов
    const hourArrow = document.createElementNS(svg_xnls, 'line');

    // задаю атрибуты/стили
    hourArrow.setAttributeNS(null, 'x1', widthHalf);
    hourArrow.setAttributeNS(null, 'x2', widthHalf);
    hourArrow.setAttributeNS(null, 'y1', widthHalf);
    hourArrow.setAttributeNS(null, 'y2', 100);
    hourArrow.setAttributeNS(null, 'stroke', '#000000');
    hourArrow.setAttributeNS(null, 'stroke-linecap', 'round');
    hourArrow.setAttributeNS(null, 'stroke-width', 6);
    hourArrow.setAttributeNS(null, 'id', 'hours');
    // рисую стрелку
    svg.appendChild(hourArrow);

    // создаю стрелку часов
    const minuteArrow = document.createElementNS(svg_xnls, 'line');
    // задаю атрибуты/стили
    minuteArrow.setAttributeNS(null, 'x1', widthHalf);
    minuteArrow.setAttributeNS(null, 'x2', widthHalf);
    minuteArrow.setAttributeNS(null, 'y1', widthHalf);
    minuteArrow.setAttributeNS(null, 'y2', 60);
    minuteArrow.setAttributeNS(null, 'stroke', '#0000ff');
    minuteArrow.setAttributeNS(null, 'stroke-linecap', 'round');
    minuteArrow.setAttributeNS(null, 'stroke-width', 4);
    minuteArrow.setAttributeNS(null, 'id', 'minutes');
    // рисую стрелку
    svg.appendChild(minuteArrow);

    // создаю стрелку часов
    const secondArrow = document.createElementNS(svg_xnls, 'line');
    // задаю атрибуты/стили
    secondArrow.setAttributeNS(null, 'x1', widthHalf);
    secondArrow.setAttributeNS(null, 'x2', widthHalf);
    secondArrow.setAttributeNS(null, 'y1', widthHalf);
    secondArrow.setAttributeNS(null, 'y2', 40);
    secondArrow.setAttributeNS(null, 'stroke', '#ff2000');
    secondArrow.setAttributeNS(null, 'stroke-linecap', 'round');
    secondArrow.setAttributeNS(null, 'stroke-width', 2);
    secondArrow.setAttributeNS(null, 'id', 'seconds');
    // рисую стрелку
    svg.appendChild(secondArrow);
}
drawArrows();

// создаю элемент текста
const textTime = document.createElementNS(svg_xnls, 'text');
svg.appendChild(textTime);
// задаю стили
textTime.setAttributeNS(null, 'x', 300);
textTime.setAttributeNS(null, 'y', 200);
textTime.setAttributeNS(null, 'id', 'text-time');
textTime.style.fontSize = '2rem';
textTime.style.fontWeight = 'bold';
textTime.style.textAnchor = 'middle';

window.onload = function operation() {


    function moveArrows() {

        const now = new Date();
        let seconds = now.getSeconds() * 6;
        // console.log(seconds);
        let minutes = now.getMinutes() * 6;
        // console.log(minutes);
        // задаю так часы, чтобы они не перескакивали с часа на час, а плавно шли от часа к часу
        let hours = (now.getHours() + now.getMinutes() / 60 + now.getSeconds() * 3600) * 30;

        // беру стрелки по Id, чтоб потом передать им анимацию
        let hoursStyle = document.getElementById('hours');
        let minutesStyle = document.getElementById('minutes');
        let secondsStyle = document.getElementById('seconds');
        // задаю анимацию
        secondsStyle.setAttributeNS(null, 'transform', 'rotate(' + seconds + ' 300 300)');
        minutesStyle.setAttributeNS(null, 'transform', 'rotate(' + minutes + ' 300 300)');
        hoursStyle.setAttributeNS(null, 'transform', 'rotate(' + hours + ' 300 300)');

        // создаю функцию в которой буду показывать время в виде циферок
        function showTime(time) {
            // делаю проверку для красоты, (const textHour = now.getHours() - работает одинаково)
            const textHour = (now.getHours() < 10) ? ('0' + now.getHours()) : (now.getHours());
            const textMinutes = (now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes());
            const textSeconds = (now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds());

            // беру по id мой текст и вставляю туда время
            document.getElementById("text-time").textContent = textHour + ':' + textMinutes + ':' + textSeconds;
        }
        showTime();

    }


    setInterval(moveArrows, 1000);
};
