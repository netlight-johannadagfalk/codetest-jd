import { useState, useEffect } from 'react';

let globalState: any = {}; // share logic AND data by managing it outside of the hook
let listeners: any[] = []; //functions to update components that are using my hook. Whom are interested in updates in my global state
let actions: any = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; //second value - the updating func. Component that uses this hook will rerender,
  console.log(actions.type);
  const dispatch = (actionIdentifier: string, payload: any) => {
    const newState = actions[actionIdentifier](globalState, payload); // function in the action object that takes the globalstate and pass along payload
    globalState = { ...globalState, ...newState }; //merge with old states

    //update the new globalstates and rerender components using this hook
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState); //register a listener, will grow the more compoentns we add,
    return () => {
      listeners = listeners.filter((li) => li != setState);
    };
  }, [setState]); // because of the syntax [1], not needed if desctructured

  return [globalState, dispatch]; //same return as useReducer. But that one is used for local state, so we have to build our own for global
};

//So far we can call actions but not set them.
export const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }; //like when merging different stores in redux to one main store
  }
  actions = { ...actions, ...userActions };
};
