const headerCopiedText = document.getElementById('header-copied-text');
// copyText.js
export function copyText() {
    const copiedTextButton = document.getElementById('header-icon-button');
    const headerTextField = document.getElementById('header-textField');

    copiedTextButton.addEventListener('click', () => {
        const textToCopy = headerTextField.textContent;

        copyToClipboard(textToCopy);
        showCopiedText();
        hideCopiedText();
    
    });
}


function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(() => { console.log(`${textToCopy} was copied`) })
        .catch(() => { console.error("Copy falied") });
}

function showCopiedText() {
    headerCopiedText.style.visibility = "visible";
}

function hideCopiedText(){
    headerCopiedText.visibility="hidden";
}