import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import './Option.css'

class Option extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.changeState(this.props.data.key, !this.props.checked)
  }

  render() {
    return <label className="Option ios7-switch">{this.props.data.text}<input type="checkbox" checked={this.props.checked} onChange={this.handleChange} /><span /></label>
  }
}

export default Option
