// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
// import {Link} from 'react-router'

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
            <title>About us</title>
            <meta name='description' content='MINH PHAT LOGISTICS Logistics and Packing sẽ trở thành công ty hàng đầu trong lĩnh vực Giao nhận, Đóng gói hàng và hàng dự án' />
          </Helmet>
          )
          : (
          <Helmet >
            <title>About us</title>
            <meta name='description' content='To be  locally the best service provider in Logistics, Packing and Project Cargo Handling.' />
          </Helmet>
          )}

        <section id='solution' className='p-t-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                {isEn ? (
                  <div className='heading'>
                    <div className='heading_border bg_red' />
                    <h1><span className='color_red'>About Us</span></h1>
                    <p>Some information</p>
                  </div>
                  )
                : (
                  <div className='heading'>
                    <div className='heading_border bg_red' />
                    <h1><span className='color_red'>Giới thiệu</span></h1>
                    <p>Một số thông tin về Minh Phát</p>
                  </div>
                  )}
              </div>
            </div>

            <div className='row'>
              {isEn ? (
                <div className='col-md-7 col-sm-7 col-xs-12'>
                  <div className='row'>
                    <div className='textwidget' style={{padding: 10, fontSize: 16}}>
                      <p>Company Name:<strong>MINH PHAT LOGISTICS VIETNAM JOINT STOCK COMPANY</strong></p>
                      <p>Trading Name : <strong>MINH PHAT LOGISTICS AND PACKING</strong></p>
                      <p>Address: 7th Floor, Song Da 9 Office Building, Pham Hung Street, My Dinh 2 Ward, Nam Tu Liem District, Hanoi City, Vietnam</p>
                      <p>Tel: 84 4 3201 9595</p>
                      <p>Fax: 84 4 3206 9696</p>
                      <p>Email: hiendv@minhphatlogistics.com.vn</p>
                      <p>Minh Phat Logistics and Packing is a Joint Stock Company, 100% private owned, incorporated in November 2015 with a legal working capital of VND 5,000,000,000.</p>
                      <br />
                      <p><strong>Business Acitivities:</strong></p>
                      <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                        <li>Sea and Air Freight</li>
                        <li>Inland Transportation</li>
                        <li>Project Cargo Handling</li>
                        <li>Packing Service</li>
                        <li>Wooden Pallet and carton box</li>
                      </ul>
                    </div>
                  </div>
                </div>
                ) : (
                <div className='col-md-7 col-sm-7 col-xs-12'>
                  <div className='row'>
                    <div className='textwidget' style={{padding: 10, fontSize: 16}}>
                      <p>Tên công ty : <strong>CÔNG TY CỔ PHẦN MINH PHAT  LOGISTICS</strong></p>
                      <p>Tên giao dịch : <strong>MINH PHAT LOGISTICS</strong></p>
                      <p>Địa chỉ: Tầng 7 Tòa nhà Sông Đà 9, Đường Phạm Hùng, Phường Mỹ Đình 2 , Quận Nam Từ Liêm, Hà Nội, Việt Nam</p>
                      <p>Điện thoại: 0432019595</p>
                      <p>Fax: 0432069696</p>
                      <p>Email: hiendv@minhphatlogistics.com.vn</p>
                      <p>MINH PHAT LOGISTICS là một công ty cổ phần, 100% vốn đầu tư tư nhân được thành lập vào tháng 11 năm 2015 với số vốn điều lệ khoảng 5 tỷ đồng.</p>
                      <br />
                      <p><strong>Lĩnh vực hoạt động:</strong></p>
                      <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                        <li>Thủ tục hải quan</li>
                        <li>Vận chuyển quốc tế</li>
                        <li>Vận chuyển nội địa</li>
                        <li>Vận chuyển Bắc Nam</li>
                        <li>Nâng hạ máy móc, hàng dự án</li>
                        <li>Đóng gói hàng hóa</li>
                        <li>Sản xuất pallet gỗ và carton</li>
                      </ul>
                    </div>
                  </div>
                </div>
                )}
              <div className='col-md-5 col-sm-5 col-xs-12'>
                <div className='finance_about_page'>
                  <img src='/assets/img/gioi_thieu1.jpg' alt='image' className='img-responsive' />
                </div>
              </div>
            </div>
            <div className='row' style={{marginTop: 40}}>
              <div className='col-md-5 col-sm-5 col-xs-12'>
                <div className='finance_about_page'>
                  <img src='/assets/img/gioi_thieu2.jpg' alt='image' className='img-responsive' />
                </div>
              </div>

              <div className='col-md-7 col-sm-7 col-xs-12'>
                <div className='row'>
                  {isEn ? (
                    <div className='textwidget' style={{padding: 10, fontSize: 16}}>
                      <p><strong>Vision:</strong> To be  locally the best service provider in Logistics, Packing and Project Cargo Handling.</p>
                      <br />
                      <p><strong>Mission</strong>:</p>
                      <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                        <li>For customers: To be the preferred and most trusted logistics partner of our customers,providing them with quality products and services through a personalized and tailored solution</li>
                        <li>For employees: To develop a professional, dynamic, creative and human working environment, enabling equal development opportunities to all employees</li>
                        <li>For environment: To contribute to the environment protection by using material which is recycled, reused and friendly to the environment</li>
                      </ul>
                      <br />
                      <p><strong>Core Value: </strong></p>
                      <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                        <li><strong>Customer first</strong><strong>:&nbsp;</strong>which is truly beneficial to our customers and partners.</li>
                        <li><strong>Team work</strong><strong>:&nbsp;</strong>At Minh Phat Logistics, good performance comes only from team work spirit .</li>
                      </ul>
                      <br />
                    </div>
                    )
                  : (
                    <div className='textwidget' style={{padding: 10, fontSize: 16}}>
                      <p><strong>Tầm nhìn:</strong> MINH PHAT  LOGISTICS Logistics and Packing sẽ trở thành công ty hàng đầu trong lĩnh vực Giao nhận, Đóng gói hàng và hàng dự án</p>
                      <br />
                      <p><strong>Sứ mệnh</strong>:</p>
                      <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                        <li>Đối với khách hàng: trở thành đối tác ưa thích và đáng tin cậy nhất trong lĩnh vực Logistics, cung cấp cho khách hàng chất lượng sản phẩm và dịch vụ tốt nhất thông qua việc lấy một mối quan hệ cá nhân/khách hàng làm trung tâm.</li>
                        <li>Đối với nhân viên: Phát triển một môi trường làm việc chuyên nghiệp, năng động, sáng tạo và nhân văn, tạo điều kiện cho thu nhập cao và cơ hội phát triển bình đẳng cho tất cả nhân viên</li>
                        <li>Đối với môi trường: góp phần bảo vệ môi trường bằng cách sử dụng vật liệu tái chế, tái sử dụng và thân thiện với môi trường</li>
                      </ul>
                      <br />
                      <p><strong>Giá trị cốt lõi: </strong></p>
                      <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                        <li><strong>Khách hàng là trên hết</strong><strong>:&nbsp;</strong>Những gì chúng tôi làm chỉ có giá trị khi chúng thật sự có lợi cho khách hàng và đồng nghiệp của chúng tôi</li>
                        <li><strong>Làm việc tập thể</strong><strong>:&nbsp;</strong>Tại MINH PHAT  LOGISTICS, bạn sẽ không có hiệu suất làm việc tốt mà không hợp tác.</li>
                      </ul>
                      <br />
                    </div>
                    )}
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

