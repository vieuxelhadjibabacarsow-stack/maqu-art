"use strict";
const images = document.querySelectorAll("[data-lightbox]");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeButton = document.querySelector("[data-lightbox-close]");
// Agrandir les images
images.forEach((image) => {
    image.addEventListener("click", () => {
        if (!lightbox || !lightboxImage)
            return;
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.showModal();
    });
});
// Fermer la galerie
closeButton?.addEventListener("click", () => {
    lightbox?.close();
});
// Fermer en cliquant sur le fond
lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});
// Éclairage de la galerie
const galleryLighting = document.querySelector("#gallery-lighting");
const lampButton = document.querySelector("[data-lamp-toggle]");
let galleryLightsOn = false;
lampButton?.addEventListener("click", () => {
    if (!galleryLighting)
        return;
    galleryLightsOn = !galleryLightsOn;
    galleryLighting.classList.toggle("gallery-lights-on", galleryLightsOn);
    lampButton.textContent = galleryLightsOn
        ? "ÉTEINDRE L'ÉCLAIRAGE"
        : "ALLUMER L'ÉCLAIRAGE";
});
