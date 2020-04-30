class ClockControllerButtons {
    constructor(model, num) {
        this.modelClock = model;
        // кнопки создаю в ClockSvg
        this.startBtn = document.querySelectorAll('.start')[num];
        this.stopBtn = document.querySelectorAll('.stop')[num];
        this.startBtn.addEventListener('click', this.setStartBtn.bind(this));
        this.stopBtn.addEventListener('click', this.setStopBtn.bind(this));
    }

    setStartBtn(e) {            
        this.modelClock.startClock();
        e.preventDefault();
    }

    setStopBtn(e) {
        this.modelClock.stopClock();
        e.preventDefault();
    }

}