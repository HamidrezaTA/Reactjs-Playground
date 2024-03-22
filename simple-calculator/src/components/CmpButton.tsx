import { useContext } from "react";
import { mainLogicContext } from "./CmpMainLogic/CmpMainLogic";

interface ICmpButtonProps {
  text: string;
  type: string;
  value: string;
  valueType: string;
}

function CmpButton({ text, type, value, valueType }: ICmpButtonProps) {
  const _mainLogicContext = useContext(mainLogicContext);

  function onClickEvent() {
    console.log(
      "Button " +
        text +
        " clicked by value " +
        value +
        " with value type " +
        valueType
    );
    if (valueType.toLowerCase() == "operator")
      _mainLogicContext.addOperator(value);
    else _mainLogicContext.addOperand(value);
  }

  return (
    <>
      <button
        type="button"
        className={"m-3 btn btn-" + type}
        onClick={onClickEvent}
      >
        {text}
      </button>
    </>
  );
}

export default CmpButton;
