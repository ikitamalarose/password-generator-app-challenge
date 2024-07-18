const states = document.querySelectorAll('.strength__state');
const indicator = document.querySelector('.strengthComponent__indicator');

const colors = {
    red: "var(--red)",
    orange: "var(--orange)",
    yellow: "var(--yellow)",
    green: "var(--neon-green)"
}

export function initState() {

    states.forEach(state => {

        state.addEventListener('click', () => {

            handleStateClick(state);

        });

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

