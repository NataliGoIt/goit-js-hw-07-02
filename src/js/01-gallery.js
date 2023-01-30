import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const instance = basicLightbox.create(`
<img src="" class="gallery__image">`);

function galleryMarkUp(items) {
  const markup = items
    .map(
      ({
        preview,
        original,
        description,
      } = items) => `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
  gallery.innerHTML = markup;
}
galleryMarkUp(galleryItems);
gallery.addEventListener("click", onShow);

function onShow(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const img = instance.element().querySelector(".gallery__image");
  img.src = e.target.dataset.source;

  instance.show();
  onClose();
}
function onClose() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
