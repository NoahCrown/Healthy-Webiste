
const createRestaurantHomePage = () => {
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    const textContainer = document.createElement('div')
    textContainer.classList.add('text-container');
    pageContent.classList.add('page-content')
    pageContent.classList.add('hero-container')

    const headline = document.createElement('h1');
    headline.textContent = "EAT HEALTHY, BE HEALTHY";
    textContainer.appendChild(headline);

    const image = document.createElement('img');
    image.src= 'https://o.remove.bg/downloads/1c1719ea-a738-4dfb-831d-498f0e10a862/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png'
    image.classList.add('image');
    pageContent.append(image);



    const copy = document.createElement('p');
    copy.textContent = "Be responsible with what you eat and reach your full potential."
    textContainer.appendChild(copy)

    pageContent.append(textContainer)
    content.appendChild(pageContent)



}

export default createRestaurantHomePage