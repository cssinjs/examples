var sheetA = jss.default.createStyleSheet(window.componentA).attach()
var sheetB = jss.default.createStyleSheet(window.componentB).attach()

var tpl = document.getElementById('template').innerHTML
var div = document.createElement('div')
div.innerHTML = tpl
  .replace('{button-a}', sheetA.classes.button)
  .replace('{button-b}', sheetB.classes.button)
document.body.appendChild(div)
