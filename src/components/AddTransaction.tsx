import * as React from "react";

export interface IAddTransactionProps {}

export default function AddTransaction(props: IAddTransactionProps) {
  return (
    <div>
      <h2>거래 추가</h2>
      <input type="text" placeholder="Sender" />
      <input type="text" placeholder="Recipient" />
      <input type="text" placeholder="Amount" />
      <button>Transfer Coin</button>
    </div>
  );
}
