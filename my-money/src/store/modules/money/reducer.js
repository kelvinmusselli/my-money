export default function money(state = [], action) {
  switch (action.type) {
    case 'ADD_MONEY':
      return [...state, action.money];
    default:
      return state;
  }
}
