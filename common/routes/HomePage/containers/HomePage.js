// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
// import {Link} from 'react-router'
import Slider from './Slider'
import Service from './Service'

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
    return (
      <div >
        <Helmet title='Home page' />
        <Slider />
        <Service />

        <section id='bg_text' className='bg_3' style={{background: 'url(/assets/images/finance/bg.jpg) no-repeat', backgroundPosition: '50% -224px', backgroundAttachment: 'fixed'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h2>ĐỐI TÁC MINH PHÁT</h2>
                <p className='p-white'>Minh Phát luôn luôn lắng nghe, thấu hiểu ý kiến của quý khách hàng, nâng cao chất lượng dịch vụ.</p>
              </div>
            </div>
          </div>
        </section>

        <section id='feature' className='bg_gray feature_slider'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div id='latest_news-slider_1' className=' owl-carousel margin-top-65'>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-stick-man' />
                      <h3>Busines Advisor</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-presentation-4' />
                      <h3>Business Consulting</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-website' />
                      <h3>Finance Website</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-money-3' />
                      <h3>Save Money</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-bar-chart' />
                      <h3>Financial Planning</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-cart-12' />
                      <h3>Consumer Consulting</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-bank' />
                      <h3>Private Consulting</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='testimonials' className='p-t-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <h2>Chia sẻ về <span className='color_red'>MINH PHÁT</span></h2>
                </div>
              </div>
            </div>
            <div className='row p-t-80'>
              <div id='testimonial-slider' className='owl-carousel text-center'>
                <div className='item wow fadeInDown'>
                  <img src='/assets/images/testinomial.png' alt='partner1' />
                  <h3 className='p-t-15'>John Smith</h3>
                  <p>CEO Megahost</p>
                  <div className='testimonial-detail text-center p-t-30'>
                    <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et. Aliquam ultrices venenatis mauris. Aliquam ultrices venenatis mauris. Vestibulum industry, logistics, finance, business luctus et. Aliquam ultrices venenatis mauris.</p>
                  </div>
                </div>
                <div className='item wow fadeInDown'>
                  <img src='/assets/images/testinomial.png' alt='partner1' />
                  <h3 className='p-t-15'>John Smith</h3>
                  <p>CEO Megahost</p>
                  <div className='testimonial-detail text-center p-t-30'>
                    <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et. Aliquam ultrices venenatis mauris. Aliquam ultrices venenatis mauris. Vestibulum industry, logistics, finance, business luctus et. Aliquam ultrices venenatis mauris.</p>
                  </div>
                </div>
                <div className='item wow fadeInDown'>
                  <img src='/assets/images/testinomial.png' alt='partner1' />
                  <h3 className='p-t-15'>John Smith</h3>
                  <p>CEO Megahost</p>
                  <div className='testimonial-detail text-center p-t-30'>
                    <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et. Aliquam ultrices venenatis mauris. Aliquam ultrices venenatis mauris. Vestibulum industry, logistics, finance, business luctus et. Aliquam ultrices venenatis mauris.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='our_team_3' className='p-t-90 m-b-90'>
          <div className='container'>
            <div className='row p-b-60'>
              <div className='col-md-12'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <h2>Nhân sự <span className='color_red'>MINH PHÁT</span></h2>
                </div>
              </div>
            </div>

            <div id='our_team_slider_3' className='owl-carousel'>

              <div className='item'>

                <div className='single-effect'>
                  <figure className='wpf-demo-gallery'>
                    <a href='#'><img src='/assets/images/team_1.jpg' alt='img' /></a>
                    <figcaption className='view-caption'>
                      <a href='.team'><i className='icon-focus' /></a>
                    </figcaption>
                  </figure>
                </div>
                <div className='team_text'>
                  <h3>Stepthen Adams</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  <a href='.team'>Read More</a>
                </div>

              </div>

              <div className='item'>

                <div className='single-effect'>
                  <figure className='wpf-demo-gallery'>
                    <a href='.team'><img src='/assets/images/team_2.jpg' alt='img' /></a>
                    <figcaption className='view-caption'>
                      <a href='.team'><i className='icon-focus' /></a>
                    </figcaption>
                  </figure>
                </div>
                <div className='team_text'>
                  <h3>Stepthen Adams</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  <a href='.team'>Read More</a>
                </div>

              </div>

              <div className='item'>

                <div className='single-effect'>
                  <figure className='wpf-demo-gallery'>
                    <a href='.team'><img src='/assets/images/team_3.jpg' alt='img' /></a>
                    <figcaption className='view-caption'>
                      <a href='.team'><i className='icon-focus' /></a>
                    </figcaption>
                  </figure>
                </div>
                <div className='team_text'>
                  <h3>Stepthen Adams</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  <a href='.team'>Read More</a>
                </div>

              </div>

              <div className='item'>

                <div className='single-effect'>
                  <figure className='wpf-demo-gallery'>
                    <a href='.team'><img src='/assets/images/team_1.jpg' alt='img' /></a>
                    <figcaption className='view-caption'>
                      <a href='.team'><i className='icon-focus' /></a>
                    </figcaption>
                  </figure>
                </div>
                <div className='team_text'>
                  <h3>Stepthen Adams</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  <a href='.team'>Read More</a>
                </div>

              </div>

              <div className='item'>

                <div className='single-effect'>
                  <figure className='wpf-demo-gallery'>
                    <a href='.team'><img src='/assets/images/team_2.jpg' alt='img' /></a>
                    <figcaption className='view-caption'>
                      <a href='.team'><i className='icon-focus' /></a>
                    </figcaption>
                  </figure>
                </div>
                <div className='team_text'>
                  <h3>Stepthen Adams</h3>
                  <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  <a href='.team'>Read More</a>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section id='latest_news' className='p-b-100 p-t-100 bg_gray'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-sm-8 col-xs-12'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <h2>Tin tức <span className='color_red'>Logistics</span></h2>
                </div>

                <div id='latest_news-slider' className='owl-carousel p-t-40'>
                  <div className='item'>
                    <div className='latest_box'>
                      <a href='#'><h3>Secure strong revenue growth</h3></a>
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus...</p>
                      <div className='lates_border m-b-25' />
                      <img src='/assets/images/latest_news.png' alt='image' />
                      <span>by Michael Jordan</span>
                      <i className='icon-icons228' /> <span>14 Feb 2016</span>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='latest_box'>
                      <a href='#'><h3>Need for growth and reliabilty</h3></a>
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus...</p>
                      <div className='lates_border m-b-25' />
                      <img src='/assets/images/latest_news.png' alt='image' />
                      <span>by Michael Jordan</span>
                      <i className='icon-icons228' /> <span>14 Feb 2016</span>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='latest_box'>
                      <a href='#'><h3>Secure strong revenue growth</h3></a>
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus...</p>
                      <div className='lates_border m-b-25' />
                      <img src='/assets/images/latest_news.png' alt='image' />
                      <span>by Michael Jordan</span>
                      <i className='icon-icons228' /> <span>14 Feb 2016</span>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='latest_box'>
                      <a href='#'><h3>Need for growth and reliabilty</h3></a>
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in faucibus...</p>
                      <div className='lates_border m-b-25' />
                      <img src='/assets/images/latest_news.png' alt='image' />
                      <span>by Michael Jordan</span>
                      <i className='icon-icons228' /> <span>14 Feb 2016</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <h2>Gmail tới <span className='color_red'>Minh Phát</span></h2>
                </div>
                <div className='p-t-40'>
                  <div className='over_image'><img src='/assets/images/update_bg.png' alt='image' /></div>
                  <div className='updates'>
                    <p className='color_white'>Subscribe to our newsletters to receive latest news and updates. </p>
                    <form className='p-t-25'>
                      <div className='col-md-12'>
                        <input type='text' placeholder='Name' />
                      </div>
                      <div className='col-md-10'>
                        <input type='email' className='email' placeholder='Email' />
                      </div>
                      <div className='col-md-2'>
                        <input type='submit' className='submit' value='' />
                        <span><a href='#'><i className='icon-mail-envelope-closed3' /></a></span>
                      </div>
                    </form>
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

