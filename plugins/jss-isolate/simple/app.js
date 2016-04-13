// Application
jss.default.use(jssIsolate.default())
var sheet = jss.default.createStyleSheet(window.styles).attach()

document.body.innerHTML = '<a class="'+ sheet.classes.button +'">Button</a>'
