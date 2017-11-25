import jss from './jss'
import * as theme from './theme'
import yarn from './yarn'
import upperBody from './upperBody'
import lowerBody from './lowerBody'
import { swingAnimation, reverseSwingAnimation, bobAnimation } from './animation'
import { controlledSwingAnimation } from './controlledAnimation'

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
    transformOrigin: `center -${theme.yarnLength}rem`,
    // ...swingAnimation(theme.durationSeconds, 0, theme.easing),
    ...controlledSwingAnimation(1, theme.easing, theme.yarnLength),
    '&:before': {
      content: '""',
      height: `${theme.yarnLength}rem`,
      width: 2,
      backgroundColor: theme.colorYarn,
      left: 'calc(50% - 1px)',
      bottom: `${theme.yarnLength}rem`
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
