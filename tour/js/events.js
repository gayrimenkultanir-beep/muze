import { renderStop } from './tour.js';
import { goTo } from './navigation.js';

let currentStep = 0;

export function initEvents(){

  document.addEventListener('click', function(e){

    const el = e.target.closest('[data-action]');
    if(!el) return;

    const action = el.dataset.action;

    switch(action){

      case 'startTour':
        currentStep = 0;
        goTo('tour');
        renderStop(currentStep);
        break;

      case 'nextStop':
        currentStep++;
        renderStop(currentStep);
        break;

      case 'prevStop':
        currentStep--;
        renderStop(currentStep);
        break;

      case 'goToIntro':
        goTo('intro');
        break;

      case 'goToBook':
        goTo('book');
        break;
    }
  });

}
