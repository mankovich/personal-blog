const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const blogContentInput = document.querySelector('#blog-content');
const msgDiv = document.querySelector('#msg');
const submitButton = document.querySelector('#submit-button');
const container = document.querySelector('.container');






function displayMessage(message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', 'error');
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = usernameInput.value;
    const email = emailInput.value;
    const blogContent = blogContentInput.value;
    
    if (usernameInput === "") {
        displayMessage('**Username cannot be blank**');
    } else if (emailInput === "") {
        displayMessage('**Email cannot be blank**');
    } else if (blogContentInput === "") {
        displayMessage('**Content cannot be blank**');
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('blogContent', blogContent);
    }
        storeBlogPost();
        location.assign("blog.html");
})