import React from "react";
import "./Calculator.css";
import Display from "./CalculatorComponents/Display";
import Controls from "./CalculatorComponents/Controls/Controls";

const Calculator = () => {
  return (
    <div className="calculatorBody">
      <Display />
      <Controls />
    </div>
  );
};

export default Calculator;
