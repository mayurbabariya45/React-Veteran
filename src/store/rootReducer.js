import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from '../modules/App/reducer';
import { reducer as veteranReducer } from '../modules/Clients/VeteranInformation';

const rootReducer = combineReducers({
  form: formReducer,
  app: appReducer,
  veteran: veteranReducer,
});

export default rootReducer;
