import twitter from './assets/twitter.svg';
import whatsapp from './assets/whatsapp.svg';
import email from './assets/email.svg';
import { __disposeResources } from 'tslib';

function contact(icon, href, content) {
    const contact_container = document.createElement('div');
    contact_container.id = 'contact-container';

    const icon_image = document.createElement('img');
    icon_image.src = icon;
    
    const desc = document.createElement('a');
    desc.href = href;
    desc.textContent = content
    
    contact_container.appendChild(icon_image);
    contact_container.appendChild(desc);

    return contact_container;
}

function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contacts = document.createElement('div');
    contacts.id = 'contacts'
    
    // content.style.backgroundColor = 'transparent';

    const contactUsTitle = document.createElement('h1');
    contactUsTitle.textContent = 'Contact Us';



    const twitter_contact = contact(twitter, 'https://x.com/ndeze_emmanuel', '@bonheurBE');
    const whatsapp_contact = contact(whatsapp, 'tel:+250 791348888', '+250 791348888');
    const email_contact = contact(email, 'mailto:bonheurndezenc@gmail.com' ,'bonheurndezenc@gmail.com');

    contacts.appendChild(twitter_contact);
    contacts.appendChild(whatsapp_contact);
    contacts.appendChild(email_contact);




    content.appendChild(contactUsTitle);
    content.appendChild(contacts);
    

}

export default loadContact;