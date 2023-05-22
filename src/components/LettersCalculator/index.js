// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  changeText = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="para">
            Enter the phrase
          </label>
          <input
            className="input"
            placeholder="Enter the phrase"
            type="text"
            onChange={this.changeText}
            id="input"
          />
          <p className="btn">No.of letters: {word.length}</p>
        </div>
        <div className="imagecontainer">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
