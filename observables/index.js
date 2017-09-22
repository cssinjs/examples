import jss from 'jss'
import {Subject} from 'rxjs'
import {getPosition} from './utils'

// Create subjects first in order to stream positions later in.
const top$ = new Subject()
const left$ = new Subject()

// Create the style sheet.
const {classes} = jss.createStyleSheet({
  box: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: 'black',
    color: 'white',
    cursor: 'move',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    top: top$,
    left: left$
  }
// Use option `link: true` in order to connect CSSStyleRule with the JSS StyleRule.
}, {link: true}).attach()


// Render DOM.
const box = document.body.appendChild(document.createElement('div'))
box.textContent = 'Drag me'
box.className = classes.box

// Stream positions from the mouse observer to our subjects.
getPosition(box).forEach(({left, top}) => {
  top$.next(`${top}px`)
  left$.next(`${left}px`)
})
