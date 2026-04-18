import { initEvents } from './events.js';
import { showScreen } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {

  showScreen('intro');

  initEvents();

});
