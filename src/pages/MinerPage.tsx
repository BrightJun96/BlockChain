import * as React from "react";
import AddTransaction from "../components/AddTransaction";
import BlockChain from "../components/BlockChain";
import Header from "../components/Header";
import MinerInput from "../components/MinerInput";
import PendingTransactions from "../components/PendingTransactions";
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
      <Header />
      <MinerInput />
      <AddTransaction />
      <PendingTransactions />
      <BlockChain />
    </div>
  );
}
