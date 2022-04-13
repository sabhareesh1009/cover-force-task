import React from "react";
import CarrierSettings from "./CarrierSettings";
import InputField from "./InputField";
import { useFetch } from "./useFetch";
import "./UserSettings.css";
function UserSettings() {
  // passing the some random url which return some strings
  const { data } = useFetch("http://numbersapi.com/43/trivia");
  return (
    <>
      <div className="header">User Settings</div>
      <div className="divider"></div>
      <InputField
        lableName="Name"
        lableClass="name-lable"
        value={data?.name}
        boxClass="name-box"
        contentClass="name-content"
      />
      <InputField
        lableName="Email"
        lableClass="email-lable"
        value={data?.email}
        boxClass="email-box"
        contentClass="email-content"
      />
      <CarrierSettings
        carrierId1={data?.carrierId1}
        carrierId2={data?.carrierId2}
      />
    </>
  );
}

export default UserSettings;
