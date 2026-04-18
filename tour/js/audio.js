let currentAudio = null;

function playAudio(src){

  const next = new Audio(src);
  next.volume = 0;
  next.play();

  let t = 0;

  const fade = setInterval(() => {

    t += 0.05;

    if(currentAudio) currentAudio.volume = 1 - t;
    next.volume = t;

    if(t >= 1){
      if(currentAudio) currentAudio.pause();
      currentAudio = next;
      clearInterval(fade);
    }

  }, 50);

}
let ambience;

function initAmbience(){

  ambience = new Audio("/tour/audio/ambience.mp3");
  ambience.loop = true;
  ambience.volume = 0.3;

  // ⚠️ önemli: autoplay kısıtlaması için kullanıcı etkileşimi gerekir
  ambience.play().catch(() => {
    console.log("Kullanıcı etkileşimi bekleniyor");
  });

}
