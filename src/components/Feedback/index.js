import {Component} from 'react'

class Feedback extends Component {
  thanks = () => {
    return (
        <img src = {loveEmojiUrl}/>
    <h1>Thank You</h1>
    )
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {name} = emojis
    return (
      <div>
        <h1>How satisfied are you with our customer support performance </h1>
        <ul>
          {resources.emojis.map(emoji => (
            <li key={emoji.id}>
              <p>{emoji.name}</p>
              <img
                src={emoji.imageUrl}
                alt={emoji.name}
                onChange={this.thanks}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Feedback
