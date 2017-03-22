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
    const products = this.props.tree.products.value
    console.log(products)
    return (
      <div >
        <Helmet title='Các sản phẩm' />
        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-12 col-xs-12'>

                <div className='solution_tabs'>
                  <h3>Các sản phẩm của Minh Phát</h3>
                  <ul>
                    <li className='active'><Link to='/products'>Tất cả các sản phẩm</Link></li>
                    {products.map((el, index) => {
                      return (
                        <li key={index}><Link to={'/products/' + el.slug}>{el.title}</Link></li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>
                {products.map((el, index) => {
                  return (
                    <div className='col-md-4 col-sm-4 col-xs-6' key={index}>
                      <div className='latest_page_box'>
                        <div className='news_image' style={{marginBottom: 15}}>
                          {el.cover && <img src={'/image/' + el.cover.path} alt='image' />}
                        </div>
                        <h3 style={{marginBottom: 5, fontWeight: 'bold', textTransform: 'uppercase'}}>{el.title}</h3>
                        <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                          {el.description}
                        </p>
                        <br />
                        <Link className='btn pull-right' to={'/products/' + el.slug} >Xem thêm</Link>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

