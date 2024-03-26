// Write your code here
import {Component} from 'react'
import './index.css'

class Money extends Component {
  render() {
    const {income, balance, expense} = this.props
    return (
      <div className="fast1">
        <div className="slow1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="im1"
          />
          <div className="stand1">
            <p className="para3">Your Balance</p>
            <p className="head3" data-testid="balanceAmount">
              {balance}
            </p>
          </div>
        </div>
        <div className="slow2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="im1"
          />
          <div className="stand1">
            <p className="para3">Your Income</p>
            <p className="head3" data-testid="incomeAmount">
              {income}
            </p>
          </div>
        </div>
        <div className="slow3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="im1"
          />
          <div className="stand1">
            <p className="para3">Your Expenses</p>
            <p className="head3" data-testid="expensesAmount">
              {expense}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Money
