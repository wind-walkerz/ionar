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


export const slideOutUpAnimation: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: `translate3d(0, 0, 0)`
        }),
        style({
          transform: `translate3d(0, -100%, 0)`,
          visibility: 'hidden'
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const slideOutUp: AnimationTriggerMetadata = trigger('slideOutUp', [
  transition('* => *', [
    useAnimation(slideOutUpAnimation)
  ])
]);

