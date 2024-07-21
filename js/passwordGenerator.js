
// Définir les ensembles de caractères
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

const characters = ['lowercase', 'uppercase', 'symbol', 'number'];

/* const checkboxChoices = getCheckboxChoices();
*/

export function generatePassword(checkboxChoices) {
    let password = '';
    let charset = [];


    for (const key in checkboxChoices) {

        if (checkboxChoices[key]) {

            console.log("generer");
            choiceOfCharacters(key, charset);
        }
    }
    return charset;
}

function choiceOfCharacters(character, charset) {

    if (character === "lowercase") {
        charset.push(lowercaseLetters);
    } else if (character === "uppercase") {
        charset.push(uppercaseLetters);
    } else if (character === "number") {
        charset.push(numbers);
    } else if (character === "symbol") {
        charset.push(symbols);
    }

}