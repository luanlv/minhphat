// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
import {Link} from 'react-router'
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
    var isEn = this.props.tree.sourceRequest.host.slice(0, 3) === 'en.'
    return (
      <div >
        {isEn ? (
          <Helmet >
            <title>Home Page</title>
            <meta name='description' content='MINH PHAT Logistics and Packing is a Joint Stock Company, 100% private owned, incorporated in November 2015 with a legal working capital of VND 5,000,000,000..' />
          </Helmet>
          ) : (
          <Helmet >
            <title>Trang chủ</title>
            <meta name='description' content='MINH PHAT LOGISTICS là một công ty cổ phần, 100% vốn đầu tư tư nhân được thành lập vào tháng 11 năm 2015 với số vốn điều lệ khoảng 5 tỷ đồng.' />
          </Helmet>
          )}
        <Slider isEn={isEn} />
        <Service
          services={this.props.tree.services.value}
          isEn={isEn}
        />

        <section id='bg_text' className='bg_3' style={{background: 'url(/assets/images/finance/bg.jpg) no-repeat', backgroundPosition: '50% -224px', backgroundAttachment: 'fixed'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                {isEn ? (
                  <h2>PRODUCTS</h2>
                  ) : (
                  <h2>CÁC SẢN PHẨM CỦA MINH PHÁT</h2>
                  )}
              </div>
            </div>
          </div>
        </section>

        <section id='feature' className='bg_gray feature_slider'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div id='latest_news-slider_1' className=' owl-carousel margin-top-65'>
                  {this.props.tree.products.value.map((product, index) => {
                    return (
                      <div className='item' key={index}>
                        <div className='feature_box'>
                          <i className='fa fa-rebel' />
                          <h3>{product.title}</h3>
                          <p>{product.description}</p>
                        </div>
                      </div>
                    )
                  })}
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
                  {isEn ? (<h2>CORE <span className='color_red'>VALUES</span></h2>) : (<h2>GIÁ TRỊ <span className='color_red'>CỐT LÕI</span></h2>)}
                </div>
              </div>
            </div>
            <div className='row p-t-80'>
              <div id='testimonial-slider' className='owl-carousel text-center'>
                <div className='item wow fadeInDown'>
                  <img src='/assets/images/testinomial.png' alt='partner1' />
                  <h3 className='p-t-15'>hiendv</h3>
                  <p>CEO MINH PHAT LOGISTICS</p>
                  {isEn ? (
                    <div className=' text-center p-t-30'>
                      <p style={{textAlign: 'center'}}>MINH PHAT Logistics and Packing will become the leading company in Logistics, Packaging of goods and project cargo.</p>
                      <p style={{textAlign: 'center'}}><strong>Customer first</strong>: Which is truly beneficial to our customers and partners.</p>
                      <p style={{textAlign: 'center'}}><strong>Team work</strong>: At DDV Logistics, good performance comes only from team work spirit.</p>
                      <p style={{textAlign: 'center'}}>&nbsp;</p>
                    </div>
                    ) : (
                    <div className=' text-center p-t-30'>
                      <p style={{textAlign: 'center'}}>MINH PHAT Logistics and Packing sẽ trở thành công ty hàng đầu trong lĩnh vực Giao nhận, Đóng gói hàng hóa và hàng dự án.</p>
                      <p style={{textAlign: 'center'}}><strong>Khách hàng là trên hết</strong>: Những gì chúng tôi làm chỉ có giá trị khi chúng thật sự có lợi cho khách hàng và đồng nghiệp của chúng tôi</p>
                      <p style={{textAlign: 'center'}}><strong>Làm việc tập thể</strong>: Tại MINH PHAT LOGISTICS, bạn sẽ không có hiệu suất làm việc tốt mà không hợp tác.</p>
                      <p style={{textAlign: 'center'}}>&nbsp;</p>
                    </div>
                    )}
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
                  {isEn ? (<h2><span className='color_red'>Logistics</span> news</h2>) : (<h2>Tin tức <span className='color_red'>Logistics</span></h2>)}
                </div>

                <div id='latest_news-slider' className='owl-carousel p-t-40'>
                  {this.props.tree.posts.value.map((p, index) => {
                    return (
                      <div className='item' key={index}>
                        <div className='latest_box'>
                          <Link to={'/news/' + p.slug}><h3>{p.title}</h3></Link>
                          <p>{p.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  {isEn ? (<p>SEND MESSAGE</p>) : (<p>GỬI YÊU CẦU</p>)}
                </div>
                <div className='p-t-40'>
                  <div className='over_image'><img src='/assets/images/update_bg.png' alt='image' /></div>
                  <div className='updates'>
                    {isEn ? (
                      <p className='color_white'>Form:</p>
                      ) : (
                      <p className='color_white'>Nếu như bạn có yêu cầu gửi đến chúng tôi, xin vui lòng đền vào ô bên dưới.</p>
                      )}
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
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951612.2948679365!2d105.39502362134009!3d21.301707845672603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab3aa4ff09%3A0x18cf4007d7402bef!2sMinh+Ph%C3%A1t+Logistics!5e0!3m2!1sen!2sus!4v149025327486&z=15' height='450' frameBorder='0' style={{border: 0, width: '100%'}} allowFullScreen />

      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

