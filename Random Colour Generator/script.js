// generate Random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(randomColor()) // Generating random colours on the console

// we are declaring interval_Id as a global variable so that we cann access it anywhere from the code

let interval_Id 
const startChangingColor = function () {
    if (!interval_Id) {
        interval_Id = setInterval(changeBGcolor,1000) // changes bg color on 2 seconds interval
    }
    

    function changeBGcolor() {
        document.body.style.backgroundColor = randomColor(); // changing the background color on mouse click
    } 
}

const stopChangingColor = function () {
    clearInterval(interval_Id)
    // we are taking it as null for more optimized code and saving space, and for that we will run a check using if/else
    interval_Id = null; 
     
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)