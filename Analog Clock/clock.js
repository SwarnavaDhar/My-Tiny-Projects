setInterval(() => {
    let date = new Date();
    let hourTime = date.getHours();
    let minTime = date.getMinutes();
    let secTime = date.getSeconds();
    
    let hourRotation = 30 * hourTime + minTime / 2;
    let minRotation = 6 * minTime;
    let secRotation = 6 * secTime;

    document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minRotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${secRotation}deg)`;

    // Above 3 lines of code or this

    // hour.style.transform = `rotate(${hourRotation}deg)`;
    // minute.style.transform = `rotate(${minRotation}deg)`;
    // second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);




