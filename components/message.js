/*
 * Copyright (c) 2023.
 * You can access the source files from my github account. >> https://github.com/burakkrt/Questions-VanillaJavascript
 * Write me for cooperation or questions about the project. >> krtburak@outlook.com
 */

const messageBox = document.getElementById('messageBox');
let timeoutId;

function focusInput(element) {
    if (element) {
        element.focus();
        element.select();
    }
}

export default function Message(value, element) {
    messageBox.innerHTML = `<span><i class="fa-sharp fa-solid fa-circle-exclamation mr-2"></i>${value}</span>`;
    focusInput(element);
    if (messageBox.className.includes('active')) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (messageBox.className.includes('active')) messageBox.classList.remove('active');
        }, 2000);
    } else {
        messageBox.classList.add('active');
        timeoutId = setTimeout(() => {
            if (messageBox.className.includes('active')) messageBox.classList.remove('active');
        }, 2000);
    }
}
