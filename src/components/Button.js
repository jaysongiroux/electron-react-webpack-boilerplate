import React, {Component} from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false
    }
    this.buttonPress = this.buttonPress.bind(this);
  }

  //count amount of times button has been pressed
  buttonPress() {
    this.setState( {
      count: this.state.count + 1
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.buttonPress}>Press Me</button>
        <br />
        {this.state.count > 0 &&
          <p>Button has been pressed: {this.state.count} Times</p>
        }
      </div>
    )
  }
}
