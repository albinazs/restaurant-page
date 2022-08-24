import { content, createHtmlElement } from './index';

export const renderMenu = () => {
    const header = createHtmlElement('header', null, null);
    const buttonHome = createHtmlElement('button', null, 'Home');
    const buttonMenu = createHtmlElement('button', null, 'Menu');
    const buttonContact = createHtmlElement('button', null, 'Contact');
    const divMain = createHtmlElement('div', 'menu', null);
    const cursivePara = createHtmlElement('p', 'cursive', 'Osteria');
    const basicPara = createHtmlElement('p', null, 'at the waterfront');
    const footer = createHtmlElement('p', 'footer', 'Osteria at the waterfront is a part of Spencer group');

    content.appendChild(header);
    header.appendChild(buttonHome);
    header.appendChild(buttonMenu);
    header.appendChild(buttonContact);

    content.appendChild(divMain);
    divMain.appendChild(cursivePara);
    divMain.appendChild(basicPara);
    divMain.appendChild(footer);
};