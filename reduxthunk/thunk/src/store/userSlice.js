import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;

export const fetchUser = (userId) => async (dispatch) => {
    dispatch(fetchUserStart());
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        dispatch(fetchUserSuccess(data));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
    }
};
