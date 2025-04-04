let sections = document.querySelectorAll('section');
let arrSections = [...sections];
arrSections.splice(0, 1);

document.addEventListener('DOMContentLoaded', function(){
    function checkVisibility() {
        const windowHeight = window.innerHeight;

        arrSections.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;


            if (blockTop < windowHeight && blockTop > 0) {
                block.classList.add('section-visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
})