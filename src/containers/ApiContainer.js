import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Api from './../components/Api';
import { apiSliceAction } from '../modules/api';

function ApiContainer() {
  const age = useSelector(state => state.api.age);

  const dispatch = useDispatch();

  const onAgeUp = () => {
    dispatch({ type: 'AGE_UP', value: 1 });
  };
  const onAgeDown = () => {
    dispatch(apiSliceAction.AGE_DOWN(1));
    //dispatch({ type: 'AGE_DOWN', value: 1 });
  };
  const callApis = () => {
    dispatch({ type: 'CALL_APIS', value: 1 });
  };

  return <Api age={age} onAgeUp={onAgeUp} onAgeDown={onAgeDown} callApis={callApis} />;
}

export default ApiContainer;
