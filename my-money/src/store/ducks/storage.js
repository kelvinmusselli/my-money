import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setStorageData: ['data'],
  setStorageCustomerSelected: ['customer'],
  setStorageClear: null,
});

export const StorageTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: {},
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STORAGE_DATA]: (state, { data }) =>
    state.merge({
      data,
    }),
  [Types.SET_STORAGE_CUSTOMER_SELECTED]: (state, { customer }) =>
    state.merge({
      data: { ...state.data, customerSelected: customer },
    }),
  [Types.SET_STORAGE_CLEAR]: state =>
    state.merge({
      data: {},
    }),
});
