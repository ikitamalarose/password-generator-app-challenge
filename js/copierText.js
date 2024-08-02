const headerCopiedText = document.getElementById('header-copied-text');
export function copyText() {
    const copiedTextButton = document.getElementById('header-icon-button');
    const headerTextField = document.getElementById('header-textField');

    copiedTextButton.addEventListener('click', () => {
        const textToCopy = headerTextField.textContent;

        if (isEmpty(textToCopy)) {
            copyToClipboard(textToCopy);
            showCopiedText();
        }

    });
}


function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(() => { console.log(`${textToCopy} was copied`) })
        .catch(() => { console.error("Copy falied") });
}

function showCopiedText() {
    headerCopiedText.style.visibility = "visible";
    setTimeout(() => {
        headerCopiedText.style.visibility = "hidden";
    }, 1000);
}

function isEmpty(textField) {
    return textField.trim() !== "" ? true : false;

}
