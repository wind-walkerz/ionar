import {
  animate,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';


export const fadeInAnimation: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])
    )
  ],
  { params: { timing: 1000, delay: 0 } }
);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition('* => *', [
    useAnimation(fadeInAnimation)
  ])
]);

