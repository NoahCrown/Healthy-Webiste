const createMenuPage = () => {
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.classList.add('menu-container')


    const menu1 = document.createElement('div')
    menu1.classList.add('menu-food')
    pageContent.appendChild(menu1)
    
    const menu2 = document.createElement('div')
    menu2.classList.add('menu-food')
    pageContent.appendChild(menu2)

    
    const menu3 = document.createElement('div')
    menu3.classList.add('menu-food')
    pageContent.appendChild(menu3)

    const menu4 = document.createElement('div')
    menu4.classList.add('menu-food')
    pageContent.appendChild(menu4)


    const headingForMenu1 = document.createElement('h1')
    headingForMenu1.textContent = 'Vegetable Bowl'
    headingForMenu1.classList.add('food-name')
    menu1.appendChild(headingForMenu1)

    const foodImage1 = document.createElement('img');
    foodImage1.src = 'https://o.remove.bg/downloads/ea269834-0b97-4582-82bd-9254c29601da/anna-pelzer-IGfIGP5ONV0-unsplash-removebg-preview.png'
    foodImage1.classList.add('food-image')
    menu1.appendChild(foodImage1)
    
    const headingForMenu2 = document.createElement('h1')
    headingForMenu2.textContent = 'Chicken and Veggie Bowl'
    headingForMenu2.classList.add('food-name')
    menu2.appendChild(headingForMenu2)

    const foodImage2 = document.createElement('img');
    foodImage2.src = 'https://o.remove.bg/downloads/0ab35d35-e542-4055-8009-f2f07463724d/anh-nguyen-kcA-c3f_3FE-unsplash__1_-removebg-preview.png'
    foodImage2.classList.add('food-image')
    menu2.appendChild(foodImage2)
    
    const headingForMenu3 = document.createElement('h1')
    headingForMenu3.textContent = 'Fruits Bowl'
    headingForMenu3.classList.add('food-name')
    menu3.appendChild(headingForMenu3)

    const foodImage3 = document.createElement('img');
    foodImage3.src = 'https://o.remove.bg/downloads/6171d756-f80a-449c-9526-6062c0cdf6c4/jo-sonn-zeFy-oCUhV8-unsplash-removebg-preview.png'
    foodImage3.classList.add('food-image')
    menu3.appendChild(foodImage3)

    const headingForMenu4 = document.createElement('h1')
    headingForMenu4.textContent = 'Vegetable Bowl'
    headingForMenu4.classList.add('food-name')
    menu4.appendChild(headingForMenu4)
  

    const foodImage4 = document.createElement('img');
    foodImage4.src = 'https://o.remove.bg/downloads/96cd3115-7bb9-4cf0-8b73-8effb48d99af/brooke-lark-1Rm9GLHV0UA-unsplash-removebg-preview.png'
    foodImage4.classList.add('food-image')
    menu4.appendChild(foodImage4)

    pageContent.append(menu1)
    pageContent.append(menu2)
    pageContent.append(menu3)
    pageContent.append(menu4)






    content.appendChild(pageContent);
    


}

export default createMenuPage