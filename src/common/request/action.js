import request from '../../utils/request';
//授权状态查询
const REQUEST_AUTHORIZATION_QUERY_START = 'REQUEST_AUTHORIZATION_QUERY_START';
const REQUEST_AUTHORIZATION_QUERY_SUCCESS = 'REQUEST_AUTHORIZATION_QUERY_SUCCESS';
const REQUEST_AUTHORIZATION_QUERY_FAIL = 'REQUEST_AUTHORIZATION_QUERY_FAIL';

//请求授权
const REQUEST_AUTHORIZATION_START = 'REQUEST_AUTHORIZATION_START';
const REQUEST_AUTHORIZATION_SUCCESS = 'REQUEST_AUTHORIZATION_SUCCESS';
const REQUEST_AUTHORIZATION_FAIL = 'REQUEST_AUTHORIZATION_FAIL';


/**
 * 获取当前授权状态
 * */
const requestAuthorizationQueryStart = () => ({
  type: REQUEST_AUTHORIZATION_QUERY_START
});

const requestAuthorizationQuerySuccess = (data) => ({
  type: REQUEST_AUTHORIZATION_QUERY_SUCCESS,
  data
});

const requestAuthorizationQueryFail = (err) => ({
  type: REQUEST_AUTHORIZATION_QUERY_FAIL,
  data: err
});

export const SL_AuthorizationQueryRequestAction = (type, url, params) => (dispatch, getState) => {
  dispatch(requestAuthorizationQueryStart());
  let _promise = request(type, url, params).promise;
  _promise
    .then(data => {
      console.log(data);
      if(data.resultCode === '10000')
        dispatch(requestAuthorizationQuerySuccess(data.body));
      else
        dispatch(requestAuthorizationQueryFail(data.body));
    })
    .catch(err => {
      dispatch(requestAuthorizationQueryFail(err));
    });
  return _promise;
}


/**
 * 请求授权
 * */
const requestAuthorizationStart = () => ({
  type: REQUEST_AUTHORIZATION_START
})
const requestAuthorizationSuccess = (data) => ({
  type: REQUEST_AUTHORIZATION_SUCCESS,
  data
});
const requestAuthorizationFail = (err) => ({
  type: REQUEST_AUTHORIZATION_FAIL,
  data: err
});
export const SL_AuthorizationRequestAction = (type, url, params) => (dispatch, getState) => {
  dispatch(requestAuthorizationStart());
  let _promise = request(type, url, params).promise;
  _promise
    .then(data => {
      console.log(data);
      if(data.resultCode === '10000')
        dispatch(requestAuthorizationSuccess(data.body));
      else
        dispatch(requestAuthorizationFail(data.body));
    })
    .catch(err => {
      dispatch(requestAuthorizationFail(err));
    });
  return _promise;
}
