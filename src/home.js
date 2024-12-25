import welcom_image from "./assets/welcom_image.jpg";

function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const homeImg = document.createElement('div');
    homeImg.className = 'welcome-section'

    const welcomeTitle = document.createElement('h1');
    welcomeTitle.textContent = 'Welcome to Our Restaurant!';


    const welcomImage = document.createElement('img');
    welcomImage.id = 'welcom-image';
    welcomImage.src = welcom_image;
    welcomImage.style.width = '100%';
    welcomImage.style.height = 'auto';
    welcomImage.style.objectFit = 'cover';

    const descriptionTitle = document.createElement('h2');
    descriptionTitle.textContent = `We serve the best food in town. Come visit us!`;

    const descriptionContent = document.createElement('p');
    descriptionContent.textContent = `
    Heaven Restaurant was custom built in 2008 to be the first hospitality training restaurant in Kigali. On an open-air terrace with expansive views of Kigali, Heaven is known for its innovative modern African cuisine and excellent service experience. Heaven has trained over 3,000 Rwandans in hospitality, customer service and culinary skills since its opening. Heaven is more than a restaurant, it is a cultural venue featuring an onsite art gallery, traditional banana wine making experience, children’s playground, and Made in Rwanda retail boutique.`;
    descriptionContent.style.marginTop = '10px';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'desciption';
    descriptionDiv.appendChild(descriptionTitle);
    descriptionDiv.appendChild(descriptionContent);

    content.appendChild(welcomeTitle)
    homeImg.appendChild(welcomImage);
    content.appendChild(homeImg);
    content.appendChild(descriptionDiv);

}

export default loadHome;