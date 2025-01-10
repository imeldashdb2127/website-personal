// Menambahkan animasi pada scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
        nav.style.transition = '0.4s';
    } else {
        nav.style.background = 'transparent';
    }
});

// Tombol Subscribe dengan efek klik
const subscribeBtn = document.querySelector('.btn');
subscribeBtn.addEventListener('click', function () {
    alert('Terima kasih telah berlangganan!');
    subscribeBtn.style.backgroundColor = '#28a745';
    subscribeBtn.textContent = 'Subscribed';
    subscribeBtn.style.pointerEvents = 'none';
});

// Tombol "Let's Talk" dengan efek klik
const letsTalkBtn = document.querySelector('.about-text button');
letsTalkBtn.addEventListener('click', function () {
    alert('Silakan isi formulir kontak untuk berbicara dengan saya!');
    window.scrollTo({ top: document.querySelector('#contact').offsetTop, behavior: 'smooth' });
});

// Efek hover pada kartu layanan (Skill)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', function () {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        card.style.transition = '0.3s';
    });
    card.addEventListener('mouseout', function () {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Responsivitas menu navigasi untuk layar kecil
const nav = document.querySelector('nav');
const menu = document.querySelector('nav ul');
const toggleMenu = document.createElement('div');
toggleMenu.classList.add('toggle-menu');
toggleMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
nav.insertBefore(toggleMenu, nav.firstChild);

toggleMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    toggleMenu.innerHTML = menu.classList.contains('active')
        ? '<i class="fa-solid fa-times"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Efek smooth scroll untuk semua anchor link
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
