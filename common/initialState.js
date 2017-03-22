export const initialStateApp = {
  loading: false,
  user: {},

  post: {
    ok: false,
    needUpdate: false,
    value: []
  },

  posts: {
    ok: false,
    needUpdate: false,
    value: []
  },

  newestPosts: {
    ok: false,
    needUpdate: false,
    value: []
  },

  categories: {
    ok: false,
    needUpdate: false,
    value: []
  },

  services: {
    ok: false,
    needUpdate: false,
    value: []
  },

  service: {
    ok: false,
    needUpdate: true,
    value: {}
  },

  products: {
    ok: false,
    needUpdate: false,
    value: []
  },

  product: {
    ok: false,
    needUpdate: true,
    value: {}
  }
}
