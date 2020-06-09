import { ActionsType } from "src/types";

export default function createReducer<
  U extends { [key: string]: any },
  T extends { [key: string]: any }
>(initialState: U, handlers: T) {
  return function reducer(state = initialState, action: ActionsType) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
