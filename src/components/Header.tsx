import * as React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div>
      <h1>BlockChain - Miner Zone</h1>

      <ol>
        <li>채굴자의 이름을 입력한다.</li>
        <li>코인에 대한 송금자와 수금자의 이름을 각각 입력한다.</li>
        <li>거래 내역인 pending transactions으로 이동한다.</li>
        <li>블록 생성 버튼을 누르면 채굴을 시작하며 블록을 생성한다.</li>
      </ol>
      <h2>코인시세</h2>
      <h4>보유중인 코인수</h4>
      <h4>채굴자 이름</h4>
    </div>
  );
}
