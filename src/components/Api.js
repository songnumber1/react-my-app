import React from "react";

function Api({ age, onAgeUp, onAgeDown, callApis }) {
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button onClick={onAgeUp}>Age UP</button>
      <button onClick={onAgeDown}>Age Down</button>
      <button onClick={callApis}>should do a get, post and alert</button>
    </div>
  );
}

export default Api;
