import ObjectsCreated, { questionObjects } from './_objectsCreated.js';

ObjectsCreated('numbers-alphabet', 4, true);

console.log(questionObjects);

// window.clickFunc = clickFunc;

document.querySelector('#burger-menu').addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    const menuConttent = document.querySelector('#menuContent');
    const burgerMenu = document.querySelector('#burger-menu');
    console.log(menuConttent.parentElement);

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
