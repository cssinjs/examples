(function() {

  var button0 = {
    padding: '20px',
    background: 'blue'
  }

  var redButton = {
    background: 'red'
  }

  window.styles = {
    button0: button0,
    button1: {
      extend: [button0, redButton],
      'font-size': '20px'
    }
  }

}())
