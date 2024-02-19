import React from 'react';
import Button from 'react-bootstrap/Button';

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>Redux 페이지</h1>
      <div>
        your age: <span>{number}</span>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button variant="primary" onClick={onIncrease}>
          +1
        </Button>
        &nbsp;
        <Button variant="secondary" onClick={onDecrease}>
          -1
        </Button>
      </div>
    </div>
  );
}

export default Counter;
