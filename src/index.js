import { renderHome } from './home';
import { renderMenu } from './menu';

export const content = document.querySelector('.content');

export function createHtmlElement(type, styleClass, content) {
    const element = document.createElement(type);
    if(styleClass) {
        element.classList.add(styleClass);
    }
    if(content) {
        element.textContent = content;
    }
    return element;
}

renderHome();

function clearContent() {
    content.innerHTML = '';
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if(button.textContent === 'Home') {
            clearContent();
            renderHome();
            console.log('success');
        }
        if(button.textContent === 'Menu') {
            clearContent();
            renderMenu();
        }
        if(button.textContent === 'Menu') {
            
        }
    })
})
