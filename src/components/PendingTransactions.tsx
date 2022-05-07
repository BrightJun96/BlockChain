import * as React from "react";

export interface IPendingTransactionsProps {}

export default function PendingTransactions(props: IPendingTransactionsProps) {
  return (
    <div>
      <h2>보류중인 거래</h2>
      <div>
        <span>거래1</span>
        <span>거래2</span>
        <span>거래3</span>
      </div>

      <button>Generate Block</button>
    </div>
  );
}
