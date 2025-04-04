let btnOpenerSetting = document.querySelector('.header__button-settings');
let windowSettings = document.querySelector('.header__window-settings.visually-hidden');

btnOpenerSetting.addEventListener('click', function(){
    windowSettings.classList.toggle('visually-hidden');
})

