import { getSelectedButtons } from "./checkbox.js";
import { getSelectedState } from "./strength_state.js";
import { getSliderLength } from "./slider.js";

const generateButton = document.getElementById('generate-button');

const errorMessage = document.querySelector('.error-message');

let checkboxOptions = {
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false
};

/* export function initGenerateButton() {

    generateButton.addEventListener('click', () => {
        const checkboxChoices = getSelectedButtons();
        const selectedState = getSelectedState();
        const currentSliderLength = getSliderLength();

        if (isValidSliderLength(currentSliderLength) && isValidState(selectedState) && hasValidCheckboxSelections(checkboxChoices)) {
            hideErrorMessage();

            console.log("slider length : ", currentSliderLength);
            console.log("selected state : ", selectedState);
            console.log("choix checkbox  : ", checkboxOptions);


            checkboxChoices.forEach(checkbox => {

                for (const key in checkboxOptions) {

                    if (checkbox.id === key) {

                        checkboxOptions[key] = true;
                    }
                }

            });
            console.log("tableau : ",checkboxOptions);
        } else {
            showErrorMessage();
        }

    });
} */
    export function initGenerateButton() {
        generateButton.addEventListener('click', handleGenerateButtonClick);
    }
    

function handleGenerateButtonClick() {
    const selectedCheckboxes = getSelectedButtons();
    const selectedState = getSelectedState();
    const sliderLength = getSliderLength();

    if (isValidSliderLength(sliderLength) && isValidState(selectedState) && hasValidCheckboxSelections(selectedCheckboxes)) {
        updateCheckboxOptions(selectedCheckboxes);
        hideErrorMessage();

        console.log("Slider length: ", sliderLength);
        console.log("Selected state: ", selectedState);
        console.log("Checkbox options: ", checkboxOptions);
        console.log("Options array: ", checkboxOptions);
    } else {
        showErrorMessage();
    }
}

function isValidSliderLength(length) {
    return length !== 0;
}

function isValidState(state) {
    return state !== null;
}

function hasValidCheckboxSelections(choices) {
    return choices !== null;
}


function updateCheckboxOptions(selectedCheckboxes) {
    // Reset options
    Object.keys(checkboxOptions).forEach(option => checkboxOptions[option] = false);

    // Update options based on selected checkboxes
    selectedCheckboxes.forEach(checkbox => {
        if (checkboxOptions.hasOwnProperty(checkbox.id)) {
            checkboxOptions[checkbox.id] = true;
        }
    });
}

function showErrorMessage() {
    errorMessage.textContent = 'You must select at least one of each option.';
    errorMessage.style.display = 'block';
}

function hideErrorMessage() {
    errorMessage.style.display = 'none';
}

export function getCheckboxChoices(){
    return checkboxOptions;
}