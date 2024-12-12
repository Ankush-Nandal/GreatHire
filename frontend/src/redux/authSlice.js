import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        // actions
        setLoading:(state, action) => {
            state.loading = action.payload;
        },
        setUser:(state, action) => {
            state.user = action.payload;
        },
        logOut:(state, action) => {
            state.user = null;
        }
    }
});
 export const {setLoading, setUser, logOut} = authSlice.actions;

export default authSlice.reducer;
