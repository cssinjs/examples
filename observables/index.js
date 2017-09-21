import jss from 'jss'

import {getPosition} from './utils'

const box = document.body.appendChild(document.createElement('div'))

const pos$ = getPosition(box)

const {classes} = jss.createStyleSheet({
  box: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: 'black',
    cursor: 'move',
    top: pos$.map(pos => `${pos.top}px`),
    left: pos$.map(pos => `${pos.left}px`)
  }
}, {link: true}).attach()

box.className = classes.box
