document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');
    const inputField = document.querySelector('.output input');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = key.querySelector('p').innerText;
            inputField.value += keyValue;
        });
    });

    document.addEventListener('keydown', function (event) {
        const pressedKey = event.key.toUpperCase();
        const keyElement = Array.from(keys).find(key => key.textContent.trim() === pressedKey);

        if (keyElement) {
            const keyValue = keyElement.querySelector('p').innerText;
            inputField.value += keyValue;
        } else if (pressedKey === ' ') {
            addSpace();
        } else if (pressedKey === 'Backspace') {
            inputField.value = inputField.value.substring(0, inputField.value.length - 1);
        }
    });
});

function addSpace() {
    const outputInput = document.querySelector('.output input');
    outputInput.value += ' ';
}

window.onload = function () {
    const inputField = document.querySelector('.output input');
    inputField.focus();
};
