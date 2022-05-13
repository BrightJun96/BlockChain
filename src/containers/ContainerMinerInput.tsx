import * as React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import MinerInput from "../components/MinerInput";
import { selectText, minerNameChange } from "./../features/textSlice";

export interface IContainerMinerInputProps {}

export default function ContainerMinerInput(props: IContainerMinerInputProps) {
  const dispatch = useAppDispatch();

  const { miner } = useAppSelector(selectText);

  const onChangeMinerName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.name);

    dispatch(minerNameChange(e.target.value));
  };

  return <MinerInput miner={miner} onChangeMinerName={onChangeMinerName} />;
}
