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
                <h2>CÁC SẢN PHẨM CỦA MINH PHÁT</h2>
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
                      <h3>Carton</h3>
                      <p>MINH PHAT  LOGISTICS sở hữu đội ngũ nhân viên chứng từ chuyên nghiệp trong việc khai báo hải quan, làm thủ tục và xin các giấy phép, chứng nhận theo quy định của nhà nước. Các dịch vụ cụ thể như sau: …</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-presentation-4' />
                      <h3>PALLET GỖ</h3>
                      <p>MINH PHAT  LOGISTICS Logistics and Packing có một xưởng gỗ đặt tại Tiên Du, Bắc Ninh để phục vụ cho việc đóng kiện hàng hóa và sản xuất pallet gỗ. Pallet gỗ đảm bảo yêu cầu là gỗ khô, được hun trùng trước …</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='feature_box'>
                      <i className='icon-website' />
                      <h3>VẬT LIỆU ĐÓNG GÓI</h3>
                      <p>MINH PHAT  LOGISTICS Logistics and Packing cung cấp các loại vật liệu đóng gói hàng hóa, đặc biệt là dành cho xuất khẩu như: – Màng co PE – Túi chống ẩm – Dây hút ẩm trong container – Giấy bạc hút chân không …</p>
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
                  <h2>GIÁ TRỊ <span className='color_red'>CỐT LÕI</span></h2>
                </div>
              </div>
            </div>
            <div className='row p-t-80'>
              <div id='testimonial-slider' className='owl-carousel text-center'>
                <div className='item wow fadeInDown'>
                  <img src='/assets/images/testinomial.png' alt='partner1' />
                  <h3 className='p-t-15'>hiendv</h3>
                  <p>CEO MINH PHAT LOGISTICS</p>
                  <div className=' text-center p-t-30'>
                    <p style={{textAlign: 'center'}}>MINH PHAT LOGISTICS Logistics and Packing sẽ trở thành công ty hàng đầu trong lĩnh vực Giao nhận, Đóng gói hàng hóa và hàng dự án.</p>
                    <p style={{textAlign: 'center'}}><strong>Khách hàng là trên hết</strong>: Những gì chúng tôi làm chỉ có giá trị khi chúng thật sự có lợi cho khách hàng và đồng nghiệp của chúng tôi</p>
                    <p style={{textAlign: 'center'}}><strong>Làm việc tập thể</strong>: Tại MINH PHAT LOGISTICS, bạn sẽ không có hiệu suất làm việc tốt mà không hợp tác.</p>
                    <p style={{textAlign: 'center'}}>&nbsp;</p>
                  </div>
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
                  <p>GỬI YÊU CẦU</p>
                </div>
                <div className='p-t-40'>
                  <div className='over_image'><img src='/assets/images/update_bg.png' alt='image' /></div>
                  <div className='updates'>
                    <p className='color_white'>Nếu như bạn có yêu cầu gửi đến chúng tôi, xin vui lòng đền vào ô bên dưới. </p>
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

