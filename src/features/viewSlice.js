import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        role: 0,
        typeIndex: 3
    },
    reducers: {
        update: (state, action) => {
            state.role = action.payload.role !== undefined ? action.payload.role : state.role;
            state.typeIndex = action.payload.typeIndex !== undefined ? action.payload.typeIndex : state.typeIndex;
        },
    },
});

export const { update } = viewSlice.actions;

export default viewSlice.reducer;