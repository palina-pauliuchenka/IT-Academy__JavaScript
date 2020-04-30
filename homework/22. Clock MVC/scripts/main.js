const currentUTC = document.getElementById('current-utc'); 

const container = document.getElementById('container');
// задаю какие часики мне нужно нарисовать
let view = new ClockViewSvg(container);
let svg = new Clock('Asia/Tokyo', view);
let contr = new ClockControllerButtons(svg, 0);
        
let view1 = new ClockViewSvg(container);
let svg1 = new Clock('America/New_York', view1);
let contr1 = new ClockControllerButtons(svg1, 1);

let view2 = new ClockViewSvg(container);
let svg2 = new Clock('Belarus', view2);
let contr2 = new ClockControllerButtons(svg2, 2);