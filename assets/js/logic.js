
const container = document.querySelector('.container');
const themeSwitch = document.getElementById('#theme-switch');

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
