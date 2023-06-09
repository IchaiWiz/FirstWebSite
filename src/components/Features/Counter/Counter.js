import React, { Component } from 'react';
import './Counter.css';
import { withTranslation } from "react-i18next";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  reset() {
    this.setState({ counter: 0 });
  }

  render() {
    const { t } = this.props;
    return (
      <div className="all-counter">
        <div className="counter-container">
          <button className="btn-counter" onClick={this.increment}>
            +
          </button>
          <br />
          <h1 className="h1-counter">{this.state.counter}</h1>
          <br />
          <button className="btn-counter" onClick={this.decrement}>
            -
          </button>
          <br />
          <button className="btn-counter" onClick={this.reset}>
            {t("nav.Counter")}
          </button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Counter);
