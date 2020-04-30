class ClockViewSvg {

    constructor(container) {
        this.container = container;
    }

    drawElements(width, height, hourWidth, minutesWidth, secondsWidth) {

        this.clockCont = document.createElement('div');
        this.clockCont.className = 'clock-container';

        //создаем сам svg и его атрибуты
        this.svgNS = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(this.svgNS, "svg");          
        this.svg.setAttributeNS(null, 'width', width);
        this.svg.setAttributeNS(null, 'height', height);            

        //кнопки
        this.startBtn = document.createElement('button');
        this.startBtn.innerText = 'СТАРТ';
        this.stopBtn = document.createElement('button');
        this.stopBtn.innerText = 'СТОП';
        this.startBtn.className = 'btn start';
        this.stopBtn.className = 'btn stop'; 
        

        //созадем и прописываем значения основному циферблату 
        this.clockCircle = document.createElementNS(this.svgNS, "circle");        
        this.clockCircle.setAttributeNS(null,"cx", width/2);
        this.clockCircle.setAttributeNS(null,"cy", height/2);
        this.clockCircle.setAttributeNS(null,"r", height/2);
        this.clockCircle.setAttributeNS(null,"fill", "#fcca66");

       
        this.hourArrow = document.createElementNS(this.svgNS, "line");
        this.minutesArrow = document.createElementNS(this.svgNS, "line");
        this.secondsArrow = document.createElementNS(this.svgNS, "line");
        this.createArrows(this.hourArrow, width, height, hourWidth, 12);
        this.createArrows(this.minutesArrow, width, height, minutesWidth, 10);
        this.createArrows(this.secondsArrow, width, height, secondsWidth, 4);           
        this.svg.append(this.clockCircle);
        this.clockCont.append(this.startBtn, this.stopBtn, this.svg);
        
    }

    createArrows(arrow, width, height, arrowWidth, strWidth) {            
        arrow.setAttributeNS(null,"x1", width/2);
        arrow.setAttributeNS(null,"y1", height/2  - arrowWidth);
        arrow.setAttributeNS(null,"x2", width/2);
        arrow.setAttributeNS(null,"y2", height/2 + 20);
        arrow.setAttributeNS(null,"stroke", "#000000");
        arrow.setAttributeNS(null,"stroke-width", strWidth);
        arrow.setAttributeNS(null,"stroke-linecap", "round");
    }

    drawNumbers(numberCircleX, numberCircleY, hourValue, radius) {
        //кружочек с числом
        const numberCircle = document.createElementNS(this.svgNS,"circle");
        numberCircle.setAttributeNS(null,"cx", numberCircleX + radius);
        numberCircle.setAttributeNS(null,"cy", numberCircleY + radius);
        numberCircle.setAttributeNS(null,"r", radius);
        numberCircle.setAttributeNS(null,"fill","#48b382");
            
        //само число
        const number = document.createElementNS(this.svgNS,"text");
        number.setAttributeNS(null,"x", numberCircleX + radius);
        number.setAttributeNS(null,"y", numberCircleY + radius + 5);//правка отрисовки текста                
        number.setAttributeNS(null,"stroke", "black");                   
        number.setAttributeNS(null, "class", "number");       
        number.setAttributeNS(null, "text-anchor", "middle");     
        number.innerHTML = hourValue; 

        this.svg.append(numberCircle, number);

        if (hourValue == 12) {
            this.appendClock();
        }
        
    }

    appendClock() {
        this.svg.append(this.hourArrow, this.minutesArrow, this.secondsArrow);  
        this.container.append(this.clockCont);
    }

    drawArrowsMove(hours, min, sec, width, height) {
        this.hourArrow.setAttributeNS(null,'transform', `rotate (${hours}, ${width/2}, ${height/2} )`);
        this.minutesArrow.setAttributeNS(null,'transform', `rotate (${min}, ${width/2}, ${height/2} )`);
        this.secondsArrow.setAttributeNS(null,'transform', `rotate (${sec}, ${width/2}, ${height/2} )`);
    
    } 

    drawTimeZone(zone, utc) {
        this.svg.insertAdjacentHTML('beforebegin', `<span>${zone} UTC ${utc}</span>`)
    }
    
}