import React from "react";

const SpecialButton = (props) => {
  return (
    <>

      <button className = "specials-char">
      {

        props.specials
     }

      </button>
    </>
  );
};

export default SpecialButton;
