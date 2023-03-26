/*
 * Copyright (c) 2023.
 * You can access the source files from my github account. >> https://github.com/burakkrt/Questions-VanillaJavascript
 * Write me for cooperation or questions about the project. >> krtburak@outlook.com
 */

import updatedStatisc from './updatedStatisc.js';

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
    updatedStatisc();
}
