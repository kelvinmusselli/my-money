import { put } from 'redux-saga/effects';
import LoginActions from '../ducks/login';

export function* login({ nameUser }) {
  try {
    yield put(LoginActions.loginSuccess(nameUser));
  } catch (err) {
    yield put(LoginActions.loginFailure('Usuário não encontrado'));
  }
}
