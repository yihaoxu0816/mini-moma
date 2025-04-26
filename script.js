const hours = {
    0: { open: 10*60 + 30, close: 17*60 + 30 }, // Sunday
    1: { open: 10*60 + 30, close: 17*60 + 30 }, // Monday
    2: { open: 10*60 + 30, close: 17*60 + 30 }, // Tuesday
    3: { open: 10*60 + 30, close: 17*60 + 30 }, // Wednesday
    4: { open: 10*60 + 30, close: 17*60 + 30 }, // Thursday
    5: { open: 10*60 + 30, close: 20*60 + 30 }, // Friday
    6: { open: 10*60 + 30, close: 17*60 + 30 }  // Saturday
  };

const now = new Date();
const day = now.getDay();
const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();

const today = hours[day];
const isOpen = minutesSinceMidnight >= today.open && minutesSinceMidnight < today.close;

const hoursText = document.getElementById('open');

if (isOpen) {
    hoursText.innerHTML = "OPEN";
    hoursText.style.color = "#00bf00";
}
else {
    hoursText.innerHTML = "CLOSED";
    hoursText.style.color = "#d14338";
}