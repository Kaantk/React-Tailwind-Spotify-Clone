import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./collection/collectionSlice";

export const store = configureStore({
  reducer: {
    collection: collectionSlice,
  },
});
