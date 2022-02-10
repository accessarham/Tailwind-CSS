
    const menuBtn = document.querySelector('.menuBtn');
    const navLinks = document.querySelector('.navLinks');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
    })