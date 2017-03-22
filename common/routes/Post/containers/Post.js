// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
import {Link} from 'react-router'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadData(slug))
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
    const post = this.props.tree.post.value
    const newestPosts = this.props.tree.newestPosts.value
    const categories = this.props.tree.categories.value
    return (
      <div >
        <Helmet title='Các sản phẩm' />
        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='latest_page_box'>
                  <div className='news_image'>
                    <img src={'/image/' + post.cover.path} alt='image' />
                  </div>
                  <p><span>Danh mục:</span> {post.category.map((el) => el.title + ', ')}</p>
                  <h3>{post.title}</h3>
                  <hr />
                  <div className='col-md-12' dangerouslySetInnerHTML={{__html: post.content}} />
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='row p-t-60'>
                  <div className='col-md-12'>
                    <h3>Tin mới nhất</h3>
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
                    <h3>Danh mục</h3>
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

