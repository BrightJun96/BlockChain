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
  const btn = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (btn.current != null) {
      if (!miner) {
        btn.current.disabled = true;
        /*  btn.current?.disabled = false
        위와 같이 사용한다면 null.disabled = false에 접근하기 때문에
        The left-hand side of an assignment expression may not be an optional property access.
        위 에러가 발생한다.

        따라서 타입을 좁혀줘 해당 케이스를 예외처리한다.
        */
      } else {
        btn.current.disabled = false;
      }
    }
  }, [miner]);

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
      <button ref={btn} onClick={registerMiner} style={{ cursor: "pointer" }}>
        Register
      </button>
    </div>
  );
}
