import QuestionObject from './questionObject.js';
import CreateCheck from './questionCreateCheck.js';
import questionDOM from './questionDOM.js';
import questionResultCheck from './questionResultCheck.js';
import questionVisibleAnswer from './questionVisibleAnswer.js';
import Message from './message.js';
import removeLocalStorage from './removeLocalStorage.js';
import updatedStatisc from './updatedStatisc.js';

// Show functions to window
window.createdQuestions = createdQuestions;
window.resultCheck = resultCheck;
window.visibleAnswer = visibleAnswer;
window.deleteQuestion = deleteQuestion;
window.keyPressInput = keyPressInput;
window.showQuestionsFilter = showQuestionsFilter;
window.deleteAllQuestions = deleteAllQuestions;
// Element variables
const menuElement = document.querySelector('#menuContent');
const questionContentElement = document.getElementById('questionContent');
const mainContentElement = document.getElementById('content');
// Created Question and Export to DOM
function createdQuestions(questionTypeSelect, questionNumbersInput) {
    const checkResult = CreateCheck(questionTypeSelect, questionNumbersInput);
    if (checkResult.check) {
        QuestionObject(checkResult.questionTitle, checkResult.questionNumber, checkResult.type, questionContentElement);
        questionNumbersInput.value = '';
        questionTypeSelect.value = '';
    }
}
// Questios Local Stroage Export Dom Content
questionDOM(JSON.parse(localStorage.getItem('questions')), questionContentElement);
// User value check
function resultCheck(objectId) {
    const userValue = document.getElementById(`input${objectId}`).value;
    questionResultCheck(objectId, userValue);
}
// User answer ınput keypress enter event
function keyPressInput(event, objectId) {
    if (event.key === 'Enter') {
        resultCheck(objectId);
        document.activeElement.blur();
    }
}
// visible question answer and delete local storage
function visibleAnswer(objectId) {
    questionVisibleAnswer(objectId);
}
// delete question local storage
function deleteQuestion(objectId) {
    removeLocalStorage(objectId);

    if (document.getElementById(objectId)) {
        if (document.getElementById(objectId)) {
            document.getElementById(objectId).classList.add('pointer-events-none');
            let thisQuestion = document.getElementById(objectId);
            let countOpacity = 9;

            const opacityInterval = setInterval(() => {
                if (countOpacity <= 0) {
                    document.getElementById('questionContent').removeChild(thisQuestion);
                    clearTimeout(opacityInterval);
                } else {
                    document.getElementById(objectId).style = `opacity : 0.${countOpacity}`;
                    countOpacity--;
                }
            }, 65);
        }
    }
}

function showQuestionsFilter(selectedView) {
    if (JSON.parse(localStorage.getItem('questions'))) {
        switch (selectedView.value) {
            case 'view-all-questions':
                questionDOM(JSON.parse(localStorage.getItem('questions')), questionContentElement, 'all');
                break;
            case 'view-unsolved':
                questionDOM(JSON.parse(localStorage.getItem('questions')), questionContentElement, null);
                break;
            case 'view-wrong':
                questionDOM(JSON.parse(localStorage.getItem('questions')), questionContentElement, false);
                break;
            case 'view-correct':
                questionDOM(JSON.parse(localStorage.getItem('questions')), questionContentElement, true);
                break;
        }
    } else Message('First you have to create a question.');
}

function deleteAllQuestions() {
    if (JSON.parse(localStorage.getItem('questions'))) {
        if (confirm('Permanently delete all questions?\n(Deleted questions cannot be restored.)')) {
            localStorage.removeItem('questions');
            questionDOM(JSON.parse(localStorage.getItem('questions')), questionContentElement);
            updatedStatisc();
            Message('All questions have been deleted successfully.');
        } else {
            Message('The deletion has been cancelled.');
        }
    } else Message('First you have to create a question.');
}

updatedStatisc();
