//validation hero__form 

document.addEventListener("DOMContentLoaded", () => {
    const quantiteInput = document.getElementById('quantite');
    const heroBtn = document.getElementById('hero__btn');
    const quantiteMsg = document.getElementById('quantite-msg');

    const setHeroError = (message) => {
        quantiteInput.classList.add("border-red-500");
        quantiteInput.classList.remove("border-blanc-stellaire", "border-green-500");
        quantiteMsg.textContent = message;
        quantiteMsg.classList.remove("text-green-500");
        quantiteMsg.classList.add("text-red-500", "text-xs");
        quantiteInput.focus();
    }

    const setHeroSuccess = (message) => {
        quantiteInput.classList.remove("border-red-500");
        quantiteInput.classList.add("border-green-500");
        quantiteMsg.textContent = "Commande confirmée !";
        quantiteMsg.classList.remove("text-red-500");
        quantiteMsg.classList.add("text-green-500", "text-xs");
    }

    const clearHeroState = () => {
        quantiteInput.classList.remove("border-red-500", "border-green-500");
        quantiteInput.classList.add("border-blanc-stellaire");
        quantiteMsg.textContent = "";
    };

    if (heroBtn && quantiteInput) {
        heroBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const valeur = parseInt(quantiteInput.value);
            let noError = true;

            if (!quantiteInput.value || isNaN(valeur)) {
                setHeroError("Veuillez entrer une quantité.");
                noError = false;
            } else if (valeur < 1) {
                setHeroError("La quantité minimum est 1.");
                noError = false;
            }

            if (noError) {
                setHeroSuccess();
            }
        });

        quantiteInput.addEventListener("input", () => clearHeroState());
    }

});


// validation images-extraits__form

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return false;
    }
    if (email.includes("..")) {
        return false;
    }
    const [localPart, domain] = email.split("@");
    if (localPart.length > 64) {
        return false;
    }
    if (domain.length > 253) {
        return false;
    }
    return true;
};

document.addEventListener("DOMContentLoaded", () => {
    const subInput = document.getElementById("subEmail");
    const subBtn = document.getElementById("images-extraits__btn");
    const subMsg = document.getElementById("sub-email-msg");

    const setSubError = (message) => {
        subInput.classList.add("border-red-500");
        subInput.classList.remove("border-blanc-stellaire", "border-green-500");
        subMsg.textContent = message;
        subMsg.classList.remove("text-green-500");
        subMsg.classList.add("text-red-500", "text-xs");
        subInput.focus();
    };

    const setSubSuccess = () => {
        subInput.classList.remove("border-red-500");
        subInput.classList.add("border-green-500");
        subMsg.textContent = "Inscription confirmée !";
        subMsg.classList.remove("text-red-500");
        subMsg.classList.add("text-green-500", "text-xs");
    };

    const clearSubState = () => {
        subInput.classList.remove("border-red-500", "border-green-500");
        subInput.classList.add("border-blanc-stellaire");
        subMsg.textContent = "";
    };

    if (subBtn && subInput) {
        subBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const valeur = subInput.value.trim();
            let noError = true;

            if (valeur === "") {
                setSubError("Veuillez entrer votre adresse courriel.");
                noError = false;
            } else if (valeur.length < 6) {
                setSubError("Le courriel doit comprendre un minimum de 6 caractères.");
                noError = false;
            } else if (valeur.length > 254) {
                setSubError("Le courriel doit comprendre un maximum de 254 caractères.");
                noError = false;
            } else if (!isValidEmail(valeur)) {
                setSubError("Veuillez entrer une adresse courriel valide (ex: courriel@domain.com)");
                noError = false;
            }

            if (noError) {
                setSubSuccess();
                subInput.value = "";
            }
        });

        subInput.addEventListener("input", () => clearSubState());
    }
});