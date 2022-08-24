import { content, createHtmlElement } from './index';

export const renderMenu = () => {
    
    const divMain = createHtmlElement('div', 'menu', null);
    const cursivePara = createHtmlElement('p', 'cursive', 'Osteria');
    const basicPara = createHtmlElement('p', null, 'at the waterfront');
    const footer = createHtmlElement('p', 'footer', 'Osteria at the waterfront is a part of Spencer group');

    content.appendChild(divMain);
    divMain.appendChild(cursivePara);
    divMain.appendChild(basicPara);
    divMain.appendChild(footer);
};

