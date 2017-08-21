var square = document.querySelector('.square');
var x = document.querySelector('.x');
var o = document.querySelector('.o');
// var square1 = document.querySelector('#top-left');
// var square2 = document.querySelector('#top-middle');
// var square3 = document.querySelector('#top-right');
// var square4 = document.querySelector('#middle-left');
// var square5 = document.querySelector('#middle-middle');
// var square6 = document.querySelector('#middle-right');
// var square7 = document.querySelector('#bottom-left');
// var square8 = document.querySelector('#bottom-middle');
// var square9 = document.querySelector('#bottom-right');

var startButton = document.querySelector('h3')
var counter = 0;

startButton.addEventListener('click', function () {
  startButton.innerText = 'X selects a square'
})

// for var (i=0; i<square.length; i++) {
//   square[i].addEventListener('click', function(event) {
//     if (this.innerText === )
//   })
// }


square.addEventListener('click', function() {
  if (counter % 2 === 0) {
    x.style.display = block;
    counter += 1;
  }
  else if (counter % 2 === 1) {
    square.style.content = "\2B55";
    counter += 1;
  }
})
