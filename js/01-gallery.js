import { galleryItems } from "./gallery-items.js";
// Change code below this line

let galleryListArray = [];

galleryItems.forEach((galleryItem) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  const innerString = `<a class="gallery__link" href="${galleryItem.original}">
<img
  class="gallery__image"
  src="${galleryItem.preview}"
  data-source="${galleryItem.original}"
  alt="${galleryItem.description}"
/>
</a>`;
  listItem.insertAdjacentHTML("beforeend", innerString);

  galleryListArray.push(listItem);
});

gallery.append(...galleryListArray);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", handler);
      },
      onClose: () => {
        document.removeEventListener("keydown", handler);
      },
    }
  );
  const handler = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
  instance.show();
});
console.log(galleryItems);
