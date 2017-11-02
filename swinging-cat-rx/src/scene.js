import jss from './jss'
import * as theme from './theme'
import yarn from './yarn'
import upperBody from './upperBody'
import lowerBody from './lowerBody'
import { swingAnimation, reverseSwingAnimation, createAnimation } from './animation'


const animationIteration = [
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

const styles = {
  root: {
    width: '100%',
    height: '100%',
    ...createAnimation(theme.durationSeconds, 0, theme.easing, 0.3, animationIteration, x => `translateY(${x}rem)`)
  },
  scene: {
    top: '10rem',
    left: 'calc(50% - 2.5rem)',
    position: 'absolute',
    width: '5rem',
    height: '5rem',
    transformOrigin: 'center -20rem',
    ...swingAnimation(theme.durationSeconds, 0, theme.easing),
    '&:before': {
      content: '""',
      height: '20rem',
      width: 2,
      backgroundColor: theme.colorYarn,
      left: 'calc(50% - 1px)',
      bottom: '20rem'
    }
  },
  catWrap: {
    position: 'absolute',
    top: 0,
    left: 'calc(50% - 45px)',
    width: 90,
    height: 130,
    ...reverseSwingAnimation(theme.durationSeconds, 0, theme.easing),
    transformOrigin: 'top center'
  },
  cat: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...swingAnimation(theme.durationSeconds, 0.2),
    transformOrigin: 'top center'
  }
}
const {classes} = jss.createStyleSheet(styles, {link: true}).attach()


export default () => {
  const root = document.createElement('div')
  root.className = classes.root

  root.innerHTML = `
    <div class=${classes.scene}>
      ${yarn()}
      <div class=${classes.catWrap}>
        <div class=${classes.cat}>
          ${upperBody()}
          ${lowerBody()}
        </div>
      </div>
    </div>
  `
  return root
}
