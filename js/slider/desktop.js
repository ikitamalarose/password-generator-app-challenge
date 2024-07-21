import { initState } from "../strength_state.js";

const sliderButton = document.getElementById('slider-button');
const sliderBar = document.getElementById('slider-bar');
const sliderLength = document.getElementById('slider-length');
const sliderBody = document.querySelector('.sliderComponent__body');

const maxCharacterLength = 20; // Maximum character length
const buttonWidth = 1.75 * 15; // Convert rem to pixels (assuming 1rem = 16px)

let isDragging = false;

export function initSliderDesktop(){
    sliderButton.addEventListener('mousedown', () => {
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    
    });
}

/* slider component mobile design start */


function onMouseMove(event) {
    if (!isDragging) return;

    const sliderRect = sliderBody.getBoundingClientRect();

    let newLeft = event.clientX - sliderRect.left;
    
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

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    initState(sliderLength.textContent);
}

export function getSliderLength() {
    return sliderLength.textContent;
}
/* slider component mobile design end */



