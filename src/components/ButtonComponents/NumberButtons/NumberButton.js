import React from "react";

const NumberButton = (props) => {
// console.log(props);

return (
  {/* Display a button element rendering the data being passed down from the parent container on props */},
    <button className = "number-char">
    {
      
      props.numbers
    }

    </button>
  );
};

export default NumberButton;
