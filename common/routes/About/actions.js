
import * as getData from '../../dataRequire'
import request from '../../request'

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
