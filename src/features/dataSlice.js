import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    achievements: []
  },
  reducers: {
    update: (state, action) => {
      state.achievements.push(...action.payload)
    },
  },
});

export const { update } = dataSlice.actions;

export default dataSlice.reducer;