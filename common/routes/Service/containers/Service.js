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
                    <li className='active'><a href='services.html'>Tất cả các dịch vụ</a></li>
                    <li><a href='services.html'>Thủ tục hải quan</a></li>
                    <li><a href='services.html'>Vận chuyển hàng không</a></li>
                    <li><a href='services.html'>Vận chuyển đường biển</a></li>
                    <li><a href='services.html'>Vận chuyển Bắc Nam</a></li>
                    <li><a href='services.html'>Nâng hạ máy móc và hàng dự án</a></li>
                    <li><a href='services.html'>Đóng kiện gỗ</a></li>
                  </ul>
                </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>

                <div className='row'>

                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/thu_tuc_hai_quan.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>THỦ TỤC HẢI QUAN</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        MINH PHAT  LOGISTICS sở hữu đội ngũ nhân viên chứng từ chuyên nghiệp trong việc khai báo hải quan, làm thủ tục và xin các giấy phép, chứng nhận theo quy định của nhà nước...
                      </p>
                      <a className='btn pull-right' href='news_details.html'>Xem thêm</a>
                    </div>
                  </div>

                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/van_chuyen_hang_khong.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>VẬN CHUYỂN HÀNG KHÔNG</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        MINH PHAT  LOGISTICS là đại lý của các hãng hàng không Vietnam Airlines, Singapore Airlines, China Airline, Asiana Airlines, Qatar Airlines,…
                      </p>
                      <a className='btn pull-right' href='news_details.html'>Xem thêm</a>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/van_chuyen_duong_bien.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>VẬN CHUYỂN ĐƯỜNG BIỂN</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        Với hệ thống đại lý là các master consolidator hàng đầu tại các cảng chuyển tải, MINH PHAT  LOGISTICS cung cấp dịch vụ LCL an toàn, hiệu quả ...
                      </p>
                      <a className='btn pull-right' href='news_details.html'>Xem thêm</a>
                    </div>
                  </div>

                </div>
                <div className='row'>
                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/van_chuyen_bac_nam.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>VẬN CHUYỂN BẮC NAM</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        Đáp ứng nhu cầu vận chuyển hàng hoá ngày một lớn giữa các doanh nghiệp ở hai miền Nam – Bắc, MINH PHAT  LOGISTICS xây dựng sản phẩm dịch vụ door – door hàng lẻ (consol) trực tiếp hàng tuần, ...
                      </p>
                      <a className='btn pull-right' href='news_details.html'>Xem thêm</a>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/nang_ha.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>NÂNG HẠ MÁY MÓC VÀ HÀNG DỰ ÁN</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        MINH PHAT  LOGISTICS đang sở hữu các loại xe nâng, xe cẩu và xe cẩu tự hành và các trang thiết bị hiện đại. Bên cạnh đó là đội ngũ nhân viên lành nghề, nhiệt huyết cùng các chuyên gia giàu ...
                      </p>
                      <a className='btn pull-right' href='news_details.html'>Xem thêm</a>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/dong_kien_go.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>ĐÓNG KIỆN GỖ</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        Thế mạnh cạnh tranh của MINH PHAT  LOGISTICS so với các công ty forwarder khác đó là cung cấp dịch vụ đóng gói hàng hóa...
                      </p>
                      <a className='btn pull-right' href='news_details.html'>Xem thêm</a>
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

