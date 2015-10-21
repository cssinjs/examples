// Application
jss.use(jssDebug())
var sheet = jss.createStyleSheet(window.styles, {title: 'my sheet'}).attach()
document.querySelectorAll('button')[0].className = sheet.classes.button
