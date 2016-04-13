// Styles
var styles = {
  button1: {
    padding: '20px',
    background: 'blue',
    color: '#fff'
  },
  button2: {
    padding: '10px',
    background: 'red'
  }
}

// Application logic.
var sheet = jss.default.createStyleSheet(styles).attach()

angular
  .module('myApp', [])
  .controller('myController', function MyController($scope) {
    $scope.classes = sheet.classes
    $scope.showSource = function () {
      location.href = 'http://github.com/jsstyles/jss-examples/tree/master/angular'
    }
  })
