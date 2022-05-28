import * as React from "react";
import AddTransaction from "../components/AddTransaction";
import { coinRateIncrement } from "../slices/coinSlice";
import {
  InterTransaction,
  selectText,
  transactionInputChange,
} from "../slices/textSlice";
import { useAppDispatch, useAppSelector } from "./../app/hooks";

export interface IContainerAddTransactionProps {}

export default function ContainerAddTransaction(
  props: IContainerAddTransactionProps
) {
  const dispatch = useAppDispatch();

  const { text } = useAppSelector(selectText);
  const increaseCoinRate = () => dispatch(coinRateIncrement());

  const onChangeTransactionField: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatch(
      transactionInputChange({
        key: e.target.name as keyof InterTransaction,
        value: e.target.value,
      })
    );
  };

  return (
    <AddTransaction
      increaseCoinRate={increaseCoinRate}
      onChangeTransactionField={onChangeTransactionField}
      text={text}
    />
  );
}
