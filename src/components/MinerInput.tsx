import * as React from "react";

export interface IMinerInputProps {
  miner: string;
  onChangeMinerName: React.ChangeEventHandler<HTMLInputElement>;
  registerMiner: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MinerInput({
  miner,
  onChangeMinerName,
  registerMiner,
}: IMinerInputProps) {
  return (
    <div>
      <h2>Miner Register</h2>

      <label htmlFor="miner">
        <input
          type="text"
          id="miner"
          name="miner"
          onChange={onChangeMinerName}
          value={miner}
          placeholder="채굴자명을 입력하세요."
        />
      </label>
      {/* 타입변환
      빈 문자열 => false
      문자열 존재 => true
      */}
      <button
        disabled={!miner}
        onClick={registerMiner}
        style={{ cursor: "pointer" }}
      >
        Register
      </button>
    </div>
  );
}
