import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: initialState,
  reducers: {
    ISLOADING: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const loadingSliceAction = loadingSlice.actions;
export default loadingSlice.reducer;
