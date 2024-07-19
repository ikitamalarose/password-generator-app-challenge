import { getCheckboxChoices } from './generateButton';

// Définir les ensembles de caractères
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

const checkboxChoices = getCheckboxChoices();

// Fonction pour générer un mot de passe
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols, strength) {
    let charset = '';
    let password = '';

    // Construire le charset en fonction des options
    if (includeLowercase) charset += lowercaseLetters;
    if (includeUppercase) charset += uppercaseLetters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

   
    // Définir les exigences de force du mot de passe
    if (strength === 'too_weak') {
        length = Math.max(4, length); // Minimum de 4 caractères pour un mot de passe trop faible
    } else if (strength === 'weak') {
        length = Math.max(6, length); // Minimum de 6 caractères pour un mot de passe faible
    } else if (strength === 'medium') {
        length = Math.max(8, length); // Minimum de 8 caractères pour un mot de passe moyen
    } else if (strength === 'strong') {
        length = Math.max(12, length); // Minimum de 12 caractères pour un mot de passe fort
    }

    // Générer le mot de passe
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

// Exemple d'utilisation
const length = 10; // Nombre de caractères souhaité
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const strength = 'medium'; // Choix de la force du mot de passe

const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols, strength);
console.log('Generated Password:', password);
