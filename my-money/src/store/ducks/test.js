export const Types = {
  REQUEST: 'TEST_REQUEST',
};

const INITIAL_STATE = {
  data: null,
};

export default function test(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        data: action.payload.value,
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: value => ({
    type: Types.REQUEST,
    payload: {
      value,
    },
  }),
};
