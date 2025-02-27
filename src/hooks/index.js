import {useState} from 'react';
import {produce} from 'immer';

export const useImmer=(baseSate)=>{
  const [state,setState]=useState(baseSate);
  const updateState=(stateChange)=>{
    const nextState=produce(state, stateChange);
    setState(nextState);
    return nextState;
  }
  return [state,updateState];
}
