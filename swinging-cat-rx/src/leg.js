import jss from './jss'
import * as theme from './theme'
import { swingLegAnimation } from './animation'


const styles = {
  catLowerLegPaw: {
    position: 'absolute',
    height: 20,
    width: 20,
    ...swingLegAnimation(theme.durationSeconds, 300),
    zIndex: 1,
    transformOrigin: 'top center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundImage: `linear-gradient(to right, #fff, ${theme.colorFurLight}, ${theme.colorFurDark})`
  },
  catLegFirstNested: {
    bottom: 20
  },
  catLegNested: {
    top: '25%'
  },
  catLegSecond: {
    right: 0
  },
  catLowerPaw: {
    top: '50%',
    borderRadius: '50%',
    backgroundColor: '#fff'
  }
}

const {classes} = jss.createStyleSheet(styles, {link: true}).attach()

export default (isFirstLeg) => {
  let leg = ''
  if (isFirstLeg) {
    leg = `<div class="${classes.catLowerLegPaw} ${classes.catLegFirstNested}">`
  } else {
    leg = `<div class="${classes.catLowerLegPaw} ${classes.catLegFirstNested} ${classes.catLegSecond}">`
  }
  for (let t = 0; t <= 15; t++) {
    leg += `<div class="${classes.catLowerLegPaw} ${classes.catLegNested}">`
  }
  leg += `<div class="${classes.catLowerLegPaw} ${classes.catLowerPaw}"></div>`
  for (let t = 0; t <= 15; t++) {
    leg += '</div>'
  }
  leg += '</div>'
  return leg
}
