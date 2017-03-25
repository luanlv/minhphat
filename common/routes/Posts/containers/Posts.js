// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
import {Link} from 'react-router'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadData())
}

const mapStateToProps = state => ({
  tree: state
})

class HomePage extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  render () {
    const posts = this.props.tree.posts.value
    const newestPosts = this.props.tree.newestPosts.value
    const categories = this.props.tree.categories.value
    var isEn = this.props.tree.sourceRequest.host.slice(0, 3) === 'en.'
    return (
      <div >
        {isEn ? (
          <Helmet >
            <title>News</title>
          </Helmet>
          ) : (
          <Helmet >
            <title>Tin tức</title>
          </Helmet>
          )}

        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
            <div className='row'>
              {isEn ? (
                <h1 style={{fontSize: 22}}>News</h1>
                ) : (
                <h1 style={{fontSize: 22}}>Chuyên mục tin tức</h1>
                )}
              <div className='col-md-8'>
                {posts.map((el, index) => {
                  return (
                    <div className='latest_page_box' key={index}>
                      <div className='news_image'>
                        <img src={'/image/' + el.cover.path} alt='image' />
                      </div>
                      <p><span>Danh mục:</span> {el.category.map((el) => el.title + ', ')}</p>
                      <h3>{el.title}</h3>
                      <p className='m-b-30'>
                        {el.description}
                      </p>
                      <Link className='btn-dark button-black' to={'/news/' + el.slug}>Đọc thêm</Link>
                    </div>
                  )
                })}
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='row p-t-60'>
                  <div className='col-md-12'>
                    {isEn ? (
                      <h3>Newest</h3>
                      ) : (
                      <h3>Tin mới nhất</h3>
                      )}
                    {newestPosts.map((el, index) => {
                      return (
                        <div className='media p-t-20 p-b-20' key={index}>
                          <div className='media-left media-middle'>
                            <Link to={'/news/' + el.slug}><img src={'/image/' + el.cover.path} alt='image' /></Link>
                          </div>
                          <div className='media-body'>
                            <h4 className='media-heading'><Link to={'/news/' + el.slug}>{el.title}</Link></h4>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className='row p-t-60'>
                  <div className='col-md-12'>
                    {isEn ? (
                      <h3>Categories</h3>
                      ) : (
                      <h3>Danh mục</h3>
                      )}
                  </div>
                  <div className='col-md-12'>
                    <ul className='pro-list p-t-25'>
                      {categories.map((el, index) => {
                        return (
                          <li key={index}>{el.title}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

