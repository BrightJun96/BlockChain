import * as React from "react";

export interface IAddTransactionProps {
  increaseCoinRate: () => { payload: undefined; type: string };
}

export default function AddTransaction({
  increaseCoinRate,
}: IAddTransactionProps) {
  return (
    <div>
      <h2>거래 추가</h2>
      <input type="text" placeholder="Sender" />
      <input type="text" placeholder="Recipient" />
      <input type="text" placeholder="Amount" />
      <button onClick={increaseCoinRate}>Transfer Coin</button>
    </div>
  );
}
