import * as React from "react";
import Header from "../components/Header";
import { selectCoin } from "../features/coinSlice";
import { useAppSelector } from "./../app/hooks";

export interface IContainerHeaderProps {}

export default function ContainerHeader(props: IContainerHeaderProps) {
  const { coinRate, coinCount } = useAppSelector(selectCoin);
  return <Header coinRate={coinRate} coinCount={coinCount} />;
}
