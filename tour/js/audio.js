let currentAudio = null;
let ambience = null;
let fadeInterval = null;

// 🎬 sahne sesi
function playAudio(src){

  const next = new Audio(src);
  next.volume = 0;

  next.play().catch(()=>{});

  let t = 0;

  if(fadeInterval) clearInterval(fadeInterval);

  fadeInterval = setInterval(() => {

    t += 0.05;

    if(currentAudio){
      currentAudio.volume = Math.max(0, 1 - t);
    }

    next.volume = Math.min(1, t);

    if(t >= 1){
      if(currentAudio) currentAudio.pause();
      currentAudio = next;
      clearInterval(fadeInterval);
    }

  }, 50);
}

// 🌿 ambience
function initAmbience(){

  if(ambience) return;

  ambience = new Audio("/tour/assets/ambience.mp3");
  ambience.loop = true;
  ambience.volume = 0.3;

  ambience.play().catch(()=>{});
}
