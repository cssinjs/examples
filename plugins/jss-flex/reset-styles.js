window.resetStyles = {
  // Reset code
  '*, *:after, *:before': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0
  },

  html: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 30,
    height: 'auto',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },

  body: {
    width: '100%',
    overflowX: 'hidden',
    margin: 0,
    '*zoom': 1,

    '&:after, :before': {
      content: '""',
      display: 'table',
    },

    '&:after': {
      clear: 'both'
    }
  },

  'section:last-of-type': {
    marginBottom: 0,
  },
}
