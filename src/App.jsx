import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import CalculatorContextProvider from "./contexts/CalculatorContext";

const App = () => {
  return (
    <div className="App">
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
};

export default App;
