function _set(state, skill, value) {
  return state.setIn(['character', 'skills', skill, 'value'], value);
}

export function skillReducer(state, action) {
  switch(action.type){
    case 'CHARACTER_SKILL_SET': return _set(state, action.name, action.value);
    default: return state;
  }
}
