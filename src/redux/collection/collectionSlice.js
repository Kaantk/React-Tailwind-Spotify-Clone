import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isView: false,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    toggleIsView: (state) => {
      state.isView = !state.isView;
    },
  },
});

export const { toggleIsView } = collectionSlice.actions;
export default collectionSlice.reducer;
