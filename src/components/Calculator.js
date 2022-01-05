import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div data-previous-operand className="previous-operand" />
          <div data-current-operand className="current-operand">0</div>
        </div>
        <button data-all-clear className="btn btn-white" type="button">
          AC
        </button>
        <button data-delete className="btn btn-white" type="button">
          +/-
        </button>
        <button data-delete className="btn btn-white" type="button">
          %
        </button>
        <button data-operation className="btn btn-orange" type="button">
          ÷
        </button>
        <button data-number className="btn btn-white" type="button">
          7
        </button>
        <button data-number className="btn btn-white" type="button">
          8
        </button>
        <button data-number className="btn btn-white" type="button">
          9
        </button>
        <button data-operation className="btn btn-orange" type="button">
          x
        </button>
        <button data-number className="btn btn-white" type="button">
          4
        </button>
        <button data-number className="btn btn-white" type="button">
          5
        </button>
        <button data-number className="btn btn-white" type="button">
          6
        </button>
        <button data-operation className="btn btn-orange" type="button">
          -
        </button>
        <button data-number className="btn btn-white" type="button">
          1
        </button>
        <button data-number className="btn btn-white" type="button">
          2
        </button>
        <button data-number className="btn btn-white" type="button">
          3
        </button>
        <button data-operation className="btn btn-orange" type="button">
          +
        </button>
        <button data-number className="span-two btn btn-white" type="button">
          0
        </button>
        <button data-number className="btn btn-white" type="button">
          .
        </button>
        <button data-equals className="btn btn-orange btn--animated" type="button">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
