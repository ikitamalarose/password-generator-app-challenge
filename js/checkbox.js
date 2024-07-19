const buttons = document.querySelectorAll('.checkboxStates-button');

export function initializeCheckboxButtons() {

    buttons.forEach(button => {

        button.addEventListener('click', () => {
           toggleButtonDesign(button);
        });

    });


}

function toggleButtonDesign(button) {
    if (button.style.background === "var(--neon-green)") {
        deactivateButton(button);
    } else {
        activateButton(button);
    }
}

function activateButton(button){

    button.style.background="var(--neon-green)";
    button.style.border="none";

    const icon = button.querySelector('.checkboxStates-icon');
    icon.style.visibility = "visible";

}

function deactivateButton(button) {
    button.style.background = "transparent";
    button.style.border = "0.125rem solid var(--almost-white)";

    const icon = button.querySelector('.checkboxStates-icon');
    icon.style.visibility = "hidden";
}

export function getSelectedButtons() {
    const selectedButtons = Array.from(buttons).filter(button => button.style.background === "var(--neon-green)");
    return selectedButtons.length > 0 ? selectedButtons : null;
}