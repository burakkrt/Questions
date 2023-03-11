import MenuItems from './menuItems.js';
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
// Menu Item Created
MenuItems(menuElement);
// Created Question and Export to DOM
function createdQuestions(questionTitle) {
    const checkResult = CreateCheck(questionTitle);
    if (checkResult.check) {
        QuestionObject(questionTitle, checkResult.questionNumber, checkResult.type, questionContentElement);
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
            let thisQuestion = document.getElementById(objectId);
            let countOpacity = 9;

            const opacityInterval = setInterval(() => {
                if (countOpacity <= 0) {
                    document.getElementById('questionContent').removeChild(thisQuestion);
                    clearTimeout(opacityInterval);
                } else {
                    document.getElementById(objectId).style = `opacity : 0.${countOpacity}`;
                    countOpacity--;
                    console.log(countOpacity);
                }
            }, 65);
        }
    }
}

function showQuestionsFilter(selectedView) {
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
}

function deleteAllQuestions() {
    localStorage.removeItem('questions');
}

updatedStatisc();

document.querySelector('#burgerMenu').addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    const menuConttent = document.querySelector('#menuContent');
    const burgerMenu = document.querySelector('#burgerMenu');

    if (menu.className.includes('max-w-md')) {
        let newClass = menu.className.replace('max-w-md', 'w-16');
        menu.classList = newClass;
    } else if (menu.className.includes('w-16')) {
        let newClass = menu.className.replace('w-16', 'max-w-md');
        menu.classList = newClass;
    }

    if (!menuConttent.getAttribute('class').includes('hidden')) {
        menuConttent.classList.add('hidden');
    } else menuConttent.classList.remove('hidden');

    if (burgerMenu.parentElement.className.includes('text-right')) {
        let newClass = burgerMenu.parentElement.className.replace('text-right', 'text-center');
        burgerMenu.parentElement.classList = newClass;
        burgerMenu.parentElement.classList.remove('pr-5');
    } else {
        let newClass = burgerMenu.parentElement.className.replace('text-center', 'text-right');
        burgerMenu.parentElement.classList = newClass;
        burgerMenu.parentElement.classList.add('pr-5');
    }
});
