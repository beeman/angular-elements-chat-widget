import { animate, style, transition, trigger } from '@angular/animations'

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({opacity: 0}),
    animate(250 )
  ]),
  transition('* => void', [
    animate(250, style({
      opacity: 0,
    }))
  ])
])

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({opacity: 0}),
    animate(500 )
  ]),
  transition(':leave', [
    style({opacity: 0}),
    animate(1 )
  ]),
])
