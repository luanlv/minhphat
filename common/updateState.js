export const newStateSuccess = function (state, data = []) {
  var result = Object.assign({}, state, {})

  data.forEach((el) => {
    const key = el.req.v

    if (key === 's1') {
      result = Object.assign({}, result, {
        services: {
          needUpdate: result.services.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 's2') {
      result = Object.assign({}, result, {
        service: {
          needUpdate: result.service.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p1') {
      result = Object.assign({}, result, {
        products: {
          needUpdate: result.products.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p2') {
      result = Object.assign({}, result, {
        product: {
          needUpdate: result.product.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'c1') {
      result = Object.assign({}, result, {
        categories: {
          needUpdate: result.categories.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p3') {
      result = Object.assign({}, result, {
        posts: {
          needUpdate: result.posts.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p4') {
      result = Object.assign({}, result, {
        newestPosts: {
          needUpdate: result.newestPosts.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p5') {
      result = Object.assign({}, result, {
        post: {
          needUpdate: result.post.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    }
  })
  return result
}

export const newStateRequest = function (state, requireList = []) {
  var result = Object.assign({}, state, {})
  requireList.forEach((el) => {
    const key = el.v
    if (key === 'p1') {
      result = Object.assign({}, result, {
        posts: {
          needUpdate: result.posts.needUpdate,
          isLoading: true,
          ok: false,
          value: []
        }
      })
    }
  })
  return result
}
