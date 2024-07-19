import { getSelectedButtons } from "./checkbox.js";
import { getSelectedState } from "./strength_state.js";
import { getSliderLength } from "./slider.js";

const generateButton = document.getElementById('generate-button');

const errorMessage = document.querySelector('.error-message');

export function initGenerateButton() {

    generateButton.addEventListener('click', () => {
        const checkboxChoices = getSelectedButtons();
        const selectedState = getSelectedState();
        const currentSliderLength = getSliderLength();

        if (isSliderLengthValid(currentSliderLength) && isStateSelectedValid(selectedState) && isCheckboxChoicesValid(checkboxChoices)) {
            hideErrorMessage();
            
            console.log("slider length : ", currentSliderLength);
            console.log("selected state : ", selectedState);
            console.log("choix checkbox  : ");

            checkboxChoices.forEach(checkbox => {
                console.log(checkbox.id);
            });
        } else {
            showErrorMessage();
        }

    });
}


function isSliderLengthValid(length) {
    return length !== 0;
}

function isStateSelectedValid(state) {
    return state !== null;
}

function isCheckboxChoicesValid(choices) {
    return choices !== null;
}

function showErrorMessage() {
    errorMessage.textContent = 'You must select at least one of each option.';
    errorMessage.style.display = 'block';
}

function hideErrorMessage(){
    errorMessage.style.display = 'none';
}