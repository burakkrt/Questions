import setLocalStroage from './setLocalStroage.js';

export function setQuestionDOM(selectObjectId = Number, trueAnswer = String, state = Boolean) {
    if (state) {
    } else {
        let element = `
            <div class="mt-1">
                <span class="font-semibold text-green-400">Correct answer :</span>
                <p class="inline">
                    ${trueAnswer}
                </p>
            </div>
        `;
        document.getElementById(`resultDiv${selectObjectId}`).insertAdjacentHTML('beforeend', element);
    }

    // Question DOM False or True Style
    document.getElementById(selectObjectId).classList.add(state); //Css .question-box.false class
}

export default function questionResultCheck(selectObjectId, userValue) {
    let selectObject;
    for (let object of JSON.parse(localStorage.getItem('questions'))) {
        if (selectObjectId === object.objectId) {
            selectObject = object;
            break;
        }
    }

    let modifiedUserAnswer = userValue.replace(/[ !"#$%&'()*+,-./:;<=>?@[_`{|}~']/g, '').toLowerCase();
    let trueAnswer = selectObject.answer.replace(/[ !"#$%&'()*+,-./:;<=>?@[_`{|}~']/g, '').toLowerCase();

    if (modifiedUserAnswer === trueAnswer) {
        setLocalStroage(selectObject, true);
        setQuestionDOM(selectObject.objectId, selectObject.answer, true);
        return true;
    } else {
        setLocalStroage(selectObject, false, userValue);
        setQuestionDOM(selectObject.objectId, selectObject.answer, false);
        return false;
    }
}
