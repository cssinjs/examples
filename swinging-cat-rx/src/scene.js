import jss from './jss'
import * as theme from './theme'
import yarn from './yarn'
import upperBody from './upperBody'
import lowerBody from './lowerBody'
import { swingAnimation, reverseSwingAnimation, bobAnimation } from './animation'

const styles = {
  root: {
    width: '100%',
    height: '100%',
    ...bobAnimation(theme.durationSeconds, 0, theme.easing),
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
    ...swingAnimation(theme.durationSeconds, 200),
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
