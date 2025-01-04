// Set the date we're counting down to
const countDownDate = new Date("November 31, 2077 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Display the result in the corresponding elements
    document.getElementById("days").innerHTML = days + "";
    document.getElementById("hours").innerHTML = hours + "";
    document.getElementById("minutes").innerHTML = minutes + "";
    document.getElementById("seconds").innerHTML = seconds + "";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "Acara Pernikahan Sudah Dimulai";
        document.getElementById("countdown").style.display = "none";
    }
}, 1000);