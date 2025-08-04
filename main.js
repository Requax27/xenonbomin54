//버튼 그림자 효과 시작

const button = document.getElementById('lmbtn');

function ShadowMake(XXX, YYY) {

    const buttonRect = button.getBoundingClientRect();

    const buttonCenterX = buttonRect.left + (buttonRect.width / 2);

    const buttonCenterY = buttonRect.top + (buttonRect.height / 2);

    const XENONX = XXX - buttonCenterX;

    const XENONY = YYY - buttonCenterY;

    const distance = Math.sqrt(XENONX * XENONX + XENONY * XENONY);

    const intensity = Math.max(0, Math.min(1, (300 - distance) / 300));

    const shadowX = -XENONX * 0.2 * intensity;
    
    const shadowY = -XENONY * 0.2 * intensity;

    const ShadowX = Math.max(-30, Math.min(30, shadowX));

    const ShadowY = Math.max(-30, Math.min(30, shadowY));

    const blurRadius = 15 + (intensity * 10);

    const Opacity = 0.5 + (intensity * 0.3);

    button.style.boxShadow = `${ShadowX}px ${ShadowY}px ${blurRadius}px rgba(0, 0, 0, ${Opacity})`;
}

document.body.addEventListener('mousemove', function(event) {

    const mouseX = event.clientX;

    const mouseY = event.clientY;

    ShadowMake(mouseX, mouseY);
});

window.addEventListener('load', function() {

    const centerX = window.innerWidth / 2;

    const centerY = window.innerHeight / 2;

    ShadowMake(centerX, centerY);

    

});


//텍스트 그라데이션 효과 시작

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
