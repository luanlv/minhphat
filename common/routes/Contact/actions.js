import request from '../../request'
import * as getData from '../../dataRequire'

export function loadData () {
  return (dispatch, getState) => request(dispatch, getState, requireData(getState()))
}

function requireData (state) {
  var data = []
  data = getData.products(data, state)
  data = getData.services(data, state)
  data = getData.categories(data, state)
  return data
}
