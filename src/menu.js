import { content, createHtmlElement } from './index';

const starters = [
    {
        itemName:'Nova Scotia Lobster Roll',
        description:'choice of house-cut fries or greens',
        price: '26',
    },
    {
        itemName:'Ricotta Gnocchi',
        description:'cherry tomato, la bomba, stracciatella',
        price: '32',
    },
    {
        itemName:'Spencer\'s Burger',
        description:'red onion jam, bacon, arugula, provolone cheese, mushrooms, horseradish mayo',
        price: '26',
    },
    {
        itemName:'Miso Glazed Salmon',
        description:'king oyster mushroom, saffron aioli',
        price: '38',
    },
    {
        itemName:'Spiced Cornish Hen',
        description:'grilled corn, fingerling potato, baby watercress salad',
        price: '40',
    },
];
const mains = [
    {
        itemName:'Oysters',
        description: 'supplied by Maisy\'s Pearl ',
        price: '45',
    },
    {
        itemName:'Tuna Crudo',
        description:'crispy maitake mushroom, chili oil',
        price: '22',
    },
    {
        itemName:'Shrimp Cocktail',
        description:'herb salad, green peppercorn cocktail sauce',
        price: '24',
    },
    {
        itemName:'Salmon Tataki',
        description:'wasabi mayo, green bean salad',
        price: '28',
    },
    {
        itemName:'Spencer\’s Platter',
        description:'oysters, shrimp, salmon tataki, snow crab, accompaniments',
        price: '55',
    },
];

export const renderMenu = () => {
    
    const divMain = createHtmlElement('div', 'menu', null);
    content.appendChild(divMain);
    
    const startersSection = createMenuSection('Starters');
    divMain.appendChild(startersSection);
    starters.forEach(item => {
        const htmlItem = createMenuItem(`${item.itemName}`, `${item.description}`, `${item.price}`);
        divMain.appendChild(htmlItem);
    });

    const mainsSection = createMenuSection('Main dishes');
    divMain.appendChild(mainsSection);
    mains.forEach(item => {
        const htmlItem = createMenuItem(`${item.itemName}`, `${item.description}`, `${item.price}`);
        divMain.appendChild(htmlItem);
    });
   
    const footer = createHtmlElement('p', 'footer', 'Osteria at the waterfront is a part of Spencer group');
    divMain.appendChild(footer);

};

const createMenuItem = (itemName, description, price) => {
    const menuItem = createHtmlElement('section', 'menu-item', null);
    const htmlItemName = createHtmlElement('p', 'item-name', `${itemName}`);
    const htmlDescription = createHtmlElement('p', 'item-desc', `${description}`);
    const htmlPrice = createHtmlElement('p', 'item-desc', `$${price}`);

    menuItem.appendChild(htmlItemName);
    menuItem.appendChild(htmlDescription);
    menuItem.appendChild(htmlPrice);

    return menuItem;
};

const createMenuSection = (sectionName) => {
    const menuSection = createHtmlElement('div', null, null);
    const text = createHtmlElement('p', 'cursive-menu', `${sectionName}`);
    const hr = createHtmlElement('hr', null, null);

    menuSection.appendChild(text);
    menuSection.appendChild(hr);

    return menuSection;
};


