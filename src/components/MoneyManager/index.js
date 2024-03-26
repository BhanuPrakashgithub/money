const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {v4} from 'uuid'

class MoneyManager extends Component {
  state = {
    inputValue1: '',
    inputValue2: '',
    inputValue3: transactionTypeOptions[0].displayText,
    matrix: [],
    income: 0,
    expense: 0,
    balance: 0,
  }

  change1 = event => this.setState({inputValue1: event.target.value})

  change2 = event => this.setState({inputValue2: event.target.value})

  change3 = event => this.setState({inputValue3: event.target.value})

  update = (id, amount, type) => {
    const {matrix} = this.state
    const newMatrix = matrix.filter(each => each.id !== id)
    if (type === 'Income') {
      this.setState(prev => ({
        matrix: newMatrix,
        income: prev.income - parseInt(amount),
        balance: prev.balance - parseInt(amount),
      }))
    } else {
      this.setState(prev => ({
        matrix: newMatrix,
        expense: prev.expense - parseInt(amount),
        balance: prev.balance + parseInt(amount),
      }))
    }
  }

  but1 = event => {
    event.preventDefault()
    const {inputValue1, inputValue2, inputValue3} = this.state
    if (inputValue3 === 'Income') {
      const obj = {
        id: v4(),
        title: inputValue1,
        amount: inputValue2,
        type: inputValue3,
      }
      this.setState(prev => ({
        matrix: [...prev.matrix, obj],
        income: prev.income + parseInt(inputValue2),
        balance: prev.balance + parseInt(inputValue2),
        inputValue1: '',
        inputValue2: '',
        inputValue3: transactionTypeOptions[0].displayText,
      }))
    } else {
      const obj = {
        id: v4(),
        title: inputValue1,
        amount: inputValue2,
        type: inputValue3,
      }
      this.setState(prev => ({
        matrix: [...prev.matrix, obj],
        expense: prev.expense + parseInt(inputValue2),
        balance: prev.balance - parseInt(inputValue2),
        inputValue1: '',
        inputValue2: '',
        inputValue3: transactionTypeOptions[0].displayText,
      }))
    }
  }

  render() {
    const {
      inputValue1,
      inputValue2,
      inputValue3,
      matrix,
      income,
      balance,
      expense,
    } = this.state
    return (
      <div className="main">
        <div className="main1">
          <h1 className="head">Hi, Richard</h1>
          <p className="para">
            welcome back to your <span className="inlines">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} balance={balance} expense={expense} />
        <div className="main2">
          <div className="back1">
            <h1 className="head">Add Transaction</h1>
            <form onSubmit={this.but1}>
              <div className="fast">
                <label htmlFor="root1" className="label">
                  TITLE
                </label>
                <input
                  id="root1"
                  type="text"
                  placeholder="TITLE"
                  className="texts"
                  onChange={this.change1}
                  value={inputValue1}
                />
              </div>
              <div className="fast">
                <label htmlFor="root2" className="label">
                  AMOUNT
                </label>
                <input
                  id="root2"
                  type="text"
                  placeholder="AMOUNT"
                  className="texts"
                  onChange={this.change2}
                  value={inputValue2}
                />
              </div>
              <div className="fast">
                <label htmlFor="root3" className="label">
                  TYPE
                </label>
                <select onChange={this.change3} id="root3" value={inputValue3}>
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId}>{each.displayText}</option>
                  ))}
                </select>
              </div>
              <button className="but" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="back2">
            <h1 className="head">History</h1>
            <div className="back3">
              <p className="para1">Title</p>
              <p className="para1">Amount</p>
              <p className="para1">Type</p>
            </div>
            <ul className="unorder">
              {matrix.map(each => (
                <TransactionItem
                  key={each.id}
                  item={each}
                  update={this.update}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
