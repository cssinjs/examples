// Styles
var styles = {
  button: {
    'font-size': 20,
    'z-index': 1,
    'line-height': 1.2
  }
}

// JSS Setup
jss.default.use(jssDefaultUnit.default())
var sheet = jss.default.createStyleSheet(styles).attach()

// Application logic
document.body.innerHTML = '<button class="'+ sheet.classes.button +'">Button</button>'
