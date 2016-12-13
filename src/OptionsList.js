import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import './OptionsList.css'
import Option from './Option'
import Label from './Label'

class OptionsList extends Component {
  render() {
    const settings = this.props.settings
    
    let optionsTemplate

    if (settings.length > 0) {

      optionsTemplate = settings.map((item, index) => {
        
        if (
          null != item.items 
          && item.items.length > 0
        ) {

          optionsTemplate = <OptionsList settings={item.items} values={this.props.values} ordered={false} changeState={this.props.changeState} />

        }
        
        if(optionsTemplate) {

          return (
            <li key={index}>
               <Label data={item} />
               {optionsTemplate}
            </li>
          )

        } else {

          return (
            <li key={index}>
               <Option data={item} checked={this.props.values.includes(item.key)} changeState={this.props.changeState} />
            </li>
          )

        }

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
