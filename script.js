document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById("progress-bar");

    // Ottieni il valore della larghezza come stringa (es: "18%")
    let widthString = progressBar.style.width;

    // Estrai solo il numero rimuovendo il simbolo "%"
    let percentage = parseInt(widthString.replace("%", ""));

    // Verifica se il valore è valido, altrimenti imposta un valore di default
    if (isNaN(percentage)) {
        percentage = 18; // Imposta un valore di default
        progressBar.style.width = percentage + "%"; // Applica la larghezza corretta
    }

    // Imposta il testo con la percentuale corretta
    progressBar.textContent = percentage + "%";
});
