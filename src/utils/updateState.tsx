import { IState } from "./interfaces";

const updateState = (oldState: IState, newState: any) => {
  return {
    ...oldState,
    ...newState,
  };
};

export default updateState;
