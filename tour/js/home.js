const container = document.getElementById("episodes");
const bg = document.getElementById("bg");

initAmbience();

let hoverTimeout = null;

function createCard(ep){

  const card = document.createElement("div");
  card.className = "card";

  card.style.backgroundImage = `url(${ep.image})`;

  card.innerHTML = `<h3>${ep.title}</h3>`;

  // 🎬 hover preview
  card.addEventListener("mouseenter", () => {

    if(hoverTimeout) clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {

      if(bg){
        bg.style.backgroundImage = `url(${ep.image})`;
      }

      playAudio(ep.audio);

    }, 120);

  });

  // 🎬 click → episode
  card.addEventListener("click", () => {

    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = `episode.html?id=${ep.id}`;
    }, 400);

  });

  return card;
}

function initHome(){

  if(!episodes) return;

  episodes.forEach(ep => {
    container.appendChild(createCard(ep));
  });

}

initHome();
