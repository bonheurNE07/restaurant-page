import food from './assets/food.jpeg';
import breakfast from './assets/breakfast.jpeg';
import wine from './assets/wine.jpeg';

function menuCard(title, img) {
    const menu_card = document.createElement('div');
    menu_card.id = 'menu-card';
    
    const card_title = document.createElement('h2');
    card_title.textContent = title;
    
    const card_image = document.createElement('img');
    card_image.src = img;

    const imageDiv = document.createElement('div');
    imageDiv.id = 'image-card-div';
    imageDiv.appendChild(card_image)

    menu_card.appendChild(card_title);
    menu_card.appendChild(imageDiv);


    return menu_card;
}

function menuDetail(title, description) {
    const menu_detail = document.createElement('div');
    menu_detail.id = 'menu-detail';
    
    const description_title = document.createElement('h2');
    description_title.textContent = title;

    const item_description = document.createElement('p');
    item_description.textContent = description;

    menu_detail.appendChild(description_title);
    menu_detail.appendChild(item_description);

    menu_detail.style.borderBottom = '1px solid rgb(52, 50, 50)';
    menu_detail.style.borderBottomRightRadius = '12px'
    menu_detail.style.boxShadow = '12px 12px 12px rgba(0, 0, 0, 0.4)';

    return menu_detail;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuPhotoDiv = document.createElement('div');
    menuPhotoDiv.id = 'menuPhotoDiv';

    const food_menu = menuCard('Diner', food);
    const wine_menu = menuCard('Wine', wine);
    const breakfast_menu = menuCard('BreakFast', breakfast);

    menuPhotoDiv.appendChild(food_menu);
    menuPhotoDiv.appendChild(wine_menu);
    menuPhotoDiv.appendChild(breakfast_menu);


    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    const food_description = menuDetail('Food', `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia blanditiis maxime quis obcaecati fuga voluptate sint quasi id, natus quod nobis ex, impedit nesciunt dolor! Dolores cumque exercitationem nemo beatae.`);
    const wine_description = menuDetail('Wine', `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia blanditiis maxime quis obcaecati fuga voluptate sint quasi id, natus quod nobis ex, impedit nesciunt dolor! Dolores cumque exercitationem nemo beatae.`);
    const breakfast_description = menuDetail('Break Fast', `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia blanditiis maxime quis obcaecati fuga voluptate sint quasi id, natus quod nobis ex, impedit nesciunt dolor! Dolores cumque exercitationem nemo beatae.`);
    
    menuDiv.appendChild(food_description);
    menuDiv.appendChild(wine_description);
    menuDiv.appendChild(breakfast_description);
    

    content.appendChild(menuPhotoDiv);
    content.appendChild(menuDiv);
}

export default loadMenu;