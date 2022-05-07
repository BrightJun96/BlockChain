import * as React from "react";
import Block from "./Block";

export interface IBlockChainProps {}

export default function BlockChain(props: IBlockChainProps) {
  return (
    <div>
      <h2>BlockChain</h2>
      <div>
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}
