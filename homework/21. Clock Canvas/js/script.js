// беру канвас и задаю контекст
const CANVAS = document.getElementById('canvas');
const CONTEXT = CANVAS.getContext('2d');

// беру ширину и высоту канваса
const WIDTH = parseFloat(CANVAS.getAttribute('width'));
const HEIGHT = parseFloat(CANVAS.getAttribute('height'));

// оловинки ширины и высоты
const WIDTH_HALF = WIDTH / 2;
const HEIGHT_HALF = HEIGHT / 2;

// радиус угла
const ANGEL = 30;

// радиус часиков
const CLOCK_RADIUS = WIDTH_HALF;

// радиус кружочков с цифрами часов
const RADIUS = 0.8 * CLOCK_RADIUS;

// начинаю рисовать
function drawClock(drawing) {
	// начинаю рисовать тело часиков
	CONTEXT.beginPath();
	// рисую сам круг
	// ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	CONTEXT.arc(300, 300, 300, 0, 2*Math.PI);
	CONTEXT.fillStyle = '#fcca66';
	CONTEXT.fill();

	for (let i = 1; i <= 12; i++) {
		
		// раставляю кружочки по кругу
		const ANGEL_RADIAN = (ANGEL * i * (2 * Math.PI)) / 360;
		// считаю центр кружочка относительно часов
		const HOUR_CENTER_X = CLOCK_RADIUS + RADIUS * Math.sin(ANGEL_RADIAN);
		const HOUR_CENTER_Y = CLOCK_RADIUS - RADIUS * Math.cos(ANGEL_RADIAN);
		// рисую кружочки
		CONTEXT.beginPath();
		// 40 радиус кружочка
		CONTEXT.arc(HOUR_CENTER_X, HOUR_CENTER_Y, 40, 0, 2 * Math.PI);
		CONTEXT.fillStyle = '#48b382';
		CONTEXT.fill();

		// добавляю цифры в кружочки
		CONTEXT.fillStyle = '#000000';
		CONTEXT.textAlign = 'center';
		CONTEXT.textBaseline = 'middle';
		CONTEXT.font = 'normal bold 2rem Time New Roman';
		CONTEXT.fillText(i, HOUR_CENTER_X, HOUR_CENTER_Y); 

		// добавляею "электронные часы"
		const NOW = new Date();
		// 'ru' - помогаю понять что мы не в Аьмерике, а в "беларуси". be || by - не понимает, интересно даже почему
		const TIME = NOW.toLocaleTimeString('ru');
		CONTEXT.fillStyle = '#000000';
		CONTEXT.font = 'normal 2rem Time New Roman';
		CONTEXT.fillText(TIME, 300, 200);

		// рисую стрелки		
		// Отнимаем 90 градусов потому, что нулевая точка отсчета радиан идет не от 12 часов, а от 3 часов!!!!!!!
		const SECONDS = NOW.getSeconds() * 6 - 90;
		const MINUTES = NOW.getMinutes() * 6 - 90;
		const HOURS = (NOW.getHours() + NOW.getMinutes() / 60 + NOW.getSeconds() * 3600) * 30 - 90;

		let secondsRadian = SECONDS * 2 * Math.PI / 360,
			minutesRadian = MINUTES * 2 * Math.PI / 360,
			hoursRadian = HOURS * 2 * Math.PI / 360;

		let secLength = 250,
			minLength = 210,
			hourLength = 170;

		// строю секундну/минутную/часовую стрелки
		let secX = CLOCK_RADIUS + secLength * Math.cos(secondsRadian),
		 	secY = CLOCK_RADIUS + secLength * Math.sin(secondsRadian);

		CONTEXT.beginPath();
		CONTEXT.strokeStyle = '#ff2000';
		CONTEXT.lineWidth = 4;
		CONTEXT.lineCap = 'round';
		CONTEXT.moveTo(300, 300);
		CONTEXT.lineTo(secX, secY);
		CONTEXT.stroke();

		let minX = CLOCK_RADIUS + minLength * Math.cos(minutesRadian),
		 	minY = CLOCK_RADIUS + minLength * Math.sin(minutesRadian);

		CONTEXT.beginPath();
		CONTEXT.strokeStyle = '#0000ff';
		CONTEXT.lineWidth = 4;
		CONTEXT.lineCap = 'round';
		CONTEXT.moveTo(300, 300);
		CONTEXT.lineTo(minX, minY);
		CONTEXT.stroke();

		let hourX = CLOCK_RADIUS + hourLength * Math.cos(hoursRadian),
		 	hourY = CLOCK_RADIUS + hourLength * Math.sin(hoursRadian);

		CONTEXT.beginPath();
		CONTEXT.strokeStyle = '#000000';
		CONTEXT.lineWidth = 4;
		CONTEXT.lineCap = 'round';
		CONTEXT.moveTo(300, 300);
		CONTEXT.lineTo(hourX, hourY);
		CONTEXT.stroke();
	}
}

setInterval(drawClock, 1000);