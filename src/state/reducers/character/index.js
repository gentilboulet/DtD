import { demonReducer } from 'state/reducers/character/demon';

export function characterReducer(state, action) {
  const chartype = state.getIn(['character', 'type']);
  switch(chartype) {
    case 'CHARACTER_TYPE_DEMON' : return demonReducer(state, action);
    default: return state;
  }
}
