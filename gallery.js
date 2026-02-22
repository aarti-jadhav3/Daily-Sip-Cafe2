const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}
