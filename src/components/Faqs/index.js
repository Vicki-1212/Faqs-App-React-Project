// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachList => (
              <FaqItem faqListItem={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
