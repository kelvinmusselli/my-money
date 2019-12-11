import produce from 'immer';

export default function login(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      // return [...state, action.logar];
      return produce(state, draft => {
        const loginIndex = draft.find(p => p === action.logar);

        if (!loginIndex) {
          draft.push(action.logar);
        }
      });
    default:
      return state;
  }
}
