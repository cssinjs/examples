// Styles
var styles = {
  '@global': {
    '.square': {
      float: 'left',
      width: '100px',
      height: '100px',
      background: 'red'
    }
  }
}

// Application logic.
var sheet = jss.default.use(jssGlobal.default()).createStyleSheet(styles).attach()

document.body.innerHTML = '\
  <div class="square">\
    <button>Detach</button>\
    <button>Attach</button>\
  </div>\
'

var buttons = document.getElementsByTagName('button')

buttons[0].addEventListener('click', function() {
  sheet.detach()
})

buttons[1].addEventListener('click', function() {
  sheet.attach()
})
