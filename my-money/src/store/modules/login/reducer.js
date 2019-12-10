export default function login(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.logar];
    default:
      return state;
  }
}
