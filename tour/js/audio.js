import { audioOn } from './state.js';

export function speakTxt(txt){
  if(!audioOn || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(txt);
  u.lang = 'tr-TR';
  u.rate = 0.9;

  window.speechSynthesis.speak(u);
}

export function stopAud(){
  window.speechSynthesis?.cancel();
}
