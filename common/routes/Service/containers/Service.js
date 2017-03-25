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
    const services = this.props.tree.services.value
    const service = this.props.tree.service.value
    const isEn = this.props.tree.sourceRequest.host.slice(0, 3) === 'en.'
    return (
      <div >
        <Helmet >
          <title>{service.title}</title>
          <meta name='description' content={service.description} />
        </Helmet>

        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-12 col-xs-12'>

                <div className='solution_tabs'>
                  {isEn ? (
                    <h3>Services</h3>
                    ) : (
                    <h3>Các dịch vụ</h3>
                    )}
                  <ul>
                    {isEn ? (
                      <li className='active'><Link to='/services'>All Services</Link></li>
                      ) : (
                      <li className='active'><Link to='/services'>Tất cả các dịch vụ</Link></li>
                      )}
                    {services.map((el, index) => {
                      return (
                        <li key={index} className={this.props.params.slug === el.slug ? 'active' : ''}><Link to={'/services/' + el.slug}>{el.title}</Link></li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>
                <h1 style={{fontSize: 26, marginBottom: 15}}>{service.title}</h1>
                <div className='col-md-6 col-xs-12' dangerouslySetInnerHTML={{__html: service.content}} />
                <div className='col-md-6 col-xs-12' >
                  {service.cover && <img src={'/image/' + service.cover.path} style={{width: '100%'}} alt={service.cover.path} />}
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

