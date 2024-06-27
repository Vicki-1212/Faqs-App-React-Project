// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {faqListItem} = this.props
    const {questionText, answerText} = faqListItem
    const imgtext = isClicked ? 'minus' : 'plus'
    const imgUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <li className="question-container">
        <div className="top-container">
          <h1 className="question">{questionText}</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            <img src={imgUrl} alt={imgtext} className="icon-image" />
          </button>
        </div>
        {isClicked && (
          <div>
            <hr className="line-break" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
