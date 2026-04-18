import { notes, notesPg, PPG } from './state.js';

export function renderNotes(){

  const nl = document.getElementById('nl');

  const start = (notesPg-1)*PPG;
  const slice = notes.slice(start, start+PPG);

  nl.innerHTML = slice.map(n=>`
    <div class="nc">
      <b>${n.name}</b> (${n.city})
      <p>${n.note}</p>
    </div>
  `).join('');
}
