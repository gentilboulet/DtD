function _set(state, what, value) { return state.setIn(['data', what], value); }

export function dataReducer(state, action) {
  switch(action.type) {
    case 'DATA_SOURCE_CONNECT' : {
      return _set(state, 'source', action.source);
    }
    default: return state;
  }
}
