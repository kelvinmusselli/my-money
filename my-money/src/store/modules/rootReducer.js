import { combineReducers } from 'redux';

// conforme ter mais reducer adicionando aqui
import login from './login/reducer';
import money from './money/reducer';

export default combineReducers({
  login,
  money,
});
