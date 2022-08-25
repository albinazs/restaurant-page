import { content, createHtmlElement } from './index';

const starters = [
    {
        itemName:'Nova Scotia Lobster Roll',
        description:'choice of house-cut fries or greens',
        price: '16',
    },
    {
        itemName:'Ricotta Gnocchi',
        description:'cherry tomato, la bomba, stracciatella',
        price: '22',
    },
    {
        itemName:'Snow Crab Cakes',
        description:'summer vegetable slaw, miso mayo',
        price: '16',
    },
    {
        itemName:'Miso Glazed Salmon',
        description:'king oyster mushroom, saffron aioli',
        price: '28',
    },
    {
        itemName:'Parker House Rolls',
        description:'tomato vinaigrette',
        price: '30',
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

const desserts = [
    {
        itemName:'Bumbleberry Square',
        description: 'vanilla bean ice cream, almond granola',
        price: '12',
    },
    {
        itemName:'Sweet Rhubarb Cheesecake',
        description:'lemon, ginger',
        price: '12',
    },
    {
        itemName:'Flourless Hazelnut Chocolate Cake',
        description:'raspberries, hazelnut ice cream',
        price: '12',
    },
    {
        itemName:'Coconut Sorbet',
        description:'ginger biscotti , lime zest',
        price: '11',
    },
];

const createMenuSection = (sectionName) => {
    const menuSection = createHtmlElement('div', null, null);
    const text = createHtmlElement('p', 'cursive-menu', `${sectionName}`);
    const hr = createHtmlElement('hr', null, null);

    menuSection.appendChild(text);
    menuSection.appendChild(hr);

    return menuSection;
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

    const dessertsSection = createMenuSection('Dessert');
    divMain.appendChild(dessertsSection);
    desserts.forEach(item => {
        const htmlItem = createMenuItem(`${item.itemName}`, `${item.description}`, `${item.price}`);
        divMain.appendChild(htmlItem);
    });
   
    const footer = createHtmlElement('p', 'footer', 'Osteria at the waterfront is a part of Spencer group');
    divMain.appendChild(footer);
};



