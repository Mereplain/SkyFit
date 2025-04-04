let btnSwitcherThem = document.querySelector('.header__button-theme');
let circleInBtn = document.querySelector('.header__setting-theme-circle')
let body = document.querySelector('body');

btnSwitcherThem.addEventListener('click', function(){
    circleInBtn.classList.toggle('btnThemAnim');
    body.classList.toggle('light-them');
})