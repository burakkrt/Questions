export default function setLocalStroage(newObject, state, userAnswer = null) {
    let localStroageObjects = [];

    if (state) {
        newObject.resultState = state;
        JSON.parse(localStorage.getItem('questions')).map(object => {
            if (object.objectId === newObject.objectId) {
                localStroageObjects.push(newObject);
            } else {
                localStroageObjects.push(object);
            }
        });
        localStorage.setItem('questions', JSON.stringify(localStroageObjects));
    } else if (state === false) {
        newObject.resultState = state;
        newObject.userAnswer = userAnswer;
        JSON.parse(localStorage.getItem('questions')).map(object => {
            if (object.objectId === newObject.objectId) {
                localStroageObjects.push(newObject);
            } else {
                localStroageObjects.push(object);
            }
        });
        localStorage.setItem('questions', JSON.stringify(localStroageObjects));
    } else console.log('An error occurred while updating objects in Local Stroage.');

    console.log(JSON.parse(localStorage.getItem('questions')));
}
