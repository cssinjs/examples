import conf from '../conf'

export const width = conf.canvas.width
export const height = conf.height
export const padding = 10
export const contentWidth = width - padding * 2

export const rules = {
  canvas: {
    position: 'relative',
    float: 'left',
    width,
    height,
    background: '#ececec',
    borderLeft: '1px solid #d5d5d5',
    boxSizing: 'border-box'
  },
  content: {
    position: 'absolute',
    left: padding,
    width: contentWidth,
    height
  }
}
