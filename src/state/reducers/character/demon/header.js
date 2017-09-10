function _set(state, what, value) { return state.setIn(['character', what], value); }

export function headerReducer(state, action) {
  switch(action.type) {
    case 'CHARACTER_HEADER_SET_NAME':      return _set(state, 'name', action.name);
    case 'CHARACTER_HEADER_SET_PLAYER':    return _set(state, 'player', action.player);
    case 'CHARACTER_HEADER_SET_CHRONICLE': return _set(state, 'chronicle', action.chronicle);
    case 'CHARACTER_HEADER_SET_VIRTUE':    return _set(state, 'virtue', action.virtue);
    case 'CHARACTER_HEADER_SET_VICE':      return _set(state, 'vice', action.vice);
    default: return state;
  }
}
