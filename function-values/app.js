jss.default.setup(jssPreset.default())

var container = document.body.appendChild(document.createElement('div'))

var objectsAmount = 10
var sheet

function renderObjects() {
  var styles = {}

  for (var i = 0; i < objectsAmount; i++) {
    styles['object-' + i] = {
      position: 'absolute',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: getRandomColor(),
      transform: function() {
        var x = random(0, window.innerWidth)
        var y = random(0, window.innerHeight)
        return 'translate3d('+ x + 'px,' + y + 'px, 0)'
      },
      transition: 'transform 500ms'
    }
  }

  if (sheet) sheet.detach()
  sheet = jss.default.createStyleSheet(styles, {link: true}).attach()

  console.log(sheet.toString())

  var html = ''
  for (var i = 0; i < objectsAmount; i++) {
    html+= '<div class="'+ sheet.classes['object-' + i] +'" ></div>'
  }
  container.innerHTML = html
}

renderObjects()

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0x1000000).toString(16);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

var lastTime = Date.now()
var delay = 100

function animate() {
  var now = Date.now()
  if (now - lastTime > delay) {
    sheet.update()
    lastTime = now
  }
  requestAnimationFrame(animate)
}

animate()

document.querySelector('#add-objects').addEventListener('click', function() {
  objectsAmount += 30
  document.querySelector('#objects-amount').value = objectsAmount + ' objects'
  renderObjects()
})
