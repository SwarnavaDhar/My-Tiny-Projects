document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#darkbtn');
    const body = document.querySelector('body');
    const nav = document.getElementById('nav');
    const ArtistName = document.querySelectorAll('#name');
    const sepAll = document.querySelectorAll('#sep');
    const footer = document.querySelector('.footer-main');
    let isDarkMode = false; // Keep track of current mode

    button.addEventListener('click', function () {
        // Toggle dark mode state
        isDarkMode = !isDarkMode;
        
        // Update body background color and text content of the button
        if (isDarkMode) {
            body.style.backgroundColor = "black";
            button.textContent = "light_mode"; // Change icon to light mode
            nav.style.backgroundColor = "rgb(0, 0, 25)"; // Change navbar background color
            sepAll.forEach(sep => sep.style.backgroundColor = "yellowgreen");
            ArtistName.forEach(artist => artist.style.color = "white");
            footer.style.backgroundColor = "rgb(0, 0, 25)";
        } else {
            body.style.backgroundColor = "rgb(251, 207, 150)";
            button.textContent = "dark_mode"; // Change icon to dark mode
            nav.style.backgroundColor = "rgb(244, 102, 46)"; // Change navbar background color
            sepAll.forEach(sep => sep.style.backgroundColor = "black");
            ArtistName.forEach(artist => artist.style.color = "black"); 
            footer.style.backgroundColor = "rgb(244, 102, 46)";
        }
    });
});
