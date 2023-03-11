import removeLocalStorage from './removeLocalStorage.js';

function resultAnswerTurkish(selectedObject) {
    if (selectedObject.answerTurkish !== null && selectedObject.answerTurkish !== '') {
        return `
          <div class="opacity-60">
            <span class="font-medium">Turkish :</span>
            <p class="inline">${selectedObject.answerTurkish}</p>
          </div>
        `;
    }
    return '';
}

export default function questionVisibleAnswer(objectId) {
    const selectedObject = JSON.parse(localStorage.getItem('questions')).filter(element => {
        return element.objectId === objectId;
    })[0];

    let newSubElement = `
    ${resultAnswerTurkish(selectedObject)}
        <div class="my-1">
            <span class="font-semibold text-green-400">Correct answer :</span>
            <p class="inline">
                ${selectedObject.answer}
            </p>
        </div>
        
    `;

    document.getElementById(`resultDiv${selectedObject.objectId}`).innerHTML = '';
    document.getElementById(`resultDiv${selectedObject.objectId}`).insertAdjacentHTML('beforeend', newSubElement);

    document.getElementById(selectedObject.objectId).classList.add('result-visible');

    //This object in local storage has been deleted
    removeLocalStorage(selectedObject.objectId);
}
