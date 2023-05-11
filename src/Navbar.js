import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createNavbar = () => {
    const content = document.querySelector('.content')
    const navbar = document.createElement('nav')
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const newsletter = document.createElement('div');

    home.setAttribute('id', 'home-btn');
    menu.setAttribute('id', 'menu-btn');
    newsletter.setAttribute('id', 'newsletter-btn');

    home.classList.add('nav-item')
    menu.classList.add('nav-item')
    newsletter.classList.add('nav-item')

    home.textContent = "Home"
    menu.textContent = "Menu"
    newsletter.textContent = "Newsletter"

    navbar.appendChild(home)
    navbar.appendChild(menu)
    navbar.appendChild(newsletter)

    home.addEventListener('click', () => {
        clearContent()
        createRestaurantHomePage();
    })

    menu.addEventListener('click', () => {
        clearContent()
        createMenuPage()
    })

    newsletter.addEventListener('click', () => {
        clearContent()
        createContactPage();
    })


    content.append(navbar)

    function clearContent() {
        const pageContent = document.querySelector('.page-content')
        if(pageContent){
            content.removeChild(pageContent)
        }
    }

}

export default createNavbar