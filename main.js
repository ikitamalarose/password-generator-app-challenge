import { initSliderMobile, getSliderLength } from "./js/slider.js";
import { initializeCheckboxButtons, getSelectedButtons } from "./js/checkbox.js";
import { initState, getSelectedState } from "./js/strength_state.js";

const generateButton = document.getElementById('generate-button');

initSliderMobile();
initializeCheckboxButtons();
initState();


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
