import {
  animate,
  animateChild,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';


export const slideInDownAnimation: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: `translate3d(0, -100%, 0)`,
          visibility: 'visible'
        }),
        style({
          transform: `translate3d(0, 0, 0)`
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const slideInDown: AnimationTriggerMetadata = trigger('slideInDown', [
  transition('* => *', [
    query('*', useAnimation(slideInDownAnimation)),
  ])
]);

