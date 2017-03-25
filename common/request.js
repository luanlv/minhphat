import axios from 'axios'
import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from './constants'

export default (dispatch, getState, requireList) => {
  const { protocol, host } = getState().sourceRequest
  dispatch({ type: LOAD_DATA_REQUEST, requireList: requireList })
  const lang = host.slice(0, 3) === 'en.' ? 'en' : 'vi'
  return axios.post(`${protocol}://${host}/api/get?lang=` + lang, requireList)
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
