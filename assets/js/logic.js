const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const blogContentInput = document.querySelector('#blog-content');
const msgDiv = document.querySelector('#msg');
const submitButton = document.querySelector('#submit-button');
const container = document.querySelector('.container');
const themeSwitch = document.querySelector('#theme-switch');


//Listening for click event on the submit button--when this occurs, the text in the input forms will be logged to local storage (assuming there is text in all three boxes; if any of them are blank, a message will alert them). The user is also then redirected to the blog webpage to view this blog post and presumably other past posts.

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
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('blogContent', blogContent);
        
        location.assign("blog.html");
    }
})

// Setting default mode to light
let mode = 'light'

// Setting click listener for click event on theme-toggle switch
themeSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        localStorage.setItem('colorTheme', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
        localStorage.setItem('colorTheme', 'light')
    }
});


// TODO: save current theme mode in local storage 
// if decide to do this, good help at https://codyhouse.co/blog/post/store-theme-color-preferences-with-localstorage ... I also saved her code and comments on the sticky note