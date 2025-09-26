import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideUpAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    // Make entering and leaving pages absolute so they can overlap
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),

    group([
      // Old page slides up and fades out
      query(':leave', [
        animate('800ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ], { optional: true }),

      // New page slides in from below and fades in
      query(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }))
      ], { optional: true }),
    ])
  ])
]);
