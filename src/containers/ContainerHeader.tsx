import * as React from "react";
import Header from "../components/Header";
import { selectCoin } from "../slices/coinSlice";
import { selectText } from "../slices/textSlice";
import { useAppSelector } from "./../app/hooks";

export interface IContainerHeaderProps {}

export default function ContainerHeader(props: IContainerHeaderProps) {
  const { coinRate, coinCount } = useAppSelector(selectCoin);
  const { minerName } = useAppSelector(selectText);

  return (
    <Header coinRate={coinRate} coinCount={coinCount} minerName={minerName} />
  );
}
