// Declaring Variables
const newYearElement = document.getElementById("topic");
const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");
const daysElement = document.getElementById("days");
let daysPerYear;
let daysInFeb;

if (!secondsElement || !minutesElement || !hoursElement || !daysElement) {
  console.error("One or more elements not found. Check your HTML structure.");
}

// Time Formating
function timeFormate(time) {
  if (isNaN(time)) {
    throw new Error("Invalid time value");
  }
  return time < 10 ? `0${time}` : time;
}

let Main = () => {
  // Declare variables inside the function to get real-time values
  const cDate = new Date();
  const cSec = cDate.getSeconds();
  const cMin = cDate.getMinutes();
  const cHours = cDate.getHours();
  const cDay = cDate.getDate();
  const cMonth = cDate.getMonth();
  const cYear = cDate.getFullYear();

  // Leap Year Calculation
  if ((cYear % 4 == 0 && cYear % 100 != 0) || cYear % 400 == 0) {
    daysPerYear = 366;
    daysInFeb = 29;
  } else {
    daysPerYear = 365;
    daysInFeb = 28;
  }

  const daysInMonth = [31, daysInFeb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysLeft =
    daysPerYear -
    daysInMonth.slice(0, cMonth).reduce((acc, days) => acc + days, 0) -
    cDay;

  // Error handling for daysLeft
  if (isNaN(daysLeft) || daysLeft < 0) {
    throw new Error("Invalid daysLeft value");
  }

  // Update HTML Elements
  newYearElement.innerHTML = `${cYear + 1} Begins In`;
  secondsElement.innerHTML = timeFormate(59 - cSec);
  minutesElement.innerHTML = timeFormate(59 - cMin);
  hoursElement.innerHTML = timeFormate(23 - cHours);
  daysElement.innerHTML = timeFormate(daysLeft);
};

// Make a intervel for Main function
const interval = window.setInterval(() => {
  try {
    Main();
  } catch (error) {
    console.error("An error occurred:", error);
    clearInterval(interval); // Stop the interval on error
  }
}, 1000);
