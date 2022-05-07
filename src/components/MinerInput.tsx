import * as React from "react";

export interface IMinerInputProps {}

export default function MinerInput(props: IMinerInputProps) {
  return (
    <div>
      <h2>Miner Register</h2>
      <p>채굴자명을 입력하세요.</p>
      <label htmlFor="">
        <input type="text" />
      </label>
      <button>Register</button>
    </div>
  );
}
