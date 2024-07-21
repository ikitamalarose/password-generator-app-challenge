const states = document.querySelectorAll('.strength__state');
const indicator = document.querySelector('.strengthComponent__indicator');

const colors = {
    red: "var(--red)",
    orange: "var(--orange)",
    yellow: "var(--yellow)",
    green: "var(--neon-green)"
}

let selectedState = null;

export function initState(strengthLenght) {

    states.forEach(state => {

        if (state.id === getPasswordStrength(strengthLenght)) {
            handleStateClick(state);
        }
    });
}

function handleStateClick(state) {

    const colorClasses = Object.keys(colors);

    for (let index = 0; index < states.length; index++) {

        if (states[index].id === state.id) {

            colorClasses.forEach(color => {

                if (state.classList.contains(`strength__state-${color}`)) {
                    resetAllStates();
                    applyColorToStates(state, index, colors[color]);
                    updateIndicatorText(state.id);
                    selectedState = state.id;
                }

            });

            break;
        }
    }
}

function formatStateId(stateId) {
    return stateId === "too_weak" ? "too weak!" : stateId;
}

function isStateSelected(state) {
    return state.style.border === "0px";
}

function applyColorToStates(state, position, color) {

    if (!isStateSelected(state)) {

        for (let index = 0; index < states.length; index++) {

            if (index <= position) {

                states[index].style.border = "0";
                states[index].style.backgroundColor = color;
            } else {
                states[index].style.border = "1px solid var(--almost-white)";
                states[index].style.backgroundColor = "transparent";
            }
        }
    }

}

function resetAllStates() {

    states.forEach(state => {
        state.style.backgroundColor = "transparent";
        state.style.border = "1px solid var(--almost-white)";
    });
}

function updateIndicatorText(stateId) {
    indicator.textContent = formatStateId(stateId).toUpperCase();
}

function getPasswordStrength(length) {
    if (length >= 1 && length <= 5) {
        return 'too_weak';
    } else if (length >= 6 && length <= 8) {
        return 'weak';
    } else if (length >= 9 && length <= 12) {
        return 'medium';
    } else if (length >= 13 && length <= 20) {
        return 'strong';
    } else {
        resetAllStates();
        indicator.textContent = '';
    }
}

export function getSelectedState() {
    return selectedState;
}
