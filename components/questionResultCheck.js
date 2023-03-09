import setLocalStroage from './setLocalStroage.js';

export default function questionResultCheck(thisObject, userValue) {
    // console.log(object);
    // console.log(userValue);
    // const stroageObjects = JSON.parse(localStorage.getItem('questions'));

    // User answer check
    let modifiedUserAnswer = userValue.replace(/[ !"#$%&'()*+,-./:;<=>?@[_`{|}~']/g, '').toLowerCase();
    let trueAnswer = thisObject.answer.replace(/[ !"#$%&'()*+,-./:;<=>?@[_`{|}~']/g, '').toLowerCase();

    if (trueAnswer === modifiedUserAnswer) {
        setLocalStroage(thisObject, true);
        return true;
    } else {
        setLocalStroage(thisObject, false, userValue);
        document.getElementById(thisObject.objectId).classList.add('false'); //Css .question-box.false class
        let element = `
            <div class="mt-1 bg-red-900 p-2">
                <span class="font-semibold text-green-400">Correct answer :</span>
                <p class="inline">
                    2Selam Kaira. Ben Burak. Tanıştığımıza memnun oldum. (Pilisdt tu mit yu)
                </p>
            </div>
        `;
        document.getElementById(`resultDiv${thisObject.objectId}`).insertAdjacentHTML('beforeend', element);
        return false;
    }
}
