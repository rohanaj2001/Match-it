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
      min_extreme: "",
      max_extreme: "",
    },
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setResponseData: (state, action: PayloadAction<UpdateResponseDataPayload>) => {
      state.data.responseData.shirt = action.payload.shirt;
      state.data.responseData.pant = action.payload.pant;
      state.data.responseData.min_extreme = action.payload.min_extreme;
      state.data.responseData.max_extreme = action.payload.max_extreme;      
      
    },
  },
});

export const { setResponseData } = dataSlice.actions;
export default dataSlice.reducer;
