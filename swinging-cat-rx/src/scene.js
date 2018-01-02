import jss from './jss'
import * as theme from './theme'
import yarn from './yarn'
import upperBody from './upperBody'
import lowerBody from './lowerBody'
import { swingAnimation, animationSubject } from './animation'

const styles = {
  root: {
    width: '100%',
    height: '100%',
    transition: `rotate ${theme.easing}`,
    transform: animationSubject.map(x => `translateY(${x * 0.1}rem)`),
  },
  scene: {
    top: '10rem',
    left: 'calc(50% - 2.5rem)',
    position: 'absolute',
    width: '5rem',
    height: '5rem',
    transformOrigin: 'center -20rem',
    transition: `rotate ${theme.easing}`,
    transform: swingAnimation(),
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
    transform: swingAnimation(-1),
    transformOrigin: 'top center'
  },
  cat: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: swingAnimation(),
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
        <div class=${classes.cat} id='cat'>
          ${upperBody()}
          ${lowerBody()}
        </div>
      </div>
    </div>
  `
  return root
}
