import MenuItems, { htmlMenuElements } from './menuItems.js';
import Message from './message.js';

export default function createCheck(questionTitle) {
    let result = { check: false, questionNumber: 0, type: false };

    for (const [key] of Object.entries(htmlMenuElements)) {
        if (key === questionTitle) {
            const inputElement = document.getElementById(htmlMenuElements[key]['question-number-input-id']);
            if (inputElement.value != null && inputElement.value != '') {
                if (Number(inputElement.value) > 0) {
                    if (Number(inputElement.value) <= 50) {
                        result.check = true;
                        result.questionNumber = Number(inputElement.value);
                        if (document.getElementById(htmlMenuElements[key]['just-question-id']).checked === true) {
                            result.type = true;
                        }
                        inputElement.value = '';
                    } else {
                        Message('You can create up to 50 questions at a time.', inputElement);
                        inputElement.value = 50;
                    }
                } else Message('Please enter a positive number', inputElement);
            } else Message('Please enter number of questions', inputElement);
            break;
        }
    }
    // Returns whether the input value is available, the input value and the question type
    return result;
}
