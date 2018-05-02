import {combineReducers} from 'redux';
import appReducer from '../container/App/reducer';
import homePageReducer from '../container/HomePage/reducer'


export default combineReducers({
  appReducer,
  homePageReducer
});

