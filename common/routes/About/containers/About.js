// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
// import {Link} from 'react-router'

const redial = {
  // fetch: ({ dispatch }) => dispatch(loadData())
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
    return (
      <div >
        <Helmet title='About us' />

        <section id='solution' className='p-t-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <p>We started with a simple idea.</p>
                  <h2>Company <span className='color_red'>overview</span></h2>
                </div>
              </div>
            </div>

            <div className='row'>

              <div className='col-md-7 col-sm-7 col-xs-12'>

                <div className='row'>
                  <div className='col-md-12 p-b-35'>
                    <p className='m-t-40 p_18'>Copious is WP Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in that faucibus orci luctus et.</p>
                    <p className='m-t-40 p_18'>Aliquam ultrices venenatis mauris. Aliquam ultrices venenatis mauris. Vestibulum industry, logistics, finance, business, power Aliquam ultrices venenatis mauris. industry, logistics, finance, business, Power mauris Lorem ipsum dolor sit amet, consectetur.</p>
                    <p className='m-t-40 p_18'>Vestibulum industry, logistics, finance, business, power Aliquam ultrices venenatis mauris. industry, logistics, finance, business, consectetur.</p>
                    <div className='text_ita m-t-35 m-b-50'>
                      <p>Copious is WP Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in that faucibus orci luctus et.</p>
                    </div>

                  </div>
                </div>

              </div>

              <div className='col-md-5 col-sm-5 col-xs-12'>
                <div className='finance_about_page'>
                  <img src='/assets/images/finance/about_us-page.jpg' alt='image' className='img-responsive' />
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className='finance_bg_text'>
          <div className='container'>
            <div className='row' id='funfacts'>
              <div className='col-md-12 text-center'>
                <h2>Helping Small Businesses</h2>
                <p className='p-white'>Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore.</p>
              </div>
            </div>
            <div className='row text-center m-t-30' id='counters'>
              <div className='col-md-3 col-xs-6'>
                <div className='counter'>
                  <span className='quantity-counter1 highlight'>42</span>
                  <h6 className='counter-details'>Employees</h6>
                </div>
              </div>
              <div className='col-md-3 col-xs-6'>
                <div className='counter'>
                  <span className='quantity-counter2 highlight'>3</span>
                  <h6 className='counter-details'>Location</h6>
                </div>
              </div>
              <div className='col-md-3 col-xs-6'>
                <div className='counter'>
                  <span className='quantity-counter3 highlight'>100</span>
                  <h6 className='counter-details'>Satisfaction %</h6>
                </div>
              </div>
              <div className='col-md-3 col-xs-6'>
                <div className='counter'>
                  <span className='quantity-counter4 highlight'>518</span>
                  <h6 className='counter-details'>Happy Customers</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='p-t-100 feature_3' id='feature'>
          <div className='container'>
            <div className='row m-b-50'>
              <div className='heading text-center'>
                <div className='heading_border bg_red' />
                <p>THE THING THAT MAKES US DIFFERENT</p>
                <h2>Why <span className='color_red'>Choose us</span></h2>
              </div>
            </div>
            <div className='row'>

              <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
                <div className='feature_box'>
                  <i className='icon-briefcase2' />
                  <h3>Manufacturing</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                </div>
              </div>

              <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
                <div className='feature_box'>
                  <i className='icon-globe' />
                  <h3>Product Delivery</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                </div>
              </div>

              <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
                <div className='feature_box'>
                  <i className='icon-lock5' />
                  <h3>Safe Place for you</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                </div>
              </div>

            </div>
            <div className='row'>

              <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
                <div className='feature_box'>
                  <i className='icon-thumb-up' />
                  <h3>100% Purity</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                </div>
              </div>

              <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
                <div className='feature_box'>
                  <i className='icon-gears' />
                  <h3>Maintenance</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                </div>
              </div>

              <div className='col-md-4 col-sm-4 col-xs-12 text-center'>
                <div className='feature_box'>
                  <i className='icon-alarmclock' />
                  <h3>24 Hours Services</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className='bg_gray p-t-100 p-b-100 tab_finance'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div id='faq' className='faq_box'>

                  <ul className='items'>
                    <li><a className='expanded' href='#'>What is do i have to tell you a few lorem?</a>
                      <ul style={{display: 'block'}} className='sub-items'>

                        <li>
                          <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices.</p>
                        </li>
                      </ul>
                    </li>

                    <li><a href='#'>Secure strong revenue growth</a>
                      <ul className='sub-items'>
                        <li>
                          <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices.</p>
                        </li>
                      </ul>
                    </li>

                    <li><a href='#'>Cut expenses without sacrificing quality</a>
                      <ul className='sub-items'>
                        <li>
                          <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices.</p>
                        </li>
                      </ul>
                    </li>

                    <li><a href='#'>Cut expenses without sacrificing quality</a>
                      <ul className='sub-items'>
                        <li>
                          <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='company_box'>
                  <ul className='skills'>
                    <li className='progressbar1' data-width='70' data-target='78'>2011</li>
                    <li className='progressbarPhp' data-width='80' data-target='85'>2014</li>
                    <li className='progressbar2' data-width='90' data-target='95'>2015</li>
                    <li className='progressbar2' data-width='98' data-target='98'>2017</li>
                  </ul>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Benenatis mauris. Vestibulum ante ipsum primis. Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

