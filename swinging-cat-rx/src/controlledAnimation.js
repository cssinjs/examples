import { Observable } from 'rxjs'

export function controlledSwingAnimation(duration, transitionType, yarnLength) {
  return {
    transform: createControlledAnimation(duration, yarnLength).map(x => `rotate(${x}deg)`),
    transition: `transform ${duration}s ${transitionType}`
  }
}

function createControlledAnimation(duration, yarnLength) {
  const fromTop = yarnLength * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const radiansToDegrees = 180 / Math.PI;
  const middle = window.innerWidth / 2;
  const interval = duration * 1000

  const iterations = [1, -0.8, 0.6, -0.4, 0.2, 0]

  const $mouseDown = Observable.fromEvent(document.body, 'mousedown')

  const $swing = $mouseDown
    .switchMap(() => Observable.timer(0, interval).take(iterations.length))
    .map(x => iterations[x])

  return $mouseDown
    .map(event => Math.atan2(fromTop, event.screenX - middle) * radiansToDegrees - 90)
    .combineLatest($swing, (degree, iteration) => degree * iteration)
}