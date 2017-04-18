import random from 'lodash/number/random'

export const getRandomColor = () => (
  '#' + Math.floor(Math.random() * 0x1000000).toString(16)
)

export const getRandomTransform = () => {
  var x = random(0, window.innerWidth)
  var y = random(0, window.innerHeight)
  return `translate3d(${x}px, ${y}px, 0)`
}

export const tick = (() => {
  const delay = 100
  let lastTime = Date.now()

  return function tick(callback) {
    const now = Date.now()
    if (now - lastTime > delay) {
      callback()
      lastTime = now
    }
    requestAnimationFrame(tick.bind(null, callback))
  }
})()
