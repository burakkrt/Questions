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
        return false;
    }
}
