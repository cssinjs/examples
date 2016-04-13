// Application
jss.default.use(jssIsolate.default())
var sheet = jss.default.createStyleSheet(window.styles).attach()

var button = document.querySelectorAll('a')[0]
button.className = sheet.classes.button
