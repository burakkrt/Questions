const messageBox = document.getElementById('messageBox');
const messageContent = messageBox.children[0];
let timeoutId;

function focusInput(element) {
    if (element) {
        element.focus();
        element.select();
    }
}

export default function Message(value, element) {
    messageContent.textContent = value;
    focusInput(element);
    if (messageBox.className.includes('passive')) {
        messageBox.classList.replace('passive', 'active');
        timeoutId = setTimeout(() => {
            if (messageBox.className.includes('active')) messageBox.classList.replace('active', 'passive');
        }, 2000);
    } else {
        clearTimeout(timeoutId);
        setTimeout(() => {
            if (messageBox.className.includes('active')) messageBox.classList.replace('active', 'passive');
        }, 2000);
        console.log('temizlendi');
    }
}
