// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
// import { loadData } from '../actions'
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
        <Helmet title='Services' />

        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-12 col-xs-12'>

                <div className='solution_tabs'>
                  <h3>Các dịch vụ của Minh Phát</h3>
                  <ul>
                    <li><a href='services.html'>Thủ tục hải quan</a></li>
                    <li className='active'><a href='services.html'>Vận chuyển hàng không</a></li>
                    <li><a href='services.html'>Vận chuyển đường biển</a></li>
                    <li><a href='services.html'>Vận chuyển Bắc Nam</a></li>
                    <li><a href='services.html'>Nâng hạ máy móc và hàng dự án</a></li>
                    <li><a href='services.html'>Đóng kiện gỗ</a></li>
                  </ul>
                </div>

                <div className='footer_1_contact'>
                  <h3>Get in Touch</h3>
                  <p><i className='icon-telephone114' />+1(123) 456 7890 - 1</p>
                  <br />
                  <p><i className=' icon-icons142' />hello@copious.com</p>
                  <br />
                  <p><i className='icon-icons20' />Mon to Fri - 08:00 to 16:30</p>
                  <br />
                  <i className='icon-icons74' />
                  <p>Manhattan Hall, Lacasa Ave Melb
                  <br />ourne,124BP Australia</p>
                </div>

                <div className='have_qus'>
                  <h3>You Have Question?</h3>
                  <p>Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  <a className='btn-dark button-black' href='contact.html'><i className='icon-telephone114' /> Read More</a>
                </div>

                <div className='brochure m-t-60 m-b-60'>
                  <h3>Brochures</h3>
                  <p>View our 2016 financial prospectus brochure for an easy to read guide on all of the services offer.</p>
                  <a href='#'><i className='icon-document-file-gif' /> Download Brochures</a> </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>
                <div id='shop-slider' className='owl-carousel'>
                  <div className='item'>
                    <div className='content-right-md'>
                      <figure className='effect-layla'> <img src='/assets/images/finance/project_detail_1.jpg' alt='img' />
                        <figcaption />
                      </figure>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='content-right-md'>
                      <figure className='effect-layla'> <img src='/assets/images/finance/project_detail_1.jpg' alt='img' />
                        <figcaption />
                      </figure>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='content-right-md'>
                      <figure className='effect-layla'> <img src='/assets/images/finance/project_detail_1.jpg' alt='img' />
                        <figcaption />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className='row m-t-40'>
                  <div className='col-md-12 p-b-50'>
                    <h3>Bonds & Commodities</h3>
                    <p className='m-t-25'>We have over 15 years of experience Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur adi pisi cing elit, sed do eiusmod tempor xercitationemut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum nec risus et suscipit primis in industry, logistics, finance, business Curabitur metus ipsum. But I must explain to you how all this mistaken idea of denouncing.</p>
                    <div className='project_details_text p-t-50'>
                      <ul>
                        <li>Copious is WP Aliquam ultrices venenatis mauris.</li>
                        <li>Vestibulum industry, logistics</li>
                        <li>Vestibulum ante ipsum primis in that faucibus orci luctus et.</li>
                        <li>industry, logistics, finance, business,</li>
                      </ul>
                    </div>
                    <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Aliquam ultrices primis in industry, logistics, finance, business orci Aliquam ultrices. Aliquam ultrices venenatis mauris industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                  </div>
                  <div className='col-md-5 col-sm-5 col-xs-12'>
                    <div className='solution_img'> <img src='/assets/images/solution_2.jpg' className='img-responsive' alt='image' /> </div>
                  </div>
                  <div className='col-md-7 col-sm-7 col-xs-12'>
                    <div className='project_details_text'>
                      <p className='p-b-30'>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. Aliquam ultrices primis in industry, logistics, finance, business orci Aliquam ultrices.</p>
                      <ul>
                        <li>Copious is WP Aliquam ultrices venenatis mauris.</li>
                        <li>Vestibulum industry, logistics</li>
                        <li>Vestibulum ante ipsum primis in that faucibus orci luctus et.</li>
                        <li>industry, logistics, finance, business,</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-12'>
                    <h3 className='m-t-50 m-b-50'>Seafty Wealth</h3>
                  </div>
                  <div className='col-md-6'>

                    <div className='chart-widget'>
                      <div id='chartContainer' style={{height: '210px', width: '100%'}} />
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='chart-widget'>
                      <div id='chartContainer2' style={{height: '210px', width: '100%'}} />
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='chart-widget'>
                      <div id='chartContainer3' style={{height: '210px', width: '100%'}} />
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='chart-widget'>
                      <div id='chartContainer4' style={{height: '210px', width: '100%'}} />
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-12'>
                      <div id='faq' className='faq_box'>
                        <h2>Basic</h2>
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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </li>
                            </ul>
                          </li>

                          <li><a href='#'>Cut expenses without sacrificing quality</a>
                            <ul className='sub-items'>
                              <li>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </li>
                            </ul>
                          </li>

                          <li><a href='#'>Cut expenses without sacrificing quality</a>
                            <ul className='sub-items'>
                              <li>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <h3 className='m-t-50 m-b-50'>Seafty Wealth</h3>
                    <div className='chart-widget'>
                      <div id='chartContainer5' style={{height: '210px', width: '100%'}} />
                      <p>Aliquam ultrices venenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <h3 className='m-t-50 m-b-50'>Business Planning</h3>
                    <div className='project_details_text'>
                      <ul>
                        <li>There are many variations of passages </li>
                        <li>Company and Industry Research</li>
                        <li>Company and Industry Research</li>
                        <li>Industry Research</li>
                        <li>Handful of model sentence structures</li>
                        <li>Plombett – Industry Research</li>
                        <li>Market analysis report “slices”</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='row'>

                  <div className='finance_tab'>

                    <ul className='nav nav-tabs' role='tablist'>
                      <li role='presentation' className='active'><a href='#home' aria-controls='home' role='tab' data-toggle='tab'>Investment</a></li>
                      <li role='presentation'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Growth</a></li>
                      <li role='presentation'><a href='#messages' aria-controls='messages' role='tab' data-toggle='tab'>Risk of Investing</a></li>
                    </ul>

                    <div className='tab-content'>
                      <div role='tabpanel' className='tab-pane active' id='home'>
                        <p>We have over 15 years of experience Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur.</p>
                        <p>Eiusmod tempor xercitationemut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      <div role='tabpanel' className='tab-pane' id='profile'>
                        <p>We have over 15 years of experience Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur.</p>
                        <p>Eiusmod tempor xercitationemut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      <div role='tabpanel' className='tab-pane' id='messages'>
                        <p>We have over 15 years of experience Aliquam ultrices venenatis mauris ante ipsum Vestibulum ante ipsum primis in industry, logistics, finance, business orci Aliquam ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power of consectetur.</p>
                        <p>Eiusmod tempor xercitationemut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='row p-t-90'>
                  <div className='col-md-4 col-sm-4 col-xs-12'>
                    <div className='feature_box'> <i className='icon-thumb-up' />
                      <h3 style={{fontWeight: '500'}}>100% Purity</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-4 col-xs-12'>
                    <div className='feature_box'> <i className='icon-briefcase2' />
                      <h3 style={{fontWeight: '500'}}>Manufacturing</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-4 col-xs-12'>
                    <div className='feature_box'> <i className='icon-alarmclock' />
                      <h3 style={{fontWeight: '500'}}>24 Hours Services</h3>
                      <p>Benenatis mauris. Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris.</p>
                    </div>
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

