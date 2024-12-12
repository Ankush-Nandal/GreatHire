// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    searchedQuery: "", // Added searchedQuery field
  },
  reducers: {
    // Existing actions
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // New action for searchedQuery
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
  },
});

export const { setLoading, setUser, setSearchedQuery } = authSlice.actions;

export default authSlice.reducer;
