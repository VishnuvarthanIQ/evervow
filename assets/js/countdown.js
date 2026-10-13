document.addEventListener('DOMContentLoaded', () => {
    const countdownEls = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    if (countdownEls.days) {
        // Set target to 30 days from now for demo
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            countdownEls.days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            countdownEls.hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            countdownEls.minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            countdownEls.seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }
});
