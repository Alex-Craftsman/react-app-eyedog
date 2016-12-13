import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import logo from './logo.svg'
import './App.css'
import OptionsList from './OptionsList'
import Settings from './settings.json'
import Values from './values.json'

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      values: Values 
    }
  }

  changeState(key, value) {
    let tempValues = this.state.values

    if(value) {

      tempValues.push(key) 

    } else {

      const index = tempValues.indexOf(key)

      tempValues.splice(index, 1)

    }

    this.setState({values: tempValues})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React App</h2>
        </div>
        <OptionsList settings={Settings} values={this.state.values} ordered={true} changeState={this.changeState.bind(this)} />
      </div>
    )
  }
}

export default App
