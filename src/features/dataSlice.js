import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    content: []
  },
  reducers: {
    update: (state, action) => {
      state.content.push(...action.payload)
    },
  },
});

export const { update } = dataSlice.actions;

export default dataSlice.reducer;