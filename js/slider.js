const sliderButton = document.getElementById('slider-button');
const sliderBar = document.getElementById('slider-bar');
const sliderLength = document.getElementById('slider-length');
const sliderBody = document.querySelector('.sliderComponent__body');

const maxCharacterLength = 20; // Maximum character length
const buttonWidth = 1.75 * 16; // Convert rem to pixels (assuming 1rem = 16px)

let isDragging = false;

export function initSliderMobile(){
    sliderButton.addEventListener('touchstart', () => {
        isDragging = true;
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    
    
    });
}

/* slider component mobile design start */


function onTouchMove(event) {
    if (!isDragging) return;

    const sliderRect = sliderBody.getBoundingClientRect();

    let newLeft = event.touches[0].clientX - sliderRect.left;
    
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > sliderRect.width - buttonWidth) {
        newLeft = sliderRect.width - buttonWidth;
    }

    sliderButton.style.left = `${newLeft}px`;
    const percentage = (newLeft / (sliderRect.width- buttonWidth) )* 100;

    sliderBar.style.width = `${percentage}%`;

    // Calculate character length based on slider position
    const characterLength = Math.round((newLeft / (sliderRect.width - buttonWidth)) * maxCharacterLength);
    
    // Update the slider length display
    sliderLength.textContent = characterLength;
}

function onTouchEnd() {
    isDragging = false;
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
}
/* slider component mobile design end */



