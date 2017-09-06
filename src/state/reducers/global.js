export function globalReducer(state, action) {
  switch(action.type) {
    case 'SET_NAME' : return state.set('name', action.name);
    case 'SET_PLAYER': return state.set('player', action.player);
    case 'SET_CHRONICLE': return state.set('chronicle', action.chronicle);
    default: return state;
  }
}
