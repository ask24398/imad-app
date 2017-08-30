console.log('Loaded!');


//move image
var img = document.getElementById('madi')
img.onclick = function() {
  var interval = setInterval(moveLeft, 20);
  img.style.marginLeft= '100px';
};