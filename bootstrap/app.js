// JSS setup.
var jss = window.jss.default
var preset = window.jssPreset.default
jss.setup(preset())

// Application.
var styles = {
  bootstrap: bootstrap,
  theme: bootstrapTheme,
  app: {
    composes: ['$bootstrap', '$theme']
  },
  button: {
    composes: 'btn btn-primary btn-lg'
  }
}

var sheet = jss.createStyleSheet(styles).attach()
var classes = sheet.classes

var div = document.body.appendChild(document.createElement('div'))
div.innerHTML = '\
  <div class="' + classes.app + '">\
    <button class="'+ classes.button +'">Button</button>\
  </div>\
'
