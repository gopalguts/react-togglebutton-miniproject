import { useState } from "react";
import "./Toggle.css";
export default function Toggle({ isActive = false }) {
  const [isOn, setIsOn] = useState(isActive);
  return (
    <>
      <h1>Toggle Switch Mini Project</h1>
      <div
        className={`toggle-button ${isOn ? "on" : "off"}`}
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        <div className="toggle-inner">
          <span className="toggle">{isOn ? "On" : "Off"}</span>
        </div>
      </div>
    </>
  );
}
