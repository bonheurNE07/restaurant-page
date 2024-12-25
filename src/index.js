import "./style.css";

import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from './contact';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    document.getElementById('home-tab').addEventListener('click', loadHome);
    document.getElementById('menu-tab').addEventListener('click', loadMenu);
    document.getElementById('contact-tab').addEventListener('click', loadContact);
});

console.log("webpack is working!");