// copyText.js
export function copyText() {
    const copiedTextButton = document.getElementById('header-copied-text');
    const headerTextField = document.getElementById('header-textField');

    copiedTextButton.addEventListener('click', () => {
        const textToCopy = headerTextField.textContent;

        copyToClipboard(textToCopy);
        /*  navigator.clipboard.writeText(textToCopy).then(() => {
             console.log('Text copied to clipboard: ', textToCopy);
         }).catch(err => {
             console.error('Could not copy text: ', err);
         }); */
    });
}

function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(() => { console.log(`${textToCopy} was copied`) })
        .catch(() => { console.error("Copy falied") });
}
