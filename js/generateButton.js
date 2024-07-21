import { getSelectedButtons } from "./checkbox.js";
import { getSliderLength } from "./slider/mobile.js";
import { generatePassword } from './passwordGenerator.js';


const generateButton = document.getElementById('generate-button');

const errorMessage = document.querySelector('.error-message');

const headerTextField = document.querySelector('.header-textField');

let checkboxOptions = {
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false
};

export function initGenerateButton() {
    generateButton.addEventListener('click', handleGenerateButtonClick);
}

function handleGenerateButtonClick() {
    const selectedCheckboxes = getSelectedButtons();

    const sliderLength = getSliderLength();

    if (isValidSliderLength(sliderLength) && hasValidCheckboxSelections(selectedCheckboxes)) {

        updateCheckboxOptions(selectedCheckboxes);
        hideErrorMessage();

        const allCharacters = generatePassword(getCheckboxChoices()).join('');
        let password = '';

        for (let i = 0; i < sliderLength; i++) {
            let randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }
        updateHeaderTextField(password);
    } else {
        showErrorMessage();
    }
}

function isValidSliderLength(length) {
    return length > 0;
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
    errorMessage.textContent = 'Select at least one option and character length > 0.';
    errorMessage.style.display = 'block';
}

function hideErrorMessage() {
    errorMessage.style.display = 'none';
}

export function getCheckboxChoices() {
    return checkboxOptions;
}

function updateHeaderTextField(text) {
    const headerTextField = document.querySelector('.header-textField');
    headerTextField.textContent = text;

    if (text) {
        headerTextField.removeAttribute('data-placeholder');
    }
}
