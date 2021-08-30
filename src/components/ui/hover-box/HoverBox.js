import React from 'react'

class HoverBox extends React.Component {
  constructor(...rest) {
    super(...rest)

    this.state = {
      color: 'red'
    }

    this.onEnter = () => {
      this.setState({
        color: 'indigo'
      })
    }

    this.onLeave = () => {
      this.setState({
        color: 'red'
      })
    }
  }

  render() {
    return (
      <div onMouseEnter={this.onEnter} onMouseLeave={this.onLeave} style={{
        width: 100,
        height: 100,
        background: this.state.color
      }}/>
    )
  }
}