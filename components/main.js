import MenuItems, { htmlMenuElements } from './menuItems.js';
import QuestionsCreated, { questionObjects } from './questionsCreated.js';
import Message from './message.js';
import createCheck from './createCheck.js';

// Menu Item Created
const menuElement = document.querySelector('#menuContent');
MenuItems(menuElement);

const contentElement = document.querySelector('#questionContent');
function createdQuestions(questionTitle) {
    const checkResult = createCheck(questionTitle);
    if (checkResult.check) {
        QuestionsCreated(contentElement, questionTitle, checkResult.questionNumber, checkResult.type);
    }
}

window.createdQuestions = createdQuestions;

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

// for (const [key] of Object.entries(htmlMenuElements)) {
//   if (key === questionType) {
//       const inputElement = document.getElementById(htmlMenuElements[key]['question-number-input-id']);
//       if (inputElement.value > 0 && inputElement.value != '' && inputElement.value != null) {
//           if (inputElement.value < 50) {
//               // success question created
//               if (document.getElementById(htmlMenuElements[key][`just-question-id`]).checked) {
//                   QuestionsCreated(contentElement, key, inputElement.value, true);
//               } else QuestionsCreated(contentElement, key, inputElement.value, false);
//           } else {
//               inputElement.value = '';
//               inputElement.setAttribute('placeholder', 'Max. 50');
//               if (!inputElement.className.includes('border-2 border-red-800')) {
//                   inputElement.classList.add('border-2', 'border-red-800');
//               }
//           }
//       } else {
//           inputElement.value = '';
//           inputElement.setAttribute('placeholder', 'only positive');
//           if (!inputElement.className.includes('border-2 border-red-800')) {
//               inputElement.classList.add('border-2', 'border-red-800');
//           }
//       }
//   }
// }
