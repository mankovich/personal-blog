// Selecting existing HTML elements
const backButton = document.querySelector('#back-button')
const postsContainerDiv = document.querySelector('#posts-container');
// creating HTML elements
const blogPostDiv = document.createElement('div');
const titleEl = document.createElement('h4');
const contentEl = document.createElement('p');
const authorEl = document.createElement('p');

blogPostDiv.setAttribute(
    'style', 
    'display: flex; flex-direction: column;  align-items: left; color: var(--primary); background-color: var(--secondary); margin: 10px; padding: 5px; border: 2px solid var(--primary); border-radius: 3px; box-shadow: 1px 1px 1px var(--primary); height: 150px; width: 100%; position: relative'
)

titleEl.setAttribute(
    'style',
    'font-weight: bold; font-size: 16px; align-items: right; padding-top: 5px; padding-right: 5px; padding-left: 5px; border-bottom: 1px solid var(--primary)'
)

contentEl.setAttribute(
    'style',
    'padding-top: 10px; padding-left: 20px; padding-right: 20px; padding-bottom: 10px; font-style: italic; font-size: 14px'
)

authorEl.setAttribute(
    'style',
    'padding: 5px; font-size: 14px; position: absolute; left: 5px; bottom: 5px'
)

function renderBlogPost() { 
    // retrieving the text input from local storage and parsing into javasript
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));
    console.log('blogPost');
    // checking if data is retrieved for early exit if not
    if (blogPost !== null) {
        titleEl.textContent = blogPost.title;
        contentEl.textContent = blogPost.blogContent;
        authorEl.textContent = `Posted by: ${blogPost.username}`;

        blogPostDiv.append(titleEl, contentEl, authorEl);
        postsContainerDiv.append(blogPostDiv);
    }
}

function init() {
    renderBlogPost();
}

init();

backButton.addEventListener('click', function() {
    location.assign('index.html')
})