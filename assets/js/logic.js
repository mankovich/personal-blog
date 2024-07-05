const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const blogContentInput = document.querySelector("#blog-content");
const msgDiv = document.querySelector("#error-msg");

function submitBlogPostForm() {
    
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;

    if (username === "") {
        displayMessage('error', 'Username cannot be blank');
    } else if (email === "") {
        displayMessage('error', )
    }

})






// Accessing HTML theme toggle element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container')

// Setting default mode to light
let mode = 'light'

// Setting click listener for click event on theme-toggle switch
themeSwitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});


// TODO: save current theme mode in local storage