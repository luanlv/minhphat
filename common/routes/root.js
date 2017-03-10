// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'
import HomePage from './HomePage/containers/HomePage'

export default function createRoutes (store) {
  const root = {
    path: '/',
    component: App,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./HomePage').default(store), // no need to modify store, no reducer
          require('./About').default(store), // no need to modify store, no reducer
          require('./Contact').default(store), // no need to modify store, no reducer
          require('./Services').default(store), // no need to modify store, no reducer
          require('./NotFound').default
        ])
      })
    },
    indexRoute: {
      component: HomePage
    }
  }

  return root
}
