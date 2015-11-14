import jss from '../jss'
import * as utils from '../utils'
import Canvas from '../canvas'
import Timeline from '../Timeline'
import EventsManager from '../events-manager'
import styles from './styles'

const sheet = jss.createStyleSheet(styles)

export default class Calendar {
  /**
   * Creates a new calendar view.
   */
  constructor(options) {
    this.timeline = new Timeline(options.timeline)
    this.canvas = new Canvas()
    this.manager = new EventsManager(this.canvas)
    this.element = null
  }

  /**
   * Renders layout.
   *
   * @return {Calendar}
   */
  create() {
    sheet.attach()
    this.element = utils.createElement('div', {
      class: sheet.classes.container
    })
    this.timeline.create()
    this.canvas.create()
    this.element.appendChild(this.timeline.element)
    this.element.appendChild(this.canvas.element)
    return this
  }

  /**
   * Render main container.
   *
   * @param {Array} events
   * @return {Calendar}
   */
  renderDay(events) {
    this.manager
      .destroy()
      .set(events)
      .render()
    return this
  }
}
