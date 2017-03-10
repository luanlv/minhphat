if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'services',
    getComponents (location, cb) {
      require.ensure([
        './containers/Services'
      ], (require) => {
        let Services = require('./containers/Services').default
        cb(null, Services)
      })
    }
  }
}
