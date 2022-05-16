import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import coinReducer from "../slices/coinSlice";
import textReducer from "../slices/textSlice";
export const store = configureStore({
  reducer: { coin: coinReducer, text: textReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
