
// 🧠 DOM
const container = document.getElementById("episodes");
const bg = document.getElementById("bg");

// 🎧 global ambience başlat
initAmbience();

// 🎬 aktif ses kontrolü (çakışma önlemek için)
let hoverTimeout = null;

function createCard(ep){

  const card = document.createElement("div");
  card.className = "card";

  // 🖼️ kart görseli
  card.style.backgroundImage = `url(${ep.image})`;

  card.innerHTML = `
    <h3>${ep.title}</h3>
  `;

  // 🎬 HOVER (Netflix preview sistemi)
  card.addEventListener("mouseenter", () => {

    // 🧠 debounce (çok hızlı hover sesini engeller)
    if(hoverTimeout) clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {

      // 🎥 arka plan değiştir
      if(bg){
        bg.style.backgroundImage = `url(${ep.image})`;
      }

      // 🎧 preview ses
      playAudio(ep.audio);

    }, 100);

  });

  // 🎬 CLICK (sinematik geçiş)
  card.addEventListener("click", () => {

    // 🎥 fade-out efekti
    document.body.style.transition = "0.4s";
    document.body.style.opacity = "0";

    setTimeout(() => {

      window.location.href = `episode.html?id=${ep.id}`;

    }, 400);

  });

  return card;
}

// 🚀 EPİSODE RENDER
function initHome(){

  if(!episodes || episodes.length === 0){
    console.error("episodes.js yüklenmedi!");
    return;
  }

  episodes.forEach(ep => {
    container.appendChild(createCard(ep));
  });

}

// ▶️ BAŞLAT
initHome();
