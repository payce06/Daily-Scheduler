const scheduleContainer = document.getElementById('schedule');
const currentDate = document.getElementById('currentDate');

const startHour = 9;
const endHour = 17;

function formatHour(hour) {
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour} ${suffix}`;
}

function loadSchedule() {
    const now = new Date();
    const currentHour = now.getHours();
    currentDate.textContent = now.toDateString();