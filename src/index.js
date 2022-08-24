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

const clearContent = () => content.innerHTML = '';

const createNavBar = () => {
    const header = createHtmlElement('header', null, null);
    const buttonHome = createHtmlElement('button', null, 'Home');
    const buttonMenu = createHtmlElement('button', null, 'Menu');
    const buttonContact = createHtmlElement('button', null, 'Contact');

    buttonHome.addEventListener('click', () => createHomePage());
    buttonMenu.addEventListener('click', () => createMenuPage());
    buttonContact.addEventListener('click', () => createContactPage());

    content.appendChild(header);
    header.appendChild(buttonHome);
    header.appendChild(buttonMenu);
    header.appendChild(buttonContact);
};

const createHomePage = () => {
    clearContent();
    createNavBar();
    renderHome();
    console.log('home');
};

const createMenuPage = () => {
    clearContent();
    createNavBar();
    renderMenu();
    console.log('menu');
};

const createContactPage = () => {
    clearContent();
    createNavBar();
    renderMenu();
    console.log('contact');
}

createHomePage();

