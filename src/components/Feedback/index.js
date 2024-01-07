// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackRecieved: false,
  }

  onClickFeedback = () => {
    this.setState({isFeedbackRecieved: true})
  }

  renderFeedbackEmojis() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="background-container">
        <div className="emojis-container-background">
          <h1>How satisfied are you with our customer support performance ?</h1>
          <ul className="emojis-list-container">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  type="button"
                  className="emoji-button"
                  onClick={this.onClickFeedback}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="eachEmojiName">{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderFeedbackRecieved() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="background-container">
        <div className="loveEmojiContainer">
          <img src={loveEmojiUrl} alt="love Emoji" className="loveEmoji" />
          <h1 className="thankyouText">Thank You!</h1>
          <p className="feedbackPara">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackRecieved} = this.state

    return (
      <div className="main-container">
        {isFeedbackRecieved
          ? this.renderFeedbackRecieved()
          : this.renderFeedbackEmojis()}
      </div>
    )
  }
}

export default Feedback
