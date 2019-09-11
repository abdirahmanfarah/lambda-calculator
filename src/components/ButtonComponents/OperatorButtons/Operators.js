import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

export default function Operators () {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div>
      {
       operatorState.map((op, index) => (
          <OperatorButton key = {index} op= {op} />
  ))

      }
    </div>
  );
};
