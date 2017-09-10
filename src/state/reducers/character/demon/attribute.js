function _set(state, attribute, value) {
  return state.setIn(['character', 'attributes', attribute, 'value'], value);
}

export function attributeReducer(state, action) {
  switch(action.type){
    case 'CHARACTER_ATTRIBUTE_SET': return _set(state, action.name, action.value);
    default: return state;
  }
}
