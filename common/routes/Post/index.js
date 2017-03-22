if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'news/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/Post'
      ], (require) => {
        let Post = require('./containers/Post').default
        cb(null, Post)
      })
    }
  }
}
