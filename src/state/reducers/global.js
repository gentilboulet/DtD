import { characterReducer } from 'state/reducers/character';

export function globalReducer(state, action) {
  if (action.type && action.type.search(/^CHARACTER_/) >=0 ) {
    return characterReducer(state, action);
  }
  return state;
}
