export function categories (data = [], state) {
  if (state.categories.needUpdate || !state.categories.ok) {
    data.push({
      t: 1,
      v: 'c1'
    })
  }
  return data
}

export function services (data = [], state) {
  if (state.services.needUpdate || !state.services.ok) {
    data.push({
      t: 1,
      v: 's1'
    })
  }
  return data
}

export function products (data = [], state) {
  if (state.products.needUpdate || !state.products.ok) {
    data.push({
      t: 1,
      v: 'p1'
    })
  }
  return data
}

export function service (data = [], state, slug) {
  if (state.service.needUpdate || !state.service.ok) {
    data.push({
      t: 2,
      v: 's2',
      e: slug
    })
  }
  return data
}

export function product (data = [], state, slug) {
  if (state.product.needUpdate || !state.product.ok) {
    data.push({
      t: 2,
      v: 'p2',
      e: slug
    })
  }
  return data
}

export function posts (data = [], state) {
  if (state.posts.needUpdate || !state.posts.ok) {
    data.push({
      t: 1,
      v: 'p3'
    })
  }
  return data
}

export function newestPosts (data = [], state) {
  if (state.newestPosts.needUpdate || !state.newestPosts.ok) {
    data.push({
      t: 1,
      v: 'p4'
    })
  }
  return data
}

export function post (data = [], state, slug) {
  if (state.service.needUpdate || !state.service.ok) {
    data.push({
      t: 2,
      v: 'p5',
      e: slug
    })
  }
  return data
}
