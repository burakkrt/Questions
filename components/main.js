import MenuItems from './menuItems.js';
import QuestionObject from './questionObject.js';
import Message from './message.js';
import CreateCheck from './createCheck.js';
import questionDOM from './questionDOM.js';
import questionResultCheck from './questionResultCheck.js';

// Show functions to window
window.createdQuestions = createdQuestions;
window.resultCheck = resultCheck;

// Menu Item Created
const menuElement = document.querySelector('#menuContent');
MenuItems(menuElement);

// Created Question and Export to DOM
const contentElement = document.getElementById('questionContent');
function createdQuestions(questionTitle) {
    const checkResult = CreateCheck(questionTitle);
    if (checkResult.check) {
        QuestionObject(questionTitle, checkResult.questionNumber, checkResult.type, contentElement);
    }
}

// Questios Local Stroage Export Dom Content
// questionDOM(JSON.parse(localStorage.getItem('questions')), contentElement);

function resultCheck(objectId) {
    let objectIs;
    for (let object of JSON.parse(localStorage.getItem('questions'))) {
        if (objectId === object.objectId) {
            objectIs = object;
            break;
        }
    }

    const questionResult = questionResultCheck(objectIs, document.getElementById(`input${objectId}`).value);
    console.log(questionResult);
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

// <!-- col -->
// <div class="rounded-md bg-slate-300">
//     <div class="flex h-full flex-col">
//         <div
//             class="flex flex-row items-center justify-between rounded-t-md bg-zinc-700 p-2 text-stone-200"
//         >
//             <div>
//                 <p>Question No</p>
//             </div>
//             <div>
//                 <button class="mr-2">
//                     <i class="fa-sharp fa-solid fa-bolt mr-2"></i>Cevabı Göster
//                 </button>
//                 <button><i class="fa-solid fa-circle-xmark mr-2"></i>Sil</button>
//             </div>
//         </div>
//         <div class="flex-auto p-2">
//             <div class="flex h-full flex-col justify-between gap-y-2">
//                 <div>
//                     <span>Question :</span>
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, et.</p>
//                     <div class="">
//                         <p class="">Lorem ipsum dolor sit amet consectetur.</p>
//                     </div>
//                 </div>
//                 <div>
//                     <span>Answer :</span>
//                     <input class="block w-full px-1" type="text" />
//                     <button class="mt-2 rounded-md bg-slate-400 px-4 py-1.5" onclick="">
//                         Test
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
