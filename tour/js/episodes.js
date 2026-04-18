const params = new URLSearchParams(window.location.search);
let id = parseInt(params.get("id")) || 1;

let currentIndex = episodes.findIndex(e => e.id === id);

// 🎬 sahne yükleme
function loadEpisode(){

  const ep = episodes[currentIndex];

  document.body.style.opacity = 0;

  setTimeout(() => {

    document.getElementById("title").innerText = ep.title;
    document.getElementById("story").innerText = ep.story;

    document.getElementById("bg").style.backgroundImage =
      `url(${ep.image})`;

    // 🎧 ses
    playAudio(ep.audio);

    // 🖼️ carousel
    loadCarousel(ep.images || [ep.image]);

    document.body.style.opacity = 1;

  }, 400);
}

// ▶️ sonraki
function next(){
  if(currentIndex < episodes.length - 1){
    currentIndex++;
    loadEpisode();
  }
}

// 🧭 direkt git
function goTo(i){
  currentIndex = i;
  loadEpisode();
}

// 🚀 başlat
loadEpisode();
