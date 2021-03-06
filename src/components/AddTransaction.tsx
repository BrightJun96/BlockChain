import * as React from "react";
import { InterTransaction } from "../slices/textSlice";

export interface IAddTransactionProps {
  increaseCoinRate: () => { payload: undefined; type: string };
  onChangeTransactionField: React.ChangeEventHandler<HTMLInputElement>;
  text: InterTransaction;
}

export default function AddTransaction({
  increaseCoinRate,
  text,
  onChangeTransactionField,
}: IAddTransactionProps) {
  const condition =
    Boolean(text.sender) && Boolean(text.recipient) && Boolean(text.amount);

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
          required
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
          required
        />
      </label>
      <label htmlFor="amount">
        <input
          type="number"
          onChange={onChangeTransactionField}
          value={text.amount}
          name="amount"
          id="amount"
          placeholder="Coin Amount"
          required
        />
      </label>
      <button disabled={!condition} onClick={increaseCoinRate}>
        Transfer
      </button>
    </div>
  );
}
