import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from '../../constants'
import * as getData from '../../dataRequire'

export function loadData () {
  console.log('loadData')
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    const requireList = requireData(getState())
    dispatch({ type: LOAD_DATA_REQUEST, requireList: requireList })
    return axios.post(`${protocol}://${host}/api/get`, requireList)
      .then(res => {
        dispatch({
          type: LOAD_DATA_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_DATA_SUCCESS}: `, error)
        dispatch({
          type: LOAD_DATA_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}

function requireData (state) {
  var data = []
  data = getData.products(data, state)
  data = getData.services(data, state)
  data = getData.categories(data, state)
  data = getData.posts(data, state)
  return data
}
