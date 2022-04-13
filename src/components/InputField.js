import React from "react";

function InputField({ lableName, lableClass, value, boxClass, contentClass }) {
  return (
    <>
      <div className={lableClass}>{lableName}</div>
      <div className={boxClass}></div>
      <div className={contentClass}>{value}</div>
    </>
  );
}

export default InputField;
