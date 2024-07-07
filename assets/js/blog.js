// Selecting existing HTML elements
const backButton = document.querySelector('#back-button')
const blogPostsContainerDiv = document.querySelector('#blog-posts-container');

function renderBlogPost() { 
    const storedBlogPostData = JSON.parse(localStorage.getItem('blogPostData')) || [];

    console.log(storedBlogPostData);

    if (storedBlogPostData !== null) {
        for (let i = 0; i < storedBlogPostData.length; i++) {
            const blogPostDiv = document.createElement('div');
            const blogTitleEl = document.createElement('h4');
            const contentEl = document.createElement('p');
            const authorEl = document.createElement('p');

            const blogPost = storedBlogPostData[i];
           
            blogTitleEl.textContent = blogPost.title;
            contentEl.textContent = blogPost.blogContent;
            authorEl.textContent = `Posted by: ${blogPost.username}`;

            
            blogPostDiv.setAttribute(
                'style',
                'display: flex; flex-direction: column; align-items: left; color: var(--primary); background-color: var(--secondary); margin: 10px; padding: 5px; border: 2px solid var(--primary); border-radius: 3px; box-shadow: 1px 1px 1px var(--primary); height: 150px; width: 100%; position: relative'
            )

            
            blogTitleEl.setAttribute(
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

            blogPostDiv.append(blogTitleEl, contentEl, authorEl);
            blogPostsContainerDiv.append(blogPostDiv);
        }   
    }
}

function init() {
    renderBlogPost();
}

backButton.addEventListener('click', function() {
    location.assign('index.html')
})

init();