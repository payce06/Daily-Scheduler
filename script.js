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
    for (let hour = startHour; hour <= endHour; hour++) {
        const timeBlock = document.createElement('div');
        timeBlock.classList.add('time-block');

        const hourLabel = document.createElement('div');
        hourLabel.classList.add('hour');
        hourLabel.textContent = formatHour(hour);

        const textarea = document.createElement('textarea');
        const key = `hour-${hour}`;
        textarea.value = localStorage.getItem(key) || '';

        if (hour < currentHour) textarea.classList.add('past');
        else if (hour == currentHour) textarea.classList.add('present');
        else textarea.classList.add('future');

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-button');
        saveBtn.textContent = '💾';
        saveBtn.onclick = () => {
            localStorage.setItem(key, textarea.value);
        };

        timeBlock.appendChild(hourLabel);
        timeBlock.appendChild(textarea);
        timeBlock.appendChild(saveBtn);
        scheduleContainer.appendChild(timeBlock);

    }
}
