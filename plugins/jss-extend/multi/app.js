// Application
jss.default.use(jssExtend.default())
var sheet = jss.default.createStyleSheet(window.styles).attach()

var buttons = document.querySelectorAll('button')

buttons[0].className = sheet.classes.button0
buttons[1].className = sheet.classes.button1
