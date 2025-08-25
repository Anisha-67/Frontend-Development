
// whether the clock should show 24 hr format or 12 hr format
let is24HourFormat = false;

//clock update function
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let ampm = '';
    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }

    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    const timeString = `${hoursStr}:${minutesStr}:${secondsStr} ${!is24HourFormat ? ampm : ''}`;
    document.getElementById('clock').innerText = timeString;

    // Update the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').innerText = dateString;
}

//  toggle button click
document.getElementById('toggleFormat').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    const button = document.getElementById('toggleFormat');
    button.textContent = is24HourFormat ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
    updateClock(); // update immediately
});

//update the clock automatically every second
setInterval(updateClock, 1000);
updateClock();

//switching between dark or light  mode(toggle button)
const themeToggleBtn = document.getElementById('themeToggle');
let isDarkMode = true; // default

themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);

    themeToggleBtn.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
