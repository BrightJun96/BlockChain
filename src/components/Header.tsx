import * as React from "react";

export interface IHeaderProps {
  coinRate: number;
  coinCount: number;
  minerName: string;
}

export default function Header({
  coinRate,
  coinCount,
  minerName,
}: IHeaderProps) {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>BlockChain - Miner Zone</h1>
        <div>
          <div style={{ display: "flex" }}>
            <h4 style={{ marginRight: "10px" }}>Miner : {minerName} </h4>
            <h4>Coins : {coinCount}</h4>
          </div>
          <h2>코인시세 :{coinRate}</h2>
        </div>
      </nav>
      <div>
        <div>
          <h3>Usage</h3>
          <ol>
            <li>채굴자의 이름을 입력한다.</li>
            <li>코인에 대한 송금자와 수금자의 이름을 각각 입력한다.</li>
            <li>거래 내역인 pending transactions으로 이동한다.</li>
            <li>블록 생성 버튼을 누르면 채굴을 시작하며 블록을 생성한다.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
