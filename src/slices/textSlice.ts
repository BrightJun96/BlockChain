/* Handling State
1. 채굴자(MinerInput.tsx)
- Header컴포넌트와 Block 컴포넌트에서 쓸거임.

2.거래내역
sender/reciever/amount(AddTransaction.tsx)
- PendingTransaction 컴포넌트와 Block컴포넌트에서 쓸거임.

*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface InterTransaction {
  sender: string;
  recipient: string;
  amount: string;
}

export interface textSliceInitState {
  miner: string;
  minerName: string;
  transaction: InterTransaction;
}

const initialState: textSliceInitState = {
  miner: "",
  minerName: "",
  transaction: { sender: "", recipient: "", amount: "" },
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    // dispatch(minerNameChange(action.payload값))
    minerNameChange: (
      state,
      { payload: minerNameText }: PayloadAction<string>
    ) => {
      state.miner = minerNameText;
    },
    initMinerName(state) {
      state.miner = "";
    },
    registerMinerName(state) {
      state.minerName = state.miner;
    },
    transactionInputChange: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: keyof InterTransaction; value: string }>
    ) => {
      state.transaction[key] = value;
    },
  },
});

export const {
  minerNameChange,
  transactionInputChange,
  initMinerName,
  registerMinerName,
} = textSlice.actions;

export const selectText = ({ text }: RootState) => ({
  miner: text.miner,
  minerName: text.minerName,
  text: text.transaction,
});

const textReducer = textSlice.reducer;

export default textReducer;
