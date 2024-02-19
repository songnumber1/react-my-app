import React from 'react';
import Button from 'react-bootstrap/Button';

function Api({ age, onAgeUp, onAgeDown, callApis }) {
  return (
    <div>
      <h1>Redux + Redux Saga + Redux Toolkit 페이지</h1>
      <div>
        your age: <span>{age}</span>
      </div>
      <div style={style.agelabel}>
        <Button variant="success" onClick={onAgeUp}>
          Age UP
        </Button>
        &nbsp;
        <Button variant="warning" onClick={onAgeDown}>
          Age Down
        </Button>
        &nbsp;
        <Button variant="danger" onClick={callApis}>
          Call Mutil Api
        </Button>
      </div>
    </div>
  );
}

const style = {
  agelabel: {
    marginTop: '20px'
  }
};

export default Api;
