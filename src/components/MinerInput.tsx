import * as React from "react";

export interface IMinerInputProps {
  miner: string;
  onChangeMinerName: React.ChangeEventHandler<HTMLInputElement>;
}

export default function MinerInput({
  miner,
  onChangeMinerName,
}: IMinerInputProps) {
  return (
    <div>
      <h2>Miner Register</h2>

      <form>
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
        <button>Register</button>
      </form>
    </div>
  );
}
