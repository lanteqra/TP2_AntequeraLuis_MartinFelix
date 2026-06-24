//Carousel

const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
let current = 0;

function goTo(index) {
    items[current].classList.add('hidden');
    dots[current].classList.remove('carousel__dot--active', 'bg-blanc-stellaire');
    dots[current].classList.add('bg-blanc-stellaire/40');


    current = index;

    items[current].classList.remove('hidden');
    dots[current].classList.add('carousel__dot--active', 'bg-blanc-stellaire');
    dots[current].classList.remove('bg-blanc-stellaire/40');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
});

setInterval(() => {
    goTo((current + 1) % items.length);
}, 4000);