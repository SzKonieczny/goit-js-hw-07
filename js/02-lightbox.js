import { galleryItems } from "./gallery-items.js";
// Change code below this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

let listArray = [];

galleryItems.forEach((galleryItem) => {
  const listItem = document.createElement("li");
  const innerString = `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>`;
  listItem.insertAdjacentHTML("beforeend", innerString);
  listArray.push(listItem);
});
gallery.append(...listArray);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
