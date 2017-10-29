import jss from './jss'
import * as theme from './theme'
import { faceAnimation, blinkAnimation } from './animation'

const styles = {
  catFace: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    ...faceAnimation(theme.durationSeconds, 0, theme.easing),
    transformStyle: 'preserve-3d',
    perspective: 100
  },
  catEyes: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: 6,
    ...blinkAnimation(theme.durationSeconds, 0, 'step-end'),
    '&:before': {
      content: '""',
      left: 20,
      position: 'absolute',
      height: 6,
      width: 6,
      borderRadius: '50%',
      backgroundColor: theme.colorFeatures
    },
    '&:after': {
      content: '""',
      right: 20,
      position: 'absolute',
      height: 6,
      width: 6,
      borderRadius: '50%',
      backgroundColor: theme.colorFeatures
    }
  },
  catMouth: {
    position: 'absolute',
    width: 12,
    height: 8,
    backgroundColor: theme.colorFeatures,
    top: '60%',
    left: 'calc(50% - 6px)',
    borderTopLeftRadius: '50% 30%',
    borderTopRightRadius: '50% 30%',
    borderBottomLeftRadius: '50% 70%',
    borderBottomRightRadius: '50% 70%',
    transform: 'translateZ(10px)',
    '&:before': {
      content: '""',
      borderLeftColor: 'transparent',
      right: 'calc(50% - 1px)',
      transformOrigin: 'top right',
      transform: 'rotate(10deg)',
      position: 'absolute',
      width: '90%',
      height: '100%',
      border: `2px solid ${theme.colorFeaturesLight}`,
      top: '80%',
      borderRadius: 100,
      borderTopColor: 'transparent',
      zIndex: -1
    },
    '&:after': {
      content: '""',
      borderRightColor: 'transparent',
      left: 'calc(50% - 1px)',
      transformOrigin: 'top left',
      transform: 'rotate(-10deg)',
      position: 'absolute',
      width: '90%',
      height: '100%',
      border: `2px solid ${theme.colorFeaturesLight}`,
      top: '80%',
      borderRadius: 100,
      borderTopColor: 'transparent',
      zIndex: -1
    }
  },
  catWhiskers: {
    width: '50%',
    height: 8,
    position: 'absolute',
    bottom: '25%',
    left: '25%',
    transformStyle: 'preserve-3d',
    perspective: 60,
    '&:before': {
      content: '""',
      right: '100%',
      transformOrigin: 'right center',
      transform: 'rotateY(70deg) rotateZ(-10deg)',
      position: 'absolute',
      height: '100%',
      width: '30%',
      border: `2px solid  ${theme.colorFeaturesLight}`,
      borderLeft: 'none',
      borderRight: 'none'
    },
    '&:after': {
      content: '""',
      left: '100%',
      transformOrigin: 'left center',
      transform: 'rotateY(-70deg) rotateZ(10deg)',
      position: 'absolute',
      height: '100%',
      width: '30%',
      border: `2px solid  ${theme.colorFeaturesLight}`,
      borderLeft: 'none',
      borderRight: 'none'
    }
  }
}

const {classes} = jss.createStyleSheet(styles, {link: true}).attach()

export default () => `
  <div class=${classes.catFace}>
    <div class=${classes.catEyes}></div>
    <div class=${classes.catMouth}></div>
    <div class=${classes.catWhiskers}></div>
  </div>
`
