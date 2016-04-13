// Styles
var styles = {
  button: {
    transform: 'translateX(100px)'
  }
}

// JSS Setup
jss.default.use(jssVendorPrefixer())
var sheet = jss.default.createStyleSheet(styles).attach()

// Application logic
document.body.innerHTML = '<button class="'+ sheet.classes.button +'">Button</button>'
