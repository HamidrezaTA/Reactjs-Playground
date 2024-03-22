import { useContext } from "react";
import { mainLogicContext } from "./CmpMainLogic/CmpMainLogic";

function CmpDisplay() {
  const _mainLogicContext = useContext(mainLogicContext);

  return (
    <div
      className="border border-1 border-black m-2"
      style={{ width: "245px", height: "50px" }}
    >
      <label>{_mainLogicContext.displayValue}</label>
    </div>
  );
}

export default CmpDisplay;
