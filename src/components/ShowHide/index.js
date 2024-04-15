import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstnameCon = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastnameCon = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="content-container">
            <button
              className="button" onClick={this.firstnameCon} type="button">
              Show/Hide Firstname
            </button>
            {firstName && (
              <p className="name-container para">Joe</p>
            )}
          </div>
          <div className="content-container">
            <button className="button" onClick={this.lastnameCon} type="button">
              Show/Hide Lastname
            </button>
            {lastName && (
              <p className="name-container para">Jonas</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
