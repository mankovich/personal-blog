// Selecting existing HTML elements
const backButton = document.querySelector('#back-button')
const postsContainerDiv = document.querySelector('#posts-container');
// creating HTML elements
const blogPostDiv = document.createElement('div');
const titleEl = document.createElement('h4');
const contentEl = document.createElement('p');
const authorEl = document.createElement('p')

blogPostDiv.setAttribute(
    'style', 
    'display: flex; '
)

titleEl.setAttribute(
    'style',
    ''
)

contentEl.setAttribute(
    'style',
    ''
)

authorEl.setAttribute(
    'style',
    ''
)

function renderBlogPost() { 
    // retrieving the text input from local storage and parsing into javasript
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));
    // checking if data is retrieved for early exit if not
    if (blogPost !== null) {
        titleEl.textContent = blogPost.title;
        contentEl.textContent = blogPost.blogContent;
        authorEl.textContent = blogPost.username;

        blogPostDiv.append(titleEl, contentEl, authorEl);
        postsContainerDiv.append(blogPostDiv);
    }
}

function init() {
    renderBlogPost();
    console.log(localStorage.blogPost)
}

init();

backButton.addEventListener('click', function() {
    location.assign('index.html')
})