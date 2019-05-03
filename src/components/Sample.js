import React, { Component } from "react";

class Sample extends Component {
  render() {
    return (
      <div style={{backgroundColor: "grey"}}>
        <button
          style={{backgroundColor: "red", color: "green"}}
          onClick={this.props.onClick}
        >
          {this.props.text ? this.props.text : "Click me"}
        </button>
      </div>
    );
  }
}

export default Sample;