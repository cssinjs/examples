import {Observable, Subject} from 'rxjs'
import 'hammerjs'
import dynamics from 'dynamics.js'

export const swingAnimationValues = [5, -10, 15, -23, 23, -15, 10, -10, 5]

export const animationSubject = new Subject(0)

const subscription = animationSubject.subscribe(
  x => console.log('Next: ' + x),
  err => console.log('Error: ' + err),
  () => console.log('Completed')
)

export const rotate = ($val, $mult) => `rotate(${$val * $mult}deg)`
export const translateY = ($val, $mult) => `translateY(${$val * $mult}px)`
export const translateX = ($val, $mult) => `translateX(${$val * $mult}px)`

export const swingAnimation = ($mult = 1, animation = rotate) => 
  animationSubject.map($val => animation($val, $mult))

export const setupAnimation = function() {
  const cat = document.querySelector('#cat');
  const hCat = new Hammer(cat);
  const noop = () => {};

  const springBack = fromX => Observable
    .fromEventPattern(handler => dynamics.animate(
      { deltaX: fromX },
      { deltaX: 0 },
      {
        change: e => handler(e.deltaX),
        type: dynamics.spring,
        duration: 3000,
        bounciness: 500,
        friction: 100
      }
    ), noop)

  const pan$ = Observable
    .fromEventPattern(handler =>
      hCat.on('panleft panright panend', handler), noop)

  const move$ = pan$
    .switchMap(e => e.type === 'panend'
      ? springBack(e.deltaX)
      : Observable.of(e.deltaX))
    .startWith(0)

  move$.subscribe(deltaX => animationSubject.next(-deltaX * .1))
}
