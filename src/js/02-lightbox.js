import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function galleryMarkUp(items) {
  const markup = items
    .map(
      ({
        preview,
        original,
        description,
      } = items) => `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
  galleryEl.innerHTML = markup;
}

galleryMarkUp(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "botton",
});
// }
