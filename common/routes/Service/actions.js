import * as getData from '../../dataRequire'
import request from '../../request'

export function loadData (slug) {
  return (dispatch, getState) => request(dispatch, getState, requireData(getState(), slug))
}

function requireData (state, slug) {
  var data = []
  data = getData.products(data, state)
  data = getData.services(data, state)
  data = getData.categories(data, state)
  data = getData.service(data, state, slug)
  return data
}
