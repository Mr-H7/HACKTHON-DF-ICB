// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    loadTheme();
    setupMobileMenu();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme + '-theme';
}

function setupEventListeners() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    document.body.className = newTheme + '-theme';
    localStorage.setItem('theme', newTheme);
}

function toggleLanguage() {
    const currentDir = document.documentElement.dir;
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.dir = newDir;
    localStorage.setItem('dir', newDir);
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (navMenu && menuBtn) {
        navMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.className = navMenu.classList.contains('active') ? 
                'fas fa-times' : 'fas fa-bars';
        }
    }
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        setTimeout(() => alertDiv.remove(), 5000);
    }
}