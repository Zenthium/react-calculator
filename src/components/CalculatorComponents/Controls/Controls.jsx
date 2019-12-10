import React from "react";
import "./Controls.css";
import Button from "./Button/Button";

const Controls = () => {
  const buttonsJSON = require("./buttons.json");
  const { buttons } = buttonsJSON;
  console.log(buttons);
  return (
    <div className="controlsContainer">
      {buttons.map(button => {
        return (
          <Button
            buttonName={button.name}
            buttonOperator={button.isOperatorButton}
            buttonClear={button.isClearButton}
            buttonZero={button.isZeroButton}
          />
        );
      })}
    </div>
  );
};

export default Controls;
