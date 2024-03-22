import { createContext, useState } from "react";
import CmpButton from "../CmpButton";
import "./CmpMainLogic.css";
import CmpDisplay from "../CmpDisplay";

interface IMainLogic {
  operators: string[];
  addOperator: (operator: string) => void;
  operands: number[];
  addOperand: (operand: number) => void;
  displayValue: string;
  setDisplayValue: (value: string) => void;
}

export const mainLogicContext = createContext<IMainLogic>({
  operators: [],
  addOperator: () => {},
  operands: [],
  addOperand: () => {},
  displayValue: "",
  setDisplayValue: () => {},
});

function CmpMainLogic() {
  const [operatorsState, setOperatorsState] = useState<string[]>([]);
  const addOperatorInState = (newOperator: string) => {
    setOperatorsState((prevVal) => [...prevVal, newOperator]);
    setDisplayValueState((prevVal) => prevVal + " " + newOperator);
  };

  const [operandsState, setOperandsState] = useState<number[]>([]);
  const addOperandInState = (newOperand: number) => {
    setOperandsState((prevVal) => [...prevVal, newOperand]);
    setDisplayValueState((prevVal) => prevVal + " " + newOperand);
  };

  const [displayValueState, setDisplayValueState] = useState<string>("");
  const setDisplayValueStateFunc = (value: string) => {
    setDisplayValueState((prevVal) => prevVal + value);
  };

  return (
    <>
      <mainLogicContext.Provider
        value={{
          operators: operatorsState,
          addOperator: addOperatorInState,
          operands: operandsState,
          addOperand: addOperandInState,
          displayValue: displayValueState,
          setDisplayValue: setDisplayValueStateFunc,
        }}
      >
        <div className="mx-auto mt-5 calculator-body">
          <CmpDisplay></CmpDisplay>
          <CmpButton
            text="+"
            type="primary"
            value="+"
            valueType="operator"
          ></CmpButton>
          <CmpButton
            text="-"
            type="primary"
            value="-"
            valueType="operator"
          ></CmpButton>
          <CmpButton
            text="*"
            type="primary"
            value="*"
            valueType="operator"
          ></CmpButton>
          <CmpButton
            text="/"
            type="primary"
            value="/"
            valueType="operator"
          ></CmpButton>
          <CmpButton
            text="1"
            type="primary"
            value="1"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="2"
            type="primary"
            value="2"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="3"
            type="primary"
            value="3"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="4"
            type="primary"
            value="4"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="5"
            type="primary"
            value="5"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="6"
            type="primary"
            value="6"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="7"
            type="primary"
            value="7"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="8"
            type="primary"
            value="8"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="9"
            type="primary"
            value="9"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="0"
            type="primary"
            value="0"
            valueType="operand"
          ></CmpButton>
          <CmpButton
            text="C"
            type="primary"
            value="C"
            valueType="operator"
          ></CmpButton>
        </div>
      </mainLogicContext.Provider>
    </>
  );
}

export default CmpMainLogic;
