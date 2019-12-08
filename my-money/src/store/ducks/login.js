export const Types = {
  REQUEST: 'LOGIN_REQUEST',
};

const INITIAL_STATE = {
  data: null,
};

export default function login(state = INITIAL_STATE, action) {
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
