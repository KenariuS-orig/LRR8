const images = [
  {
    url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "People working with sticky notes and a laptop"
  },
  {
    url: "https://images.pexels.com/photos/1811991/pexels-photo-1811991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Hand holding a lightbulb"
  },
  {
    url: "https://images.pexels.com/photos/336811/pexels-photo-336811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Phone with design quote"
  },
  {
    url: "https://images.pexels.com/photos/2450406/pexels-photo-2450406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Meeting room with glass walls"
  },
  {
    url: "https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Colorful office space"
  },
  {
    url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "People working in a modern office"
  }
];
const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ url, alt }) => `
      <div class="gallery-item">
        <img src="${url}" alt="${alt}">
      </div>`
  )
  .join('');

gallery.innerHTML = galleryMarkup;