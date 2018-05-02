import request from '../../utils/request';
const REQUEST_HOME_PAGE_DATA_START = 'REQUEST_HOME_PAGE_DATA_START';
const REQUEST_HOME_PAGE_DATA_SUCCESS = 'REQUEST_HOME_PAGE_DATA_SUCCESS';
const REQUEST_HOME_PAGE_DATA_FAIL = 'REQUEST_HOME_PAGE_DATA_FAIL';

const requestHomePageStart = () => ({
  type: REQUEST_HOME_PAGE_DATA_START
});

const requestHomePageSuccess = (data) => ({
  type: REQUEST_HOME_PAGE_DATA_SUCCESS,
  data
});

const requestHomePageFail = (err) => ({
  type: REQUEST_HOME_PAGE_DATA_FAIL,
  data: err
});

export default (type, url, params) => (dispatch, getState) => {
  dispatch(requestHomePageStart());
  let _promise = request(type, url, params).promise;
  _promise
    .then(data => {
      console.log(data);
      if(data.resultCode === '10000')
        dispatch(requestHomePageSuccess(data.body));
      else
        dispatch(requestHomePageFail(data.body));
    })
    .catch(err => {
      dispatch(requestHomePageFail(err));
    });
  return _promise;
}


