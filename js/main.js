let benefits = document.getElementsByClassName("benefits")[0];
let container = document.querySelector('.benefits .container');

let nut = document.getElementsByClassName('nutrition')[0]
let image = document.getElementsByClassName('image')[0];
let nutritionIntroText = document.querySelector('.nutrition .intro .text');

let rate = document.querySelector('.rate');
let progressbar = document.querySelectorAll('.progress-bar span')


window.addEventListener("scroll", function () {
    if (window.scrollY >= benefits.offsetTop - 200) {
        container.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }
    if (window.scrollY >= nut.offsetTop - 200) {
        image.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
        image.style.opacity = '1';
        image.style.transform = 'translateX(0)';
    }
    if (window.scrollY >= nut.offsetTop - 200) {
        nutritionIntroText.classList.add('show-nutrition-text');
    }
    if (window.scrollY >= rate.offsetTop - 200) {
        progressbar.forEach(span => {
            span.style.width = span.dataset.width + "%";
        });
    }
});
