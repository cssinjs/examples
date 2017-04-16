import random from 'lodash/number/random'

export const getRandomColor = () => (
  '#' + Math.floor(Math.random() * 0x1000000).toString(16)
)

export const getRandomTransform = () => {
  var x = random(0, window.innerWidth)
  var y = random(0, window.innerHeight)
  return `translate3d(${x}px, ${y}px, 0)`
}
