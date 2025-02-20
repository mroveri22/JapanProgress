document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById("progress-bar");

    let percentage = 22; // Imposta qui il valore della percentuale

    // Applica la larghezza della barra in base alla percentuale
    progressBar.style.width = percentage + "%";

    // Imposta il testo dentro la barra
    progressBar.textContent = percentage + "%";
});
