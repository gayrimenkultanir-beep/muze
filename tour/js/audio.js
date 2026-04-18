// 🎧 GLOBAL STATE
let currentAudio = null;
let ambience = null;
let fadeInterval = null;
let userInteracted = false;

// 🟢 KULLANICI ETKİLEŞİMİ (AUTOPLAY FIX)
function enableAudioOnFirstInteraction(){

  if(userInteracted) return;

  const unlock = () => {
    userInteracted = true;

    if(ambience){
      ambience.play().catch(()=>{});
    }

    document.removeEventListener("click", unlock);
  };

  document.addEventListener("click", unlock);
}

// 🌿 AMBIENCE BAŞLAT
function initAmbience(){

  if(ambience) return;

  ambience = new Audio("/tour/assets/ambience.mp3");
  ambience.loop = true;
  ambience.volume = 0.3;

  ambience.play().catch(() => {
    console.log("Autoplay bekleniyor...");
  });

  enableAudioOnFirstInteraction();
}

// 🎬 SAHNE SESİ (CROSSFADE)
function playAudio(src){

  const next = new Audio(src);
  next.volume = 0;

  next.play().catch(()=>{});

  let t = 0;

  // eski fade varsa durdur
  if(fadeInterval){
    clearInterval(fadeInterval);
  }

  fadeInterval = setInterval(() => {

    t += 0.05;

    if(currentAudio){
      currentAudio.volume = Math.max(0, 1 - t);
    }

    next.volume = Math.min(1, t);

    if(t >= 1){

      if(currentAudio){
        currentAudio.pause();
      }

      currentAudio = next;
      clearInterval(fadeInterval);
    }

  }, 50);
}

// 🔊 AMBIENCE SES AYARI
function setAmbienceVolume(v){
  if(ambience){
    ambience.volume = v;
  }
}

// 🔊 SAHNE SES AYARI
function setSceneVolume(v){
  if(currentAudio){
    currentAudio.volume = v;
  }
}

// 🔇 TÜM SESİ DURDUR
function stopAllAudio(){

  if(currentAudio){
    currentAudio.pause();
  }

  if(ambience){
    ambience.pause();
  }
}

// 🔁 RESET (tur baştan başlarsa)
function resetAudio(){

  stopAllAudio();

  currentAudio = null;
  ambience = null;
}
