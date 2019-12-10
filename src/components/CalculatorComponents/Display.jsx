import React, { useContext } from "react";
import "./Display.css";
import { CalculatorContext } from "../../contexts/CalculatorContext";

const Display = () => {
  const { currentFormula } = useContext(CalculatorContext);
  return (
    <div className="display">
      <p>{currentFormula}</p>
    </div>
  );
};

export default Display;
