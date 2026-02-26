// Countdown Timer
class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate).getTime();
        this.elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };
        this.init();
    }

    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance < 0) {
            this.expired();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.updateElement('days', days);
        this.updateElement('hours', hours);
        this.updateElement('minutes', minutes);
        this.updateElement('seconds', seconds);
    }

    updateElement(element, value) {
        if (this.elements[element]) {
            this.elements[element].textContent = value.toString().padStart(2, '0');
        }
    }

    expired() {
        ['days', 'hours', 'minutes', 'seconds'].forEach(element => {
            if (this.elements[element]) {
                this.elements[element].textContent = '00';
            }
        });
    }
}

// Initialize countdown
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('days')) {
        new CountdownTimer('2026-02-26T09:00:00');
    }
});