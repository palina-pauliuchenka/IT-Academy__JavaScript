let balls = document.getElementsByTagName('img');

for(let i = balls.length - 1; i >= 0; i--) {
  let ball = balls[i];
  ball.style.position = 'absolute';
  //offsetLeft возвращает смещение в пикселях верхнего левого угла текущего элемента от родительского
  ball.style.left = ball.offsetLeft + 'px';
  ball.style.top = ball.offsetTop + 'px';
  ball.style.cursor = 'pointer';
  ball.style.margin = '0px';  

  ball.addEventListener('mousedown', mouseDown);

  //у браузера есть свой drag&drop, он автом запускается с нашим и мешает работать, поэтому мы его отключаем
  ball.ondragstart = function() {
    return false;
  };

  // Кнопка мыши нажата над элементом.
  function mouseDown(EO) {
    let elem = EO.target;
    let posElem = getElementPos(elem);
    let offsetX = EO.pageX - posElem.left;
    let offsetY = EO.pageY - posElem.top;

    document.body.appendChild(elem);

    function getElementPos(elem) {
      let box = elem.getBoundingClientRect();
      return {
        //Возвращает число пикселей, на которое документ пролистали в данный момент по X || Y
        left: box.left + window.pageXOffset,
        top: box.top + window.pageYOffset
      };
    }

    function moveElem(EO) {
      elem.style.left = EO.pageX - offsetX + 'px';
      elem.style.top = EO.pageY - offsetY + 'px';
    }

    //Каждое движение мыши над элементом.
    document.onmousemove = function(EO) {
      moveElem(EO);
    };

    //Кнопка мыши отпущена над элементом.
    elem.onmouseup = function() {
      document.onmousemove = null;
    };

  }

}

// mouseover - Мышь появилась над элементом.
// mouseout - Мышь ушла с элемента.



