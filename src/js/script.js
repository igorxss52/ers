const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

window.addEventListener('scroll', function() {
    var promoSection = document.querySelector('.promo');
    var sidepanel = document.querySelector('.sidepanel');
    var scrollPosition = window.scrollY;

    // Определяем высоту первой секции с классом .promo
    var promoSectionHeight = promoSection.offsetHeight;

    // Если пользователь находится вне секции с классом .promo
    if (scrollPosition >= promoSectionHeight) {
        // Показываем sidepanel
        sidepanel.style.display = 'block';
    } else {
        // Скрываем sidepanel
        sidepanel.style.display = 'none';
    }
});

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    setTimeout(() => { 
        mask.remove();
    }, 600);
});