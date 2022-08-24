import { renderHome } from './home';
import { renderMenu } from './menu';

export const content = document.querySelector('.content');

export const createHtmlElement = (type, styleClass, content) => {
    const element = document.createElement(type);
    if(styleClass) {
        element.classList.add(styleClass);
    }
    if(content) {
        element.textContent = content;
    }
    return element;
};

renderHome();

const clearContent = () => content.innerHTML = '';

document.addEventListener('click', e => {
    if(e.target.textContent === 'Home') {
        clearContent();
        renderHome();
        console.log('success');
    }
    if(e.target.textContent === 'Menu') {
        clearContent();
        renderMenu();
        console.log('menu');
    }
    if(e.target.textContent === 'Contact') {
        console.log('contact');
    }
});
