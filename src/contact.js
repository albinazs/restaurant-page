import { content, createHtmlElement } from './index';

export const renderContact = () => {
    const divMain = createHtmlElement('div', 'contact', null);
    const contactGrid = createHtmlElement('div', 'contact-grid', null);
    const hours = createContactElement('Hours', ['Dinner: Monday - Sunday 5-10:30 pm', 'Lunch: Saturday & Sunday 11 am-3 pm']);
    const location = createContactElement('Location', ['245 Oyesters Ave, Brooklyn, NY 11111', 'hello@osteria.com']);
    const footer = createHtmlElement('p', 'footer', 'Osteria at the waterfront is a part of Spencer group');

    content.appendChild(divMain);
    divMain.appendChild(contactGrid);
    contactGrid.appendChild(hours);
    contactGrid.appendChild(location);
    divMain.appendChild(footer);
};

const createContactElement = (elementName, descLines) => {
    const contactElement = createHtmlElement('div', 'contact-element', `${elementName}`);
    const contactElementName = createHtmlElement('p', 'contact-element-name', null);
    contactElement.appendChild(contactElementName);
    descLines.forEach(line => {
        const htmlLine = createHtmlElement('p', 'contact-para', `${line}`);
        contactElement.appendChild(htmlLine);
    });

    return contactElement;
}