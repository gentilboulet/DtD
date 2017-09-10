import { headerReducer } from 'state/reducers/character/demon/header';
import { attributeReducer } from 'state/reducers/character/demon/attribute';
import { skillReducer } from 'state/reducers/character/demon/skill';

export function demonReducer(state, action) {
  if (action.type.search(/^CHARACTER_HEADER/) >= 0)     { return headerReducer(state, action); }
  if (action.type.search(/^CHARACTER_ATTRIBUTE/) >= 0)  { return attributeReducer(state, action); }
  if (action.type.search(/^CHARACTER_SKILL/) >= 0)      { return skillReducer(state, action); }
  return state;
}
