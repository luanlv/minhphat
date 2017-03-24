export const newStateSuccess = function (state, data = []) {
  var result = Object.assign({}, state, {})

  data.forEach((el) => {
    const key = el.req.v
    result = Object.assign({}, result)
    console.log('before')
    console.log(result)
    if (key === 's1') {
      result.services = {
        needUpdate: result.services.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 's2') {
      result.service = {
        needUpdate: result.service.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 'p1') {
      result.products = {
        needUpdate: result.products.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 'p2') {
      result.product = {
        needUpdate: result.product.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 'c1') {
      result.categories = {
        needUpdate: result.categories.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 'p3') {
      result.posts = {
        needUpdate: result.posts.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 'p4') {
      result.newestPosts = {
        needUpdate: result.newestPosts.needUpdate,
        ok: el.ok,
        value: el.value
      }
    } else if (key === 'p5') {
      result.post = {
        needUpdate: result.post.needUpdate,
        ok: el.ok,
        value: el.value
      }
    }

    console.log('after')
    console.log(result)
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
