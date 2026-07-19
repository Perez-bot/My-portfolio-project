// ===== Dark / Light Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';

themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeIcon.className = next === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
});

// ===== Project Filtering =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projectItems.forEach(item => {
            const match = filter === 'all' || item.dataset.category === filter;
            item.style.display = match ? 'block' : 'none';
        });
    });
});

// ===== Contact Form (front-end only, no backend yet) =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formStatus.textContent = "Thanks for reaching out! I'll get back to you soon.";
        formStatus.style.color = 'var(--accent-pink)';
        contactForm.reset();
    });
}
