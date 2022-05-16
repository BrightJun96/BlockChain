import * as React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import MinerInput from "../components/MinerInput";
import {
  selectText,
  minerNameChange,
  initMinerName,
  registerMinerName,
} from "../slices/textSlice";

export interface IContainerMinerInputProps {}

// 추가 기능 아이디어 : input focus되면 모달창되어 입력하는 창 띄우게 하기
export default function ContainerMinerInput(props: IContainerMinerInputProps) {
  const dispatch = useAppDispatch();

  const { miner } = useAppSelector(selectText);

  const onChangeMinerName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(minerNameChange(e.target.value));
  };

  const registerMiner: React.MouseEventHandler<HTMLButtonElement> = () => {
    /*
    등록한 뒤 Init 
    두개의 액션생성함수의 순서가 뒤바뀌면 안됨.
    initMinerName이 먼저 나오면 등록이 안됨.
    */
    dispatch(registerMinerName());
    dispatch(initMinerName());
  };

  return (
    <MinerInput
      miner={miner}
      onChangeMinerName={onChangeMinerName}
      registerMiner={registerMiner}
    />
  );
}
