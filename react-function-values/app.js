import injectSheet from 'react-jss'
import React, {Component} from 'react'
import {render} from 'react-dom'
import times from 'lodash/utility/times'
import random from 'lodash/number/random'

var container = document.body.appendChild(document.createElement('div'))

const Controls = ({onAdd, amount, classes, onChangeRenderer}) => (
  <div>
    <form >
      Render using:
      <select onChange={onChangeRenderer}>
        <option value="jss">JSS</option>
        <option value="inline">Inline Styles</option>
      </select>
    </form>
    <form>
      <input readOnly value={`${amount} objects`} />
      <button onClick={onAdd}>Render 30 more</button>
    </form>
  </div>
)

const renderers = {}

renderers.jss = ({amount}) => {
  class Objects extends Component {
    shouldComponentUpdate = () => false

    render() {
      const {classes} = this.props
      return (
        <div>
          {times(amount, (i) => <div key={i} className={classes[`object${i}`]} />)}
        </div>
      )
    }
  }

  const styles = {}

  times(amount, (i) => {
    styles[`object${i}`] = {
      position: 'absolute',
      width: 50,
      height: 50,
      borderRadius: '50%',
      transition: 'transform 500ms',
      background: getRandomColor(),
      transform: () => {
        var x = random(0, window.innerWidth)
        var y = random(0, window.innerHeight)
        return `translate3d(${x}px, ${y}px, 0)`
      }
    }
  })

  return injectSheet(styles)(Objects)
}

renderers.inline = ({amount}) => {
  class Objects extends Component {
    render() {
      return (
        <div>
          {times(amount, (i) => {
            var x = random(0, window.innerWidth)
            var y = random(0, window.innerHeight)
            const transform = `translate3d(${x}px, ${y}px, 0)`

            const style = {
              position: 'absolute',
              width: 50,
              height: 50,
              borderRadius: '50%',
              transition: 'transform 500ms',
              background: getRandomColor(),
              transform
            }
            return <div key={i} style={style} />
          })}
        </div>
      )
    }
  }

  return Objects
}

class Animation extends Component {
  lastTime = Date.now()

  delay = 100

  constructor(props) {
    super(props)
    this.animate()
  }

  animate = () => {
    var now = Date.now()
    if (now - this.lastTime > this.delay) {
      this.forceUpdate()
      this.lastTime = now
    }
    requestAnimationFrame(this.animate)
  }

  render() {
    const {Component} = this.props
    return <Component />
  }
}

class App extends Component {
  static defaultProps = {
    step: 30
  }

  state = {
    amount: 10,
    renderer: 'jss'
  }

  onAdd = (e) => {
    e.preventDefault()
    this.setState({amount: this.state.amount + this.props.step})
  }

  onChangeRenderer = (e) => {
    this.setState({renderer: e.target.value})
  }

  render() {
    const {amount, renderer} = this.state
    const Component = renderers[renderer]({amount})
    return (
      <div>
        <Controls onAdd={this.onAdd} amount={amount} onChangeRenderer={this.onChangeRenderer}/>
        <Animation amount={amount} Component={Component} />
      </div>
    )
  }
}

render(<App />, container )

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0x1000000).toString(16)
}
