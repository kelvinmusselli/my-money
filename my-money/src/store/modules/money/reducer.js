export default function money(state = [], action) {
  switch (action.type) {
    case 'ADD_MONEY':
      return [...state, action.depot];
    default:
      return state;
  }
}
