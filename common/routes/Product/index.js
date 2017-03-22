if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'products/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/Product'
      ], (require) => {
        let Product = require('./containers/Product').default
        cb(null, Product)
      })
    }
  }
}
