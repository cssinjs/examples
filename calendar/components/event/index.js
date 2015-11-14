import jss from '../jss'
import * as utils from '../utils'
import * as contentTpl from './content-tpl'
import styles from './styles'

const sheet = jss.createStyleSheet(styles)

let uid = 0

export default class Event {
  /**
   * Event view constructor.
   * @param {Object} options
   */
  constructor(options) {
    this.id = ++uid
    this.start = options.start
    this.end = options.end
    this.title = options.title || 'Sample Item'
    this.location = options.location || 'Sample Location'
    this.element = null
    this.style = null
  }

  /**
   * Create elements.
   *
   * @return {Event}
   */
  create() {
    sheet.attach()
    this.element = utils.createElement('div', {
      class: sheet.classes.container
    })
    this.element.innerHTML = contentTpl.compile({
      classes: sheet.classes,
      title: this.title,
      location: this.location
    })
    for (const key in this.style) {
      this.element.style[key] = this.style[key]
    }
    return this
  }

  /**
   * Destroy event.
   *
   * @return {Event}
   */
  destroy() {
    this.element.parentNode.removeChild(this.element)
    return this
  }

  /**
   * Set inline styles.
   *
   * @return {Event}
   */
  setStyle(style) {
    this.style = style
    return this
  }
}
