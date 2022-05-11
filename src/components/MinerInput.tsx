import * as React from "react";

export interface IMinerInputProps {}

export default function MinerInput(props: IMinerInputProps) {
  return (
    <div>
      <h2>Miner Register</h2>
      <label htmlFor="">
        <input type="text" placeholder="채굴자명을 입력하세요." />
      </label>
      <button>Register</button>
    </div>
  );
}
