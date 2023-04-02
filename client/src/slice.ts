import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Item } from "./types";

interface UpdateResponseDataPayload {
  responseData: Item;
}

const initialState: AppState = {
  data: {
    responseData: {
      shirt: "",
      pant: "",
    },
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setResponseData: (state, action: PayloadAction<UpdateResponseDataPayload>) => {
      state.data.responseData = action.payload.responseData;
    },
  },
});

export const { setResponseData } = dataSlice.actions;
export default dataSlice.reducer;
