let imgIndex = 0;

function loadImages(images){

  window.images = images;
  document.getElementById("img").src = images[0];

}

function nextImg(){
  imgIndex++;
  if(imgIndex >= images.length) imgIndex = 0;
  document.getElementById("img").src = images[imgIndex];
}

function prevImg(){
  imgIndex--;
  if(imgIndex < 0) imgIndex = images.length - 1;
  document.getElementById("img").src = images[imgIndex];
}
