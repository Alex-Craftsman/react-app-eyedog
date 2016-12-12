import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import './Option.css'

class Option extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.changeState(this.props.data.key, !this.props.checked)
  }

  render() {

    var optionTemplate = null != this.props.checked ? <input type="checkbox" checked={this.props.checked} onChange={this.handleChange} /> : ''

    return <label className="Option ios7-switch">{this.props.data.text}{optionTemplate}<span /></label>
  }
}

export default Option
