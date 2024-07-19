import { getSelectedButtons } from "./checkbox.js";
import { getSelectedState } from "./strength_state.js";
import { getSliderLength } from "./slider.js";

const generateButton = document.getElementById('generate-button');

export function initGenerateButton() {

    generateButton.addEventListener('click', () => {
        const checkboxChoices = getSelectedButtons();
        const selectedState = getSelectedState();
        const currentSliderLength = getSliderLength();

        console.log("slider length : ", currentSliderLength);
        console.log("selected state : ", selectedState);
        console.log("choix checkbox  : ");

        checkboxChoices.forEach(checkbox => {
            console.log();
            console.log(checkbox.id);
        });
    });
}
