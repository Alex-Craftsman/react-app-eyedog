import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import logo from './logo.svg'
import './App.css'
import OptionsList from './OptionsList'
import Settings from './settings.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React App</h2>
        </div>
        <OptionsList data={Settings} ordered={true} />
      </div>
    )
  }
}

export default App
