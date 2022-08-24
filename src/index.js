import { renderHome } from "./home";

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
