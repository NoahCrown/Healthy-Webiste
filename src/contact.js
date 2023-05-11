const createContactPage = () => {
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.classList.add('contact-forms')

    const form = document.createElement('form');
    form.classList.add('newsletter-form');

    const heading = document.createElement('h1')
    heading.textContent = "Keep up with the healthy trends"
    heading.classList.add('contact-form-heading')
    form.appendChild(heading);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'JohnDoe@gmail.com'
    form.appendChild(emailInput);

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.value = 'Register to our newsletter'
    submitButton.innerHTML = 'Submit'
    form.appendChild(submitButton);

    pageContent.appendChild(form)

    content.appendChild(pageContent)


}

export default createContactPage