import * as React from "react";
import { useAppDispatch } from "../app/hooks";
import PendingTransactions from "../components/PendingTransactions";
import { coinCountIncrement } from "../features/coinSlice";

export interface IContainerPendingTransactionsProps {}

export default function ContainerPendingTransactions(
  props: IContainerPendingTransactionsProps
) {
  const dispatch = useAppDispatch();

  const increaseCoinCount = () => dispatch(coinCountIncrement());
  return <PendingTransactions increaseCoinCount={increaseCoinCount} />;
}
