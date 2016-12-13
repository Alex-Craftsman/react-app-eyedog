import React, { Component } from 'react' // eslint-disable-line no-unused-vars

class Label extends Component {
  render() {
    return <label className="Option">{this.props.data.text}</label>
  }
}

export default Label 
