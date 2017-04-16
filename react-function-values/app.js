import injectSheet from 'react-jss'
import React, {Component} from 'react'
import {render} from 'react-dom'
import reactJssRenderer from './react-jss'
import inlineRenderer from './inline-styles'

const renderers = {
  'react-jss': reactJssRenderer,
  inline: inlineRenderer
}

const Controls = ({onAdd, amount, classes, onChangeRenderer}) => (
  <div>
    <form >
      Render using:
      <select onChange={onChangeRenderer}>
        <option value="react-jss">react-jss</option>
        <option value="inline">Inline Styles</option>
      </select>
    </form>
    <form>
      <input readOnly value={`${amount} objects`} />
      <button onClick={onAdd}>Render 30 more</button>
    </form>
  </div>
)

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
    renderer: 'react-jss'
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

var container = document.body.appendChild(document.createElement('div'))
render(<App />, container )
