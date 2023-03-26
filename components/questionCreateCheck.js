/*
 * Copyright (c) 2023.
 * You can access the source files from my github account. >> https://github.com/burakkrt/Questions-VanillaJavascript
 * Write me for cooperation or questions about the project. >> krtburak@outlook.com
 */

import Message from './message.js';

function falseState(messageContent = String, focusElement) {
    if (focusElement.value > 50) focusElement.value = 50;

    if (focusElement.value == '') {
        if (focusElement.className.includes('bg-slate-100')) {
            focusElement.classList.replace('bg-slate-100', 'bg-green-300');
            setTimeout(() => {
                if (focusElement.className.includes('bg-green-300'))
                    focusElement.classList.replace('bg-green-300', 'bg-slate-100');
            }, 1000);
        }
    }

    focusElement.focus();
    focusElement.select();
    Message(messageContent);
}

export default function createCheck(questionTypeSelect, questionNumbersInput) {
    let result = {
        check: false,
        questionNumber: questionNumbersInput.value,
        questionTitle: questionTypeSelect.value,
        type: false,
    };

    if (questionTypeSelect.value !== '') {
        if (questionNumbersInput.value !== '') {
            if (questionNumbersInput.value > 0) {
                if (questionNumbersInput.value <= 50) {
                    result.check = true;
                } else falseState('You can create up to 50 questions.', questionNumbersInput);
            } else falseState('Please enter a positive number.', questionNumbersInput);
        } else falseState('Specify the number of questions you want to create.', questionNumbersInput);
    } else {
        questionTypeSelect.focus();
        if (questionTypeSelect.className.includes('bg-slate-100')) {
            questionTypeSelect.classList.replace('bg-slate-100', 'bg-green-300');
            setTimeout(() => {
                if (questionTypeSelect.className.includes('bg-green-300'))
                    questionTypeSelect.classList.replace('bg-green-300', 'bg-slate-100');
            }, 1000);
        }
        Message('First you have to choose the question category.');
    }
    return result;
}
