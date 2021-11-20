// grab image element from the dom
const img = document.querySelector(".img");

// set an array or hash of random images from the web
const images = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    alt: "Forest"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
    alt: "Foggy mountains"
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400",
    alt: "Bridge in forest"
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    alt: "Flower field"
  },
  {
    src: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400",
    alt: "Green trees"
  }
];

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
