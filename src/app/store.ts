import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import coinReducer from "../features/coinSlice";
import textReducer from "../features/textSlice";
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
