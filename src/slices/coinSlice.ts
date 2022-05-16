/* Handling State
- 코인 시세
- 보유 코인수
*/

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CoinState {
  coinRate: number;
  coinCount: number;
}
const initialState: CoinState = {
  coinRate: 1000,
  coinCount: 0,
};

const coinSlice = createSlice({
  name: "coin", // Slice에서 name의 역할은?
  initialState,
  reducers: {
    // 거래가 이루어질시 코인시세가 5원씩 증가
    coinRateIncrement: (state) => {
      state.coinRate += 5;
    },
    // 코인이 채굴될 때마다 코인시세가 2원씩 감소
    coinRateDecrement: (state) => {
      state.coinRate -= 2;
    },

    // 코인 채굴이 완료될 때마다 코인 갯수 1씩 증가
    coinCountIncrement: (state) => {
      state.coinCount += 1;
    },
  },
});

export const { coinRateIncrement, coinRateDecrement, coinCountIncrement } =
  coinSlice.actions;

export const selectCoin = (state: RootState) => ({
  coinRate: state.coin.coinRate,
  coinCount: state.coin.coinCount,
});

const coinReducer = coinSlice.reducer;
export default coinReducer;
