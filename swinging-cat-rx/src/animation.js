import {Observable} from 'rxjs'

/* CONSTATNST */

const TRANSFORM = 'transform'

const percents = [100, 87.5, 75, 62.5, 50, 37.5, 25, 12.5, 0]

/* UTILS */

function createIterations(percents, values) {
  return percents.map((percent, i) => ({
    percent: percent,
    value: values[i]
  }))
}

function createAnimationLoader(duration, delay = 0) {
  return Observable
    .interval(100)
    .delay(delay)
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
  return { transition: `${TRANSFORM} ${time}s ${transitionType}`}
}

function createAnimation(duration, delay, transitionType, transionTime, iterations, modifyStyle) {
  const $animationLoader = createAnimationLoader(duration, delay)
  return {
    [TRANSFORM]: getAnimationValue($animationLoader, iterations).map(modifyStyle),
    ...getTransformTransition(transionTime, transitionType)
  }
}

function createRotateAnimation(duration, delay, transitionType, values) {
  const iterations = createIterations(percents, values)
  return createAnimation(duration, delay, transitionType, 1, iterations, x => `rotate(${x}deg)`)
}

/* ANIMATIONS */

export function faceAnimation(duration, delay, transitionType) {
  const values = [-2.5, 5, -7.5, 11.5, -11.5, 7.5, -5, 5, -2.5]
  const iterations = createIterations(percents, values)
  return createAnimation(duration, delay, transitionType, 0.9, iterations, x => `translateX(${x}px)`)
}

export function blinkAnimation(duration, delay, transitionType) {
  const iterations = [
    { percent: 80, value: 1 },
    { percent: 78, value: 0.1 },
    { percent: 25, value: 1 },
    { percent: 23, value: 0.1 },
    { percent: 10, value: 1 },
    { percent: 8, value: 0.1 }
  ]
  return createAnimation(duration, delay, transitionType, 0.6, iterations, x => `scaleY(${x})`)
}

export function swingLegAnimation(duration, delay, transitionType) {
  const values = [0.5, -1, 1.5, -2.3, 2.4, -1.5, 1, -1, 0.5]
  return createRotateAnimation(duration, delay, transitionType, values)
}

export function swingTailAnimation(duration, delay, transitionType) {
  const values = [-2, 4, -6, 9.2, -9.2, 6, -4, 4, -2]
  return createRotateAnimation(duration, delay, transitionType, values)
}

export function swingAnimation(duration, delay, transitionType) {
  const values = [5, -10, 15, -23, 23, -15, 10, -10, 5]
  return createRotateAnimation(duration, delay, transitionType, values)
}

export function reverseSwingAnimation(duration, delay, transitionType) {
  const values = [-5, 10, -15, 23, -23, 15, -10, 10, -5]
  return createRotateAnimation(duration, delay, transitionType, values)
}

export function bobAnimation(duration, delay, transitionType) {
  const iterations = [
    { percent: 100, value: 0.4 },
    { percent: 93.75, value: -0.4 },
    { percent: 87.5, value: 0.4 },
    { percent: 81.25, value: -0.4 },
    { percent: 75, value: 0.4 },
    { percent: 68.75, value: -0.4 },
    { percent: 62.5, value: 0.4 },
    { percent: 56.25, value: -0.4 },
    { percent: 50, value: 0.4 },
    { percent: 43.75, value: -0.4 },
    { percent: 37.5, value: 0.4 },
    { percent: 31.25, value: -0.4 },
    { percent: 25, value: 0.4 },
    { percent: 18.75, value: -0.4 },
    { percent: 12.5, value: 0.4 },
    { percent: 6.25, value: -0.4 },
    { percent: 0, value: 0.4 }
  ]
  return createAnimation(duration, delay, transitionType, 0.3, iterations, x => `translateY(${x}rem)`)
}
