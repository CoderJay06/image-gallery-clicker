const img = document.querySelector(".img");

async function fetchImages() {
  const request = await fetch("../src/images.json");
  const json = await request.json();

  return json;
}

fetchImages().then((data) => {
  const { images } = data;

  const generateRandomIndex = () => Math.floor(Math.random() * images.length);

  function loadImage() {
    const currentImgSrc = img.src;
    let randomImg = images[generateRandomIndex()];

    // if current image is same keep generating a new one
    while (randomImg.src === currentImgSrc) {
      randomImg = images[generateRandomIndex()];
    }

    img.setAttribute("src", randomImg.src);
    img.setAttribute("alt", randomImg.alt);
  }

  img.addEventListener("click", loadImage);

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
      loadImage(); // when space bar clicked
    }
  });

  loadImage(); // on page load
});
