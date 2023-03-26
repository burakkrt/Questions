/*
 * Copyright (c) 2023.
 * You can access the source files from my github account. >> https://github.com/burakkrt/Questions-VanillaJavascript
 * Write me for cooperation or questions about the project. >> krtburak@outlook.com
 */

import Message from './message.js';
import updatedStatisc from './updatedStatisc.js';

export default function removeLocalStorage(selectedObjectId) {
    let localStroageObjects = [];

    JSON.parse(localStorage.getItem('questions')).map(object => {
        if (selectedObjectId !== object.objectId) {
            localStroageObjects.push(object);
        }
    });

    localStorage.setItem('questions', JSON.stringify(localStroageObjects));
    Message(`Question ${selectedObjectId} has been deleted.`);
    console.log('This object in local storage has been deleted');
    updatedStatisc();
}
