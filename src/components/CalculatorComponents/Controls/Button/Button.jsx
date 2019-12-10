import React, { useContext } from "react";
import "./Button.css";
import { CalculatorContext } from "../../../../contexts/CalculatorContext";

const Button = ({ buttonName, buttonOperator, buttonClear, buttonZero }) => {
  const { addToFormula, clearFormula, evaluateFormula } = useContext(
    CalculatorContext
  );
  const handleClass = () => {
    if (buttonOperator) {
      return "opButton";
    }
    if (buttonClear) {
      return "clearButton";
    }
    if (buttonZero) {
      return "zeroButton";
    }
  };
  const handleClick = event => {
    if (event.target.id !== "=" && event.target.id !== "C") {
      if (event.target.id === "÷") {
        addToFormula("/");
      } else {
        addToFormula(event.target.id);
      }
    }
    if (event.target.id === "C") {
      clearFormula();
    } else if (event.target.id === "=") {
      evaluateFormula();
    }
  };
  // eslint-disable-next-line prefer-template
  return (
    <div
      onClick={handleClick}
      id={buttonName}
      className={`button ${handleClass()}`}
    >
      {buttonName}
    </div>
  );
};

export default Button;
