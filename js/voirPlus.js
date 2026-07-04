document.querySelectorAll('.raisons__card-toggle').forEach((boton) => {
    const texte = boton.previousElementSibling;

    boton.addEventListener('click', () => {
        const expandido = texte.classList.toggle('line-clamp-3');
        boton.setAttribute('aria-expanded', !expandido);
        boton.textContent = expandido ? 'Voir plus' : 'Voir moins';
    });
});