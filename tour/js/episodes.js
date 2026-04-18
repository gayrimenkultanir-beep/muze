const params = new URLSearchParams(window.location.search);
let id = parseInt(params.get("id"));

const ep = episodes.find(e => e.id === id);

document.getElementById("title").innerText = ep.title;
document.getElementById("story").innerText = ep.story;

document.getElementById("bg").style.backgroundImage =
  `url(${ep.image})`;

const audio = new Audio(ep.audio);
audio.play();

function next(){
  window.location.href = `episode.html?id=${id+1}`;
}
