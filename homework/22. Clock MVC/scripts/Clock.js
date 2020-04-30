// model
class Clock {
    constructor(timeZone, view) {
        this.view = view;            
        this.timerId = []; // таймеры которые я создам
        this.clockWidth = 300; // ширина часиков
        this.clockHeight = 300; // высота часиков
        this.radius = 120; // радиус часиков
        this.greenRadius = 20; // радиус зеленого кружочка
        this.greenWidth = 40; // ширина зеленого кружочка
        this.hourValue = 1; 
        this.timeZone = timeZone; // зона которую введу
        // длины стрелок
        this.hourArrowWidth = 80; 
        this.minutesArrowWidth = 110;
        this.secondsArrowWidth = 130;
        this.createClock(); // создаю часики           
    }

    createClock() {
        this.drawElements(); // рисую все элементы
        this.numberCoordinates(); // отображаю координаты                       
        this.setArrows(); // подставляю стрелки
        this.timeZoneToString(); //
    }
    // отрисовываю элементы
    drawElements() {
        this.view.drawElements(this.clockWidth, this.clockHeight, this.hourArrowWidth, this.minutesArrowWidth, this.secondsArrowWidth);
    }
    // считаю координаты циферок для часиков
    numberCoordinates() {
        for (let i = 1; i <= 12; i++ ) {              

            let angle = 30;       
            let angleRad = (angle * i * Math.PI) / 180;

            let clockCenterX = this.clockWidth/2 - this.greenWidth/2; 
            let clockCenterY = this.clockHeight/2 - this.greenWidth/2;

            let numberCenterX = clockCenterX + this.radius * Math.sin(angleRad);
            let numberCenterY = clockCenterY - this.radius * Math.cos(angleRad);               

            this.drawNumber(numberCenterX, numberCenterY, this.hourValue, this.greenRadius);

            this.hourValue++;
        }
    }
    // рисую цифры
    drawNumber(left, top, hourValue, radius) {
        this.view.drawNumbers(left, top, hourValue, radius);
    }
    // часовая, минутная, секундная стрелки
    setArrows() {

        const date = moment.tz(new Date, this.timeZone);
        const hours = date.hours();
        const minutes = date.minutes();
        const seconds = date.seconds();

        const hourAngle = (hours + (1/60) * minutes) * 30;
        const minutesAngle = (minutes + (1/60) * seconds) * 6;
        const secondsAngle = seconds * 6;          
        
        this.view.drawArrowsMove(hourAngle, minutesAngle, secondsAngle, this.clockWidth, this.clockHeight);
        // добавляю все таймеры в массив, чтобы потом очистить их
        this.timerId.push(setTimeout(() => this.setArrows(), 1000 - (new Date()).getMilliseconds()));

        // this.timerId.push(setTimeout(this.setArrows.bind(this), 1000 - (new Date()).getMilliseconds()));
    }                
    // запустить с паузы
    startClock() {
        this.setArrows();
    }
    // поставить на паузу
    stopClock() {
        this.timerId.forEach(clearTimeout);
    }

    timeZoneToString() {
        // Spain/Madrid
        let timeZoneName = this.timeZone.split('/');
        timeZoneName = timeZoneName[0];
        // заменяю _ на пробел (America/New_Yourk)
        if(timeZoneName.includes('_') ) {                
            timeZoneName = timeZoneName.split('_').join(' ');
        }
        const date = moment.tz(new Date, this.timeZone);
        // 'Z' - оставляет UTC -05:00, если убрать выведет все подряд
        let utc = date.format('Z'); 

        this.showTimeZone(timeZoneName, utc);
    }
    // нужный нам часовой полис
    showTimeZone(zone, utc) {
        this.view.drawTimeZone(zone, utc);
    }
}