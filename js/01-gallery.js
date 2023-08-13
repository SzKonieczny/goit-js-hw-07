import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

// Tworzenie i renderowanie znacznika na podstawie danych z galerii
function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute("data-source", item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

galleryItems.forEach((item) => {
  galleryContainer.appendChild(createGalleryItem(item));
});

// Implementacja funkcji obsługującej otwarcie okna modalnego
function openModal(src) {
  const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
  `);

  instance.show();
}

// Obsługa kliknięcia w element galerii i otwarcie okna modalnego
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const source = event.target.getAttribute("data-source");
    openModal(source);
  }
});

// Obsługa zamknięcia okna modalnego po naciśnięciu klawisza Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    basicLightbox.close();
  }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const galleryContainer = document.querySelector(".gallery");

// // Tworzenie i renderowanie znacznika na podstawie danych z galerii
// function createGalleryItem(item) {
//   const galleryItem = document.createElement("li");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = item.original;

//   const galleryImage = document.createElement("img");
//   galleryImage.classList.add("gallery__image");
//   galleryImage.src = item.preview;
//   galleryImage.alt = item.description;
//   galleryImage.setAttribute("data-source", item.original);

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);

//   return galleryItem;
// }

// galleryItems.forEach((item) => {
//   galleryContainer.appendChild(createGalleryItem(item));
// });

// // Implementacja funkcji obsługującej otwarcie okna modalnego
// function openModal(src) {
//   const instance = basicLightbox.create(`
//     <img src="${src}" width="800" height="600">
//   `);

//   instance.show();
// }

// // Obsługa kliknięcia w element galerii i otwarcie okna modalnego
// galleryContainer.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.tagName === "IMG") {
//     const source = event.target.getAttribute("data-source");
//     openModal(source);
//   }
// });

// // Obsługa zamknięcia okna modalnego po naciśnięciu klawisza Escape
// window.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     basicLightbox.close();
//   }
// });
// console.log(galleryItems);
