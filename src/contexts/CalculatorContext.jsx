import React, { createContext, Component } from "react";

export const CalculatorContext = createContext();

class CalculatorContextProvider extends Component {
  state = { 
    currentFormula: '',
    resultArray: []
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

  evaluateFormula = () => {
    this.setState(prevState => {
      return {currentFormula: eval(prevState.currentFormula)}
    })
  }
  render() { 
    return ( 
      <CalculatorContext.Provider value={{...this.state, addToFormula: this.addToFormula, clearFormula:this.clearFormula, evaluateFormula: this.evaluateFormula}}>
        {this.props.children}
      </CalculatorContext.Provider>
     );
  }
}
 
export default CalculatorContextProvider;
