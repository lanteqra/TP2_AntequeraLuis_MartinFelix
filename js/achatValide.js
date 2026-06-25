const form = document.getElementById('hero__form');
const input = document.getElementById('quantite');
const btn = document.getElementById('hero__btn');
const msg = document.getElementById('quantite-msg');

function showError(texte) {
    input.classList.add('border-red-500');
    input.classList.remove('border-blanc-stellaire', 'border-green-500');
    msg.textContent = texte;
    msg.classList.remove('text-green-500');
    msg.classList.add('text-red-500', 'text-xs');
}

function showSuccess() {
    input.classList.remove('border-red-500');
    input.classList.add('border-green-500');
    msg.textContent = 'Commande confirmée !';
    msg.classList.remove('text-red-500');
    msg.classList.add('text-green-500', 'text-xs');
}

function clearState() {
    input.classList.remove('border-red-500', 'border-green-500');
    input.classList.add('border-blanc-stellaire');
    msg.textContent = '';
}

btn.addEventListener('click', () => {
    const valeur = parseInt(input.value);

    if (!input.value || isNaN(valeur)) {
        showError('Veuillez entrer une quantité.');
        return;
    }

    if (valeur < 1) {
        showError('La quantité minimum est 1.');
        return;
    }

    showSuccess();
});

input.addEventListener('input', () => clearState());