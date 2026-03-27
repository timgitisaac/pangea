const gallery = document.getElementById("gallery");
const photoCount = document.getElementById("photo-count");

function renderGallery(items) {
  if (!Array.isArray(items) || items.length === 0) {
    gallery.innerHTML =
      '<div class="empty">No photos yet. Upload an image into <code>images/</code> and add it to <code>photos.js</code>.</div>';
    photoCount.textContent = "0 photos";
    return;
  }

  photoCount.textContent = `${items.length} photo${items.length === 1 ? "" : "s"}`;
  gallery.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          <img src="${item.file}" alt="${item.title}" loading="lazy" />
          <div class="card-body">
            <h3>${item.title}</h3>
            <p>${item.description || ""}</p>
          </div>
        </article>
      `
    )
    .join("");
}

renderGallery(photos);
