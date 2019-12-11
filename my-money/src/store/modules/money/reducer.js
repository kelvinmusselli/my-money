import produce from 'immer';

export default function money(state = [], action) {
  switch (action.type) {
    case 'ADD_MONEY':
      // return [...state, action.money];
      return produce(state, draft => {
        draft.push(action.money);
      });

    case 'REMOVE_MONEY':
      return produce(state, draft => {
        const moneyId = draft.findIndex(p => p.id === action.id);

        if (moneyId >= 0) {
          draft.splice(moneyId, 1);
          console.log('Foi removido um valor');
        }
      });

    default:
      return state;
  }
}
