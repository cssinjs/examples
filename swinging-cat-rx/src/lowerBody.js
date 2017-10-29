import jss from './jss'
import * as theme from './theme'
import leg from './leg'
import tail from './tail'
import { swingAnimation, reverseSwingAnimation } from './animation'

const styles = {
  catLowerWrap: {
    height: '90%',
    position: 'absolute',
    top: '100%',
    width: 75,
    left: 'calc(50% - 37.5px)',
    ...reverseSwingAnimation(theme.durationSeconds, 200),
    transformOrigin: 'top center'
  },
  catLower: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...swingAnimation(theme.durationSeconds, 500),
    transformOrigin: 'top center',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 100,
      backgroundImage: `radial-gradient(circle at 10px 50px, #ffffff, #ffffff 40%, ${theme.colorFurLight} 65%, ${theme.colorFurDark})`,
      zIndex: 1
    }
  }
}

const {classes} = jss.createStyleSheet(styles, {link: true}).attach()

export default () => `
  <div class=${classes.catLowerWrap}>
    <div class=${classes.catLower}>
      ${leg(true)}
      ${leg(false)}
      ${tail()}
    </div>
  </div>
`
