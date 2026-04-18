import { STOPS } from './data.js';
import { speakTxt } from './audio.js';
import { cur } from './state.js';

export function renderStop(idx){

  const s = STOPS[idx];

  const tb = document.getElementById('tb');

  const bodyHtml = (s.m || '')
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g,'<br>')}</p>`)
    .join('');

  tb.innerHTML = `
    <h2 class="stitle">${s.t}</h2>
    <p class="ssub">${s.s}</p>
    <div class="sbody">${bodyHtml}</div>
    <div class="qa"><div class="qaq">${s.q}</div></div>
  `;

  const pct = Math.round(((idx+1)/STOPS.length)*100);

  document.getElementById('pf').style.width = pct+'%';
  document.getElementById('ppct').textContent = '%'+pct;
  document.getElementById('hTit').textContent = `DURAK ${idx+1} / ${STOPS.length}`;

  speakTxt(s.t + '. ' + s.s);
}
