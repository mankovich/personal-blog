const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const blogContentInput = document.querySelector('#blog-content');
const msgDiv = document.querySelector('#msg');
const submitButton = document.querySelector('#submit-button');

function displayMessage(message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', 'error');
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const blogContent = blogContentInput.value.trim();
    
    if (username === "") {
        displayMessage('**Username cannot be blank**');
    } else if (title === "") {
        displayMessage('**Title cannot be blank**');
    } else if (blogContent === "") {
        displayMessage('**Content cannot be blank**');
    } else {
        const blogPostData = {
            username: username,
            title: title,
            blogContent: blogContent,
        }
        saveBlogPostData(blogPostData)
       
        location.assign("blog.html");
    }
})

function saveBlogPostData(blogPostData) {
    const storedBlogPostData = JSON.parse(localStorage.getItem('blogPostData')) || [];

    storedBlogPostData.push(blogPostData);

    localStorage.setItem('blogPostData', JSON.stringify(storedBlogPostData));
}