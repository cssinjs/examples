import conf from '../conf'

export default {
  timeline: {
    position: 'relative',
    float: 'left',
    width: conf.timeline.width,
    height: conf.height,
    padding: '0 7px 0 0',
    boxSizing: 'border-box',
    // Middle of the number should be the start.
    marginTop: -conf.fontSize / 2
  },
  timeContainer: {
    position: 'absolute',
    width: '100%',
    paddingRight: 10,
    textAlign: 'right',
    boxSizing: 'border-box',
    cursor: 'pointer',
    '&:hover span': {
      color: '#4b6ea8'
    }
  },
  time: {
    fontSize: 10,
    color: '#999'
  },
  timeWithSuffix: {
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 5
  }
}
