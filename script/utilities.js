//* time
function getFormattedTime() {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Hour 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
}  //the current time


//* convert innerText to number
function convertToNumber(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

//* Random theme Changer
let rotate = 0;

document.getElementById('randomColor').addEventListener('click', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // The number 16777215 is used because it represents the largest possible value for a 24-bit RGB color in hexadecimal format.If the random number is 16711680, the color code in hexadecimal would be #FF0000 (which is red).
    document.body.style.backgroundColor = `#${randomColor}`;

    // Increment the rotation by 10 degrees on each click
    rotate += 10;

    // Apply the updated rotation value
    document.getElementById('randomColor').style.transform = `rotate(${rotate}deg)`;
});


//* Check if all button is clicked then show a alert message
const btnOne = document.getElementById('btn-1');
const btnTwo = document.getElementById('btn-2');
const btnThree = document.getElementById('btn-3');
const btnFour = document.getElementById('btn-4');
const btnFive = document.getElementById('btn-5');
const btnSix = document.getElementById('btn-6');

btnOne.addEventListener('click', function () {
    btnOne.disabled = true;
    alert('Board updated successfully!');
    checkAllButtons();
});

btnTwo.addEventListener('click', function () {
    btnTwo.disabled = true;
    alert('Board updated successfully!');
    checkAllButtons();
});

btnThree.addEventListener('click', function () {
    btnThree.disabled = true;
    alert('Board updated successfully!');
    checkAllButtons();
});

btnFour.addEventListener('click', function () {
    btnFour.disabled = true;
    alert('Board updated successfully!');
    checkAllButtons();
});

btnFive.addEventListener('click', function () {
    btnFive.disabled = true;
    alert('Board updated successfully!');
    checkAllButtons();
});

btnSix.addEventListener('click', function () {
    btnSix.disabled = true;
    alert('Board updated successfully!');
    checkAllButtons();
});

function checkAllButtons() {
    if (btnOne.disabled && btnTwo.disabled && btnThree.disabled && btnFour.disabled && btnFive.disabled && btnSix.disabled) {
        alert('Congrats!!! You have completed all the current tasks.');
    }
}