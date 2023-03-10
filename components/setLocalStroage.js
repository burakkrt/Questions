export default function setLocalStroage(newObject, state, userAnswer = null) {
    let localStroageObjects = [];

    newObject.resultState = state;
    if (userAnswer) newObject.userAnswer = userAnswer;

    JSON.parse(localStorage.getItem('questions')).map(object => {
        if (object.objectId === newObject.objectId) {
            localStroageObjects.push(newObject);
        } else {
            localStroageObjects.push(object);
        }
    });

    //Update Local Storage
    localStorage.setItem('questions', JSON.stringify(localStroageObjects));
    console.log('Updated Local Storage');
    console.log(JSON.parse(localStorage.getItem('questions')));
}
