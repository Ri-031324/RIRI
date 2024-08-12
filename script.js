// press the button to take a photo.

let light = document.getElementById('circle');
let eject = document.getElementById('photo');

document.getElementById('button').addEventListener('click', () => {
  light.classList.remove('flash-animation');
  setTimeout(() => {
    light.classList.add('flash-animation');
  }, 500);

  // Set the src attribute to your image file when the button is clicked
  eject.src = 'you.jpg'; // Replace with the path to your image
  eject.style.display = 'block'; // Ensure the image is visible
  eject.classList.remove('eject-photo');
  setTimeout(() => {
    eject.classList.add('eject-photo');
  }, 500);
});

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});
