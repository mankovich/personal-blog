const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const blogContentInput = document.querySelector('#blog-content');
const msgDiv = document.querySelector('#msg');
const submitButton = document.querySelector('#submit-button');

function displayMessage(message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', 'error');
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = usernameInput.value;
    const email = emailInput.value;
    const blogContent = blogContentInput.value;
    
    if (username === "") {
        displayMessage('**Username cannot be blank**');
    } else if (email === "") {
        displayMessage('**Email cannot be blank**');
    } else if (blogContent === "") {
        displayMessage('**Content cannot be blank**');
    } else blogPosts = {
        username: usernameInput.value,
        email: emailInput.value,
        blogContent: blogContentInput.value,
    }
    
    localStorage.setItem('blogPost', JSON.stringify(blogPosts));
    location.assign("blog.html");
})