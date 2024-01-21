import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        roleId: "__all__",
        achievementTypeId: "__all__"
    },
    reducers: {
        update: (state, action) => {
            state.roleId = action.payload.roleId !== undefined ? action.payload.roleId : state.roleId;
            state.achievementTypeId = action.payload.achievementTypeId !== undefined ? action.payload.achievementTypeId : state.achievementTypeId;
        },
    },
});

export const { update } = viewSlice.actions;

export default viewSlice.reducer;