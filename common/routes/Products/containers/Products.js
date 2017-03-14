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
                    <li className='active'><a href='#'>Tất cả các dịch vụ</a></li>
                    <li><a href='#'>CARTON</a></li>
                    <li><a href='#'>PALLET GỖ</a></li>
                    <li><a href='#'>VẬT LIỆU ĐÓNG GÓI</a></li>
                  </ul>
                </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>
                <div className='row'>

                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/san_pham1.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>CARTON</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        DDV sở hữu đội ngũ nhân viên chứng từ chuyên nghiệp trong việc khai báo hải quan, làm thủ tục và xin các giấy phép, chứng nhận theo quy định của nhà nước. Các dịch vụ cụ thể như sau: …
                      </p>
                      <a className='btn pull-right' href='#'>Xem thêm</a>
                    </div>
                  </div>

                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/san_pham2.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>PALLET GỖ</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        DDV Logistics and Packing có một xưởng gỗ đặt tại Tiên Du, Bắc Ninh để phục vụ cho việc đóng kiện hàng hóa và sản xuất pallet gỗ. Pallet gỗ đảm bảo yêu cầu là gỗ khô, được hun trùng …
                      </p>
                      <a className='btn pull-right' href='#'>Xem thêm</a>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-4 col-xs-6'>
                    <div className='latest_page_box'>
                      <div className='news_image' style={{marginBottom: 15}}>
                        <img src='/assets/img/san_pham3.jpg' alt='image' />
                      </div>
                      <h3 style={{marginBottom: 5, fontWeight: 'bold'}}>VẬT LIỆU ĐÓNG GÓI</h3>
                      <p className='m-b-30' style={{fontSize: 14, margin: 5}}>
                        DDV Logistics and Packing cung cấp các loại vật liệu đóng gói hàng hóa, đặc biệt là dành cho xuất khẩu như: – Màng co PE – Túi chống ẩm – Dây hút ẩm trong container – Giấy bạc hút chân không …
                      </p>
                      <a className='btn pull-right' href='#'>Xem thêm</a>
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

