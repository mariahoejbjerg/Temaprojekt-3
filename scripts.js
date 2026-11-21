const welcomeScreen = document.querySelector("#welcome-screen");
const createScreen = document.querySelector("#create-screen");
const createForm = document.querySelector("#create-form");
const roomieCount = document.querySelector("#roomie-count");
let roomies = 3;
let enteredFromWelcome = false;

function showScreen() {
    const isCreating = window.location.hash === "#create";
    welcomeScreen.hidden = isCreating;
    createScreen.hidden = !isCreating;
    document.title = isCreating ? "Opret jeres hjem · Homie" : "Velkommen til Homie";
}

document.querySelectorAll("[data-destination]").forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.destination === "create") {
            enteredFromWelcome = true;
            window.location.hash = "create";
            return;
        }

        window.alert("Denne skærm er endnu ikke implementeret.");
    });
});

document.querySelector(".back-button").addEventListener("click", () => {
    if (enteredFromWelcome) {
        enteredFromWelcome = false;
        window.history.back();
    } else {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
        showScreen();
    }
});

document.querySelector(".roomie-counter__decrease").addEventListener("click", () => {
    roomies = Math.max(1, roomies - 1);
    roomieCount.value = `${roomies} ${roomies === 1 ? "roomie" : "roomies"}`;
});

document.querySelector(".roomie-counter__increase").addEventListener("click", () => {
    roomies += 1;
    roomieCount.value = `${roomies} roomies`;
});

createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Oprettelse af et bofællesskab kræver en backend. Dine indtastninger er bevaret i formularen.");
});

window.addEventListener("hashchange", showScreen);
showScreen();
