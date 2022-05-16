import * as React from "react";
import { textSliceInitState } from "../slices/textSlice";

export interface IAddTransactionProps {
  increaseCoinRate: () => { payload: undefined; type: string };
  onChangeTransactionField: React.ChangeEventHandler<HTMLInputElement>;
  text: textSliceInitState;
}

export default function AddTransaction({
  increaseCoinRate,
  text,
  onChangeTransactionField,
}: IAddTransactionProps) {
  return (
    <div>
      <h2>거래 추가</h2>
      <label htmlFor="sender">
        <input
          type="text"
          onChange={onChangeTransactionField}
          value={text.sender}
          id="sender"
          name="sender"
          placeholder="Sender"
        />
      </label>
      <label htmlFor="recipient">
        <input
          type="text"
          name="recipient"
          id="recipient"
          placeholder="Recipient"
          onChange={onChangeTransactionField}
          value={text.recipient}
        />
      </label>
      <label htmlFor="amount">
        <input
          type="text"
          onChange={onChangeTransactionField}
          value={text.amount}
          name="amount"
          id="amount"
          placeholder="Amount"
        />
      </label>
      <button onClick={increaseCoinRate}>Transfer Coin</button>
    </div>
  );
}
