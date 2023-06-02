import {Component} from 'react'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {name, imageUrl} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support perfomance </h1>
        <ul>
          {resources.map(each => (
            <li>
              <p>{each.name}</p>
              <img src={each.imageUrl} alt={each.name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Feedback
