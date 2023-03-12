import Message from './message.js';

function falseState(messageContent = String, focusElement) {
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
    } else Message('First you have to choose the question category.');
    return result;
}
