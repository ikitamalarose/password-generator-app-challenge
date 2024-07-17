const sliderButton = document.getElementById('slider-button');
const sliderBar = document.getElementById('slider-bar');
const sliderLength = document.getElementById('slider-length');
const sliderBody = document.querySelector('.sliderComponent__body');

let isDragging = false;

sliderButton.addEventListener('mousedown', () => {

console.log("ok je touche");
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);


});

function onMouseMove(event) {
    /* if (!isDragging) return;
 */console.log("entree");

    const sliderRect = sliderBody.getBoundingClientRect();
    let newLeft = event.clientX - sliderRect.left;
    console.log("new left: "+event.clientX);
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > sliderRect.width) {
        newLeft = sliderRect.width;
    }

    sliderButton.style.left = `${newLeft}px`;
    const percentage = (newLeft / sliderRect.width) * 100;
    sliderBar.style.width = `${percentage}%`;

    // Update the slider length display
    sliderLength.textContent = `${Math.round(percentage)}%`;
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}
