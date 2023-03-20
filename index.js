//selectors
const daysContainer = document.querySelector('.days')
const hoursContainer = document.querySelector('.hours')
const minutesContainer = document.querySelector('.minutes')
const secondsContainer = document.querySelector('.seconds')

//calculate equinox time
let currentYear = new Date().getFullYear()
let marchEquinox = Astronomy.Seasons(currentYear).mar_equinox.date

marchEquinox.setSeconds(marchEquinox.getSeconds() + 5)

if (marchEquinox < new Date()) {
    currentYear = new Date().getFullYear() + 1
    marchEquinox = Astronomy.Seasons(currentYear).mar_equinox.date

    marchEquinox.setSeconds(marchEquinox.getSeconds() + 5)
}
// countdown
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeleft = marchEquinox  - now;
        
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    daysContainer.innerHTML = days
    hoursContainer.innerHTML = hours
    minutesContainer.innerHTML = minutes
    secondsContainer.innerHTML = seconds

}, 1000)