import { combineReducers } from 'redux';
import {

  REQUEST_AUTHORIZATION_QUERY_START,
  REQUEST_AUTHORIZATION_QUERY_SUCCESS,
  REQUEST_AUTHORIZATION_QUERY_FAIL,

  REQUEST_AUTHORIZATION_START,
  REQUEST_AUTHORIZATION_SUCCESS,
  REQUEST_AUTHORIZATION_FAIL,
} from './action'

/**
 * 当前授权状态查询
 * */
const authorizationQuery = (state = {fetch: false}, action) => {
  switch (action.type) {
    case REQUEST_AUTHORIZATION_QUERY_START:
      return {fetch: true};
    case REQUEST_AUTHORIZATION_QUERY_SUCCESS:
      return {...state, data: action.data, error: undefined, fetch: false};
    case REQUEST_AUTHORIZATION_QUERY_FAIL:
      return {...state, data: action.data, error: true, fetch: false};
    default:
      return state;
  }
};

/**
 * 请求授权接口
 * */
const getAuthorization = (state = {fetch: false}, action) => {
  switch (action.type) {
    case REQUEST_AUTHORIZATION_START:
      return {fetch: true};
    case REQUEST_AUTHORIZATION_SUCCESS:
      return {...state, data: action.data, error: undefined, fetch: false};
    case REQUEST_AUTHORIZATION_FAIL:
      return {...state, data: action.data, error: true, fetch: false};
    default:
      return state;
  }
};

export default combineReducers({
    authorizationQuery,
    getAuthorization
});
