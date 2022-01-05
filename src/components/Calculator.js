import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {

  const [calculator, setCalculator]  = useState(0)

  const handleClick = (event) =>{
    const buttonName = event.target.textContent;
    const calculation = calculate(calculator, buttonName);
    setCalculator(calculation);
  }

  const { next, total } = calculator;

  return  (
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
        onClick={handleClick}
      >
        AC
      </button>
      <button data-delete className="btn btn-white" type="button" onClick={handleClick}>
        +/-
      </button>
      <button data-delete className="btn btn-white" type="button" onClick={handleClick}>
        %
      </button>
      <button data-operation className="btn btn-orange" type="button" onClick={handleClick}>
        ÷
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        7
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        8
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        9
      </button>
      <button data-operation className="btn btn-orange" type="button" onClick={handleClick}>
        x
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        4
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        5
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        6
      </button>
      <button data-operation className="btn btn-orange" type="button" onClick={handleClick}>
        -
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        1
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        2
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        3
      </button>
      <button data-operation className="btn btn-orange" type="button" onClick={handleClick}>
        +
      </button>
      <button data-number className="span-two btn btn-white" type="button" onClick={handleClick}>
        0
      </button>
      <button data-number className="btn btn-white" type="button" onClick={handleClick}>
        .
      </button>
      <button
        data-equals
        className="btn btn-orange btn--animated"
        type="button"
        onClick={handleClick}
      >
        =
      </button>
    </div>
  );
}

export default Calculator;
