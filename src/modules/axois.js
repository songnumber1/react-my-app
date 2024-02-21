import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  age: 20
};

export const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: initialState,
  reducers: {
    AGE_UP_ASYNC: (state, action) => {
      state.age += action.payload;
    },
    AGE_DOWN: (state, action) => {
      state.age -= action.payload;
    },
    CALL_APIS_FULFILLED: (state, action) => {
      console.log('second', action.payload);
    },
    CALL_APIS_FULFILLED3: (state, action) => {
      console.log('third', action.payload);
    },
    CALL_POST_API: (state, action) => {
      console.log('first', action.payload);
    },
    NOTIFY: (state, action) => {
      console.log('all done!');
    }
  }
});

export const apiSliceAction = apiSlice.actions;
export default apiSlice.reducer;
