import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { setAppLoading } = appSlice.actions;
export const app = appSlice.reducer;
