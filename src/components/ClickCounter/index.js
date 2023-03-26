// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(previousValue => ({count: previousValue.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been clicked <br />{' '}
          <span className="count">{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.increase}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
