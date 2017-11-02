import {Observable} from 'rxjs'

export const defaultPercents = [100, 87.5, 75, 62.5, 50, 37.5, 25, 12.5, 0]

export function createIterations(percents, values) {
  return percents.map((percent, i) => ({
    percent: percent,
    value: values[i]
  }))
}

export function createAnimationLoader(duration, delay = 0) {
  return Observable
    .interval(100)
    .delay(delay * 1000)
    .startWith(0)
    .scan(x => x > duration * 10 ? 0 : x + 1, 0)
    .map(x => x * 10 / duration)
}

function getAnimationValue($animationLoader, iterations) {
  return $animationLoader.map(percent => {
    for (let i = 0; i < iterations.length; i++) {
      if (percent >= iterations[i].percent) {
        return iterations[i].value
      }
    }
    return iterations[iterations.length - 1].value
  })
}

function getTransformTransition(time = 1, transitionType = 'linear') {
  return { transition: `transform ${time}s ${transitionType}`}
}

export function createAnimation(duration, delay, transitionType, transionTime, iterations, modifyStyle) {
  const $animationLoader = createAnimationLoader(duration, delay)
  return {
    transform: getAnimationValue($animationLoader, iterations).map(modifyStyle),
    ...getTransformTransition(transionTime, transitionType)
  }
}

export function createRotateAnimation(duration, delay, transitionType, values) {
  const iterations = createIterations(defaultPercents, values)
  return createAnimation(duration, delay, transitionType, 1, iterations, x => `rotate(${x}deg)`)
}

export function swingAnimation(duration, delay, transitionType) {
  const values = [5, -10, 15, -23, 23, -15, 10, -10, 5]
  return createRotateAnimation(duration, delay, transitionType, values)
}

export function reverseSwingAnimation(duration, delay, transitionType) {
  const values = [-5, 10, -15, 23, -23, 15, -10, 10, -5]
  return createRotateAnimation(duration, delay, transitionType, values)
}
