import injectSheet from 'react-jss'
import React, {Component} from 'react'
import {render} from 'react-dom'
import times from 'lodash/utility/times'
import random from 'lodash/number/random'

var container = document.body.appendChild(document.createElement('div'))

const Controls = ({onAdd, amount}) => (
  <div>
    <input readOnly value={`${amount} objects`} />
    <button onClick={onAdd}>Render 30 more</button>
  </div>
)

const createObjects = ({amount}) => {
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

  state = {amount: 10}

  onAdd = () => {
    this.setState({amount: this.state.amount + this.props.step})
  }

  render() {
    const {amount} = this.state

    return (
      <div>
        <Controls onAdd={this.onAdd} amount={amount} />
        <Animation amount={amount} Component={createObjects({amount})} />
      </div>
    )
  }
}

render(<App />, container )

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0x1000000).toString(16)
}
