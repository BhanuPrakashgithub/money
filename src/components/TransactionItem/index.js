// Write your code here
import {Component} from 'react'
import './index.css'

class Trans extends Component {
  del = () => {
    const {item, update} = this.props
    const {id, amount, type} = item
    update(id, amount, type)
  }

  render() {
    const {item} = this.props
    return (
      <li className="lists">
        <p className="paras">{item.title}</p>
        <p className="paras">Rs {item.amount}</p>
        <p className="paras">{item.type}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image"
          onClick={this.del}
          data-testid="delete"
        />
      </li>
    )
  }
}
export default Trans
