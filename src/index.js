// grab image element from the dom
const img = document.querySelector(".img");

// create function to fetch images from json file
async function fetchImages() {
  const request = await fetch("../src/images.json");
  const json = await request.json();

  return json;
}

fetchImages().then((data) => {
  const { images } = data;

  // create an image load function for loading random img
  function loadImage() {
    // set a variable to keep track of current image
    const currentImgSrc = img.src;
    let randomIdx = Math.floor(Math.random() * images.length);
    let randomImg = images[randomIdx];

    // if current image is randomly generated one keep generating new one
    while (randomImg.src === currentImgSrc) {
      randomIdx = Math.floor(Math.random() * images.length);
      randomImg = images[randomIdx];
    }

    // set attributes to be randomly generated image's
    img.setAttribute("src", randomImg.src);
    img.setAttribute("alt", randomImg.alt);
  }

  // add event listener to handle image clicks
  img.addEventListener("click", loadImage);

  // add evenet listsenr to handle space bar clicks
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
      loadImage();
    }
  });

  loadImage(); // on page load
});
