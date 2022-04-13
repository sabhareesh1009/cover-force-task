import React from "react";
import "./CarrierSettings.css";
import InputField from "./InputField";
function CarrierSettings({ carrierId1, carrierId2 }) {
  return (
    <>
      <div className="carrierContainer"></div>
      <div className="carrier-settings">Carrier Settings</div>
      <div className="carrier-line"></div>
      <InputField
        lableName="Carrier 1 ID"
        lableClass="carrier1-lable"
        value={carrierId1}
        boxClass="carrier1-box"
        contentClass="carrier1-content"
      />
      <InputField
        lableName="Carrier 2 ID"
        lableClass="carrier2-lable"
        value={carrierId2}
        boxClass="carrier2-box"
        contentClass="carrier2-content"
      />
    </>
  );
}

export default CarrierSettings;
