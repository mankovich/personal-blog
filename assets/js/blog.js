const main = document.body.main;
const blogPostEl = document.createElement('div');
const titleEl = document.createElement('h2');
const contentEl = document.createElement('p');
const authorEl = document.createElement('p')

const container = document.querySelector('.container');
const themeSwitch = document.querySelector('#theme-switch');
const backButton = document.querySelector('#back-button');




let mode = 'light';

themeSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        // localStorage.setItem('colorTheme', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
        // localStorage.setItem('colorTheme', 'light')
    }
});

backButton.addEventListener('click', function() {
    location.assign("index.html");
})

