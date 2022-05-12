import * as React from "react";
import AddTransaction from "../components/AddTransaction";
import { coinRateIncrement } from "../features/coinSlice";
import { useAppDispatch } from "./../app/hooks";

export interface IContainerAddTransactionProps {}

export default function ContainerAddTransaction(
  props: IContainerAddTransactionProps
) {
  const dispatch = useAppDispatch();

  const increaseCoinRate = () => dispatch(coinRateIncrement());

  return <AddTransaction increaseCoinRate={increaseCoinRate} />;
}
