if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'news',
    getComponents (location, cb) {
      require.ensure([
        './containers/Posts'
      ], (require) => {
        let Posts = require('./containers/Posts').default
        cb(null, Posts)
      })
    }
  }
}
