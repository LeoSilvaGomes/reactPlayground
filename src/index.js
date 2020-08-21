import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Hello React Playground</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
