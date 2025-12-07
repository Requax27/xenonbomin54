
const graText = document.getElementById('text');

const center = {

    x : graText.getBoundingClientRect().left + (graText.clientWidth/2),

    y : graText.getBoundingClientRect().top + (graText.clientHeight/2)

}

window.addEventListener('mousemove', function(event2){   
    
    const x = center.x - event2.clientX;

    const y = center.y - event2.clientY;  
    
    const radian = Math.atan2(y, x);

    const degree = (radian * 180 / Math.PI);

    const degree1 = degree + 90

    graText.style.background = `linear-gradient(${degree1}deg, #9b9b9bff, #000000ff)`;

    graText.style.backgroundClip = 'text';

});

//박스이동

let BoxBox = 1  // 1:profile   2:portfolio   3:blogs

document.addEventListener('keydown', function(event) {

  switch (event.key) {

    case 'ArrowRight':

            if(BoxBox == 1) {

        BoxBox = 3

        }   else {

    BoxBox -= 1;

  }

      console.log(BoxBox)


      break;

    case 'ArrowLeft':

            if(BoxBox == 3) {

        BoxBox = 1

        }   else {

    BoxBox += 1;

  }

      console.log(BoxBox)

      break;

  }

});

const prob = document.getElementById('prob');

const portb = document.getElementById('portb');

const blogb = document.getElementById('blogb');

document.addEventListener('keydown', function(event3) {
    switch (BoxBox) {
        case 1:
            prob.style.scale = 0.80;
            prob.style.filter = "brightness(100%) blur(0px)";
            portb.style.scale = 0.40;
            portb.style.filter = "brightness(50%) blur(5px)";
            blogb.style.scale = 0.40;
            blogb.style.filter = "brightness(50%) blur(5px)";
            break;
        case 2:
            prob.style.scale = 0.40;
            prob.style.filter = "brightness(50%) blur(5px)";
            portb.style.scale = 0.80;
            portb.style.filter = "brightness(100%) blur(0px)";
            blogb.style.scale = 0.40;
            blogb.style.filter = "brightness(50%) blur(5px)";
            break;
        case 3:
            prob.style.scale = 0.40;
            prob.style.filter = "brightness(50%) blur(5px)";
            portb.style.scale = 0.40;
            portb.style.filter = "brightness(50%) blur(5px)";
            blogb.style.scale = 0.80;
            blogb.style.filter = "brightness(100%) blur(0px)";
            break;
    }
});

function love(e) {
    if (e == 1) {
        BoxBox = 2;
    } else if (e == 2) {
        BoxBox = 3;
    } else if (e == 3) {
        BoxBox = 1;
    }

    switch (BoxBox) {
        case 1:
            prob.style.scale = 0.80;
            portb.style.scale = 0.20;
            blogb.style.scale = 0.20;
            break;
        case 2:
            prob.style.scale = 0.20;
            portb.style.scale = 0.80;
            blogb.style.scale = 0.20;
            break;
        case 3:
            prob.style.scale = 0.20;
            portb.style.scale = 0.20;
            blogb.style.scale = 0.80;
            break;
    }
}

