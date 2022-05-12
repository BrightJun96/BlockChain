import * as React from "react";
import ContainerAddTransaction from "../containers/ContainerAddTransaction";
import ContainerBlockChain from "../containers/ContainerBlockChain";
import ContainerHeader from "../containers/ContainerHeader";
import ContainerMinerInput from "../containers/ContainerMinerInput";
import ContainerPendingTransactions from "../containers/ContainerPendingTransactions";
export interface IMinerPageProps {}

export default function MinerPage(props: IMinerPageProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        minHeight: "100vh",
      }}
    >
      <ContainerHeader />
      <ContainerMinerInput />
      <ContainerAddTransaction />
      <ContainerPendingTransactions />
      <ContainerBlockChain />
    </div>
  );
}
