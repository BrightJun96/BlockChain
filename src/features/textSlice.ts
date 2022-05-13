/* Handling State
1. 채굴자(MinerInput.tsx)
- Header컴포넌트와 Block 컴포넌트에서 쓸거임.

2.거래내역
sender/reciever/amount(AddTransaction.tsx)
- PendingTransaction 컴포넌트와 Block컴포넌트에서 쓸거임.

*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
export interface textSliceInitState {
  miner: string;
  sender: string;
  recipient: string;
  amount: string;
}

const initialState: textSliceInitState = {
  miner: "",
  sender: "",
  recipient: "",
  amount: "",
};

export type textSliceStateKeyType = "sender" | "recipient" | "amount";
const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    // dispatch(minerNameChange(action.payload값))
    minerNameChange: (state, { payload: minerNameText }) => {
      state.miner = minerNameText;
    },

    transactionInputChange: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: keyof textSliceInitState; value: string }>
    ) => {
      state[key] = value;
    },
  },
});

export const { minerNameChange, transactionInputChange } = textSlice.actions;

export const selectText = ({ text }: RootState) => ({
  miner: text.miner,
  text,
});

const textReducer = textSlice.reducer;

export default textReducer;
