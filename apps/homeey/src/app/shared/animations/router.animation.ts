import { animateChild, group, query, stagger, transition, trigger, useAnimation } from '@angular/animations';
import { fadeInAnimation } from '@ionar/animations';

export const routerAnimation = trigger('routerAnimation', [
  transition('* => *', [
    useAnimation(fadeInAnimation, { params: { timing: 600 } }),
  ])

]);