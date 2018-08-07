import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    let array = []
    array.push(e.clientX)
    array.push(e.clientY)
    this.props.onReceiveCoordinates(array)
  }
  render() {
    return <button onClick={this.handleClick}></button>
  }

}
