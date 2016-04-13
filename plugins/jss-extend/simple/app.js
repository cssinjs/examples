// Application
jss.default.use(jssExtend.default())
var sheet = jss.default.createStyleSheet(window.styles).attach()

document.body.innerHTML = '<button class="'+ sheet.classes.redButton +'">Button</button>'
