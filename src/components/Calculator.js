import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

('../logic/calculate');
('../logic/operate');
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const buttonName = event.target.textContent;
    const calculator = calculate(this.state, buttonName);
    this.setState(calculator);
  }

  render() {
    const { next, total } = this.state;

    return (
      <div className="calculator-grid">
        <div className="output">
          <div data-previous-operand className="previous-operand" />
          <div data-current-operand className="current-operand">
            {next || total || '0'}
          </div>
        </div>
        <button
          data-all-clear
          className="btn btn-white"
          type="button"
          onClick={this.handleClick}
        >
          AC
        </button>
        <button data-delete className="btn btn-white" type="button" onClick={this.handleClick}>
          +/-
        </button>
        <button data-delete className="btn btn-white" type="button" onClick={this.handleClick}>
          %
        </button>
        <button data-operation className="btn btn-orange" type="button" onClick={this.handleClick}>
          ÷
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          7
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          8
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          9
        </button>
        <button data-operation className="btn btn-orange" type="button" onClick={this.handleClick}>
          x
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          4
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          5
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          6
        </button>
        <button data-operation className="btn btn-orange" type="button" onClick={this.handleClick}>
          -
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          1
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          2
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          3
        </button>
        <button data-operation className="btn btn-orange" type="button" onClick={this.handleClick}>
          +
        </button>
        <button data-number className="span-two btn btn-white" type="button" onClick={this.handleClick}>
          0
        </button>
        <button data-number className="btn btn-white" type="button" onClick={this.handleClick}>
          .
        </button>
        <button
          data-equals
          className="btn btn-orange btn--animated"
          type="button"
          onClick={this.handleClick}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
