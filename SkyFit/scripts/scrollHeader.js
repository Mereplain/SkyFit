const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
        if (currentScrollTop > lastScrollTop && currentScrollTop > 0) {
            header.classList.add('scrollHeader');
        } else {
            header.classList.remove('scrollHeader');
        }
    }
});

