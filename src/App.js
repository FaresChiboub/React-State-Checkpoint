import React, { Component } from "react";
import "./App.css";
import Button from "./Components/button";
import Profile from "./Components/profile";
import Timer from "./Components/timer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      timeSinceMount: 0,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleToggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { show, timeSinceMount } = this.state;

    return (
      <div className="container">
        <Button
          onClick={() => this.handleToggleShow()}
          label={`Toggle Profile ${show ? "Hide" : "Show"}`}
        />
        <Profile show={show} />
        <Timer timeSinceMount={timeSinceMount} />
      </div>
    );
  }
}

export default App;
