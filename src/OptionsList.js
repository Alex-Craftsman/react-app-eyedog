import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import './OptionsList.css'
import Option from './Option'
import Values from './values.json'

class OptionsList extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      values: Values
    }
  }

  changeState(key, value) {
    var tempValues = this.state.values

    tempValues[key] = value

    this.setState({values: tempValues})
  }

  render() {
    var data = this.props.data, optionsTemplate

    if (data.length > 0) {

      optionsTemplate = data.map((item, index) => {
        
        if (
          null != item.items 
          && item.items.length > 0
        ) {

          optionsTemplate = <OptionsList data={item.items} ordered={false} />

        }

        var checked = this.state.values[item.key]        

        return (
            <li key={index}>
               <Option data={item} checked={checked} changeState={this.changeState.bind(this)} />
               {optionsTemplate}
            </li>
        )
      })

    }

    if(this.props.ordered) {

      return (
        <ol className="OptionsList OptionsList-ordered">
          {optionsTemplate}
        </ol>
      )

    } else {

      return (
        <ul className="OptionsList OptionsList-unordered">
          {optionsTemplate}
        </ul>
      )

    }
  }
}

export default OptionsList
