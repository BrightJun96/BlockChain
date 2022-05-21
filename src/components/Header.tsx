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
            <li>
              매도자 , 매수자 , 보낼 코인의 양을 각각 입력하고 Register버튼을
              누른다.
            </li>
            <li>
              Register버튼을 누르면 해당 거래는 거래내역인 pending
              transactions으로 이동한다.
            </li>
            <li>
              채굴자는 pending transactions중 원하는 거래내역을 선택하여 Confirm
              버튼을 눌러 채굴을 시작하고 블록을 생성한다.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
