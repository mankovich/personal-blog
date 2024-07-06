
const container = document.querySelector('.container');
const themeSwitch = document.querySelector('#theme-switch');

// Setting default mode to light
let mode = 'light'

// Setting click listener for click event on theme-toggle switch
themeSwitch.addEventListener('click', function(event) {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');  
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});
