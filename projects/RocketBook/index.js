import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import "./style.scss";
import Header from "./components/Header";
import Post from "./components/Post";

class App extends Component {
  state = {
    counter: [],
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post">
          <Post></Post>
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
