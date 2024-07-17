const sliderButton = document.getElementById('slider-button');
const sliderBar = document.getElementById('slider-bar');
const sliderLength = document.getElementById('slider-length');
const sliderBody = document.querySelector('.sliderComponent__body');

let isDragging = false;


/* slider component mobile design start */
sliderButton.addEventListener('touchstart', () => {
    isDragging = true;
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);


});

function onTouchMove(event) {
    if (!isDragging) return;

    const sliderRect = sliderBody.getBoundingClientRect();

    let newLeft = event.touches[0].clientX - sliderRect.left;
    console.log("slider left:", sliderRect.left);
    console.log("event client :", event.clientX);
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > sliderRect.width) {
        newLeft = sliderRect.width;
    }

    sliderButton.style.left = `${newLeft}px`;
    const percentage = (newLeft / sliderRect.width) * 100;

    sliderBar.style.width = `${percentage}%`;

    // Update the slider length display
    sliderLength.textContent = `${Math.round(percentage)}`;
}

function onTouchEnd() {
    isDragging = false;
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
}
/* slider component mobile design end */

