

function moverAleatoriamente() {
    var elemento = document.getElementById('btn');
    var maxX = window.innerWidth - elemento.clientWidth;
    var maxY = window.innerHeight - elemento.clientHeight;

    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;
    newX = Math.min(Math.max(newX, 0), maxX);
    newY = Math.min(Math.max(newY, 0), maxY);

    elemento.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
    window.onload = function() {
        moverAleatoriamente();
      };
}

 
 
  

 