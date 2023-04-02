// slice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./types";

const initialState: AppState = {
  responseData: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setResponseData(state, action: PayloadAction<any>) {
      state.responseData = action.payload;
    },
  },
});

export const { setResponseData } = dataSlice.actions;
export default dataSlice.reducer;
