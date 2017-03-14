if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'services/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/Service'
      ], (require) => {
        let Service = require('./containers/Service').default
        cb(null, Service)
      })
    }
  }
}
