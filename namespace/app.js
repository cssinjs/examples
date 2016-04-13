// Styles
var styles = {
  button1: {
    padding: '20px',
    background: 'blue'
  },
  button2: {
    padding: '20px',
    background: 'green'
  }
}

// Application logic.
var classes = jss.createStyleSheet(styles).attach().classes

document.body.innerHTML = '\
  <button class="'+ classes.button1 +'">Button 1</button>\
  <button class="'+ classes.button2 +'">Button 2</button>\
'
