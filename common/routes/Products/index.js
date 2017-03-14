if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'products',
    getComponents (location, cb) {
      require.ensure([
        './containers/Products'
      ], (require) => {
        let Products = require('./containers/Products').default
        cb(null, Products)
      })
    }
  }
}
