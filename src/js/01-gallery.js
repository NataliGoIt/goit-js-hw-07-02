import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
console.log(galleryItems);
const instance = basicLightbox.create(`<img src="" class="gallery__image">`);
function galleryMarkUp(items) {
  const markup = items
    .map(
      ({
        preview,
        original,
        description,
      } = items) => `<a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
  // console.log(markup);
  gallery.innerHTML = markup;
}
galleryMarkUp(galleryItems);
gallery.addEventListener("click", onShow);
function onShow(e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target !== ".img") {
    return;
  }
  instance.show();
  console.log(e.target);
}
