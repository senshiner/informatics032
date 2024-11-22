const startTime = new Date(2024, 8, 9, 8, 0, 0);

function updateCountdown() {
    const now = new Date();
    const elapsed = now - startTime;
    
    const days = Math.floor(elapsed / (1000 * 60 * 60 *24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}

setInterval(updateCountdown, 60000);
updateCountdown();

