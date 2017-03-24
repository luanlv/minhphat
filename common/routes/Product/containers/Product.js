// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
import {Link} from 'react-router'

const redial = {
  fetch: ({dispatch, params: { slug }}) => dispatch(loadData(slug))
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
    const product = this.props.tree.product.value
    return (
      <div >
        <Helmet >
          <title>{product.title}</title>
          <meta name='description' content={product.description} />
        </Helmet>

        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
              <div className='col-md-3 col-sm-12 col-xs-12'>

                <div className='solution_tabs'>
                  <h3>Các sản phẩm của Minh Phát</h3>
                  <ul>
                    <li ><Link to='/products'>Tất cả các sản phẩm</Link></li>
                    {products.map((el, index) => {
                      return (
                        <li key={index} className={this.props.params.slug === el.slug ? 'active' : ''}><Link to={'/products/' + el.slug}>{el.title}</Link></li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>
                <h1 style={{fontSize: 26, marginBottom: 15}}>{product.title}</h1>
                <div className='col-md-6 col-xs-12' dangerouslySetInnerHTML={{__html: product.content}} />
                <div className='col-md-6 col-xs-12' >
                  {product.cover && <img src={'/image/' + product.cover.path} style={{width: '100%'}} alt={product.cover.path} />}
                </div>
              </div>

            </div>
        </section>
      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

