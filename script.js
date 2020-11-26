$(document).ready(function () {
  $('.menu').click(function(){
    $('.toggle_nav').toggle();
  });
});





let imgContainer = document.querySelector('.imgWindow');
let currentImg = 1;
let track1 = document.querySelector('.tracker1');
let track2 = document.querySelector('.tracker2');
let track3 = document.querySelector('.tracker3');
let getDirection = document.querySelector('.direction');

let prev = document.querySelector('.prev_wrapper');
let next = document.querySelector('.next_wrapper');



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




track1.onclick = function () {
  imgContainer.style.backgroundImage = "url('./images/home3.jpg')";

  track1.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  track2.style.backgroundColor = "#fff";
  track3.style.backgroundColor = "#fff";
}


track2.onclick = function () {
  imgContainer.style.backgroundImage = "url('./images/home4.jpg')";

  track1.style.backgroundColor = "#fff";
  track2.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  track3.style.backgroundColor = "#fff";
}

track3.onclick = function () {
  imgContainer.style.backgroundImage = "url('./images/home5.jpg')";

  track1.style.backgroundColor = "#fff";
  track2.style.backgroundColor = "#fff";
  track3.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}




prev.onclick = function(){
  if (currentImg == 1) {
    imgContainer.style.backgroundImage = "url('./images/home3.jpg')";

    track1.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    track2.style.backgroundColor = "#fff";
    track3.style.backgroundColor = "#fff";

  } else if (currentImg == 2) {
    imgContainer.style.backgroundImage = "url('./images/home4.jpg')";

    track1.style.backgroundColor = "#fff";
    track2.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    track3.style.backgroundColor = "#fff";
 
  }else if (currentImg == 3) {
    
    imgContainer.style.backgroundImage = "url('./images/home5.jpg')";

    track1.style.backgroundColor = "#fff";
    track2.style.backgroundColor = "#fff";
    track3.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }

  currentImg++ ;

  
  if( currentImg > 3){
    currentImg = 1;
  }
  if( currentImg < 1){
    currentImg = 3;
  }

}

next.onclick = function(){
  if (currentImg == 1) {
    imgContainer.style.backgroundImage = "url('./images/home5.jpg')";

    track1.style.backgroundColor = "#fff";
    track2.style.backgroundColor = "#fff";
    track3.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  } else if (currentImg == 2) {
    imgContainer.style.backgroundImage = "url('./images/home4.jpg')";

    track1.style.backgroundColor = "#fff";
    track2.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    track3.style.backgroundColor = "#fff";
 
  }else if (currentImg == 3) {
    imgContainer.style.backgroundImage = "url('./images/home3.jpg')";

    track1.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    track2.style.backgroundColor = "#fff";
    track3.style.backgroundColor = "#fff";

  }

  currentImg++ ;

  
  if( currentImg > 3){
    currentImg = 1;
  }
  if( currentImg < 1){
    currentImg = 3;
  }

}