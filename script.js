$(document).ready(function () {
  $('.menu').click(function () {
    $('.menu2').slideToggle();
  });
});

let imgContainer = document.querySelector('.imgWindow');
let currentImg = 1;
let track1 = document.querySelector('.tracker1');
let track2 = document.querySelector('.tracker2');
let track3 = document.querySelector('.tracker3');
let getDirection = document.querySelector('.direction');



imgContainer.onmouseover = function () {
  getDirection.style.display = 'flex';
}
imgContainer.onmouseout = function () {
  getDirection.style.display = 'none';
}


window.addEventListener('load', slide);

function slide() {
  setInterval(slideimg, 3000);


  function slideimg() {
    if (currentImg === 1) {
      imgContainer.style.backgroundImage = "url('./images/home3.jpg')";

      track1.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      track2.style.backgroundColor = "#fff";
      track3.style.backgroundColor = "#fff";
    } else if (currentImg === 2) {
      imgContainer.style.backgroundImage = "url('./images/home4.jpg')";

      track1.style.backgroundColor = "#fff";
      track2.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      track3.style.backgroundColor = "#fff";
    } else if (currentImg === 3) {
      imgContainer.style.backgroundImage = "url('./images/home5.jpg')";

      track1.style.backgroundColor = "#fff";
      track2.style.backgroundColor = "#fff";
      track3.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
    currentImg += 1;




    if (currentImg > 3) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = 3;
    }



  }


}

function nextWrapper() {
  if (currentImg = 1) {
    currentImg = 2;
  } else if (currentImg = 2) {
    currentImg = 3;
  } else if (currentImg = 3) {
    currentImg = 1;
  }

}

function prevWrapper() {
  if (currentImg = 1) {
    currentImg = 3;
  } else if (currentImg = 2) {
    currentImg = 1;
  } else if (currentImg = 3) {
    currentImg = 2;
  }
}
