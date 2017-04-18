import injectSheet from 'react-jss'
import React, {Component} from 'react'
import {render} from 'react-dom'
import reactJssRenderer from './reactJssRenderer'
import reactInlineRenderer from './reactInlineRenderer'
import * as jssRenderer from './jssRenderer'
import {tick} from './utils'

const Controls = ({onAdd, amount, classes, onChangeRenderer}) => (
  <div>
    <form style={{marginBottom: 10}}>
      Render using:
      <select onChange={onChangeRenderer} defaultValue="jss">
        <option value="jss">Pure JSS</option>
        <option value="react-jss">React-JSS</option>
        <option value="inline">React Inline Styles</option>
      </select>
    </form>
    <form>
      <input readOnly value={`${amount} objects`} />
      <button onClick={onAdd}>Render 30 more</button>
    </form>
    <p>Enable FPS Meter in DevTools if you want to see the difference in numbers.</p>
  </div>
)

let update

tick(() => {
  if (update) update()
})

class ReactAnimation extends Component {
  constructor(props) {
    super(props)
    update = this.forceUpdate.bind(this)
    this.Renderer = this.getRenderer(props)
  }

  componentWillReceiveProps(nextProps) {
    this.Renderer = this.getRenderer(nextProps)
  }

  getRenderer({renderer, amount}) { 
    const createRenderer = renderer === 'inline' ? reactInlineRenderer : reactJssRenderer
    return createRenderer(amount)
  }

  render() {
    return <this.Renderer />
  }
}

class JssAnimation extends Component {
  constructor(props) {
    super(props)
    update = jssRenderer.update
  }

  componentWillReceiveProps({amount}) {
    jssRenderer.render(amount)
  }

  componentWillMount() {
    update = jssRenderer.update
    jssRenderer.render(this.props.amount)
  }

  componentWillUnmount() {
    jssRenderer.destroy()
  }

  render() {
    return null
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
    const Animation = renderer === 'jss' ? JssAnimation : ReactAnimation

    return (
      <div>
        <Controls
          onAdd={this.onAdd}
          amount={amount}
          onChangeRenderer={this.onChangeRenderer}
        />
        <Animation renderer={renderer} amount={amount} />
      </div>
    )
  }
}

render(<App />, document.body.appendChild(document.createElement('div')) )
