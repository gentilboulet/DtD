import { characterReducer } from 'state/reducers/character';
import { dataReducer } from 'state/reducers/data';

export function globalReducer(state, action) {
  if (action.type && action.type.search(/^CHARACTER_/) >=0 ) {
    return characterReducer(state, action);
  }
  if (action.type && action.type.search(/^DATA_/) >= 0) {
    return dataReducer(state, action);
  }
  return state;
}
