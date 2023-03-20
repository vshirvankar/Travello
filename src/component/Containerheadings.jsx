import React, { Component } from 'react'


 class Containerheadings extends Component {
  constructor(props){
    super(props)

    this.props = props

  }


  render() {
    return (
      <div>
      <div className="title">
            <h1>{this.props.head}</h1>
            <p>
             {this.props.para}
            </p>
          </div>
        
      </div>
    )
  }
}

export default Containerheadings
