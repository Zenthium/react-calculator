import React, { createContext, Component } from "react";

export const CalculatorContext = createContext();

class CalculatorContextProvider extends Component {
  state = { 
    currentFormula: ''
  }

  addToFormula = (op) => {
    this.setState(prevState => {
      return {currentFormula: prevState.currentFormula + op}
    })
  }

  clearFormula = () => {
    this.setState({
      currentFormula: ''
    })
  }

  setCurrentFormula = (value) => {
    this.setState({
      currentFormula: value
    })
  }
  render() { 
    return ( 
      <CalculatorContext.Provider value={{...this.state, addToFormula: this.addToFormula, clearFormula:this.clearFormula}}>
        {this.props.children}
      </CalculatorContext.Provider>
     );
  }
}
 
export default CalculatorContextProvider;
