let images = [];
let index = 0;

function loadCarousel(imgs){

  images = imgs;
  index = 0;

  render();
}

function render(){

  const box = document.getElementById("gallery");

  if(!box) return;

  box.innerHTML = `
    <button onclick="prev()">◀</button>

    <img src="${images[index]}" style="width:60%; border-radius:12px;" />

    <button onclick="next()">▶</button>
  `;
}

function next(){
  index = (index + 1) % images.length;
  render();
}

function prev(){
  index = (index - 1 + images.length) % images.length;
  render();
}
