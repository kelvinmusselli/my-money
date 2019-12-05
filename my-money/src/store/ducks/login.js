import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  nameUser: ['nameUser'],
  logout: null,
});

export const LoginTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
  success: false,
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: state => state.merge({ loading: true, error: null }),
  [Types.LOGIN_SUCCESS]: (state, { data }) =>
    state.merge({
      error: null,
      data,
      success: true,
    }),
  [Types.LOGIN_FAILURE]: (state, { error }) =>
    state.merge({ loading: false, error }),
  [Types.LOGOUT]: state =>
    state.merge({
      loading: false,
      error: null,
      success: false,

      data: null,
    }),
});
