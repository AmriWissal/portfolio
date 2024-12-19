document.addEventListener("DOMContentLoaded", function () {
    // Vérification de l'existence du bouton et du paragraphe
    const button = document.querySelector(".btn");
    const paragraph = document.getElementById("dynamic-paragraph");

    if (button && paragraph) {
        // Initialement, on cache le paragraphe
        paragraph.style.display = "none";

        // Ajout de l'événement "click" au bouton
        button.addEventListener("click", function () {
            // Toggle l'affichage du paragraphe
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });
    } else {
        console.error("Le bouton ou le paragraphe n'a pas été trouvé !");
    }
});