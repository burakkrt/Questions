import MenuItems from './menuItems.js';
import QuestionObject from './questionObject.js';
import Message from './message.js';
import CreateCheck from './createCheck.js';
import questionDOM from './questionDOM.js';

// Show functions to window
window.createdQuestions = createdQuestions;

// Menu Item Created
const menuElement = document.querySelector('#menuContent');
MenuItems(menuElement);

// Created Question and Export to DOM
const contentElement = document.querySelector('#questionContent');
function createdQuestions(questionTitle) {
    const checkResult = CreateCheck(questionTitle);
    if (checkResult.check) {
        QuestionObject(questionTitle, checkResult.questionNumber, checkResult.type);
    }
}

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
