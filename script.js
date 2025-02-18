document.addEventListener("DOMContentLoaded", function() {
    let progressBar = document.getElementById("progress-bar");

    // Recupera il valore della larghezza iniziale (preimpostata a 18%)
    let percentage = parseInt(progressBar.style.width);
    
    // Imposta il testo dinamicamente
    progressBar.textContent = percentage + "%";
});